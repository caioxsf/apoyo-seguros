'use client'
import { useState, useEffect } from "react";
import Agendamento from "./agendamento";
import { UsersRound, Check, ArrowRight } from "lucide-react";
import Link from "next/link";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Services() {
    useEffect(() => {
        AOS.init({ duration: 800 });
    }, []);

    const [open, setOpen] = useState(false);
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br bg-[#003366] px-4 py-16" id="servicos">
            {/* Header */}
            <div className="text-center mb-12 ">
                <h1 className="text-4xl lg:text-6xl font-bold text-white mb-4 uppercase" >
                    Nossos <span className="text-[#f1ea13]">Serviços</span>
                </h1>
                <p className="text-slate-300 text-lg max-w-2xl" >
                    Saiba mais sobre o que iremos oferecer a sua empresa
                </p>
            </div>

            {/* Card Principal */}
            <div data-aos="fade-right" className="bg-white rounded-2xl shadow-2xl p-8 lg:p-12 max-w-4xl w-full" >
                {/* Ícone e Título */}
                <div className="text-center mb-8">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-full mb-6">
                        <UsersRound className="w-8 h-8 text-white" />
                    </div>
                    <h2 className="text-2xl lg:text-3xl font-bold text-slate-800 mb-4">
                        SEGURO DE VIDA EM GRUPO
                    </h2>
                    <p className="text-blue-600 font-medium text-lg mb-4">
                        A modalidade adequada para empresas, associações, cooperativas e sindicatos
                    </p>
                    <p className="text-slate-600 leading-relaxed max-w-3xl mx-auto">
                        O seguro de vida em grupo é a modalidade adequada para empresas, associações, cooperativas e sindicatos.
                        Permite que sejam segurados os sócios proprietários, funcionários, associados, cooperados, sindicalizados,
                        menores aprendizes e estagiários. Algumas coberturas podem ser extensivas aos cônjuges e filhos.
                    </p>
                </div>

                {/* Lista de Benefícios */}
                <div className="grid md:grid-cols-2 gap-6" >
                    <div className="space-y-4">
                        <div className="flex items-start gap-4">
                            <div className="flex-shrink-0 w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mt-0.5">
                                <Check className="w-4 h-4 text-blue-600" />
                            </div>
                            <span className="text-slate-700 leading-relaxed">
                                Cobertura para sócios proprietários e funcionários
                            </span>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="flex-shrink-0 w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mt-0.5">
                                <Check className="w-4 h-4 text-blue-600" />
                            </div>
                            <span className="text-slate-700 leading-relaxed">
                                Cobertura para menores aprendizes e estagiários
                            </span>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="flex-shrink-0 w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mt-0.5">
                                <Check className="w-4 h-4 text-blue-600" />
                            </div>
                            <span className="text-slate-700 leading-relaxed">
                                Planos personalizados por setor
                            </span>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <div className="flex items-start gap-4">
                            <div className="flex-shrink-0 w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mt-0.5">
                                <Check className="w-4 h-4 text-blue-600" />
                            </div>
                            <span className="text-slate-700 leading-relaxed">
                                Extensão para cônjuges e filhos
                            </span>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="flex-shrink-0 w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mt-0.5">
                                <Check className="w-4 h-4 text-blue-600" />
                            </div>
                            <span className="text-slate-700 leading-relaxed">
                                Adequado para empresas, associações e cooperativas
                            </span>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="flex-shrink-0 w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mt-0.5">
                                <Check className="w-4 h-4 text-blue-600" />
                            </div>
                            <span className="text-slate-700 leading-relaxed">
                                Suporte especializado há mais de 20 anos
                            </span>
                        </div>
                    </div>
                </div>

                <>
                    <button
                        id="sobre"
                        onClick={() => setOpen(true)}
                        className="flex w-full items-center justify-center mt-10 gap-2 text-blue-950 font-semibold  bg-blue-100 hover:bg-blue-950 hover:text-[#ffee00e1] 
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
        </div >
    );
}