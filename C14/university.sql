CREATE TABLE jurusan(
  jurusan_id INTEGER PRIMARY KEY NOT NULL AUTOINCREMENT,
  nama TEXT
);

CREATE TABLE mata_kuliah(
  mata_kuliah_id INTEGER PRIMARY KEY NOT NULL AUTOINCREMENT,
  nama TEXT,
  sks INTEGER,
  jurusan INTEGER NOT NULL,
  FOREIGN KEY(jurusan) REFERENCES jurusan(jurusan_id)
);

CREATE TABLE mahasiswa(
  mahasiswa_id INTEGER NOT NULL AUTOINCREMENT,
  nim INTEGER PRIMARY KEY NOT NULL,
  nama TEXT,
  alamat TEXT,
  jurusan INTEGER NOT NULL,
  mata_kuliah INTEGER NOT NULL,
  FOREIGN KEY(jurusan) REFERENCES jurusan(jurusan_id)
  FOREIGN KEY(mata_kuliah) REFERENCES jurusan(mata_kuliah_id)
);

CREATE TABLE mata_kuliah_mahasiswa(
  mahasiswa INTEGER PRIMARY KEY NOT NULL,
  mata_kuliah INTEGER NOT NULL,
  FOREIGN KEY(mahasiswa) REFERENCES mahasiswa(nim)
  FOREIGN KEY(mata_kuliah) REFERENCES jurusan(mata_kuliah_id)
);

CREATE TABLE dosen(
  dosen_id INTEGER PRIMARY KEY NOT NULL AUTOINCREMENT,
  nama TEXT,
  jurusan INTEGER NOT NULL,
  mata_kuliah INTEGER NOT NULL,
  FOREIGN KEY(jurusan) REFERENCES jurusan(jurusan_id)
  FOREIGN KEY(mata_kuliah) REFERENCES mata_kuliah(mata_kuliah_id)
);

CREATE TABLE mata_kuliah_dosen(
  dosen INTEGER PRIMARY KEY NOT NULL,
  mata_kuliah INTEGER NOT NULL,
  FOREIGN KEY(dosen) REFERENCES dosen(dosen_id)
  FOREIGN KEY(mata_kuliah) REFERENCES jurusan(mata_kuliah_id)
);

