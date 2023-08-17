import { useContext } from "react";
import { DataContext } from "../Context/DataContext";

export function ageHook(){
    const context = useContext(DataContext)
    let {birthdate} = context.birthdate
    
    birthdate=birthdate.split("-")
    let year=birthdate[0]
    let month=birthdate[1]-1
    let day=birthdate[2]
    
    


    const now = new Date();
  // a birthdate la entraran los datos desde formulario
    const birthDate = new Date(year, month, day);

  const nowYear = now.getFullYear();
  let age = now - birthDate;
  age = age / 1000 / 60 / 60 / 24;
  let years = age / 365.25;

  let days = age % 365.25;
  //console.log(days);

  if (Math.round(parseFloat(days).toFixed(2)) === 365) {
    days = 0;
    years++;
  } else {
    days = Math.round(parseFloat(days).toFixed(2));
  }
  //console.log("años: " + parseInt(years) + " y dias: " + days);
  return ({years,days})

}