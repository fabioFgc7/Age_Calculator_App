import React from "react";

export const AgeResult = ({ valueDia, valueMes, valueEdad }) => {
  return (
    <div className='flex justify-center flex-col space-y-4 items-center'>
      <p className='text-slate-300 font-bold md:text-3xl  text-lg '>
        {valueEdad}
        <span className='text-blue-500 md:text-3xl  text-lg font-serif ml-5'>
          YEARS
        </span>
      </p>
      <p className='text-slate-300 font-bold md:text-3xl  text-lg'>
        {valueMes}
        <span className='text-blue-500 md:text-3xl  text-lg font-serif ml-5'>
          MONTH
        </span>
      </p>
      <p className='text-slate-300 font-bold md:text-3xl  text-lg'>
        {valueDia}
        <span className='text-blue-500 md:text-3xl  text-lg font-serif ml-5'>
          DAYS
        </span>
      </p>
    </div>
  );
};
