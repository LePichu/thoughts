import Nav from "./Nav"

export default function Header() {
	return (
		<header class="p-4 flex items-center justify-center w-full">
			<div class="w-full md:w-3xl md:mx-auto">
				<Nav />
			</div>
		</header>
	)
}
