import { motion } from 'framer-motion'
import Head from 'next/head'
import ProyectInfo from '../proyect-info'
import SocialButton from '../social-button'
import ButtonSection from '../button-section'

export default function SectionItem({
	id,
	title,
	content,
	duration,
	typeOfWork,
	role,
	imageSrc,
	isImageInRight,
	figmaLink,
	mediumLink,
	behanceLink,
	externalLink,
	prevProyect,
	prevProyectHref,
	nextProyect,
	nextProyectHref
}) {
	return (
		<>
			<Head>
				<title>Proyectos UI/UX</title>
			</Head>
			<div id={id} className="h-[10dvh] flex snap-center">
				<motion.div
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					transition={{ duration: 1 }}
					className="w-full relative flex justify-center items-start -mt-3">
					{prevProyect && (
						<a href={prevProyectHref}>
							<ButtonSection text={prevProyect} isPrev="true" />
						</a>
					)}
				</motion.div>
			</div>
			<motion.section
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				transition={{ duration: 1 }}
				className="h-[80dvh]">
				<div className="md:hidden flex h-[80dvh] flex-col items-center mx-8">
					<div className="w-40 h-40 md:w-[40vw] md:h-[40vw] my-5">
						<div
							style={{
								backgroundImage: `url(${imageSrc})`
							}}
							className={`w-full h-full bg-cover bg-center rounded-3xl shadow-2xl`}></div>
					</div>
					<div className="w-full text-center mb-4">
						<span className="font-serif text-4xl">{title}</span>
					</div>
					<div className="w-full">
						<ProyectInfo
							duration={duration}
							typeOfWork={typeOfWork}
							role={role}
						/>
						<p className="mt-3 text-sm">{content}</p>
						<div className="flex flex-row justify-center gap-4 mt-4">
							{mediumLink && (
								<SocialButton
									bg="/prtfolio/icons/Medium.svg"
									href={mediumLink}
								/>
							)}
							{figmaLink && (
								<SocialButton
									bg="/prtfolio/icons/Figma.svg"
									href={figmaLink}
								/>
							)}
							{behanceLink && (
								<SocialButton
									bg="/prtfolio/icons/Behance.svg"
									href={behanceLink}
									isProyect
								/>
							)}
							{externalLink && (
								<SocialButton
									bg="/prtfolio/icons/Link2.svg"
									href={externalLink}
									isProyect
								/>
							)}
						</div>
					</div>
				</div>
				{!isImageInRight ? (
					<div className="hidden md:flex md:flex-row">
						{/* Image*/}
						<div className="w-1/2 flex items-center justify-center h-[80dvh]">
							<div
								style={{
									backgroundImage: `url(${imageSrc})`
								}}
								className={`w-96 h-96 bg-cover bg-center rounded-3xl`}></div>
						</div>
						{/* Title*/}
						<div className="w-1/2">
							<div className="mt-10">
								<p className="font-serif text-center text-5xl w-4/5">
									{title}
								</p>
								<div className="w-4/5 mt-5">
									<ProyectInfo
										duration={duration}
										typeOfWork={typeOfWork}
										role={role}
									/>
								</div>
								<p className="mt-2 text-md w-4/5">{content}</p>
								<p className="text-sm mt-8">Enlaces:</p>
								<div className="flex flex-row gap-4 mt-2 w-4/5">
									{mediumLink && (
										<SocialButton
											bg="/prtfolio/icons/Medium.svg"
											href={mediumLink}
											isProyect
										/>
									)}
									{figmaLink && (
										<SocialButton
											bg="/prtfolio/icons/Figma.svg"
											href={figmaLink}
											isProyect
										/>
									)}
									{behanceLink && (
										<SocialButton
											bg="/prtfolio/icons/Behance.svg"
											href={behanceLink}
											isProyect
										/>
									)}
									{externalLink && (
										<SocialButton
											bg="/prtfolio/icons/Link2.svg"
											href={externalLink}
											isProyect
										/>
									)}
								</div>
							</div>
						</div>
					</div>
				) : (
					<div className="hidden md:flex md:flex-row">
						{/* Title*/}
						<div className="w-1/2 pl-32">
							<div className="mt-10">
								<p className="font-serif text-center text-5xl w-full">
									{title}
								</p>
								<div className="w-full mt-5">
									<ProyectInfo
										duration={duration}
										typeOfWork={typeOfWork}
										role={role}
									/>
								</div>
								<p className="mt-2 text-md">{content}</p>
								{(mediumLink ||
									figmaLink ||
									behanceLink ||
									externalLink) && (
									<p className="text-sm mt-8">Enlaces:</p>
								)}
								<div className="flex flex-row gap-4 mt-2 w-4/5">
									{mediumLink && (
										<SocialButton
											bg="/prtfolio/icons/Medium.svg"
											href={mediumLink}
											isProyect
										/>
									)}
									{figmaLink && (
										<SocialButton
											bg="/prtfolio/icons/Figma.svg"
											href={figmaLink}
											isProyect
										/>
									)}
									{behanceLink && (
										<SocialButton
											bg="/prtfolio/icons/Behance.svg"
											href={behanceLink}
											isProyect
										/>
									)}
									{externalLink && (
										<SocialButton
											bg="/prtfolio/icons/Link2.svg"
											href={externalLink}
											isProyect
										/>
									)}
								</div>
							</div>
						</div>
						{/* Image*/}
						<div className="w-1/2 flex items-center justify-center h-[80dvh]">
							<div
								style={{
									backgroundImage: `url(${imageSrc})`
								}}
								className={`w-96 h-96 bg-cover bg-center rounded-3xl`}></div>
						</div>
					</div>
				)}
			</motion.section>
			<div id={id} className="h-[10dvh] flex">
				<motion.div
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					transition={{ duration: 1 }}
					className="w-full relative flex justify-center items-center">
					{nextProyect && (
						<a href={nextProyectHref}>
							<ButtonSection text={nextProyect} />
						</a>
					)}
				</motion.div>
			</div>
		</>
	)
}
