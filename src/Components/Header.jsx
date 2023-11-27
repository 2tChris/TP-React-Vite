import React, { useState } from "react";

export default function Header() {
    const [showMenu, setShowmenu] = useState(false);
    return (
        <>
            <header className="flex items-center justify-between xl:justify-star w-full p-4 h-[10vh] z-50">
                <div className="xk:w-1/6 text-center -mt-4">
                    <a href="#" className="text-2xl font-bold relative p-1">Cleaners</a>
                </div>
                <nav
                className={`bg-white fixed w-[80%] md:w-[40%] xl:w-full h-full ${ showMenu ? "left-0" : "-left-full"} top-0 xl:static flex-1 flex flex-col xl:flex-row items-center justify-center gap-10 transition-all duration-500 z-50`}>
                    <a href="" className="">
                        Inicio
                    </a>
                    <a href="" className="">
                        Servicios
                    </a>
                    <a href="" className="">
                        Productos
                    </a>
                    <a href="" className="">
                        Sobre nosotros
                    </a>
                </nav>
                <button onClick={() => setShowmenu(!showMenu)} className="xl:hidden text-2xl p-2">{showMenu ? "Cerrar" : "Abrir"}</button>
            </header>
        </>
    );
}
