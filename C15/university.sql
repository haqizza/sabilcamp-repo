CREATE TABLE jurusan(
  kode TEXT PRIMARY KEY NOT NULL,
  nama TEXT
);

CREATE TABLE mata_kuliah(
  kode TEXT PRIMARY KEY NOT NULL,
  nama TEXT,
  sks INTEGER,
  jurusan TEXT NOT NULL,
  FOREIGN KEY(jurusan) REFERENCES jurusan(kode)
);

CREATE TABLE mahasiswa(
  nim INTEGER PRIMARY KEY NOT NULL,
  nama TEXT,
  umur INTEGER,
  alamat TEXT,
  jurusan TEXT NOT NULL,
  FOREIGN KEY(jurusan) REFERENCES jurusan(kode)
);

CREATE TABLE mata_kuliah_mahasiswa(
  mahasiswa INTEGER NOT NULL,
  mata_kuliah TEXT NOT NULL,
  nilai TEXT,
  FOREIGN KEY(mahasiswa) REFERENCES mahasiswa(nim)
  FOREIGN KEY(mata_kuliah) REFERENCES mata_kuliah(kode)
);

CREATE TABLE dosen(
  nidn INTEGER PRIMARY KEY NOT NULL,
  nama TEXT,
  jurusan TEXT NOT NULL,
  mata_kuliah TEXT NOT NULL,
  FOREIGN KEY(jurusan) REFERENCES jurusan(kode)
  FOREIGN KEY(mata_kuliah) REFERENCES mata_kuliah(kode)
);

-- CREATE TABLE mata_kuliah_dosen(
--   dosen INTEGER PRIMARY KEY NOT NULL,
--   mata_kuliah TEXT NOT NULL,
--   FOREIGN KEY(dosen) REFERENCES dosen(kode)
--   FOREIGN KEY(mata_kuliah) REFERENCES mata_kuliah(kode)
-- );

