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
import thumbKaiMobile from '../public/images/works/kai4.png'
import thumbAeproject1 from '../public/images/works/pspo1.png'
import thumbSignup from '../public/images/works/signup1.png'
import thumbPyoseph from '../public/images/works/pyoseph1.png'
import thumbKominfas from '../public/images/works/kominfas1.png'
import thumbWeather from '../public/images/works/weatherapp1.png'
import thumbGlossy from '../public/images/works/glossy1.png'
import thumbReciperack from '../public/images/works/reciperacksthumb1.png'

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
          UI/UX Design
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
          <WorkGridItem id="kairedesign" thumbnail={thumbKaiMobile} title="KAI Mobile Redesign">
          its just self-project but if you want to see this project just click on it
          </WorkGridItem>
        </Section>
        <Section delay={0.3}>
          <WorkGridItem id="signuplogin" thumbnail={thumbSignup} title="Signup Login Page">
          Web Interface that encourages users to Signup and Login.
          </WorkGridItem>
        </Section>
        <Section delay={0.3}>
          <WorkGridItem id="simpleptf" thumbnail={thumbPyoseph} title="Simple Portfolio">
          Web Interface that encourages users to show up their works
          </WorkGridItem>
        </Section>
        <Section delay={0.3}>
          <WorkGridItem id="kominfas" thumbnail={thumbKominfas} title="Kominfas">
          Web Interface that encourages users to access kominfas information
          </WorkGridItem>
        </Section>
        <Section delay={0.3}>
          <WorkGridItem id="weatherapp" thumbnail={thumbWeather} title="Quick Weather Interface">
          Web Interface that encourages users to access info about weather
          </WorkGridItem>
        </Section>
        <Section delay={0.3}>
          <WorkGridItem id="glossyptf" thumbnail={thumbGlossy} title="Glossy website">
          Free to use, Glossy portfolio website i create this bcs of something
          </WorkGridItem>
        </Section>
        <Section delay={0.3}>
          <WorkGridItem id="reciperack" thumbnail={thumbReciperack} title="Glossy website">
          Free for Personal use, reciperack platform for organizing and discovering recipes
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

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.5}>
          <WorkGridItem id="psofitopenitup" thumbnail={thumbAeproject1} title="Product Spoiler">
            Fitopenitup Spoiler in AE (After Effect)
          </WorkGridItem>
        </Section>
        
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'
