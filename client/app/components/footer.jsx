import Image from "next/image"

export default function Footer() {
    return (
        <footer className="bg-[#f1ea13] h-auto py-4 flex justify-center">
            <div className="flex flex-col md:flex-row gap-3 md:gap-5 justify-center items-center text-blue-950 text-sm w-full max-w-4xl px-4">
                {/* Logo só aparece em md+ */}
                <div className="hidden md:block">
                    <Image
                        src="/img/logo footer.png"
                        width={50}
                        height={50}
                        alt="Logo Apoyo"
                    />
                </div>

                {/* Dados alinhados em linha no desktop/tablet */}
                <div className="flex flex-col md:flex-row md:items-center md:gap-2 items-center">
                    <span>
                        <span className="font-bold">CNPJ </span>
                        32.135.975/0001-13
                    </span>
                    <span className="hidden md:inline mx-1">|</span>
                    <span>
                        <span className="font-bold">Susep </span>
                        202023000
                    </span>
                </div>

                {/* Linha divisória só no mobile */}
                <span className="block md:hidden h-px w-full bg-blue-950 opacity-20 my-2"></span>

                {/* Copyright alinhado em linha no desktop/tablet */}
                <div className="flex flex-col md:flex-row md:items-center md:gap-2 items-center">
                    <span>Copyright © 2025</span>
                    <span className="hidden md:inline mx-1">|</span>
                    <span className="font-bold">Apoyo Corretora de Seguros LTDA</span>
                </div>
            </div>
        </footer>
    )
}