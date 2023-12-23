INSERT INTO jurusan(kode, nama) VALUES ('D23','Ilmu Komputer');

INSERT INTO mata_kuliah(kode, nama, sks, jurusan) VALUES
  ('K12','Paradigma Pemrograman', 3, 'D23'),
  ('K10','Pemrograman Berbasis Objek', 4, 'D23'),
  ('A40','Data Mining', 4, 'D23');

INSERT INTO mahasiswa(nim, nama, umur, alamat, jurusan) VALUES
  (2045, 'Andi', 18, 'Dr. Setiabudi No.1', 'D23'),
  (1870, 'Faiz', 19, 'Cijambe No.12', 'D23'),
  (1845, 'Aldi', 20, 'Cihapit No.5', 'D23');

INSERT INTO mata_kuliah_mahasiswa(mahasiswa, mata_kuliah, nilai) VALUES
  (2045, 'K12', 'A'),
  (2045, 'K10', 'B'),
  (1845, 'K12', 'C'),
  (1845, 'K10', 'D'),
  (1845, 'A40', 'E'),
  (1870, 'K10', 'D'),
  (1870, 'A40', 'A');

INSERT INTO dosen(nidn, nama, jurusan, mata_kuliah) VALUES
  (1235,'Irfan', 'D23', 'K12'),
  (5272,'Andri', 'D23', 'K10'),
  (3761,'Aldi', 'D23', 'A40');

-- INSERT INTO mata_kuliah_dosen(dosen, mata_kuliah) VALUES
--   (1235, 'K12'),
--   (5272, 'K10'),
--   (3761, 'A40');