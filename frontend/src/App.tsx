import { useState } from "react";
import "./App.css";
import Button from "./components/Button";
import LandingPage from "./pages/LandingPage";

function App() {
  const [joke, setJoke] = useState<
    { title: string; answer: string } | undefined
  >();

  const displayJoke = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/jokes/random");
      const data = await res.json();
      setJoke({ title: data.title, answer: data.answer });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Button displayJoke={displayJoke} joke={joke?.title ?? ""} />
      {joke && (
        <LandingPage title={joke?.title ?? ""} answer={joke?.answer ?? ""} />
      )}
    </>
  );
}

export default App;
