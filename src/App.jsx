import "./index.css";
import { Form_calculator } from "./components/Form_calculator";

function App() {
  return (
    <main className='flex justify-center  items-center h-screen'>
      <div className='space-y-2'>
        <h1 className='md:text-4xl text-xl text-center text-slate-200 font-serif '>
          Age Calculator App
        </h1>

        <Form_calculator />
      </div>
    </main>
  );
}

export default App;
