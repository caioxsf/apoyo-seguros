'use client'

import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import Agendamento from "./agendamento";
import { ArrowRight } from "lucide-react";

export default function Header() {
  const [open, setOpen] = useState(false);
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
    <header className="bg-[#f1ea13] w-full fixed z-50 h-[90px] flex justify-between items-center px-12">
      {/* Logo */}
      <Image
        src="/img/logo.jpg"
        alt="Logo"
        width={110}
        height={110}
        className="object-contain"
      />

      {/* Menu Desktop */}
      <ul className="hidden md:flex flex-row items-center gap-5 font-semibold text-blue-950">
        <li>
          <button
            onClick={() => {
              document.getElementById('servicos')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="border-b-2 border-transparent hover:border-blue-950 transition-all duration-700"
          >
            NOSSOS SERVIÇOS
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              document.getElementById('sobre')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="border-b-2 border-transparent hover:border-blue-950 transition-all duration-700"
          >
            SOBRE NÓS
          </button>
        </li>
        <li>
          <>
            <button
              onClick={() => setOpen(true)}
              className="border border-blue-950 p-3 rounded-lg hover:bg-blue-950 hover:text-[#FFED00] transition-all duration-500 cursor-pointer"
            >
              FAÇA SEU AGENDAMENTO
            </button>

            <Agendamento open={open} onClose={() => setOpen(false)} />
          </>
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
              bg-[#f1ea13] w-72 h-full p-3 flex flex-col gap-4 shadow-lg
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

            <button
              className="border-b-2 border-transparent hover:border-blue-950 transition-all duration-700 text-blue-950 font-semibold text-left"
              onClick={() => {
                document.getElementById('servicos')?.scrollIntoView({ behavior: 'smooth' });
                closeMenu();
              }}
            >
              NOSSOS SERVIÇOS
            </button>

            <button
              className="border-b-2 border-transparent hover:border-blue-950 transition-all duration-700 text-blue-950 font-semibold text-left"
              onClick={() => {
                document.getElementById('sobre')?.scrollIntoView({ behavior: 'smooth' });
                closeMenu();
              }}
            >
              SOBRE NÓS
            </button>

          </div>

          {/* Clica fora do menu para fechar */}
          <div className="flex-1" onClick={closeMenu} />
        </div>
      )}
    </header>
  );
}