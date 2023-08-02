import React from 'react';
import { Link } from 'react-router-dom';
import s from './StyledLink.module.css';

const StyledLink = ({ link, text, width }) => {

  return (
    <Link style={{ width: width, fontSize: `${parseFloat(width)*0.24}px`, padding: `${parseFloat(width)*0.05}px`}} className={s.item} to={link}>
      {text}
    </Link>
  );
};

export default StyledLink;
