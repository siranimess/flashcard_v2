import { useState } from "react";
import "./App.css";
import Flashcard from "./Flashcard.jsx";

function App() {
  const originalCards = [
    {
      question: "What does useState() do in React?",
      answer: "It stores and updates state inside a React component.",
      difficulty: "Easy",
    },
    {
      question: "What is JSX?",
      answer: "JSX is syntax that lets us write HTML-like code inside JavaScript.",
      difficulty: "Easy",
    },
    {
      question: "What is a React component?",
      answer: "A reusable piece of user interface.",
      difficulty: "Easy",
    },
    {
      question: "What are props in React?",
      answer: "Props are data passed from a parent component to a child component.",
      difficulty: "Easy",
    },
    {
      question: "What does the onClick event do?",
      answer: "It runs a function when the user clicks an element.",
      difficulty: "Easy",
    },
    {
      question: "What does the map() method do?",
      answer:
        "It creates a new array by transforming each item in an existing array.",
      difficulty: "Medium",
    },
    {
      question: "What is conditional rendering?",
      answer: "Displaying different UI depending on a condition.",
      difficulty: "Medium",
    },
    {
      question: "Why does React use keys when rendering lists?",
      answer: "Keys help React identify which items changed, were added, or removed.",
      difficulty: "Medium",
    },
    {
      question: "What is Vite?",
      answer: "A fast development and build tool commonly used with React.",
      difficulty: "Easy",
    },
    {
      question: "What does useEffect() do?",
      answer:
        "It runs side effects such as fetching data or updating the document.",
      difficulty: "Hard",
    },
    {
      question: "What is the virtual DOM?",
      answer:
        "A lightweight representation of the real DOM used by React.",
      difficulty: "Hard",
    },
    {
      question: "What is an event handler?",
      answer:
        "A function that runs after a user event such as a click.",
      difficulty: "Medium",
    },
    {
      question: "What does import do in JavaScript?",
      answer:
        "It brings code, components, or files from another module.",
      difficulty: "Easy",
    },
    {
      question: "What does export default do?",
      answer:
        "It makes a value or component available to import in another file.",
      difficulty: "Medium",
    },
  ];

  const [cards, setCards] = useState(originalCards);
  const [currentCard, setCurrentCard] = useState(0);
  const [flipped, setFlipped] = useState(false);

  const [guess, setGuess] = useState("");
  const [feedback, setFeedback] = useState("");

  const [currentStreak, setCurrentStreak] = useState(0);
  const [longestStreak, setLongestStreak] = useState(0);

  const [masteredCards, setMasteredCards] = useState([]);

  const normalizeAnswer = (text) => {
    return text
      .toLowerCase()
      .replace(/[.,!?'"()-]/g, "")
      .replace(/\s+/g, " ")
      .trim();
  };

  const checkAnswer = () => {
    if (guess.trim() === "") {
      setFeedback("empty");
      return;
    }

    const userAnswer = normalizeAnswer(guess);
    const correctAnswer = normalizeAnswer(cards[currentCard].answer);

    const isCorrect =
      userAnswer === correctAnswer ||
      correctAnswer.includes(userAnswer) ||
      userAnswer.includes(correctAnswer);

    if (isCorrect) {
      setFeedback("correct");

      const newStreak = currentStreak + 1;
      setCurrentStreak(newStreak);

      if (newStreak > longestStreak) {
        setLongestStreak(newStreak);
      }
    } else {
      setFeedback("incorrect");
      setCurrentStreak(0);
    }
  };

  const resetCard = () => {
    setFlipped(false);
    setGuess("");
    setFeedback("");
  };

  const nextCard = () => {
    if (currentCard < cards.length - 1) {
      setCurrentCard(currentCard + 1);
      resetCard();
    }
  };

  const previousCard = () => {
    if (currentCard > 0) {
      setCurrentCard(currentCard - 1);
      resetCard();
    }
  };

  const shuffleCards = () => {
    const shuffledCards = [...cards];

    for (let i = shuffledCards.length - 1; i > 0; i--) {
      const randomIndex = Math.floor(Math.random() * (i + 1));

      [shuffledCards[i], shuffledCards[randomIndex]] = [
        shuffledCards[randomIndex],
        shuffledCards[i],
      ];
    }

    setCards(shuffledCards);
    setCurrentCard(0);
    resetCard();
  };

  const markAsMastered = () => {
    const mastered = cards[currentCard];

    setMasteredCards([...masteredCards, mastered]);

    const newCards = cards.filter((_, index) => index !== currentCard);

    setCards(newCards);

    if (newCards.length === 0) {
      setCurrentCard(0);
    } else if (currentCard >= newCards.length) {
      setCurrentCard(newCards.length - 1);
    }

    resetCard();
  };

  const resetDeck = () => {
    setCards(originalCards);
    setMasteredCards([]);
    setCurrentCard(0);
    setCurrentStreak(0);
    setLongestStreak(0);
    resetCard();
  };

  if (cards.length === 0) {
    return (
      <div className="app">
        <div className="container">
          <h1>🎉 Deck Complete!</h1>

          <p className="description">
            You mastered every card in the CodeCards deck.
          </p>

          <button className="main-button" onClick={resetDeck}>
            Reset Deck
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="app">
      <div className="container">
        <p className="badge">WEB102 STUDY DECK</p>

        <h1>💻 CodeCards</h1>

        <p className="description">
          Practice React and JavaScript concepts by entering your answer before
          flipping each card.
        </p>

        <div className="stats">
          <div>
            <span>Card</span>
            <strong>
              {currentCard + 1} / {cards.length}
            </strong>
          </div>

          <div>
            <span>Current Streak</span>
            <strong>🔥 {currentStreak}</strong>
          </div>

          <div>
            <span>Longest Streak</span>
            <strong>🏆 {longestStreak}</strong>
          </div>

          <div>
            <span>Mastered</span>
            <strong>✅ {masteredCards.length}</strong>
          </div>
        </div>

        <Flashcard
          card={cards[currentCard]}
          flipped={flipped}
          setFlipped={setFlipped}
        />

        <div className="guess-section">
          <label htmlFor="answerInput">Enter your answer:</label>

          <div className="input-row">
            <input
              id="answerInput"
              type="text"
              value={guess}
              placeholder="Type your guess here..."
              onChange={(event) => {
                setGuess(event.target.value);
                setFeedback("");
              }}
              onKeyDown={(event) => {
                if (event.key === "Enter") {
                  checkAnswer();
                }
              }}
            />

            <button className="submit-button" onClick={checkAnswer}>
              Submit
            </button>
          </div>

          {feedback === "correct" && (
            <p className="feedback correct-feedback">
              ✅ Correct! Nice job.
            </p>
          )}

          {feedback === "incorrect" && (
            <p className="feedback incorrect-feedback">
              ❌ Not quite. Try again or flip the card to see the answer.
            </p>
          )}

          {feedback === "empty" && (
            <p className="feedback empty-feedback">
              Please enter an answer first.
            </p>
          )}
        </div>

        <div className="navigation">
          <button
            className="nav-button"
            onClick={previousCard}
            disabled={currentCard === 0}
          >
            ← Previous
          </button>

          <button className="shuffle-button" onClick={shuffleCards}>
            🔀 Shuffle
          </button>

          <button
            className="nav-button"
            onClick={nextCard}
            disabled={currentCard === cards.length - 1}
          >
            Next →
          </button>
        </div>

        <button className="master-button" onClick={markAsMastered}>
          ✅ Mark as Mastered
        </button>

        <p className="hint">
          Submit a guess first, then click the card to reveal the answer.
        </p>
      </div>
    </div>
  );
}

export default App;