import { Box, Container, Heading, Text } from "@chakra-ui/react"
import styled from "@emotion/styled"

const About = () => {

  const Glass = styled.text`
    border-radius: 25px;
    backdrop-filter: blur(18px);
    padding: 2rem;
    box-shadow: 0 2px 10px rgb(0 0 0 / 10%), 0 10px 15px rgb(0 0 0 / 20%);
    box-sizing: border-box;
    background-image: linear-gradient(45deg, rgba(32,152,255,1), rgba(50,249,176,1));
    width: 100%;
    min-height: 70px;
    mix-blend-mode: hard-light;
    font-size: 1.5rem;
    font-weight: 500;
  `
  

  return (
    <Container h={'100vh'}>
      <Heading>About Me</Heading>
      <Box mt={12}>
        <Glass>I'm Florent</Glass>
      </Box>
    </Container>
  )
}

export default About