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
  <Layout title="CryptoProX App">
    <Container>
      <Title>
      CryptoProX App <Badge>2024</Badge>
      </Title>
      <P>
      Cutting-edge Cryptocurrency Ecosystem Unveiled: Introducing an Exemplary All-in-One Crypto Application. Empowering users with an expansive array of functionalities, from Effortless Purchase Transactions to Strategic Sales and Seamless Trading Experiences, all rendered with the Utmost Cost-Efficiency. Immerse yourself in the World of Digital Assets through an Intuitively Crafted User Interface, ensuring a User-Friendly and Visually Gratifying Journey within this State-of-the-Art Cryptocurrency Application.
</P>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <span>
            <Link href="#" target="_blank">
              Buy Figma File. <ExternalLinkIcon mx="2px" />
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

      <WorkImage src="/images/works/CrpyptoProx.png" alt="Studyin Altos" />
      <WorkImage src="/images/works/CryptoProX2.png" alt="Studyin Altos" />
      <WorkImage src="/images/works/CryptoProX3.png" alt="Studyin Altos" />
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
