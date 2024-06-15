import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'

import thumbWarriors from '../public/images/contents/netlifypost-warriors.png'
import thumbFigmaberbayar from '../public/images/contents/netlifypost-figma-edu.png'
import thumbNetlifyUpload from '../public/images/contents/netlifypost-upload-web.jpg'
import thumbBassGuitar from '../public/images/contents/netlifypost-bassor-gitar.png'
import thumbXamppupload from '../public/images/contents/netlifypost-xamppopen.png'
const Posts = () => (
  <Layout title="Posts">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Blog Posts
      </Heading>

      <Section delay={0.1}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            title="Golden State Warriors Kalah 2x dengan margin point yang bikin sakit kepala"
            thumbnail={thumbWarriors}
            href="/blog/golden-state-warriors-kalah-2x-easc"
          />
          <GridItem
            title="Emang bener Figma Berbayar? Rudi Gong!"
            thumbnail={thumbFigmaberbayar}
            href="/blog/figma-berbayar-watdepak-easc"
          />
          <GridItem
            title="Cara upload website ke Netlify"
            thumbnail={thumbNetlifyUpload}
            href="/blog/cara-upload-website-netlify-easc"
          />
          
          <GridItem
            title="Apakah cara Main bass sama dengan main gitar? + bagaimana cara Memetik bass dengan benar"
            thumbnail={thumbBassGuitar}
            href="/blog/bassorgitar-cara-metik-bass-yang-benar-easc"
          />
          <GridItem
            title="Cara Mudah membuka File PHP menggunakan XAMPP metode Localhost + Free file untuk ujicoba."
            thumbnail={thumbXamppupload}
            href="/blog/php-xampp-cara-buka-easc"
          />
          
        </SimpleGrid>
      </Section>

     

      
    </Container>
  </Layout>
)

export default Posts
export { getServerSideProps } from '../components/chakra'
