import { graphql } from "gatsby";
import Img from "gatsby-image";
import React from "react";
import DarkNavbar from "../components/dark-navbar";
import Footer from "../components/footer";
import Layout from "../components/layout";
import "../styles/global.scss";
import "./about-ia-toki.scss";

const AboutIATOKI = ({ location, data }) => {
  const bannerAboutIATOKI = data.aboutIATOKI.childImageSharp.fluid;
  return (
    <Layout>
      <DarkNavbar location={location} />
      <div className="about-ia-toki">
        <div className="banner">
          <Img fluid={bannerAboutIATOKI} className="banner__img" />
          <h1 className="banner__text">Ikatan Alumni TOKI</h1>
        </div>
        <div className="container mb-4">
          <h1 className="text-center pt-4">
            TODO banner memajukan Indonesia ...
          </h1>
          <h3 className="text-center">ALUMNI SPOTLIGHTS</h3>
          <h4>TODO Carousel</h4>
          <h4>TODO Our Activities</h4>
          <h4>Penjelasan IA TOKI</h4>
          <p>
            <strong>Ikatan Alumni TOKI</strong> bersifat independen atau
            berjenis nirlaba yang akan mewadahi alumni Tim Olimpiade Komputer
            Indonesia untuk mengembangkan potensinya dalam memajukan
            Perkembangan Teknologi Informatika.
          </p>
          <p>
            Untuk menjalankan Visi &amp; Misi IA TOKI, IA TOKI memiliki Tujuan
            &amp; Kegiatan IA TOKI, yang didanai dari Sumber Pendapatan IA TOKI.
          </p>
          <p>
            Ikatan Alumni TOKI diurus oleh Kepengurusan IA TOKI dan memiliki
            anggota dari Keanggotaan IA TOKI .
          </p>
          <div id="visi-misi">
            <h4>Visi &amp; Misi IA TOKI</h4>
            <h5>Visi</h5>
            <p>Memajukan Indonesia melalui Informatika.</p>
            <ul>
              <li>Membangun Ekosistem Industri IT di Indonesia.</li>
              <li>Mengubah Bisnis di Indonesia dengan IT.</li>
              <li>Mengubah Pemerintahan di Indonesia dengan IT.</li>
              <li>Mengubah Akademisi dan Pendidikan di Indonesia dengan IT.</li>
              <li>Mengubah Komunitas di Indonesia dengan IT.</li>
            </ul>
            <h4>Misi</h4>
            <h5>Misi 5 Tahun (2020)</h5>
            <ul>
              <li>Meningkatkan pemahaman akan pemanfaat IT.</li>
              <li>Memunculkan talent IT dengan standar kelas dunia.</li>
              <li>
                Menyelenggarakan International Olympiad in Informatics (
                <a href="http://www.ioinformatics.org/">IOI</a>) di Indonesia.
              </li>
            </ul>
          </div>

          <div id="tujuan-kegiatan">
            <h4>Tujuan &amp; Kegiatan IA TOKI</h4>
            <h5>Tujuan</h5>
            <ol>
              <li>
                Meningkatkan peran serta alumni dalam pengembangan kemampuan
                informatika pada generasi muda bangsa Indonesia.
              </li>
              <li>Mempererat silahturami antar Ikatan Alumni TOKI.</li>
              <li>
                Mengembangkan kecerdasan, kreativitas, serta nasionalisme
                anggota terhadap bangsa Indonesia.
              </li>
            </ol>
            <h5>Kegiatan</h5>
            <ol>
              <li>
                Menyelenggarakan kegiatan untuk meningkatkan kemampuan
                pemrograman komputer generasi muda.
              </li>
              <li>
                Melakukan usaha pengumpulan dana, baik melalui iuran dan
                sumbangan anggota, serta usaha lain yang sah.
              </li>
              <li>
                Memfasilitasi anggota untuk menyalurkan minatnya di bidang
                Informatika.
              </li>
              <li>
                Menyelenggarakan kegiatan-kegiatan lain yang diputuskan dalam
                Rapat Akbar.
              </li>
            </ol>
          </div>

          <div id="sumber-pendapatan">
            <h4>Sumber Pendapatan IA TOKI</h4>
            <p>Keuangan Ikatan Alumni TOKI diperoleh dari:</p>
            <ol>
              <li>Donasi yang sah dan tidak mengikat.</li>
              <li>
                Penerimaan-penerimaan lain yang didapat melalui usaha-usaha yang
                tidak bertentangan dengan usaha dan tujuan Ikatan Alumni TOKI.
              </li>
            </ol>
          </div>

          <div id="kepengurusan">
            <h4>Kepengurusan IA TOKI</h4>
            <ol>
              <li>
                Pengurus Perkumpulan Ikatan Alumni TOKI terdiri dari:
                <ol>
                  <li>Rapat Akbar</li>
                  <li>Pengurus Inti</li>
                  <li>Dewan Penasihat yang terdiri dari Ketua dan Penasihat</li>
                </ol>
              </li>
              <li>
                Rapat Akbar adalah rapat yang diselenggarakan sekurang-kurangnya
                1 kali dalam 1 tahun oleh Pengurus Inti dan merupakan kekuasaan
                tertinggi dalam Ikatan Alumni TOKI.
              </li>
              <li>
                Pengurus Inti adalah badan eksekutif dari Asosiasi Alumni TOKI.
                Pengurus Inti dipilih melalui Rapat Akbar dan disetujui oleh
                lebih dari 50% peserta yang hadir.
              </li>
              <li>
                Dewan Penasihat adalah badan yang memberikan pertimbangan dan
                melakukan pengawasan terhadap Pengurus Inti serta bertanggung
                jawab kepada Rapat Akbar.
              </li>
            </ol>
            <blockquote>
              <p>
                Untuk operasional harian, Ikatan Alumni TOKI menunjuk seorang
                Koordinator Alumni yang akan bertanggung jawab atas operasional
                harian. Koordinator alumni dipilih dari salah satu anggota
                Ikatan Alumni TOKI.
              </p>
            </blockquote>
          </div>

          <div id="keanggotaan">
            <h4>Keanggotaan</h4>
            <p>Yang disebut anggota Ikatan Alumni TOKI adalah:</p>
            <ol>
              <li>
                Mereka yang pernah mendapatkan medali pada ajang Olimpiade Sains
                Nasional Bidang Komputer dan pernah mengikuti pelatnas TOKI,
                sudah lulus SMA, dan tidak bisa lagi mengikuti proses seleksi{" "}
                <a
                  href="https://id.wikipedia.org/wiki/Olimpiade_Sains_Nasional"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  OSN
                </a>
                ,{" "}
                <a
                  href="http://apio-olympiad.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  APIO
                </a>
                , atau{" "}
                <a
                  href="http://www.ioinformatics.org"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  IOI
                </a>
                .
              </li>
              <li>
                Mereka yang mendaftarkan diri kepada Pengurus Inti dan bersedia
                berkontribusi pada Ikatan Alumni TOKI serta disetujui oleh Rapat
                Akbar Ikatan Alumni TOKI.
              </li>
            </ol>
          </div>
        </div>
      </div>
      <Footer />
    </Layout>
  );
};
export const pageQuery = graphql`
  query {
    aboutIATOKI: file(relativePath: { eq: "TOKICamp2020Color.jpeg" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

export default AboutIATOKI;
