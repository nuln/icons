export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.pathname === '/icons') {
      url.pathname = '/icons/';
      return Response.redirect(url.toString(), 301);
    }
    let subPath = url.pathname.replace(/^\/icons/, '') || '/';
    const newUrl = new URL(url);
    newUrl.pathname = subPath;
    let res = await env.ASSETS.fetch(new Request(newUrl, request));
    if (res.status === 404 && !subPath.startsWith('/icons/')) {
      newUrl.pathname = '/icons' + subPath;
      res = await env.ASSETS.fetch(new Request(newUrl, request));
    }
    return res;
  }
};
