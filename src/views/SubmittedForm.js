import React from "react";
import { Styles } from "../Styles";

export default class SubmittedForm extends React.Component {
  render() {
    return (
      <Styles>
        <div>
          <h1>Thank you for taking the survey!</h1>
          <h3>First Name</h3>
          <p>{this.props.submittedValues.firstName}</p>
          <h3>Middle Name</h3>
          <p>{this.props.submittedValues.middleName}</p>
          <h3>Last Name</h3>
          <p>{this.props.submittedValues.lastName}</p>
          <h3>Country</h3>
          <p>{this.props.submittedValues.country}</p>
          <h3>Phone Number</h3>
          <p>
            ({this.props.countryCode}){this.props.submittedValues.phoneNumber}
          </p>
          <h3>Email</h3>
          <p>{this.props.submittedValues.email}</p>
          <h3>Favorite Color</h3>
          <p>{this.props.submittedValues.favoriteColor}</p>
          <h3>Comments</h3>
          <p>{this.props.submittedValues.comments}</p>
          <br />
          <div style={{ textAlign: "center" }}>
            <h3>Something look wrong?</h3>
            <button onClick={() => this.props.returnToEdit()}>
              Edit Reponses
            </button>
          </div>
        </div>
      </Styles>
    );
  }
}
