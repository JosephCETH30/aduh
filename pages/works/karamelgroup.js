import {
  Box,
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
  <Layout title="Karamel Group Website">
    <Container>
      <Title>
        Karamel Group Website <Badge>2023-2026</Badge>
      </Title>
      <P>
      Kami adalah PT. Karamel Kreativindo Digital Internasional, agensi Pemasaran Digital dengan mitra di seluruh dunia. Kami merancang pengalaman digital yang bijaksana dan estetika merek yang indah.
      </P>
      <List ml={4} my={4}>
      <ListItem>
          <Meta>Website</Meta>
          <Link href="https://www.karamelgroup.com/">
            https://www.karamelgroup.com/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Soft Interface, Javascript, CSS, Bootstrap</span>
        </ListItem>
        <ListItem>
          <Meta>Affilated</Meta>
          <span>halalhero.id, Urushalal.co, urusizin.co, Kelurahan Cipinang Jatinegara.</span>
        </ListItem>
        <ListItem>
          <Meta>Blogpost</Meta>
          <Link href="#">
            Kenapa Harus memilih karamelgroup Creativindo sebagai marketing digital bagi produk kamu{' '}
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

      <WorkImage
        src="/images/works/karamel2.jpg"
        alt="Karamelgroup"
      />
      <WorkImage src="/images/works/karamel3.jpg" alt="Karamelgroup" />
      <WorkImage src="/images/works/karamel4.jpg" alt="Karamelgroup" />
      
      <Box>
        <iframe
          src="https://player.vimeo.com/video/909703105"
          width="100%"
          height="400"
          frameBorder="0"
          allowFullScreen
        />
      </Box>
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
