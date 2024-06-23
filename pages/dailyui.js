import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'

import thumbpost001 from '../public/images/works/Dailyux1thumb.png'
const Posts = () => (
  <Layout title="Daily UI Challenge">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Daily UI Challenge
      </Heading>

      <Section delay={0.1}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            title="001 Signup Login Form"
            thumbnail={thumbpost001}
            href="/daily-ui-file/01-signup-login-form"
          />
          
          
          
        </SimpleGrid>
      </Section>

     

      
    </Container>
  </Layout>
)

export default Posts
export { getServerSideProps } from '../components/chakra'
