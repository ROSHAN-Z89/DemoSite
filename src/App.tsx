/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Menu } from './pages/Menu';
import { Banquet } from './pages/Banquet';
import { Gallery } from './pages/Gallery';
import { Catering } from './pages/Catering';
import { Contact } from './pages/Contact';
import { Booking } from './pages/Booking';

import { MenuKit } from './pages/MenuKit';

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/banquet" element={<Banquet />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/catering" element={<Catering />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/menu-kit" element={<MenuKit />} />
        </Routes>
      </Layout>
    </Router>
  );
}
