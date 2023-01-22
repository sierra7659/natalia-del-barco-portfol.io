import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { animationOpacitySettings } from '../../modules/animation/opacity'
import SectionItem from '../../components/section-item'
import CardButton from '../../components/card-button'
import SocialButton from '../../components/social-button'
import ButtonSection from '../../components/button-section'
import { proyectsUI_UX } from '../../modules/proyects/ui-ux/proyectsEnum'
import Head from 'next/head'

export default function UIUX() {
	return (
		<>
			<Head>
				<title>Proyectos UX/UI</title>
			</Head>
			<AnimatePresence>
				<motion.main
					{...animationOpacitySettings}
					id="proyectos"
					className="bg-[url(/prtfolio/img/fondoHifi.svg)] bg-no-repeat m-0 bg-cover w-screen">
					<div>
						{/* Arrow Back */}
						<Link href="/#proyectos">
							<div className="sticky ml-8 top-8 z-10 max-w-fit p-2 backdrop-blur-lg rounded-lg shadow-xl">
								<Image
									src="/prtfolio/icons/arrow.svg"
									width={40}
									height={40}
									alt="volver atrás"
								/>
							</div>
						</Link>
						<section className="h-[100dvh] mx-8 text-center">
							<div>
								<span className="font-serif text-4xl md:text-6xl">
									Proyectos
								</span>
							</div>
							<div className="grid grid-cols-2 md:grid-cols-3 justify-items-center md:px-32 gap-8 md:w-full mt-20 justify-center">
								{proyectsUI_UX.map((proyect, index) => {
									return (
										<CardButton
											key={index}
											title={proyect.title}
											date={proyect.date}
											isAlternative={index % 2 === 0}
											routeToGo={`#${proyect.title}`}
										/>
									)
								})}
							</div>
						</section>
						<div>
							{proyectsUI_UX.map((proyect, index) => {
								const prevProyect = proyectsUI_UX[index - 1]
								const nextProyect = proyectsUI_UX[index + 1]

								const {
									title,
									imageSrc,
									duration,
									role,
									typeOfWork,
									content,
									figmaLink,
									mediumLink
								} = proyect

								return (
									<SectionItem
										id={title}
										key={title}
										title={title}
										isImageInRight={index % 2 !== 0}
										imageSrc={imageSrc}
										duration={duration}
										role={role}
										typeOfWork={typeOfWork}
										content={content}
										figmaLink={figmaLink}
										mediumLink={mediumLink}
										prevProyect={
											prevProyect
												? prevProyect.title
												: 'Proyectos'
										}
										prevProyectHref={
											prevProyect
												? `#${prevProyect.title}`
												: '#proyectos'
										}
										nextProyect={
											nextProyect
												? nextProyect.title
												: '¡Contacta Conmigo!'
										}
										nextProyectHref={
											nextProyect
												? `#${nextProyect.title}`
												: '#contacta'
										}
									/>
								)
							})}
						</div>
						<motion.div
							initial={{ opacity: 0 }}
							whileInView={{ opacity: 1 }}
							transition={{ duration: 1 }}
							className="w-full relative flex justify-center items-start -mt-3">
							<a href="#Vegrows">
								<ButtonSection text="Vegrows" isPrev="true" />
							</a>
						</motion.div>
						<section
							className="h-[90vh] flex flex-col justify-center"
							id="contacta">
							<div className="w-full pt-20 mx-auto text-center">
								<span className="font-serif px-2 md:px-0 text-4xl md:text-8xl dark:text-transparent transition-all duration-200">
									¡Contacta conmigo!
								</span>
							</div>
							<div className="flex gap-5  h-5 mt-24 justify-center items-center">
								<SocialButton
									bg="/prtfolio/icons/Linkedin.svg"
									bgLofi="/prtfolio/icons/LinkedinLo.svg"
									href="https://www.linkedin.com/in/natalia-del-barco-rojas-product-designer/"
								/>
								<SocialButton
									bg="/prtfolio/icons/Medium.svg"
									bgLofi="/prtfolio/icons/MediumLo.svg"
									href="https://medium.com/@nataliadelbarcorojas"
								/>
								<SocialButton
									bg="/prtfolio/icons/mail.svg"
									bgLofi="/prtfolio/icons/MailLo.svg"
									href="mailto:nataliadelbarcodesign@gmail.com"
								/>
								<SocialButton
									bg="/prtfolio/icons/Behance.svg"
									bgLofi="/prtfolio/icons/BehanceLo.svg"
									href="https://www.behance.net/nataliadelbar"
								/>
								<SocialButton
									bg="/prtfolio/icons/Figma.svg"
									bgLofi="/prtfolio/icons/FigmaLo.svg"
									href="https://www.figma.com/@nataliadelbarco"
								/>
							</div>
						</section>
					</div>
				</motion.main>
			</AnimatePresence>
		</>
	)
}
