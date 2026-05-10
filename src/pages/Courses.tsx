import { useNavigate } from 'react-router-dom';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import curso1  from '../assets/Cursos-img/curso1.png';
import curso2  from '../assets/Cursos-img/curso2.png';
import curso3  from '../assets/Cursos-img/curso3.png';
import curso4  from '../assets/Cursos-img/curso4.png';
import curso5  from '../assets/Cursos-img/curso5.png';
import curso6  from '../assets/Cursos-img/curso6.png';
import curso7  from '../assets/Cursos-img/curso7.png';
import curso8  from '../assets/Cursos-img/curso8.png';
import curso9  from '../assets/Cursos-img/curso9.png';
import curso10 from '../assets/Cursos-img/curso10.png';
import curso11 from '../assets/Cursos-img/curso11.png';
import curso12 from '../assets/Cursos-img/curso12.png';

type Status = 'completado' | 'disponible' | 'bloqueado';

interface Module {
  id: number;
  img: string;
  status: Status;
  progress?: number;  
  title: string;
  desc: string;
}

const modules: Module[] = [
  {
    id: 1, img: curso1, status: 'completado', progress: 100,
    title: 'Módulo 1. Inducción y diagnóstico inicial.',
    desc:  'Conoce el programa, evalúa tus habilidades actuales y define tu plan de desarrollo.',
  },
  {
    id: 2, img: curso2, status: 'disponible', progress: 60,
    title: 'Módulo 2. Mentalidad profesional y enfermedad.',
    desc:  'Desarrolla una mentalidad profesional positiva y fortalece tu enfoque y disciplina.',
  },
  {
    id: 3, img: curso3, status: 'bloqueado',
    title: 'Módulo 3. Valores y comportamiento en el entorno laboral.',
    desc:  'Aplica valores y comportamientos que te permitan integrarte con éxito.',
  },
  {
    id: 4, img: curso4, status: 'bloqueado',
    title: 'Módulo 4. Habilidades blandas y comunicación efectiva.',
    desc:  'Mejora tu comunicación y desarrolla habilidades blandas clave para tu crecimiento.',
  },
  {
    id: 5, img: curso5, status: 'bloqueado',
    title: 'Módulo 5. Pensamiento analítico y resolución de problemas.',
    desc:  'Aprende a analizar situaciones, tomar decisiones y resolver problemas de manera efectiva.',
  },
  {
    id: 6, img: curso6, status: 'bloqueado',
    title: 'Módulo 6. Fundamentos técnicos del área comercial.',
    desc:  'Conoce los conceptos y herramientas esenciales del área comercial.',
  },
  {
    id: 7, img: curso7, status: 'bloqueado',
    title: 'Módulo 7. Actitud de servicio y adaptación al entorno laboral.',
    desc:  'Desarrolla una actitud de servicio y la capacidad de adaptarte a diferentes entornos.',
  },
  {
    id: 8, img: curso8, status: 'bloqueado',
    title: 'Módulo 8. Autogestión y aprendizaje continuo.',
    desc:  'Aprende a organizarte, gestionar tu tiempo y seguir aprendiendo de forma constante.',
  },
  {
    id: 9, img: curso9, status: 'bloqueado',
    title: 'Módulo 9. Imagen y presentación profesional.',
    desc:  'Cuida tu imagen personal y proyecta profesionalismo en cualquier situación.',
  },
  {
    id: 10, img: curso10, status: 'bloqueado',
    title: 'Módulo 10. Herramientas de empleabilidad.',
    desc:  'Conoce y aplica herramientas prácticas para impulsar tu búsqueda de empleo.',
  },
  {
    id: 11, img: curso11, status: 'bloqueado',
    title: 'Módulo 11. Preparación para entrevistas laborales.',
    desc:  'Prepárate para entrevistas y aumenta tus posibilidades de éxito.',
  },
  {
    id: 12, img: curso12, status: 'bloqueado',
    title: 'Módulo 12. Simulación del entorno laboral.',
    desc:  'Vive experiencias prácticas que te preparan para los retos del mundo laboral.',
  },
];

