import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './layouts/Main'; // fallback for lazy pages
import './static/css/main.scss'; // All of our styles

const { PUBLIC_URL } = process.env;

const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const Index = lazy(() => import('./pages/Index'));
const NotFound = lazy(() => import('./pages/NotFound'));
const Projects = lazy(() => import('./pages/Projects'));
const PickPlaceRobotArm = lazy(() => import('./pages/projects/PickPlaceRobotArm'));
const NERF = lazy(() => import('./pages/projects/NERF'));
const CoopTrack = lazy(() => import('./pages/projects/CoopTrack'));
const SBAMP = lazy(() => import('./pages/projects/SBAMP'));
const TransformerDiffusionImmitation = lazy(() => import('./pages/projects/TransformerDiffusionImmitation'));
const Resume = lazy(() => import('./pages/Resume'));
const Stats = lazy(() => import('./pages/Stats'));

const App = () => (
  <BrowserRouter basename={PUBLIC_URL}>
    <Suspense fallback={<Main />}>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/sbamp" element={<SBAMP />} />
        <Route path="/projects/cooptrack" element={<CoopTrack />} />
        <Route path="/projects/nerf" element={<NERF />} />
        <Route path="/projects/pick-place-robot-arm" element={<PickPlaceRobotArm />} />
        <Route path="/projects/transformer-diffusion-imitation" element={<TransformerDiffusionImmitation />} />
        <Route path="/stats" element={<Stats />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  </BrowserRouter>
);

export default App;
