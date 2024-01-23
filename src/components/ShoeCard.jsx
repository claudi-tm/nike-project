export default function ShoeCard({ imgURL, changeBigShoeImage, bigShoeImg }) {
	function handleClick() {
		if (bigShoeImg !== imgURL.bigShoe) {
			changeBigShoeImage(imgURL.bigShoe);
		}
	}
	return (
		<div
			role="button"
			tabIndex="0"
			onClick={handleClick}
			className={`border-2 rounded-xl ${
				bigShoeImg === imgURL.bigShoe
					? "border-coral-red"
					: "border-transparent"
			} cursor-pointer max-sm:flex-1`}
		>
			<div className="flex justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4">
				<img
					src={imgURL.thumbnail}
					alt="sneakers"
					width={127}
					height={103}
					className="object-contain"
				/>
			</div>
		</div>
		// <input type="button" value="sss" />
	);
}
