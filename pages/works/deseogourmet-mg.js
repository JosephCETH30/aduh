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
import { Title, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="Deseogourmet Animation with After effect">
    <Container>
      <Title>
        Deseogourmet Animation with After effect  <Badge>2024</Badge>
      </Title>
      <P>
      Deseogourmet Animation with After effect is a dynamic and visually captivating section that seamlessly integrates cutting-edge motion graphics to enhance the overall user experience. This engaging component is carefully crafted to evoke a sense of excitement and curiosity, enticing viewers to delve into the content without revealing any spoilers. The motion graphics are meticulously designed to open up a world of intrigue and anticipation, creating an immersive atmosphere that sparks interest without giving away key details.
      </P>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Youtube</Meta>
          <span>
            <Link href="https://www.youtube.com/watch?v=iU2GRx0p8TM" target="_blank">
              https://youtube.com/watch?..... <ExternalLinkIcon mx="2px" />
            </Link>
          </span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>
            Figma, Adobe After Effect, Adobe Media Encoder, Adobe Illustrator
          </span>
        </ListItem>
        <ListItem>
          <Meta>Blogspot</Meta>
          <Link href="#">
           I dont even understand these kind of UX Design , how to redesign it for me lmao<ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>


      <AspectRatio maxW="640px" ratio={1.7} my={4}>
        <iframe
          src="/images/works/deseogourmetanimate.mp4"
          title="video player"
          allow="accelerometer; autoplay; loop; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </AspectRatio>
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
