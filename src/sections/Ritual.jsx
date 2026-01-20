
export default function Ritual(){
  return (
    <section className="py-20 px-6 bg-dark">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <div className="flex justify-center">
          <img
            src="/src/assets/images/ritual.webp"
            alt="Metodología Espiritual"
            className="w-full max-w-md rounded-lg shadow-lg"
          />
        </div>
        <div className="text-center md:text-left">
          <h2 className="text-3xl text-gold mb-6">Metodología Espiritual</h2>
          <p className="max-w-2xl mx-auto md:mx-0">
            La metodología espiritual del Maestro se fundamenta en un proceso de acompañamiento consciente y simbólico, orientado al equilibrio interior y la claridad personal. Cada orientación se desarrolla en etapas estructuradas que permiten una comprensión profunda del momento espiritual del consultante.
          </p>
        </div>
      </div>
    </section>
  )
}
