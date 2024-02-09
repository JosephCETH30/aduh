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
  <Layout title="Kominfas (Kominfo app duplicated)">
    <Container>
      <Title>
      Kominfas (Kominfo App Duplicated) <Badge>2023</Badge>
      </Title>
      <P>
      Responsive design principles are integrated to guarantee a consistent and engaging experience across various devices. The interface's simplicity extends to its adaptability, ensuring that the portfolio looks polished and professional on screens of all sizes.

</P>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <span>
            <Link href="https://www.figma.com/file/V77VlItUmJDGt3wyxaGrGv/Portfolio---Kominfas?type=design&node-id=205-3&mode=design&t=NdusiydeqRUylxX6-0" target="_blank">
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

      <WorkImage src="/images/works/kominfas2.png" alt="kominfas" />
      <WorkImage src="/images/works/kominfas3.png" alt="kominfas" />
      <WorkImage src="/images/works/kominfas4.png" alt="kominfas" />
      <WorkImage src="/images/works/kominfas3.png" alt="kominfas" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
