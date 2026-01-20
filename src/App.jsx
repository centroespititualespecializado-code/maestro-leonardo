import WhatsAppButton from './components/WhatsAppButton'
import Contacto from './sections/Contacto'
import Hero from './sections/Hero'
import Historia from './sections/Historia'
import Ritual from './sections/Ritual'
import Servicios from './sections/Servicios'
import Testimonios from './sections/Testimonios'

export default function App(){
  return (
    <>
      <Hero />
      <Historia />
      <Servicios />
      <Ritual />
      <Testimonios />
      <Contacto />
      <WhatsAppButton />
    </>
  )
}