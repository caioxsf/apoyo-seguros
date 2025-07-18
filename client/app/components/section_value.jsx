'use client'
import { Eye, Heart, LocateFixed } from 'lucide-react';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function SectionValue() {
    useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);
    return (

        <div className="lg:h-150  bg-gradient-to-br to-[#011224] bg-[#003366] py-16 px-4">
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
                    <div data-aos="fade-right" className='group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 text-center border-t-4 border-blue-900'>
                        <div className="mb-6 flex justify-center">
                            <div className="bg-blue-100 p-4 rounded-full group-hover:bg-blue-200 transition-colors duration-300">
                                <LocateFixed className="w-8 h-8 text-blue-950" />
                            </div>
                        </div>
                        <h2 className="text-xl font-bold text-gray-800 mb-4 tracking-wide">NOSSA MISSÃO</h2>
                        <p className="text-gray-600 leading-relaxed">
                            Divulgar junto ao universo empresarial as vantagens (Custo/Benefício) do conceito do vida em grupo.
                        </p>
                    </div>

                    <div data-aos="fade-down" className='group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 text-center border-t-4 border-blue-900'>
                        <div className="mb-6 flex justify-center">
                            <div className="bg-blue-100 p-4 rounded-full group-hover:bg-blue-200 transition-colors duration-300">
                                <Eye className="w-8 h-8 text-blue-950" />
                            </div>
                        </div>
                        <h2 className="text-xl font-bold text-gray-800 mb-4 tracking-wide">NOSSA VISÃO</h2>
                        <p className="text-gray-600 leading-relaxed">
                            Proteger as famílias dos empresários e de seus funcionários com o seguro de vida em grupo.
                        </p>
                    </div>

                        <div data-aos="fade-right" className='group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 text-center border-t-4 border-blue-900'>
                            <div className="mb-6 flex justify-center">
                                <div className="bg-blue-100 p-4 rounded-full group-hover:bg-blue-200 transition-colors duration-300">
                                    <Heart className="w-8 h-8 text-blue-950" />
                                </div>
                            </div>
                            <h2 className="text-xl font-bold text-gray-800 mb-4 tracking-wide">NOSSOS VALORES</h2>
                            <p className="text-gray-600 leading-relaxed">
                                Ética, responsabilidade, compromisso e conhecimento técnico.
                            </p>
                    </div>
                </div>
            </div>
        </div>
    )
}