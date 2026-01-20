export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-black to-dark text-center px-6 relative overflow-hidden">

      {/* Fondo */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-25"
        style={{ backgroundImage: "url('/src/assets/images/hero.jpg')" }}
      />

      {/* Contenido */}
      <div className="relative z-10 flex flex-col items-center">

        {/* Arco místico */}
        <div className="relative w-64 h-32 mb-8">
          <span className="absolute left-0 top-12 text-5xl text-gold opacity-80 rotate-[-25deg]">
            ✦
          </span>

          <span className="absolute left-1/2 -translate-x-1/2 top-0 text-6xl text-mystic opacity-90">
            ☾
          </span>

          <span className="absolute right-0 top-12 text-5xl text-gold opacity-80 rotate-[25deg]">
            ✦
          </span>
        </div>

        {/* Nombre */}
        <h1
          className="font-serif text-5xl md:text-7xl font-semibold tracking-wide
                     bg-gradient-to-r from-gold via-mystic to-gold
                     bg-clip-text text-transparent mb-6"
        >
          Maestro Leonardo
        </h1>

        {/* Descripción */}
        <p className="max-w-xl mx-auto text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
          Guía espiritual con años de experiencia orientando procesos de equilibrio emocional,
          espiritual y energético.
        </p>

        {/* Botón */}
        <a
          href="https://wa.me/573249704916?text=Hola%20Maestro%20Leonardo,%20me%20gustar%C3%ADa%20agendar%20una%20consulta%20espiritual.%20%C2%BFPodr%C3%ADas%20indicarme%20los%20horarios%20disponibles%3F"
          className="bg-gold text-black px-8 py-4 rounded-full font-semibold
                     hover:scale-105 transition-transform duration-300 shadow-lg"
        >
          Consulta Espiritual
        </a>
      </div>
    </section>
  );
}
