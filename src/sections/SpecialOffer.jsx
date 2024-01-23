import { arrowRight } from "../assets/icons";
import { offer } from "../assets/images";
import Button from "../components/Button";

export default function SpecialOffer() {
	return (
		<section className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10  max-container ">
			<div className="flex-1 ">
				<img
					src={offer}
					alt="offer"
					width={773}
					height={687}
					className="object-contain w-full"
				/>
			</div>
			<div className="flex flex-1 flex-col">
				<h2 className="text-4xl font-bold ">
					<span className="text-coral-red">Special</span> Offer
				</h2>
				<p className="font-montserrat text-lg leading-normal text-slate-gray mt-5">
					Embark on a shopping journey that redefines your experience
					with unbeatable deals. From premier selections to incredible
					savings, we offer unparalled value that sets us apart
				</p>
				<p className="font-montserrat text-lg leading-normal text-slate-gray mt-5">
					Navivate a real of possibilities designed to fulfill your
					unique desires, surpassing the loftiest expectations. Your
					journey with us is nothing short of exceptional
				</p>
				<div className="flex flex-wrap gap-4 mt-11">
					<Button
						label={"Shop now"}
						type={"primary"}
						iconURL={arrowRight}
					/>
					<Button label={"Learn more"} />
				</div>
			</div>
		</section>
	);
}
