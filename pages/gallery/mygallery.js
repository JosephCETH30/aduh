import {
  Container,
  Image,
  Link,
  List,
  ListItem,
  Box
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/blog'

const Blog = () => (
  <Layout title="UI Collection">
    <Container>
      <Title>
        My mini UI/UX Collection 
      </Title>
      <List ml={4} my={4}>
      <ListItem>
          <Meta>Connect me On Linkedin</Meta>
          <span>
            <Link href="https://linkedin.com/in/yoseph-rafael" target="_blank">
               Joseph Rafael <ExternalLinkIcon mx="2px" />
            </Link>
          </span>
        </ListItem>
      </List>

      <br></br>
      {/* Adding the GIF */}
      <Image src="/images/works/collection1uisc.gif" alt="Dump UI" my={4} />
      <Box display="flex" justifyContent="center" my={4}>
        <Image src="/images/works/collection1_2uisc.gif" alt="Dump UI" />
      </Box>
      <WorkImage src="/images/works/collectionui2.jpeg" alt="dump ui" />
      <WorkImage src="/images/works/collectionui3.jpeg" alt="dump ui" />
      <WorkImage src="/images/works/collectionui4.jpeg" alt="dump ui" />

      {/* <AspectRatio maxW="640px" ratio={1.7} my={4}>
        <iframe
          src="/images/works/showcasetraveladesk.mp4"
          title="video player"
          allow="accelerometer; autoplay; loop; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </AspectRatio>  */}

    </Container>
  </Layout>
)

export default Blog
export { getServerSideProps } from '../../components/chakra'
