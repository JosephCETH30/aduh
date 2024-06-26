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
  <Layout title="004 Simple Calculator">
    <Container>
      <Title>
        004 Simple Calculator <Badge> June 26,2024</Badge>
      </Title>
      <P>
        Design a calculation element or interface. Is it a standard calculator, a scientific one, or specialty calculator for something such as a home mortgage or auto loan? Is it to forecast a calculation such as for a credit score? Is it for a phone, a tablet, a web app.

        this is what i we got in the process
      </P>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <span>
            <Link href="https://www.figma.com/design/9Er8M1VBtURPgOwM5QOiYj/DailyUI-Challenge?node-id=112-52" target="_blank">
              Figma File (Read Only) <ExternalLinkIcon mx="2px" />
            </Link>
          </span>
        </ListItem>
      </List>

      <br></br>
      <WorkImage src="/images/works/Dailyux4thumb.png" alt="wireframe-004-01" />
      <p>that is simple wireframe, Using wireframes in Figma is essential because they help design the basic framework of an application or website without getting bogged down in visual details. Wireframes allow the team to focus on structure, layout, and initial functionality, ensuring that user flow and key elements are correct before moving on to more detailed visual design. This accelerates the iteration process and minimizes time-consuming changes in the final design stages. </p> <br></br>
      <WorkImage src="/images/works/calculator1.png" alt="wireframe-004-02" />
      <p>Type 1 in the chat if you want to see the result, dont expect to high about the results lol, k here we go. i told u dont expect too high still day 1 need sleep too.</p><br></br>
      <WorkImage src="/images/works/calculator2.png" />
      <p>okok males bikin caption udah pusing duluan sama koding, bercanda. memang gatau mau bikin capt apaan deh pokoknya Calculatornya simple. tanpa component cuma 20 menitan dan ini sedikit sefruit tutorialnya, kalau ada salah mohon dimaafkan. Enjoy</p><br></br>
      <AspectRatio maxW="640px" ratio={1.7} my={4}>
        <iframe
          src="/images/works/showcasesimplecalculator.mp4"
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
