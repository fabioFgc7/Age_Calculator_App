import React from "react";
import { useState } from "react";
import { FaEquals } from "react-icons/fa";
import { AgeResult } from "./AgeResult";

export const Form_calculator = () => {
  const [date, setDate] = useState({
    day: "",
    month: "",
    year: "",
  });
  const [valueEdad, setvalueEdad] = useState("--");
  const [valueMes, setValueMes] = useState("--");
  const [valueDia, setvalueDia] = useState("--");
  const [textError, setTextError] = useState({
    dia: "",
    mes: "",
    anos: "",
  });
  const [activeError, setActiveError] = useState({
    dia: false,
    mes: false,
    anos: false,
  });
  const { anos, dia, mes } = textError;

  const handleOnSubmit = (e) => {
    e.preventDefault(); // Evita que el formulario se envíe al presionar Enter
    const { day, month, year } = date;
    const birthDate = new Date(`${year}-${month}-${day}`); // Crea un objeto Date a partir de los valores ingresados
    const hoy = new Date();

    const edad = hoy.getFullYear() - birthDate.getFullYear();
    let edadMeses = (hoy.getMonth() - birthDate.getMonth() + 12) % 12;
    let edadDias = hoy.getDate() - birthDate.getDate();
    let cantidadDias = new Date(new Date().getFullYear(), month, 0).getDate();
    if (edadDias < 0) {
      edadMeses--;
      edadDias += new Date(hoy.getFullYear(), hoy.getMonth(), 0).getDate();
    }
    if (day > cantidadDias) {
      setActiveError({ dia: true });
      setTextError({
        dia: `Error, El mes ${month} solo tiene ${cantidadDias} días `,
      });
    } else if (month > 12) {
      setTextError({ mes: `Error, el años solo tiene 12 meses` });
      setActiveError({ mes: true });
    } else if (year > hoy.getFullYear()) {
      setTextError({ anos: "Aun no estamos el años " + year });
      setValueMes("--");
      setActiveError({ anos: true });
    } else {
      setActiveError({ dia: false });
      setActiveError({ anos: false });
      setActiveError({ mes: false });
      setvalueEdad(edad);
      setValueMes(edadMeses);
      setvalueDia(edadDias);
      setTextError({ mes: "" });
      setTextError({ dia: "" });
      setTextError({ anos: "" });
    }
  };
  return (
    <div className='w-full flex justify-center  items-center flex-col md:p-20 text-slate-200 bg-[#041735] p-10  md:rounded-ee-[35%] rounded-ee-[15%]  shadow-lg shadow-blue-700  relative'>
      <form
        onSubmit={handleOnSubmit}
        className=' flex md:flex-row flex-col space-y-5 md:space-y-0 md:space-x-4 justify-center items-center'>
        <div className='flex flex-col gap-y-3 text-center'>
          <label
            htmlFor='day'
            className='font-serif'>
            DAY
          </label>
          <input
            type='text'
            name='day'
            placeholder='DD'
            value={date.day}
            onChange={(e) => setDate({ ...date, day: e.target.value })}
            className='md:border-[3px] border-[1px] border-blue-500 outline-none rounded-md md:md:p-[3px] text-black'
          />
          <span
            className={`text-sm ${
              activeError.dia ? "text-red-600" : "text-blue-300"
            }  font-bold `}>
            {dia}
          </span>
        </div>
        <div className='flex flex-col gap-y-3 text-center'>
          <label
            htmlFor='month'
            className='font-serif'>
            MONTH
          </label>
          <input
            type='text'
            name='month'
            placeholder='MM'
            value={date.month}
            onChange={(e) => setDate({ ...date, month: e.target.value })}
            className='md:border-[3px] border-[1px] border-blue-500 outline-none rounded-md md:p-[3px] text-black'
          />
          <span
            className={`text-sm ${
              activeError.mes ? "text-red-600" : "text-red-500"
            }  font-bold`}>
            {mes}
          </span>{" "}
        </div>
        <div className='flex flex-col gap-y-3 text-center'>
          <label
            htmlFor='year'
            className='font-serif '>
            YEAR
          </label>
          <input
            type='text'
            name='year'
            placeholder='YYYY'
            value={date.year}
            onChange={(e) => setDate({ ...date, year: e.target.value })}
            className='md:border-[3px] border-[1px] border-blue-500 outline-none rounded-md md:p-[3px] text-black'
          />
          <span
            className={`text-sm ${
              activeError.anos ? "text-red-600" : ""
            }  font-bold`}>
            {anos}
          </span>{" "}
        </div>
        <button
          type='submit'
          className='absolute md:bottom-0 md:top-0 md:right-32 bottom-2 bg-blue-500 md:bg-transparent md:w-auto w-4/5 rounded-md '>
          <FaEquals className='md:text-3xl text-xl md:text-blue-500 text-gray-200 ml-auto mr-auto md: md:mr-0' />
        </button>
      </form>
      <AgeResult
        valueDia={valueDia}
        valueMes={valueMes}
        valueEdad={valueEdad}
      />
    </div>
  );
};
