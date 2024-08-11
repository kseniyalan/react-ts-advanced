import Input from "./components/Input";

function App() {
  return (
    <main>
      <Input id="name" type="text" label="Your Name" />
      <Input id="age" type="number" label="Your Age" />
    </main>
  );
}

export default App;
