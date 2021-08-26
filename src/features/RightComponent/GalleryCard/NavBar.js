import styles from '../../../styles/Main.module.scss';
import ArrowLeftLine from '../../../components/Icons/ArrowLeftLine';
import HomeLine from '../../../components/Icons/HomeLine';
import ArrowRightLine from '../../../components/Icons/ArrowRightLine';
import React from 'react';

const NavBar = ({ currentPage, pages, setCurrentPage }) =>
  <div className={ styles.galleryMenuoption }>
    <button disabled={pages === 1 || currentPage === 1} onClick={() => setCurrentPage(currentPage - 1)} className={ styles.arrowDirection }>
      <ArrowLeftLine/>
    </button>
    <button onClick={() => setCurrentPage(1)} className={ styles.arrowDirection }>
      <HomeLine/>
    </button>
    <button disabled={currentPage === pages} onClick={() => setCurrentPage(currentPage + 1)} className={ styles.arrowDirection }>
      <ArrowRightLine/>
    </button>
  </div>;

export default NavBar;
