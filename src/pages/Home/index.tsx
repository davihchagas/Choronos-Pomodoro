import { Container } from "../../components/Container";
import { Countdown } from "../../components/Countdown";
import { MainForm } from "../../components/MainForm";
import { MainTemplate } from "../../template/MainTemplate";

export function Home() {
  return (
    <MainTemplate>
      <Container>
        <Countdown />
      </Container>

      <Container>
        <MainForm />
      </Container>
    </MainTemplate>
  );
}
