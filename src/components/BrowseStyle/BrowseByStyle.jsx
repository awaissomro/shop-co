import {
  Section,
  Title,
  Grid,
  StyleCard,
  CardLabel,
} from "./BrowserByStyle.styles";
import CasualImage from "../../assets/casual.png";
import FormalImage from "../../assets/formal.png";
import PartyImage from "../../assets/party.png";
import GymImage from "../../assets/gym.png";
import { Container } from "../../styles/Container";

const BrowseByStyle = () => {
  const styles = [
    { id: 1, label: "Casual", image: CasualImage, area: "casual" },
    { id: 2, label: "Formal", image: FormalImage, area: "formal" },
    { id: 3, label: "Party", image: PartyImage, area: "party" },
    { id: 4, label: "Gym", image: GymImage, area: "gym"},
  ];

  return (
    <Container>
        <Section>
      <Title>Browse by dress style</Title>
      <Grid>
        {styles.map((style) => (
          <StyleCard key={style.id} area={style.area}>
            <CardLabel>{style.label}</CardLabel>
            <img src={style.image} alt={style.label}/>
          </StyleCard>
        ))}
      </Grid>
    </Section>
    </Container>

  );
};

export default BrowseByStyle;
