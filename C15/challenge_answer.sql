-- 1.
SELECT a.nim, a.nama, a.umur, a.alamat, b.nama AS jurusan FROM mahasiswa a, jurusan b WHERE a.jurusan = b.kode;

-- 2.
SELECT a.nim, a.nama, a.umur, a.alamat, b.nama AS jurusan FROM mahasiswa a, jurusan b WHERE a.jurusan = b.kode AND umur < 20;

-- 3.
SELECT a.nim, a.nama, b.nama AS mata_kuliah, c.nilai FROM mahasiswa a, mata_kuliah b, mata_kuliah_mahasiswa c WHERE a.nim = c.mahasiswa AND b.kode = c.mata_kuliah AND (c.nilai = 'B' OR c.nilai = 'A');

-- 4.
SELECT a.nim, a.nama, 
  (SELECT SUM(b.sks) FROM mata_kuliah b, mata_kuliah_mahasiswa c WHERE b.kode = c.mata_kuliah AND c.mahasiswa = a.nim) AS total_sks
  FROM mahasiswa a, mata_kuliah b, mata_kuliah_mahasiswa c
  WHERE a.nim = c.mahasiswa AND b.kode = c.mata_kuliah AND total_sks > 10 GROUP BY a.nim;

-- 5.
SELECT a.nim, a.nama FROM mahasiswa a, mata_kuliah b, mata_kuliah_mahasiswa c WHERE a.nim = c.mahasiswa AND b.kode = c.mata_kuliah AND b.nama = 'Data Mining';

-- 6.
SELECT a.nidn, a.nama,
  (SELECT COUNT(b.mahasiswa) FROM dosen c, mata_kuliah_mahasiswa d WHERE c.mata_kuliah = d.mata_kuliah AND c.mata_kuliah = a.mata_kuliah) AS jumlah_mahasiswa
  FROM dosen a, mata_kuliah_mahasiswa b
  WHERE a.mata_kuliah = b.mata_kuliah GROUP BY a.nidn;

-- 7.
SELECT a.nim, a.nama, a.umur, a.alamat, b.nama AS jurusan FROM mahasiswa a, jurusan b WHERE a.jurusan = b.kode ORDER BY umur DESC;

-- 8.
SELECT a.nilai, mahasiswa_jurusan.nim AS nim_mahasiswa, mahasiswa_jurusan.nama AS nama_mahasiswa, b.kode AS kode_mata_kuliah, b.nama AS nama_mata_kuliah, c.nidn AS nidn_dosen, c.nama AS nama_dosen
  FROM mata_kuliah_mahasiswa a, mata_kuliah b, dosen c
  LEFT JOIN (
    SELECT a.nim, a.nama, a.umur, a.alamat, b.nama AS jurusan FROM mahasiswa a, jurusan b WHERE a.jurusan = b.kode
  ) mahasiswa_jurusan ON a.mahasiswa = mahasiswa_jurusan.nim
  WHERE a.mata_kuliah = b.kode AND (a.nilai = 'D' OR a.nilai = 'E') GROUP BY a.mata_kuliah;