import Button from "./components/Button";
import Input from "./components/Input";

function App() {
  return (
    <main>
      <Input id="name" type="text" label="Your Name" />
      <Input id="age" type="number" label="Your Age" />
      <p>
        <Button el="button" onClick={() => alert("Button clicked!")}>A Button</Button>
      </p>
      <p>
        <Button el="anchor" href="https://reactjs.org">A Link</Button>
      </p>
    </main>
  );
}

export default App;
