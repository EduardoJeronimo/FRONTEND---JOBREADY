import { useState } from 'react';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import soporteImg from '../assets/soporte.png';

import {
  GraduationCap,
  UserRound,
  BriefcaseBusiness,
  Laptop,
  ReceiptText,
  Megaphone,
  HelpCircle,
  Mail,
  Phone,
  MessageCircle,
  Clock3,
  CheckCircle2,
  BookOpen,
  ChevronRight,
  ThumbsUp,
  ThumbsDown,
  Bell,
  Zap,
  FileText,
} from 'lucide-react';

const categorias = [
  {
    titulo: 'Cursos y aprendizaje',
    desc: 'Dudas sobre módulos, contenido, actividades, evaluaciones y certificados.',
    accion: 'Ver artículos',
    accionColor: '#2563EB',
    iconBg: '#3B82F6',
    iconColor: '#FFFFFF',
    Icon: GraduationCap,
  },
  {
    titulo: 'Cuenta y perfil',
    desc: 'Problemas para iniciar sesión, actualizar datos o cambiar contraseña.',
    accion: 'Ver artículos',
    accionColor: '#F59E0B',
    iconBg: '#F59E0B',
    iconColor: '#FFFFFF',
    Icon: UserRound,
  },
  {
    titulo: 'Empleabilidad y ferias',
    desc: 'Información sobre la feria de empleo, empresas aliadas y oportunidades laborales.',
    accion: 'Ver artículos',
    accionColor: '#16A34A',
    iconBg: '#4CAF50',
    iconColor: '#FFFFFF',
    Icon: BriefcaseBusiness,
  },
  {
    titulo: 'Soporte técnico',
    desc: 'Problemas técnicos con la plataforma, acceso, errores o funcionamiento general.',
    accion: 'Ver artículos',
    accionColor: '#7C3AED',
    iconBg: '#8B5CF6',
    iconColor: '#FFFFFF',
    Icon: Laptop,
  },
  {
    titulo: 'Facturación y pagos',
    desc: 'Dudas sobre pagos, facturas, comprobantes y métodos de pago.',
    accion: 'Ver artículos',
    accionColor: '#EAB308',
    iconBg: '#FBBF24',
    iconColor: '#FFFFFF',
    Icon: ReceiptText,
  },
  {
    titulo: 'Sugerencias y comentarios',
    desc: 'Queremos escucharte. Comparte tus ideas para seguir mejorando JobReady.',
    accion: 'Enviar sugerencia',
    accionColor: '#2563EB',
    iconBg: '#3B82F6',
    iconColor: '#FFFFFF',
    Icon: Megaphone,
  },
];

const menuItems = [
  { label: 'Centro de ayuda', Icon: HelpCircle },
  { label: 'Mis solicitudes', Icon: Mail },
  { label: 'Chat en vivo', Icon: MessageCircle },
  { label: 'Contacto', Icon: Phone },
  { label: 'Guías y recursos', Icon: FileText },
  { label: 'Novedades', Icon: Bell },
];

