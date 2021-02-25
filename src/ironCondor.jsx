import React from "react";
import { Field, Form, Formik, FormikProps } from "formik";
import { values } from "lodash";
import validation from "./validation";

const MyInput = ({ field, form, ...props }) => {
  return <input {...field} {...props} />;
};

const options = ["red", "green", "blue"];

const BasicForm = () => (
  <div>
    <h1>My Form</h1>
    <Formik
      initialValues={{
        email: "",
        color: "red",
        firstName: "",
        lastName: "",
      }}
      onSubmit={(values, actions) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          actions.setSubmitting(false);
        }, 1000);
      }}
    >
      {(props: FormikProps<any>) => (
        <Form>
          <Field type='email' name='email' placeholder='Email' />

          <Field as='select' name='color'>
            {options.map((option) => (
              <option value={option}>{option}</option>
            ))}
          </Field>

          <div>Picked: {props.values.color}</div>

          {values.color === "blue" && (
            <Field
              name='color_picked'
              placeholder={values.color}
              component={MyInput}
            />
          )}

          <Field name='firstName'>
            {({
              field, // { name, value, onChange, onBlur }
              form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
              meta,
            }) => (
              <div>
                <input type='text' placeholder='First Name' {...field} />
                {meta.touched && meta.error && (
                  <div className='error'>{meta.error}</div>
                )}
              </div>
            )}
          </Field>

          <Field name='lastName' placeholder='Last Name' component={MyInput} />
          <button type='submit'>Submit</button>
        </Form>
      )}
    </Formik>
  </div>
);
export default BasicForm;
