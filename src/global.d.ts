declare module "@carbon/icons/es/*" {
	const icon: {
		elem: string
		attrs: Record<string, string>
		content: {
			elem: string
			attrs: Record<string, string>
			// deno-lint-ignore no-explicit-any
			content: any[]
		}[]
		name: string
		size: number
	}
	export default icon
}
