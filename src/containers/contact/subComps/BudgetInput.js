import { withFormsy } from 'formsy-react';
import React from 'react';

class BudgetInput extends React.Component {
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
        <select
          id="budget"
          className="bg-transparent no-margin-bottom">
            <option value="">Select your budget</option>
            <option value="$500 - $1000">$500 - $1000</option>
            <option value="$1000 - $2000">$1000 - $2000</option>
            <option value="$2000 - $5000">$2000 - $5000</option>
        </select>
      </div>
    );
  }
}

export default withFormsy(BudgetInput);
