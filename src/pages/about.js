import { graphql } from "gatsby";
import Link from "../components/link";
import React from "react";
import Footer from "../components/footer";
import Layout from "../components/layout";
import LightNavbar from "../components/light-navbar";
import "../styles/global.scss";
import url from "../urls";
import Img from "gatsby-image";

const About = ({ location, data }) => {
  const bannerAboutTOKI = data.aboutTOKI.childImageSharp.fluid;
  return (
    <Layout>
      <LightNavbar location={location} />
      <div className="container offset-navbar mb-4 content">
        <h1 className="offset-navbar text-center pt-4">About Us</h1>
        <Img fluid={bannerAboutTOKI} className="mb-3" />
        <div className="text-justify">
          <p>
            <strong>Tim Olimpiade Komputer Indonesia</strong>, atau yang sering
            disingkat “TOKI”, adalah sebuah tim yang terdiri dari siswa-siswa
            terbaik sekolah menengah di Indonesia yang dipersiapkan khusus untuk
            mewakili Indonesia bertanding dalam ajang olimpiade informatika
            tingkat internasional.
          </p>
          <p>
            Proses pemilihan siswa-siswi tersebut tidaklah singkat dan mudah.
            Wakil dari seluruh sekolah menengah di Indonesia harus melalui
            seleksi tingkat kota, propinsi, kemudian nasional. Dari seleksi
            tingkat nasional tersebut barulah didapatkan sekitar 30 siswa-siswi
            yang berhak melaju ke pelatihan nasional (pelatnas).
          </p>
          <p>
            Pada Pelatnas, siswa-siswa dibekali dengan materi-materi dan ditempa
            lagi secara teknis maupun psikologis. Pelatnas yang diadakan 3-4
            kali dalam satu tahun tersebut pada akhirnya menyisakan 4 siswa yang
            maju ke ajang internasional.
          </p>
          <p>
            Adapun ajang internasional tersebut adalah{" "}
            <strong>International Olympiad in Informatics</strong> atau yang
            sering disingkat IOI. Pada tahun 1995, dengan seorang siswa (Wirawan
            Purwanto) dan seorang pembina (Joko W. Saputro, Ph.D), TOKI
            mengawali rangkaian perjalanan prestasi TOKI di IOI. Sejak itu,
            hingga 2019, secara keseluruhan 65 medali IOI telah berhasil
            dikumpulkan yang terdiri dari 3 medali emas, 24 medali perak, dan 38
            medali perunggu. Lihat halaman “
            <Link to={url.HALL_OF_FAME}>Hall of Fame</Link>” untuk mengetahui
            rinciannya. Tiga emas yang pernah diraih adalah atas nama Andy
            Kurnia (IOI 1997), Irvan Jahja (IOI 2008), dan Abdul Malik
            Nurrokhman (IOI 2019).
          </p>
          <p>
            Selain IOI, berawal dari inisiatif beberapa negara Asia Pasifik,
            pada tahun 2007 <strong>Asia-Pacific Informatics Olympiad</strong>{" "}
            (APIO) mulai diselenggarakan. Perolehan medali TOKI di ajang
            tersebut hingga 2018 adalah 44 medali yang terdiri dari 1 medali
            emas, 12 medali perak, dan 32 medali perunggu. Satu emas yang pernah
            diraih adalah atas nama Irvan Jahja (APIO 2008).
          </p>
          <p>
            Materi utama yang diujikan pada olimpiade informatika (baik pada
            seleksi TOKI maupun pada ajang IOI dan APIO) adalah pemrograman,
            struktur data, dan algoritma. Lihat halaman “
            <Link to={url.DOWNLOADS}>Downloads</Link>" untuk mengenal lebih
            dalam materi tersebut.
          </p>
        </div>
      </div>
      <Footer />
    </Layout>
  );
};
export const pageQuery = graphql`
  query {
    aboutTOKI: file(relativePath: { eq: "AboutTOKI.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

export default About;
