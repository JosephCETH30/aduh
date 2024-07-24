import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

// Web Portfolio
import thumbHalalhero from '../public/images/works/halalhero.jpg'
import thumbUrushalal from '../public/images/works/urushalal.jpg'
import thumbKaramel from '../public/images/works/karamel.jpg'
import thumbUrusizin from '../public/images/works/urusizin.jpg'

// UI Portfolio
import thumbJagerToDO from '../public/images/works/jagerthumb.png'
import thumbHitCoffee from '../public/images/works/hitcoffeethumb.png'


// AE & Editing Portfolio
import thumbAeproject1 from '../public/images/works/Fitopenitupthumb.png'
import thumbAeproject2 from '../public/images/works/deseogourmet.png'


const Works = () => (
  <Layout title="Works">
    <Container>

      
      <Heading as="h3" fontSize={20} mb={4}>
        UI/UX Design (Featured Only)
      </Heading>

        <SimpleGrid columns={[1, 1, 2]} gap={6} pt={4} mb={10}>
          <Section delay={0.3}>
            <WorkGridItem id="HitCoffeeApp" thumbnail={thumbHitCoffee} title="Hit Coffee">
            Coffee Shop App 
            </WorkGridItem>
          </Section>
          <Section delay={0.6}>
            <WorkGridItem id="JagerToDolist" thumbnail={thumbJagerToDO} title="The Jager">
            To Do List App
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
        <Section>
          <WorkGridItem
            id="urushalal"
            title="Urushalal"
            thumbnail={thumbUrushalal}
          >

            Daftarkan Sekarang Gratis, Sertifikat Halal untuk UMKM di urushalal.co
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

        <Section delay={0.1}>
          <WorkGridItem id="urusizin" thumbnail={thumbUrusizin} title="Urus Izin">
            Kami adalah solusi one-stop untuk membantu Anda mengatasi setiap tantangan dalam memperoleh izin usaha.
          </WorkGridItem>
        </Section>
      </SimpleGrid>





      {/* Motion Graphic */}
      <Section delay={0.4}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          Others
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.5}>
          <WorkGridItem id="psofitopenitup" thumbnail={thumbAeproject1} title="Product Spoiler">
            Fitopenitup Spoiler with AE
          </WorkGridItem>
        </Section>

        <Section delay={0.5}>
          <WorkGridItem id="deseogourmet-mg" thumbnail={thumbAeproject2} title="DeseoGourmet Animation">
            DeseoGourmet Spoiler with AE
          </WorkGridItem>
        </Section>

      </SimpleGrid>


    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'
