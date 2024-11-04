// Components
import { GrFormNext, GrFormPrevious, GrSteps } from 'react-icons/gr';
import {FiSend} from "react-icons/fi"
import UserForm from "./components/UserForm";
import ReviewForm from "./components/ReviewForm";
import Thanks from "./components/Thanks";
import Steps from "./components/steps"

// Hooks
import { userForm } from "./hooks/userForm";
import { useState } from "react"

import './App.css';

const formTemplate = {
  name: "",
  email: "",
  review: "",
  comment: "",
};

function App() {
  const [data, setData] = useState(formTemplate)

  const updateFieldHandler = (key, value) => {
    setData((prev) => {
      return { ...prev, [key]: value };
    });
  };

  const formComponents = [
  <UserForm data={data} updateFieldHandler={updateFieldHandler}/>, 
  <ReviewForm data={data} updateFieldHandler={updateFieldHandler}/> , 
  <Thanks data={data}/>,
];

  const { currentStep, currentComponent, changeStep, isLastStep, isFirstStep } = userForm(formComponents)

  return (
    <div className='App'>
      <div className="header">
        <h2>Deixe sua avaliação</h2>
        <p>
          FIcamos felizes com a sua compra, utilize o formulário abaixo 
          para avaliar o produto
        </p>
      </div>
      <div className="form-container">
        <Steps currentStep={currentStep} />
        <form onSubmit={(e) => changeStep(currentStep +1, e)}>
          <div className="inputs-container">{currentComponent}</div>
        <div className="actions">
       {!isFirstStep && (
           <button type='button' onClick={() => changeStep (currentStep - 1)}>
           <GrFormPrevious />
           <span>Voltar</span>
         </button>
       )}
         {!isLastStep ? ( 
          <button type='submit'>
            <span>Avançar</span>
            <GrFormNext />
            </button>) : ( 
              <button type='button'>
            <span>Enviar</span>
            <FiSend />
            </button>
          )}
        </div>
        </form>
      </div>
    </div>
  )
  
}

export default App