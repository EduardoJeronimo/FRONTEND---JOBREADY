// ── Módulos ───────────────────────────────────────────────────────────────
export const modulos = [
  { id: 1,  titulo: 'Módulo 1.',  subtitulo: 'Inducción y diagnóstico inicial.',                    completado: true  },
  { id: 2,  titulo: 'Módulo 2.',  subtitulo: 'Mentalidad profesional y empleabilidad.',              completado: false },
  { id: 3,  titulo: 'Módulo 3.',  subtitulo: 'Valores y comportamiento en el entorno laboral.',      completado: false },
  { id: 4,  titulo: 'Módulo 4.',  subtitulo: 'Habilidades blandas y comunicación efectiva.',         completado: false },
  { id: 5,  titulo: 'Módulo 5.',  subtitulo: 'Pensamiento analítico y resolución de problemas.',     completado: false },
  { id: 6,  titulo: 'Módulo 6.',  subtitulo: 'Fundamentos técnicos del área comercial.',             completado: false },
  { id: 7,  titulo: 'Módulo 7.',  subtitulo: 'Actitud de servicio y adaptación al entorno laboral.', completado: false },
  { id: 8,  titulo: 'Módulo 8.',  subtitulo: 'Autogestión y aprendizaje continuo.',                  completado: false },
  { id: 9,  titulo: 'Módulo 9.',  subtitulo: 'Imagen y presentación profesional.',                   completado: false },
  { id: 10, titulo: 'Módulo 10.', subtitulo: 'Herramientas de empleabilidad.',                       completado: false },
  { id: 11, titulo: 'Módulo 11.', subtitulo: 'Preparación para entrevistas laborales.',               completado: false },
  { id: 12, titulo: 'Módulo 12.', subtitulo: 'Simulación del entorno laboral.',                      completado: false },
];

// ── Contenido del módulo ──────────────────────────────────────────────────
export const contenidoModulo = [
  { titulo: '1. Bienvenida al programa',     duracion: '15 min', estrella: false },
  { titulo: '2. ¿Qué es JobReady?',          duracion: '20 min', estrella: false },
  { titulo: '3. Diagnóstico de habilidades', duracion: '45 min', estrella: false },
  { titulo: '4. Mi plan de desarrollo',      duracion: '40 min', estrella: false },
  { titulo: 'Evaluación del módulo',         duracion: '20 min', estrella: true  },
];

// ── Recursos ──────────────────────────────────────────────────────────────
export const recursos = [
  'Guía del participante',
  'Plantilla de plan de desarrollo',
  'Tips para el éxito profesional',
  'Video: ¿Cómo aprovechar el programa?',
];

// ── Actividades ───────────────────────────────────────────────────────────
export type ActividadIcon = 'play' | 'clipboard' | 'user' | 'trending';

export interface Actividad {
  titulo: string;
  desc:   string;
  icon:   ActividadIcon;
}

export const actividades: Actividad[] = [
  {
    titulo: 'Conoce el programa JobReady',
    desc:   'Explorarás los objetivos, estructura y beneficios del programa.',
    icon:   'play',
  },
  {
    titulo: 'Diagnóstico de habilidades',
    desc:   'Realizarás una evaluación para identificar tus fortalezas y áreas de oportunidad.',
    icon:   'clipboard',
  },
  {
    titulo: 'Definición de metas personales',
    desc:   'Establecerás tus objetivos profesionales y expectativas dentro del programa.',
    icon:   'user',
  },
  {
    titulo: 'Plan de desarrollo inicial',
    desc:   'Diseñarás tu plan de acción personalizado para alcanzar tus metas.',
    icon:   'trending',
  },
];

// ── Stats del módulo 1 ────────────────────────────────────────────────────
export const statsModulo1 = [
  { label: 'Duración estimada', value: '2 horas',    valueColor: '#1F2937', icon: 'clock'  },
  { label: 'Lecciones',         value: '4',           valueColor: '#1F2937', icon: 'book'   },
  { label: 'Estado',            value: 'Completado',  valueColor: '#16A34A', icon: 'check'  },
];