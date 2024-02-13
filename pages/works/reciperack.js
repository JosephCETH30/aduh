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
  <Layout title="Recipe Rack Interface">
    <Container>
      <Title>
      Recipe Rack Interface <Badge>2024</Badge>
      </Title>
      <P>
      App or web platform for organizing and discovering recipes. Users can save, categorize, and share their favorite recipes, as well as explore new ones based on dietary preferences and ingredients on hand.
</P>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <span>
            <Link href="https://www.figma.com/file/6YLNQEpOMWU0qvIVEGKG2e/RecipeRack?type=design&node-id=20%3A792&mode=design&t=wrvEAsi26GiVwCVe-1" target="_blank">
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

      <WorkImage src="/images/works/reciperacksthumb1.png" alt="recipe rack" />
      <WorkImage src="/images/works/reciperacksthumb2.png" alt="recipe rack" />
      <AspectRatio maxW="630px" ratio={1.7} my={4}>
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


      </AspectRatio>
      <WorkImage src="/images/works/reciperacksthumb3.png" alt="recipe rack" />
      <WorkImage src="/images/works/reciperacksthumb4.png" alt="recipe rack" />
      
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
