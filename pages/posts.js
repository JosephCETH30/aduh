import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'

import thumbHowToUseInkdrop from '../public/images/contents/netlifypost3.jpg'
import thumbFishWorkflow from '../public/images/contents/netlifypost2.jpg'
import thumbMyDeskSetup from '../public/images/contents/netlifypost.jpg'
import thumbToba1 from '../public/images/contents/toba1.webp'
const Posts = () => (
  <Layout title="Posts">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Medium Posts
      </Heading>

      <Section delay={0.1}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            title="Golden State Warriors Kalah 2x dengan margin point yang bikin sakit kepala"
            thumbnail={thumbHowToUseInkdrop}
            href="https://pyoseph.medium.com/golden-state-warriors-kalah-2x-dengan-margin-point-yang-bikin-sakit-kepala-f33ce8979499?source=user_profile---------1----------------------------"
          />
          <GridItem
            title="Emang bener Figma Berbayar? Rudi Gong!"
            thumbnail={thumbFishWorkflow}
            href="https://pyoseph.medium.com/emang-bener-figma-berbayar-rudi-gong-3208c10915a6?source=user_profile---------2----------------------------"
          />
          <GridItem
            title="Cara upload website ke Netlify"
            thumbnail={thumbMyDeskSetup}
            href="https://pyoseph.medium.com/cara-upload-website-dengan-mudah-ke-netlify-2396aa597ad5?source=user_profile---------3----------------------------"
          />
           <GridItem
            title="Perjalanan Ke Toba Menempuh waktu 4 hari 3 Malam dengan Mobil?"
            thumbnail={thumbToba1}
            href="https://pyoseph.medium.com/perjalanan-ke-toba-menempuh-waktu-4-hari-3-malam-dengan-mobil-56e3baee046a"
          />
        </SimpleGrid>
      </Section>

      
    </Container>
  </Layout>
)

export default Posts
export { getServerSideProps } from '../components/chakra'
