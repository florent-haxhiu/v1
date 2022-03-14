import { Box, Container, Grid, GridItem, Heading, SimpleGrid, Text } from "@chakra-ui/react"


const Projects = () => {
  return (
    <Container h={'100vh'}>
      <Heading>Projects</Heading>
      <Text>These our my projects.</Text>
      <Grid templateColumns={'repeat(2, 1fr)'} templateRows={'repeat(2, 1fr)'}>
        <GridItem ></GridItem>
      </Grid>
    </Container>
  )
}

export default Projects