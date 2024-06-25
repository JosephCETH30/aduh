import {
  Container,
  Badge,
  Link,
  List,
  AspectRatio,
  ListItem
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/blog'
import P from '../../components/paragraph'

const Blog = () => (
  <Layout title="003 Great Landing Page">
    <Container>
      <Title>
        003 Great Landing Page <Badge> June 25,2024</Badge>
      </Title>
      <P>
        Whats the main focus? Is it for a Person,
        an album, a mobile app, a SaaS product?
        Consider important landing page
        elements (Headlines, call-to-action
        buttons, typography, clarity, etc.)
        Credit : Abishekja.me

        this is what i we got in the process
      </P>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <span>
            <Link href="https://www.figma.com/design/9Er8M1VBtURPgOwM5QOiYj/DailyUI-Challenge?node-id=67-2" target="_blank">
              Figma File (Read Only) <ExternalLinkIcon mx="2px" />
            </Link>
          </span>
        </ListItem>
      </List>

      <br></br>
      <WorkImage src="https://i.ibb.co.com/0XkjF0Z/Wireframe001signup.jpg" alt="wireframe-001-01" />
      <p>that is simple wireframe, Using wireframes in Figma is essential because they help design the basic framework of an application or website without getting bogged down in visual details. Wireframes allow the team to focus on structure, layout, and initial functionality, ensuring that user flow and key elements are correct before moving on to more detailed visual design. This accelerates the iteration process and minimizes time-consuming changes in the final design stages. </p> <br></br>
      <WorkImage src="/images/works/Dailyux3thumb.png" alt="wireframe-001-02" />
      <p>hows your day fellas? is it good or something bad happened in your life? i mean whatever happens in your life, remain grateful. because grateful is the best things that we can do than mengeluh. </p><br></br>
      <WorkImage src="/images/works/DesignLandingPageRomski-about.png" />
      <p><b>What do you call fake spaghetti?</b> An impasta!, i got one more hmmm <b>Why dont skeletons fight each other?</b> They dont have the guts.</p><br></br>
      <WorkImage src="/images/works/ChampionshipPages.png" alt="results-001-04" />
      <p>Kenapa kuku tidak bisa berbohong? Karena sudah pasti kelihatan (keliatan). Kalau ketawa berarti udah tua</p><br></br>
      <WorkImage src="/images/works/CollectionPages.png" />
      <p>jangan lupa di taptap layarnya anyway i got no flawless english here hablo inglese is hard, thx for visiting my website. have a good day</p>
      <AspectRatio maxW="640px" ratio={1.7} my={4}>
        <iframe
          src="/images/works/showcaselandingpage.mp4"
          title="video player"
          allow="accelerometer; autoplay; loop; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </AspectRatio>

    </Container>
  </Layout>
)

export default Blog
export { getServerSideProps } from '../../components/chakra'
