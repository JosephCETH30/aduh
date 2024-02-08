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
  <Layout title="KAI Redesign Interface Mobile - Desktop">
    <Container>
      <Title>
        Project Spoiler Fitopenitup Motion Graphic  <Badge>2024</Badge>
      </Title>
      <P>
      Project Spoiler Fitopenitup Motion Graphic is a dynamic and visually captivating section that seamlessly integrates cutting-edge motion graphics to enhance the overall user experience. This engaging component is carefully crafted to evoke a sense of excitement and curiosity, enticing viewers to delve into the content without revealing any spoilers. The motion graphics are meticulously designed to open up a world of intrigue and anticipation, creating an immersive atmosphere that sparks interest without giving away key details.
      </P>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <span>
            <Link href="https://www.mediafire.com/file/tpt4p4o2jxwdmhl/FitopenitupSpoil.mp4/file" target="_blank">
              https://mediafire.com/?file..... <ExternalLinkIcon mx="2px" />
            </Link>
          </span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>
            Figma, Adobe After Effect, Adobe Media Encoder, Sketch
          </span>
        </ListItem>
        <ListItem>
          <Meta>Blogspot</Meta>
          <Link href="#">
           I dont even understand these kind of UX Design , how to redesign it for me lmao<ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

      <WorkImage src="/images/works/pspo1.png" alt="darkmodeui" />

      <AspectRatio maxW="640px" ratio={1.7} my={4}>
        <iframe
          src="/images/works/FitopenitupSpoil.mp4"
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
