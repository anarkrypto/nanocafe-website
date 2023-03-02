import styled from "@emotion/styled";
import React, { useState } from "react";
import "./modal.css";

const Container = styled.main`
  margin: auto;
  width: 100%;
`;

const Banner = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: auto 1fr auto;
  width: 100%;
  max-width: 70%;
  margin: 2% auto;
  padding: 2%;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  transition: box-shadow 0.2s ease-in-out;
  background-color: #152445;
  &:hover {
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.4);
  }
`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 70px;
  height: 70px;
  background-color: #4a4a4a;
  border-radius: 50%;
  margin-left: -15px;
`;
const textContainer = styled.div`
  padding-left: 5px;
`;
const Icon = styled.img`
  width: 50%;
  height: 50%;
`;

const Title = styled.h2`
  padding-left: 5px;
  font-size: 2rem;
  font-weight: bold;
  color: white;
  margin-top: 0;
`;

const Subtitle = styled.h3`
  padding-left: 5px;
  font-size: 1.2rem;
  color: #308a08;
  margin-top: 0;
`;

const Description = styled.p`
  padding-left: 5px;
  font-size: 1rem;
  color: white;
  margin-bottom: 0;
`;

const Button = styled.a`
  display: block;
  width: fit-content;
  padding: 10px 20px;
  background-color: #4778e9;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  margin-left: auto;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: #2864ff;
  }
`;

export const EarnScreen: React.FC = () => {
  const [modal, setModal] = useState(false);
  const [link, setLink] = useState("");

  const toggleModal = (link: string) => {
    setLink(link);
    setModal(!modal);
  };

  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  return (
    <Container>
      {modal && (
        <div className="modal">
          <div onClick={() => toggleModal("")} className="overlay"></div>
          <div className="modal-content">
            <h2>You are now leaving Nanocafe.cc</h2>
            <p>
              Nanocafe.cc is not responsible for the content of external sites
              and services.
            </p>
            <div className="modal-buttons">
              <button className="cancel-button" onClick={() => toggleModal("")}>
                Cancel
              </button>
              <a href={link} target="_blank" rel="noopener noreferrer">
                <button className="confirm-button">Confirm</button>
              </a>
            </div>
          </div>
        </div>
      )}
      <Banner>
        <IconContainer>
          <Icon src="https://xno.bet/icons/logo.png" />
        </IconContainer>
        <div>
          <Title>XNO.BET</Title>
          <Subtitle>56.84+XNO March Reward</Subtitle>
          <Description>
            Win XNO each month if you guess the closest/exact price at the end
            of the month!
            <br />
            <br />
            No install or login required if using the{" "}
            <a href="https://nautilus.io/" target="_blank">
              Nautilus (mobile)
            </a>{" "}
            wallet. Available also with the{" "}
            <a href="https://nanobytepay.com/" target="_blank">
              nanobyte (desktop)
            </a>{" "}
            wallet.
          </Description>
          <Button href="https://xno.bet/" className="btn-modal" target="_blank">
            Enter
          </Button>
        </div>
      </Banner>
      <Banner>
        <IconContainer>
          <Icon src="https://playnano.online/favicon-96x96.png" />
        </IconContainer>
        <div className="textContainer">
          <Title>PlayNano</Title>
          <Subtitle></Subtitle>
          <Description>
            See why Nano is the best cryptocurrency, with feeless and instant
            use cases. Earn, play, bet, and spend - no account or login
            required.
          </Description>
          <Button
            onClick={() =>
              toggleModal(
                "https://playnano.online/?ref=https://playnano.online/?ref=nano_3odatubif8zuemhgtmdh465somyy9hmdeab6sa15od79cbdu79zgnndx7ozk"
              )
            }
            className="btn-modal"
            target="_blank"
          >
            Enter
          </Button>
        </div>
      </Banner>
      <Banner>
        <IconContainer>
          <Icon src="https://xno.ai/assets/favicon-32x32.png" />
        </IconContainer>
        <div>
          <Title>XNO.AI</Title>
          <Subtitle></Subtitle>
          <Description>
            xno.ai is an eco-friendly alternative to proof-of-work mining.
            Instead of hashing, workers use AI to generate data. Workers are
            awarded for their contributions. Although we use the term 'mining,'
            no actual mining of cryptocurrency takes place. Login & registration
            required.
          </Description>
          <Button
            onClick={() => toggleModal("https://xno.ai?ref=Nanocafe")}
            className="btn-modal"
            target="_blank"
          >
            Enter
          </Button>
        </div>
      </Banner>
      <Banner>
        <IconContainer>
          <Icon src="https://cryptovision.live/favicon.png" />
        </IconContainer>
        <div>
          <Title>Cryptovision.live</Title>
          <Subtitle></Subtitle>
          <Description>
            CryptoVision is a crypto-centric video sharing platform where the
            rewards are just a bonus. Visionaries queue YouTube videos and the
            community watches the ever-evolving playlist together. Earn XNO for
            watching queued videos as an additional reward.
          </Description>
          <Button
            onClick={() => toggleModal("https://cryptovision.live/")}
            className="btn-modal"
            target="_blank"
          >
            Enter
          </Button>
        </div>
      </Banner>
    </Container>
  );
};
