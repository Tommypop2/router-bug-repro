import { Title } from "@solidjs/meta";
import { getRequestEvent, isServer } from "solid-js/web";

export default function Home() {
	const href = isServer ? getRequestEvent()?.request.url : window.location.href;
	return (
		<main>
			<Title>About</Title>
			<h1>About</h1>
			<p>Href {href}</p>
		</main>
	);
}
