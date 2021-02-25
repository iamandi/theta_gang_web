import logo from "./logo.svg";
import "./App.css";
import OptionForm from "./ironCondor";
import validation from "./validation";
import DynamicForm from "./DynamicForm";
import SelectForm from "./SelectForm";

function App() {
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
      <div className='contaier'>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "center",
            alignContent: "flex-start",
            color: "white",
          }}
        >
          <SelectForm />
        </div>
      </div>
    </div>
  );
}

export default App;
