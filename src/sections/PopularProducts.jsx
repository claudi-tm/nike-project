import { star } from "../assets/icons";
import { products } from "../constants";

export default function PopularProducts() {
	return (
		<section id="products" className="max-container max-sm:mt-12">
			<div className="flex flex-col justify-start gap-5">
				<h2 className="text-4xl font-palanquin font-bold">
					Our <span className="text-coral-red">Popular</span> Products
				</h2>
				<p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm">
					Experince top-notch quality and style with our sought after{" "}
					<br /> selections. Discover a world of comfort, design and
					value.
				</p>
			</div>

			<div className="flex gap-5">
				{products.map((product) => (
					<div key={product.name} className="">
						<img src={product.imgURL} alt={product} />
						<img
							src={star}
							alt="star"
							className="object-contain mt-2"
						/>
						<p className="font-bold">{product.name}</p>
						<p className="font-bold text-coral-red">
							{product.price}
						</p>
					</div>
				))}
			</div>
		</section>
	);
}
