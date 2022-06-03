import { useState } from "react";
import api from "../../services/Api/UserApi";
import {
  StyledSecondaryContainer,
  StyledMainContainer,
  StyledMainButton,
  StyledMainInput,
  StyledHeaderOne,
} from "../../components";

function SignIn() {
  const [password, setPassword] = useState<string>("123");
  const [email, setEmail] = useState<string>("danilo@teste.com");
  return (
    <>
      <StyledMainContainer>
        <StyledSecondaryContainer>
          <StyledHeaderOne>Login</StyledHeaderOne>
          <StyledMainInput
            value={email}
            placeholder="Email"
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              setEmail(event.currentTarget.value)
            }
          />
          <StyledMainInput
            value={password}
            type="password"
            placeholder="password"
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              setPassword(event.currentTarget.value)
            }
          />

          <StyledMainButton
            onClick={async () =>
              console.log(
                await api.login({
                  email: email,
                  password: "1234",
                })
              )
            }
          >
            Login
          </StyledMainButton>
        </StyledSecondaryContainer>
      </StyledMainContainer>
    </>
  );
}

export default SignIn;
