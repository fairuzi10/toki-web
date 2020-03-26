import React from "react";
import Footer from "../../components/footer";
import Layout from "../../components/layout";
import LightNavbar from "../../components/light-navbar";
import Img from "gatsby-image";
import { graphql } from "gatsby";
import file from "./files/pemrograman-kompetitif-dasar.pdf";

const BukuPemrogramanKompetitifDasarPage = ({ data, location }) => {
  const { pkdCover } = data;
  return (
    <Layout>
      <LightNavbar location={location} />
      <div className="container offset-navbar mb-4 content">
        <div className="text-center">
          <h2 className="py-3">
            Buku Persiapan OSN Komputer: Pemrograman Kompetitif Dasar
          </h2>
          <h5>PEMROGRAMAN KOMPETITIF DASAR (PKD)</h5>
          <div className="img-center">
            <div className="img-300">
              <Img fluid={pkdCover.childImageSharp.fluid} />
            </div>
          </div>
          <h6 className="mb-3">
            <a href={file}>
              <strong>&lt;Download di sini&gt;</strong>
            </a>
          </h6>
        </div>

        <h3>Tentang PKD</h3>
        <p>
          PKD merupakan buku persiapan OSN komputer/informatika yang dapat
          diunduh secara <strong>gratis</strong>. Kami mempersiapkan buku ini
          agar semua peserta OSN memiliki kesempatan belajar yang sama, terutama
          bagi mereka yang masih kesulitan mendapatkan akses guru pengajar.
          Konten buku ini dirancang sesuai dengan{" "}
          <strong>silabus OSN terbaru</strong>.
        </p>
        <p>
          Buku ini fokus ke <strong>algoritma</strong>, bukan buku untuk
          mempelajari bahasa pemrograman. Maka, pembaca buku ini diharapkan{" "}
          <strong>sudah mengerti dasar-dasar membuat program</strong>{" "}
          (disarankan mengerti bahasa C++ ataupun Pascal). Apabila Anda belum
          menguasai kompetensi dasar tersebut, kami menyarankan Anda untuk
          mempelajarinya terlebih dahulu. Sumber pembelajaran yang kami anjurkan
          adalah TLX Training Gate (
          <a href="https://tlx.toki.id/training">
            https://tlx.toki.id/training
          </a>
          ). Seluruh kompetensi dasar yang diperlukan dibahas pada kursus
          berjudul “Pemrograman Dasar”.
        </p>
        <h3>Mendapatkan PKD</h3>
        <p>
          Saat ini, buku PKD tersedia dalam bentuk elektronik dan dapat diunduh
          pada tautan di atas secara gratis. Namun untuk sekarang buku ini belum
          tersedia dalam versi cetak. Apabila Anda mengetahui orang lain yang
          akan mendapatkan manfaat dari buku ini, tidak perlu ragu untuk
          membagikannya kepada mereka!
        </p>
        <h3>Tim Penulis</h3>
        <p>
          Buku ini ditulis oleh kakak-kakak alumni TOKI yang pernah menjuarai
          OSN dan IOI (International Olympiads of Informatics), dan juga
          beberapa kali berkontribusi sebagai penulis soal OSN!
        </p>
        <p>
          Penulis utama dari buku ini adalah William Gozali (TOKI 2011) dan
          Alham Fikri Aji (2010). Selain itu, banyak pihak yang terkait dalam
          penulisan buku ini. Terima kasih kepada seluruh pihak yang terlibat
          dan mewujudkan terbitnya buku ini. Mereka adalah:
        </p>
        <p>
          <strong>Kontributor</strong>
        </p>
        <ul>
          <li>Agus Sentosa Hermawan (NUS),</li>
          <li>Ali Jaya Meilio Lie (Université de Grenoble Alpes),</li>
          <li>Arianto Wibowo (IA-TOKI),</li>
          <li>Ashar Fuadi (IA-TOKI),</li>
          <li>Cakra Wishnu Wardhana (UI),</li>
          <li>Jonathan Irvin Gunawan (Google),</li>
          <li>Maximilianus Maria Kolbe Lie (BINUS),</li>
          <li>Muhammad Ayaz Dzulfikar (UI),</li>
          <li>Muhammad Fairuzi Teguh (UI),</li>
          <li>Reynaldo Wijaya Hendry (UI)</li>
        </ul>
        <p>
          <strong>Penyunting</strong>
        </p>
        <ul>
          <li>Ilham Winata Kurnia (Google),</li>
          <li>Suhendry Effendy (NUS)</li>
        </ul>
        <p>
          <strong>Desain</strong> <strong>dan tata letak</strong>
        </p>
        <ul>
          <li>Ali Jaya Meilio Lie,</li>
          <li>Pusaka Kaleb Setyabudi (Google)</li>
        </ul>
      </div>

      <Footer />
    </Layout>
  );
};
export const pageQuery = graphql`
  query {
    pkdCover: file(relativePath: { eq: "pkd.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

export default BukuPemrogramanKompetitifDasarPage;
