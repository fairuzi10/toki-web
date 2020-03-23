import React from "react";
import Footer from "../components/footer";
import Layout from "../components/layout";
import LightNavbar from "../components/light-navbar";
import "./downloads.scss";

const SilabusMateriOSN = () => {
  return (
    <Layout>
      <LightNavbar />
      <div className="container offset-navbar mb-4 content">
        <h2 className="pt-4">Persiapan OSN Informatika</h2>
        <p>
          Kami Ikatan Alumni TOKI (IA-TOKI) mengumpulkan sumber-sumber yang
          dapat Anda manfaatkan untuk membantu persiapan OSK/OSP/OSN
          Komputer/Informatika (Semenjak 2020 disebut juga KSN-K, KSN-P, atau
          KSN). Tujuan kami adalah agar setiap siswa memiliki kesempatan yang
          sama dalam berkompetisi, terutama teman-teman yang mungkin belum
          memiliki akses fasilitas seperti guru, senior yang pernah menjuarai
          olimpiade, ataupun dana untuk mengikuti pelatihan OSN/KSN.
        </p>

        <blockquote className="blockquote">
          <p>
            Berikut adalah{" "}
            <a href="/Kisi-kisi%20Materi_OSN_Informatika-Komputer_v.2018.pdf">
              Silabus Materi OSN/KSN tahun 2018
            </a>
            . Pada tahun ini, ada materi baru yang masuk ke OSN/KSN, yaitu{" "}
            <em>Minimum Spanning Tree</em> dan <em>Shortest Path</em>.
          </p>
        </blockquote>

        <h3 id="osp">Persiapan OSK/OSP (KSN-K/KSN-P)</h3>

        <p>
          Pada tingkat kota/provinsi, Anda akan mengerjakan soal-soal matematika
          dan logika.
        </p>

        <h4 id="materi-matematika">Materi Matematika</h4>

        <p>
          Pada OSK dan OSP anda diminta menyelesaikan soal matematika dan
          logika.
        </p>

        <table className="table table-stripped">
          <thead>
            <tr>
              <th>Sumber</th>
              <th>Bentuk</th>
              <th>Catatan</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <a href="https://www.wardayacollege.com/matematika/">
                  Web Wardaya College
                </a>
              </td>
              <td>Video</td>
              <td>
                Video pembelajaran matematika dasar oleh Anton Wardaya. Tidak
                semua materi pada web tersebut akan diujikan pada olimpiade
                informatika. Pelajari bab-bab yang terkait seperti Aritmatika,
                Logika dan Peluang.
              </td>
            </tr>
          </tbody>
        </table>

        <h4 id="materi-koding">Materi Pemrograman</h4>

        <p>
          Pada OSK, Anda akan diminta membaca <em>pseudocode</em> dan menebak
          output. Pada OSP, Anda akan diberikan soal pemrograman dan harus
          diselesaikan dengan program tertulis.
        </p>

        <table className="table table-stripped">
          <thead>
            <tr>
              <th>Sumber</th>
              <th>Bentuk</th>
              <th>Catatan</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <a href="https://github.com/ia-toki/training-gate-id-pdf/archive/master.zip">
                  Slide Training Gate oleh TOKI
                </a>
              </td>
              <td>Slide</td>
              <td>
                Ini adalah <em>slide</em> yang berisi pembelajaran pemrograman
                dasar menggunakan Pascal.
              </td>
            </tr>
            <tr>
              <td>
                <a href="https://www.youtube.com/playlist?list=PL42SmLrOBFuRoDXatrv1PajCbt2ejb2Gn">
                  Seri Persiapan OSN/KSN Informatika Pemrograman
                </a>
              </td>
              <td>Video</td>
              <td>
                <em>Playlist</em> Youtube berisi materi pemrograman C++. Karena
                disiapkan langsung oleh IA-TOKI, materi yang disampaikan akan
                mengikuti kurikulum di TLX Training Gate
              </td>
            </tr>
            <tr>
              <td>
                <a href="https://www.youtube.com/playlist?list=PLF82-I80PwDNKmeyYBe4CkEj7excOdy7f">
                  Belajar C++ oleh Guntur Budi
                </a>
              </td>
              <td>Video</td>
              <td>
                Merupakan sebuah <em>playlist</em> Youtube yang berisi
                video-video untuk memulai pemrograman dalam bahasa C++.
              </td>
            </tr>
          </tbody>
        </table>

        <h4 id="osp-latihan">Latihan Soal</h4>

        <p>
          Untuk mengasah kemampuan logika Anda, disarankan banyak berlatih
          mengerjakan soal-soal.
        </p>

        <table className="table table-stripped">
          <thead>
            <tr>
              <th>Sumber</th>
              <th>Bentuk</th>
              <th>Catatan</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <a href="/arsip">Arsip Soal Olimpiade</a>
              </td>
              <td>Arsip Soal</td>
              <td>
                Download soal-soal OSK - OSP - OSN (KSN) dalam format pdf.
              </td>
            </tr>
            <tr>
              <td>
                <a href="https://www.kujawab.com/">Kujawab.com</a>
              </td>
              <td>Arsip Soal</td>
              <td>
                Tempat berdiskusi dan jawaban-jawaban soal-soal OSK/OSP/OSN/KSN
                dari sesama pengguna.
              </td>
            </tr>
            <tr>
              <td>
                <a href="https://www.youtube.com/channel/UCe1X38BE3kIjsoxqv2r8oog">
                  Catatan Olimpiade Informatika
                </a>
              </td>
              <td>Video</td>
              <td>
                Akun Youtube yang memuat pembahasan soal-soal OSK dan OSP
                terdahulu.
              </td>
            </tr>
          </tbody>
        </table>

        <h3 id="osn">Persiapan OSN/KSN</h3>

        <p>
          Berbeda dengan OSK/OSP, pada tingkat nasional Anda akan menyelesaikan
          soal praktek, yaitu pemrograman. OSN/KSN dilaksanakan selama 2 hari,
          yang mana masing-masing hari akan terdapat 3-4 soal pemrograman yang
          harus Anda kerjakan dalam 5 jam.
        </p>

        <h4 id="materi-algo">Belajar Algoritma</h4>

        <p>
          Pada OSN/KSN, Anda akan diuji kemampuan memecahkan masalah secara
          efisien dan dituliskan dalam bentuk program.
        </p>

        <table className="table table-stripped">
          <thead>
            <tr>
              <th>Sumber</th>
              <th>Bentuk</th>
              <th>Catatan</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <a href="https://github.com/ia-toki/training-gate-id-pdf/archive/master.zip">
                  Slide Training Gate oleh TOKI
                </a>
              </td>
              <td>Slide</td>
              <td>
                Ini adalah <em>slide</em> yang berisi pembelajaran pemrograman
                kompetitif dasar.
              </td>
            </tr>
            <tr>
              <td>
                <a href="https://osn.toki.id/arsip/download-pkd">
                  Pemrograman Kompetitif Dasar
                </a>
              </td>
              <td>Buku</td>
              <td>
                Buku persiapan OSN/KSN yang ditulis langsung oleh Ikatan Alumni
                Tim Olimpiade Komputer Indonesia. Buku ini berfokus pada
                algoritma-algoritma yang masuk dalam silabus OSN/KSN.
              </td>
            </tr>
            <tr>
              <td>
                <a href="https://cses.fi/book.html">
                  Competitive Programmer’s Handbook oleh Antti Laaksonen
                </a>
              </td>
              <td>Buku</td>
              <td>
                Sebuah buku pemrograman kompetitif dalam bahasa Inggris yang
                dapat diunduh secara gratis. Buku ini ditulis untuk peserta
                tingkat internasional dan kompetisi mahasiswa sehingga Anda
                tidak perlu membaca keseluruhan buku ini.
              </td>
            </tr>
            <tr>
              <td>
                <a href="https://cpbook.net/">
                  Competitive Programming 3 oleh Steven Halim
                </a>
              </td>
              <td>Buku</td>
              <td>
                Sebuah buku berbayar yang berisikan tentang kumpulan algoritma
                beserta soalnya dalam bahasa Inggris. Anda dapat mengunduh versi
                pertama secara gratis. Buku ini juga dibuat untuk peserta
                tingkat internasional dan kompetisi mahasiswa sehingga anda
                harus memilah materi yang Anda pelajari.
              </td>
            </tr>
            <tr>
              <td>
                <a href="https://visualgo.net">VisuAlgo</a>
              </td>
              <td>Website</td>
              <td>
                Website yang berisikan visualisasi dari algoritma-algoritma
                populer.
              </td>
            </tr>
          </tbody>
        </table>

        <h4 id="osn-latihan">Latihan Soal</h4>

        <table className="table table-stripped">
          <thead>
            <tr>
              <th>Sumber</th>
              <th>Bentuk</th>
              <th>Catatan</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <a href="/arsip">Arsip Soal Olimpiade</a>
              </td>
              <td>Arsip Soal</td>
              <td>
                Download soal-soal OSK - OSP - OSN / KSN dalam format pdf.
              </td>
            </tr>
            <tr>
              <td>
                <a href="https://training.ia-toki.org">TLX Training Gate</a>
              </td>
              <td>Online Judge</td>
              <td>
                Anda dapat mencoba mengerjakan soal-soal dari kompetisi lokal
                terdahulu seperti OSN/KSN. Selain itu, TLX menyelenggarakan TOKI
                Open Contest secara berkala.
              </td>
            </tr>
            <tr>
              <td>
                <a href="https://www.hackerrank.com/contests/cp-tutorial/challenges">
                  Hackerrank
                </a>
              </td>
              <td>Online Judge</td>
              <td>
                Kumpulan soal-soal pemrograman yang sudah dibagi berdasarkan
                algoritma dan kesulitan.
              </td>
            </tr>
            <tr>
              <td>
                <a href="http://codeforces.com/problemset?order=BY_SOLVED_DESC">
                  Codeforces
                </a>
              </td>
              <td>Online Judge</td>
              <td>
                Merupakan platform yang menyelenggarakan kontes pemrograman
                secara berkala. Anda dapat mengerjakan soal-soal kontes lampau
                sebagai sarana berlatih.
              </td>
            </tr>
          </tbody>
        </table>

        <h3 id="lain-lain">Lain-Lain</h3>

        <h4 id="forum">Forum Diskusi</h4>

        <p>
          Media berikut dapat digunakan untuk diskusi tentang ide penyelesaian
          soal dan seputar kompetisi pemrograman.
        </p>

        <table className="table table-stripped">
          <thead>
            <tr>
              <th>Sumber</th>
              <th>Bentuk</th>
              <th>Catatan</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <a href="https://www.facebook.com/groups/olimpinfo/">
                  Facebook Olimpiade Informatika Indonesia
                </a>
              </td>
              <td>Grup Facebook</td>
              <td>
                Sebuah grup yang berisikan para alumni serta sesama peserta
                OSN/KSN. Anda dapat bertanya hal-hal yang berkaitan dengan
                OSN/KSN di sini.
              </td>
            </tr>
            <tr>
              <td>
                <a href="http://line.me/ti/p/%40xtf2128i">
                  Line Olimpiade Informatika Indonesia (@olimpinfo)
                </a>
              </td>
              <td>Official Account Line</td>
              <td>
                Official account Line milik IA-TOKI yang membagikan
                informasi-informasi seputar OSN/KSN. Anda dapat bertanya kepada
                admin melalui <em>personal chat</em>.
              </td>
            </tr>
          </tbody>
        </table>

        <h4 id="beasiswa-dan-jalur-kuliah">Beasiswa dan Jalur Kuliah</h4>

        <p>
          Berikut adalah beberapa beasiswa dan jalur kuliah yang ditawarkan
          universitas di Indonesia bagi peraih medali OSN/KSN.
        </p>

        <table className="table table-stripped">
          <thead>
            <tr>
              <th>Program</th>
              <th>Oleh</th>
              <th>Keterangan</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <a href="http://binus.ac.id/binus-8000-beasiswa/">
                  Widia Scholarship
                </a>
              </td>
              <td>Bina Nusantara University</td>
              <td>
                Beasiswa bagi pemenang olimpiade nasional dan internasional.
                Beasiswa berupa bantuan biaya-biaya kuliah.
              </td>
            </tr>
            <tr>
              <td>
                <a href="http://admisi.ipb.ac.id/p/single/pin">
                  Penerimaan Mahasiswa Baru Jalur Prestasi Internasional dan
                  Nasional
                </a>
              </td>
              <td>Institut Pertanian Bogor</td>
              <td>
                Jalur penerimaan mahasiswa baru yang dikhususkan bagi siswa
                berprestasi.
              </td>
            </tr>
            <tr>
              <td>
                <a href="http://um.ugm.ac.id/v.2015/id_home.php?l=aWRfcGFnZSMxNTEyMDUjSmFsdXIgUEJVQiMxI1Byb2dyYW0gU2FyamFuYQ==">
                  Penelusuran Bibit Unggul Berprestasi
                </a>
              </td>
              <td>Universitas Gajah Mada</td>
              <td>
                Jalur penerimaan mahasiswa baru yang dikhususkan bagi penerima
                medali olimpiade nasional dan internasional.
              </td>
            </tr>
            <tr>
              <td>
                <a href="http://www.ui.ac.id/pengantar-pendaftaran/program-olimpiade-sains.html">
                  Program Olimpiade Sains
                </a>
              </td>
              <td>Universitas Indonesia</td>
              <td>
                Jalur penerimaan mahasiswa baru yang dikhususkan bagi penerima
                medali olimpiade nasional dan internasional.
              </td>
            </tr>
            <tr>
              <td>
                <a href="http://umn.ac.id/jalur-beasiswa/">
                  Beasiswa Olimpiade Sains
                </a>
              </td>
              <td>Universitas Multimedia Nusantara</td>
              <td>
                Bebas tes masuk bagi seluruh peserta OSN, serta pembebasan uang
                pangkal bagi pemeroleh medali.
              </td>
            </tr>
          </tbody>
        </table>

        <p>
          Jika Anda menemukan kesalahan, atau memiliki saran, silakan laporkan
          ke info@toki.id
        </p>
      </div>
      <Footer />
    </Layout>
  );
};

export default SilabusMateriOSN;
