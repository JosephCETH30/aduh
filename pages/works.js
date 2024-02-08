import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbInkdrop from '../public/images/works/halalhero.jpg'
import thumbWalknote from '../public/images/works/halalhero.jpg'
import thumbFourPainters from '../public/images/works/karamel.jpg'
import thumbMenkiki from '../public/images/works/urusizin.jpg'
import thumbMargelo from '../public/images/works/figma1.jpg'
import thumbModeTokyo from '../public/images/works/figma2.jpg'
import thumbStyly from '../public/images/works/figma3.jpg'
import thumbKaiMobile from '../public/images/works/figma4.jpg'

const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Web Project
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem id="halalhero" title="Halalhero" thumbnail={thumbInkdrop}>
          Daftarkan Sekarang Gratis, Sertifikat Halal untuk UMKM di Halalhero.id
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="urushalal"
            title="Urushalal"
            thumbnail={thumbWalknote}
          >
            
          Daftarkan Sekarang Gratis, Sertifikat Halal untuk UMKM di urushalal.co
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem
            id="karamelgroup"
            title="KaramelGroup"
            thumbnail={thumbFourPainters}
          >
            Kami merancang pengalaman digital yang bijaksana dan estetika merek yang indah
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem id="urusizin" thumbnail={thumbMenkiki} title="Urus Izin">
          Kami adalah solusi one-stop untuk membantu Anda mengatasi setiap tantangan dalam memperoleh izin usaha. 
          </WorkGridItem>
        </Section>
      </SimpleGrid>


















{/* FIGMA */}
      <Section delay={0.2}>
        <Divider my={6} />


        <Heading as="h3" fontSize={20} mb={4}>
          Figma Design
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.3}>
          <WorkGridItem id="personaldarkui" thumbnail={thumbMargelo} title="Personal Portfolio">
            Free to use, Personal portfolio website interface in Darkmode version 
          </WorkGridItem>
        </Section>
        <Section delay={0.3}>
          <WorkGridItem
            id="athleticptf"
            thumbnail={thumbModeTokyo}
            title="Athletic Portfolio"
          >
          Free to use, Athletic portfolio website interface in Soft version 
          </WorkGridItem>
        </Section>
        <Section delay={0.3}>
          <WorkGridItem id="fitopenitup" thumbnail={thumbStyly} title="FitOpenitUp">
          Web Interface that encourages users to participate in fitness challenges.
          </WorkGridItem>
        </Section>
        <Section delay={0.3}>
          <WorkGridItem id="styly" thumbnail={thumbKaiMobile} title="KAI Mobile Redesign">
          its just self-project but if you want to see this project just click on it
          </WorkGridItem>
        </Section>
      </SimpleGrid>















{/* Motion Graphic */}
      <Section delay={0.4}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          Motion Graphic
        </Heading>
      </Section>

      {/* <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.5}>
          <WorkGridItem id="pichu2" thumbnail={thumbPichu2} title="Pichu*Pichu">
            Twitter client app for iPhone Safari
          </WorkGridItem>
        </Section>
        <Section delay={0.5}>
          <WorkGridItem
            id="freedbtagger"
            thumbnail={thumbFreeDBTagger}
            title="freeDBTagger"
          >
            Automatic audio file tagging tool using FreeDB for Windows
          </WorkGridItem>
        </Section>
        <Section delay={0.6}>
          <WorkGridItem id="amembo" thumbnail={thumbAmembo} title="Amembo">
            P2P private file sharing tool with MSN Messenger integration for
            Windows
          </WorkGridItem>
        </Section>
      </SimpleGrid> */}
    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'
