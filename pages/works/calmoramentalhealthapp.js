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
  <Layout title="Calmora App Interface">
    <Container>
      <Title>
      Calmora App Interface <Badge>2024</Badge>
      </Title>
      <P>
      Selain sebagai bagian dari portofolio saya, halaman ini juga bertujuan untuk meningkatkan pemahaman dan keterampilan saya dalam desain web. ok<br></br>

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
          <Link href="#">
           I dont even understand these kind of UX Design , how to redesign it for me lmao<ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

      <WorkImage src="/images/works/covercalmora.png" alt="als web tiket" />

      <AspectRatio maxW="auto" ratio={1.7} my={4}>
      <iframe
        src="/images/works/showcasecalmora.mp4"
        title="Video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
        loop
        muted
        playsinline
      ></iframe>


      </AspectRatio>
      
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
