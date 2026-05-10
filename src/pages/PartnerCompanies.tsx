import empresasAliadas from '../assets/empresasaliadas.png';
import { Navbar } from '../components/layout/Navbar';

import {
  FaBuilding,
  FaMagnifyingGlass,
  FaFilter,
  FaBookmark,
  FaLock,
  FaLaptop,
  FaMoneyBillTrendUp,
  FaStore,
  FaHandshake,
  FaTowerCell,
  FaUtensils,
  FaTruck,
  FaBoxesStacked,
} from 'react-icons/fa6';

const lockedCards = Array.from({ length: 9 }, (_, i) => i + 1);
const lockedStats = Array.from({ length: 4 }, (_, i) => i + 1);

const sectors = [
  { name: 'Tecnología', count: 12, icon: <FaLaptop /> },
  { name: 'Finanzas', count: 9, icon: <FaMoneyBillTrendUp /> },
  { name: 'Retail', count: 8, icon: <FaStore /> },
  { name: 'Servicios', count: 7, icon: <FaHandshake /> },
  { name: 'Telecomunicaciones', count: 5, icon: <FaTowerCell /> },
  { name: 'Alimentos y Bebidas', count: 4, icon: <FaUtensils /> },
  { name: 'Logística', count: 3, icon: <FaTruck /> },
  { name: 'Otros', count: 8, icon: <FaBoxesStacked /> },
];

function LockBubble({ size = 64, iconSize = 20 }: { size?: number; iconSize?: number }) {
  return (
    <div
      className="flex items-center justify-center rounded-full"
      style={{
        width: size,
        height: size,
        background: '#F7F9FD',
        boxShadow: '0 10px 24px rgba(30,58,138,0.08)',
        color: '#94A3B8',
      }}
    >
      <FaLock size={iconSize} />
    </div>
  );
}

function LockedStatCard() {
  return (
    <div className="flex items-center justify-center px-6 py-5 min-h-[88px]">
      <LockBubble size={54} iconSize={18} />
    </div>
  );
}

function LockedCompanyCard() {
  return (
    <div
      className="rounded-2xl p-5"
      style={{
        background: '#FFFFFF',
        border: '1px solid #E7ECFB',
        boxShadow: '0 1px 8px rgba(30,58,138,0.05)',
        minHeight: 230,
      }}
    >
      <div className="flex items-start justify-end">
        <button className="text-[#B7C2E4]">
          <FaBookmark />
        </button>
      </div>

      <div className="flex h-[170px] items-center justify-center">
        <LockBubble size={64} iconSize={20} />
      </div>
    </div>
  );
}

function LockedSideCard({ minHeight = 300 }: { minHeight?: number }) {
  return (
    <div
      className="rounded-2xl bg-white p-5 flex items-center justify-center"
      style={{
        minHeight,
        border: '1px solid #E5E7EB',
        boxShadow: '0 1px 8px rgba(30,58,138,0.05)',
      }}
    >
      <LockBubble size={66} iconSize={20} />
    </div>
  );
}

