-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 08, 2022 at 12:30 PM
-- Server version: 10.4.20-MariaDB
-- PHP Version: 8.0.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `police_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `district`
--

CREATE TABLE `district` (
  `d_id` int(2) NOT NULL,
  `d_name` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `district`
--

INSERT INTO `district` (`d_id`, `d_name`) VALUES
(1, 'Ahmedabad'),
(2, 'Surat'),
(3, 'Bhavnagar');

-- --------------------------------------------------------

--
-- Table structure for table `feedback`
--

CREATE TABLE `feedback` (
  `id` int(11) NOT NULL,
  `p_id` int(6) NOT NULL,
  `m_number` int(12) NOT NULL,
  `q1` varchar(50) NOT NULL,
  `q2` varchar(50) NOT NULL,
  `q3` varchar(300) NOT NULL,
  `f_date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `feedback`
--

INSERT INTO `feedback` (`id`, `p_id`, `m_number`, `q1`, `q2`, `q3`, `f_date`) VALUES
(4, 0, 0, '2', '1', 'good', '2022-10-08'),
(5, 0, 0, '3', '3', 'good service', '2022-10-08'),
(6, 0, 0, '2', '1', 'good', '2022-10-08'),
(7, 0, 0, '3', '2', 'very good', '2022-10-08'),
(8, 0, 0, '2', '5', 'exceelant work', '2022-10-08'),
(9, 0, 0, '3', '3', 'nice work', '2022-10-08'),
(10, 0, 0, '1', '4', 'good police station', '2022-10-08'),
(11, 0, 0, '1', '2', 'good environment\r\n', '2022-10-08'),
(12, 0, 0, '3', '3', 'bad police station', '2022-10-08'),
(13, 0, 0, '1', '2', 'bad police officer behaviour', '2022-10-08'),
(14, 0, 0, '1', '1', 'police officer not come in time', '2022-10-08'),
(15, 0, 0, '1', '2', 'very bed police officer', '2022-10-08'),
(16, 0, 0, '1', '5', 'petrioling services is good', '2022-10-08'),
(17, 0, 0, '1', '3', 'petroling is not good', '2022-10-08'),
(18, 0, 0, '1', '4', 'constable is good person', '2022-10-08'),
(19, 0, 0, '1', '2', 'very clean police station', '2022-10-08'),
(20, 0, 0, '1', '3', 'police officer is curretpted', '2022-10-08'),
(21, 0, 0, '2', '1', 'police officer is honest', '2022-10-08'),
(22, 0, 0, '1', '3', 'all constable and police officer is clever', '2022-10-08'),
(23, 0, 0, '1', '3', 'good service', '2022-10-08'),
(24, 0, 0, '1', '1', 'authentication service is good', '2022-10-08');

-- --------------------------------------------------------

--
-- Table structure for table `ps_detail`
--

CREATE TABLE `ps_detail` (
  `p_id` int(3) NOT NULL,
  `d_id` int(2) NOT NULL,
  `s_id` int(2) NOT NULL,
  `p_name` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `ps_detail`
--

INSERT INTO `ps_detail` (`p_id`, `d_id`, `s_id`, `p_name`) VALUES
(1, 1, 1, 'Kalupur Police Station'),
(2, 1, 2, 'Bopal Police Station'),
(3, 3, 4, 'Sihor Police Station'),
(4, 3, 4, 'Umrala Police Station'),
(5, 2, 3, 'Varachha Police Station'),
(6, 2, 3, 'Katargam Police Station');

-- --------------------------------------------------------

--
-- Table structure for table `sub_division`
--

CREATE TABLE `sub_division` (
  `s_id` int(2) NOT NULL,
  `d_id` int(2) NOT NULL,
  `s_name` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `sub_division`
--

INSERT INTO `sub_division` (`s_id`, `d_id`, `s_name`) VALUES
(1, 1, 'Kalupur'),
(2, 1, 'Bopal'),
(3, 3, 'umrala'),
(4, 3, 'mahuva'),
(5, 2, 'Varachha'),
(6, 2, 'Katargam');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `district`
--
ALTER TABLE `district`
  ADD PRIMARY KEY (`d_id`);

--
-- Indexes for table `feedback`
--
ALTER TABLE `feedback`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `ps_detail`
--
ALTER TABLE `ps_detail`
  ADD PRIMARY KEY (`p_id`);

--
-- Indexes for table `sub_division`
--
ALTER TABLE `sub_division`
  ADD PRIMARY KEY (`s_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `feedback`
--
ALTER TABLE `feedback`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- AUTO_INCREMENT for table `ps_detail`
--
ALTER TABLE `ps_detail`
  MODIFY `p_id` int(3) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `sub_division`
--
ALTER TABLE `sub_division`
  MODIFY `s_id` int(2) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
