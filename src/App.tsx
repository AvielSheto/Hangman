import { useState } from "react"
import { HangmanDrawing } from "./HangmanDrawing"
import { HangmanWord } from "./HangmanWord"
import { HangmanBoard } from "./Hangmanboard"
import words from "./wordList.json"

function App() {
  const [wordToGuess, setWordToGuess] = useState(() => {
    return words[Math.floor(Math.random() * words.length)]
  })

  const [guessedLetters, setGuessedLetters] = useState<string[]>([])
  return <div
    style={{
      maxWidth: "800px",
      display: "flex",
      flexDirection: "column",
      gap: "2rem",
      margin: "0 auto",
      alignItems: "center"
    }}>

    <div style={{ fontSize: "rem", textAlign: "center" }}>Lose Win</div>

    <HangmanDrawing />
    <HangmanWord />
    <HangmanBoard />



  </div>
}

export default App
