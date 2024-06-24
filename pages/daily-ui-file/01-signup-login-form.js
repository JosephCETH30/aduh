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
  <Layout title="001 Signup Login Form">
    <Container>
      <Title>
        001 Signup Login Form <Badge> June 23,2024</Badge>
      </Title>
      <P>
        Create a sign up page, modal, form,
        or app screen related to signing up for
        something. It could be for a volunteer
        event, contest registration, a giveaway,
        or anything you can image. 

        this is what i we got in the process
      </P>

      <List ml={4} my={4}>
      <ListItem>
          <Meta>Website</Meta>
          <span>
            <Link href="https://www.figma.com/design/9Er8M1VBtURPgOwM5QOiYj/DailyUI-Challenge?node-id=27-213&t=lwrLuMrwvwE1oNhX-1" target="_blank">
               Figma File (Read Only) <ExternalLinkIcon mx="2px" />
            </Link>
          </span>
        </ListItem>
      </List>

      <br></br>
      <WorkImage src="https://i.ibb.co.com/0XkjF0Z/Wireframe001signup.jpg" alt="wireframe-001-01" />
      <p>that is simple wireframe, Using wireframes in Figma is essential because they help design the basic framework of an application or website without getting bogged down in visual details. Wireframes allow the team to focus on structure, layout, and initial functionality, ensuring that user flow and key elements are correct before moving on to more detailed visual design. This accelerates the iteration process and minimizes time-consuming changes in the final design stages. </p> <br></br>
      <WorkImage src="/images/works/WFexplain.jpg" alt="wireframe-001-02" />
      <p>Type 1 in the chat if you want to see the result, dont expect to high about the results lol, k here we go. i told u dont expect too high still day 1 need sleep too.</p><br></br>
      <WorkImage src="/images/works/Signuppage1.jpg" />
      <p>i mean which one better, how about we remove those annoying blobs behind the contents, like this lol</p><br></br>
      <WorkImage src="/images/works/LoginPage2.jpg" alt="results-001-04" />
      <p>how it looks now, i mean nothing happened. k sorry thx</p><br></br>
      <WorkImage src="/images/works/signup3.jpg" />
      <p>anyway i got no flawless english here hablo inglese is hard, thx for visiting my website. have a good day</p>
      <AspectRatio maxW="640px" ratio={1.7} my={4}>
        <iframe
          src="/images/works/showcasetraveladesk.mp4"
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
