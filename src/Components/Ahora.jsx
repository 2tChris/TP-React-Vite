import React from "react";
const Ahora = () => {
    return <section className="min-h-[90vh] grid grid-cols-1 xl:grid-cols-8"> {/* De esta manera dividimos el espacio en columnas para ordenarnos mejor */} 
        <div className="md:col-span-5 flex items-center justify-center p-8 xl:p-16">
            <div className="flex flex-col gap-8">
                <h1 className="text-5xl xl:text-7xl font-bold xl:leading-[7.5rem]">
                    Limpieza profunda, eficaz y rapida{" "} <span className="text-primary relative inline-block">garantizada</span></h1>
                <p className="text-gray-350 text-2xl leading-[2.5rem]">Desde el hogar, quinchos y hasta piletas! Nosotros te dejaremos reluciente el lugar.</p>
                <div className="flex flex-col md:flex-row items-center gap-4">
                    <button className="w-full xl:w-auto bg-primary text-white py-2 px-8 rounded-xl text-xl">Ponte en contacto!</button>
                    <button className="w-full xl:w-auto bg-primary gap-4 py-2 px-8 rounded-xl text-xl">Ultimos trabajos</button>
                </div>
            </div>
        </div>
    </section>;
};

export default Ahora;