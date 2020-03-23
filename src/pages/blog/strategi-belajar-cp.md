---
templateKey: blog-post
title: Strategi Belajar CP
date: 2018-08-20T04:50:43.007Z
featured_image: /img/strategi-belajar-cp_berserk.png
author: William Gozali
canoncial_url: 'http://kupaskode.blogspot.com/2018/08/strategi-belajar-cp.html'
tags:
  - tulisan-alumni
  - strategi-belajar
---
Kalau diingat-ingat, saya menghabiskan waktu cukup lama di pemrograman kompetitif (alias Competitive Programming/CP). Mulai dari 2009 sampai dengan 2015, yang mana sesudah itu saya sudah pensiun. Selama 7 tahun tersebut saya menghabiskan banyak waktu untuk berlatih.

Dari beberapa cara berlatih, ada yang lebih efisien atau kurang. Mungkin bisa dianggap seperti sistem "experience" atau exp pada game. Misalnya pada game pokemon, mengalahkan dragonite memberikan exp jauh lebih banyak dari magikarp. Seandainya sejak awal saya tahu cara berlatih yang paling efisien, mungkin dengan 7 tahun saya bisa lebih jago dari saya yang sekarang.

Melalui tulisan ini, saya akan berbagi informasi cara berlatih berdasarkan pengalaman saya. Cara berlatih ini tidak saling lepas, Semoga dapat membantu kalian yang sedang menempuh perjalanan menuju OSN, IOI, regional ICPC, atau ICPC world final.

- - -

### Latihan NonKontes (UVa, SPOJ)

Saya memulai pembelajaran CP dari latihan UVa. Setiap harinya, saya memilih beberapa soal secara acak lalu dikerjakan. Biasanya saya dapat menyelesaikan 3 soal dalam sehari. Setelah mengenal SPOJ, saya mulai berlatih di sana dengan menonton papan submission, dan memilih soal yang berkode menarik.

Ciri utama dari latihan nonkontes adalah tidak adanya batas waktu dan kebebasan dalam memilih soal. Anda boleh memilih soal sendiri, dan dikerjakan dalam jangka waktu yang ditentukan sendiri pula.

Dalam hal memilih soal, ada yang perlu diperhatikan. Ribuan soal yang ada di online judge diciptakan secara berbeda. Ada soal yang bagus, dan ada juga yang kurang bagus. Sepengalaman saya, soal yang bagus adalah soal yang:

* Memerlukan analisis mendalam, tidak straight-forward, atau begitu dibaca langsung terpikirkan solusinya.\
  Contohnya adalah soal-soal IOI, yang mana diperlukan beberapa observasi terlebih dahulu sebelum akhirnya solusi ditemukan. Contoh soal yang tidak memerlukan analisis mendalam adalah soal-soal klasik, misalnya mencari pemasangan node-node pada graf yang dapat diselesaikan dengan Edmond's Blossom.
* Tidak menimbulkan rasa malas untuk menuliskan kodenya.\
  Contoh soal yang menimbulkan rasa malas adalah soal tentang pencarian nilai agregat dengan segment tree yang "ditambah-tambah" kesulitannya. Misalnya wajib dilakukan secara online, bentuk datanya adalah tree, dan edge-edge treenya bisa dicabut/pasang. Gara-gara "ditambah-tambah", kini solusinya harus menggunakan link-cut tree dengan splay tree. Oh, lalu tidak lupa bahwa ada operasi yang bisa mengakibatkan overflow sehingga harus menggunakan big integer, tetapi informasi ini hanya diberikan secara tersirat di soal.

Kembali ke persoalan memilih soal, saya sering menemukan soal yang kurang bagus (terutama di UVa dan SPOJ). Bukan berarti online judge tersebut jelek, karena banyak pula soal bagus di UVa dan SPOJ. Saya menyarankan untuk mengerjakan soal yang sudah dipaket atau direkomendasikan orang. Misalnya kalau di UVa, kerjakanlah soal dengan kode prefix 2 dan 3 digit. Soal-soal tersebut berasal dari regional ICPC yang modern, ketimbang soal berkode prefix 1 digit yang sudah ketinggalan zaman. Contoh soal paketan lainnya adalah rekomendasi soal yang diberikan di buku pembelajaran, misalnya buku Competitive Programming 3 oleh Steven Halim & Felix Halim.

Setelah terarah dalam memilih soal, komponen berikutnya adalah batas waktu pengerjaan. Pertanyaan yang muncul adalah:

> "apakah kalau saya tidak menemukan solusinya, saya boleh mencarinya di internet?"

Jawaban yang saya temukan adalah: ya.

Mencari solusi di internet ketika tersendat bukan berarti kita lemah. Justru sebaliknya, kita mengakui bahwa kemampuan kita masih terbatas dan mau berusaha untuk belajar untuk melampaui batas tersebut. Mengakui kekurangan diri sendiri adalah tanda kedewasaan.

Berikanlah batas waktu memikirkan solusi, misalnya kalau saya selama 1 minggu. Selama 1 minggu itu, saya akan berusaha memikirkan solusi setiap ada waktu luang. Kalau sudah lewat batas waktu itu dan masih belum juga terpikirkan, berarti sudah saatnya mencari jawaban.

