import Image from 'next/image'

export default function ButtonSection({ text, isPrev }) {
	return (
		<>
			<div className="flex flex-col align-center justify-center">
				{isPrev && (
					<div className="flex w-full mx-auto justify-center mt-8 mb-2 animate-bounce">
						<Image
							src="/prtfolio/icons/downArrow.svg"
							width={20}
							height={20}
							className="rotate-180"
						/>
					</div>
				)}
				<span>{text}</span>
				{!isPrev && (
					<div className="flex w-full mx-auto justify-center mt-3 animate-bounce">
						<Image
							src="/prtfolio/icons/downArrow.svg"
							alt=""
							width={20}
							height={20}
						/>
					</div>
				)}
			</div>
		</>
	)
}
