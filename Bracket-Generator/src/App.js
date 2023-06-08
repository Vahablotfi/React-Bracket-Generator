import { TestTournament } from "../src/TestRounds/TestTournament";

const participants = [
  { name: "Alice", weight: 60 },
  { name: "Bob", weight: 70 },
  { name: "Charlie", weight: 80 },
  { name: "Dave", weight: 90 },
  { name: "Eve", weight: 100 },
  { name: "Frank", weight: 110 },
  { name: "Grace", weight: 120 },
  { name: "Harry", weight: 130 },
  { name: "Grace", weight: 120 },
  { name: "Harry", weight: 130 },
  { name: "Alice", weight: 60 },
  { name: "Bob", weight: 70 },
  { name: "Charlie", weight: 80 },
  { name: "Dave", weight: 90 },
  { name: "Eve", weight: 100 },
  { name: "Frank", weight: 110 },
  { name: "Grace", weight: 120 },
  { name: "Harry", weight: 130 },
  { name: "Grace", weight: 120 },
  { name: "Harry", weight: 130 },
];

function App() {
  return (
    <>
      <TestTournament participants={participants}/>
    </>
  );
}

export default App;





