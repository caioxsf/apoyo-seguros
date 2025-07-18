import Image from "next/image";

export default function AgendamentoModal({ open, onClose }) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-2xl p-6 relative animate-fadeIn">
        {/* Botão de fechar */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-400 hover:text-gray-700 text-2xl font-bold"
          aria-label="Fechar"
        >
          ×
        </button>

        <h2 className="text-2xl font-bold text-blue-950 mb-6 text-center">
          Fale com nossos corretores
        </h2>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          {/* Corretor 1 */}
          <div className="flex flex-col items-center bg-[#f9f9f9] rounded-lg p-4 w-full sm:w-1/2 shadow">
            <Image
              src="/corretor1.png" // Troque para o caminho da foto do corretor 1
              alt="Kenji"
              width={100}
              height={100}
              className="rounded-full border-4 border-[#f1ea13] shadow-lg object-cover mb-2"
            />
            <span className="font-semibold text-blue-950 text-lg mb-1">José Kenji Takano</span>
            <a
              href="https://wa.me/5518996218214"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[#25D366] font-medium hover:underline mb-1"
            >
              WhatsApp: (18) 99621-8214
            </a>
            <a
              href="mailto:contato@apoyocorretoradeseguros.com.br"
              className="text-blue-950 text-sm hover:underline"
            >
              contato@apoyocorretoradeseguros.com.br
            </a>
          </div>

          {/* Corretor 2 */}
          <div className="flex flex-col items-center bg-[#f9f9f9] rounded-lg p-4 w-full sm:w-1/2 shadow">
            <Image
              src="/corretor2.png" // Troque para o caminho da foto do corretor 2
              alt="Eduardo"
              width={100}
              height={100}
              className="rounded-full border-4 border-[#f1ea13] shadow-lg object-cover mb-2"
            />
            <span className="font-semibold text-blue-950 text-lg mb-1">Eduardo Carlos Pereira</span>
            <a
              href="https://wa.me/5518997308070"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[#25D366] font-medium hover:underline mb-1"
            >
              WhatsApp: (18) 99730-8070
            </a>
            <a
              href="mailto:contato@apoyocorretoradeseguros.com.br"
              className="text-blue-950 text-sm hover:underline"
            >
              contato@apoyocorretoradeseguros.com.br
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}