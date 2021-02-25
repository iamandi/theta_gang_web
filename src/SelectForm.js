import React from "react";
import { Formik } from "formik";
import Form from "./AddForm.js";

export default function App() {
  const items = [
    { country: "USA", level: 1 },
    { country: "USA", level: 5 },
    { country: "Canada", level: 2 },
    { country: "Canada", level: 4 },
    { country: "Bangladesh", level: 3 },
    { country: "Bangladesh", level: 7 },
  ];

  const fields = [
    { label: "First Name", type: "input", name: "firstName", value: "Abdi" },
    { label: "Last Name", type: "input", name: "lastName", value: "Ahmed" },
    { label: "City", type: "input", name: "city", value: "London" },
    {
      label: "Address",
      type: "input",
      name: "address",
      value: "10 FSS Street",
    },
    {
      label: "Occupation",
      type: "select",
      data: ["Teacher", "Software Engineer", "Doctor", "Lawyer"],
      name: "occupation",
      value: "Please Select",
    },
  ];

  return (
    <div className='App'>
      <h1>connected selects</h1>
      <Formik
        initialValues={{ country: "", level: "" }}
        onSubmit={(values) => {
          console.log("SUBMIT: ", values);
        }}
      >
        <Form data={items} fields={fields} />
      </Formik>
    </div>
  );
}
