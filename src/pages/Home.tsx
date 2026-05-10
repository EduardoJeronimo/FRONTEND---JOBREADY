import { useNavigate } from 'react-router-dom';
import homePng      from '../assets/home.png';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';


export const Home = () => {
  const navigate = useNavigate();

  return (
    
    <div className="min-h-screen" style={{ background: '#F5F7FA', fontFamily: "'Nunito', sans-serif" }}>

      <Navbar activeLink="Inicio" />

      {/* ── Contenido ── */}
      <div className="max-w-6xl mx-auto px-6 pt-6">

        {/* ── Hero Banner ── */}
        <div
          className="relative overflow-hidden rounded-2xl flex items-center justify-between"
          style={{
            background: 'linear-gradient(110deg, #C8D9F0 0%, #D6E4F7 40%, #E8F0FA 70%, #F0F5FD 100%)',
            minHeight: 260,
            padding: '40px 48px',
            boxShadow: '0 2px 16px rgba(30,58,138,0.08)',
          }}
        >
          {/* Contenido izquierda */}
          <div className="relative z-10" style={{ maxWidth: 440 }}>
            <h1
              className="font-extrabold mb-2"
              style={{ fontSize: 34, color: '#1E3A8A', lineHeight: 1.2 }}
            >
              ¡Bienvenida, Sofía!
            </h1>
            <p className="mb-6" style={{ fontSize: 15, color: '#1F2937' }}>
              Avanza en tu camino al éxito profesional.
            </p>

            {/* ── Cuadro blanco: progreso + botón ── */}
            <div
              className="rounded-2xl"
              style={{
                background: 'white',
                padding: '20px 24px',
                display: 'inline-block',
                minWidth: 280,
              }}
            >
              <p className="font-semibold mb-2" style={{ fontSize: 14, color: '#1F2937' }}>
                Progreso del Programa:{' '}
                <span style={{ color: '#16A34A', fontWeight: 800 }}>60%</span>
              </p>
              <div
                className="rounded-full overflow-hidden mb-5"
                style={{ width: 300, height: 10, background: 'rgba(30,58,138,0.12)' }}
              >
                <div
                  className="h-full rounded-full"
                  style={{ width: '60%', background: '#16A34A' }}
                />
              </div>

              <button
                className="font-bold rounded-xl transition-opacity hover:opacity-90"
                style={{
                  background: '#F97316',
                  color: 'white',
                  border: 'none',
                  cursor: 'pointer',
                  fontFamily: "'Nunito', sans-serif",
                  fontSize: 15,
                  padding: '12px 30px',
                }}
                onClick={() => navigate('/courses')}
              >
                Continuar Curso
              </button>
            </div>
          </div>

          {/* Imagen derecha */}
          <img
            src={homePng}
            alt="Estudiante trabajando"
            className="relative z-10 flex-shrink-0 object-contain"
            style={{ width: 400, height: 260 }}
          />
        </div>
      </div>
      <div className="flex flex-col items-center mt-20 mb-10">
        <Footer />
      </div>

    </div>
  );
};