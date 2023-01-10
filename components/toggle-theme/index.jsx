export default function ToggleTheme({ callback }) {
	return (
		<>
			<div className="flex items-center justify-center w-full mb-12">
				<label
					htmlFor="toggle"
					className="flex items-center cursor-pointer">
					<div className="mr-3 text-gray-700 font-medium text-xs md:text-lg">
						Hi-fi
					</div>

					<div className="relative">
						<input
							type="checkbox"
							id="toggle"
							className="sr-only"
							onClick={callback}
						/>
						<div className="block bg-[#B4AAF1] w-6 h-4 md:w-14 md:h-8 rounded-full"></div>
						<div className="dot absolute left-1 top-1 bg-white w-2 h-2 md:w-6 md:h-6 rounded-full transition"></div>
					</div>
					<div className="ml-3 text-gray-700 font-medium text-xs md:text-lg">
						Low-fi
					</div>
				</label>
			</div>
		</>
	)
}
