import React from "react";
import Formsy from 'formsy-react';
import MyInput from './subComps/MyInput';
import TextArea from './subComps/TextArea';

class contact extends React.Component {

  constructor(props) {
    super(props);
    this.disableButton = this.disableButton.bind(this);
    this.enableButton = this.enableButton.bind(this);
    this.state = {
      canSubmit: false,
    }; // state
  } // constructor

  disableButton() {
  this.setState({ canSubmit: false });
  }

  enableButton() {
    this.setState({ canSubmit: true });
  }

  submit(model) {

    fetch('https://us-central1-backend-services-c166f.cloudfunctions.net/sendEmail/', {
      method: "post",
      body: JSON.stringify(model),
      headers: new Headers({"Content-Type": "application/json"})
    })
    .then(response => response.json())
    .then((jsonResult) => {
        if(jsonResult.status === "email sent") {
          // Hide submit button.
          document.getElementById("contact-form-submit-bt").style.display = "none";
          // Show a success message, hide error
          document.getElementById("message-success").style.display = "initial"
          document.getElementById("message-error").style.display = "none";
          //Clear up input values
          document.getElementById("name-input").value="";
          document.getElementById("email-input").value="";
          document.getElementById("phone-input").value="";
          document.getElementById("comment-input").value="";

        } else {
          // Show submit button.
          document.getElementById("contact-form-submit-bt").style.display = "initial";
          // Show a error message, hide success
          document.getElementById("message-success").style.display = "none";
          document.getElementById("message-error").style.display = "initial";
        }
    });

  } //submit

  render () {
    return (
        <section className="wow fadeIn">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 margin-eight-bottom sm-margin-40px-bottom xs-margin-30px-bottom xs-margin-50px-top text-center last-paragraph-no-margin bg-white">
                        <h5 className="alt-font font-weight-700 text-extra-dark-gray text-uppercase">Let&#39;s talk about it</h5>
                        {/* start contact info item */}
                        <div className="col-md-6 col-sm-6 col-xs-12 text-center sm-margin-eight-bottom xs-margin-30px-bottom wow fadeInUp last-paragraph-no-margin" data-wow-delay="0.2s">
                            <div className="display-inline-block margin-20px-bottom">
                                <div className="bg-extra-dark-gray icon-round-medium"><i className="icon-chat icon-medium text-white"></i></div>
                            </div>
                            <div className="text-extra-dark-gray text-uppercase text-small font-weight-600 alt-font margin-5px-bottom">Lets Talk</div>
                            <p className="center-col">Phone: 1-510-253-3755</p>
                            <p className="c-strike accent-hover text-uppercase accent-color text-small margin-15px-top xs-margin-10px-top display-inline-block">call us</p>
                        </div>
                        {/* end contact info item */}
                        {/* start contact info item */}
                        <div className="col-md-6 col-sm-6 col-xs-12 text-center xs-margin-30px-bottom wow fadeInUp last-paragraph-no-margin" data-wow-delay="0.4s">
                            <div className="display-inline-block margin-20px-bottom">
                                <div className="bg-extra-dark-gray icon-round-medium"><i className="icon-envelope icon-medium text-white"></i></div>
                            </div>
                            <div className="text-extra-dark-gray text-uppercase text-small font-weight-600 alt-font margin-5px-bottom">E-mail Me</div>
                            <p className="center-col"><a href="mailto:cbilbao88@gmail.com">cbilbao88@gmail.com</a></p>
                            <p className="c-strike accent-hover text-uppercase accent-color text-small margin-15px-top xs-margin-10px-top display-inline-block">send e-mail</p>
                        </div>
                        {/* end contact info item */}
                    </div>

                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 xs-margin-30px-bottom wow fadeIn bg-black">
                        <div className="padding-eleven-all text-center xs-no-padding-lr">
                            <div className="text-medium-gray alt-font text-small text-uppercase margin-5px-bottom xs-margin-three-bottom">Fill out the form and well be in touch soon!</div>
                            <h5 className="margin-55px-bottom text-white alt-font font-weight-700 text-uppercase xs-margin-ten-bottom">Ready to get started?</h5>
                            <Formsy id="project-contact-form" onValidSubmit={this.submit} onValid={this.enableButton} onInvalid={this.disableButton}>
                                <div className="row">
                                    <div className="col-md-12">
                                        <div id="success-project-contact-form" className="no-margin-lr"></div>
                                    </div>
                                    <div className="col-md-6">
                                        <MyInput
                                        id="name-input"
                                        name="name"
                                        placeholder="Name *"
                                        title="Name"
                                        required
                                        />
                                    </div>
                                    <div className="col-md-6">
                                        <MyInput
                                        id="phone-input"
                                        name="phone"
                                        placeholder="Phone *"
                                        title="Phone"
                                        required
                                        />
                                    </div>
                                    <div className="col-md-12">
                                        <MyInput
                                        id="email-input"
                                        name="email"
                                        placeholder="E-mail *"
                                        title="Email"
                                        validations="isEmail"
                                        validationError="This is not a valid email."
                                        required
                                        />
                                    </div>
                                    <div className="col-md-12">
                                        <TextArea
                                        id="comment-input"
                                        name="comment"
                                        placeholder="Describe your project"
                                        />
                                    </div>
                                    <div className="col-md-12 text-center">
                                        <button id="contact-form-submit-bt" onClick={this.handleSubmit} className="btn btn-accent btn-medium margin-20px-top">send message</button>
                                    </div>
                                </div>
                            </Formsy>
                            <div id="message-success" className="alert alert-success"><strong>Success!</strong> Your message has been received!</div>
                            <div id="message-error" className="alert alert-danger"><strong>Oh no!</strong> Something went wrong, try submiting again.</div>
                        </div>
                    </div>
                </div>      
            </div>
        </section>  
    );
  }
}

export default contact;
