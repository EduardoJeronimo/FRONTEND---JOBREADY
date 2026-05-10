import { FaEnvelope, FaLock, FaUser, FaSchool, FaGraduationCap, FaXTwitter, FaInstagram, FaPhone, FaCalendar, FaCalendarDay } from 'react-icons/fa6';
import { useNavigate } from 'react-router-dom';
import logoJobReady from '../assets/logoJobReady.png';
import chica1 from '../assets/chica1.png';
import { Footer } from '../components/layout/Footer';
import { FaCalendarAlt, FaCalendarPlus, FaPhoneAlt } from 'react-icons/fa';

export const Register = () => {
  const navigate = useNavigate();

  const InputField = ({
    icon: Icon,
    placeholder,
    type = 'text',
  }: {
    icon: any;
    placeholder: string;
    type?: string;
  }) => (
    <div className="relative mb-3">
      <div
        className="absolute left-0 top-0 bottom-0 flex items-center justify-center"
        style={{ width: 48 }}
      >
        <Icon style={{ color: '#6B8FD4', fontSize: 15 }} />
      </div>
      <input
        type={type}
        placeholder={placeholder}
        className="w-full rounded-2xl py-3.5 pl-11 pr-4 text-sm outline-none transition-all"
        style={{
          background: '#EEF2FF',
          border: '1.5px solid #EEF2FF',
          color: '#3D4A6B',
          fontFamily: "'Nunito', sans-serif",
          fontWeight: 400,
          boxSizing: 'border-box' as const,
        }}
        onFocus={e => { e.target.style.border = '1.5px solid #6B8FD4'; }}
        onBlur={e =>  { e.target.style.border = '1.5px solid #EEF2FF'; }}
      />
    </div>
  );

  const SelectField = ({
    icon: Icon,
    placeholder,
  }: {
    icon?: any;
    placeholder: string;
  }) => (
    <div className="relative mb-3">
      {Icon && (
        <div
          className="absolute left-0 top-0 bottom-0 flex items-center justify-center z-10"
          style={{ width: 48 }}
        >
          <Icon style={{ color: '#6B8FD4', fontSize: 15 }} />
        </div>
      )}
      <select
        className="w-full rounded-2xl py-3.5 pr-10 text-sm outline-none appearance-none cursor-pointer transition-all"
        style={{
          paddingLeft: Icon ? '2.75rem' : '1rem',
          background: '#EEF2FF',
          border: '1.5px solid #EEF2FF',
          color: '#9CA3AF',
          fontFamily: "'Nunito', sans-serif",
        }}
        onFocus={e => { e.target.style.border = '1.5px solid #6B8FD4'; }}
        onBlur={e =>  { e.target.style.border = '1.5px solid #EEF2FF'; }}
      >
        <option value="">{placeholder}</option>
      </select>
      <svg
        className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none"
        width="14" height="14" viewBox="0 0 24 24" fill="#9CA3AF"
      >
        <path d="M7 10l5 5 5-5H7z" />
      </svg>
    </div>
  );

  return (
    <div
      className="min-h-screen flex flex-col"
      style={{ background: '#E8EAF6', fontFamily: "'Nunito', sans-serif" }}
    >
      {/* ── Navbar ── */}
      <div className="flex justify-center px-6 pt-6">
        <div
          className="w-full max-w-[1090px] bg-white rounded-2xl px-6 py-0 flex items-center justify-between mb-6 relative z-10"
          style={{ border: '1px solid #E5E7EB', height: '64px' }}
        >
          <img src={logoJobReady} alt="JobReady" className="h-16 object-contain ml-4" />
        </div>
      </div>

      {/* ── Card principal ── */}
      <div className="flex-1 flex items-start justify-center px-6 py-0">
        <div
          className="bg-white rounded-3xl w-full max-w-4xl"
          style={{ padding: '36px 40px', boxShadow: '0 4px 40px rgba(100,120,200,0.10)' }}
        >

          {/* ── Header: título izq | imagen arriba der ── */}
          <div className="flex justify-between items-start ">
            <div>
              <h1 style={{ fontSize: 26, fontWeight: 700, color: '#3D4A6B', letterSpacing: '-0.3px', marginBottom: 6 }}>
                Registro de Estudiantes
              </h1>
              <p style={{ fontSize: 14, color: '#9CA3AF', fontWeight: 400, lineHeight: 1.5 }}>
                Crea tu perfil para acceder a oportunidades <br/> de desarrollo profesional
              </p>
            </div>
            <img
              src={chica1}
              alt="Estudiante"
              className="object-contain flex-shrink-0"
              style={{ width: 150, height: 150, marginTop: -10 }}
            />
          </div>

          {/* ── Formulario en 2 columnas ── */}
          <div className="grid grid-cols-2 gap-10">

            {/* ── Columna IZQUIERDA: Datos Básicos ── */}
            <div>
              <p className="text-sm font-bold mb-3" style={{ color: '#3D4A6B' }}>
                Datos Básicos
              </p>

              <InputField icon={FaUser}     placeholder="Nombre completo" />
              <InputField icon={FaEnvelope} placeholder="Correo electrónico" type="email" />
              <InputField icon={FaLock}     placeholder="Contraseña" type="password" />
              <InputField icon={FaPhoneAlt} placeholder="Telefono" type="telefono" />
              <InputField icon={FaCalendarDay}     placeholder="Edad" type="edad  " />
              <SelectField                  placeholder="Selecciona semestre" />

              {/* Promedio */}
              <div className="flex items-center gap-2 mb-4 mt-1">
                <span className="text-sm font-bold" style={{ color: '#3D4A6B' }}>Promedio</span>
                <span
                  className="text-xs px-2 py-0.5 rounded-full"
                  style={{ background: '#EEF2FF', border: '1px solid #D1D5DB', color: '#9CA3AF' }}
                >
                  Opcional
                </span>
              </div>

              {/* Intereses */}
              <div className="flex items-center gap-2 mb-2">
                <span className="text-sm font-bold" style={{ color: '#3D4A6B' }}>Intereses profesionales</span>
                <span className="text-xs" style={{ color: '#9CA3AF' }}>Múltiple selección</span>
              </div>
              <div className="flex flex-wrap gap-2 mb-2">
                {['Marketing ›', 'Finanzas ›', 'Negocios ›'].map(tag => (
                  <span
                    key={tag}
                    className="text-xs font-semibold px-3 py-1.5 rounded-full cursor-pointer transition-opacity hover:opacity-80"
                    style={{ background: '#EEF2FF', color: '#6B8FD4' }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <input
                placeholder="Selecciona tus intereses"
                className="w-full rounded-2xl py-3.5 pl-4 pr-4 text-sm outline-none transition-all"
                style={{
                  background: '#EEF2FF',
                  border: '1.5px solid #EEF2FF',
                  color: '#3D4A6B',
                  fontFamily: "'Nunito', sans-serif",
                  boxSizing: 'border-box' as const,
                }}
                onFocus={e => { e.target.style.border = '1.5px solid #6B8FD4'; }}
                onBlur={e =>  { e.target.style.border = '1.5px solid #EEF2FF'; }}
              />
            </div>

            {/* ── Columna DERECHA: Datos Académicos + botón ── */}
            <div>
              <p className="text-sm font-bold mb-3 flex items-center gap-2" style={{ color: '#6B8FD4' }}>
                <span className="w-2.5 h-2.5 rounded-full inline-block" style={{ background: '#6B8FD4' }} />
                Datos Académicos
              </p>

              <SelectField icon={FaSchool}        placeholder="Universidad" />
              <SelectField icon={FaGraduationCap} placeholder="Carrera o especialidad" />
              <SelectField                        placeholder="Semestre o nivel" />

              <p className="text-sm font-bold mb-3 mt-4 flex items-center gap-2" style={{ color: '#3D4A6B' }}>
                <span className="w-2.5 h-2.5 rounded-full inline-block" style={{ background: '#6B8FD4' }} />
                Perfil Profesional
              </p>
              <p className="text-sm mb-2" style={{ color: '#3D4A6B' }}>¿Tienes experiencia laboral?</p>
              {['Sí', 'No'].map(opt => (
                <label key={opt} className="flex items-center gap-2 text-sm mb-2 cursor-pointer" style={{ color: '#3D4A6B' }}>
                  <input type="radio" name="exp" style={{ accentColor: '#6B8FD4' }} /> {opt}
                </label>
              ))}

              <button
                className="w-full text-white rounded-2xl py-4 mt-6 mb-3 transition-opacity hover:opacity-90"
                style={{
                  background: '#6B8FD4',
                  border: 'none',
                  cursor: 'pointer',
                  fontFamily: "'Nunito', sans-serif",
                  fontWeight: 600,
                  fontSize: 15,
                }}
                onClick={() => navigate('/home')}
              >
                Crear cuenta
              </button>

              <p className="text-center text-sm" style={{ color: '#9CA3AF', fontWeight: 400 }}>
                ¿Ya tienes una cuenta?{' '}
                <span
                  className="cursor-pointer hover:underline"
                  style={{ color: '#6B8FD4', fontWeight: 700 }}
                  onClick={() => navigate('/login')}
                >
                  Iniciar sesión
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center mt-6 mb-6">
        <Footer />
      </div>
    </div>
  );
};