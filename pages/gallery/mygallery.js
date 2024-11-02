import {
  Container,
  Image,
  Box
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { Title, WorkImage } from '../../components/blog'

const Blog = () => (
  <Layout title="UI Collection">
    <Container>
      <Title>
        My mini UI/UX Collection (more on Linkedin)
      </Title>

      {/* Adding the GIF */}
      <Image src="/images/works/femloaiwebsite.gif" alt="Dump UI" my={4} />
      <Box display="flex" justifyContent="center" my={4}>
        <Image src="/images/works/femloaiwebsite2.gif" alt="Dump UI" />
      </Box>
      <WorkImage src="/images/works/collectionui4.jpeg" alt="dump ui" />
      <WorkImage src="/images/works/glassmorphismAVP1.jpeg" alt="dump ui" />
      <WorkImage src="/images/works/webkabtoba.jpeg" alt="dump ui" />

      {/* <AspectRatio maxW="640px" ratio={1.7} my={4}>
        <video
          src="/images/works/showcasediznutch.mp4"
          title="video player"
          autoPlay
          muted
          playsInline
          controls={false}
        ></video>
      </AspectRatio> */}


    </Container>
  </Layout>
)

export default Blog
export { getServerSideProps } from '../../components/chakra'
