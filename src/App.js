import { useState } from "react";
import "./App.css";

const SiteHeader = () => {
  return (
    <header className="AppHeader">
      <div>
        <h1>My brand</h1>
      </div>
    </header>
  );
};

const Paragraph = (props) => {
  return <p className={props.className}>{props.text}</p>;
};

const ParagraphWithChildren = (props) => {
  return <p className={props.className}>{props.children}</p>;
};

const SiteFooter = () => {
  return (
    <footer className="AppFooter">
      <div>
        <p>Copyright 2021</p>
      </div>
    </footer>
  );
};

const Add = (props) => {
  return <span>{props.firstNumber + props.secondNumber}</span>;
};

const Counter = () => {
  const [trackedCounter, setTrackedCounter] = useState(0);
  const increaseTrackedCounter = () => {
    setTrackedCounter(trackedCounter + 1);
  };
  return (
    <div>
      <h3>Counter declared with useState: {trackedCounter}</h3>
      <button onClick={increaseTrackedCounter}>Increase tracked counter</button>
    </div>
  );
};

const NameInput = () => {
  const [firstName, setFirstName] = useState("");
  const changeFirstName = (event) => {
    setFirstName(event.target.value);
  };

  const [lastName, setLastName] = useState("");
  const changeLastName = (event) => {
    setLastName(event.target.value);
  };
  return (
    <div>
      <input
        value={firstName}
        onChange={changeFirstName}
        placeholder="Enter your first name here"
      />
      <input
        value={lastName}
        onChange={changeLastName}
        placeholder="Enter your last name here"
      />
      {!firstName && !lastName && <h3>Please enter your name</h3>}
      {firstName && !lastName && (
        <h3>Hi {firstName}, very nice to meet you!</h3>
      )}
      {firstName && lastName && (
        <h3>
          Hi {firstName} {lastName}, very nice to meet you!
        </h3>
      )}
    </div>
  );
};

const App = () => {
  return (
    <div className="App">
      <SiteHeader />
      <main>
        <h2>Some title</h2>
        <Paragraph
          text="I will be in the paragraph"
          className="SomeParagraph"
        />

        <ParagraphWithChildren
          children="I will be in the second paragraph"
          className="SomeOtherParagraph"
        />

        <ParagraphWithChildren className="SomeOtherParagraph">
          I will be in the second paragraph
        </ParagraphWithChildren>

        <Add firstNumber={10} secondNumber={20} />

        <Counter />

        <NameInput />
      </main>
      <SiteFooter />
    </div>
  );
};

export default App;
