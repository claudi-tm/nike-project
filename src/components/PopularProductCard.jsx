import { star } from "../assets/icons";
export default function PopularProductCard({ imgURL, name, price }) {
	return (
		<div className="flex flex-1 flex-col w-full max-sm:w-full">
			<img src={imgURL} alt={name} className="w-[280px] h-[280px]" />
			<div className="mt-8 flex justify-start items-center gap-2.5">
				<img src={star} alt="star" width={24} height={24} />
				<p className="font-montserrat text-xl leading-normal text-slate-gray">
					(4.5)
				</p>
			</div>
			<p className="mt-2 text-2xl leading-normal font-semibold font-palanquin">{name}</p>
			<p className="mt-2 font-semibold font-montserrat text-2xl leading-normal text-coral-red">{price}</p>
		</div>
	);
}

// TO-DO :
// Create a link that leads to the product detailed page by click