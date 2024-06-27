import React, { useEffect } from 'react';
import { Box, Heading, Text, Center, useColorModeValue } from '@chakra-ui/react';
import Layout from '../components/layouts/article';

const MaintenancePage = () => {
  const bgColor = useColorModeValue('white', 'gray.800');

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
      <Center height="100vh" bg={bgColor}>
        <Box textAlign="center">
          <Heading as="h1" size="2xl" mb={4}>
            Under Maintenance
          </Heading>
          <Text fontSize="xl">
            Will continue at July 15, unexpected things happens. sorry for the inconvenience.
          </Text>
        </Box>
      </Center>
    </Layout>
  );
};

export default MaintenancePage;



// import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
// import Layout from '../components/layouts/article'
// import Section from '../components/section'
// import { GridItem } from '../components/grid-item'

// import thumbpost001 from '../public/images/works/Dailyux1thumb.png'
// import thumbpost002 from '../public/images/works/Dailyux2thumb.png'
// import thumbpost003 from '../public/images/works/Dailyux3thumb.png'
// import thumbpost004 from '../public/images/works/Dailyux4thumb.png'
// const Posts = () => (
//   <Layout title="Daily UI Challenge">
//     <Container>
//       <Heading as="h3" fontSize={20} mb={4}>
//         Daily UI Challenge
//       </Heading>

//       <Section delay={0.1}>
//         <SimpleGrid columns={[1, 2, 2]} gap={6}>
//           <GridItem
//             title="#001 Signup Login Form"
//             thumbnail={thumbpost001}
//             href="/daily-ui-file/01-signup-login-form"
//           />

//           <GridItem
//             title="#002 Credit Card Checkout"
//             thumbnail={thumbpost002}
//             href="/daily-ui-file/02-card-credit-checkout"
//           />

//           <GridItem
//             title="#003 Great Landing Page"
//             thumbnail={thumbpost003}
//             href="/daily-ui-file/03-great-landing-page"
//           />

//           <GridItem
//             title="#004 Simple Calculator"
//             thumbnail={thumbpost004}
//             href="/daily-ui-file/04-simple-calculator"
//           />

//         </SimpleGrid>
//       </Section>



//     </Container>
//   </Layout>
// )

// export default Posts
// export { getServerSideProps } from '../components/chakra'
