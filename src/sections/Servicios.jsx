import orientacionImg from "../assets/images/orientacion-espiritual.jpg";
import armonizacionImg from "../assets/images/armonizacion-energetica.webp";
import lecturasImg from "../assets/images/lecturas-personalizadas.jpg";

export default function Servicios(){
  const servicios = [
    { titulo: "Orientación espiritual", desc: "Guía personalizada para encontrar paz interior, claridad mental y dirección espiritual. Utilizo prácticas ancestrales, rituales simbólicos y conexión con la energía natural para ayudarte a equilibrar tu ser interior y armonizar tu vida cotidiana.", img: orientacionImg },
    { titulo: "Armonización energética", desc: "Proceso para liberar cargas emocionales, tensiones y bloqueos energéticos que afectan tu bienestar. Mediante rituales simbólicos, intención consciente y técnicas de sanación, restaura el equilibrio emocional y físico, promoviendo paz, claridad y estabilidad en tu vida.", img: armonizacionImg },
    { titulo: "Lecturas personalizadas", desc: "Sesiones individuales de interpretación espiritual profunda, utilizando tarot, runas o métodos tradicionales. Ofrece claridad sobre situaciones personales, decisiones importantes y procesos emocionales, guiándote hacia el autoconocimiento y el fortalecimiento de tu camino espiritual.", img: lecturasImg }
  ]

  return (
    <section className="py-20 px-6 bg-black">
      <h2 className="text-3xl text-gold text-center mb-10">Servicios Espirituales</h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {servicios.map((s, i) => (
          <div key={i} className="bg-dark border border-gold/30 p-6 rounded-xl shadow-lg hover:shadow-gold/20 transition-shadow duration-300 flex flex-col items-center text-center">
            <img
              src={s.img}
              alt={s.titulo}
              className="w-24 h-24 object-cover rounded-full mb-4 border-2 border-gold"
            />
            <h3 className="text-gold text-xl mb-3 font-semibold">{s.titulo}</h3>
            <p className="text-gray-300 leading-relaxed">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
