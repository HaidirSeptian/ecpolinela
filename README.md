# Website Resmi UKM English Club POLINELA

Landing Page resmi untuk **Unit Kegiatan Mahasiswa (UKM) English Club Politeknik Negeri Lampung (POLINELA)**. Dibangun dengan pendekatan *Clean Light UI* modern yang mengadaptasi palet warna identitas logo organisasi, struktur HTML5 semantik, Bootstrap 5, Vanilla CSS3, dan Vanilla JavaScript.

---

## Struktur Folder Proyek

```text
WebEC/
│
├── index.html          # File utama HTML (struktur semantik halaman)
├── README.md           # File dokumentasi proyek (file ini)
│
├── css/
│   └── style.css       # File CSS3 kustom (variabel warna, layout bagan, animasi)
│
├── js/
│   └── script.js       # File JavaScript kustom (smooth scroll, scrollspy, modal, counter)
│
└── assets/
    ├── img/            # Direktori penyimpanan gambar (logo-ec.png, dll)
    │   └── presidium/  # 14 foto kartu Struktur Presidium & Divisi 2026
    └── icons/          # (Opsional) Direktori untuk ikon lokal (ec-badge.svg)
```

---

## Teknologi yang Digunakan

- **HTML5 Semantik** — `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<figure>`, `<footer>`.
- **Bootstrap 5.3 (via CDN)** — Sistem Grid responsif, Navbar mobile collapse, Cards, Tabs, dan Modal.
- **Vanilla CSS3 (`css/style.css`)** — Custom styling murni menggunakan CSS Variables (`:root`), Flexbox Hierarchy Chart, transisi halus `cubic-bezier`, dan efek *lift-up hover*.
- **Vanilla JavaScript (`js/script.js`)** — Navigasi *smooth scroll* dengan kompensasi tinggi *sticky navbar*, *ScrollSpy* menu aktif, animasi angka statistik, *scroll-reveal* berbasis `IntersectionObserver`, serta *modal* detail program & *lightbox* dokumentasi kelas.
- **Google Fonts & FontAwesome 6 (via CDN)** — Tipografi `Poppins` (Heading) & `Inter` (Body), beserta ikon vektor FontAwesome.

---

## Skema Warna (Berdasarkan Identitas Logo)

| Peran Warna | Kode Hex | Penggunaan Utama |
| :--- | :--- | :--- |
| **Primary (Navy)** | `#0a3282` / `#072259` | Sticky Navbar, Footer, kartu Chairman, dan teks judul utama |
| **Secondary (Green)** | `#0f7f3e` / `#edf8f2` | Tombol outline, ikon checklist Misi, aksen section & border lembut |
| **Accent 1 (Yellow)** | `#ffd100` | Highlight teks judul, kartu Vice Chairman & cabang Divisi, nomor urut |
| **Accent 2 (Red)** | `#d91b49` | Badge penting secara terukur (`Target: Nasional`) |
| **Accent 3 (Orange)** | `#f35b04` | Tombol CTA utama (`Kenali Kami ->`), efek *underline* hover navigasi |
| **Background** | `#ffffff` & `#f8f9fa` | Pemisah antar-section yang bersih, terang, dan modern |

---

## Cara Menjalankan & Kustomisasi Gambar

1. Buka folder proyek ini di code editor (seperti VS Code / Antigravity) atau klik dua kali langsung pada file `index.html` untuk membukanya di browser.
2. Untuk mengganti foto kegiatan/pengurus dengan dokumentasi asli:
   - Simpan file foto ke dalam folder `assets/img/` (misalnya `assets/img/pengurus-2025.jpg`).
   - Ubah atribut `src="..."` pada elemen `<img>` yang bersangkutan di dalam `index.html`.
