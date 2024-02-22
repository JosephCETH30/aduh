import {
  Container,
  Badge,
  AspectRatio
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { Title, WorkImage } from '../../components/blog'
import P from '../../components/paragraph'

const Blog = () => (
  <Layout title="Cara Mudah membuka File PHP menggunakan XAMPP metode Localhost + Free file untuk ujicoba.">
    <Container>
      <Title>
      Cara Mudah membuka File PHP menggunakan XAMPP metode Localhost + Free file untuk ujicoba. <Badge> Feb 22,2024</Badge>
      </Title>
      <P>
      Pada Artikel kali ini gw akan membahas tentang Bagaimana sih caranya membuka file PHP dengan metode Localhost menggunakan Xampp secara mudah. langsung saja kepada pembahasannya
      </P> <br></br>
      <WorkImage src="../images/contents/netlifypost-xamppopen.png" alt="xamppopen1" />
      <b>Siapkan Dulu Folder berisi File atau File yang ingin kita buka di Localhost</b>
      <br></br>
      <p> Yup benar banget kita siapkan dulu File yang mau kita buka di localhost dengan xampp, ingat file tersebut harus bertype file PHP atau HTML dengan extend PHP (.PHP)

      <br></br><br></br>
      Pasti kalian Bertanya tanya juga kan kenapa kalau kita buka langsung file php dengan cara copas path ke browser malah error dan menampilkan kode yang transparan alias langsung dari filenya.<br></br><br></br>
      
      Hal Tersebut beralasan bahwa memang kalau kita ingin membuka file PHP diharuskan menggunakan Xampp dengan path htdocs agar bisa terlihat di localhost, langsung saja ke caranya.<br></br><br></br>

</p>

      <b>Download dan Buka Xampp (Bebas Versinya yang mana aja yang penting sesuai OS)</b> <br></br><br></br>

      <WorkImage src="https://dibimbing-cdn.sgp1.cdn.digitaloceanspaces.com/1690444160221-Cara%20Install%20XAMPP.jpeg.webp" alt="mediumpost-1" />

      <AspectRatio maxW="640px" ratio={1.7} my={4}>
        <iframe
          src="https://www.apachefriends.org/download.html"
          title="Xampp"
          frameBorder="0"
        ></iframe>
      </AspectRatio>

      <p>Langsung saja Pencet Download, Setelah terdownload buka File dan langsung install saja dan tekan aja next next next kalau memang kurang paham alias gw juga mager kali baca satu satu karena ya yang penting keinstall.</p> <br></br>

      <p>Setelah itu Langsung Buka saja Xamppnya dan Nanti Tampilannya akan Seperti ini </p> <br></br>
      <WorkImage src="https://i.ibb.co/bLB00Hm/image.png" />

      <p>Setelah Xampp Terinstall dan Terbuka setelah ini siapkan saja file php yang mau dibukanya, langsung taruh di direktori /xampp/htdocs biasanya itu ada di bagian this pc.</p> <br></br>

      <p>Seperti File yang saya punya, saya sudah siapkan dan taruh di path htdocs di /xampp/.</p> <br></br>
      <WorkImage src="https://i.ibb.co/GcxFMVs/contohfilemanager.png" />
      <p>File Login register diatas hanya percobaan untuk dibuka di localhost, jika kalian ingin mencobanya juga dengan file yang sama. bisa kok kalian download filenya secara gratis di link berikut - <a href="https://filemejoseph.netlify.app/download/login-register.rar"><u>https://filemejoseph...</u> (Link aman 100% karena gamungkin juga saya kasih link phis*ng nanti nama saya bakal jelek wkwkk lebih ke arah rekam jejak si dah lanjut)</a></p><br></br>

      <p>Lanjut setelah sudah kita posisikan filenya di path yang benar yaitu di htdocs di dalam xampp langsung saja kita nyalakan Xamppnya dengan konfigurasi Apache dan MySQL start seperti gambar dibawah ini samakan saja konfigurasinya oke.</p><br></br>

      <p>dan Kalau sudah Start xamppnya kalian bisa langsung saja hapalkan nama path yang ada di htdocs tadi, misalnya /login-register/registration.php nah itu langsung saja </p><br></br>

      <WorkImage src="https://i.ibb.co/CtSvNrV/image.png" />

      <p>kalian bisa langsung saja buka pathnya seperti contoh di saya ini. saya buka file nya dengan path /login-register/login.php atau register.php</p><br></br>

      <WorkImage src="https://i.ibb.co/Y8ZdqHz/image.png" />

      <p>Nah kan filenya sudah terbuka di localhost, Simple banget kan. kalau mau ngubah databasenya bisa ke file database phpnya lalu ganti username db ke username yg baru di database kalian di localhost/phpmyadmin</p><br></br>

      <p>Kurang lebih seperti itu mohon maaf kalau gajelas, kalau bermanfaat artikelnya ya di like share and folow <a href="https://pyoseph.medium.com"><u>@pyoseph</u></a> di medium. dan follow ig aing di @_yoseph28. Mohon maaf bila ada salah kata, peace!</p>

      <br></br>
    </Container>
  </Layout>
)

export default Blog
export { getServerSideProps } from '../../components/chakra'
