import styled from "styled-components";
import GlobalStyles from "../styles/GlobalState";
import Button from "../ui/Button";
import Input from "../ui/Input";
import Heading from "../ui/Heading";
const StyledApp = styled.div`
  background-color: #efefef;
  padding: 20px;
`;
function App() {
  return (
    <>
      <GlobalStyles />
      <StyledApp>
        <Heading type="h1">Nestora</Heading>
        <Heading type="h2">Check in / Check out</Heading>
        <Button>Check in</Button>
        <Button>Check out</Button>
        <Heading type="h3">Form</Heading>
        <Input type="number" min={1} max={10} placeholder="Number of Guests" />
        <Input type="number" min={1} max={10} placeholder="Number of Guests" />
      </StyledApp>
    </>
  );
}

export default App;
