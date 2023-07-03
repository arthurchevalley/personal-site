import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './layouts/Main'; // fallback for lazy pages
import './static/css/main.scss'; // All of our styles

const { PUBLIC_URL } = process.env;

// Every route - we lazy load so that each page can be chunked
// NOTE that some of these chunks are very small. We should optimize
// which pages are lazy loaded in the future.
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const Index = lazy(() => import('./pages/Index'));
const NotFound = lazy(() => import('./pages/NotFound'));
const Projects = lazy(() => import('./pages/Projects'));
const ShorterProjects = lazy(() => import('./pages/ShorterProjects'));
const FsodRsiPage = lazy(() => import('./pages/project_details/Fsodrsi'));
const MAML = lazy(() => import('./pages/project_details/maml'));
const GOVCONTR = lazy(() => import('./pages/project_details/gov_contr'));
const WheeledRobotsPage = lazy(() => import('./pages/project_details_short/wheeled_robots'));
const DeepLearningPage = lazy(() => import('./pages/project_details_short/deeplearning'));
const SimulationRobotsPage = lazy(() => import('./pages/project_details_short/simulation_robots'));
const FlyingRobotsPage = lazy(() => import('./pages/project_details_short/flying_robots'));
const Resume = lazy(() => import('./pages/Resume'));

const App = () => (
  <BrowserRouter basename={PUBLIC_URL}>
    <Suspense fallback={<Main />}>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<About />} />
        <Route path="/shorterprojects" element={<ShorterProjects />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/FSODRSI" element={<FsodRsiPage />} />
        <Route path="/projects/MAML" element={<MAML />} />
        <Route path="/projects/GOVCONTR" element={<GOVCONTR />} />
        <Route path="/projects/FlyingRobots" element={<FlyingRobotsPage />} />
        <Route path="/projects/SimulationRobots" element={<SimulationRobotsPage />} />
        <Route path="/projects/DeepLearning" element={<DeepLearningPage />} />
        <Route path="/projects/WheeledRobots" element={<WheeledRobotsPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  </BrowserRouter>
);

export default App;
