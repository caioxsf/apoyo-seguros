'use client'
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Agendamento from "./agendamento";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function About() {
    useEffect(() => {
        AOS.init({ duration: 800 });
      }, []);
    const [open, setOpen] = useState(false);
    return (
        <div>
            <div className="relative w-full h-[650px] sm:h-[600px] md:h-[700px] lg:h-[650px] overflow-hidden flex justify-center" >
                <Image
                    src="/img/about.png"
                    alt="Main Image"
                    fill
                    className="object-cover brightness-40"
                    priority
                />


                <div className="flex flex-col lg:flex-row items-center justify-center w-full max-w-7xl h-full absolute px-6 lg:px-12 gap-8 lg:gap-16">
                    {/* Logo Section */}
                    <div className="flex-shrink-0 lg:w-1/3 flex justify-center">
                        <div className="relative">
                            <Image
                                src="/img/logo-branca.png"
                                alt="About Image"
                                width={400}
                                height={400}
                                className="object-contain drop-shadow-2xl hidden lg:block"
                            />
                        </div>
                    </div>

                    {/* Content Section */}
                    <div className="lg:w-2/3 flex flex-col text-white space-y-8">
                        {/* Sobre Nós */}
                        <div className="space-y-4">
                            <h1 data-aos="fade-right" className="font-bold text-4xl lg:text-5xl xl:text-6xl text-yellow-200 tracking-wide">
                                SOBRE NÓS
                            </h1>
                            <p className="text-gray-100 leading-relaxed text-base lg:text-lg font-light">
                                A corretora é especializada em seguro de vida em grupo, atendendo a empresas de pequenos, médios e grandes portes de todos os ramos de atividades, sempre com a confiança de oferecer um plano que atenda às expectativas dos sócios proprietários e de seus funcionários.
                            </p>
                        </div>

                        {/* Nossos Gestores */}
                        <div className="space-y-4">
                            <h2 data-aos="fade-right" className="font-bold text-3xl lg:text-4xl xl:text-5xl text-yellow-200 tracking-wide">
                                NOSSOS GESTORES
                            </h2>
                            <p className="text-gray-100 leading-relaxed text-base lg:text-lg font-light">
                                Os sócios proprietários, <span className="text-yellow-200 font-semibold">Eduardo Carlos Pereira</span> e <span className="text-yellow-200 font-semibold">José Kenji Takano</span>, possuem experiência de mais de <span className="text-yellow-200 font-semibold">20 anos</span> na área de seguridade, tendo-se especializados no ramo de seguros de vida em grupo.
                            </p>
                            <p className="text-gray-100 leading-relaxed text-base lg:text-lg font-light">
                                Solicite-nos uma visita sem compromisso nas regiões de <span className="font-bold text-yellow-200">Presidente Prudente, Araçatuba, Assis e Marília.</span>
                            </p>

                            <>
                                <button
                                data-aos="fade-right"
                                    onClick={() => setOpen(true)}
                                    className="flex w-full items-center justify-center gap-2 text-yellow-200 font-semibold bg-transparent border border-yellow-200 pointer hover:bg-blue-950 hover:text-[#ffee00e1] hover:border-blue-950
                                px-3 py-2 sm:px-5 sm:py-3 
                                text-sm sm:text-base 
                                rounded-sm transition"
                                >
                                    Faça seu agendamento
                                    <ArrowRight className="w-4" />
                                </button>

                                <Agendamento open={open} onClose={() => setOpen(false)} />
                            </>
                        </div>

                        {/* Regiões */}
                        {/* <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4">
                            <div className="bg-gradient-to-r from-amber-400 to-amber-500 text-slate-900 font-bold py-3 px-4 rounded-lg text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                                <span className="text-sm lg:text-base">Pres. Prudente</span>
                            </div>

                            <div className="bg-gradient-to-r from-amber-400 to-amber-500 text-slate-900 font-bold py-3 px-4 rounded-lg text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                                <span className="text-sm lg:text-base">Araçatuba</span>
                            </div>

                            <div className="bg-gradient-to-r from-amber-400 to-amber-500 text-slate-900 font-bold py-3 px-4 rounded-lg text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                                <span className="text-sm lg:text-base">Assis</span>
                            </div>

                            <div className="bg-gradient-to-r from-amber-400 to-amber-500 text-slate-900 font-bold py-3 px-4 rounded-lg text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                                <span className="text-sm lg:text-base">Marília</span>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    )
}