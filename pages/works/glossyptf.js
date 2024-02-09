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
  <Layout title="Glossy Portfolio Website Interface">
    <Container>
      <Title>
      Glossy Portfolio Website Interface <Badge>2024</Badge>
      </Title>
      <P>
      The Glossy Portfolio Interface Interface in Figma is a user-centric and visually appealing design that brings real-time weather information to users in a clear and intuitive manner. This interface is crafted to deliver a seamless and enjoyable experience, making it easy for users to access and comprehend weather data.
</P>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <span>
            <Link href="https://www.figma.com/file/zS3lukTFYo36SZ0SbhEQN7/website-assets?type=design&node-id=19%3A1373&mode=design&t=O7tWbFeWu9vXFOrB-1" target="_blank">
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

      <WorkImage src="/images/works/glossy1.png" alt="weather" />
      <WorkImage src="/images/works/glossy2.png" alt="weather" />
      <WorkImage src="/images/works/glossy3.png" alt="weather" />
      <WorkImage src="/images/works/glossy4.png" alt="weather" />
      <WorkImage src="/images/works/glossy5.png" alt="weather" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
