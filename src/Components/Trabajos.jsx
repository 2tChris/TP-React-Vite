import React from "react";

const Trabajos = () => {
    return(
        <div className="p-20">
            <div className="mb-8">
                <h1 className="text-[40px] font-bold">
                    Nos encargamos usando varios instrumentos y maquinarias
                </h1>
                <p className="text-xl text-gray-500">
                    Desde el uso controlado de acido hasta el simple multiuso, que sirve para limpiar vidrieras y azulejos.
                </p>
            </div>
            {/* Trabajos */}
            <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="flex flex-col gap-2">
                    <img src="img2.jpg" className="w-full rounded-xl"/>
                    <p>Un ejemplo de nuestros trabajadores</p>
                </div>
                
            </div>
        </div>
    )
}

export default Trabajos;

