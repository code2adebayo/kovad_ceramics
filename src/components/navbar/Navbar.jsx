/* eslint-disable react/jsx-indent */
import React, { Fragment, useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import MdMenu from 'react-ionicons/lib/MdMenu';
import MdClose from 'react-ionicons/lib/MdClose';
import logo from '../../assets/logo.png';
import useWindowDimensions from '../../hooks/UseWindowDimensions';
import './navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const { width } = useWindowDimensions();

  return (
    <>
      <nav className="flex">
        <div className="nav-brand">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>

        <div className="menu-icons open">
          <MdMenu
            onClick={toggle}
            fontSize="37px"
            color="#fafafa"
            style={{ cursor: 'pointer' }}
          />
        </div>

        <ul
          className={`nav-list ${
            width > 768 && !isOpen
              ? 'justify-content-end w-100'
              : width < 768 && isOpen
              ? 'active'
              : 'd-none'
          }   `}
        >
          <div className={`menu-icons close`}>
            <MdClose
              onClick={() => setIsOpen(false)}
              fontSize="35px"
              color="#fafafa"
              style={{ cursor: 'pointer' }}
            />
          </div>
          {/* <li className="nav-item">
            <NavLink
              exact
              to="/"
              activeClassName="selected"
              className="nav-link"
            >
              Home
            </NavLink>
          </li> */}
          <li className="nav-item nested-nav-container">
            <NavLink
              exact
              to="/services"
              activeClassName="selected"
              className="nav-link"
            >
              Services
            </NavLink>
            <ul className="sub-nav">
              <Link to="/services" className="excellent-red">
                <li>Installation, Maintenance & Repair</li>
              </Link>
              <Link to="/services-installation" className="excellent-red">
                <li>Installation</li>
              </Link>
              <Link to="/services-maintenance" className="excellent-red">
                <li>Maintenance</li>
              </Link>
              <Link to="/services-repair" className="excellent-red">
                <li>Repair</li>
              </Link>
            </ul>
          </li>
          <li className="nav-item nested-nav-container">
            <NavLink
              exact
              to="/products"
              activeClassName="selected"
              className="nav-link"
            >
              Products
            </NavLink>
            <ul className="sub-nav">
              <Link
                to="/products-glazed_porcelain_tile"
                className="excellent-red"
              >
                <li>Glazed Porcelain Tile</li>
              </Link>
              <Link
                to="/products-rustic_porcelain_tile"
                className="excellent-red"
              >
                <li>Rustic Porcelain Tile</li>
              </Link>
            </ul>
          </li>
          <li className="nav-item">
            <NavLink
              exact
              to="/about"
              activeClassName="selected"
              className="nav-link"
            >
              About
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              exact
              to="/contact"
              activeClassName="selected"
              className="nav-link"
            >
              Contact Us
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