Bisa jadi, alasan kita tidak dapat menyelesaikan soal itu bukan karena kita yang lemah. Melainkan ada teori khusus yang belum diketahui. Sebagai contoh, mengerjakan soal klasik seperti Minimum Spanning Tree tanpa mengetahui algoritmanya (misal: Kruskal) sama saja dengan mau menciptakan algoritma itu dari 0, yang mana kurang realistis untuk durasi kontes selama beberapa jam atau bahkan 1 minggu.

Setiap kali kejadian seperti ini dialami, kita menjadi memperkaya ilmu. Misalnya setelah membaca solusi, kita menjadi sadar "oh ternyata ada ya yang namanya MST". Selanjutnya tinggal dipelajari dan bertambahlah ilmu kita. Hampir semua ilmu baru saya dapatkan karena kejadian ini.

Kalaupun ternyata bukan karena teori khusus yang belum diketahui, 1 minggu dipenuhi bertapa itu pastinya telah memberikan manfaat. Menghabiskan waktu begitu lama untuk memikirkan solusi suatu soal melatih kita untuk melihat soal dari berbagai sudut pandang, mengumpulan observasi, dan sebagainya. Pada akhirnya setelah solusi dibaca, mungkin yang terjadi adalah "ooooh begitu ternyata". Meskipun solusi tidak kita temukan sendiri, pengalaman mencari solusi telah meningkatkan kemampuan Anda.

- - -

### Latihan Kontes (Codeforces, SRM Topcoder)

Setelah cukup percaya diri (mulai sering AC di soal nonkontes), beranjaklah ke latihan kontes. Zaman dulu, ada SRM (Single Round Match) yang diadakan Topcoder setiap 2 minggu sekali. Beberapa tahun kemudian, muncullah Codeforces yang mengadakan kontes dengan frekuensi lebih tinggi. Yang manapun kontesnya, manfaat yang dirasakan secara umum serupa.

Ciri utama dari kontes adalah terbatasnya waktu, adanya pesaing, dan adanya pembahasan di akhir kontes. Seluruh ciri ini membuat latihan kontes sangat penting dalam melatih perkembangan CP Anda.

Waktu yang terbatas mencerminkan kondisi kompetisi yang sesungguhnya. Sering berlatih dengan waktu terbatas akan mengurangi kegugupan dan stress saat kompetisi. Saya juga merasakan ketika berada di bawah tekanan, saya bisa jadi "berserk" dan melampaui batas kemampuan biasanya.

<div class="img-400">

![Berserk](/img/strategi-belajar-cp_berserk.png "Berserk")

</div>

Keberadaan pesaing bermanfaat untuk memicu semangat untuk latihan. Selain itu, kita juga memiliki kesempatan untuk melihat kode yang mereka tulis. Pada SRM atau Codeforces, terdapat sistem yang memungkinkan Anda melihat kode orang lain dan mencari kasus uji maut. Kalau program mereka gagal memberikan solusi yang benar, Anda mendapatkan nilai.

Membaca kode orang lain bermanfaat untuk:

