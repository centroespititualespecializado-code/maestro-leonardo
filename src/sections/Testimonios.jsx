
import { useEffect, useState } from 'react'

export default function Testimonios(){
  const [testimonios, setTestimonios] = useState([])
  const [comentario, setComentario] = useState('')
  const [user, setUser] = useState(null)

  useEffect(() => {
    const stored = localStorage.getItem('testimonios')
    if (stored) {
      setTestimonios(JSON.parse(stored))
    }

    // Inicializar Google Sign-In
    const initializeGoogleSignIn = () => {
      if (window.google) {
        window.google.accounts.id.initialize({
          client_id: 'TU_CLIENT_ID_DE_GOOGLE_AQUI', // Reemplaza con tu client ID
          callback: handleCredentialResponse
        })
        window.google.accounts.id.renderButton(
          document.getElementById('google-signin-button'),
          { theme: 'outline', size: 'large' }
        )
      }
    }

    if (window.google) {
      initializeGoogleSignIn()
    } else {
      window.addEventListener('load', initializeGoogleSignIn)
    }
  }, [])

  const handleCredentialResponse = (response) => {
    // Decodificar el JWT para obtener el perfil
    const responsePayload = decodeJwtResponse(response.credential)
    setUser(responsePayload)
  }

  const decodeJwtResponse = (token) => {
    const base64Url = token.split('.')[1]
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/')
    const jsonPayload = decodeURIComponent(atob(base64).split('').map(c => {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)
    }).join(''))
    return JSON.parse(jsonPayload)
  }

  const handleLogout = () => {
    setUser(null)
    window.google.accounts.id.disableAutoSelect()
  }

  const agregarTestimonio = (e) => {
    e.preventDefault()
    if (comentario.trim()) {
      const nombre = user ? user.name : 'Anónimo'
      const nuevo = {
        id: Date.now(),
        nombre,
        comentario: comentario.trim(),
        fecha: new Date().toLocaleDateString('es-ES')
      }
      const nuevosTestimonios = [...testimonios, nuevo]
      setTestimonios(nuevosTestimonios)
      localStorage.setItem('testimonios', JSON.stringify(nuevosTestimonios))
      setComentario('')
    }
  }

  return (
    <section className="py-20 px-6 bg-black">
      <h2 className="text-3xl text-gold text-center mb-10">Testimonios</h2>
      <p className="text-center max-w-2xl mx-auto mb-10">
        Cientos de personas han encontrado claridad y bienestar a través de nuestras consultas.
        Comparte tu experiencia dejando un comentario.
      </p>

      <div className="max-w-4xl mx-auto">
        <div className="mb-6 text-center">
          {user ? (
            <div>
              <p className="text-gold">Conectado como: {user.name}</p>
              <button onClick={handleLogout} className="bg-red-600 text-white px-4 py-2 rounded mt-2">
                Cerrar Sesión
              </button>
            </div>
          ) : (
            <div>
              <p className="text-gray-400 mb-2">Inicia sesión con Google para personalizar tu comentario (opcional)</p>
              <div id="google-signin-button"></div>
            </div>
          )}
        </div>

        <form onSubmit={agregarTestimonio} className="mb-10 bg-dark p-6 rounded-lg">
          <h3 className="text-xl text-gold mb-4">Deja tu Testimonio</h3>
          <div className="mb-4">
            <p className="text-white">Nombre: {user ? user.name : 'Anónimo'}</p>
          </div>
          <div className="mb-4">
            <textarea
              placeholder="Tu comentario"
              value={comentario}
              onChange={(e) => setComentario(e.target.value)}
              className="w-full p-2 bg-black border border-gold rounded text-white h-24 resize-none"
              required
            ></textarea>
          </div>
          <button type="submit" className="bg-gold text-black px-6 py-2 rounded font-semibold hover:bg-yellow-600">
            Enviar Testimonio
          </button>
        </form>

        <div className="space-y-6">
          {testimonios.length === 0 ? (
            <p className="text-center text-gray-400">Aún no hay testimonios. ¡Sé el primero en compartir tu experiencia!</p>
          ) : (
            testimonios.map((testimonio) => (
              <div key={testimonio.id} className="bg-dark p-4 rounded-lg">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="text-gold font-semibold">{testimonio.nombre}</h4>
                  <span className="text-gray-400 text-sm">{testimonio.fecha}</span>
                </div>
                <p className="text-white">{testimonio.comentario}</p>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  )
}
