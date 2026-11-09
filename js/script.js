/* =========================================================================
   SCRIPT.JS — UKM English Club POLINELA
   Vanilla JavaScript Interactivity:
   - Sticky Navbar & Active Nav ScrollSpy
   - Smooth Scroll Presisi dengan Offset Tinggi Navbar
   - Animasi Penghitung Angka (Hero Floating Stats)
   - Scroll-Reveal Entrance Animation (IntersectionObserver)
   - Modal Detail 8 Program Kerja Dinamis
   - Lightbox Preview Galeri Dokumentasi Agenda Kelas
   - Fallback Otomatis Placeholder Gambar Jika Offline
========================================================================= */

document.addEventListener('DOMContentLoaded', () => {
  const navbar = document.getElementById('mainNavbar');
  const navLinks = document.querySelectorAll('.ec-navbar .nav-link');
  const sections = document.querySelectorAll('main section[id]');
  const backToTopBtn = document.getElementById('backToTopBtn');
  const navbarCollapseEl = document.getElementById('navbarECContent');

  /* -----------------------------------------------------------------------
     1. Efek Sticky Navbar saat Halaman Di-scroll & Active Nav ScrollSpy
  ----------------------------------------------------------------------- */
  const handleScrollState = () => {
    if (window.scrollY > 30) {
      navbar.classList.add('navbar-scrolled');
    } else {
      navbar.classList.remove('navbar-scrolled');
    }

    if (window.scrollY > 420) {
      backToTopBtn.classList.add('show');
    } else {
      backToTopBtn.classList.remove('show');
    }

    const scrollPosition = window.scrollY + 130;
    sections.forEach((section) => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute('id');

      if (scrollPosition >= top && scrollPosition < top + height) {
        navLinks.forEach((link) => {
          link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
        });
      }
    });
  };

  window.addEventListener('scroll', handleScrollState, { passive: true });
  handleScrollState();

  /* -----------------------------------------------------------------------
     2. Smooth Scroll Presisi dengan Kompensasi Tinggi Sticky Navbar
  ----------------------------------------------------------------------- */
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (!targetId || targetId === '#' || targetId === '#programModal') return;

      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        e.preventDefault();
        const navHeight = navbar.offsetHeight;
        const elementTop = targetEl.getBoundingClientRect().top + window.scrollY - navHeight + 2;

        window.scrollTo({
          top: elementTop,
          behavior: 'smooth'
        });

        /* Tutup menu hamburger mobile otomatis setelah klik link */
        if (navbarCollapseEl && navbarCollapseEl.classList.contains('show') && window.bootstrap) {
          const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapseEl);
          if (bsCollapse) bsCollapse.hide();
        }
      }
    });
  });

  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* -----------------------------------------------------------------------
     3. Animasi Angka Statistik (Hero Floating Cards)
  ----------------------------------------------------------------------- */
  const counters = document.querySelectorAll('.counter-value');
  let counterStarted = false;

  const animateCounters = () => {
    if (counterStarted) return;
    counterStarted = true;

    counters.forEach((counter) => {
      const target = parseInt(counter.getAttribute('data-target'), 10);
      const duration = 1200;
      const startTime = performance.now();

      const updateCount = (currentTime) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        counter.textContent = Math.floor(eased * target);

        if (progress < 1) {
          requestAnimationFrame(updateCount);
        } else {
          counter.textContent = target;
        }
      };

      requestAnimationFrame(updateCount);
    });
  };

  animateCounters();

  /* -----------------------------------------------------------------------
     4. Animasi Scroll-Reveal Halus pada Elemen Section
  ----------------------------------------------------------------------- */
  const revealElements = document.querySelectorAll('.reveal-up');
  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    revealElements.forEach((el) => revealObserver.observe(el));
  } else {
    revealElements.forEach((el) => el.classList.add('revealed'));
  }

  /* -----------------------------------------------------------------------
     5. Data & Interaktivitas Modal Detail 8 Program Kerja
  ----------------------------------------------------------------------- */
  const programsData = [
    {
      title: 'Sharing Joy, Inspiring Young Hearts',
      date: 'Sabtu, 25 April 2026 • Pesawaran',
      theme: 'Tema: "Weaving Love, Growing Together, Inspiring Millions in a Day"',
      paragraphs: [
        '<strong>Pesawaran, 25 April 2026</strong> – Politeknik Negeri Lampung (Polinela) melalui Unit Kegiatan Mahasiswa (UKM) English Club telah sukses melaksanakan kegiatan bakti sosial bertajuk <strong>&ldquo;Sharing Joy, Inspiring Young Hearts&rdquo;</strong> pada Sabtu, 25 April 2026. Kegiatan dengan tema <em>&ldquo;Weaving Love, Growing Together, Inspiring Millions in a Day&rdquo;</em> ini dipusatkan di <strong>LKSA Sholawatul Falah, Lempasing</strong>, sebagai wujud nyata pengabdian kepada masyarakat. Program Kerja ini berfokus pada penyebaran kebahagiaan dan kontribusi positif, khususnya dalam memperkenalkan Bahasa Inggris kepada anak-anak usia dini di <strong>Sekolah Rakyat Busa Pustaka</strong>.',
        'Kegiatan ini dilatarbelakangi oleh harapan bahwa organisasi kemahasiswaan, seperti UKM English Club, mampu mengimplementasikan nilai-nilai sosial dalam kehidupan bermasyarakat. Pelaksanaan &ldquo;Sharing Joy, Inspiring Young Hearts&rdquo; bertujuan untuk berbagi pengetahuan, kebahagiaan, serta keterampilan, mengasah minat dan kreativitas belajar anak-anak, membangun hubungan positif dengan masyarakat sekitar, sekaligus memperkenalkan Polinela dan UKM English Club kepada masyarakat luas. Meskipun menargetkan 85 peserta, kegiatan ini mencatatkan partisipasi yang signifikan, dengan jumlah kehadiran mencapai <strong>140 peserta</strong>.',
        'Acara bakti sosial ini diselenggarakan oleh UKM English Club tahun 2025, dengan kepanitiaan pelaksana yang diketuai oleh <strong>Angga Al Faris</strong>. Kegiatan ini mendapatkan dukungan penuh dari institusi, sebagaimana tercermin dari persetujuan yang diberikan oleh Wakil Direktur Bidang Kemahasiswaan, <strong>Agung Adi Candra, S.K.h., M.Si.</strong>, serta bimbingan dari Pembina UKM English Club, <strong>Helidatasa Utami, S.Pd., M.Pd., M.Par.</strong>',
        'Diharapkan, melalui kegiatan &ldquo;Sharing Joy, Inspiring Young Hearts&rdquo;, rasa kepedulian sosial anggota aktif UKM English Club dapat meningkat, sejalan dengan misi Polinela untuk menyiapkan lulusan yang memiliki kedisiplinan tinggi dan kemampuan profesional. Kontribusi ini menegaskan peran aktif mahasiswa vokasi dalam pembangunan masyarakat dan peningkatan mutu pendidikan di lingkungan Lampung.'
      ],
      meta: [
        { label: 'Lokasi Kegiatan', value: 'LKSA Sholawatul Falah, Lempasing & Sekolah Rakyat Busa Pustaka' },
        { label: 'Partisipasi Peserta', value: '140 Peserta Hadir (Melampaui target 85 peserta)' },
        { label: 'Ketua Pelaksana', value: 'Angga Al Faris (UKM English Club 2025)' },
        { label: 'Dukungan & Pembina', value: 'Agung Adi Candra, S.K.h., M.Si. & Helidatasa Utami, S.Pd., M.Pd., M.Par.' }
      ],
      target: 'Anak-anak usia dini di Sekolah Rakyat Busa Pustaka, LKSA Sholawatul Falah (Lempasing), serta masyarakat sekitar.',
      output: 'Meningkatkan kepedulian sosial anggota aktif UKM English Club, mengasah minat & kreativitas belajar Bahasa Inggris anak-anak, serta mempererat kontribusi mahasiswa vokasi Polinela bagi masyarakat Lampung.',
      showSocial: true
    },
    {
      title: 'TOEIC Skill Booster',
      date: 'Kamis, 6 Juni 2026 • Bandar Lampung',
      theme: 'Tema: "The Skill Quest: Train Hard, Score Higher!"',
      paragraphs: [
        '<strong>Bandar Lampung, 6 Juni 2026</strong> – Unit Kegiatan Mahasiswa (UKM) English Club Politeknik Negeri Lampung (Polinela) sukses menyelenggarakan kegiatan <strong>&ldquo;TOEIC Skill Booster&rdquo;</strong> pada Kamis, 6 Juni 2026. Kegiatan yang bertema <em>&ldquo;The Skill Quest: Train Hard, Score Higher!&rdquo;</em> ini diadakan secara <em>hybrid</em> melalui <strong>Zoom Meeting</strong> dan <strong>Gedung Kuliah Bersama Polinela</strong>. TOEIC Skill Booster merupakan tes kemampuan berbahasa Inggris yang berfokus pada sesi <em>reading</em> dan <em>listening</em>.',
        'Penyelenggaraan TOEIC Skill Booster dilandasi oleh kebutuhan organisasi akan sumber daya mahasiswa yang kompeten dan mampu mengikuti perkembangan zaman di era globalisasi. Sebagai perguruan tinggi vokasi, Polinela bertujuan menyiapkan peserta didik dengan kedisiplinan tinggi dan kemampuan profesional. Oleh karena itu, kegiatan ini diadakan sebagai bentuk implementasi ilmu pengetahuan dan berfungsi sebagai alat penilaian standar mahasiswa mengenai kemampuan berbahasa Inggris untuk persiapan memasuki dunia kerja. Tujuan spesifik kegiatan ini adalah menentukan kemampuan <em>reading</em> dan <em>listening</em> peserta menggunakan skor, menambah pengetahuan Bahasa Inggris, dan menguji pemahaman peserta terhadap teks tertulis.',
        'Kegiatan ini berhasil menarik perhatian luas dari mahasiswa Polinela dan peserta umum. Dari target sasaran 100 peserta, kegiatan ini mencatatkan tingkat pencapaian peserta 100% dengan total kehadiran sebanyak <strong>257 peserta</strong>. Kegiatan ini diselenggarakan oleh UKM English Club tahun 2025, dengan Ketua Pelaksana <strong>Saskia Marsha Elnaviri</strong> di bawah pengawasan Pembina UKM English Club, <strong>Helidatasa Utami, S.Pd., M.Pd., M.Par.</strong> Acara ini juga disetujui oleh Wakil Direktur Bidang Kemahasiswaan, <strong>Agung Adi Candra, S.K.h., M.Si.</strong>',
        'Dengan tingginya antusiasme peserta, diharapkan kegiatan TOEIC Skill Booster dapat dilaksanakan secara rutin setiap tahunnya. Hal ini krusial untuk terus meningkatkan kemampuan dan pengetahuan berbahasa Inggris, sehingga mahasiswa Polinela dapat lebih siap dan kompeten dalam menghadapi persaingan global dan tantangan di dunia kerja.'
      ],
      meta: [
        { label: 'Pelaksanaan & Lokasi', value: 'Hybrid — Zoom Meeting & Gedung Kuliah Bersama Polinela' },
        { label: 'Partisipasi Peserta', value: '257 Peserta Hadir (Melampaui target 100 peserta)' },
        { label: 'Ketua Pelaksana', value: 'Saskia Marsha Elnaviri (UKM English Club 2025)' },
        { label: 'Dukungan & Pembina', value: 'Agung Adi Candra, S.K.h., M.Si. & Helidatasa Utami, S.Pd., M.Pd., M.Par.' }
      ],
      target: 'Mahasiswa Politeknik Negeri Lampung (Polinela) dan peserta umum.',
      output: 'Menentukan kemampuan reading dan listening peserta menggunakan skor standar, menambah pengetahuan Bahasa Inggris, serta menyiapkan kesiapan profesional mahasiswa memasuki dunia kerja global.',
      showSocial: true
    },
    {
      title: 'Theatre in Motion Vol II',
      date: 'Juni 2024',
      desc: 'Pementasan drama musikal dan teater panggung berbahasa Inggris yang digarap penuh oleh anggota, mulai dari penulisan naskah, tata panggung, hingga seni peran.',
      target: 'Sivitas akademika POLINELA dan pecinta seni pertunjukan di Bandar Lampung.',
      output: 'Melatih pelafalan (pronunciation), ekspresi vokal, serta manajemen produksi acara besar.'
    },
    {
      title: 'Pathway to English Club Selection',
      date: 'Juli 2024',
      desc: 'Rangkaian open recruitment dan seleksi minat-bakat bagi mahasiswa baru POLINELA untuk bergabung dan memilih peminatan divisi di English Club.',
      target: 'Mahasiswa baru Politeknik Negeri Lampung seluruh program studi.',
      output: 'Terjaringnya talenta baru yang berkomitmen tinggi dalam berorganisasi dan berprestasi.'
    },
    {
      title: 'New Member Training',
      date: 'Agustus 2024',
      desc: 'Masa orientasi, kaderisasi kepemimpinan, dan pengenalan budaya organisasi agar anggota baru siap berkolaborasi aktif di setiap sub-divisi.',
      target: 'Seluruh anggota baru UKM English Club POLINELA.',
      output: 'Terbentuknya solidaritas angkatan dan pemahaman mendalam atas visi-misi UKM.'
    },
    {
      title: 'English Proficiency Awards',
      date: 'Oktober 2024',
      desc: 'Ajang kompetisi multi-cabang (Debate, Scrabble, Speech, Storytelling, News Casting) sekaligus malam penganugerahan bagi peserta berprestasi.',
      target: 'Mahasiswa dan pelajar berbakat serta member aktif UKM English Club POLINELA.',
      output: 'Pemetaan bibit unggul delegasi POLINELA untuk kompetisi tingkat regional dan nasional.'
    },
    {
      title: 'Anniversary Celebration of English Club',
      date: 'Desember 2024',
      desc: 'Malam puncak perayaan hari jadi UKM English Club POLINELA sebagai momen apresiasi kinerja satu periode dan temu kangen lintas generasi bersama alumni.',
      target: 'Member aktif, presidium, pembina, alumni, dan perwakilan UKM se-POLINELA.',
      output: 'Mempererat ikatan kekeluargaan dan jejaring profesional antar-angkatan English Club.'
    },
    {
      title: 'General Sessions',
      date: 'Desember 2024',
      desc: 'Sidang umum tahunan UKM English Club POLINELA untuk penyampaian dan evaluasi Laporan Pertanggungjawaban (LPJ) pengurus, pembahasan AD/ART, serta pemilihan pimpinan periode berikutnya.',
      target: 'Seluruh pengurus presidium, anggota aktif, dewan kehormatan, dan pembina UKM English Club POLINELA.',
      output: 'Terlaksananya evaluasi organisasi secara transparan, demokratis, serta terpilihnya kepemimpinan baru yang berintegritas.'
    }
  ];

  const modalTitle = document.getElementById('programModalLabel');
  const modalDate = document.getElementById('modalProgramDate');
  const modalImgWrap = document.getElementById('modalProgramImgWrap');
  const modalImg = document.getElementById('modalProgramImg');
  const modalThemeWrap = document.getElementById('modalProgramThemeWrap');
  const modalTheme = document.getElementById('modalProgramTheme');
  const modalDesc = document.getElementById('modalProgramDesc');
  const modalMetaGrid = document.getElementById('modalProgramMetaGrid');
  const modalTarget = document.getElementById('modalProgramTarget');
  const modalOutput = document.getElementById('modalProgramOutput');
  const modalSocial = document.getElementById('modalProgramSocial');

  document.querySelectorAll('.program-detail-link').forEach((link) => {
    link.addEventListener('click', function () {
      const idx = parseInt(this.getAttribute('data-program-index'), 10);
      const item = programsData[idx];
      if (!item) return;

      const parentCard = this.closest('.program-card');
      const cardImgEl = parentCard ? parentCard.querySelector('.program-img-wrap img') : null;
      const cardTitleEl = parentCard ? parentCard.querySelector('h3') : null;

      modalTitle.textContent = item.paragraphs ? item.title : (cardTitleEl ? cardTitleEl.textContent.trim() : item.title);
      modalDate.textContent = item.date;

      /* Tampilkan poster/foto dari kartu pada modal */
      if (cardImgEl && cardImgEl.getAttribute('src')) {
        modalImg.src = cardImgEl.getAttribute('src');
        modalImg.alt = modalTitle.textContent;
        modalImgWrap.classList.remove('d-none');
      } else {
        modalImgWrap.classList.add('d-none');
      }

      /* Tampilkan tema kegiatan bila tersedia */
      if (item.theme) {
        modalTheme.textContent = item.theme;
        modalThemeWrap.classList.remove('d-none');
      } else {
        modalThemeWrap.classList.add('d-none');
      }

      /* Render paragraf rilis berita lengkap atau deskripsi singkat */
      if (Array.isArray(item.paragraphs) && item.paragraphs.length > 0) {
        modalDesc.innerHTML = item.paragraphs.map((p) => `<p>${p}</p>`).join('');
      } else {
        modalDesc.innerHTML = `<p>${item.desc || ''}</p>`;
      }

      /* Render kotak ringkasan pelaksanaan bila tersedia */
      if (Array.isArray(item.meta) && item.meta.length > 0) {
        modalMetaGrid.innerHTML = item.meta
          .map(
            (m) => `
              <div class="col-sm-6">
                <div class="program-meta-item">
                  <small>${m.label}</small>
                  <strong>${m.value}</strong>
                </div>
              </div>
            `
          )
          .join('');
        modalMetaGrid.classList.remove('d-none');
      } else {
        modalMetaGrid.innerHTML = '';
        modalMetaGrid.classList.add('d-none');
      }

      modalTarget.textContent = item.target;
      modalOutput.textContent = item.output;

      if (item.showSocial) {
        modalSocial.classList.remove('d-none');
      } else {
        modalSocial.classList.add('d-none');
      }
    });
  });

  /* -----------------------------------------------------------------------
     6. Interaktivitas Lightbox Preview (Dokumentasi Kelas & Foto Presidium)
  ----------------------------------------------------------------------- */
  const docModalEl = document.getElementById('docPreviewModal');
  if (docModalEl && window.bootstrap) {
    const docModal = new bootstrap.Modal(docModalEl);
    const docPreviewImg = document.getElementById('docPreviewImg');
    const docPreviewLabel = document.getElementById('docPreviewLabel');

    document.querySelectorAll('.doc-thumb-btn, .presidium-photo-card, .about-photo-card').forEach((cardOrBtn) => {
      cardOrBtn.addEventListener('click', function () {
        const imgSrc = this.getAttribute('data-doc-src');
        const title = this.getAttribute('data-doc-title');
        if (!imgSrc) return;
        docPreviewImg.src = imgSrc;
        docPreviewLabel.textContent = title || 'Preview Foto';
        docModal.show();
      });
    });
  }

  /* -----------------------------------------------------------------------
     7. Filter Kategori pada Galeri Foto Struktur Presidium
  ----------------------------------------------------------------------- */
  const filterButtons = document.querySelectorAll('.presidium-filter-btn');
  const tierGroups = document.querySelectorAll('.presidium-tier-group');

  filterButtons.forEach((btn) => {
    btn.addEventListener('click', function () {
      const selected = this.getAttribute('data-filter');

      filterButtons.forEach((b) => b.classList.remove('active'));
      this.classList.add('active');

      tierGroups.forEach((group) => {
        const category = group.getAttribute('data-tier-category');
        if (selected === 'all' || selected === category) {
          group.classList.remove('d-none-filtered');
        } else {
          group.classList.add('d-none-filtered');
        }
      });
    });
  });

  /* -----------------------------------------------------------------------
     8. Fallback Otomatis Placeholder Gambar Jika File Belum Tersedia
  ----------------------------------------------------------------------- */
  document.querySelectorAll('main img').forEach((img) => {
    const src = img.getAttribute('src') || '';
    if (src.includes('logo-ec.png')) return;

    img.addEventListener('error', function () {
      if (this.dataset.fallbackApplied) return;
      this.dataset.fallbackApplied = 'true';
      const label = encodeURIComponent(this.alt || 'English Club POLINELA');
      this.src = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="%230a3282"/><stop offset="100%" stop-color="%230f7f3e"/></linearGradient></defs><rect width="800" height="500" fill="url(%23g)"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23ffffff" font-family="Poppins,Arial,sans-serif" font-size="24" font-weight="600">${label}</text></svg>`;
    });
  });
});
