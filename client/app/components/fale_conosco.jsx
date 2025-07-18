import Image from 'next/image';

export default function FaleConosco() {
  return (
    <section className="relative w-full h-80 flex items-center justify-center overflow-hidden">
      {/* Imagem de fundo para mobile */}
      <Image
        src="/img/fale conosco mobile.png"
        alt="Fale Conosco Mobile"
        fill
        className="object-cover object-center block md:hidden"
        priority
      />
      {/* Imagem de fundo para desktop */}
      <Image
        src="/img/fale conosco.png"
        alt="Fale Conosco Desktop"
        fill
        className="object-cover object-center hidden md:block"
        priority
      />

      {/* Overlay com conteúdo */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
        <h2 className="text-2xl md:text-4xl font-bold text-yellow-300 mb-4 drop-shadow uppercase">
          Fale Conosco
        </h2>
        <p className="text-white text-base md:text-lg mb-2">
          Faça seu agendamento através dos contatos:
        </p>
        <div className="flex flex-col gap-1 text-white/90 text-base md:text-lg font-medium">
          <a
            href="https://wa.me/5518996218214"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            (18) 99621-8214
          </a>
          <a
            href="https://wa.me/5518997308070"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            (18) 99730-8070
          </a>
          <a
            href="mailto:contato@apoyocorretoradeseguros.com.br"
            className="font-semibold hover:underline"
          >
            contato@apoyocorretoradeseguros.com.br
          </a>
        </div>
      </div>
    </section>
  );
}