export default function Historia() {
  return (
    <section className="py-20 px-6 bg-dark">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        
        {/* Texto */}
        <div>
          <h2 className="text-3xl md:text-4xl font-serif text-gold mb-6">
            Maestro Leonardo
          </h2>

          <p className="max-w-xl text-gray-300 leading-relaxed mb-4">
            Cuento con más de <span className="text-gold font-semibold">30 años de experiencia</span> dedicados
            a la orientación espiritual y al acompañamiento de personas que buscan equilibrio emocional,
            claridad interior y armonización energética. A lo largo de este camino he desarrollado rituales
            y prácticas basadas en conocimientos tradicionales.
          </p>

          <p className="max-w-xl text-gray-300 leading-relaxed">
            Cada orientación que realizo es personalizada, respetando la energía y la situación de cada
            persona. Mi propósito es brindar una guía espiritual seria y responsable, ayudando a encontrar
            serenidad, enfoque y bienestar integral a través de la experiencia y la conexión interior.
          </p>
        </div>

        {/* Imagen */}
        <div className="flex justify-center">
          <img
            src="/src/assets/images/maestro-leonardo.jpg"
            alt="Historia del Maestro Leonardo"
            className="w-full max-w-md rounded-2xl shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
}
