import React from "react";

import * as S from "./styles";

export type Props = {
  onClick: (e: any) => void;
};

export const StartButton = ({ onClick }: Props) => (
  <S.Button onClick={onClick}>Start</S.Button>
);
