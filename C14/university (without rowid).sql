CREATE TABLE jurusan(
  nama TEXT PRIMARY KEY NOT NULL
);

CREATE TABLE mata_kuliah(
  nama TEXT PRIMARY KEY NOT NULL,
  sks INTEGER,
  jurusan TEXT NOT NULL,
  FOREIGN KEY(jurusan) REFERENCES jurusan(nama)
);

CREATE TABLE mahasiswa(
  nim INTEGER PRIMARY KEY NOT NULL,
  nama TEXT,
  alamat TEXT,
  jurusan TEXT NOT NULL,
  FOREIGN KEY(jurusan) REFERENCES jurusan(nama)
);

CREATE TABLE mata_kuliah_mahasiswa(
  mahasiswa INTEGER NOT NULL,
  mata_kuliah TEXT NOT NULL,
  FOREIGN KEY(mahasiswa) REFERENCES mahasiswa(nim)
  FOREIGN KEY(mata_kuliah) REFERENCES jurusan(nama)
);

CREATE TABLE dosen(
  nama TEXT PRIMARY KEY NOT NULL,
  jurusan TEXT NOT NULL,
  FOREIGN KEY(jurusan) REFERENCES jurusan(nama)
);

CREATE TABLE mata_kuliah_dosen(
  dosen TEXT NOT NULL,
  mata_kuliah TEXT NOT NULL,
  FOREIGN KEY(dosen) REFERENCES dosen(nama)
  FOREIGN KEY(mata_kuliah) REFERENCES jurusan(nama)
);

