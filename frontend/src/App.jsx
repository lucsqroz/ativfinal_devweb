import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import LandingPage from './pages/LandingPage';
import LoginPage from './components/auth/LoginPage';
import RegisterPage from './components/auth/RegisterPage';
import TasksPage from './components/todo/TasksPage';
import AdminPage from './components/admin/AdminPage';
import PrivateRoute from './components/PrivateRoute';

const App = () => {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/admin" element={<PrivateRoute />}>
            <Route path="" element={<AdminPage />} />
          </Route>
          <Route path="/tasks" element={<TasksPage />} />
          {/* Adicione mais rotas conforme necessário */}
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
