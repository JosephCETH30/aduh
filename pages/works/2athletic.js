import {
  Container,
  Badge,
  Link,
  List,
  ListItem
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="&quot;2&quot; Athletic Portfolio">
    <Container>
      <Title>
      &quot;2&quot; Athletic Portfolio <Badge>2024</Badge>
      </Title>
      <P>
      App or web platform for organizing and discovering Learning Platform. Users can save, categorize, and share their favorite recipes, as well as explore new ones based on dietary preferences and ingredients on hand.
</P>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <span>
            <Link href="https://www.figma.com/file/mzvMzvmt0r29FRDrHR0snr/Athletic-Personal-Portfolio?type=design&node-id=0-1&mode=design&t=dnhqmbxnZa7ru11X-0" target="_blank">
               Figma File. <ExternalLinkIcon mx="2px" />
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

      <WorkImage src="/images/works/2athleticptf2.png" alt="Studyin Altos" />
      <WorkImage src="/images/works/2athleticptf.png" alt="Studyin Altos" />
      {/* <AspectRatio maxW="630px" ratio={1.7} my={4}>
      <iframe
        src="/images/works/video1reciperack.mp4"
        title="Video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
        loop
        muted
        playsinline
      ></iframe>


      </AspectRatio> */}
      {/* <WorkImage src="/images/works/reciperacksthumb3.png" alt="recipe rack" />
      <WorkImage src="/images/works/reciperacksthumb4.png" alt="recipe rack" /> */}
      
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
