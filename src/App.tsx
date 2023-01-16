import React from "react";

import { AnimatedArray, Input, StartButton } from "./components";
import * as S from "./styles";

function App() {
  const [array, setArray] = React.useState([]);
  const [isSorting, setIsSorting] = React.useState(false);

  const handleInputChange = (e: any) => {
    const inputArray = e.target.value;
    setArray(inputArray.split(","));
  };

  const handleStartSorting = () => {
    setIsSorting(true);
  };

  const handleStopSorting = () => {
    setIsSorting(false);
  };

  return (
    <S.Container>
      <Input onChange={handleInputChange} disabled={isSorting} />
      <StartButton onClick={handleStartSorting} />
      <AnimatedArray array={array} onComplete={handleStopSorting} />
    </S.Container>
  );
}

export default App;
