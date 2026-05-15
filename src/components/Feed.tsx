// deno-lint-ignore-file no-explicit-any
import { createMemo, createSignal, For, Show } from "solid-js"
import Fuse from "fuse.js"
import SearchIcon from "@carbon/icons/es/search/20.js"
import CloseIcon from "@carbon/icons/es/close/20.js"

function CarbonIcon(props: { icon: any; class?: string }) {
	const { width, height, viewBox } = props.icon.attrs
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={width}
			height={height}
			viewBox={viewBox}
			fill="currentColor"
			class={props.class}
			aria-hidden="true"
		>
			<For each={props.icon.content}>
				{(node: any) => <path d={node.attrs.d} />}
			</For>
		</svg>
	)
}

export interface ThoughtMeta {
	id: string
	title: string
	description: string
	reading_time: string
	date: string
}

export default function ThoughtsFeed(props: { thoughts: ThoughtMeta[] }) {
	const [query, setQuery] = createSignal("")

	const fuse = new Fuse(props.thoughts, {
		keys: ["title", "description"],
		threshold: 0.35,
		includeScore: true,
	})

	const results = createMemo(() => {
		const q = query().trim()
		if (!q) return props.thoughts
		return fuse.search(q).map((r) => r.item)
	})

	return (
		<div class="font-serif flex flex-col gap-4">
			<div class="flex items-center gap-4 p-4 border border-neutral-300">
				<CarbonIcon
					icon={SearchIcon}
					class="text-neutral-400 shrink-0 [&_svg]:w-5 [&_svg]:h-5 [&_svg]:fill-current"
				/>
				<input
					type="text"
					placeholder="Search thoughts..."
					value={query()}
					onInput={(e) => setQuery(e.currentTarget.value)}
					class="flex-1 min-w-0 text-base outline-none placeholder:text-neutral-400 text-neutral-900 bg-transparent"
				/>
				<Show when={query()}>
					<button
						type="button"
						onClick={() => setQuery("")}
						class="text-neutral-400 hover:text-neutral-700 transition-colors shrink-0"
						aria-label="Clear search"
					>
						<CarbonIcon
							icon={CloseIcon}
							class="[&_svg]:w-4 [&_svg]:h-4 [&_svg]:fill-current"
						/>
					</button>
				</Show>
			</div>

			<Show when={query()}>
				<p class="text-sm text-neutral-400 font-mono">
					{results().length} result{results().length !== 1 ? "s" : ""}{" "}
					for "{query()}"
				</p>
			</Show>

			<div class="flex flex-col divide-y divide-neutral-200 gap-4">
				<For
					each={results()}
					fallback={
						<div class="p-8 text-center text-neutral-400 text-base w-full border border-neutral-300">
							No thoughts match "{query()}"
						</div>
					}
				>
					{(thought) => (
						<a
							href={`/thoughts/${thought.id}`}
							class="group flex flex-col gap-2 p-6 border border-neutral-300 hover:bg-neutral-100 transition-colors"
						>
							<div class="flex items-start justify-between gap-6">
								<h2 class="text-lg font-semibold text-neutral-900 group-hover:text-black transition-colors leading-snug">
									{thought.title}
								</h2>
							</div>
							<p class="text-base text-neutral-600 leading-relaxed">
								{thought.description}
							</p>
							<div>
								<span class="text-sm text-neutral-400 font-['IBM_Plex_Mono',monospace]">
									Reading time of {thought.reading_time}, published on{" "}
									{thought.date}.
								</span>
							</div>
						</a>
					)}
				</For>
			</div>
		</div>
	)
}
