import {
  Container,
  Badge
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { Title, WorkImage } from '../../components/blog'
import P from '../../components/paragraph'

const Blog = () => (
  <Layout title="Emang bener Figma Berbayar? Rudi Gong!
">
    <Container>
      <Title>
     Cara Upload Website dengan Mudah ke Netlify <Badge> Jan 29,2024</Badge>
      </Title>
      <P>
      Gimana sih bang caranya, gw punya html css website tapi gatau cara upload biar online tanpa harus bayar ?
</P>
      <br></br>
       <WorkImage src="https://miro.medium.com/v2/resize:fit:1100/format:webp/1*8H79qqczpZdIhQrj6lO5fQ.png" />
      <p>Tanpa banyakan cerita langsung ke step by stepnya aja

</p>
       <br></br>
      <b>Membuka Website Netlify</b>
      <br></br>
      <p>Pertama tama kamu harus punya internet pastinya dan siapkan dulu folder berisikan file website yang ingin kamu upload ke netlify. Link Netlify ada disini <u><a href="https://netlify.app">Netlify.app</a></u>
      </p>
<br></br>
      <b>Mendaftar ke Netlify</b>
      <p>Setelah kamu buka situsnya sekarang waktunya daftar ke netlify, caranya dengan klik button Signup pada Kanan atas kalau di Mobile langsung aja pencet button yang gede tulisannya deploy to netlify</p> <br></br>
      <WorkImage src="https://miro.medium.com/v2/resize:fit:828/format:webp/1*g4xe8RnuSz3LzqyjbSVB7Q.png" />
      <p>Setelah itu kalian bisa langsung signup aja bisa menggunakan Github, Gitlab, Bitbucket, ataupun menggunakan Email. pastikan anda menggunakan email yang aktif ya teman.<br></br> <br></br> </p>
      <WorkImage src="https://miro.medium.com/v2/resize:fit:828/format:webp/1*tFY5OaNtHM8F0iYNuH9hIg.png" alt="mediumpost-2" />
      <p>
      Setelah itu login aja langsung caranya sama kok biasanya sebelum login kalian diminta untuk verifikasi email kalian terlebih dahulu / mengaktivasi emailnya.
      </p><br></br>

      <b>Dashboard Netlify</b> 
      <br></br><br></br>
      <WorkImage src="https://miro.medium.com/v2/resize:fit:1100/format:webp/1*lcnZZpr9dVodLFaTTyePtw.png" alt="mediumpost-3" />
      <p>Setelah sampai di step ini kalian langsung saja klik Add New Site atau (Tambahkan situs baru — INA) dan pilih opsi deploy manually karena kita akan deploy manual sebagai pemula, karena kita tidak mau menyulitkan diri dengan github dan sebagai macamnya jika kita belum mempelajari dasarnya.</p> <br></br>
      <WorkImage src="https://miro.medium.com/v2/resize:fit:786/format:webp/1*CBVb7F2fGKxWdsVtUKag7w.png" alt="mediumpost-4" />
      <b>Upload Situs Sekarang Juga.</b>
      <p>Setelah menekan deploy manually pada opsi add new site langsung saja anda bisa drag and drop folder yang berisikan file situs yang ingin anda upload simple bukan, anda bisa drag and drop dan bisa juga klik browse to upload seperti yang tertera digambar di bawah ini</p> <br></br>
      <WorkImage src="https://miro.medium.com/v2/resize:fit:1100/format:webp/1*DdV5CfVJabJ1dr1l0XOz7Q.png" alt="mediumpost-5" />
      <p>Drag and drop file ke netlify sangatlah mudah ada caranya dibawah ini :</p>
      <br></br>
      <WorkImage src="https://i.ibb.co/gtNpGjj/image.png" />
      <p><u><a href='https://www.youtube.com/shorts/7GRTHeCWufY?source=yosephhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh'>Tonton Videonya Sekarang juga</a></u></p>
      _________________________________________________ _______________________
      <br></br>
      <p>Setelah Deploy kalian akan menghadapi interface yang sama dengan gambar dibawah ini</p><br></br>
      <WorkImage src="https://miro.medium.com/v2/resize:fit:1100/format:webp/1*QbMGEHb7xf9mVPnWjEuLeA.png" alt="mediumpost-5" />
      <p>Kalian Bisa langsung saja klik Site overview untuk Details dari situs yang dideploy / diupload. <a href='https://app.netlify.com/sites/situsmu/overview'> <u>(https://app.netlify.com/sites/situsmu/overview)</u></a></p> <br></br>
      <WorkImage src="https://miro.medium.com/v2/resize:fit:1100/format:webp/1*R_BMEBIKrzhMYYn0oLRISw.png" alt="mediumpost-5" />
      <p>Setelah itu kalau kalian mau mengubah nama situsnya tinggal klik Site Configuration untuk detail lebih jauh mengenai situs yang sudah kalian upload.</p> <br></br>
      <WorkImage src="https://miro.medium.com/v2/resize:fit:1100/format:webp/1*eCvZYzjFBXvKpuIviz0hKA.png" alt="mediumpost-5" />
      <p>nah sampai sini jika kalian mau liat hasil dari deploy website tadi langsung klik saja tulisan hyperlink yang ada dibawah tulisan “Configuration for your-sites” yang tebal putih itu, seperti yang ada di SS diatas.</p> <br></br>
      <WorkImage src="https://miro.medium.com/v2/resize:fit:1100/format:webp/1*weshRFhYUwoTDMk7XE5YzA.png " alt="mediumpost-5" />
      <p>Kalian bisa scroll sedikit kebawah dan kalian akan melihat section site details dan ada menu change site name untuk mengganti nama situs, kalian bisa langsung saja pencet itu</p><br></br>
      <WorkImage src="https://miro.medium.com/v2/resize:fit:1100/format:webp/1*-7EIlsGeLTvGrI22Ai-0CQ.png" alt="mediumpost-5" />
      <p>dan kalian bisa ubah nama situsnya sesuai dengan keinginan kalian, setelah itu tekan save.
        Sudah deh Websitenya sudah terupload dengan rapih sesuai file html kamu, sekarang kamu bisa lihat websitenya sesuai dengan link yang dicustom tadi di sitename dengan domain .netlify.app <br></br><br></br>
        Contoh website saya : <a href="https://pyoseph.netlify.app">Yoseph Portfolio</a><br></br><br></br>
        Segitu dulu tutorial Upload website ke Netlify kali ini, kalau ada yang mau ditanyakan bisa email ke yoseph@skiff.com atau dm gw ke ig @ _yoseph28. Kalau suka ya di Clap, kalau senang ya di Share, kalau tidak suka tinggal skip.
        </p>


      <br></br>
    </Container>
  </Layout>
)



export default Blog
export { getServerSideProps } from '../../components/chakra'
