import { StyledMainInput } from "./style";

type TMainInputProps = {
  title: string;
  placeHolder: boolean;
};

function MainInput({ title, placeHolder }: TMainInputProps) {
  return <StyledMainInput />;
}

export default MainInput;
