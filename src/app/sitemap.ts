import { MetadataRoute } from "next"
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    return [
        {
            url: `https://slova-po-russki.ru`,
            priority: 1,
        },
    ]
}