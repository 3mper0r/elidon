interface Env {
  ASSETS: {
    fetch(request: Request): Promise<Response>;
  };
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);

    if (url.pathname === "/challenges" || url.pathname === "/challenges/") {
      const country = (request as Request & { cf?: { country?: string } }).cf
        ?.country;
      const locale = country === "DE" ? "de" : "en";

      url.pathname = `/${locale}/challenges`;
      return new Response(null, {
        status: 302,
        headers: {
          Location: url.toString(),
          "Cache-Control": "no-store",
        },
      });
    }

    return env.ASSETS.fetch(request);
  },
};
