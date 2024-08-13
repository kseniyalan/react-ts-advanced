import { useRef } from "react";
import Button from "./components/Button";
import Input from "./components/Input";
import Container from "./components/Container";
import Form from "./components/Form";

function App() {

  const nameInputRef = useRef<HTMLInputElement>(null);

  // Here in the parent component we DO KNOW the shape of the data that will be passed to the onSave function,
  // because wr know which fields are in the form.
  function handleSave(data: unknown) {
    const extractedData = data as { surname: string, age: string };
    console.log(extractedData);
  }

  return (
    <main>
      <Input
        id="name"
        type="text"
        label="Your Name"
        ref={nameInputRef}
      />
      <Form onSave={handleSave}>
        <Input id="surname" type="text" label="Your Surname" />
        <Input id="age" type="number" label="Your Age" />
        <p>
          <Button type="submit">Save</Button>
        </p>
      </Form>
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
