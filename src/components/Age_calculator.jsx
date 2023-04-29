import React from "react";
import { Form_calculator } from "./Form_calculator";

export const Age_calculator = () => {
  return (
    <main>
      <Form_calculator />
      <div className='flex justify-center flex-col space-y-4 items-center'>
        <p className='text-slate-600 font-bold'>
          {valueEdad}
          <span className='text-blue-500 text-3xl font-serif'>YEARS</span>
        </p>
        <p className='text-slate-600 font-bold'>
          {valueMes}
          <span className='text-blue-500 text-3xl font-serif'>MONTH</span>
        </p>
        <p className='text-slate-600 font-bold'>
          {valueDia}
          <span className='text-blue-500 text-3xl font-serif'>DAYS</span>
        </p>
      </div>
    </main>
  );
};
