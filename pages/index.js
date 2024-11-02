import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
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
import { IoLogoInstagram, IoLogoGithub, IoLogoMedium, IoLogoLinkedin } from 'react-icons/io5'
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
        Hi, I&apos;m an UI/UX Designer Based in Jakarta, Indonesia 

      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Yosef Rafael Bonar Clinton R.
          </Heading>
          <p>Tech & NBA Enthusiast (DubNation)</p>
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
              src="/images/1726045172805.jpeg"
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
        Im a Junior UI/UX Designer (1y Exp.) and Web Developer (1y+ Exp.), as well as a freshman with a strong skill set in creating intuitive and user-friendly visual experiences. My journey has been enriched from the start in both academia and professional environments, driven by a deep passion for design. I am well-versed in the standard tools and methodologies of industries and have a special mastery over using design thinking in solving complex problems with impactful design solutions.

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
          Timeline
        </Heading>
        <BioSection>
          <BioYear>2019</BioYear>
          Start being a Multimedia team at Church
        </BioSection>
        <BioSection>
          <BioYear>2022</BioYear>
          Get to know Coding and UI/UX
        </BioSection>
        <BioSection>
          <BioYear>2023</BioYear>
          6 Month Intern Web developer at KCDI
        </BioSection>
        <BioSection>
          <BioYear>2024</BioYear>
          Continuing to sharpen my skills in the UI/UX field
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Id like to
        </Heading>
        <Paragraph>
          Designing UI/UX, Playing Piano, Guitar, Bass, Watching NBA, Volleyball as a Setter.
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
            <Link href="https://pyoseph.medium.com/" target="_blank">
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
          <ListItem>
            <Link href="https://linkedin.com/in/yoseph-rafael" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoLinkedin />}
              >
                Yosef Rafael Bonar Clinton R.
              </Button>
            </Link>
          </ListItem>
        </List>

        <Heading as="h3" variant="section-title">
          Achievement
        </Heading>

        &nbsp; - Pianist Juara 1 Solo Vokal FLS2N Jakarta Pusat (2019) <br></br>
        &nbsp; - Pianist Juara 2 Solo Vokal FLS2N DKI Jakarta (2019) <br></br>
        &nbsp; - Pianist Juara 1 Vocal Group Tingkat SMK Sederajat se Jakarta Pusat 2 (2023) <br></br><br></br>

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
