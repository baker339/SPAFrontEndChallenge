import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import CustomTextInput from "../components/CustomTextInput";
import CountrySelect from "../components/CountrySelect";
import ColorSelect from "../components/ColorSelect";
import { Styles } from "../Styles";
import GetCountries from "../services/GetCountries";
import PhoneRegExp from "../models/PhoneRegex";
import PhoneTextInput from "../components/PhoneTextInput";

export default class CustomForm extends React.Component {
  state = {
    loading: true,
    countries: null,
    countryCode: "",
    initialValues: {
      firstName: "",
      middleName: "",
      lastName: "",
      country: "",
      phoneNumber: "",
      emailAddress: "",
      favoriteColor: "",
      comments: "",
    },
    initialValuesSet: false,
  };

  async componentDidMount() {
    this.setState({ countries: await GetCountries() });
    this.setInitialValues();
  }

  setCountryCode = (newCountryCode) => {
    this.setState({ countryCode: newCountryCode });
  };

  setInitialValues() {
    if (this.props.submittedValues) {
      this.setState({
        initialValues: {
          firstName: this.props.submittedValues.firstName,
          middleName: this.props.submittedValues.middleName
            ? this.props.submittedValues.middleName
            : "",
          lastName: this.props.submittedValues.lastName,
          country: this.props.submittedValues.country,
          phoneNumber: this.props.submittedValues.phoneNumber,
          emailAddress: this.props.submittedValues.emailAddress,
          favoriteColor: this.props.submittedValues.favoriteColor,
          comments: this.props.submittedValues.comments
            ? this.props.submittedValues.comments
            : "",
        },
      });
    }
    if (this.props.countryCode) {
      this.setState({ countryCode: this.props.countryCode });
    }
    this.setState({ initialValuesSet: true });
  }

  render() {
    return (
      <Styles>
        <div>
          {this.state.countries && this.state.initialValuesSet && (
            <Formik
              initialValues={this.state.initialValues}
              validationSchema={Yup.object({
                firstName: Yup.string().required("First Name is required"),
                middleName: Yup.string().notRequired(),
                lastName: Yup.string().required("Last Name is required"),
                country: Yup.string().required("Country is required"),
                phoneNumber: Yup.string()
                  .matches(PhoneRegExp, "Phone number is not valid")
                  .min(10, "Phone Number must be 10 digits")
                  .max(10, "Phone Number must be 10 digits")
                  .required("Phone Number is required"),
                emailAddress: Yup.string()
                  .email("Invalid Email Address")
                  .required("Email Address is required"),
                favoriteColor: Yup.string().required(
                  "Favorite Color is required"
                ),
                comments: Yup.string()
                  .notRequired()
                  .max(200, "Comments must be 200 characters or less"),
              })}
              onSubmit={(values, { setSubmitting, resetForm }) => {
                setTimeout(() => {
                  resetForm();
                  setSubmitting(false);
                }, 3000);
                this.props.submitForm();
                this.props.submitValues(values, this.state.countryCode);
              }}
            >
              {(props) => (
                <Form>
                  <span style={{ textAlign: "center" }}>
                    <a href="https://ally.com">
                      <img
                        style={{ width: "50%", height: "50%" }}
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Ally_Bank_logo.svg/200px-Ally_Bank_logo.svg.png"
                      />
                    </a>
                  </span>
                  <h1>Welcome to the Ally Front End Challenge Survey!</h1>
                  <CustomTextInput
                    label="First Name"
                    name="firstName"
                    type="text"
                    placeholder="First Name"
                  />
                  <br />
                  <CustomTextInput
                    label="Middle Name"
                    name="middleName"
                    type="text"
                    placeholder="Middle Name"
                  />
                  <br />
                  <CustomTextInput
                    label="Last Name"
                    name="lastName"
                    type="text"
                    placeholder="Last Name"
                  />
                  <br />
                  <CountrySelect
                    label="Country"
                    name="country"
                    countries={this.state.countries}
                    setCountryCode={this.setCountryCode}
                  />
                  <br />
                  <PhoneTextInput
                    label="Phone Number"
                    name="phoneNumber"
                    type="text"
                    placeholder=""
                    countryCode={this.state.countryCode}
                  />
                  <br />
                  <CustomTextInput
                    label="Email Address"
                    name="emailAddress"
                    type="text"
                    placeholder=""
                  />
                  <br />
                  <ColorSelect
                    label="Favorite Color"
                    name="favoriteColor"
                    placeholder=""
                  />
                  <br />
                  <CustomTextInput
                    label="Comments"
                    name="comments"
                    type="text"
                    placeholder=""
                  />
                  <br />
                  <button type="submit">
                    {props.isSubmitting ? "Loading..." : "Submit"}
                  </button>
                </Form>
              )}
            </Formik>
          )}
        </div>
      </Styles>
    );
  }
}
