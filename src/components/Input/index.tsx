import React from "react";

import * as S from "./styles";

export type Props = {
  disabled: boolean;
  onChange: (e: any) => void;
};

export const Input = ({ disabled, onChange }: Props) => (
  <S.Input disabled={disabled} onChange={onChange} />
);
