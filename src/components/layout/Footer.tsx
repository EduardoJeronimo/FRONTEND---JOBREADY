import { FaXTwitter, FaInstagram, FaPhone, FaEnvelope } from 'react-icons/fa6';

export const Footer = () => {
  return (
    <>
      <div className="flex gap-3 mt-7 relative z-10">
        {[
          <FaXTwitter  style={{ fontSize: 15, color: '#9CA3AF' }} />,
          <FaInstagram style={{ fontSize: 15, color: '#9CA3AF' }} />,
          <FaPhone     style={{ fontSize: 15, color: '#9CA3AF' }} />,
          <FaEnvelope  style={{ fontSize: 15, color: '#9CA3AF' }} />,
        ].map((Icon, i) => (
          <button
            key={i}
            className="flex items-center justify-center transition-transform hover:scale-110"
            style={{
              width: 40, height: 40, borderRadius: '50%',
              background: 'rgba(255,255,255,0.7)',
              border: '1px solid #E5E7EB',
              cursor: 'pointer',
            }}
          >
            {Icon}
          </button>
        ))}
      </div>
      <p className="mt-3" style={{ fontSize: 12, color: '#B0BAC9' }}>
        © JobReady. Todos los derechos reservados.
      </p>
    </>
  );
};