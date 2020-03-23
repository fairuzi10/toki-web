---
templateKey: blog-post
title: Penulisan Buku Pemrograman Kompetitif Dasar
date: 2019-09-26T19:03:45.966Z
featured_image: /img/hackathon-pkd.png
author: William Gozali
canoncial_url: "https://kupaskode.blogspot.com/2019/09/penulisan-buku-pkd.html"
tags:
  - tulisan-alumni
  - tim-konten
---

Libur akhir tahun baru saja lewat. Saya jadi ingat masa-masa liburan akhir tahun 2017 yang dihabiskan untuk menulis buku Pemrograman Kompetitif Dasar (PKD). Proses penulisan buku itu cukup lama. Banyak yang sebelumnya tidak diketahui jadi harus diketahui. Saya akan membagikan pengalaman sepanjang penulisan buku PKD.

### Awal Mula

Pada tahun 2014, saya diminta Ashar untuk menuliskan materi pemrograman dasar Pascal untuk dimuat ke TLX Training Gate (seterusnya akan saya sebut TLX-TG). Lalu tahun 2016, ada inisiatif untuk memperluas cakupan materi TLX-TG, sehingga dibuatlah materi pemrograman kompetitif dasar yang isinya lebih ke algoritma-algoritma. Seluruh materi ini ditulis dengan format slide presentasi (seperti materi perkuliahan). Argumennya adalah slide presentasi lebih ringkas daripada penjelasan berupa paragraf, dan dapat memuat gambar yang dianimasikan. Animasi yang saya maksud sebenarnya sesederhana seperti slide 1 memuat array, lalu slide kedua memuat array yang elemennya ditukar; misalnya digunakan untuk mengajarkan pengurutan.

Setelah satu tahun berlalu, Aji tiba-tiba mengajak saya untuk menganalisis kemajuan pemrograman kompetitif di Indonesia. Saya pun terpikir, apakah selama ini materi yang ditulis benar-benar digunakan dan bermanfaat bagi pelajar Indonesia?

Sepanjang saya menulis materi pemrograman kompetitif dasar, sebenarnya ada keraguan apakah slide media yang tepat. Slide mungkin unggul kalau digunakan oleh pengajar, seperti dosen atau guru. Namun kali ini konteksnya adalah pembelajaran mandiri. Saya pribadi lebih suka belajar hal baru dengan membaca tulisan yang penjelasannya lengkap, seperti buku atau artikel.

Analisis tahun 2017 itu dimulai dengan memberikan survey kepada anggota grup facebook "Olimpiade Informatika Indonesia". Saya menggunakan kesempatan ini untuk mengetahui apa pendapat peserta didik tentang media pembelajaran TLX-TG. Salah satu pertanyaan survey tersebut adalah mengurutkan preferensi terhadap empat media pembelajaran:

1. Slide presentasi
2. Tulisan artikel/blog
3. Buku
4. Video pengajaran

Ternyata keraguan saya terbukti benar. Yang lebih mengejutkan adalah slide presentasi berada di peringkat paling bawah. Media pembelajaran yang lebih diminati adalah video pengajaran, disusul dengan buku.

Memproduksi video pengajaran jelaslah sulit. Diperlukan peralatan untuk merekam video, microphone yang bagus untuk kualitas suara yang bagus, kemampuan mengedit, dan "sosok berkharisma" yang melakukan pengajaran. Lagipula, video pengajaran yang diakses lewat internet tidak menjamin kemudahan akses. Kualitas internet di Indonesia sangat beragam, dan saya sendiri kadang kesulitan untuk nonton video youtube. Singat cerita, video pengajaran tidak dapat dikejar.

Pilihan selanjutnya adalah buku. Mungkin buku adalah media pembelajaran yang paling seimbang dari keempat yang dicalonkan, karena:

- Penjelasan dapat diberikan secara lengkap, tanpa perlu khawatir halaman menjadi penuh tulisan. Ini perlu dihindari pada penulisan slide.
- Pembelajarannya sistematis, tidak lompat-lompat atau tercecer seperti tulisan artikel/blog pada umumnya.
- Lebih mudah diakses daripada video pengajaran.
- Dapat dicetak, lalu dikirimkan ke segala pelosok di Indonesia.

Yah, memang buku memiliki kekurangannya tersendiri. Anak SMP/SMA yang diminta membaca buku pemrograman atau algoritma penuh tulisan mungkin akan terintimidasi. Buku pelajaran sekolah biasanya memiliki gambar dan berwarna. Bahkan, kadang gambarnya tidak penting dan hanya berperan sebagai dekorasi, misalnya pelajaran ekonomi tentang barter lalu diberikan gambar orang menukar beras dengan kambing.

Selama diskusi dengan teman-teman TOKI berlangsung, keputusannya lebih condong ke penulisan buku. Tujuannya adalah membuat buku yang lengkap, sistematis, dan gratis untuk mempermudah pembelajaran mandiri. Namun saya ragu, dan mempertanyakan apa gunanya buku ini kalau sudah ada buku Competitive Programming 1 (CP1), yang sudah digratiskan oleh Steven & Felix Halim? Argumen yang diberikan adalah CP1 menggunakan Bahasa Inggris, dan tidak semua siswa-siswi sudah lancar berbahasa Inggris. Setelah diyakinkan masih ada*niche*, akhirnya diputuskanlah untuk menulis buku.

Rencananya adalah membukukan slide materi, ditambah dengan beberapa materi baru. Saya dan Aji berkomitmen menjadi penulis utama buku ini, dan berencana menyelesaikannya sebelum PJJ pra-OSN 2018.

### Mulai Menulis Buku

