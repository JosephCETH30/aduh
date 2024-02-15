import { Container, Heading } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'

import popmeUpthumb from '../public/images/works/flappythumb.png'
import yunoUpthumb from '../public/images/works/yunothumb.png'
const Posts = () => (
  <Layout title="Mirror Game on Site">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Minigame - Mirror Site
      </Heading>

      <Section delay={0.1}>
        
          <GridItem
            title="Flappy Bird Game"
            thumbnail={popmeUpthumb}
            href="https://confirm-flappy.netlify.app"
          /> <br></br><br></br>

          <GridItem
            title="YUNO Multiplier Game - Maintenance"
            thumbnail={yunoUpthumb}
          />
          
      </Section>

      
    </Container>
  </Layout>
)

export default Posts
export { getServerSideProps } from '../components/chakra'
