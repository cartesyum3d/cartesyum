const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://www.cartesyum.com.br";

export const dynamic = "force-static";

export default function sitemap() {
  const routes = ["", "servicos", "sobre", "portfolio", "faq"].map((path) => ({
    url: path ? `${BASE_URL}/${path}` : BASE_URL,
    lastModified: new Date(),
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : 0.8,
  }));

  return routes;
}
