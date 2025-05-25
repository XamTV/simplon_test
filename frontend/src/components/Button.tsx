type ButtonProps = {
  readonly displayJoke: () => void;
  readonly joke: string;
};

export default function Button({ displayJoke, joke }: ButtonProps) {
  return (
    <div id="ButtonContainer">
      <button onClick={displayJoke}>
        {" "}
        {joke ? "Une autre !" : "Une petite blague ?"}
      </button>
    </div>
  );
}
