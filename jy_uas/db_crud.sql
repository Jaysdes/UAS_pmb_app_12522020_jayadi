-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 11 Jan 2024 pada 09.50
-- Versi server: 10.4.27-MariaDB
-- Versi PHP: 8.0.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_crud`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `login`
--

CREATE TABLE `login` (
  `id` int(11) NOT NULL,
  `npm` int(8) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `login`
--

INSERT INTO `login` (`id`, `npm`, `email`, `password`) VALUES
(1, 12522020, 'jy@dim.com', '111'),
(2, 1252222, 'jy@gmail.com', '122');

-- --------------------------------------------------------

--
-- Struktur dari tabel `tb_mahasiswa`
--

CREATE TABLE `tb_mahasiswa` (
  `id` int(11) NOT NULL,
  `nama` varchar(100) NOT NULL,
  `jenis_kelamin` varchar(1) NOT NULL,
  `no_hp` varchar(12) NOT NULL,
  `email` varchar(50) NOT NULL,
  `asal_sekolah` varchar(50) NOT NULL,
  `jurusan` varchar(50) NOT NULL,
  `jenjang` varchar(50) NOT NULL,
  `kelas` varchar(20) NOT NULL,
  `info` varchar(20) NOT NULL,
  `foto` varchar(225) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data untuk tabel `tb_mahasiswa`
--

INSERT INTO `tb_mahasiswa` (`id`, `nama`, `jenis_kelamin`, `no_hp`, `email`, `asal_sekolah`, `jurusan`, `jenjang`, `kelas`, `info`, `foto`) VALUES
(1, 'Jamalu', 'L', '0', '', '', 'SI', '', '', '', '3.jpg'),
(3, 'Jasada', 'L', '0', '', '', 'TI', '', '', '', '5.jpg'),
(4, 'daasdad', 'L', '0', '', '', 'TI', '', '', '', '4.jpg'),
(5, 'dasasda', 'L', '0', '', '', 'TI', '', '', '', 's.jpg'),
(6, 'Mahadasa', 'L', '855555122', 'mama@ada.com', 'undefined', 'Teknik Informatika', 'S1', 'Kelas B', 'mahasiswa', '2.jpg'),
(10, 'mae', 'P', '082131231', 'mae@sad.ac', 'asasa', 'Teknik Komputer', 'S3', 'kelas A', 'saudara', '4.jpg'),
(11, 'maman', 'L', '01012123', 'maman@.dad', 'asadada', 'Teknik Informatika', 'S1', 'Kelas C', 'teman', '2.jpg');

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `login`
--
ALTER TABLE `login`
  ADD PRIMARY KEY (`id`,`npm`);

--
-- Indeks untuk tabel `tb_mahasiswa`
--
ALTER TABLE `tb_mahasiswa`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `login`
--
ALTER TABLE `login`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT untuk tabel `tb_mahasiswa`
--
ALTER TABLE `tb_mahasiswa`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
