import { FaEnvelope, FaLock, FaXTwitter, FaInstagram, FaPhone } from 'react-icons/fa6';
import { useNavigate } from 'react-router-dom';
import logoJobReady from '../assets/logoJobReady.png';
import { Footer } from '../components/layout/Footer';

export const Login = () => {
  const navigate = useNavigate();

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center p-8 relative overflow-hidden"
      style={{ background: '#E8EAF6', fontFamily: "'Nunito', sans-serif" }}
    >
      
      {/* ── Navbar superior ── */}
     <div
      className="w-full max-w-4xl bg-white rounded-2xl px-6 py-0 flex items-center justify-between mb-6 relative z-10"
      style={{ border: '1px solid #E5E7EB', height: '64px' }}
      >
        <img src={logoJobReady} alt="JobReady" className="h-16 ml-4" />
        <div className="flex gap-2">
        </div>
      </div>

      {/* ── Card login ── */}
      <div
        className="bg-white rounded-3xl w-full max-w-md relative z-10"
        style={{ padding: '40px 40px 32px', boxShadow: '0 4px 40px rgba(100,120,200,0.10)' }}
      >
        {/* Título — peso 700, no extrabold */}
        <h1
          className="mb-2"
          style={{ fontSize: 28, fontWeight: 700, color: '#3D4A6B', letterSpacing: '-0.3px' }}
        >
          Iniciar Sesión
        </h1>
        <p className="mb-7" style={{ fontSize: 14, color: '#9CA3AF', fontWeight: 400 }}>
          Ingresa a la plataforma para continuar tu aprendizaje.
        </p>

        {/* Campo email */}
        <div className="relative mb-4">
          <div
            className="absolute left-0 top-0 bottom-0 flex items-center justify-center"
            style={{ width: 52 }}
          >
            <FaEnvelope style={{ color: '#6B8FD4', fontSize: 16 }} />
          </div>
          <input
            type="email"
            placeholder="Correo electrónico"
            className="w-full rounded-2xl py-4 pl-12 pr-4 text-sm outline-none transition-all"
            style={{
              background: '#EEF2FF',
              border: '1.5px solid #EEF2FF',
              color: '#3D4A6B',
              fontFamily: "'Nunito', sans-serif",
              fontWeight: 400,
            }}
            onFocus={e => { e.target.style.border = '1.5px solid #6B8FD4'; }}
            onBlur={e =>  { e.target.style.border = '1.5px solid #EEF2FF'; }}
          />
        </div>

        {/* Campo contraseña */}
        <div className="relative mb-3">
          <div
            className="absolute left-0 top-0 bottom-0 flex items-center justify-center"
            style={{ width: 52 }}
          >
            <FaLock style={{ color: '#6B8FD4', fontSize: 16 }} />
          </div>
          <input
            type="password"
            placeholder="Contraseña"
            className="w-full rounded-2xl py-4 pl-12 pr-4 text-sm outline-none transition-all"
            style={{
              background: '#EEF2FF',
              border: '1.5px solid #EEF2FF',
              color: '#3D4A6B',
              fontFamily: "'Nunito', sans-serif",
              fontWeight: 400,
            }}
            onFocus={e => { e.target.style.border = '1.5px solid #6B8FD4'; }}
            onBlur={e =>  { e.target.style.border = '1.5px solid #EEF2FF'; }}
          />
        </div>

        {/* ¿Olvidaste tu contraseña? */}
        <button
          className="text-sm mb-6 block transition-opacity hover:opacity-70"
          style={{
            background: 'none', border: 'none',
            color: '#6B8FD4', fontWeight: 500,
            cursor: 'pointer', fontFamily: "'Nunito', sans-serif",
            padding: 0,
          }}
        >
          ¿Olvidaste tu contraseña?
        </button>

        {/* Botón iniciar sesión */}
        <button
          className="w-full text-white rounded-2xl py-4 text-base mb-5 transition-opacity hover:opacity-90"
          style={{
            background: '#6B8FD4',
            border: 'none', cursor: 'pointer',
            fontFamily: "'Nunito', sans-serif",
            fontWeight: 600, fontSize: 15,
          }}
          onClick={() => navigate('/home')}
        >
          Iniciar sesión
        </button>

        {/* Registro */}
        <p className="text-center text-sm" style={{ color: '#9CA3AF', fontWeight: 400 }}>
          ¿ No tienes una cuenta?{' '}
          <span
            className="cursor-pointer hover:underline"
            style={{ color: '#6B8FD4', fontWeight: 700 }}
            onClick={() => navigate('/register')}
          >
            Regístrate
          </span>
        </p>
      </div>

      <Footer />
      
    </div>
  );
};