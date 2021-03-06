import React from "react";
import ReactFormInputValidation from "react-form-input-validation";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fields: {
        first_name: "",
        last_name: "",
        email: "",
        phone_no: "",
        password: "",
        legal_name: "",
        dot: "",
        docket: "",
        amazon_contract_no: "",
        is_admin_user: "",
        is_master_user: 0,
        docketVal: "",
        docketDrop: "",
        is_individual_user: [],
      },
      errors: {},
      type: "password",
    };
    this.showHide = this.showHide.bind(this);
    this.form = new ReactFormInputValidation(this);
    this.form.useRules({
      name: "required",
      first_name: "required",
      last_name: "required",
      email: "required|email",
      phone_no: "required|numeric|digits_between:10,12",
      password: "required",
      legal_name: "required",
      dot: "required|numeric|digits_between:10,12",
      docketVal: "required",
      docketDrop: "required",
      is_admin_user: "required",
      amazon_contract_no: "required",
      is_individual_user: "required|array",
    });

    this.form.onformsubmit = (fields) => {
      if (this.state.fields.amazon_contract_no.value !== "") {
        this.setState({ is_master_user: 1 });
      }
      this.setState({
        docket: this.state.fields.docketDrop + this.state.fields.docketVal,
      });
      console.log(this.state);
    };
  }
  showHide(e) {
    e.preventDefault();
    e.stopPropagation();
    this.setState({
      type: this.state.type === "password" ? "input" : "password",
    });
  }
  render() {
    const {
      first_name,
      last_name,
      email,
      phone_no,
      password,
      legal_name,
      dot,
      docketVal,
      docketDrop,
      amazon_contract_no,
    } = this.state.fields;

    return (
      <div className="container" style={{ width: "40%" }}>
        <form onSubmit={this.form.handleSubmit} noValidate autoComplete="off">
          <h2
            className="mt-5 mb-5"
            style={{
              color: "#073C3E",
              textAlign: "center",
              fontWeight: "bold",
              fontSize: "22px",
            }}
          >
            Sign Up
          </h2>
          <div className="row justify-content-start">
            <div className="col-md-12">
              <div className="dis-inline col-md-6">
                <div className="form-group">
                  <label htmlFor="firstName">First Name</label>
                  <input
                    type="text"
                    name="first_name"
                    className={
                      this.state.errors.first_name
                        ? "form-control is-invalid"
                        : "form-control"
                    }
                    // onBlur={this.form.handleBlurEvent}
                    onChange={this.form.handleChangeEvent}
                    value={first_name}
                  />
                  <span className="invalid-feedback">
                    {this.state.errors.first_name
                      ? this.state.errors.first_name
                      : ""}
                  </span>
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email address</label>
                  <input
                    type="text"
                    name="email"
                    className={
                      this.state.errors.email
                        ? "form-control is-invalid"
                        : "form-control"
                    }
                    onChange={this.form.handleChangeEvent}
                    value={email}
                  />
                  <span className="invalid-feedback">
                    {this.state.errors.email ? this.state.errors.email : ""}
                  </span>
                </div>
              </div>
              <div className="dis-inline col-md-6">
                <div className="form-group">
                  <label htmlFor="lasttName">Last Name</label>
                  <input
                    type="text"
                    name="last_name"
                    className={
                      this.state.errors.last_name
                        ? "form-control is-invalid"
                        : "form-control"
                    }
                    // onBlur={this.form.handleBlurEvent}
                    onChange={this.form.handleChangeEvent}
                    value={last_name}
                  />
                  <span className="invalid-feedback">
                    {this.state.errors.last_name
                      ? this.state.errors.last_name
                      : ""}
                  </span>
                </div>
                <div className="form-group">
                  <label htmlFor="phone_no">Phone Number</label>
                  <input
                    type="text"
                    name="phone_no"
                    className={
                      this.state.errors.phone_no
                        ? "form-control is-invalid"
                        : "form-control"
                    }
                    onChange={this.form.handleChangeEvent}
                    value={phone_no}
                  />
                  <span className="invalid-feedback">
                    {this.state.errors.phone_no
                      ? this.state.errors.phone_no
                      : ""}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12">
            <div className="form-group">
              <label htmlFor="password">New Password</label>
              <div class="input-group mb-3">
                <input
                  type={this.state.type}
                  name="password"
                  className={
                    this.state.errors.password
                      ? "form-control is-invalid"
                      : "form-control"
                  }
                  value={password}
                  onChange={this.form.handleChangeEvent}
                  aria-describedby="basic-addon2"
                  style={{ borderRight: "none" }}
                />
                <div
                  className={
                    this.state.errors.password
                      ? "input-group-append is-invalid"
                      : "input-group-append"
                  }
                >
                  <span
                    className="input-group-text"
                    id="basic-addon2"
                    style={{ background: "#ffffff" }}
                    onClick={this.showHide}
                  >
                    {this.state.type === "input" ? <FaEyeSlash /> : <FaEye />}
                  </span>
                </div>
                <span className="invalid-feedback">
                  {this.state.errors.password ? this.state.errors.password : ""}
                </span>
              </div>
              {/* <input
                type="password"
                name="password"
                className={
                  this.state.errors.password
                    ? "form-control is-invalid"
                    : "form-control"
                }
                value={password}
                onChange={this.form.handleChangeEvent}
              /> */}
            </div>
          </div>

          <div className="col-12">
            <p
              style={{
                fontSize: "16px",
                fontWeight: "bold",
                textAlign: "left",
              }}
            >
              Authority Information
            </p>
            <div className="form-group">
              <label htmlFor="legal_name">Legal Name</label>
              <input
                type="text"
                name="legal_name"
                className={
                  this.state.errors.legal_name
                    ? "form-control is-invalid"
                    : "form-control"
                }
                value={legal_name}
                onChange={this.form.handleChangeEvent}
              />
              <span className="invalid-feedback">
                {this.state.errors.legal_name
                  ? this.state.errors.legal_name
                  : ""}
              </span>
            </div>
          </div>
          <div className="form-row">
            <div className="dis-inline col-6" style={{ paddingLeft: "20px" }}>
              <div className="form-group">
                <label htmlFor="dot">DOT</label>
                <input
                  type="text"
                  name="dot"
                  className={
                    this.state.errors.dot
                      ? "form-control is-invalid"
                      : "form-control"
                  }
                  value={dot}
                  onChange={this.form.handleChangeEvent}
                />
                <span className="invalid-feedback">
                  {this.state.errors.dot ? this.state.errors.dot : ""}
                </span>
              </div>
            </div>
            <div className="dis-inline col-6" style={{ paddingRight: "20px" }}>
              <div className="form-group">
                <label htmlFor="docket">DOCKET</label>
                <div className="input-group">
                  <div className="input-group-prepend">
                    <select
                      name="docketDrop"
                      className="form-control"
                      value={docketDrop}
                      onChange={this.form.handleChangeEvent}
                      style={{ background: "#9FC84C" }}
                      id="docket"
                    >
                      <option>MC</option>
                      <option>FX</option>
                      <option>MX</option>
                    </select>
                  </div>
                  <input
                    type="text"
                    name="docketVal"
                    className={
                      this.state.errors.docketVal
                        ? "form-control is-invalid"
                        : "form-control"
                    }
                    value={docketVal}
                    onChange={this.form.handleChangeEvent}
                    placeholder="XXXXXXXXXX"
                    aria-label="XXXXXXXXXX"
                    aria-describedby="basic-addon1"
                  />
                </div>
                <div className="dan">
                  {this.state.errors.docketVal
                    ? this.state.errors.docketVal
                    : ""}
                </div>
              </div>
            </div>
          </div>
          <div className="col-12">
            <div className="form-group">
              <label htmlFor="amazon_contract_no">Amazon Contact number</label>
              <input
                type="text"
                name="amazon_contract_no"
                className="form-control"
                value={amazon_contract_no}
                onChange={this.form.handleChangeEvent}
              />
            </div>
          </div>
          <div className="col-12">
            <div className="form-check">
              <input
                className="form-check-input"
                name="is_individual_user"
                type="checkbox"
                value="check"
                onChange={this.form.handleChangeEvent}
              />
              <label className="form-check-label" htmlFor="defaultCheck1">
                I would like information, tips and offers about Reliance
                partners products and services
              </label>
              <span className="text-danger">
                {this.state.errors.is_individual_user
                  ? this.state.errors.is_individual_user
                  : ""}
              </span>
            </div>
          </div>
          <div className="col-12">
            <p style={{ paddingTop: "10px" }}>
              Disclaimer: Please check your inbox for an email verifaction
            </p>
          </div>
          <div
            className="form-row"
            style={{ marginRight: "10px", marginLeft: "10-x" }}
          >
            <button
              className="btn btn-lg btn-primary btn-block"
              style={{ background: "#073C3E", border: "none" }}
              type="submit"
            >
              SIGN UP
            </button>
          </div>
        </form>
      </div>
    );
  }
}
export default SignUp;
