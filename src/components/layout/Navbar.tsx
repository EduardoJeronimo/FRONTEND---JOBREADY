import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import logoJobReady from '../../assets/logo2.png';
import fotoperil    from '../../assets/fotoperil.png';

interface NavbarProps {
  activeLink?: string;
}

export const Navbar = ({ activeLink = 'Inicio' }: NavbarProps) => {
  const navigate = useNavigate();
  const [menuAbierto, setMenuAbierto] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Cierra el menú si se hace click fuera
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMenuAbierto(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <nav
      className="flex items-center px-10"
      style={{
        background: '#1E3A8A',
        height: 72,
        boxShadow: '0 2px 12px rgba(30,58,138,0.2)',
        position: 'relative',
        zIndex: 50,
      }}
    >
      <img
        src={logoJobReady}
        alt="JobReady"
        className="object-contain ml-6"
        style={{ height: 148 }}
      />

      <div className="flex-1" />

      <div className="flex items-center gap-8">
        {['Inicio', 'Mis Cursos', 'Empresas Aliadas', 'Soporte'].map((label) => (
          <span
            key={label}
            className="cursor-pointer pb-1 transition-all"
            style={{
              fontSize: 16,
              fontWeight: 700,
              color: 'white',
              borderBottom: activeLink === label ? '2px solid white' : '2px solid transparent',
              letterSpacing: '0.01em',
              whiteSpace: 'nowrap',
            }}
            onClick={() => {
              if (label === 'Inicio') navigate('/home');
              if (label === 'Mis Cursos') navigate('/courses');
              if (label === 'Empresas Aliadas') navigate('/empresas-aliadas');
              if (label === 'Soporte') navigate('/soporte');
            }}
          >
            {label}
          </span>
        ))}

        <div style={{ width: 1, height: 24, background: 'rgba(255,255,255,0.25)' }} />

        {/* ── Perfil con menú desplegable ── */}
        <div className="relative" ref={menuRef}>
          <button
            className="flex items-center gap-2 transition-opacity hover:opacity-90"
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '6px 10px',
              borderRadius: 10,
              backgroundColor: menuAbierto ? 'rgba(255,255,255,0.12)' : 'transparent',
            }}
            onClick={() => setMenuAbierto(!menuAbierto)}
          >
            <img
              src={fotoperil}
              alt="Juanita López"
              className="rounded-full object-cover"
              style={{ width: 36, height: 36, border: '2px solid rgba(255,255,255,0.5)' }}
            />
            <span style={{ color: 'white', fontSize: 16, fontWeight: 700, whiteSpace: 'nowrap' }}>
              Hola,  Sofía Herrera
            </span>
            {/* Flecha que rota */}
            <svg
              width="16" height="16" viewBox="0 0 24 24" fill="white"
              style={{
                transition: 'transform 0.2s',
                transform: menuAbierto ? 'rotate(180deg)' : 'rotate(0deg)',
              }}
            >
              <path d="M7 10l5 5 5-5H7z"/>
            </svg>
          </button>

          {/* ── Dropdown ── */}
          {menuAbierto && (
            <div
              className="absolute right-0"
              style={{
                top: 'calc(100% + 10px)',
                width: 220,
                background: 'white',
                borderRadius: 14,
                boxShadow: '0 8px 32px rgba(30,58,138,0.15)',
                border: '1px solid #E5E7EB',
                overflow: 'hidden',
                zIndex: 100,
              }}
            >
              {/* Header del menú */}
              <div className="flex items-center gap-3 px-4 py-4"
                style={{ borderBottom: '1px solid #F3F4F6', background: '#F9FAFB' }}>
                <img
                  src={fotoperil}
                  alt="Juanita"
                  className="rounded-full object-cover flex-shrink-0"
                  style={{ width: 40, height: 40, border: '2px solid #E5E7EB' }}
                />
                <div className="min-w-0">
                  <p className="font-extrabold truncate" style={{ fontSize: 14, color: '#1F2937' }}>
                    Sofía Herrera
                  </p>
                  <p className="truncate" style={{ fontSize: 12, color: '#6B7280' }}>
                    sofia.herrera@gmail.com
                  </p>
                </div>
              </div>

              {/* Opciones */}
              <div className="py-2">

                {/* Notificaciones */}
                <button
                  className="w-full flex items-center gap-3 px-4 py-3 transition-colors hover:bg-gray-50"
                  style={{
                    background: 'none', border: 'none', cursor: 'pointer',
                    fontFamily: "'Nunito', sans-serif", textAlign: 'left',
                  }}
                  onClick={() => { setMenuAbierto(false); navigate('/notificaciones'); }}
                >
                  <div className="flex items-center justify-center rounded-lg flex-shrink-0"
                    style={{ width: 34, height: 34, background: '#EFF6FF' }}>
                    <svg width="17" height="17" viewBox="0 0 24 24" fill="#3B82F6">
                      <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="font-bold" style={{ fontSize: 14, color: '#1F2937' }}>Notificaciones</p>
                  </div>
                  {/* Badge contador */}
                  <span className="ml-auto font-bold text-xs flex items-center justify-center rounded-full"
                    style={{ width: 20, height: 20, background: '#EF4444', color: 'white', fontSize: 11 }}>
                    3
                  </span>
                </button>

                <div style={{ height: 1, background: '#F3F4F6', margin: '4px 0' }} />

                {/* Cerrar sesión */}
                <button
                  className="w-full flex items-center gap-3 px-4 py-3 transition-colors hover:bg-red-50"
                  style={{
                    background: 'none', border: 'none', cursor: 'pointer',
                    fontFamily: "'Nunito', sans-serif", textAlign: 'left',
                  }}
                  onClick={() => { setMenuAbierto(false); navigate('/login'); }}
                >
                  <div className="flex items-center justify-center rounded-lg flex-shrink-0"
                    style={{ width: 34, height: 34, background: '#FEF2F2' }}>
                    <svg width="17" height="17" viewBox="0 0 24 24" fill="#EF4444">
                      <path d="M17 7l-1.41 1.41L18.17 11H8v2h10.17l-2.58 2.58L17 17l5-5-5-5zM4 5h8V3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8v-2H4V5z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="font-bold" style={{ fontSize: 14, color: '#EF4444' }}>Cerrar sesión</p>
                  </div>
                </button>

              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};