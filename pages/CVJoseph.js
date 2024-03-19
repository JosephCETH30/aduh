import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Container, Heading } from '@chakra-ui/react';
import Layout from '../components/layouts/article';

const DownloadCV = () => {
  const router = useRouter();
  const [isFileDownloaded, setFileDownloaded] = useState(false);

  useEffect(() => {
    const downloadFile = async () => {
      if (!isFileDownloaded) {
        try {
          const filePath = '/images/works/CVJOSEPH.pdf';
          const link = document.createElement('a');
          link.href = filePath;
          link.download = 'CVJoseph.doc';
          document.body.appendChild(link);
          link.click();
          setFileDownloaded(true);
          router.replace('/');
        } catch (error) {
          console.error('Error downloading file:', error);
        }
      }
    };

    downloadFile();
  }, [router, isFileDownloaded]);

  return (
    <Layout title="Download CV">
      <Container>
        <Heading as="h1" size="xl">
          Downloading CV...
        </Heading>
      </Container>
    </Layout>
  );
};

export default DownloadCV;
export { getServerSideProps } from '../components/chakra';
