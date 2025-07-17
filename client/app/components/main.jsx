import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Main() {
    return (
        <main className="bg-white">
            {/* Banner com imagem e degradê azul */}
            <div className="relative w-full h-[650px] sm:h-[500px] md:h-[700px] lg:h-[800px] overflow-hidden">
                <Image
                    src="/img/cover.png"
                    alt="Main Image"
                    fill
                    className="object-cover brightness-50"
                    priority
                />
                {/* Degradê azul na base da imagem */}
                <div className="absolute inset-x-0 bottom-0 h-32 sm:h-40 md:h-64 bg-gradient-to-b from-transparent to-[#003366] pointer-events-none" />
                {/* Texto sobre a imagem */}
                <div className="absolute inset-0 flex items-center justify-center text-center mt-15">
                    <div className="w-full px-4 sm:px-8 md:px-32 mb-20 sm:mb-32 md:mb-40">
                        <h1 className="text-white text-2xl sm:text-4xl md:text-6xl font-extrabold leading-tight max-w-3xl mx-auto drop-shadow-lg">
                            Somos especializados<br />
                            em seguros de vida<br />
                            <span className="text-[#ffed00]">em grupo.</span>
                        </h1>

                        <p className="text-white text-base sm:text-lg md:text-xl mt-4 max-w-2xl mx-auto">
                            Protegendo famílias de empresários e funcionários com experiência de mais de 20 anos no mercado
                        </p>

                        <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-5 pt-8">
                            <Link
                                href="https://google.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-2 text-blue-950 font-semibold bg-[#ffed00] hover:bg-[#ffee00e1] 
                                px-3 py-2 sm:px-5 sm:py-3 
                                text-sm sm:text-base 
                                rounded-sm transition"
                            >
                                Faça seu agendamento
                                <ArrowRight className="w-4" />
                            </Link>

                            <a
                                href="https://google.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center text-blue-950 font-semibold bg-zinc-200 hover:bg-[#c2c2c2] 
                                px-3 py-2 sm:px-5 sm:py-3 
                                text-sm sm:text-base 
                                rounded-sm transition"
                            >
                                Conheça nossos serviços
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}