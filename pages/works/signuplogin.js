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
  <Layout title="Signup Login Page">
    <Container>
      <Title>
        Signup Login Page (Interface) <Badge>2023</Badge>
      </Title>
      <P>
      The Signup Login Page Interface in Figma is an aesthetically refined and thoughtfully designed section that seamlessly integrates user-friendly elements for a streamlined onboarding experience. The interface strikes a balance between simplicity and sophistication, ensuring an intuitive journey for users navigating through the signup and login processes.
      </P>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <span>
            <Link href="https://www.figma.com/file/LyWuzJ8YWIAEx2ySF2724c/Portfolio---Login-Page?type=design&node-id=10%3A2&mode=design&t=1hEm9YboCXNT3VG6-1" target="_blank">
              https://figma.com/?file..... <ExternalLinkIcon mx="2px" />
            </Link>
          </span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>
            Figma, Adobe Illustrator, Adobe XD, Sketch
          </span>
        </ListItem>
        <ListItem>
          <Meta>Blogspot</Meta>
          <Link href="#">
           I dont even understand these kind of UX Design , how to redesign it for me lmao<ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

      <WorkImage src="/images/works/signup2.png" alt="darkmodeui" />
      <WorkImage src="/images/works/signup3.png" alt="darkmodeui" />
      <WorkImage src="/images/works/signup4.png" alt="darkmodeui" />
      <WorkImage src="/images/works/signup5.png" alt="darkmodeui" />
      
      <WorkImage src="/images/works/Mobilemode.png" alt="darkmodeui" />
      
      <WorkImage src="/images/works/lastmodesimple.png" alt="darkmodeui" />

      {/* <AspectRatio maxW="640px" ratio={1.7} my={4}>
        <iframe
          src="/images/works/FitopenitupSpoil.mp4"
          title="video player"
          allow="accelerometer; autoplay; loop; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </AspectRatio> */}
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
