function Flashcard({ card, flipped, setFlipped }) {
  return (
    <div className="flashcard-area">
      <p className={`difficulty ${card.difficulty.toLowerCase()}`}>
        {card.difficulty}
      </p>

      <div
        className={`flashcard ${flipped ? "flipped" : ""}`}
        onClick={() => setFlipped(!flipped)}
      >
        <div className="card-content">
          <p className="card-label">
            {flipped ? "ANSWER" : "QUESTION"}
          </p>

          <h2>{flipped ? card.answer : card.question}</h2>

          <p className="flip-text">
            {flipped
              ? "Click to return to the question"
              : "Click to reveal the answer"}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Flashcard;