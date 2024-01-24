import { star } from "../assets/icons";

export default function ReviewCard({ customerName, feedback, rating, imgURL }) {
	return (
		<div className="flex flex-col justify-center items-center">
			<img
				src={imgURL}
				alt=""
				width={120}
				height={120}
				className="rounded-full object-cover"
			/>
			<p className="mt-6 max-w-sm text-center info-text ">{feedback}</p>

			<div className="flex items-center justify-center h-full gap-2.5">
				<img
					src={star}
					alt="star"
					width={24}
					height={24}
					className="object-contain m-0"
				/>
				<p className="text-xl font-montserrat text-slate-gray">({rating})</p>
			</div>
			<p className=" mt-1 font-bold text-3xl text-center font-palanquin">{customerName}</p>
		</div>
	);
}