// ── Badge por estado ─────────────────────────────────────────────────────────
const Badge = ({ status }: { status: Status }) => {
  const cfg = {
    completado: { bg: '#16A34A', color: 'white',    label: 'Completado' },
    disponible: { bg: '#FFF7ED', color: '#F97316',  label: 'Disponible' },
    bloqueado:  { bg: '#F3F4F6', color: '#9CA3AF',  label: 'Bloqueado'  },
  }[status];

  return (
    <span
      className="text-xs font-bold px-3 py-1 rounded-full inline-flex items-center gap-1"
      style={{ background: cfg.bg, color: cfg.color }}
    >
      {status === 'bloqueado' && (
        <svg width="10" height="10" viewBox="0 0 24 24" fill={cfg.color}>
          <path d="M18 8h-1V6c0-2.8-2.2-5-5-5S7 3.2 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2z"/>
        </svg>
      )}
      {cfg.label}
    </span>
  );
};

// ── Barra de progreso ────────────────────────────────────────────────────────
const ProgressBar = ({ value, status }: { value: number; status: Status }) => {
  const color = status === 'completado' ? '#3B82F6' : '#F97316';
  return (
    <div className="w-full rounded-full mb-3" style={{ height: 6, background: '#E5E7EB' }}>
      <div
        className="rounded-full h-full transition-all"
        style={{ width: `${value}%`, background: color }}
      />
    </div>
  );
};

// ── Ícono del nodo de la barra vertical ─────────────────────────────────────
const StepIcon = ({ status }: { status: Status }) => {
  if (status === 'completado') {
    return (
      <div
        className="flex items-center justify-center rounded-full flex-shrink-0"
        style={{ width: 28, height: 28, background: '#16A34A', zIndex: 1 }}
      >
        {/* Palomita */}
        <svg width="14" height="14" viewBox="0 0 24 24" fill="white">
          <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
        </svg>
      </div>
    );
  }
  if (status === 'disponible') {
    return (
      <div
        className="flex items-center justify-center rounded-full flex-shrink-0"
        style={{ width: 28, height: 28, background: '#F97316', zIndex: 1 }}
      >
        {/* Punto naranja */}
        <div style={{ width: 10, height: 10, borderRadius: '50%', background: 'white' }} />
      </div>
    );
  }
  // bloqueado
  return (
    <div
      className="flex items-center justify-center rounded-full flex-shrink-0"
      style={{ width: 28, height: 28, background: '#E5E7EB', zIndex: 1 }}
    >
      <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#D1D5DB' }} />
    </div>
  );
};

