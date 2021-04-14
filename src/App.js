import React from "react";
import "./App.css";
import CustomForm from "./views/CustomForm";
import SubmittedForm from "./views/SubmittedForm";

export default class App extends React.Component {
  state = {
    submitted: false,
    submittedValues: null,
    countryCode: null,
  };

  setSubmitted = () => {
    this.setState({ submitted: true });
  };

  setSubmittedValues = (values, countryCode) => {
    this.setState({ submittedValues: values });
    this.setState({ countryCode: countryCode.countryCode });
  };

  setCountryCode = (value) => {
    this.setState({ countryCode: value });
  };

  returnToEdit = () => {
    this.setState({ submitted: false });
  };

  render() {
    return (
      <>
        {!this.state.submitted && (
          <CustomForm
            submitForm={this.setSubmitted}
            submitValues={this.setSubmittedValues}
            submittedValues={this.state.submittedValues}
            countryCode={this.state.countryCode}
          />
        )}
        {this.state.submitted && this.state.submittedValues && (
          <SubmittedForm
            submittedValues={this.state.submittedValues}
            countryCode={this.state.countryCode}
            returnToEdit={this.returnToEdit}
          />
        )}
      </>
    );
  }
}

// export default App;
