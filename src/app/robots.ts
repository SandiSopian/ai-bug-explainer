export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://ai-bug-explainer-teal.vercel.app/sitemap.xml",
  };
}
