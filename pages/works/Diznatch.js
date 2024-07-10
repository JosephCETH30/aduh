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
  <Layout title="Diznatch Airdrop">
    <Container>
      <Title>
        Diznatch Airdrop <Badge>2024</Badge>
      </Title>
      <P>
        De most lucrative airdrops in the crypto space,
        never miss an opportunity. Always Remember
        Buy at the top, sell at the lows!
      </P>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Behance</Meta>
          <span>
            <Link href="#notyet" target="_blank">
              https://www.behance.net/gallery/202..... <ExternalLinkIcon mx="2px" />
            </Link>
          </span>
        </ListItem>
        <ListItem>
          <Meta>Setup</Meta>
          <span>
            Figma, ArtBoard, Iconscout.
          </span>
        </ListItem>
        <ListItem>
          <Meta>Drop a Suggestion</Meta>
          <Link href="mailto:yoseph@skiff.com">
            yoseph@skiff.com<ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

      <WorkImage src="/images/works/showcasediznutch1.jpg" alt="Diznutch" />


      <WorkImage src="/images/works/showcasediznutch2.jpg" alt="Diznutch" />



      <AspectRatio maxW="640px" ratio={1.7} my={4}>
        <iframe
          src="/images/works/showcasediznutch.mp4"
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
