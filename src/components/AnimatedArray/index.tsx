import React from "react";

import * as S from "./styles";

export type Props = {
  array: Array<Number>;
  onComplete: () => void;
};

export const AnimatedArray = ({ array, onComplete }: Props) => {
  return (
    <S.Array>
      {array.map((num) => (
        <S.ArrayElement key={num.toString()}>{num.toString()}</S.ArrayElement>
      ))}
    </S.Array>
  );
};
