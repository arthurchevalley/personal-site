import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';
// const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Arthur Chevalley <Link to="/">Arthur Chevalley</Link>.</p>
    </section>
  </section>
);

export default SideBar;
