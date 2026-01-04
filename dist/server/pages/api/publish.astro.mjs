export { renderers } from '../../renderers.mjs';

const POST = async ({ request, cookies }) => {
  const accessToken = cookies.get("tk_access_token")?.value;
  if (!accessToken) {
    return new Response(JSON.stringify({ error: "Unauthorized: No access token found" }), {
      status: 401,
      headers: { "Content-Type": "application/json" }
    });
  }
  try {
    const formData = await request.formData();
    const videoFile = formData.get("video");
    const caption = formData.get("caption");
    const privacy = formData.get("privacy");
    if (!videoFile) {
      return new Response(JSON.stringify({ error: "No video file provided" }), { status: 400 });
    }
    const initResponse = await fetch("https://open.tiktokapis.com/v2/post/publish/video/init/", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${accessToken}`,
        "Content-Type": "application/json; charset=UTF-8"
      },
      body: JSON.stringify({
        post_info: {
          title: caption,
          privacy_level: privacy,
          disable_duet: false,
          disable_stitch: false,
          disable_comment: false,
          video_label: "ORIGINAL_CONTENT"
        },
        source_info: {
          source: "FILE_UPLOAD",
          video_size: videoFile.size,
          chunk_size: videoFile.size,
          // 简化处理，假设一次性上传（TikTok 建议 5MB - 64MB 的分片，这里假设视频不大）
          total_chunk_count: 1
        }
      })
    });
    const initData = await initResponse.json();
    if (!initResponse.ok) {
      if (initData.error?.code === "access_token_invalid" || initResponse.status === 401) {
        return new Response(JSON.stringify({ error: "Token expired", code: "AUTH_REQUIRED" }), { status: 401 });
      }
      return new Response(JSON.stringify({ error: initData.error?.message || "Failed to initialize publish" }), { status: initResponse.status });
    }
    const { upload_url, publish_id } = initData.data;
    const videoBuffer = await videoFile.arrayBuffer();
    const uploadResponse = await fetch(upload_url, {
      method: "PUT",
      headers: {
        "Content-Type": "video/mp4",
        "Content-Length": videoFile.size.toString()
      },
      body: videoBuffer
    });
    if (!uploadResponse.ok) {
      const uploadError = await uploadResponse.text();
      return new Response(JSON.stringify({ error: "Video upload failed", details: uploadError }), { status: 500 });
    }
    return new Response(JSON.stringify({
      message: "Upload successful",
      publish_id
    }), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } catch (error) {
    console.error("Publish error:", error);
    return new Response(JSON.stringify({ error: error.message || "Internal Server Error" }), { status: 500 });
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
