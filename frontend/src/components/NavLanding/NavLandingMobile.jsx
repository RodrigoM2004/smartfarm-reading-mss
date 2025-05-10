import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Button from "../ui/Button";
import logo from "/src/assets/logo.png";
import { HiMenu, HiX } from "react-icons/hi";

export default function NavLandingMobile() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden z-50">
      <div className="flex items-center justify-between">
        {/* Botão toggler Menu */}
        <button
          className="rounded-md p-2 text-gray-700 hover:text-green-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-green-500"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
        >
          {isOpen ? (
            <HiX className="h-6 w-6 transition-transform duration-200" />
          ) : (
            <HiMenu className="h-6 w-6 transition-transform duration-200" />
          )}
        </button>

        {/* Logo */}
        <Link
          to="/"
          className="absolute items-center right-5"
          onClick={() => setIsOpen(false)}
        >
          <img src={logo} alt="SmartFarm Logo" className="h-10" />
        </Link>

        <div className="w-10"></div>
      </div>

      {/* Overlay quando o menu está aberto */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black top-50 opacity-50 z-40"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      {/* Links */}
      <div
        className={`fixed mt-5 left-0 right-0 transition-all duration-300 ease-in-out overflow-hidden z-50 ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-white">
          <a
            href="#about"
            className="`position-relative block px-8 py-2 rounded-md font-bold text-gray-700 hover:bg-gray-50 hover:text-gray-900"
            onClick={() => setIsOpen(false)}
          >
            Sobre
          </a>
          <a
            href="#services"
            className="`position-relative block px-8 py-2 rounded-md font-bold text-gray-700 hover:bg-gray-50 hover:text-gray-900"
            onClick={() => setIsOpen(false)}
          >
            Serviços
          </a>
          <a
            href="#products"
            className="`position-relative block px-8 py-2 rounded-md font-bold text-gray-700 hover:bg-gray-50 hover:text-gray-900"
            onClick={() => setIsOpen(false)}
          >
            Produtos
          </a>

          {/* Botão de "Entrar" */}
          <div className="mt-4">
            <Link
              to="/login"
              className="block"
              onClick={() => setIsOpen(false)}
            >
              <Button className="w-full rounded-sm">ENTRAR</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
