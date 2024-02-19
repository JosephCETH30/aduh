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
  <Layout title="Simple Portfolio Interface">
    <Container>
      <Title>
      Simple Portfolio Interface <Badge>2023</Badge>
      </Title>
      <P>
      The Simple Portfolio Interface in Figma is a minimalist and elegantly designed section that showcases a users creative work with clarity and sophistication. Stripping away unnecessary complexities, this interface focuses on delivering a clean and intuitive experience for both the portfolio owner and visitors.</P>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>File Link</Meta>
          <span>
            <Link href="https://www.figma.com/file/GHecYhEyxYPEXaUVBavJeh/Portfolio---Website-Sketch?type=design&node-id=3%3A4&mode=design&t=US1WUUS3iX9vgAdI-1" target="_blank">
              https://figma.com/?file..... <ExternalLinkIcon mx="2px" />
            </Link>
          </span>
        </ListItem>
        <ListItem>
          <Meta>See this live</Meta>
          <span>
            <Link href="https://pyoseph.nicepage.io" target="_blank">
              https://pyoseph.nicepage.io<ExternalLinkIcon mx="2px" />
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

      <WorkImage src="/images/works/pyoseph1.png" alt="pyoseph" />
      <WorkImage src="/images/works/pyoseph2.png" alt="pyoseph" />
      <WorkImage src="/images/works/pyoseph3.png" alt="pyoseph" />
      <WorkImage src="/images/works/pyoseph4.png" alt="pyoseph" />
      <WorkImage src="/images/works/pyoseph5.png" alt="pyoseph" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
