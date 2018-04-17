import React from "react";
import { Link } from "react-router-dom";
import '../../App.css';
import logo from '../../images/logo.svg';

const obHeader = () => {
  return (
    <header>
      {/* start navigation */}
      <nav className="navbar navbar-default white-link bootsnav bg-black header-dark nav-box-width navbar-top on no-full">
          <div className="container nav-header-container">
              <div className="row">
                {/* start logo */}
                <div className="col-md-2 col-xs-5">
                    <a href="/" title="Pofo" className="logo">
                      <img src={ logo } data-at2x={ logo } className="logo-dark" alt="Pofo" />
                      <img src={ logo } data-at2x={ logo } className="logo-light default" alt="Pofo" />
                    </a>
                </div>
                {/* end logo */}
                <div className="col-md-7 col-xs-2 width-auto pull-right accordion-menu xs-no-padding-right">
                    <button type="button" className="navbar-toggle collapsed pull-right" data-toggle="collapse" data-target="#navbar-collapse-toggle-1">
                        <span className="sr-only">toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                    <div className="navbar-collapse collapse pull-right" id="navbar-collapse-toggle-1">
                        <ul id="accordion" className="nav navbar-nav navbar-left no-margin alt-font text-normal" data-in="fadeIn" data-out="fadeOut">
                            {/* start menu item */}
                            <li className="dropdown">
                                <a href="/">Home</a><i className="fa fa-angle-down dropdown-toggle" data-toggle="dropdown" aria-hidden="true"></i>
                            </li>
                            {/* end menu item */}

                            {/* start menu item */}
                            <li className="dropdown">
                                <a href="/work">Work</a><i className="fa fa-angle-down dropdown-toggle" data-toggle="dropdown" aria-hidden="true"></i>
                            </li>
                            {/* end menu item */}

                            {/* start menu item */}
                            <li className="dropdown">
                                <a href="/about">About</a><i className="fa fa-angle-down dropdown-toggle" data-toggle="dropdown" aria-hidden="true"></i>
                            </li>
                            {/* end menu item */}

                            {/* start menu item */}
                            <li className="dropdown">
                                <a href="/contact">Contact</a><i className="fa fa-angle-down dropdown-toggle" data-toggle="dropdown" aria-hidden="true"></i>
                            </li>
                            {/* end menu item */}
                        </ul>
                    </div>
                </div>
                <div className="col-md-2 col-xs-5 width-auto">
                    <div className="header-social-icon xs-display-none">
                        <a href="https://www.facebook.com/" title="Facebook" target="_blank" rel="noopener noreferrer"><i className="fa fa-facebook"></i></a>
                        <a href="https://instagram.com" title="Instagram" target="_blank" rel="noopener noreferrer"><i className="fa fa-instagram"></i></a>
                    </div>
                </div>
              </div>
          </div>
      </nav>
      {/* end navigation */}
    </header>
  );
}

export default obHeader;
