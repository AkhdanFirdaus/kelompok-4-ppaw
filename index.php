<?php

$color = '#ee4266';
$url = 'akhdan';
$nama = 'Akhdan Musyaffa Firdaus';
$photo = 'assets/akhdan.jpg';
$intro = 'Halo, saya Akhdan saya berusia 20 tahun. Saya adalah seorang mahasiswa.';
$alamat = 'Kp. Burujul RT.06 RW.17 No. 13 Desa Mekarrahayu Kecamatan Margaasih Kabupaten Bandung 40218';
$ttl = 'Bandung, 27 Maret 2001';
$sosmed = [
    'email' => 'akhdan.musyaffa.firdaus@gmail.com',
    'wa' => '+6289624289097',
    'ig' => 'akhdanfirdaus',
    'twitter' => 'akhdanfirdaus',
];
$skill = [
    'deskripsi' => 'Saya mampu menguasai bahasa pemrograman PHP, C++, C#, Java, dan lain sebagainya. Selain itu juga mampu menguasai arduino, AI, PS, XD',
    'listSkill' => ['Fullstack Mobile Programming', 'Fullstack Web Programming', 'Desktop Programming'],
];
$organisasi = [
    [
        'nama' => 'Kelompok Ilmiah Remaja SMKN 1 Katapang',
        'tahunMulai' => '2016',
        'tahunSelesai' => '2019'
    ],
    [
        'nama' => 'OSIS SMKN 1 Katapang',
        'tahunMulai' => '2016',
        'tahunSelesai' => '2019'
    ],
    [
        'nama' => 'BSO Android',
        'tahunMulai' => '2021',
        'tahunSelesai' => '2022'
    ],
    [
        'nama' => 'Google Developer Student Club Chapter UINSGD BDG',
        'tahunMulai' => '2021',
        'tahunSelesai' => '2022'
    ],
];
$pengalaman = [
    [
        'nama' => 'PT. Aegis Ultima Tkenologi (PKL)',
        'tahunMulai' => '2018'
    ],
    [
        'nama' => 'PT. AUN Wahana Wijaya (Freelance)',
        'tahunMulai' => '2019'
    ],
    [
        'nama' => 'PT. Giandjo Finance Studio (Full Time)',
        'tahunMulai' => '2020'
    ],
    [
        'nama' => 'Panitia Sosialisasi Proker Himatif Kabinet Sabilulungan',
        'tahunMulai' => '2020'
    ],
    [
        'nama' => 'Kestari Legisma Sema-FST UINSGD',
        'tahunMulai' => '2021'
    ],
];
$pendidikan = [
    [
        'nama' => 'SDN Taman Kopo Indah',
        'tahunMulai' => '2007',
        'tahunSelesai' => '2012'
    ],
    [
        'nama' => 'SMPN 1 Margahayu',
        'tahunMulai' => '2012',
        'tahunSelesai' => '2016'
    ],
    [
        'nama' => 'SMKN 1 Katapang',
        'tahunMulai' => '2016',
        'tahunSelesai' => '2019'
    ],
    [
        'nama' => 'UIVERSITAS ISLAM NEGERI SUNAN GUNUNG DJATI BANDUNG',
        'tahunMulai' => '2019',
        'tahunSelesai' => 'Sekarang'
    ],
]
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <link rel="stylesheet" href="assets/app.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta2/css/all.min.css" integrity="sha512-YWzhKL2whUzgiheMoBFwW8CKV4qpHQAEuvilg9FAn5VJUDwKZZxkJNuGM4XkWuk94WCrrwslk8yWNGmY1EduTA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" />
    <title>Portfolio - <?= $nama ?></title>

</head>

