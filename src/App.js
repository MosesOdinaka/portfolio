import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import Navbar from './components/Navbar';
import ErrorBoundary from './components/ErrorBoundary';

// Lazy load components for better performance
const Certificate = lazy(() => import('./components/Certificate'));
const Home = lazy(() => import('./components/Home'));

// Loading component
const Loading = () => (
  <div className="loading">
    <div className="spinner"></div>
    <p>Loading...</p>
  </div>
);

export default function App() {
  return (
    <ErrorBoundary>
      <Router>
        <Navbar />
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/certificate" element={<Certificate />} />
          </Routes>
        </Suspense>
      </Router>
    </ErrorBoundary>
  );
}