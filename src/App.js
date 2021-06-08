import { InputText } from "./components/Input";
import styled from "@emotion/styled";
import logo from "./logo.svg";

function App() {
  return (
    <PageWrapper>
      <form>
        <InputText label="Date" type="text" name="date"></InputText>
        <InputText label="ZonaTime" type="text" name="zone"></InputText>
      </form>
    </PageWrapper>
  );
}
const PageWrapper = styled.div`
  background: white;
  width: 100%;
  margin: auto;
  display: flex;
  flex-direction:column;
  align-items:center;
`;
export default App;
