import React from "react";
import { useFormik } from "formik";

// A custom validation function. This must return an object
// which keys are symmetrical to our values/initialValues
const validate = (values) => {
  const errors = {};
  if (!values.firstName) {
    errors.firstName = "Required";
  } else if (values.firstName.length > 15) {
    errors.firstName = "Must be 15 characters or less";
  }

  if (!values.lastName) {
    errors.lastName = "Required";
  } else if (values.lastName.length > 20) {
    errors.lastName = "Must be 20 characters or less";
  }

  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  return errors;
};

const OptionForm = () => {
  // Pass the useFormik() hook initial form values and a submit function that will
  // be called when the form is submitted
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
    },
    validate,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <div class='form-group'>
        <label for='firstName'>First Name</label>
        <input
          type='text'
          class='form-control'
          id='firstName'
          name='firstName'
          aria-describedby='firstNameHelp'
          placeholder='First Name'
          onChange={formik.handleChange}
          value={formik.values.firstName}
        />
        {formik.errors.firstName ? <div>{formik.errors.firstName}</div> : null}
      </div>
      <br />

      <div class='form-group'>
        <label for='exampleInputEmail1'>Email address</label>
        <input
          class='form-control'
          aria-describedby='emailHelp'
          placeholder='Enter email'
          id='email'
          name='email'
          type='email'
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        <small id='emailHelp' class='form-text text-muted'>
          We'll never share your email with anyone else.
        </small>
        {formik.errors.email ? <div>{formik.errors.email}</div> : null}
      </div>
      <br />

      <div class='form-check'>
        <input type='checkbox' class='form-check-input' id='exampleCheck1' />
        <label class='form-check-label' for='exampleCheck1'>
          Check me out
        </label>
      </div>

      <button type='submit' class='btn btn-primary'>
        Submit
      </button>
    </form>
  );
};

export default OptionForm;
