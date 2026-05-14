export default function Nav() {
	const NAV_URLS: Record<string, string> = {
		"/": "/",
		"/main": "https://lepichudoes.deno.dev/",
		"/contact": "https://instagram.com/lepichudoesdev",
	}

	return (
		<nav class="grid grid-cols-3 gap-4 font-mono">
			{Object.entries(NAV_URLS).map(([k, v]) => (
				<a
					href={v}
					class="p-4 bg-neutral-50 hover:bg-neutral-100 border border-neutral-300"
				>
					{k}
				</a>
			))}
		</nav>
	)
}
