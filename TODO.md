# Quran Pesat

## Fitur

- [O] Splash Screen
- [O] Home Screen
- [O] Halaman Al-Quran (dri API https://quran-api.santrikoding.com/api/surah)
  - [O] nama surat
  - [O] nomor surat
  - [O] jumlah ayat
- [O] Halaman Detail Surat (dri API https://quran-api.santrikoding.com/api/surah/{nomor})
  - [O] param nomor halaman before
  - [O] fetch data berdasarkan nomor
  - [O] informasi surat yg diklik
- [O] Halaman Artikel (dri API https://api.rss2json.com/v1/api.json?rss_url=https://republika.co.id/rss/khazanah)
- [O] Halaman Pengaturan
- [O] Halaman AI
  - [O] together API
  - [x] HuggingFace Token
- [] Button List
  - [] Kiblat
  - [O] Donasi
  - [O] Lainnya/Other
  ### Doa
  - [] https://open-api.my.id/api/doa ( Daftar doa )
  - [] https://open-api.my.id/api/doa/{id} ( Detail doa )
  ### Dzikir
  - [] https://muslim-api-three.vercel.app/v1/hadits ( Daftar hadist )
  - [] https://muslim-api-three.vercel.app/v1/dzikir ( Daftar dzikir )
  ### Asmaul Husna
  - [O] https://asmaul-husna-api.vercel.app/api/all ( Daftar asmaul husna )
  ### Hadist
  - [] https://muslim-api-three.vercel.app/v1/hadits (Daftar Hadist)

## KESALAHAN YANG DIHINDARI

- [!] Data hardcore
- [!] Detail surah tidak berubah
- [!] No kirim param
- [!] Banyak pake [ANY]
- [!] Halaman error
- [!] Gk upload github
