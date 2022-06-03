import { useState } from "react";
import {
  StyledHeaderOne,
  StyledMainButton,
  StyledMainContainer,
  StyledMainInput,
  StyledSecondaryContainer,
} from "../../components";
import api from "../../services/Api/UserApi";

function SignUp() {
  const [email, setEmail] = useState<string>("danilo@teste.com");
  const [password, setPassword] = useState<string>("1234");
  const [name, setName] = useState<string>("Danilo");
  return (
    <>
      <StyledMainContainer>
        <StyledSecondaryContainer>
          <StyledHeaderOne>Cadastrar</StyledHeaderOne>
          <StyledMainInput
            value={name}
            placeholder="name"
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              setName(event.currentTarget.value)
            }
          />
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
                await api.userCreate({
                  name: name,
                  email: email,
                  password: password,
                })
              )
            }
          >
            Cadastrar-Se
          </StyledMainButton>
        </StyledSecondaryContainer>
      </StyledMainContainer>
    </>
  );
}
export default SignUp;
