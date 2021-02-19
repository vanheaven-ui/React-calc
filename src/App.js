import ButtonPanel from "./components/Buttonpanel";

function App() {
  const myText =
    "I have completed the project setup. Time to get building... Well I should remember to lint the code.";
  return (
    <div className="App" style={{ color: "red", fontSize: 64 }}>
      {myText}
    </div>
  );
}

export default App;
