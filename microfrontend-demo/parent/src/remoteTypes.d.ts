///<reference types="react" />

declare module "spotify/song-seeker" { }

declare module "microfrontend2/app" {
	import { ComponentType } from "react";
	interface Props {}
	const MicrofrontendTwo: ComponentType<Props>;
	export default MicrofrontendTwo;
}
