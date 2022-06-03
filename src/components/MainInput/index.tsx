import { StyledMainInput } from "./style";

interface TMainInputProps extends React.HTMLAttributes<HTMLInputElement> {
  labeled?: boolean;
}

function MainInput({ labeled }: TMainInputProps) {
  return <StyledMainInput />;
}

export default MainInput;
