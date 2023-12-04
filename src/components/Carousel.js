import { Image } from "@chakra-ui/react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

// If you want to use your own Selectors look up the Advancaed Story book examples
export default function Slider({ urlSet }) {
	return (
		<Carousel
			dynamicHeight={false}
			centerMode={true}
			showThumbs={true}
			infiniteLoop
		>
			{urlSet.map((url, idx) => {
				return (
					<Image key={idx} src={url} height="auto" width="800px" />
				);
			})}
		</Carousel>
	);
}
