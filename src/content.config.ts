import { defineCollection, z } from "astro:content"
import { glob } from "astro/loaders"
import { fileURLToPath } from "node:url"
import path from "node:path"

const __dirname = path.dirname(fileURLToPath(import.meta.url))

const thoughts = defineCollection({
	loader: glob({
		pattern: "**/*.md",
		base: path.join(__dirname, "thoughts"),
	}),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		reading_time: z.string(),
		date: z.string(),
	}),
})

export const collections = { thoughts }
