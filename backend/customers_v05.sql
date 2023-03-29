-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 27, 2023 at 07:12 PM
-- Server version: 10.4.25-MariaDB
-- PHP Version: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `fclager`
--

-- --------------------------------------------------------

--
-- Table structure for table `customers_v05`
--

CREATE TABLE `customers_v05` (
  `customer_id` int(11) NOT NULL,
  `customer_contractnr` varchar(100) NOT NULL,
  `customer_fullname` varchar(100) NOT NULL,
  `customer_email` varchar(100) NOT NULL,
  `customer_mobile` int(12) NOT NULL,
  `customer_address` varchar(255) NOT NULL,
  `customer_comment` text NOT NULL,
  `customer_created` timestamp NOT NULL DEFAULT current_timestamp(),
  `customer_par` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `customers_v05`
--

INSERT INTO `customers_v05` (`customer_id`, `customer_contractnr`, `customer_fullname`, `customer_email`, `customer_mobile`, `customer_address`, `customer_comment`, `customer_created`, `customer_par`) VALUES
(1, '2025E-2023', 'Rune Hansen', 'rune@pt.dk', 24475910, 'Subvej 3, DK-3440 Greve', 'Some text', '2023-03-27 15:09:33', '3333'),
(2, '3045P-2023', 'Lars Lopper', 'll@pt.dk', 44556624, 'Blomster kaj 34, DK-4050 Holbaek', 'Some text here too', '2023-03-27 15:09:33', '6655');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `customers_v05`
--
ALTER TABLE `customers_v05`
  ADD PRIMARY KEY (`customer_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `customers_v05`
--
ALTER TABLE `customers_v05`
  MODIFY `customer_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
