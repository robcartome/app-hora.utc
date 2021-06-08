import { InputText } from "./components/Input";
import styled from "@emotion/styled";
import logo from "./logo.svg";
import TextField from "@material-ui/core/TextField";
import Button from "./components/Button";

function App() {
  return (
    <PageWrapper>
      <StyledForm>
        <TextField
          id="datetime-local"
          label="Fecha y Hora"
          name="datetime-local"
          type="datetime-local"
          defaultValue="2021-05-24T10:30:02"
          InputLabelProps={{
            shrink: true,
          }}
         
        />

        <InputText label="ZonaTime" type="text" name="zone" placeholder="+/- Numero de Zona"></InputText>
        <Button onClick={(e)=>{
            e.preventDefault();
            const form = e.target.form;
            const {date, zone} = form;
            console.log(form)
            console.log(date, zone)
        }}>Consultar</Button>
      </StyledForm>
    </PageWrapper>
  );
}

const PageWrapper = styled.div`
  background: white;
  width: 60%;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledForm = styled.form`
  display: flex;
  width: 230px;
  flex-direction:column;
  align-items:center;
  padding-top:48px;
  row-gap:60px;
`;

export default App;
