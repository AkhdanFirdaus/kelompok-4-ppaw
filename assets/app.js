const people = [
    {
        color: '#ee4266',
        url: 'akhdan', 
        nama: 'Akhdan Musyaffa Firdaus',
        photo: 'assets/akhdan.jpg',
        intro: 'Halo, saya Akhdan saya berusia 20 tahun. Saya adalah seorang mahasiswa.',
        alamat: 'Kp. Burujul RT.06 RW.17 No. 13 Desa Mekarrahayu Kecamatan Margaasih Kabupaten Bandung 40218',
        ttl: 'Bandung, 27 Maret 2001',
        sosmed: {
            email: 'akhdan.musyaffa.firdaus@gmail.com',
            wa: '+6289624289097',
            ig: 'akhdanfirdaus',
            twitter: 'akhdanfirdaus',
        },
        skill: {
            deskripsi: 'Saya mampu menguasai bahasa pemrograman PHP, C++, C#, Java, dan lain sebagainya. Selain itu juga mampu menguasai arduino, AI, PS, XD',
            listSkill: ['Fullstack Mobile Programming', 'Fullstack Web Programming', 'Desktop Programming'],
        },
        organisasi: [
            {nama: 'Kelompok Ilmiah Remaja SMKN 1 Katapang', tahunMulai: '2016', tahunSelesai: '2019'},
            {nama: 'OSIS SMKN 1 Katapang', tahunMulai: '2016', tahunSelesai: '2019'},
            {nama: 'BSO Android', tahunMulai: '2021', tahunSelesai: '2022'},
            {nama: 'Google Developer Student Club Chapter UINSGD BDG', tahunMulai: '2021', tahunSelesai: '2022'},
        ],
        pengalaman: [
                {nama: 'PT. Aegis Ultima Tkenologi (PKL)', tahunMulai: '2018'},
                {nama: 'PT. AUN Wahana Wijaya (Freelance)', tahunMulai: '2019'},
                {nama: 'PT. Giandjo Finance Studio (Full Time)', tahunMulai: '2020'},
                {nama: 'Panitia Sosialisasi Proker Himatif Kabinet Sabilulungan', tahunMulai: '2020'},
                {nama: 'Kestari Legisma Sema-FST UINSGD', tahunMulai: '2021'},
        ],
        pendidikan: [
            {nama: 'SDN Taman Kopo Indah', tahunMulai: '2007', tahunSelesai: '2012'},
            {nama: 'SMPN 1 Margahayu', tahunMulai: '2012', tahunSelesai: '2016'},
            {nama: 'SMKN 1 Katapang', tahunMulai: '2016', tahunSelesai: '2019'},
            {nama: 'UIVERSITAS ISLAM NEGERI SUNAN GUNUNG DJATI BANDUNG', tahunMulai: '2019', tahunSelesai: 'Sekarang'},
        ]
    }, 
    {
        color: '#540d6e',
        url: 'nurul', 
        nama: 'Nurul Aulia Dewi',
        photo: 'assets/nurul.jpeg',
        intro: 'Halo, saya Nurul saya berusia 20 tahun. Saya adalah seorang mahasiswi.',
        alamat: 'JLN. ANYELIR 1 NO.96 RT.08 RW.14 RANCAEKEK KENCANA',
        ttl: 'Bandung, 8 Maret 2001',
        sosmed: {
            email: 'nurulauliadewi958@gmail.com',
            wa: '+6281914067428',
            ig: 'napanapad',
            twitter: 'notnnd0000',
        },
        skill: {
            deskripsi: 'Saya mampu berbahasa inggris secara pasif, mampu bekerja sama tim, menguasai microsoft office, menguasai bahasa pemrograman PHP, Java serta framework Laravel',
            listSkill: ['Kerja Tim'],
        },
        organisasi: [
            {nama: 'Himpunan Mahasiswa Teknik Informatika (HIMATIF)', tahunMulai: '2020', tahunSelesai: '2021'},
            {nama: 'Palang Merah Remaja SMPN 3 Rancaekek', tahunMulai: '2014', tahunSelesai: '2015'},
            {nama: 'OSIS SMPN 3 Rancaekek', tahunMulai: '2013', tahunSelesai: '2015'},
        ],
        pengalaman: [
                {nama: 'Panitia IT FAIR', tahunMulai: '2019'},
                {nama: 'BSO DAY - Organizing COmitte', tahunMulai: '2021'},
        ],
        pendidikan: [
            {nama: 'SDN Kencana Indah 1', tahunMulai: '2007', tahunSelesai: '2012'},
            {nama: 'SMPN 3 Rancaekek', tahunMulai: '2012', tahunSelesai: '2016'},
            {nama: 'SMAN 1 Rancaekek', tahunMulai: '2016', tahunSelesai: '2019'},
            {nama: 'UIVERSITAS ISLAM NEGERI SUNAN GUNUNG DJATI BANDUNG', tahunMulai: '2019', tahunSelesai: 'Sekarang'},
        ]
    }, 
    {
        color: '#3bceac',
        url: 'zulfa', 
        nama: 'Zulfa Dwi Audina',
        photo: 'assets/zulfa.jpg',
        intro: 'Halo, saya Audi saya berusia 19 tahun. Saya adalah seorang mahasiswi.',
        alamat: 'JLN. NUSANTARA 1 NO. 4 RT.10/RW.22 KAV. BULAK MACAN KEL. HARAPAN JAYA KEC. BEKASI UTARA KOTA BEKASI 17124',
        ttl: 'Bekasi, 11 November 2001',
        sosmed: {
            email: 'zulfaaudina11@gmail.com',
            wa: '+6287779227561',
            ig: 'zulfaudina',
            twitter: 'ahudiwna',
        },
        skill: {
            deskripsi: 'Saya memiliki sifat yang disiplin, ramah dan pekerja keras secara mandiri, dan mampu melakukan kerja tim dengan baik.',
            listSkill: ['Kreativitas', 'Komunikasi', 'Kerja Tim', 'Management'],
        },
        organisasi: [
            {nama: 'Himpunan Mahasiswa Teknik Informatika (HIMATIF)', tahunMulai: '2020', tahunSelesai: '2021'},
            {nama: 'PERS REAKSI SAINTEK', tahunMulai: '2020', tahunSelesai: '2021'},
            {nama: 'Remaja Masjid Islam Al-Ikhlas', tahunMulai: '2020', tahunSelesai: '2021'},
        ],
        pengalaman: [
                {nama: 'Informatics Badminton and Futsal Competation - Laison Officier', tahunMulai: '2019'},
        ],
        pendidikan: [
            {nama: 'SDN Harapan Jaya IX', tahunMulai: '2007', tahunSelesai: '2012'},
            {nama: 'SMPN 25 Bekasi', tahunMulai: '2012', tahunSelesai: '2016'},
            {nama: 'SMA MARTIA BHAKTI BEKASI', tahunMulai: '2016', tahunSelesai: '2019'},
            {nama: 'UIVERSITAS ISLAM NEGERI SUNAN GUNUNG DJATI BANDUNG', tahunMulai: '2019', tahunSelesai: 'Sekarang'},
        ]
    },
]

