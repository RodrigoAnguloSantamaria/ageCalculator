import { useContext, useState } from "react";
import { DataContext } from "../Context/DataContext";
import { ageHook } from "../hooks/ageHook";
import "./birthForm.css";

function BirthForm() {
  const context = useContext(DataContext);

  const nowYear = new Date().getFullYear();
  const [badYear, setbadYear] = useState(false);
  const [isDisabled, setisDisabled] = useState(true);

  function handleInput(ev) {
    let inputYear = ev.target.value.split("-");

    if (inputYear[0] > nowYear) {
      setbadYear(true);
    } else {
      setbadYear(false);
      context.setbirthDate({
        ...context.birthDate,
        [ev.target.name]: ev.target.value,
      });
      setisDisabled(false);
    }
  }

  function handleSubmit(ev) {
    ev.preventDefault();
    context.setisBirthDate(true);
  }

  return (
    <form>
      <label>
        Fecha de nacimiento:
        <input type="date" name="birthdate" onChange={handleInput} />
      </label>
      <button onClick={handleSubmit} disabled={isDisabled}>
        calcular
      </button>
      {badYear ? (
        <p> El año de nacimiento no puede ser mayor que el actual</p>
      ) : null}
    </form>
  );
}
export default BirthForm;
