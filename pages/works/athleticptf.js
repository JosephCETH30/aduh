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
  <Layout title="Athletic Portfolio Interface ">
    <Container>
      <Title>
        Athletic Portfolio Interface  <Badge>2023-2024</Badge>
      </Title>
      <P>
      This Figma project presents a dynamic and engaging interface designed specifically for athletic portfolios. The interface is meticulously crafted to showcase the skills, achievements, and personality of athletes in a visually compelling manner. With a focus on energetic design elements, sleek layouts, and vibrant color schemes, this portfolio interface aims to capture the essence of athleticism and excellence. Whether its for professional athletes or sports enthusiasts, the design emphasizes a seamless and user-friendly experience, ensuring that the portfolio effectively communicates the individuals prowess and dedication to their athletic journey.
      </P>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <span>
            <Link href="#" target="_blank">
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

      <WorkImage src="/images/works/athlete1.jpg" alt="darkmodeui" />

      <AspectRatio maxW="640px" ratio={1.7} my={4}>
        <iframe
          src="https://www.youtube.com/embed/7Sf5AaXvJeE?si=2Sz0PO9iSN08Go9P"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </AspectRatio>

      <WorkImage src="/images/works/athlete2.jpg" alt="darkmodeui" />
      <WorkImage src="/images/works/athlete3.jpg" alt="darkmodeui" />
      <WorkImage src="/images/works/lastmodeathelete.png" alt="darkmodeui" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
