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
  <Layout title="Personal Website Interface Dark Mode">
    <Container>
      <Title>
        Personal Website Interface Dark Mode <Badge>2023-2024</Badge>
      </Title>
      <P>
      Proyek ini merinci desain sketsa untuk situs web portofolio dengan tema gelap, yang dikembangkan untuk komunitas Pyoseph. Memanfaatkan gaya dan nuansa manusiawi, sketsa ini menciptakan pengalaman visual yang menarik dengan tampilan gelap yang elegan. Desainnya mencerminkan identitas Pyoseph dengan elemen-elemen yang menonjolkan keahlian dan pencapaian anggota komunitas. Dengan pemilihan warna dan komposisi yang cermat, sketsa ini bertujuan untuk memberikan kesan profesional dan modern, sambil tetap mempertahankan sentuhan kemanusiaan yang hangat.
      </P>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <span>
            <Link href="https://www.figma.com/file/2trAWrwKOrU4LbMZJMOdbm/Dark-Portfolio-Website-Sketch---Pyoseph-(Community)-(Copy)?type=design&node-id=0%3A1&mode=design&t=B9MbCuxRaBO493bx-1" target="_blank">
              https://figma.com/?file..... <ExternalLinkIcon mx="2px" />
            </Link>
          </span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>
            Figma, Adobe Illustator, Adobe XD, Sketch
          </span>
        </ListItem>
        <ListItem>
          <Meta>Blogspot</Meta>
          <Link href="#">
           I dont even understand these kind of UX Design , how to redesign it for me lmao<ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

      <WorkImage src="/images/works/personalui1.jpg" alt="darkmodeui" />

      <AspectRatio maxW="640px" ratio={1.7} my={4}>
        <iframe
          src="https://www.youtube.com/embed/7Sf5AaXvJeE?si=2Sz0PO9iSN08Go9P"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </AspectRatio>

      <WorkImage src="/images/works/personalui2.jpg" alt="darkmodeui" />
      <WorkImage src="/images/works/personalui3.jpg" alt="darkmodeui" />
      <WorkImage src="/images/works/personalui4.jpg" alt="darkmodeui" />
      <WorkImage src="/images/works/lastmodedarkui.png" alt="darkmodeui" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
