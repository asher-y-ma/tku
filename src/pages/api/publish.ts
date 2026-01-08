import type { APIRoute } from 'astro';

export const POST: APIRoute = async ({ request, cookies }) => {
  const accessToken = cookies.get('tk_access_token')?.value;

  if (!accessToken) {
    return new Response(JSON.stringify({ error: 'Unauthorized: No access token found' }), {
      status: 401,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  try {
    const formData = await request.formData();
    const videoFile = formData.get('video') as File;
    const caption = formData.get('caption') as string;
    const privacy = formData.get('privacy') as string;

    if (!videoFile) {
      return new Response(JSON.stringify({ error: 'No video file provided' }), { status: 400 });
    }

    // Step 1: Initialize publish task
    const PUBLISH_INIT_ENDPOINT = 'https://open.tiktokapis.com/v2/post/publish/video/init/';
    const initResponse = await fetch(PUBLISH_INIT_ENDPOINT, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'Content-Type': 'application/json; charset=UTF-8'
      },
      body: JSON.stringify({
        post_info: {
          title: caption,
          privacy_level: privacy,
          disable_duet: false,
          disable_stitch: false,
          disable_comment: false,
          video_label: 'ORIGINAL_CONTENT'
        },
        source_info: {
          source: 'FILE_UPLOAD',
          video_size: videoFile.size,
          chunk_size: videoFile.size, // Assuming single chunk upload for simplicity
          total_chunk_count: 1
        }
      })
    });

    const initData = await initResponse.json();

    if (!initResponse.ok) {
      // 检查是否是 Token 过期
      if (initData.error?.code === 'access_token_invalid' || initResponse.status === 401) {
        return new Response(JSON.stringify({ error: 'Token expired', code: 'AUTH_REQUIRED' }), { status: 401 });
      }
      return new Response(JSON.stringify({ error: initData.error?.message || 'Failed to initialize publish' }), { status: initResponse.status });
    }

    const { upload_url, publish_id } = initData.data;

    // 第二步：使用 PUT 请求上传视频流
    const videoBuffer = await videoFile.arrayBuffer();
    const uploadResponse = await fetch(upload_url, {
      method: 'PUT',
      headers: {
        'Content-Type': 'video/mp4',
        'Content-Length': videoFile.size.toString()
      },
      body: videoBuffer
    });

    if (!uploadResponse.ok) {
      const uploadError = await uploadResponse.text();
      return new Response(JSON.stringify({ error: 'Video upload failed', details: uploadError }), { status: 500 });
    }

    // 第三步：返回成功状态
    return new Response(JSON.stringify({
      message: 'Upload successful',
      publish_id: publish_id
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });

  } catch (error: any) {
    console.error('Publish error:', error);
    return new Response(JSON.stringify({ error: error.message || 'Internal Server Error' }), { status: 500 });
  }
};
