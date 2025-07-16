'use client'

import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

 
  const openMenu = () => {
    setShowMenu(true);
    setTimeout(() => setMobileOpen(true), 10); 
  };


  const closeMenu = () => {
    setMobileOpen(false);
    setTimeout(() => setShowMenu(false), 400);
  };

  return (
    <header className="bg-[#FFED00] h-[90px] flex justify-between items-center px-12">
      {/* Logo */}
      <Image
        src="/img/logo.png"
        alt="Logo"
        width={110}
        height={110}
        className="object-contain"
      />

      {/* Menu Desktop */}
      <ul className="hidden md:flex flex-row items-center gap-5 font-semibold text-blue-950">
        <li>
          <Link
            href="/"
            className="border-b-2 border-transparent hover:border-blue-950 transition-all duration-700"
          >
            NOSSOS SERVIÇOS
          </Link>
        </li>
        <li>
          <Link
            href="/"
            className="border-b-2 border-transparent hover:border-blue-950 transition-all duration-700"
          >
            SOBRE NÓS
          </Link>
        </li>
        <li>
          <Link
            href="https://google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-blue-950 p-3 rounded-lg hover:bg-blue-950 hover:text-[#FFED00] transition-all duration-500 cursor-pointer"
          >
            FAÇA SEU AGENDAMENTO
          </Link>
        </li>
      </ul>

      {/* Botão Hamburger Mobile */}
      <button
        className="md:hidden flex items-center"
        onClick={openMenu}
        aria-label="Abrir menu"
      >
        <Menu size={36} className="text-blue-950" />
      </button>

      {/* Menu Mobile com animação */}
      {showMenu && (
        <div className="fixed inset-0 bg-black/40 z-50 flex">
          <div
            className={`
              bg-[#FFED00] w-72 h-full p-3 flex flex-col gap-4 shadow-lg
              transform transition-transform duration-400
              ${mobileOpen ? "translate-x-0" : "-translate-x-full"}
            `}
          >
            
            <button
              className="self-end mb-4"
              onClick={closeMenu}
              aria-label="Fechar menu"
            >
              <X size={32} className="text-blue-950" />
            </button>

            <Link
              href="/"
              className="border-b-2 border-transparent hover:border-blue-950 transition-all duration-700 text-blue-950 font-semibold"
              onClick={closeMenu}
            >
              NOSSOS SERVIÇOS
            </Link>
            <Link
              href="/"
              className="border-b-2 border-transparent hover:border-blue-950 transition-all duration-700 text-blue-950 font-semibold"
              onClick={closeMenu}
            >
              SOBRE NÓS
            </Link>
            <Link
              href="https://google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lgx cursor-pointer text-blue-950 font-semibold"
              onClick={closeMenu}
            >
              FAÇA SEU AGENDAMENTO
            </Link>
          </div>
          {/* Clica fora do menu para fechar */}
          <div className="flex-1" onClick={closeMenu} />
        </div>
      )}
    </header>
  );
}