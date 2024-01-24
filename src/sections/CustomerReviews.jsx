import { reviews } from "../constants";
import ReviewCard from '../components/ReviewCard'

export default function CustomerReviews() {
	return (
		<section className="max-container">
			<h3 className="font-palanquin text-center text-4xl font-bold">
				What Our <span className="text-coral-red">Customers</span> Say?
			</h3>
			<p className="mt-4 info-text m-auto max-w-lg text-center">
				Hear genuine stories from our satisfied customers about their
				exceptional experiences with us.
			</p>
			<div className="mt-24 flex flex-1 flex-col justify-evenly items-center max-lg:flex-col gap-14 ">
				{reviews.map((review) => (
					<ReviewCard key={ review.customerName } {...review} />
				))}
			</div>
		</section>
	);
}