<body>
    <a href="index.html" class="btn btn-light rounded position-absolute sticky-top mx-5 my-2" id="navigasi"><i class="fas fa-chevron-left"></i></a>
    <div class="container my-5 position-relative">
        <div class="d-flex p-5 bg-light align-items-center" id="intro-section">
            <div class="flex-grow-1 ms-3 animate__animated">
                <h1 class="display-4" id="nama"><?= $nama ?></h1>
                <p class="lead" id="intro"><?= $intro ?>.</p>
                <p class="fw-bold" id="ttl"><?= $ttl ?>.</p>
                <div class="d-flex" id="sosmed-redirect">
                    <a class="me-2 btn btn-success rounded-circle wa" href="tel:<?= $sosmed['wa'] ?>" target="_blank"><i class="fab fa-whatsapp"></i></a>
                    <a class="me-2 btn btn-danger rounded-circle ig" href="https://www.instagram.com/<?= $sosmed['ig'] ?>" target="_blank"><i class="fab fa-instagram"></i></a>
                    <a class="me-2 btn btn-primary rounded-circle twt" href="https://twitter.com/<?= $sosmed['twitter'] ?>" target="_blank"><i class="fab fa-twitter"></i></a>
                </div>
            </div>
            <div class="flex-shrink-0">
                <img class="rounded-circle mb-2 animate__animated" id="fotoProfil" src="<?= $photo ?>" alt="photo" />
            </div>
        </div>

        <div class="my-4">
            <div class="row">
                <div class="col-md-6 col-sm-12">
                    <div class="shadow p-4 m-3 rounded" style="background-color: <?= $color ?>;">
                        <div class="d-flex flex-wrap" id="skill">
                            <?php foreach ($skill['listSkill'] as $item) { ?>
                                <div class="p-3 m-2 bg-white rounded animate__animated"><?= $item ?></div>
                            <?php } ?>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-sm-12">
                    <div class="d-flex flex-column justify-content-center m-3">
                        <h3>Kemampuan Saya</h3>
                        <p id="deskripsi-skill" class="animate__animated"><?= $skill['deskripsi'] ?></p>
                    </div>
                </div>
            </div>
        </div>

        <div class="p-5 bg-light d-block w-100">
            <h3 class="text-center">Riwayat Pendidikan</h3>
            <div class="row row-cols-1 row-cols-md-4 g-4" id="riwayat-pendidikan">
                <?php foreach ($pendidikan as $pend) { ?>
                    <div class="col">
                        <div class="card w-75 p-2 shadow-sm animate__animated">
                            <div class="card-body">
                                <h5 class="card-title">${pendidikan.nama.split(' ')[0]}</h5>
                                <p class="card-text"><?= $pend['nama'] ?></p>
                                <p class="card-text"><small class="text-muted"><?= $pend['tahunMulai'] . ' - ' . $pend['tahunSelesai'] ?></small></p>
                            </div>
                        </div>
                    </div>
                <?php } ?>
            </div>
        </div>

        <div class="p-5 my-4">
            <div class="row">
                <div class="col-md-6">
                    <div class="p-4">
                        <h3>Pengalaman</h3>
                        <ul id="pengalaman" class="mt-3">
                            <?php foreach ($pengalaman as $pglm) { ?>
                                <li class="p-3 m-2 bg-white rounded animate__animated"><?= $pglm['nama'] ?> <strong>(<?= $pglm['tahunMulai'] ?></strong></li>
                            <?php } ?>
                        </ul>
                    </div>
                </div>
                <div class="col-md-6">
                    <h3 class="p-3">Riwayat Organisasi</h3>
                    <div class="shadow p-4 m-3 rounded" style="background-color: <?= $color ?>;">
                        <ul id="riwayat-organisasi" class="list-unstyled mt-3">
                            <?php foreach ($organisasi as $org) { ?>
                                <li class="p-3 m-2 bg-white rounded animate__animated">
                                    <div class="d-flex flex-column">
                                        <p><?= $org['nama'] ?></p>
                                        <p class="badge bg-primary"><small><?= $org['tahunMulai'] . ' - ' . $org['tahunSelesai'] ?></small></p>
                                    </div>
                                </li>
                            <?php } ?>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        <div class="p-5 bg-light d-block w-100 ">
            <div class="row">
                <div class="col-md-6 animate__animated">
                    <h3>Kontak Saya</h3>
                    <p id="alamat" class="text-capitalize"><?= $alamat ?></p>
                    <ul>
                        <li class="mb-2">
                            <div class="d-inline-block p-2 bg-secondary text-white rounded">
                                <i class="fas fa-envelope"></i> <span id="gmail"><?= $sosmed['email'] ?></span>
                            </div>
                        </li>
                        <li class="mb-2">
                            <div class="d-inline-block p-2 bg-success text-white rounded">
                                <i class="fab fa-whatsapp"></i> <span id="wa"><?= $sosmed['wa'] ?></span>
                            </div>
                        </li>
                        <li class="mb-2">
                            <div class="d-inline-block p-2 bg-danger text-white rounded">
                                <i class="fab fa-instagram"></i> <span id="ig"><?= $sosmed['ig'] ?></span>
                            </div>
                        </li>
                        <li class="mb-2">
                            <div class="d-inline-block p-2 bg-primary text-white rounded">
                                <i class="fab fa-twitter"></i> <span id="twt"><?= $sosmed['twitter'] ?></span>
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="col-md-6 animate__animated">
                    <div class="m-2 bg-white rounded p-4">
                        <form>
                            <div class="mb-3">
                                <input type="email" placeholder="Email" class="form-control" id="nameContact" name="nameContact">
                            </div>
                            <div class="mb-3">
                                <input type="text" placeholder="Judul" class="form-control" id="emailContact" name="emailContact">
                            </div>
                            <div class="mb-3">
                                <textarea name="noteContact" placeholder="Isi" id="noteContact" class="form-control" cols="30" rows="6"></textarea>
                            </div>
                            <div class="d-grid">
                                <button type="submit" class="btn btn-primary">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    </div>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta2/js/all.min.js" integrity="sha512-cyAbuGborsD25bhT/uz++wPqrh5cqPh1ULJz4NSpN9ktWcA6Hnh9g+CWKeNx2R0fgQt+ybRXdabSBgYXkQTTmA==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>
    <script src="assets/app.js"></script>
    <script>
        const param = window.location.search;
        const person = param.substring(8, param.length)
        halamanProfil(person)
    </script>
</body>

</html>