* Belajar cara lain menuliskan algoritma. Sering kali saya menemukan cara-cara menarik untuk mengimplementasikan sesuatu. Dikatakan menarik karena penulisannya lebih pendek, lebih kebal bug, atau sekedar lebih elegan. Contoh nyatanya adalah treap yang saya adopsi [di sini](https://kupaskode.blogspot.com/2013/12/treap-alternatif-balanced-binary-search.html). Ketika saya Pelatnas 1, Pak Suhendry bilang bahwa beberapa kali ikut kontes (dan membaca kode orang lain) akan meningkatkan kemampuan implementasi algoritma secara pesat.
* Belajar memahami jalan pikir orang lain. Kemampuan ini dibutuhkan untuk kontes bertim seperti ICPC. Selain itu, kita juga lebih mandiri dalam arti mengerti solusi cukup dari kode saja. Beberapa kali saya tersendat dalam soal dan memutuskan untuk mencari solusi di internet, tetapi yang didapatkan hanya kode solusinya saja dari web Rusia atau Cina.

Terakhir, biasanya kontes diakhiri dengan pembahasan solusi. Untuk setiap soal yang tidak berhasil diselesaikan, bacalah solusinya (baik dalam bentuk narasi atau kode) dan kerjakan sampai AC. Saya sering menyebutnya dengan "balas dendam", sementara Ashar bilang istilah tepatnya adalah "upsolving". Apapun istilahnya, balas dendam ini adalah bagian terpenting! Di sinilah kita meningkatkan batas atas kemampuan, dengan menyelesaikan soal yang tidak bisa diselesaikan sebelumnya. Dengan selalu mengikuti kontes dan balas dendam, dijamin dalam beberapa periode kontes kemampuan Anda akan meningkat pesat.

Jika Anda belum merasa percaya diri untuk ikut kontes sungguhan, Codeforces memiliki fitur untuk memulai kontes bayangan. Anda dapat mengerjakan kontes dan mengetahui berapa peringkat Anda dibandingkan dengan peserta yang sebelumnya resmi mengikuti kontes itu.

- - -

### Latihan Tim

Untuk kompetisi berkelompok seperti ICPC, diwajibkan untuk berlatih bersama anggota tim.

Latihan ini berguna untuk mengerti kelebihan dan kekurangan anggota tim lainnya. Kita jadi tahu kalau menemukan soal bertipe X, maka siapa yang kira-kira mampu menyelesaikannya. Lama kelamaan, setiap anggota menjadi spesialis untuk jenis soal tertentu.

Dengan latihan tim, kita juga terlatih untuk bekerja sama. Meskipun memiliki kemampuan individual yang baik, tanpa kerja sama tim mungkin saja tim tersebut kalah dari tim berkemampuan individual rendah tetapi kerja samanya baik. Kerja sama yang dimaksud adalah tahu kapan waktunya untuk berdiskusi, bagaimana mempercayai anggota tim lain, atau mengatasi stress ketika terus-terusan tidak AC.

Untuk persiapan ICPC, tim saya sering berlatih secara rutin dengan memilih set soal di gym Codeforces. Set soal yang saya sukai adalah seri Petrozavodsk yang berasal dari Rusia, salah satu contohnya: <https://codeforces.com/gym/101741>. Terdapat pula set soal regional ICPC Eropa dan Asia yang kualitas soalnya bagus.

- - -

### Latihan Intensif\

Latihan ini berbentuk sekumpulan individu atau tim menjalani latihan dalam beberapa hari. Contoh umum untuk latihan seperti ini adalah Pelatnas TOKI, yang mana orang-orang dikumpulkan di suatu tempat dan dilatih selama 3-4 minggu. Selain Pelatnas, saya juga pernah mengikuti latihan "furious" yang merupakan inisiatif dari Pak Denny sebagai pelatih ICPC di kampus.

Bentuk latihan ini bisa beragam, seperti ada sesi pengajaran, presentasi, dan latihan. Bentuk paling sederhananya adalah mengerjakan kontes tanpa diskusi dari pagi sampai siang, lalu siangnya istirahat, dilanjutkan dengan mengerjakan set soal yang sama tetapi boleh berdiskusi.

Meskipun terdengar membosankan dan melelahkan, saya merasa latihan intensif ini dapat meningkatkan kemampuan secara pesat. Alasannya adalah dengan adanya orang lain, kita menjadi bersaing (yang sehat) dan bisa saling belajar satu sama lain. Kadang-kadang, semua peserta menjadi bersatu dalam menghadapi soal yang sulit. Hal ini pernah terjadi sebelumnya pada kontes furious, yang mana kita bersatu untuk memahami bagaimana [range query BIT bekerja](https://kupaskode.blogspot.com/2017/07/range-query-bit.html).

- - -

### Perkakas Latihan

Untuk memulai latihan, Anda dapat menggunakan fasilitas berikut.

**[TLX](https://tlx.toki.id/)**\
Sebagai media pembelajaran dari 0. Terdapat kursus pemrograman dasar dan pemrograman kompetitif dasar. Mampu menyelesaikan kursus pemrograman kompetitif dasar akan memberikan dasar ilmu yang Anda butuhkan untuk belajar mandiri secara efektif.

**[Gym Codeforces](https://codeforces.com/gyms)**\
Situs yang kaya akan soal-soal menarik. Sejauh ini saya paling menyukai kontes-kontes yang berasal dari Petrozavodsk, ICPC Regional Eropa dari berbagai penjuru (NEERC, NWERC, SWERC), dan ICPC Regional kawasan tepi Pasifik (Asia Timur dan Tenggara).

**[uhunt](http://uhunt.felix-halim.net/)**\
Situs yang dibuat Felix Halim untuk "berburu" soal UVa. Terdapat fitur-fitur navigasi di bagian bawah untuk memilih soal dan melihat tingkat kesulitannya (persentase AC dari seluruh pengumpulan). Rasanya soal yang memiliki kode prefix 1 digit (v1 sampai dengan v9) sudah ketinggalan zaman, karena berasal dari belasan tahun yang lalu. Maksudnya ketinggalan zaman adalah soal tersebut kurang memenuhi 2 syarat soal bagus yang saya sebutkan di atas. Kerjakanlah soal dengan kode prefix 2 dan 3 digit, yang sebagian besar merupakan soal yang bagus.

**[vjudge](https://vjudge.net/)**\
Merupakan situs umum untuk membuat kontes dari berbagai online judge (UVa, SPOJ, ICPC Live Archive, Codeforces). Anda dapat memilih beberapa soal, mengatur waktu kontes, dan memasukkan peserta-peserta ke kontes yang Anda buat. Berguna apabila Anda adalah seseorang yang sedang melatih.\
Saya suka menggunakan vjudge.

- - -

### Penutup

Demikianlah pengalaman berlatih yang saya alami. Apabila Anda masih memiliki waktu yang panjang untuk berlatih, selamat berlatih seefektif mungkin dan dapatkan experience setinggi mungkin untuk naik ke level selanjutnya.