export default function Button({ iconURL, label, type }) {
	return (
		<button
			className={`flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none rounded-full ${
				type === "primary"
					? "bg-coral-red text-white border-coral-red"
					: "bg-transparent text-slate-gray  border-slate-gray"
			}  `}
		>
			{label}{" "}
			{iconURL && (
				<img
					src={iconURL}
					alt="arrow_left"
					className="ml-2 rounded-full w-5 h-5"
				/>
			)}
		</button>
	);
}
