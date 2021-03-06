import React from "react";

const header = () => {
  return (
    <header>
      {/* start navigation */}
      <nav className="navbar navbar-default white-link bootsnav bg-black header-dark nav-box-width navbar-top on no-full">
          <div className="container nav-header-container">
              <div className="row">
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
                            <li>
                                <a href="/">Home</a>
                            </li>
                            {/* end menu item */}

                            {/* start menu item */}
                            <li>
                                <a href="/work">Work</a>
                            </li>
                            {/* end menu item */}

                            {/* start menu item */}
                            <li>
                                <a href="/about">About</a>
                            </li>
                            {/* end menu item */}

                            {/* start menu item */}
                            <li>
                                <a href="/blog/notebook">Notebook</a>
                            </li>
                            {/* end menu item */}

                            {/* start menu item */}
                            <li>
                                <a href="/blog/journal">Journal</a>
                            </li>
                            {/* end menu item */}

                            {/* start menu item */}
                            <li>
                                <a href="/contact">Contact</a>
                            </li>
                            {/* end menu item */}
                        </ul>
                    </div>
                </div>
                <div className="col-md-2 col-xs-5 width-auto">
                    <div className="header-social-icon xs-display-none">
                        <a href="https://www.linkedin.com/in/carlo-bilbao/" title="LinkedIn" target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin"></i></a>
                        <a href="https://instagram.com/carloantoniob/" title="Instagram" target="_blank" rel="noopener noreferrer"><i className="fa fa-instagram"></i></a>
                        <a href="https://twitter.com/CarloAntonioB" title="Twitter" target="_blank" rel="noopener noreferrer"><i className="fa fa-twitter"></i></a>
                        <a href="https://www.youtube.com/channel/UC8fnvYf5xW-8YVgJCRqSjsA" title="YouTube" target="_blank" rel="noopener noreferrer"><i className="fa fa-youtube"></i></a>
                    </div>
                </div>
              </div>
          </div>
      </nav>
      {/* end navigation */}
    </header>
  );
}

export default header;
