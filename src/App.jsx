import Navbar from "./components/Navbar";
import {
	CustomerReviews,
	Footer,
	Hero,
	PopularProducts,
	Services,
	SpecialOffer,
	SuperQuality,
} from "./sections";
import Subscribe from "./sections/Subscribe";

export default function App() {
	return (
		<main className="relative">
			<Navbar />
			<section className="xl:padding-l wide:padding-r padding-b">
				<Hero />
			</section>
			<section className="padding ">
				<PopularProducts />
			</section>
			<section className="padding ">
				<SuperQuality />
			</section>
			<section className="padding padding-x py-10">
				<Services />
			</section>
			<section className="padding ">
				<SpecialOffer />
			</section>
			<section className="padding bg-pale-blue">
				<CustomerReviews />
			</section>
			<section className="padding-x sm:py-32 py-16 w-full ">
				<Subscribe/>
			</section>
			<section className="padding bg-black padding-x padding-t pb-8">
				<Footer/>
			</section>
		</main>
	);
}