export const Support = () => {
  const [menuActivo, setMenuActivo] = useState('Centro de ayuda');
  const [busqueda, setBusqueda] = useState('');
  const [util, setUtil] = useState<'si' | 'no' | null>(null);

  return (
    <div
      className="min-h-screen"
      style={{ background: '#F5F7FA', fontFamily: "'Nunito', sans-serif" }}
    >
      <Navbar activeLink="Soporte" />

      <div className="max-w-7xl mx-auto px-6 pt-5 pb-10 flex gap-6">
        {/* ══ Sidebar izquierdo ══ */}
        <div className="flex-shrink-0" style={{ width: 300 }}>
          {/* Menú */}
          <div
            className="bg-white rounded-2xl overflow-hidden mb-4"
            style={{
              border: '1px solid #E5E7EB',
              boxShadow: '0 1px 8px rgba(30,58,138,0.05)',
            }}
          >
            <div className="px-5 pt-4 pb-3">
              <p
                className="font-extrabold mb-1"
                style={{ fontSize: 15, color: '#1F2937' }}
              >
                Centro de Soporte
              </p>
              <p style={{ fontSize: 12, color: '#6B7280' }}>
                ¿En qué podemos ayudarte?
              </p>
            </div>

            {menuItems.map((item, i) => {
              const activo = menuActivo === item.label;

              return (
                <button
                  key={i}
                  onClick={() => setMenuActivo(item.label)}
                  className="w-full flex items-center gap-3 transition-colors"
                  style={{
                    padding: '13px 16px',
                    background: activo ? '#EFF6FF' : 'white',
                    border: 'none',
                    borderLeft: activo ? '3px solid #3B82F6' : '3px solid transparent',
                    borderBottom: i < menuItems.length - 1 ? '1px solid #F3F4F6' : 'none',
                    cursor: 'pointer',
                    fontFamily: "'Nunito', sans-serif",
                    textAlign: 'left',
                  }}
                >
                  <item.Icon
                    className="flex-shrink-0"
                    style={{ color: activo ? '#3B82F6' : '#94A3B8' }}
                    width={17}
                    height={17}
                    strokeWidth={2.2}
                  />
                  <span
                    className="font-semibold"
                    style={{
                      fontSize: 14,
                      color: activo ? '#3B82F6' : '#374151',
                    }}
                  >
                    {item.label}
                  </span>
                </button>
              );
            })}
          </div>

          {/* ¿Necesitas ayuda inmediata? */}
          <div
            className="bg-white rounded-2xl"
            style={{
              padding: '18px',
              border: '1px solid #E5E7EB',
              boxShadow: '0 1px 8px rgba(30,58,138,0.05)',
            }}
          >
            <div className="flex items-center gap-2 mb-2">
              <div
                className="flex items-center justify-center rounded-full flex-shrink-0"
                style={{ width: 30, height: 30, background: '#EFF6FF' }}
              >
                <Zap width={15} height={15} style={{ color: '#3B82F6' }} strokeWidth={2.2} />
              </div>
              <p
                className="font-extrabold"
                style={{ fontSize: 13, color: '#1F2937' }}
              >
                ¿Necesitas ayuda inmediata?
              </p>
            </div>

            <p
              style={{
                fontSize: 12,
                color: '#6B7280',
                marginBottom: 12,
                lineHeight: 1.5,
              }}
            >
              Nuestro equipo está listo para apoyarte.
            </p>

            <button
              className="w-full font-bold rounded-xl transition-opacity hover:opacity-90"
              style={{
                padding: '10px',
                background: '#3B82F6',
                color: 'white',
                border: 'none',
                cursor: 'pointer',
                fontFamily: "'Nunito', sans-serif",
                fontSize: 13,
              }}
            >
              Iniciar chat en vivo
            </button>
          </div>
        </div>

        {/* ══ Contenido principal ══ */}
        <div className="flex-1 min-w-0">
          {/* ── Hero ── */}
          <div
            className="bg-white rounded-2xl mb-4 overflow-hidden"
            style={{
              border: '1px solid #E5E7EB',
              boxShadow: '0 1px 8px rgba(30,58,138,0.05)',
            }}
          >
            <div className="flex items-start justify-between p-7">
              <div className="flex-1">
                <h1
                  className="font-extrabold mb-2"
                  style={{ fontSize: 28, color: '#1F2937' }}
                >
                  Centro de ayuda
                </h1>

                <p
                  className="mb-6"
                  style={{
                    fontSize: 14,
                    color: '#6B7280',
                    lineHeight: 1.6,
                    maxWidth: 480,
                  }}
                >
                  Estamos aquí para ayudarte. Encuentra respuestas, guías y asistencia personalizada.
                </p>

                <div className="relative" style={{ maxWidth: 460 }}>
                  <svg
                    className="absolute left-4 top-1/2 -translate-y-1/2"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="#9CA3AF"
                  >
                    <path d="M15.5 14h-.79l-.28-.27A6.47 6.47 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
                  </svg>

                  <input
                    value={busqueda}
                    onChange={(e) => setBusqueda(e.target.value)}
                    placeholder="Buscar artículos de ayuda..."
                    className="w-full rounded-xl outline-none"
                    style={{
                      padding: '12px 16px 12px 44px',
                      background: '#F9FAFB',
                      border: '1px solid #E5E7EB',
                      fontSize: 14,
                      color: '#1F2937',
                      fontFamily: "'Nunito', sans-serif",
                    }}
                  />
                </div>

                <div className="flex items-center gap-2 mt-3 flex-wrap">
                  <span style={{ fontSize: 12, color: '#9CA3AF' }}>Ejemplos:</span>
                  {[
                    '¿Cómo accedo a mis cursos?',
                    '¿Cómo me registro a la feria de empleo?',
                    'Certificado',
                  ].map((ej, i) => (
                    <span key={i} className="flex items-center gap-2">
                      <button
                        onClick={() => setBusqueda(ej)}
                        style={{
                          background: 'none',
                          border: 'none',
                          cursor: 'pointer',
                          fontSize: 12,
                          color: '#3B82F6',
                          fontFamily: "'Nunito', sans-serif",
                          padding: 0,
                        }}
                      >
                        {ej}
                      </button>
                      {i < 2 && <span style={{ color: '#D1D5DB' }}>•</span>}
                    </span>
                  ))}
                </div>
              </div>

              <img
                src={soporteImg}
                alt="Soporte"
                className="object-contain flex-shrink-0 ml-4"
                style={{ width: 300, height: 180 }}
              />
            </div>
          </div>

          {/* ── Categorías + Sidebar derecho ── */}
          <div className="flex gap-4">
            <div className="flex-1 min-w-0">
              <div
                className="bg-white rounded-2xl p-6"
                style={{
                  border: '1px solid #E5E7EB',
                  boxShadow: '0 1px 8px rgba(30,58,138,0.05)',
                }}
              >
                <h2
                  className="font-extrabold mb-5"
                  style={{ fontSize: 18, color: '#1F2937' }}
                >
                  ¿Cómo podemos ayudarte?
                </h2>

                <div className="grid grid-cols-3 gap-4">
                  {categorias.map((cat, i) => (
                    <div
                      key={i}
                      className="rounded-2xl p-5 cursor-pointer transition-shadow hover:shadow-md"
                      style={{
                        border: '1px solid #E5E7EB',
                        background: 'white',
                      }}
                    >
                      <div
                        className="flex items-center justify-center rounded-full mb-4"
                        style={{
                          width: 46,
                          height: 46,
                          background: cat.iconBg,
                        }}
                      >
                        <cat.Icon
                          width={22}
                          height={22}
                          style={{ color: cat.iconColor }}
                          strokeWidth={2.2}
                        />
                      </div>

                      <p
                        className="font-extrabold mb-2"
                        style={{ fontSize: 14, color: '#1E3A8A' }}
                      >
                        {cat.titulo}
                      </p>

                      <p
                        className="mb-4"
                        style={{
                          fontSize: 12,
                          color: '#6B7280',
                          lineHeight: 1.65,
                        }}
                      >
                        {cat.desc}
                      </p>

                      <button
                        className="flex items-center gap-1 font-bold transition-opacity hover:opacity-70"
                        style={{
                          background: 'none',
                          border: 'none',
                          cursor: 'pointer',
                          fontSize: 12,
                          color: cat.accionColor,
                          fontFamily: "'Nunito', sans-serif",
                          padding: 0,
                        }}
                      >
                        {cat.accion}
                        <ChevronRight
                          width={13}
                          height={13}
                          style={{ color: cat.accionColor }}
                          strokeWidth={2.5}
                        />
                      </button>
                    </div>
                  ))}
                </div>

                {/* Base de conocimiento */}
                <div
                  className="rounded-2xl flex items-center justify-between mt-5"
                  style={{
                    padding: '18px 24px',
                    background: '#EFF6FF',
                    border: '1px solid #DBEAFE',
                  }}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className="flex items-center justify-center rounded-xl flex-shrink-0"
                      style={{ width: 42, height: 42, background: '#DBEAFE' }}
                    >
                      <BookOpen
                        width={22}
                        height={22}
                        style={{ color: '#3B82F6' }}
                        strokeWidth={2}
                      />
                    </div>
                    <div>
                      <p
                        className="font-extrabold"
                        style={{ fontSize: 14, color: '#1E3A8A' }}
                      >
                        Explora nuestra base de conocimiento
                      </p>
                      <p style={{ fontSize: 12, color: '#374151' }}>
                        Encuentra respuestas rápidas en nuestra biblioteca de artículos y guías.
                      </p>
                    </div>
                  </div>

                  <button
                    className="font-bold rounded-xl transition-opacity hover:opacity-90 flex-shrink-0 ml-4"
                    style={{
                      padding: '10px 20px',
                      background: '#3B82F6',
                      color: 'white',
                      border: 'none',
                      cursor: 'pointer',
                      fontFamily: "'Nunito', sans-serif",
                      fontSize: 13,
                      whiteSpace: 'nowrap',
                    }}
                  >
                    Ir a la base de conocimiento
                  </button>
                </div>
              </div>
            </div>

            {/* ══ Sidebar derecho ══ */}
            <div className="flex-shrink-0 flex flex-col gap-4" style={{ width: 260 }}>
              {/* Contacto directo */}
              <div className="bg-white rounded-2xl p-5" style={{ border: '1px solid #E5E7EB' }}>
                <div className="flex items-center gap-2 mb-3">
                  <Clock3 width={14} height={14} style={{ color: '#6B7280' }} strokeWidth={2} />
                  <h4 className="font-extrabold" style={{ fontSize: 14, color: '#1F2937' }}>
                    Contacto directo
                  </h4>
                </div>

                <p style={{ fontSize: 12, color: '#6B7280', marginBottom: 12 }}>
                  ¿No encuentras lo que buscas? Comunícate con nuestro equipo.
                </p>

                {[
                  {
                    label: 'Chat en vivo',
                    sub: 'Lunes a Viernes de 9:00 a 18:00 h',
                    subColor: '#6B7280',
                    bg: '#EFF6FF',
                    Icon: MessageCircle,
                    iconColor: '#3B82F6',
                  },
                  {
                    label: 'Correo electrónico',
                    sub: 'soporte@jobready.com',
                    subColor: '#3B82F6',
                    bg: '#F9FAFB',
                    Icon: Mail,
                    iconColor: '#6B7280',
                  },
                  {
                    label: 'Teléfono',
                    sub: '55 1234 5678',
                    subColor: '#6B7280',
                    bg: '#F9FAFB',
                    Icon: Phone,
                    iconColor: '#3B82F6',
                  },
                ].map((c, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 py-2.5"
                    style={{ borderBottom: i < 2 ? '1px solid #F3F4F6' : 'none' }}
                  >
                    <div
                      className="flex items-center justify-center rounded-lg flex-shrink-0"
                      style={{ width: 30, height: 30, background: c.bg }}
                    >
                      <c.Icon
                        width={14}
                        height={14}
                        style={{ color: c.iconColor }}
                        strokeWidth={2.2}
                      />
                    </div>
                    <div>
                      <p className="font-bold" style={{ fontSize: 12, color: '#1F2937' }}>
                        {c.label}
                      </p>
                      <p style={{ fontSize: 11, color: c.subColor }}>{c.sub}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Horario */}
              <div className="bg-white rounded-2xl p-5" style={{ border: '1px solid #E5E7EB' }}>
                <div className="flex items-center gap-2 mb-3">
                  <Clock3 width={14} height={14} style={{ color: '#6B7280' }} strokeWidth={2} />
                  <h4 className="font-extrabold" style={{ fontSize: 14, color: '#1F2937' }}>
                    Horario de atención
                  </h4>
                </div>

                {[
                  { dia: 'Lunes a Viernes', hora: '9:00 - 18:00 h' },
                  { dia: 'Sábados', hora: '9:00 - 14:00 h' },
                ].map((h, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between py-2"
                    style={{ borderBottom: i === 0 ? '1px solid #F3F4F6' : 'none' }}
                  >
                    <span style={{ fontSize: 12, color: '#374151' }}>{h.dia}</span>
                    <span className="font-bold" style={{ fontSize: 12, color: '#1F2937' }}>
                      {h.hora}
                    </span>
                  </div>
                ))}

                <p className="mt-2" style={{ fontSize: 11, color: '#9CA3AF' }}>
                  (Hora del centro de México)
                </p>
              </div>

              {/* Estado del servicio */}
              <div className="bg-white rounded-2xl p-5" style={{ border: '1px solid #E5E7EB' }}>
                <div className="flex items-center gap-2 mb-3">
                  <CheckCircle2 width={14} height={14} style={{ color: '#16A34A' }} strokeWidth={2.2} />
                  <h4 className="font-extrabold" style={{ fontSize: 14, color: '#1F2937' }}>
                    Estado del servicio
                  </h4>
                </div>

                <div className="flex items-start gap-2 mb-2">
                  <div
                    style={{
                      width: 7,
                      height: 7,
                      borderRadius: '50%',
                      background: '#22C55E',
                      flexShrink: 0,
                      marginTop: 4,
                    }}
                  />
                  <p style={{ fontSize: 12, color: '#374151' }}>
                    Todos los sistemas operan con normalidad
                  </p>
                </div>

                <button
                  style={{
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    fontSize: 12,
                    color: '#3B82F6',
                    fontFamily: "'Nunito', sans-serif",
                    padding: 0,
                  }}
                >
                  Ver historial de incidencias &gt;
                </button>
              </div>

              {/* ¿Te fue útil? */}
              <div className="bg-white rounded-2xl p-5" style={{ border: '1px solid #E5E7EB' }}>
                <p className="font-extrabold mb-1" style={{ fontSize: 14, color: '#1F2937' }}>
                  ¿Te fue útil esta página?
                </p>
                <p className="mb-3" style={{ fontSize: 12, color: '#6B7280' }}>
                  Tu opinión nos ayuda a mejorar.
                </p>

                <div className="flex gap-2">
                  <button
                    onClick={() => setUtil('si')}
                    className="flex items-center gap-1.5 font-bold rounded-xl transition-all"
                    style={{
                      padding: '7px 16px',
                      cursor: 'pointer',
                      fontFamily: "'Nunito', sans-serif",
                      fontSize: 13,
                      background: util === 'si' ? '#EFF6FF' : '#F9FAFB',
                      border: util === 'si' ? '1.5px solid #3B82F6' : '1px solid #E5E7EB',
                      color: util === 'si' ? '#3B82F6' : '#374151',
                    }}
                  >
                    <ThumbsUp
                      width={14}
                      height={14}
                      style={{ color: util === 'si' ? '#3B82F6' : '#9CA3AF' }}
                      strokeWidth={2}
                    />
                    Sí
                  </button>

                  <button
                    onClick={() => setUtil('no')}
                    className="flex items-center gap-1.5 font-bold rounded-xl transition-all"
                    style={{
                      padding: '7px 16px',
                      cursor: 'pointer',
                      fontFamily: "'Nunito', sans-serif",
                      fontSize: 13,
                      background: util === 'no' ? '#FEF2F2' : '#F9FAFB',
                      border: util === 'no' ? '1.5px solid #EF4444' : '1px solid #E5E7EB',
                      color: util === 'no' ? '#EF4444' : '#374151',
                    }}
                  >
                    <ThumbsDown
                      width={14}
                      height={14}
                      style={{ color: util === 'no' ? '#EF4444' : '#9CA3AF' }}
                      strokeWidth={2}
                    />
                    No
                  </button>
                </div>

                {util && (
                  <p
                    className="mt-2 font-semibold"
                    style={{
                      fontSize: 12,
                      color: util === 'si' ? '#16A34A' : '#F97316',
                    }}
                  >
                    {util === 'si'
                      ? '¡Gracias por tu respuesta! 😊'
                      : 'Gracias, trabajaremos para mejorar.'}
                  </p>
                )}
              </div>
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