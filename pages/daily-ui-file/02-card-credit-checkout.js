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
  <Layout title="002 Card Credit Checkout">
    <Container>
      <Title>
        002 Card Credit Checkout <Badge> June 24,2024</Badge>
      </Title>
      <P>
        Design a credit card checkout form or
        page. Dont forget the important
        elements such as the numbers, dates,
        security numbers, etc.

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
      <WorkImage src="/images/works/WFEXPLAINC3-1.png" alt="wireframe-002-01" />
      <p>that is simple wireframe, Using wireframes in Figma is essential because they help design the basic framework of an application or website without getting bogged down in visual details. Wireframes allow the team to focus on structure, layout, and initial functionality, ensuring that user flow and key elements are correct before moving on to more detailed visual design. This accelerates the iteration process and minimizes time-consuming changes in the final design stages. </p> <br></br>
      <WorkImage src="/images/works/WFEXPLAINC3-2.png" alt="wireframe-002-02" />
      <p>i got magh alias indigestion when doing this ui design, well ranitidine could handle these problem. dont begadang mate and please olahraga every morning biar fresh again. im being fr indigestion is sucks u cant enjoy your life but it is what it is.</p><br></br>
      <WorkImage src="/images/works/WFEXPLAINC3-3.png" />
      <p>ok here we go for the results, i need 100 taptap layar so i can send the results, fast. 100 taptap layar share than follownya kakak, gajelas bet ok there it is.</p><br></br>
      <WorkImage src="/images/works/Dailyux2thumb.png" alt="results-002-04" />
      <p>day 2 trying to be consistent sampe hari ke twenty one jadi bisa repeated-cycle 21/90. Enjoy the design, any saran dan kritik i accept via email or dm on insta</p><br></br>
      <WorkImage src="/images/works/resultsc3-2.png" alt="results-002-05"/>
      <p>anyway i got no flawless english here hablo inglese is hard, thx for visiting my website. have a good day. feel free to download these design, link at diatas bang coba scroll ok? makasih thanks</p>
      <AspectRatio maxW="640px" ratio={1.7} my={4}>
        <iframe
          src="/images/works/showcasetravelapaymentcreditcard.mp4"
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
