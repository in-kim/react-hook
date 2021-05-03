import { useState } from "react";
import ReactDOM from "react-dom";

const useInput = (initialValue, validator) => {
  const [value, setValue] = useState(initialValue);

  const onChange = (event) => {
    const {
      target: { value }
    } = event;
    let willUpdate = true;
    if (typeof validator === "function") {
      willUpdate = validator(value);
    }
    if (willUpdate) {
      setValue(value);
    }
  };

  return { value, onChange };
};

const App = () => {
  // 길이검증
  const maxLen = (value) => value.length <= 10;
  // 특정 문자열 검증
  const noStr = (value) => !value.includes("@");
  const name = useInput("Mr.", noStr);
  return (
    <div className="App">
      <h1>Hello</h1>
      {/* value={name.value} */}
      <input placeholder="Name" {...name} />
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
