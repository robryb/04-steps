import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  return (
    <div>
      <Steps />
      <Steps />
    </div>
  );
}

function Steps() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  function handlePrevious() {
    // Update by checking state and then using a callback for the actual update within setXXX(). He
    // He said that this is the safest way to do it, but he didn't explain. He gave a demo and it failed
    // as promised, but he didn't explain why it failed.
    if (step > 1) setStep((currStep) => currStep - 1);
  }

  function handleNext() {
    // Use a callback in the call to setStep()
    if (step < 3) setStep((currStep) => currStep + 1);
  }

  return (
    <div>
      {/* Use a callback in the call to setIsOpen() */}
      <button className="close" onClick={() => setIsOpen((isO) => !isO)}>
        &times;
      </button>

      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>

          <p className="message">
            Step {step}: {messages[step - 1]}
          </p>

          <div className="buttons">
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={handlePrevious}
            >
              Previous
            </button>
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={handleNext}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
