-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Tempo de geração: 10-Out-2022 às 19:44
-- Versão do servidor: 5.7.31
-- versão do PHP: 7.3.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `netflix`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `tbgenre`
--

DROP TABLE IF EXISTS `tbgenre`;
CREATE TABLE IF NOT EXISTS `tbgenre` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `NAME` varchar(50) NOT NULL,
  `DESCR` text NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estrutura da tabela `tbmovie`
--

DROP TABLE IF EXISTS `tbmovie`;
CREATE TABLE IF NOT EXISTS `tbmovie` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `NAME` varchar(100) NOT NULL,
  `SYNOPSIS` text NOT NULL,
  `GRADE` int(11) DEFAULT NULL,
  `GENRE` int(11) NOT NULL,
  PRIMARY KEY (`ID`),
  KEY `GENRE` (`GENRE`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estrutura da tabela `tbprofile`
--

DROP TABLE IF EXISTS `tbprofile`;
CREATE TABLE IF NOT EXISTS `tbprofile` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `NAME` varchar(100) NOT NULL,
  `TYPE` varchar(1) NOT NULL,
  `IDUSER` int(11) DEFAULT NULL,
  PRIMARY KEY (`ID`),
  KEY `IDUSER` (`IDUSER`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estrutura da tabela `tbseason`
--

DROP TABLE IF EXISTS `tbseason`;
CREATE TABLE IF NOT EXISTS `tbseason` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `SUMARY` text NOT NULL,
  `EPISODE` int(11) NOT NULL,
  PRIMARY KEY (`ID`),
  KEY `EPISODE` (`EPISODE`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estrutura da tabela `tbseries`
--

DROP TABLE IF EXISTS `tbseries`;
CREATE TABLE IF NOT EXISTS `tbseries` (
  `ID` int(11) NOT NULL,
  `NAME` varchar(100) NOT NULL,
  `SYNOPSIS` text NOT NULL,
  `GENRE` int(11) NOT NULL,
  `SEASONS` int(11) NOT NULL,
  PRIMARY KEY (`ID`),
  KEY `GENRE` (`GENRE`),
  KEY `SEASONS` (`SEASONS`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estrutura da tabela `tbspisode`
--

DROP TABLE IF EXISTS `tbspisode`;
CREATE TABLE IF NOT EXISTS `tbspisode` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `NAME` varchar(20) NOT NULL,
  `DESCR` text NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estrutura da tabela `tbuser`
--

DROP TABLE IF EXISTS `tbuser`;
CREATE TABLE IF NOT EXISTS `tbuser` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `EMAIL` varchar(250) NOT NULL,
  `PASS` varchar(100) NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
