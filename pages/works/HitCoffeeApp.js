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
  <Layout title="HitCoffee - Coffee Shop App">
    <Container>
      <Title>
        HitCoffee - Coffee Shop App <Badge>2024</Badge>
      </Title>
      <P>
        The HitCoffee app aims to change all this by offering
        users a quick and efficient way to browse the menu
        and the place orders as per their preferences in their
        most liked drinks along with the accompanying
        snacks and also to stay connected with their local
        coffee shop. HitCoffee app which
        is very user-friendly on your mobile device allows us
        to get you the coffee you desire within a half-
        a-second, allowing you to move on with your life
        and prepare for a better day with your regular-priced
        coffee. HitCoffee  Never Ending Fresh Brewed Coffee
        At Your Fingertips.
      </P>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Behance</Meta>
          <span>
            <Link href="https://www.behance.net/gallery/202629391/Coffee-Shop-UIUX-Design" target="_blank">
              https://www.behance.net/gallery/202..... <ExternalLinkIcon mx="2px" />
            </Link>
          </span>
        </ListItem>
        <ListItem>
          <Meta>Setup</Meta>
          <span>
            Figma, ArtBoard, Flaticon.
          </span>
        </ListItem>
        <ListItem>
          <Meta>Drop a Suggestion</Meta>
          <Link href="mailto:yoseph@skiff.com">
            yoseph@skiff.com<ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

      <WorkImage src="/images/works/hitcoffeethumb.png" alt="HitCoffee" />
      <WorkImage src="/images/works/hitcoffee1.png" alt="HitCoffe" />


      <WorkImage src="/images/works/hitcoffee2.png" alt="HitCoffe" />

      <WorkImage src="/images/works/hitcoffee3.png" alt="HitCoffe" />

      <WorkImage src="/images/works/hitcoffee32.png" alt="HitCoffe" />
      <WorkImage src="/images/works/hitcoffee33.png" alt="HitCoffe" />
      <WorkImage src="/images/works/hitcoffee34.png" alt="HitCoffe" />

      <WorkImage src="/images/works/hitcoffee4.png" alt="HitCoffe" />
      <WorkImage src="/images/works/hitcoffee42.png" alt="HitCoffe" />

      <WorkImage src="/images/works/hitcoffee5.png" alt="HitCoffe" />

      <WorkImage src="/images/works/hitcoffee6.png" alt="HitCoffe" />

      <WorkImage src="/images/works/hitcoffeethumb.png" alt="HitCoffe" />


      <AspectRatio maxW="640px" ratio={1.7} my={4}>
        <iframe
          style={{ border: "1px solid rgba(0, 0, 0, 0.1)" }}
          width="800"
          height="800"
          src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FxrNLCmTEZwvVASGxnaD2oH%2FCoffee-Shop%3Fpage-id%3D0%253A1%26node-id%3D4-13%26viewport%3D450%252C271%252C0.38%26t%3DUiwJ3DVD1Oor6DJj-1%26scaling%3Dscale-down%26content-scaling%3Dfixed%26starting-point-node-id%3D4%253A13"
          allowFullScreen
        ></iframe>
      </AspectRatio>



    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
