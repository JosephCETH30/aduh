import {
  Container,
  Badge,
  Link,
  List,
  ListItem
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="UrusIzin Website">
    <Container>
      <Title>
        UrusIzin Website <Badge>2022-2024</Badge>
      </Title>
      <P>
      Memulai sebuah perjalanan untuk mewujudkan mimpi dan visi. Kami bangga mengumumkan pendirian perusahaan kami yang didedikasikan untuk memberikan solusi inovatif dan layanan terbaik bagi pelanggan kami. Bersama-sama kita menuju masa depan yang lebih baik!
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://www.urusizin.co">
            https://www.urusizin.co <ExternalLinkIcon mx="2px" />
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
      </List>

      <WorkImage src="/images/works/urusizin2.jpg" alt="urusizin" />
      <WorkImage src="/images/works/urusizin3.jpg" alt="urusizin" />
      <WorkImage src="/images/works/urusizin4.jpg" alt="urusizin" />
      <WorkImage src="/images/works/urusizin5.jpg" alt="urusizin" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
