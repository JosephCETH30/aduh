import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

// Web Portfolio
import thumbHalalhero from '../public/images/works/halalhero.jpg'
import thumbKaramel from '../public/images/works/karamel.jpg'

// UI Portfolio
import thumbJagerToDO from '../public/images/works/jagerthumb.png'
import thumbHitCoffee from '../public/images/works/hitcoffeethumb.png'


const Works = () => (
  <Layout title="Works">
    <Container>

      
      <Heading as="h3" fontSize={20} mb={4}>
        UI/UX Design (Featured Only)
      </Heading>

        <SimpleGrid columns={[1, 1, 2]} gap={6} pt={4} mb={10}>
          <Section delay={0.6}>
            <WorkGridItem id="chimelink" thumbnail={thumbJagerToDO} title="ChimeLink">
            Social Media
            </WorkGridItem>
          </Section>
          <Section delay={0.3}>
            <WorkGridItem id="HitCoffeeApp" thumbnail={thumbHitCoffee} title="Hit Coffee">
            Coffee Shop App 
            </WorkGridItem>
          </Section>
          
      </SimpleGrid>
  
      


{/* FIGMA */}
<Section delay={0.2}>
          <Divider my={6} />


          <Heading as="h3" fontSize={20} mb={4}>
            Web Project
          </Heading>
        </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem id="halalhero" title="Halalhero" thumbnail={thumbHalalhero}>
            Daftarkan Sekarang Gratis, Sertifikat Halal untuk UMKM di Halalhero.id
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem
            id="karamelgroup"
            title="KaramelGroup"
            thumbnail={thumbKaramel}
          >
            Kami Merancang Pelayanan Pemasaran Digital yang Sempurna untuk anda sekalian
          </WorkGridItem>
        </Section>

      </SimpleGrid>







    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'
