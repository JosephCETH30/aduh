import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'

import thumbHowToUseInkdrop from '../public/images/works/popmeupthumb.png'
const Posts = () => (
  <Layout title="Posts">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Minigame PopmeUp
      </Heading>

      <Section delay={0.1}>
        
          <GridItem
            title="PopMeUp game, i create this game only for fun and easy to do"
            thumbnail={thumbHowToUseInkdrop}
          />
          
      </Section>

      
    </Container>
  </Layout>
)

export default Posts
export { getServerSideProps } from '../components/chakra'
