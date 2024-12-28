import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import { Routes, Route } from 'react-router-dom';
import NavbarMain from './components/navbar';
import HomePage from './pages/HomePage'; 
import RecordPage from './pages/RecordPage'; 

function App() {
  return (
    <>
      <NavbarMain />
      <Container fluid="xl">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/records" element={<RecordPage />} />
        </Routes>
      </Container>      
    </>
  );
}

export default App;