function halamanIndex() {
    function initTim() {
        var peopleHtml = '';
        people.forEach((person) => {
            var personHtml = `<div class="person card border-0">
                <div class="row g-0">
                    <div class="col-md-3" style="background-image: url('${person.photo}'); background-size: cover; background-position: center center; border-radius: 4px;"></div>
                    <div class="col-md-9">
                        <div class="card-body">
                            <h5 class="card-title">${person.nama}</h5>
                            <p class="card-text">${person.intro}</p>
                        </div>
                    </div>
                </div>
            </div>`
            peopleHtml += personHtml
        })
        document.getElementById('team').innerHTML = peopleHtml
    }
    
    
    function initTimHover() {
        document.querySelectorAll('.person').forEach((item, index) => {
            item.addEventListener('mouseover', () => {
                item.classList.add('shadow', 'transisi')
            })
        
            item.addEventListener('mouseleave', () => {
                item.classList.remove('shadow', 'transisi')
            })
        
            item.addEventListener('click', () => {
                window.location = 'profil.html?person=' + people[index].url
            })
        })
    }

    initTim()
    initTimHover()
}

function halamanProfil(url) {
    const index = people.findIndex(e => e.url == url);
    const person = people[index]

    function setKonten() {
        // document.getElementsByClassName('warnadasar').style.backgroundColor = "red"
        document.getElementById('fotoProfil').style.backgroundImage = `url('${person.photo}')`
        document.getElementById('nama').innerText = person.nama
        document.getElementById('intro').innerText = person.intro
        document.getElementById('ttl').innerText = person.ttl
        document.getElementById('fotoProfil').src = person.photo
        document.getElementById('deskripsi-skill').innerText = person.skill.deskripsi
        document.getElementById('alamat').innerText = person.alamat
        document.getElementById('gmail').innerText = person.sosmed.email
        document.getElementById('wa').innerText = person.sosmed.wa
        document.getElementById('ig').innerText = person.sosmed.ig
        document.getElementById('twt').innerText = person.sosmed.twitter

    }

    function redirect() {
        document.querySelector('#sosmed-redirect').childNodes.forEach((item) => {
            item.addEventListener('click', () => {
                console.log(item.classList)
                if (item.classList.contains('wa')) {
                   window.open("tel: " + person.sosmed.wa, '_blank')
                }
                
                if (item.classList.contains('ig')) {
                    window.open("https://www.instagram.com/" + person.sosmed.ig, '_blank')
                }
                
                if (item.classList.contains('twt')) {
                    window.open("https://twitter.com/" + person.sosmed.twitter, '_blank')
                }
            })


        })
    }

    function tampilSkill() {
        var htmlBaru = ''
        person.skill.listSkill.forEach((skill) => {
            var nodeHtml = `<div class="p-3 m-2 bg-white rounded">${skill}</div>`
            htmlBaru += nodeHtml
        })
        document.getElementById('skill').innerHTML = htmlBaru
    }

    function tampilRiwayatPendidikan() {
        var htmlBaru = ''
        person.pendidikan.forEach((pendidikan) => {
            var nodeHtml = `<div class="col">
                <div class="card w-75 p-2 shadow-sm">
                    <div class="card-body">
                        <h5 class="card-title">${pendidikan.nama.split(' ')[0]}</h5>
                        <p class="card-text">${pendidikan.nama}</p>
                        <p class="card-text"><small class="text-muted">${pendidikan.tahunMulai} - ${pendidikan.tahunSelesai}</small></p>
                    </div>
                </div>
            </div>`
            htmlBaru += nodeHtml
        })
        document.getElementById('riwayat-pendidikan').innerHTML = htmlBaru
    }

    function tampilPengalaman() {
        var htmlBaru = ''
        person.pengalaman.forEach((pengalaman) => {
            var nodeHtml = `<li class="p-3 m-2 bg-white rounded">${pengalaman.nama} <strong>(${pengalaman.tahunMulai})</strong></li>`
            htmlBaru += nodeHtml
        })
        document.getElementById('pengalaman').innerHTML = htmlBaru
    }

    function tampilRiwayatOrganisasi() {
        var htmlBaru = ''
        person.organisasi.forEach((organisasi) => {
            var nodeHtml = `<li class="p-3 m-2 bg-white rounded">
                <div class="d-flex flex-column">
                    <p>${organisasi.nama}</p>
                    <p class="badge bg-primary"><small>${organisasi.tahunMulai} - ${organisasi.tahunSelesai}</small></p>
                </div>
            </li>`
            htmlBaru += nodeHtml
        })
        document.getElementById('riwayat-organisasi').innerHTML = htmlBaru
    }

    document.title = person.nama
    setKonten()
    redirect()
    tampilSkill()
    tampilRiwayatPendidikan()
    tampilPengalaman()
    tampilRiwayatOrganisasi()
}

window.addEventListener('resize', () => {
    const width = window.innerWidth
    const height = window.innerHeight
    
    if (width <= 768) {
        document.getElementById('intro-section').classList.add('flex-column', 'flex-column-reverse')
    } else {
        document.getElementById('intro-section').classList.remove('flex-column', 'flex-column-reverse')
    }
})