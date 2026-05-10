import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { Courses } from './pages/Courses';
import { Home } from './pages/Home';
import { CourseDetail } from './pages/CoursesDetail';
import { PartnerCompanies } from './pages/PartnerCompanies';
import { Support } from './pages/Support';

function App() {
  return (
    <Router>
      <Routes>
        {/* Ruta por defecto: Login */}
        <Route path="/" element={<Navigate to="/login" />} />
        
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/home" element={<Home />} />
        <Route path="/CoursesDetail" element={<CourseDetail />} />
        <Route path="/empresas-aliadas" element={<PartnerCompanies />} />
        <Route path="/soporte" element={<Support />} />
        
        {/* Si alguien escribe cualquier cosa, mandarlo al login */}
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}

export default App;