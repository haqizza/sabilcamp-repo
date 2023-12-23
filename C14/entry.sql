INSERT INTO jurusan(nama) VALUES ('Ilmu Komputer');

INSERT INTO mata_kuliah(nama, sks, jurusan) VALUES
  ('Paradigma Pemrograman', 2, 'Ilmu Komputer'),
  ('Pemrograman Berbasis Objek', 2, 'Ilmu Komputer');

INSERT INTO mahasiswa(nim, nama, alamat, jurusan) VALUES
  (2045, 'Andi', 'Dr. Setiabudi No.1', 'Ilmu Komputer'),
  (1870, 'Faiz', 'Cijambe No.12', 'Ilmu Komputer');

INSERT INTO mata_kuliah_mahasiswa(mahasiswa, mata_kuliah) VALUES
  (2045, 'Paradigma Pemrograman'),
  (2045, 'Pemrograman Berbasis Objek'),
  (1870, 'Pemrograman Berbasis Objek');

INSERT INTO dosen(nama, jurusan) VALUES
  ('Irfan', 'Ilmu Komputer'),
  ('Andri', 'Ilmu Komputer');

INSERT INTO mata_kuliah_dosen(dosen, mata_kuliah) VALUES
  ('Irfan', 'Paradigma Pemrograman'),
  ('Andri', 'Pemrograman Berbasis Objek'),
  ('Andri', 'Pemrograman Berbasis Objek');