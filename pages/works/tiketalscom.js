import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  AspectRatio
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="TIKET ALS WEBSITE INTERFACE - RESPONSIVE WEBSITE">
    <Container>
      <Title>
      TIKET ALS WEBSITE INTERFACE - RESPONSIVE WEBSITE <Badge>2024</Badge>
      </Title>
      <P>
      Tiket ALS (Antar Lintas Sumatera) adalah layanan pembelian tiket secara online yang memudahkan Anda untuk merencanakan perjalanan bis antar lintas Sumatera dengan lebih praktis dan efisien. Dengan menggunakan platform ini, Anda dapat memilih rute perjalanan, menentukan waktu keberangkatan yang sesuai, dan memperoleh tiket dengan mudah tanpa harus datang langsung ke loket. <br></br>

</P>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <span>
            <Link href="#" target="_blank">
              Figma File. <ExternalLinkIcon mx="2px" />
            </Link>
          </span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>
            Figma, Adobe Illustator, Adobe XD, Sketch.
          </span>
        </ListItem>
        <ListItem>
          <Meta>Blogspot</Meta>
          <Link href="https://blog.pyoseph.tech/2024/article-1-UXDesign">
           I dont even understand these kind of UX Design , how to redesign it for me lmao<ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

      <WorkImage src="/images/works/travel1web.png" alt="als web tiket" />

      <AspectRatio maxW="auto" ratio={1.7} my={4}>
      <iframe
        src="/images/works/reviewwebalstiket.mp4"
        title="Video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
        loop
        muted
        playsinline
      ></iframe>


      </AspectRatio>
      <WorkImage src="/images/works/travel2web.png" alt="als web tiket" />
      
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
