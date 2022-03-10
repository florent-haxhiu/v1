import { Container, Text } from "@chakra-ui/react"


const Footer = () => {
  return (
    <Container display={'flex'} as={'footer'} mt={'auto'} p={3} mt={5} h={'fit-content'}>
      <Text>Created and Designed by Florent Haxhiu</Text>
    </Container>
  )
}

export default Footer