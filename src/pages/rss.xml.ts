import rss from "@astrojs/rss"
import { getCollection } from "astro:content"
import type { APIRoute } from "astro"

function parseDate(dateStr: string): Date {
	const [day, month, year] = dateStr.split("-").map(Number)
	return new Date(year, month - 1, day)
}

export const GET: APIRoute = async (context) => {
	const thoughts = (await getCollection("thoughts")).sort(
		(a, b) =>
			parseDate(b.data.date).getTime() - parseDate(a.data.date).getTime(),
	)

	return rss({
		title: "thoughts",
		description: "A collection of thoughts.",
		site: context.site!,
		items: thoughts.map((thought) => ({
			title: thought.data.title,
			description: thought.data.description,
			pubDate: parseDate(thought.data.date),
			link: `/thoughts/${thought.id}/`,
		})),
	})
}
