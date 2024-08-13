import Button from "./components/Button";
import Input from "./components/Input";
import Container from "./components/Container";

function App() {
  return (
    <main>
      <Input id="name" type="text" label="Your Name" />
      <Input id="age" type="number" label="Your Age" />
      <Container
        as={Button}
        onClick={() => alert("Container clicked!")}
        type="button"
      >
        Click me!
      </Container>
      <p>
        <Button onClick={() => alert("Button clicked!")}>A Button</Button>
      </p>
      <p>
        <Button href="https://reactjs.org">A Link</Button>
      </p>
    </main>
  );
}

export default App;
