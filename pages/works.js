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
import thumbPersonalPTF from '../public/images/works/figma1.jpg'
import thumbAthleticPTF from '../public/images/works/figma2.jpg'
import thumbFitopenitup from '../public/images/works/figma3.jpg'
import thumbKaiMobile from '../public/images/works/kai4.png'
import thumbSignup from '../public/images/works/signup1.png'
import thumbPyoseph from '../public/images/works/pyoseph1.png'
import thumbKominfas from '../public/images/works/kominfas1.png'
import thumbGlossy from '../public/images/works/glossy1.png'
import thumbReciperack from '../public/images/works/reciperacksthumb1.png'
import thumbStudyinaltos from '../public/images/works/studyinaltos.png'
import thumb2athletic from '../public/images/works/2athleticptf.png'
import thumbCryptoApp from '../public/images/works/CrpyptoProx.png'
import thumbTiketALS from '../public/images/works/travel1web.png'
import thumbTeslaonepage from '../public/images/works/teslaonepage1.png'
import thumbCalmoraMentalhealthApp from '../public/images/works/covercalmora.png'

// Mobile App Portfolio
import thumbTabobmaintenance from '../public/images/works/tabobmt.jpg'

// AE & Editing Portfolio
import thumbAeproject1 from '../public/images/works/Fitopenitupthumb.png'
import thumbAeproject2 from '../public/images/works/deseogourmet.png'


const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Web Project
      </Heading>

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


















{/* FIGMA */}
        <Section delay={0.2}>
          <Divider my={6} />


          <Heading as="h3" fontSize={20} mb={4}>
            UI/UX Design
          </Heading>
        </Section>

        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section delay={0.3}>
            <WorkGridItem id="personaldarkui" thumbnail={thumbPersonalPTF} title="Personal Portfolio">
              Free to use, Personal portfolio website interface in Darkmode version 
            </WorkGridItem>
          </Section>
          <Section delay={0.3}>
            <WorkGridItem
              id="athleticptf"
              thumbnail={thumbAthleticPTF}
              title="Athletic Portfolio"
            >
            Free to use, Athletic portfolio website interface in Soft version 
            </WorkGridItem>
          </Section>
          <Section delay={0.3}>
            <WorkGridItem id="fitopenitup" thumbnail={thumbFitopenitup} title="FitOpenitUp">
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
          <WorkGridItem id="glossyptf" thumbnail={thumbGlossy} title="Glossy website">
          Free to use, Glossy portfolio website i create this bcs of something
          </WorkGridItem>
        </Section> 
        <Section delay={0.3}>
          <WorkGridItem id="reciperack" thumbnail={thumbReciperack} title="Recipe Racks">
          Free for Personal use, reciperack platform for organizing and discovering recipes
          </WorkGridItem>
        </Section>
        <Section delay={0.3}>
          <WorkGridItem id="studyinaltos" thumbnail={thumbStudyinaltos} title="StudyinAltos Elearning">
          The primary goal is to make education accessible to a diverse audience (Paid File)
          </WorkGridItem>
        </Section>
        <Section delay={0.3}>
          <WorkGridItem id="2athletic" thumbnail={thumb2athletic} title="&quot;2&quot; Athletic Portfolio">
          You can use this as design preference for your portfolio for free!
          </WorkGridItem>
        </Section>
        <Section delay={0.3}>
          <WorkGridItem id="CryptoProX" thumbnail={thumbCryptoApp} title="CryptoProX">
          In the future there is full of Blockchain tech, thats primary reason why i create this UI (Paid File)
          </WorkGridItem>
        </Section>
        <Section delay={0.3}>
          <WorkGridItem id="tiketalscom" thumbnail={thumbTiketALS} title="Tiket ALS UI">
          TIKET ALS - Pembelian tiket bis antar lintas sumatera secara online
          </WorkGridItem>
        </Section>
        <Section delay={0.3}>
          <WorkGridItem id="teslaonepage" thumbnail={thumbTeslaonepage} title="TESLA ONEPAGE Site">
           Buat nambah ilmu sekalian latihan aja, ini fullpage jadi onepage ya
          </WorkGridItem>
        </Section>
        <Section delay={0.3}>
          <WorkGridItem id="teslaonepage" thumbnail={thumbCalmoraMentalhealthApp} title="Calmora App Interface">
           Latihan doang bang, Manusia pasti ada salah. Have fun!
          </WorkGridItem>
        </Section>
      </SimpleGrid>



















{/* Flutter Dev / Mobile Development */}
<Section delay={0.4}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          Mobile App (Still in Development)
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.5}>
          <WorkGridItem id="#" thumbnail={thumbTabobmaintenance} title="Tabob Restaurant">
            Exclusive soon
          </WorkGridItem>
        </Section>
        
      </SimpleGrid>


















{/* Motion Graphic */}
      <Section delay={0.4}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          Video Editing + Graphic
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.5}>
          <WorkGridItem id="psofitopenitup" thumbnail={thumbAeproject1} title="Product Spoiler">
            Fitopenitup Spoiler in AE (After Effect)
          </WorkGridItem>
        </Section>

        <Section delay={0.5}>
          <WorkGridItem id="deseogourmet-mg" thumbnail={thumbAeproject2} title="DeseoGourmet Animation">
            Fitopenitup Spoiler in AE (After Effect)
          </WorkGridItem>
        </Section>
        
      </SimpleGrid>

      
    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'
