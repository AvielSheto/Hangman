import styles from "./Keyboard.module.css";

const KEYS = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

type KeyboardProps = {
  disabled?: boolean;
  activeLetters: string[];
  inactiveLetters: string[];
  addGuessedLetter: (letter: string) => void;
};

export function Keyboard({
  activeLetters,
  inactiveLetters,
  addGuessedLetter,
  disabled = false,
}: KeyboardProps) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(75px, 1fr))",
        gap: ".5rem",
      }}
    >
      {KEYS.map((Key) => {
        const isActive = activeLetters.includes(Key);
        const isInActive = inactiveLetters.includes(Key);

        return (
          <button
            onClick={() => addGuessedLetter(Key)}
            className={`${styles.btn} ${isActive ? styles.active : ""}
            ${isInActive ? styles.inactive : ""}`}
            disabled={isActive || isInActive || disabled}
            key={Key}
          >
            {Key}
          </button>
        );
      })}
    </div>
  );
}
