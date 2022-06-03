import React from "react";
import { StyledMainButton } from "./style";

interface TMainButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  labeled?: boolean;
}

function MainButton({ labeled }: TMainButtonProps) {
  return <StyledMainButton />;
}

export default MainButton;
