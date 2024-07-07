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
  <Layout title="JAGER - Jangan Mager">
    <Container>
      <Title>
        JAGER - Jangan Mager <Badge>2024</Badge>
      </Title>
      <P>
        JAGER, short for Jangan Mager, is a to-do
        list app created with one mission: to help you
        overcome procrastination and boost your
        productivity. Born out of the common
        struggle with staying motivated and
        organized, JAGER provides a user-friendly
        platform to manage your tasks efficiently.
      </P>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Behance</Meta>
          <span>
            <Link href="https://www.behance.net/gallery/202326619/JAGER-Jangan-Mager-To-Do-list-App" target="_blank">
            https://www.behance.net/gallery/202..... <ExternalLinkIcon mx="2px" />
            </Link>
          </span>
        </ListItem>
        <ListItem>
          <Meta>Setup</Meta>
          <span>
            Figma, ArtBoard, Flaticon.
          </span>
        </ListItem>
        <ListItem>
          <Meta>Drop a Suggestion</Meta>
          <Link href="mailto:yoseph@skiff.com">
            yoseph@skiff.com<ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

      <WorkImage src="/images/works/jager1.png" alt="thejager" />


      <WorkImage src="/images/works/jager12.jpg" alt="thejager" />

      <WorkImage src="/images/works/JAGER2.jpg" alt="thejager" />

      <WorkImage src="/images/works/jager3.jpg" alt="thejager" />
      <WorkImage src="/images/works/jager3add.jpg" alt="thejager" />
      <WorkImage src="/images/works/jager3add2.jpg" alt="thejager" />

      <WorkImage src="/images/works/jager4.jpg" alt="thejager" />
      <WorkImage src="/images/works/jager42.jpg" alt="thejager" />

      <WorkImage src="/images/works/jager5.jpg" alt="thejager" />

      <WorkImage src="/images/works/jager6.jpg" alt="thejager" />

      <WorkImage src="/images/works/jagerthumb.jpg" alt="thejager" />


        <AspectRatio maxW="640px" ratio={1.7} my={4}>
          <iframe
            src="/images/works/showcasejager.mp4"
            title="YouTube video player"
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