// ── Componente principal ─────────────────────────────────────────────────────
export const Courses = () => {
  const navigate = useNavigate(); 

  return (
    <div className="min-h-screen flex flex-col" style={{ background: '#F5F7FA', fontFamily: "'Nunito', sans-serif" }}>
      
      <Navbar activeLink="Mis Cursos" />

      {/* ── Contenido ── */}
      <div className="flex-1 max-w-[1200px] mx-auto px-6 py-8 w-full">
        <h1 className="text-4xl font-extrabold mb-1" style={{ color: '#1F2937' }}>Mis Cursos</h1>
        <p className="text-2x1 mb-6" style={{ color: '#6B7280' }}>
          A continuación, tu programa de capacitación para el éxito profesional.
        </p>

        {/* ── Layout: barra vertical izq + lista der ── */}
        <div className="flex gap-6">

          {/* ── Barra vertical de progreso ── */}
          <div className="flex flex-col items-center flex-shrink-0" style={{ width: 28, paddingTop: 24 }}>
            {modules.map((mod, i) => (
              <div key={mod.id} className="flex flex-col items-center" style={{ flex: 1 }}>
                {/* Nodo */}
                <StepIcon status={mod.status} />
                {/* Línea conectora (no en el último) */}
                {i < modules.length - 1 && (
                  <div
                    style={{
                      width: 3,
                      flex: 1,
                      minHeight: 60,
                      background: mod.status === 'completado' ? '#16A34A'
                                : mod.status === 'disponible' ? '#F97316'
                                : '#E5E7EB',
                      borderRadius: 2,
                    }}
                  />
                )}
              </div>
            ))}
          </div>

          {/* ── Lista de módulos ── */}
          <div className="flex flex-col gap-4 flex-1">
            {modules.map(mod => (
              <div
                key={mod.id}
                className="bg-white rounded-2xl flex items-center gap-5"
                style={{
                  padding: '24px 28px',
                  border: '1px solid #E5E7EB',
                  boxShadow: '0 2px 12px rgba(30,58,138,0.05)',
                  opacity: mod.status === 'bloqueado' ? 0.75 : 1,
                }}
              >
                {/* Imagen del módulo */}
                <img
                  src={mod.img}
                  alt={mod.title}
                  className="object-contain flex-shrink-0"
                  style={{
                    width: 150, height: 150,
                    filter: mod.status === 'bloqueado' ? 'grayscale(50%)' : 'none',
                  }}
                />

                {/* Contenido */}
                <div className="flex-1 min-w-0">
                  {/* Badge + número arriba */}
                  <div className="flex items-center justify-between mb-2">
                    <Badge status={mod.status} />
                    <span
                      className="font-extrabold"
                      style={{ fontSize: 40, color: '#d5d5d6', lineHeight: 1, letterSpacing: '-1px' }}
                    >
                      {String(mod.id).padStart(2, '0')}
                    </span>
                  </div>

                  <h2 className="font-extrabold mb-1" style={{ fontSize: 15, color: '#1F2937' }}>
                    {mod.title}
                  </h2>
                  <p className="text-sm mb-3" style={{ color: '#6B7280', lineHeight: 1.5 }}>
                    {mod.desc}
                  </p>

                  {/* Barra de progreso */}
                  {mod.progress !== undefined && (
                    <>
                      <div className="flex items-center gap-3 mb-3">
                        <div className="flex-1 rounded-full" style={{ height: 6, background: '#E5E7EB' }}>
                          <div
                            className="rounded-full h-full"
                            style={{
                              width: `${mod.progress}%`,
                              background: mod.status === 'completado' ? '#3B82F6' : '#F97316',
                            }}
                          />
                        </div>
                        <span
                          className="font-bold flex-shrink-0"
                          style={{ fontSize: 13, color: mod.status === 'completado' ? '#3B82F6' : '#F97316', minWidth: 36, textAlign: 'right' }}
                        >
                          {mod.progress}%
                        </span>
                      </div>

                      <button
                        className="text-sm font-bold px-5 py-2 rounded-xl transition-opacity hover:opacity-90"
                        style={{
                          background: mod.status === 'completado' ? '#3B82F6' : '#F97316',
                          color: 'white', border: 'none', cursor: 'pointer',
                          fontFamily: "'Nunito', sans-serif",
                        }}
                        onClick={() => navigate('/CoursesDetail')}
                      >
                        {mod.status === 'completado' ? 'Ver detalles' : 'Continuar'}
                      </button>
                    </>
                  )}

                  {/* Bloqueado */}
                  {mod.status === 'bloqueado' && (
                    <div className="flex items-center gap-2">
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="#9CA3AF">
                        <path d="M18 8h-1V6c0-2.8-2.2-5-5-5S7 3.2 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2z"/>
                      </svg>
                      <span className="text-xs" style={{ color: '#9CA3AF' }}>
                        Disponible al completar el módulo anterior
                      </span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center mt-6 mb-6">
        <Footer />
      </div>
    </div>
  );
};