// MyInput.js
import { withFormsy } from 'formsy-react';
import React from 'react';

class TextArea extends React.Component {
  constructor(props) {
    super(props);
    this.changeValue = this.changeValue.bind(this);
  }

  changeValue(event) {
    // setValue() will set the value of the component, which in
    // turn will validate it and the rest of the form
    // Important: Don't skip this step. This pattern is required
    // for Formsy to work.
    this.props.setValue(event.currentTarget.value);
  }

  render() {
    // An error message is returned only if the component is invalid
    const errorMessage = this.props.getErrorMessage();

    return (
      <div>
        <textarea
          onChange={this.changeValue}
          id={this.props.id}
          className="bg-transparent border-color-medium-dark-gray medium-input"
          placeholder={this.props.placeholder}
          rows="6"
          value={this.props.getValue() || ''}
        />
        <span>{errorMessage}</span>
      </div>
    );
  }
}

export default withFormsy(TextArea);
