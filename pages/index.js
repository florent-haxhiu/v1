import { Container, Heading, Box, useColorModeValue } from '@chakra-ui/react'
import { IoLogoLinkedin, IoLogoTwitter, IoLogoGithub } from 'react-icons/io5'

export default function Home() {

  const shadow = useColorModeValue('0 0 80px rgb(192 219 255 / 75%), 0 0 32px rgb(65 120 255 / 24%)', '')

  return (
    <>
      <Container w={'full'} h={'80vh'} display={'flex'} flexDir={'column'} justifyContent={'center'} alignItems={'flex-start'}>
        <Heading fontSize={'5rem'}>Hi, I&apos;m Florent</Heading>
        <Box display={'flex'} style={{ gap: '10px' }}>
          <a href="https://www.linkedin.com/in/florenthaxhiu/" target={'_blank'}>
            <IoLogoLinkedin className='main-logo' />
          </a>
          <a href="https://twitter.com/florenthaxhiu" target={'_blank'}>
            <IoLogoTwitter className='main-logo' />
          </a>
          <a href="https://github.com/florent-haxhiu" target={'_blank'}>
            <IoLogoGithub className='main-logo' />
          </a>
        </Box>
      </Container>
    </>
  )
}
