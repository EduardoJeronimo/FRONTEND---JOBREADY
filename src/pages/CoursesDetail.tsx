import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import cursoPng from '../assets/curso.png';
import flechaCursos from '../assets/Flecha de cursos.png';

// ── Lucide icons ──────────────────────────────────────────────────────────
import {
  Play, ClipboardList, User, TrendingUp,
  FileText, ExternalLink, Clock3, BookOpen,
  CircleCheck, Star, Lock, ChevronLeft, ChevronRight,
} from 'lucide-react';

// ── Data (importada desde src/data/courseDetailData.ts) ───────────────────
import {
  modulos, contenidoModulo, recursos, actividades, statsModulo1,
} from '../data/Coursedetaildata';

// ── Icono de actividad según tipo ─────────────────────────────────────────
const ActividadIcono = ({ tipo }: { tipo: string }) => {
  const cls = "w-5 h-5 text-[#5B8CFF]";
  const sw  = 2.2;
  switch (tipo) {
    case 'play':      return <Play          className={cls} strokeWidth={sw} />;
    case 'clipboard': return <ClipboardList className={cls} strokeWidth={sw} />;
    case 'user':      return <User          className={cls} strokeWidth={sw} />;
    case 'trending':  return <TrendingUp    className={cls} strokeWidth={sw} />;
    default:          return <FileText      className={cls} strokeWidth={sw} />;
  }
};

// ── Icono de stat ─────────────────────────────────────────────────────────
const StatIcono = ({ tipo }: { tipo: string }) => {
  const cls = "w-5 h-5 text-[#9CA3AF]";
  switch (tipo) {
    case 'clock': return <Clock3       className={cls} strokeWidth={2} />;
    case 'book':  return <BookOpen     className={cls} strokeWidth={2} />;
    case 'check': return <CircleCheck  className="w-5 h-5 text-[#16A34A]" strokeWidth={2} />;
    default:      return null;
  }
};

type Tab = 'descripcion' | 'actividades' | 'contenido' | 'recursos';

