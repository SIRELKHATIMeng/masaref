import React from 'react';
import 'firebase/compat/firestore';
import { useFirestore } from '../../firebase/useFirebase';
import './header.css';

const Header = () => {
  const { budget } = useFirestore();
  return (
    <div className="header">
      <div className="header__title">
        <h1>Budget Tracker</h1>
      </div>
      <div className="header__balance">${budget}</div>
    </div>
  );
};

export default Header;