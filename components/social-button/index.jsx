import Image from 'next/image'

export default function SocialButton({ bg, bgLofi, href, isLofi, isProyect }) {
	const backgroundUrl = isLofi ? bgLofi : bg
	return (
		<>
			<a href={href} target="_blank">
				<div
					className={`w-10 h-10 ${
						isProyect ? 'md:w-10 md:h-10' : 'md:w-16 md:h-16'
					} rounded-2xl`}>
					<Image
						width={100}
						height={100}
						src={backgroundUrl}
						alt={href}
					/>
				</div>
			</a>
		</>
	)
}
