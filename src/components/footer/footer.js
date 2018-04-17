import React from "react";

const obFooter = () => {
  return (
    <footer className="footer-classic-dark bg-extra-dark-gray xs-padding-30px-bottom">
      <div className="bg-dark-footer padding-50px-tb xs-padding-30px-tb">

          {/* start top half of footer */}
          <div className="container">
              <div className="row equalize xs-equalize-auto padding-30px-bottom">
                  {/* start slogan */}
                  <div className="col-md-12 col-sm-12 col-xs-12 text-center alt-font display-table xs-text-center xs-margin-15px-bottom">
                      <div className="display-table-cell vertical-align-middle">
                          Bay Area Based | Software Developer | Videographer | Aspiring Entrepreneur
                      </div>
                  </div>
                  {/* end slogan */}
              </div>
              <div className="row equalize xs-equalize-auto padding-30px-bottom">
                  {/* start social media */}
                  <div className="col-md-12 col-sm-12 col-xs-12 col-xs-12 text-center display-table xs-text-center">
                      <div className="display-table-cell vertical-align-middle">
                          <span className="alt-font margin-20px-right">Follow Me</span>
                          <div className="social-icon-style-8 display-inline-block vertical-align-middle">
                              <ul className="small-icon no-margin-bottom">
                                  <li><a className="facebook text-white" href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><i className="fa fa-facebook accent-hover"></i></a></li>
                                  <li><a className="twitter text-white" href="https://twitter.com/" target="_blank" rel="noopener noreferrer"><i className="fa fa-twitter accent-hover"></i></a></li>
                                  <li><a className="instagram text-white" href="https://instagram.com/" target="_blank" rel="noopener noreferrer"><i className="fa fa-instagram no-margin-right accent-hover"></i></a></li>
                                  <li><a className="google text-white" href="https://www.youtube.com/channel/UC8fnvYf5xW-8YVgJCRqSjsA" target="_blank" rel="noopener noreferrer"><i className="fa fa-youtube accent-hover"></i></a></li>
                                  <li><a className="google text-white" href="https://medium.com/@cbilbao88" target="_blank" rel="noopener noreferrer"><i className="fa fa-medium accent-hover"></i></a></li>
                              </ul>
                          </div>
                      </div>
                  </div>
                  {/* end social media */}
              </div>
          </div>
          {/* end top half of footer */}

          {/* start bottom half of footer */}
          <div className="container">
              <div className="footer-bottom border-top border-color-medium-dark-gray padding-30px-top">
                  <div className="row">
                      {/* start copyright */}
                      <div className="col-md-12 col-sm-12 col-xs-12 text-center text-small xs-text-center">&copy; 2018 <a className="accent-hover" href="carlobilbao.com" target="_blank" title="Carlo" rel="noopener noreferrer">Carlo Bilbao</a></div>
                      {/* end copyright */}
                  </div>
              </div>
          </div>
          {/* end bottom half of footer */}

      </div>
  </footer>
  );
}
export default obFooter;
