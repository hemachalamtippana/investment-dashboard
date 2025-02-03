export default function UserInput({ onChange, userInput }) {
  return (
    <div id="user-input" className="input-group">
      <div>
        <label>INITIAL INVESTMENT</label>
        <input
          type="text"
          name="initial-investment"
          id="initial-investment"
          required
          value={userInput.initialInvestment}
          onChange={(event) =>
            onChange("initialInvestment", event.target.value)
          }
        />

        <label>ANNUAL INVESTMENT</label>
        <input
          type="text"
          name="annual-investment"
          id="annual-investment"
          required
          value={userInput.annualInvestment}
          onChange={(event) => onChange("annualInvestment", event.target.value)}
        />
      </div>

      <div>
        <label>EXPECTED RETURN</label>
        <input
          type="text"
          name="expected return"
          id="expected return"
          required
          value={userInput.expectedReturn}
          onChange={(event) => onChange("expectedReturn", event.target.value)}
        />

        <label>DURATION</label>
        <input
          type="text"
          name="duration"
          id="duration"
          required
          value={userInput.duration}
          onChange={(event) => onChange("duration", event.target.value)}
        />
      </div>
    </div>
  );
}
