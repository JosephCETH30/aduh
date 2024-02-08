import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  AspectRatio
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Halalhero">
    <Container>
      <Title>
        Halalhero <Badge>2022-2024</Badge>
      </Title>
      <P>
      Dapatkan Informasi dan Pengetahuan tentang Makanan Halal dari Sumber Terpercaya.
      Website penyelia halal yang bekerja sama langsung dengan BPJPH dan sihalal PTSP
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://www.halalhero.id">
            https://www.halalhero.id <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Affilated</Meta>
          <span>sihalal, BPJPH, Walikota Jakarta timur, Kelurahan di Seluruh Jakarta Timur, Kementrian</span>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows/Android/iOS</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Javascript, CSS, Bootstrap</span>
        </ListItem>
        <ListItem>
          <Meta>Blogpost</Meta>
          <Link href="#">
            Mengapa harus mendaftar sertifikat halal?, padahal makanan yang saya jual sudah Halal LOH! <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

      <WorkImage src="/images/works/halalhero.jpg" alt="Halalhero" />
      <WorkImage src="/images/works/halalhero2.jpg" alt="Halalhero" />
      <AspectRatio maxW="640px" ratio={1.7} my={4}>
        <iframe
          src="https://player.vimeo.com/video/909703105?h=e54cd8aeb9"
          title="Vimeo video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </AspectRatio>
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