export const PartnerCompanies = () => {
  return (
    <div
      className="min-h-screen"
      style={{
        background: '#F5F7FA',
        fontFamily: "'Nunito', sans-serif",
      }}
    >
      <Navbar activeLink="Empresas Aliadas" />

      <div className="max-w-7xl mx-auto px-6 pt-5 pb-10">
        {/* Hero */}
        <section
          className="mb-4 overflow-hidden rounded-2xl bg-white"
          style={{
            border: '1px solid #E5E7EB',
            boxShadow: '0 1px 8px rgba(30,58,138,0.05)',
          }}
        >
          <div className="grid items-center gap-6 p-7 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <h1 className="mb-2 text-[24px] font-extrabold text-[#1E3A8A]">
                Empresas Aliadas
              </h1>

              <p className="max-w-[560px] text-[15px] leading-7 text-[#5F74AE]">
                Conectamos talento con oportunidades. Conoce las empresas que confían en JobReady
                para impulsar el crecimiento profesional.
              </p>
            </div>

            <div className="flex justify-end">
              <img
                src={empresasAliadas}
                alt="Empresas aliadas"
                className="h-[145px] w-full max-w-[430px] object-contain"
              />
            </div>
          </div>
        </section>

        {/* Stats bloqueados */}
        <section
          className="mb-4 rounded-2xl bg-white overflow-hidden"
          style={{
            border: '1px solid #E5E7EB',
            boxShadow: '0 1px 8px rgba(30,58,138,0.05)',
          }}
        >
          <div className="grid md:grid-cols-2 xl:grid-cols-4">
            {lockedStats.map((item, index) => (
              <div
                key={item}
                className={`${index !== lockedStats.length - 1 ? 'xl:border-r xl:border-[#EEF2FF]' : ''} ${
                  index < 2 ? 'md:border-r md:border-[#EEF2FF] xl:border-r' : ''
                }`}
              >
                <LockedStatCard />
              </div>
            ))}
          </div>
        </section>

        {/* Search + filters */}
        <section className="mb-4 grid gap-3 lg:grid-cols-[1fr_auto_auto_auto]">
          <div
            className="flex h-[48px] items-center gap-3 rounded-xl bg-white px-4 text-[#8191BD]"
            style={{
              border: '1px solid #E5E7EB',
              boxShadow: '0 1px 8px rgba(30,58,138,0.05)',
            }}
          >
            <FaMagnifyingGlass className="text-[#8C9CE3]" />
            <input
              type="text"
              placeholder="Buscar empresas por nombre, sector o palabra clave..."
              className="w-full bg-transparent text-[14px] outline-none placeholder:text-[#9AA7CE]"
            />
          </div>

          <button
            className="flex h-[48px] items-center gap-2 rounded-xl bg-white px-5 text-[14px] font-medium text-[#4D63B5]"
            style={{
              border: '1px solid #E5E7EB',
              boxShadow: '0 1px 8px rgba(30,58,138,0.05)',
            }}
          >
            Todos los sectores
            <span className="text-[#8EA0DF]">▾</span>
          </button>

          <button
            className="flex h-[48px] items-center gap-2 rounded-xl bg-white px-5 text-[14px] font-medium text-[#4D63B5]"
            style={{
              border: '1px solid #E5E7EB',
              boxShadow: '0 1px 8px rgba(30,58,138,0.05)',
            }}
          >
            Todas las ubicaciones
            <span className="text-[#8EA0DF]">▾</span>
          </button>

          <button
            className="flex h-[48px] items-center gap-2 rounded-xl bg-white px-5 text-[14px] font-semibold text-[#4D63B5]"
            style={{
              border: '1px solid #E5E7EB',
              boxShadow: '0 1px 8px rgba(30,58,138,0.05)',
            }}
          >
            <FaFilter className="text-[#8EA0DF]" />
            Filtros
          </button>
        </section>

        {/* Content */}
        <section className="grid gap-4 xl:grid-cols-[1fr_280px]">
          {/* Cards bloqueadas */}
          <div>
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {lockedCards.map((card) => (
                <LockedCompanyCard key={card} />
              ))}
            </div>

            <div className="mt-5 flex justify-center">
              <button
                className="rounded-xl bg-white px-6 py-3 text-[14px] font-semibold text-[#5670D5] transition hover:bg-[#F8FAFF]"
                style={{
                  border: '1px solid #DCE5FF',
                  boxShadow: '0 1px 8px rgba(30,58,138,0.05)',
                }}
              >
                Cargar más empresas ▾
              </button>
            </div>
          </div>

          {/* Sidebar mixto */}
          <aside className="space-y-4">
            {/* Empresas destacadas bloqueado */}
            <LockedSideCard minHeight={340} />

            {/* Sectores habilitado */}
            <div
              className="rounded-2xl bg-white p-5"
              style={{
                border: '1px solid #E5E7EB',
                boxShadow: '0 1px 8px rgba(30,58,138,0.05)',
              }}
            >
              <div className="mb-4 flex items-center justify-between">
                <h3 className="text-[18px] font-extrabold text-[#1E3A8A]">Sectores</h3>
                <button className="text-[13px] font-semibold text-[#6A82D9]">Ver todas</button>
              </div>

              <div className="space-y-3">
                {sectors.map((sector) => (
                  <div key={sector.name} className="flex items-center justify-between">
                    <div className="flex items-center gap-3 text-[14px] text-[#4B61AE]">
                      <span className="text-[#8AA0EB]">{sector.icon}</span>
                      <span>{sector.name}</span>
                    </div>
                    <span className="text-[14px] font-semibold text-[#5E73C6]">
                      {sector.count}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tu empresa quiere ser aliada habilitado */}
            <div
              className="rounded-2xl p-5"
              style={{
                border: '1px solid #D6E0FF',
                background: '#F5F8FF',
                boxShadow: '0 1px 8px rgba(30,58,138,0.05)',
              }}
            >
              <div className="mb-4 flex items-start gap-3">
                <div className="mt-1 flex h-11 w-11 items-center justify-center rounded-xl bg-[#E7EEFF] text-[#6984E8]">
                  <FaBuilding />
                </div>
                <div>
                  <h3 className="mb-1 text-[18px] font-extrabold text-[#1E3A8A]">
                    ¿Tu empresa quiere ser aliada?
                  </h3>
                  <p className="text-[13px] leading-5 text-[#6F80B2]">
                    Únete a nuestra red de empresas y conecta con talento preparado para crecer.
                  </p>
                </div>
              </div>

              <button className="rounded-xl bg-[#4E6DDA] px-5 py-3 text-[14px] font-semibold text-white shadow-[0_8px_18px_rgba(78,109,218,0.22)] transition hover:bg-[#425FCC]">
                Quiero ser aliado
              </button>
            </div>
          </aside>
        </section>
      </div>
    </div>
  );
};