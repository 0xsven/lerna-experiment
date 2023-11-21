import Button from "ui/atoms/Button";

function App() {
  console.log(import.meta.env);
  return (
    <div className="p-10">
      <h1 className="text-xl font-bold mb-10 text-primary">
        Cartwheel Homepage
      </h1>
      <Button>ui/Button</Button>

      <div className="mt-10 flex gap-4">
        <div>VITE_API_DISAMBIGUATOR</div>
        <div>{import.meta.env.VITE_API_DISAMBIGUATOR}</div>
      </div>
    </div>
  );
}

export default App;
