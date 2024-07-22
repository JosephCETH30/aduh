import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { Container } from '@chakra-ui/react'
import Layout from '../components/layouts/article'

const Posts = () => {
  const router = useRouter()

  useEffect(() => {
    router.push('https://pyoseph.tech/gallery/mygallery')
  }, [router])

  return (
    <Layout title="">
      <Container>
        {/* The content here won't be visible because of the redirection */}
      </Container>
    </Layout>
  )
}

export default Posts
export { getServerSideProps } from '../components/chakra'
