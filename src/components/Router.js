// src/components/Router.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';    // Page d'accueil
import AboutPage from '../pages/AboutPage';  // Page à propos
import NotFoundPage from '../pages/NotFoundPage'; // Page 404
import Layout from './Layout';              // Layout principal
import LogementDetail from '../pages/LogementDetail'; //Page Détails Logement

const AppRouter = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="*" element={<NotFoundPage />} />
          <Route path="/logement/:id" element={<LogementDetail />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default AppRouter;
