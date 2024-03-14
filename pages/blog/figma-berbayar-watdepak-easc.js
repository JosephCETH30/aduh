import {
  Container,
  Badge,
  AspectRatio
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { Title, WorkImage } from '../../components/blog'
import P from '../../components/paragraph'

const Blog = () => (
  <Layout title="Emang bener Figma Berbayar? Rudi Gong!
">
    <Container>
      <Title>
      Emang bener Figma Berbayar? Rudi Gong! <Badge> Jan 29,2024</Badge>
      </Title>
      <P>
      Saya sempat mendengar ada isu atau ada omongan “orang” yang mengatakan bahwa figma berbayar, rugi dong kalau  bayar.</P>
      <br></br>
       <WorkImage src="https://miro.medium.com/v2/resize:fit:1100/format:webp/1*bwbuoj-sQnHtxXUYPNh4BQ.jpeg" />
      <p>Pada postingan kali ini gw bakal bahas mengenai Figma berbayar atau enggak, Karena gw sempet denger isu mengenai figma bayar dulu baru bisa pakai. “yang bener aje rugi dong”</p>
       <br></br>
      <b>Figma bisa dipakai Tanpa bayar dan bisa dipakai Collaboration</b>
      <br></br>
      <p>Figma bisa dipakai Tanpa bayar dan bisa dipakai Collaboration dengan klien, guru, maupun dengan teman. yang artinya ngapain bayar orang gratis “yang bener aje rugi dong”. Caranya gimana untuk mengakses fitur free tersebut alias mengubah Figma kita menjadi fully Free? , yaa kalau sudah ngejudge duluan bahwa figma berbayar tanpa research fix kalau disuruh jadi buzzer pasti langsung mau.
      </p>
<br></br>
      <b>Figma Education</b>
      <p>ok guys jadi figma punya bagan tersendiri untuk para pelajar baik sekolah maupun kuliah yaitu namanya Figma Education kita bisa daftar di websitenya langsung official figma : <u><a href='https://www.figma.com/education/'> Figma Official Website </a></u> </p> <br></br>
      <WorkImage src="https://miro.medium.com/v2/resize:fit:1100/format:webp/1*Z_391i59VVUeABtNoYEbCw.png" />
      <p>Figma ini bisa mengubah semua akses yg berbayar menjadi free tapi masih dalam lingkup atau tipe Education. Cara daftarnya gampang kok tinggal, <br></br> <br></br>
      - Login dulu ke akun figma kamu di https://figma.com dan langsung redirect aja, atau newtab ke https://www.figma.com/education/ dan itu otomatis ke link akun figma mu. <br></br>
      - Klik Get verified Tombol hitam besar yang ada di page seperti gambar diatas <br></br>
      - Nanti anda akan diarahkan ke page berikut ini :</p> <br></br>
      <WorkImage src="https://miro.medium.com/v2/resize:fit:640/format:webp/1*7dy1fk2c3Yto4wz21HYGLg.png" alt="mediumpost-2" />
      <p>
        - Isi Form Requirement diatas ikuti saja seperti yang saya Isikan oke biar mudah. <br></br>
        - Are you a student, educator, or administrator? (pilih Student) <br></br>
        - What type of institution do you attend or work for? (pilih K12) <br></br>
        - Klik I am Agree pada The information you submit here, as well as your use of and access to the Figma Education plan, is governed by our Terms of Service and Privacy Policy. By submitting this form and using the Figma education plan, you confirm that you are at least 13 years old. <br></br>
        - Klik lagi I am Agree pada I confirm I am a student, educator, or administrator enrolled or working at the institution I provided. You must retain proof of enrollment which Figma may ask for to verify your eligibility to access the Figma Education plan. If you have misrepresented your eligibility to access the Figma Education plan in violation of our terms of service, you agree to pay Figma for any service fees that were initially waived due to the information you provided about your status as a student or educator. <br></br>
        - Lalu submit dan Selamat anda sudah <a href='https://wa.me/6281387577491?text=nih sep ketemu, nomor e-money gw (tulis juga Emoney apa kayak gopay atau dana atau apalah.) : 08'>-money for you-</a> terverifikasi sebagai user figma education, dapat menggunakan fitur yang berbayar dalam lingkup education.

      </p>

      <AspectRatio maxW="640px" ratio={1.7} my={4}>
        <iframe
          src="https://www.youtube.com/embed/RVR9-v5LIYI?si=aAVKzw-Iwo8C_xtO"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </AspectRatio>

      <br></br>
    </Container>
  </Layout>
)

export default Blog
export { getServerSideProps } from '../../components/chakra'
