import Head from 'next/head'
import { useState } from 'react'
import CardButton from '../components/card-button'
import Header from '../components/header'
import Section from '../components/section'
import SocialButton from '../components/social-button'

export default function Home() {
	const [darkToggle, setDarkToggle] = useState(false)

	const manageDarkToggle = () => setDarkToggle(!darkToggle)

	const textStyle = darkToggle
		? {
				WebkitTextStroke: '1px black'
		  }
		: {
				WebkitTextStrokeWidth: 0,
				WebkitTextStrokeColor: 'none'
		  }

	return (
		<>
			<Head>
				<title>Natalia del Barco</title>
			</Head>
			<div className={` ${darkToggle && 'dark'}`}>
				<main className="bg-[url('/prtfolio/img/FondoHiFi.wp2')] bg-no-repeat m-0 dark:bg-[url('/prtfolio/img/FondoLoFi.jpg')] w-full bg-cover h-full">
					<Header toggleCallback={manageDarkToggle} />
					{/* Portada */}
					<Section
						nextSection="Sobre mí"
						nextSectionHref="#sobre-mi"
						id="intro">
						<h1
							className="font-serif text-4xl text-center pt-32 md:pt-0 md:text-start md:text-8xl dark:text-transparent"
							style={textStyle}>
							Portfolio <br />
							Natalia del Barco
						</h1>
					</Section>
					{/* Sobre mi */}
					<Section
						prevSection="Intro"
						prevSectionHref="#intro"
						nextSection="Proyectos"
						nextSectionHref="#proyectos"
						id="sobre-mi">
						<div>
							<div className="flex flex-col md:flex-row items-center h-full">
								<div className="w-full -mt-8 md:mt-0 md:w-1/2">
									<div className="md:pt-4">
										<span
											className="font-serif text-4xl md:text-8xl dark:text-transparent"
											style={textStyle}>
											Sobre mí
										</span>
									</div>

									<p className="md:mr-12 pt-4 pr-4 md:pt-10 pb-20 text-sm md:text-lg">
										Me llamo Natalia, soy{' '}
										<b className="font-bold">
											Diseñadora Gráfica
										</b>{' '}
										y<br />
										<b className="font-bold">
											Diseñadora de Producto
										</b>
										, ayudo a gestionar una experiencia de
										usuario e interfaz exitosa en el menor
										tiempo posible para las empresas del
										sector tecnológico. Realizo trabajo
										interdisciplinar, centrado en el ser
										humano. He trabajado en proyectos de
										cara al cliente para particulares y
										empresas; en la industria de la
										publicidad, marketing y comunicación.
										Gracias a los conocimientos en Diseño
										Gráfico, pongo en uso toda la
										creatividad y conocimientos artísticos
										en mi trabajo.
									</p>
								</div>
								<div className="flex items-center -mt-14 md:my-0 w-full md:w-1/2 h-full justify-center md:justify-between mx-auto md:ml-32">
									<div className="bg-[url('/prtfolio/img/PerfilHiFi.png')] dark:bg-[url('/prtfolio/img/PerfilLoFi.png')] h-48 w-48 md:h-[30rem] md:w-[30rem] bg-contain bg-no-repeat"></div>
								</div>
							</div>
						</div>
					</Section>
					{/* Proyectos */}
					<Section
						prevSection="Sobre Mí"
						prevSectionHref="#sobre-mi"
						nextSection="Contacta Conmigo"
						nextSectionHref="#contacta-conmigo"
						id="proyectos">
						<div className="w-full flex justify-center">
							<span
								className="font-serif text-4xl md:text-8xl dark:text-transparent"
								style={textStyle}>
								Proyectos
							</span>
						</div>
						<div className="w-full h-full flex md:flex-row flex-col justify-evenly items-center">
							<CardButton
								isAlternative="true"
								title="UX UI"
								isLofi={darkToggle}
								routeToGo=""
							/>
							<CardButton
								title="Diseño Gráfico"
								isLofi={darkToggle}
								routeToGo=""
							/>
						</div>
					</Section>
					<Section
						prevSection="Proyectos"
						prevSectionHref="#proyectos"
						id="contacta-conmigo">
						<div className="w-full pt-20 mx-auto text-center">
							<span
								className="font-serif px-2 md:px-0 text-4xl md:text-8xl dark:text-transparent"
								style={textStyle}>
								¡Contacta conmigo!
							</span>
						</div>
						<div className="flex gap-5  h-5 mt-24 justify-center items-center">
							<SocialButton
								bg="/prtfolio/icons/Linkedin.svg"
								bgLofi="/prtfolio/icons/LinkedinLo.svg"
								isLofi={darkToggle}
								href="https://www.linkedin.com/in/natalia-del-barco-rojas-product-designer/"
							/>
							<SocialButton
								bg="/prtfolio/icons/Medium.svg"
								bgLofi="/prtfolio/icons/MediumLo.svg"
								isLofi={darkToggle}
								href="https://medium.com/@nataliadelbarcorojas"
							/>
							<SocialButton
								bg="/prtfolio/icons/mail.svg"
								bgLofi="/prtfolio/icons/MailLo.svg"
								isLofi={darkToggle}
								href="mailto:nataliadelbarcodesign@gmail.com"
							/>
							<SocialButton
								bg="/prtfolio/icons/Behance.svg"
								bgLofi="/prtfolio/icons/BehanceLo.svg"
								isLofi={darkToggle}
								href="https://www.behance.net/nataliadelbar"
							/>
							<SocialButton
								bg="/prtfolio/icons/Figma.svg"
								bgLofi="/prtfolio/icons/FigmaLo.svg"
								isLofi={darkToggle}
								href="https://www.figma.com/@nataliadelbarco"
							/>
						</div>
					</Section>
				</main>
			</div>
		</>
	)
}