Penulisan dimulai dengan mencari template buku. Idealnya penulisan akan dilakukan dengan Latex, karena gratis dan mudah diintegrasikan dengan version control seperti Git. Aji menemukan template buku yang sekiranya cocok, yaitu tidak terlalu ilmiah dan tidak terlalu santai. Diputuskan untuk sementara menggunakan template buku tersebut.

Selanjutnya dilakukan transformasi slide presentasi ke bentuk buku, atau lebih tepatnya "transpile" kode latex beamer slide ke format latex buku. Aji menulis script untuk melakukannya, dan jadilah buku sangat mentah versi 0.

Tugas selanjutnya adalah mengubah format poin-poin dalam slide menjadi narasi. Aji mengusulkan untuk merekrut sukarelawan untuk membantu proses ini. Jadinya dilaksanakan "hackathon" di kantor Sirclo atas bantuan Brian dan Ashar. Secara mengejutkan cukup banyak yang berminat untuk membantu. Kini bukunya lebih berwujud buku daripada sebelumnya, walaupun gaya penulisan setiap bab gado-gado karena dikerjakan oleh orang yang berbeda. Orang-orang yang membantu hackathon ini namanya dicantumkan sebagai kontributor buku.

<div class="text-center">
<span class="img-500">

![](/img/hackathon-pkd.png)

<figcaption>Peserta Hackathon PKD</figcaption>

</span>
</div>

Memasuki libur hari natal dan tahun baru, kantor saya libur selama 2 minggu. Saya menghabiskan waktu bersama Aji untuk merapikan dan menyeragamkan penulisan setiap bab. Setiap bab diperiksa oleh kami, dari awal sampai akhir. Setelah itu bukunya sudah bisa disebut dengan "versi 0.0". Sebetulnya sempat ada perdebatan apakah bukunya mau diberi versi dalam bentuk <major>.<minor>.<patch> yang klasik, atau <major>.<patch> saja. Diputuskan untuk menggunakan <major>.<patch> saja karena tidak jelas kapan minor atau patch bertambah.

### Pemolesan Konten

Tahap selanjutnya adalah review. Ashar dan Aji mengusulkan untuk merekrut Pak Suhendry. Untungnya Pak Suhendry bersedia membantu.

Awalnya saya percaya diri kalau bukunya ditulis dengan baik. Ternyata pemikiran itu terbukti salah ketika ditemukan kekeliruan di sana sini. Saya belajar kalau pihak ketiga dibutuhkan untuk memberikan masukan, sehingga hal-hal yang tidak kita pikirkan bisa diketahui.

Pak Suhendry memberikan review yang SANGAT BERMANFAAT. Banyak kekeliruan yang ditemukan, dan hal-hal kecil yang terlewatkan. Saya ingat saran yang paling bermanfaat adalah memperbaiki sistematika penulisan. Misalnya pembahasan perlu dimulai dari A dulu, lalu dilanjutkan ke B, dan seterusnya.

### Dekorasi dan Estetika

Setelah kontennya memenuhi standar yang kita tetapkan, saya dan Aji mulai menggarap buku ini dari segi tampilan. Kami merekrut Ali untuk memberi masukan tentang font, skema warna, gambar cover, dan sebagainya. Setelah konsepnya jelas, saya menulis ulang template Latex bukunya sehingga memenuhi konsep yang kita tetapkan.

Bagian yang menyusahkan di sini adalah menulis template Latex itu tidak semudah menulis HTML + CSS (walaupun CSS sendiri pun tidak mudah). Banyak kode-kode misterius, konfigurasi library yang saling bertentangan, dan sebagainya. Setelah berdarah-darah, akhirnya selesai juga.

Suatu buku kurang sempurna apabila tidak ada kata pengantar dan basa-basinya. Jadi kami juga menambahkan kata pengantar, berikut yang lebih pentingnya, yaitu ucapan terima kasih kepada kontributor.

### Publikasi

Kini buku sudah sangat berbentuk buku, tinggal dipublikasikan saja. Kami coba bertanya kepada alumni TOKI yang pernah menulis buku, dan ternyata kalau bukunya mau dijual di toko, tidak mungkin bisa non-profit. Toko buku pasti mau keuntungan.

Kalau pihak kita yang mengelola percetakannya, rasanya repot. Kita seakan-akan menjadi penjual toko online. Jadinya kami mulai dengan mempublikasikan dalam bentuk e-book.

### Pelajaran

1. Menulis buku itu melelahkan! Butuh kesabaran, ketangguhan, dan niat untuk menghabiskan berbulan-bulan untuk menyelesaikannya. Untungnya ada teman-teman TOKI dan Aji yang memotivasi.
2. Harus mampu menulis Bahasa Indonesia dengan benar. Walaupun kita menggunakan bahasa itu setiap hari, penulisannya tidak semudah berbicara. Pertanyaan yang sering muncul kira-kira seperti "apakah ada spasi sebelum 'pun'?".
3. Walaupun awalnya berdarah-darah, penggunaan Latex sangat membantu. Kita dapat menulis buku dengan editor apapun, lalu dimuat di version control dengan mudah. Kalau disuruh menulis buku lagi, saya pasti pakai Latex.

Demikianlah pengalaman penulisan buku ini. Apa yang akan terjadi dengan buku ini pada masa depan? Apakah ada edisi kedua? Atau apakah akan ada PKL (~~Penjual Kaki Lima~~Pemrograman Kompetitif Lanjut)? Mari anggap saja itu pertanyaan untuk hari esok.

Seperti biasa, saya harap buku ini menjadi pedoman belajar pemrograman bagi kalian yang baru memulai. Semoga bermanfaat.
