import {
  Container,
  Badge,
  AspectRatio
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { Title, WorkImage } from '../../components/blog'
import P from '../../components/paragraph'

const Blog = () => (
  <Layout title="Apakah cara Main bass sama dengan main gitar? | bagaimana cara Memetik bass dengan benar">
    <Container>
      <Title>
      Apakah cara Main bass sama dengan main gitar? | bagaimana cara Memetik bass dengan benar <Badge> Feb 16,2024</Badge>
      </Title>
      <P>
      Pada Artikel kali ini gw akan membahas tentang kesamaan gitar dengan bass yang signifikan dan Intelektual berparadigma, buset kyk rocky gerung aja ini bahasa wkwkw. langsung saja kepada pembahasannya
      </P> <br></br>
      <b>Persamaan Gitar dan Bass</b>
      <br></br>
      <p> Gitar dengan bass sama sama dipetik memang sih mirip tapi sebenarnya kedua alat musik ini tidak sama alias memiliki perbedaan, cuma memang kelihatannya sama + note yang ada juga sama kan. apa saja perbedaannya mengapa kok bisa mirip tapi sebenarnya berbeda?

      <br></br><br></br>
      Sebelumnya kita harus tau dulu asal usul gitar, biar panjang aja ini artikel mah padahal gausah langsung to the point aja yakan? <br></br><br></br>
      
      Gitar adalah sebuah alat musik berdawai yang dimainkan dengan cara dipetik, umumnya menggunakan jari maupun plektrum. Gitar terbentuk atas sebuah bagian tubuh pokok dengan bagian leher yang padat sebagai tempat senar yang umumnya berjumlah enam didempetkan. Gitar secara tradisional dibentuk dari berbagai jenis kayu dengan senar yang terbuat dari nilon maupun baja. Beberapa gitar modern dibuat dari material polikarbonat. Secara umum, gitar terbagi atas 2 jenis: akustik dan elektrik. <br></br><br></br>

      Gitar akustik, dengan bagian badannya yang berlubang (hollow body), telah digunakan selama ribuan tahun. Terdapat tiga jenis utama gitar akustik modern: gitar akustik senar-nilon, gitar akustik senar-baja, dan gitar archtop. Gitar klasik umumnya dimainkan sebagai instrumen solo menggunakan teknik fingerpicking komprehensif. <br></br><br></br>

      Gitar elektrik, diperkenalkan pada tahun 1930-an, bergantung pada penguat yang secara elektronik mampu memanipulasi bunyi gitar. Pada permulaan penggunaannya, gitar elektrik menggunakan badan berlubang (hollow body), namun kemudian penggunaan badan padat (solid body) dirasa lebih sesuai. Gitar elektrik terkenal luas sebagai instrumen utama pada berbagai genre musik seperti blues, country, reggae, jazz, metal, rock, dan berbagai bentuk musik pop <br></br><br></br>

</p>

      <WorkImage src="https://hlsmusicindonesia.com/wp-content/uploads/2022/07/f310nt-web.jpg" alt="mediumpost-1" />
      <p>Kata gitar atau guitar dalam bahasa Inggris, pada mulanya diambil dari nama alat musik petik kuno di wilayah Persia pada kira-kira tahun 1500 SM yang dikenal sebagai citar atau sehtar. Alat musik ini kemudian berkembang menjadi berbagai macam model gitar kuno yang dikenal dengan istilah umum tanbur

</p>

      <AspectRatio maxW="640px" ratio={1.7} my={4}>
        <iframe
          src="https://www.youtube.com/embed/vbuUb_G56H8?si=N3f5Z54ZGmZXPd3R"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </AspectRatio>

      <p>Yup benar dengan bentuk seperti huruf L adalah posisi jari untuk genjrengan gitar yang benar, Tapi Kalau pemula boleh kok Menggenjreng dengan 5 Jari alias All in one Slap. Lalu apa sih yang membedakan Gitar dengan bass?</p> <br></br>

      <p>Tidak seperti gitar, bass dimainkan dengan cara menarik senar, yang umumnya disebut sebagai dibetot. Ini disebabkan oleh perbedaan jumlah senar antara bass dan gitar.

</p><br></br>

      <p>Jika gitar memiliki enam senar, bass hanya memiliki empat senar, sehingga dua nada pada gitar tidak dapat ditemui pada bass. Perbedaan signifikan lainnya antara bass dan gitar terletak pada jenis senarnya. Dalam pandangan umum, senar bass cenderung lebih tebal dibandingkan dengan senar gitar. Meskipun secara visual bass sering kali dianggap mirip dengan gitar listrik, perbedaan terletak pada leher yang lebih panjang dan tubuh yang lebih kecil. <br></br><br></br>Dalam kenyataannya, bass dan gitar memiliki perbedaan yang dapat diidentifikasi, meskipun terkadang bass dianggap sebagai varian gitar listrik hanya berdasarkan penampilannya. Penting untuk dicatat bahwa bass perlu dihubungkan ke amplifier untuk menghasilkan musik dan memperkuat suaranya. Dengan demikian, itulah perbedaan antara gitar dan bass dalam beberapa aspek yang dapat menjadi pengetahuan Anda. Apakah ada yang Anda lebih sukai di antara keduanya?</p> <br></br>
    
      <WorkImage src="https://d1aeri3ty3izns.cloudfront.net/media/33/330997/600/preview_2.jpg" />

      <AspectRatio maxW="640px" ratio={1.7} my={4}>
        <iframe
          src="https://www.youtube.com/embed/tV992Sdk67E?si=bTGjegmb6dqX9qvf"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </AspectRatio>

      <p>Nah kalau bass cara metiknya adalah dengan posisi 4 jari ready untuk on chord dan jempol berada diatas dengan singkup L berbeda dengan gitar kalau gitar sudah ada pada senar alias berada ditengahnya, kalau bass masih diatas dengan posisi fingering yang ready.</p> <br></br>

      <p>Kurang lebih seperti itu mohon maaf kalau gajelas, kalau bermanfaat artikelnya ya di like share and folow <a href="https://pyoseph.medium.com"><u>@pyoseph</u></a> di medium. dan follow ig aing di @_yoseph28. Mohon maaf bila ada salah kata, peace!</p>

      <br></br>
    </Container>
  </Layout>
)

export default Blog
export { getServerSideProps } from '../../components/chakra'
