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
  <Layout title="KAI Redesign Interface Mobile - Desktop">
    <Container>
      <Title>
        KAI Redesign Interface Mobile - Desktop  <Badge>2023 - 2024</Badge>
      </Title>
      <P>
      Desain ini dibuat untuk melatih skill ui/ux design saya agar dapat berkembang lebih jauh. Mohon maaf jika ada kesalahan, soon there is will be a study case about this project but not too much i think. Have a good one!
      </P>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <span>
            <Link href="https://www.figma.com/file/7vaKuZYnlF0iIrA6DN2qzs/Portfolio---KAIAccess?type=design&node-id=56%3A211&mode=design&t=Ju6rqC9dzeblnplt-1" target="_blank">
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

      <WorkImage src="/images/works/kai1.png" alt="darkmodeui" />

      <AspectRatio maxW="640px" ratio={1.7} my={4}>
        <iframe
          src="/images/works/portoui4showcase.mp4"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </AspectRatio>

      <WorkImage src="/images/works/kai2.jpg" alt="darkmodeui" />
      <WorkImage src="/images/works/kai3.png" alt="darkmodeui" />
      <WorkImage src="/images/works/kai4.png" alt="darkmodeui" />
      <WorkImage src="/images/works/kai5.jpg" alt="darkmodeui" />
      <WorkImage src="/images/works/lastmodekai.png" alt="darkmodeui" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
