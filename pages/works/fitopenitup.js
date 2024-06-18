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
  <Layout title="Fit Open it Up Interface">
    <Container>
      <Title>
        Fit Open it Up Interface  <Badge>2024</Badge>
      </Title>
      <P>
      Fit Open it Up Interface a modern and intuitive UI/UX design crafted to revolutionize your gym experience. Our design philosophy centers around simplicity, engagement, and motivation, making it easier for users to achieve their fitness goals.
      </P>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <span>
            <Link href="https://www.figma.com/file/Gj6rWCzkdJ84qvjWgkIiss/FitOpenitup-(Copy)?type=design&node-id=0%3A1&mode=design&t=6R5Ln0jjkj05wp84-1" target="_blank">
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

      <WorkImage src="/images/works/fitopenitup2.jpg" alt="darkmodeui" />

      <AspectRatio maxW="640px" ratio={1.7} my={4}>
        <iframe
          src="/images/works/portoui3showcase.mp4"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </AspectRatio>

      <WorkImage src="/images/works/fitopenitup3.jpg" alt="darkmodeui" />
      <WorkImage src="/images/works/fitopenitup4.jpg" alt="darkmodeui" />
      <WorkImage src="/images/works/fitopenitup4.jpg" alt="darkmodeui" />
      <WorkImage src="/images/works/fitopenitup5.jpg" alt="darkmodeui" />
      <WorkImage src="/images/works/fitopenitup5.png" alt="darkmodeui" />
      <WorkImage src="/images/works/lastmodefoiu.png" alt="darkmodeui" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
