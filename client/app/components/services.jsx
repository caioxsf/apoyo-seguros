import { UsersRound, Check } from "lucide-react";

export default function Services() {
    return (

        <div className=" flex flex-col items-center justify-center h-[700px] bg-[#003366] gap-5">
            <div className="text-center">
                <h1 className="text-5xl text-[#f1ea13] font-extrabold uppercase">Nossos Serviços</h1>
                <p className="font-medium text-zinc-100 mt-2 text-lg">Saiba mais sobre o que iremos oferecer a sua empresa.</p>
            </div>

            <div className="flex flex-col items-center bg-zinc-100 p-8 rounded-lg w-300">
                <UsersRound className="bg-blue-950 text-white w-13 h-13 p-1 rounded-full" />
                <h1 className="font-bold text-[#003366] text-3xl mt-5">SEGURO DE VIDA EM GRUPO</h1>
                <p className="text-[#003366] text-md mt-5 font-medium">A modalidade adequada para empresas, associações, cooperativas e sindicatos.</p>
                <p className="text-[#003366] text-md w-200 text-center mt-3">O seguro de vida em grupo é a modalidade adequada para empresas, associações, cooperativas e sindicatos. Permite que sejam segurados os sócios proprietários, funcionários, associados, cooperados, sindicalizados, menores aprendizes e estagiários. Algumas coberturas podem ser extensivas aos cônjuges e filhos.</p>

                <div className="flex flex-row flex-wrap justify-center gap-12 mt-8">
                    {/* Coluna 1 */}
                    <div className="flex flex-col gap-6">
                        <div className="flex items-center gap-2">
                            <Check className="text-blue-800 rounded-full border border-blue-800 w-7 h-7 p-0.5" />
                            <span>Cobertura para sócios proprietários e funcionários</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Check className="text-blue-800 rounded-full border border-blue-800 w-7 h-7 p-0.5" />
                            <span>Cobertura para menores aprendizes e estagiários</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Check className="text-blue-800 border rounded-full  border-blue-800 w-7 h-7 p-0.5" />
                            <span>Planos personalizados por setor</span>
                        </div>
                    </div>
                    {/* Coluna 2 */}
                    <div className="flex flex-col gap-6">
                        <div className="flex items-center gap-2">
                            <Check className="text-blue-800 rounded-full border  border-blue-800 w-7 h-7 p-0.5" />
                            <span>Extensão para cônjuges e filhos</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Check className="text-blue-800 rounded-full border  border-blue-800 w-7 h-7 p-0.5" />
                            <span>Adequado para empresas, associações e cooperativas</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Check className="text-blue-800 rounded-full border  border-blue-800 w-7 h-7 p-0.5" />
                            <span>Suporte especializado há mais de 20 anos</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}