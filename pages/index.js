import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  SimpleGrid,
  Button,
  List,
  ListItem,
  useColorModeValue
} from '@chakra-ui/react'
import { ChevronRightIcon, EmailIcon } from '@chakra-ui/icons'
import React, { useEffect } from 'react';
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'
import { IoLogoInstagram, IoLogoGithub, IoLogoMedium } from 'react-icons/io5'
import thumbJuara1 from '../public/images/works/th1.jpg'
import Image from 'next/image'

const Home = () => {
  // Function to handle the contextmenu event and prevent its default behavior
  const handleContextMenu = (event) => {
    event.preventDefault();
  };

  // Add event listener when the component mounts
  useEffect(() => {
    document.addEventListener('contextmenu', handleContextMenu);

    // Clean up the event listener when the component unmounts
    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
    };
  }, []); // Empty dependency array ensures the effect runs only once during mount

    return (

  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        css={{ backdropFilter: 'blur(10px)' }}
      >
        Hi, I&apos;m an UX Designer Based in Jakarta, Indonesia 

      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Yosef Rafael Bonar Clinton R.
          </Heading>
          <p>Tech & NBA Enthusiast (J30, Y9, J18, DubNation)</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <Image
              src="/images/yoseph.jpg"
              alt="Profile image"
              width="100"
              height="100"
            />
          </Box>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          About Me
        </Heading>
        <Paragraph>
        A self-employed Junior Devops - Designer residing in Jakarta, driven by a deep enthusiasm for constructing digital services and projects according to his preferences. Possessing a talent for overseeing the entire product launch process, ranging from conceptualization and design to utilizing code to address practical challenges. nice to meet yall.
        </Paragraph>
        <Box align="center" my={4}>
          <Button
            as={NextLink}
            href="/works"
            scroll={false}
            rightIcon={<ChevronRightIcon />}
            colorScheme="teal"
          >
            My portfolio
          </Button>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>2006</BioYear>
          Born in Jakarta, Indonesia
        </BioSection>
        <BioSection>
          <BioYear>2022</BioYear>
          Start Building Pyoseph Network as self Projects 
        </BioSection>
        <BioSection>
          <BioYear>2023</BioYear>
          6 Month Intern Web developer at KCDI
        </BioSection>
        <BioSection>
          <BioYear>2028</BioYear>
          I hope i can work in google soon
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Id like to
        </Heading>
        <Paragraph>
          Designing UI/UX, Playing Piano, Guitar, Bass, Drum, Basketball PG player, Volleyball as a Setter, Chruch Multimedia.
        </Paragraph>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Others
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/JosephCETH30" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoGithub />}
              >
                @JosephCETH30
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://twitter.com/inkdrop_app" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoMedium />}
              >
                @Pyoseph (Indonesia)
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://instagram.com/_yoseph28" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoInstagram />}
              >
                @_yoseph28
              </Button>
            </Link>
          </ListItem>
        </List>

        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          {/* <GridItem
            href="https://www.youtube.com/devaslife"
            title="Dev as Life"
            thumbnail={thumbYouTube}
          >
            My YouTube channel (&gt;150k subs)
          </GridItem> */}
          <GridItem
            href="https://instagram.com/_yoseph28"
            title="Pengiring alias Pianist"
            thumbnail={thumbJuara1}
          >
            Juara 1 Hoki ini bang asli dah
          </GridItem>
        </SimpleGrid>

        <Heading as="h3" variant="section-title">
          Contact Me
        </Heading>
        <p>
          Feel free to ask me about something or for something, i wish i can do my best for ya!
        </p>

        <Box align="center" my={4}>
          <Button
            as={NextLink}
            href="mailto:yoseph@skiff.com"
            scroll={false}
            leftIcon={<EmailIcon />}
            colorScheme="teal"
          >
            Email Me click here
          </Button>
        </Box>
      </Section>
    </Container>
  </Layout>
  );
}

export default Home
export { getServerSideProps } from '../components/chakra'