export const CourseDetail = () => {
  const navigate = useNavigate();
  const [moduloActivo, setModuloActivo] = useState(1);
  const [tabActiva, setTabActiva]       = useState<Tab>('descripcion');

  const tabs: { key: Tab; label: string }[] = [
    { key: 'descripcion', label: 'Descripción' },
    { key: 'actividades', label: 'Lo que aprenderás (Actividades)' },
    { key: 'contenido',   label: 'Contenido del módulo' },
    { key: 'recursos',    label: 'Recursos' },
  ];

  return (
    <div className="min-h-screen" style={{ background: '#F5F7FA', fontFamily: "'Nunito', sans-serif" }}>

      <Navbar activeLink="Mis Cursos" />

      {/* ── Volver ── */}
      <div className="max-w-7xl mx-auto px-6 pt-5 pb-2">
        <button
          className="flex items-center gap-2 text-sm font-semibold transition-opacity hover:opacity-70"
          style={{ background: 'none', border: 'none', color: '#374151', cursor: 'pointer', fontFamily: "'Nunito', sans-serif" }}
          onClick={() => navigate('/courses')}
        >
          <ChevronLeft className="w-4 h-4" strokeWidth={2.5} />
          Volver a Mis Cursos
        </button>
      </div>

      {/* ── Layout principal ── */}
      <div className="max-w-7xl mx-auto px-6 pb-10 flex gap-6">

        {/* ══ Sidebar izquierdo ══ */}
        <div className="flex-shrink-0" style={{ width: 300 }}>
          <div className="bg-white rounded-2xl overflow-hidden"
            style={{ border: '1px solid #E5E7EB', boxShadow: '0 1px 8px rgba(30,58,138,0.05)' }}>
            <div className="px-5 pt-5 pb-3">
              <p className="font-extrabold mb-1" style={{ fontSize: 15, color: '#1F2937' }}>Programa JobReady</p>
              <p className="text-xs mb-3" style={{ color: '#6B7280' }}>Tu ruta hacia el éxito profesional</p>
              <p className="text-xs font-semibold mb-1" style={{ color: '#374151' }}>Tu progreso general</p>
              <div className="flex items-center gap-2">
                <div className="flex-1 rounded-full overflow-hidden" style={{ height: 8, background: '#E5E7EB' }}>
                  <div className="h-full rounded-full" style={{ width: '17%', background: '#3B82F6' }} />
                </div>
                <span className="text-xs font-bold" style={{ color: '#3B82F6' }}>17%</span>
              </div>
            </div>

            {/* Lista módulos */}
            <div className="overflow-y-auto" style={{ maxHeight: 520 }}>
              {modulos.map((mod) => {
                const activo = moduloActivo === mod.id;
                return (
                  <button key={mod.id} onClick={() => setModuloActivo(mod.id)}
                    className="w-full text-left flex items-center gap-3 transition-colors"
                    style={{
                      padding: '12px 16px', background: activo ? '#EFF6FF' : 'white',
                      border: 'none', borderLeft: activo ? '3px solid #3B82F6' : '3px solid transparent',
                      borderBottom: '1px solid #F3F4F6', cursor: 'pointer',
                      fontFamily: "'Nunito', sans-serif",
                    }}>
                    <div className="flex-shrink-0 flex items-center justify-center rounded-full text-xs font-bold"
                      style={{ width: 28, height: 28,
                        background: activo ? '#3B82F6' : mod.completado ? '#3B82F6' : '#F3F4F6',
                        color: activo || mod.completado ? 'white' : '#9CA3AF' }}>
                      {mod.id}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-bold truncate" style={{ color: activo ? '#1E3A8A' : '#1F2937' }}>
                        {mod.titulo}
                      </p>
                      <p className="text-xs truncate" style={{ color: '#6B7280' }}>{mod.subtitulo}</p>
                    </div>
                    {mod.completado
                      ? <CircleCheck className="w-4 h-4 flex-shrink-0" style={{ color: '#3B82F6' }} strokeWidth={2} />
                      : !activo
                      ? <Lock className="w-3.5 h-3.5 flex-shrink-0" style={{ color: '#9CA3AF' }} strokeWidth={2} />
                      : null}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* ══ Contenido principal ══ */}
        <div className="flex-1 min-w-0">

          {/* ── Header módulo ── */}
          <div className="bg-white rounded-2xl mb-4 overflow-hidden"
            style={{ border: '1px solid #E5E7EB', boxShadow: '0 1px 8px rgba(30,58,138,0.05)' }}>
            <div className="flex items-start justify-between p-7">
              <div className="flex-1">
                <span className="inline-block text-xs font-bold px-3 py-1 rounded-full mb-3"
                  style={{ background: '#16A34A', color: 'white' }}>
                  Completado
                </span>
                <p className="font-bold mb-1" style={{ fontSize: 18, color: '#374151' }}>Módulo 1.</p>
                <h1 className="font-extrabold mb-3" style={{ fontSize: 26, color: '#1F2937', lineHeight: 1.2 }}>
                  Inducción y diagnóstico inicial.
                </h1>
                <p style={{ fontSize: 14, color: '#6B7280', maxWidth: 560 }}>
                  Conoce el programa, evalúa tus habilidades actuales y define tu plan de desarrollo.
                </p>

                {/* Stats con Lucide */}
                <div className="flex items-center gap-8 mt-5">
                  {statsModulo1.map((s, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <StatIcono tipo={s.icon} />
                      <div>
                        <p className="text-xs" style={{ color: '#9CA3AF' }}>{s.label}</p>
                        <p className="text-sm font-bold" style={{ color: s.valueColor }}>{s.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <img src={cursoPng} alt="Módulo" className="object-contain flex-shrink-0 ml-4"
                style={{ width: 300, height: 180 }} />
            </div>

            {/* Tabs */}
            <div className="flex border-t" style={{ borderColor: '#E5E7EB' }}>
              {tabs.map((tab) => (
                <button key={tab.key} onClick={() => setTabActiva(tab.key)}
                  className="px-5 py-3 text-sm font-semibold transition-colors"
                  style={{
                    background: 'none', border: 'none', cursor: 'pointer',
                    fontFamily: "'Nunito', sans-serif",
                    color: tabActiva === tab.key ? '#3B82F6' : '#6B7280',
                    borderBottom: tabActiva === tab.key ? '2px solid #3B82F6' : '2px solid transparent',
                    marginBottom: -1,
                  }}>
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* ── Tab content ── */}
          <div className="flex gap-4">

            {/* Columna principal */}
            <div className="flex-1 min-w-0">
              <div className="bg-white rounded-2xl p-6"
                style={{ border: '1px solid #E5E7EB', boxShadow: '0 1px 8px rgba(30,58,138,0.05)' }}>

                {(tabActiva === 'descripcion' || tabActiva === 'actividades') && (
                  <>
                    {/* Descripción */}
                    <div className="mb-6">
                      <h3 className="font-extrabold mb-3" style={{ fontSize: 15, color: '#3B82F6' }}>
                        Descripción del módulo
                      </h3>
                      <div className="flex gap-4">
                        <p style={{ fontSize: 13, color: '#374151', lineHeight: 1.7, flex: 1 }}>
                          En este módulo conocerás la estructura del programa JobReady, identificarás tus
                          habilidades actuales y establecerás un plan personalizado para tu desarrollo
                          profesional. Es el primer paso para construir tu mejor versión.
                        </p>
                        <img src={flechaCursos} alt="Flecha cursos"
                        className="flex-shrink-0 object-contain"
                        style={{ width: 80, height: 80 }}
                        />
                      </div>
                    </div>

                    {/* Actividades con Lucide */}
                    <h3 className="font-extrabold mb-3" style={{ fontSize: 15, color: '#1F2937' }}>
                      Lo que aprenderás (Actividades)
                    </h3>
                    <div className="flex flex-col gap-3">
                      {actividades.map((act, i) => (
                        <div key={i} className="flex items-start gap-3 p-4 rounded-xl"
                          style={{ background: '#F9FAFB', border: '1px solid #E5E7EB' }}>
                          <div className="flex-shrink-0 flex items-center justify-center rounded-full"
                            style={{ width: 38, height: 38, background: '#EEF2FF' }}>
                            <ActividadIcono tipo={act.icon} />
                          </div>
                          <div>
                            <p className="font-bold text-sm mb-1" style={{ color: '#1F2937' }}>{act.titulo}</p>
                            <p className="text-xs" style={{ color: '#6B7280' }}>{act.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </>
                )}

                {tabActiva === 'contenido' && (
                  <div>
                    <h3 className="font-extrabold mb-4" style={{ fontSize: 15, color: '#1F2937' }}>
                      Contenido del módulo
                    </h3>
                    {contenidoModulo.map((item, i) => (
                      <div key={i} className="flex items-center justify-between py-3"
                        style={{ borderBottom: i < contenidoModulo.length - 1 ? '1px solid #F3F4F6' : 'none' }}>
                        <div className="flex items-center gap-3">
                          <div className="flex items-center justify-center rounded-lg"
                            style={{ width: 30, height: 30, background: item.estrella ? '#FFF7ED' : '#EFF6FF' }}>
                            {item.estrella
                              ? <Star className="w-4 h-4" style={{ color: '#F97316' }} strokeWidth={2} />
                              : <FileText className="w-4 h-4" style={{ color: '#3B82F6' }} strokeWidth={2} />}
                          </div>
                          <span className="text-sm font-semibold"
                            style={{ color: item.estrella ? '#F97316' : '#1F2937' }}>
                            {item.titulo}
                          </span>
                        </div>
                        <span className="text-xs font-semibold" style={{ color: '#9CA3AF' }}>{item.duracion}</span>
                      </div>
                    ))}
                  </div>
                )}

                {tabActiva === 'recursos' && (
                  <div>
                    <h3 className="font-extrabold mb-4" style={{ fontSize: 15, color: '#1F2937' }}>
                      Recursos adicionales
                    </h3>
                    {recursos.map((r, i) => (
                      <div key={i} className="flex items-center justify-between py-3"
                        style={{ borderBottom: i < recursos.length - 1 ? '1px solid #F3F4F6' : 'none' }}>
                        <div className="flex items-center gap-3">
                          <div className="flex items-center justify-center rounded-lg"
                            style={{ width: 30, height: 30, background: '#EFF6FF' }}>
                            <FileText className="w-4 h-4" style={{ color: '#3B82F6' }} strokeWidth={2} />
                          </div>
                          <span className="text-sm font-semibold" style={{ color: '#1F2937' }}>{r}</span>
                        </div>
                        <ExternalLink className="w-4 h-4 flex-shrink-0" style={{ color: '#3B82F6' }} strokeWidth={2} />
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* ── Sidebar derecho ── */}
            <div className="flex-shrink-0 flex flex-col gap-4" style={{ width: 260 }}>

              {/* Contenido del módulo */}
              <div className="bg-white rounded-2xl p-5" style={{ border: '1px solid #E5E7EB' }}>
                <h4 className="font-extrabold mb-3" style={{ fontSize: 14, color: '#1F2937' }}>
                  Contenido del módulo
                </h4>
                {contenidoModulo.map((item, i) => (
                  <div key={i} className="flex items-center justify-between py-2.5"
                    style={{ borderBottom: i < contenidoModulo.length - 1 ? '1px solid #F3F4F6' : 'none' }}>
                    <div className="flex items-center gap-2 min-w-0">
                      <div className="flex-shrink-0 flex items-center justify-center rounded"
                        style={{ width: 22, height: 22, background: item.estrella ? '#FFF7ED' : '#EFF6FF' }}>
                        {item.estrella
                          ? <Star className="w-3 h-3" style={{ color: '#F97316' }} strokeWidth={2} />
                          : <FileText className="w-3 h-3" style={{ color: '#3B82F6' }} strokeWidth={2} />}
                      </div>
                      <span className="text-xs truncate"
                        style={{ color: item.estrella ? '#F97316' : '#374151', fontWeight: item.estrella ? 700 : 500 }}>
                        {item.titulo}
                      </span>
                    </div>
                    <span className="text-xs flex-shrink-0 ml-2" style={{ color: '#9CA3AF' }}>{item.duracion}</span>
                  </div>
                ))}
              </div>

              {/* Recursos adicionales */}
              <div className="bg-white rounded-2xl p-5" style={{ border: '1px solid #E5E7EB' }}>
                <h4 className="font-extrabold mb-3" style={{ fontSize: 14, color: '#1F2937' }}>
                  Recursos adicionales
                </h4>
                {recursos.map((r, i) => (
                  <div key={i} className="flex items-center justify-between py-2.5"
                    style={{ borderBottom: i < recursos.length - 1 ? '1px solid #F3F4F6' : 'none' }}>
                    <div className="flex items-center gap-2 min-w-0">
                      <FileText className="w-3.5 h-3.5 flex-shrink-0" style={{ color: '#3B82F6' }} strokeWidth={2} />
                      <span className="text-xs truncate" style={{ color: '#374151', fontWeight: 500 }}>{r}</span>
                    </div>
                    <ExternalLink className="w-3.5 h-3.5 flex-shrink-0 ml-1" style={{ color: '#3B82F6' }} strokeWidth={2} />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ── Botones navegación ── */}
          <div className="flex items-center justify-between mt-5">
            <button
              className="flex items-center gap-2 font-bold rounded-xl transition-opacity hover:opacity-90"
              style={{ background: 'white', color: '#374151', border: '1px solid #E5E7EB',
                cursor: 'pointer', fontFamily: "'Nunito', sans-serif", fontSize: 14, padding: '12px 24px' }}
              onClick={() => navigate('/courses')}>
              <ChevronLeft className="w-4 h-4" strokeWidth={2.5} />
              Módulo anterior
            </button>
            <button
              className="flex items-center gap-2 font-bold rounded-xl transition-opacity hover:opacity-90"
              style={{ background: '#3B82F6', color: 'white', border: 'none',
                cursor: 'pointer', fontFamily: "'Nunito', sans-serif", fontSize: 14, padding: '12px 24px' }}>
              Siguiente módulo
              <ChevronRight className="w-4 h-4" strokeWidth={2.5} />
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center mt-6 mb-6">
        <Footer />
      </div>
    </div>
  );
};