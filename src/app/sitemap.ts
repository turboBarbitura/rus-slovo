import { MetadataRoute } from "next"

export const revalidate = 100000
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    return [
        {
            url: `https://рус-слово.рф`,
            priority: 1,
        },

    ]
}
