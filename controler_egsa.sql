-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le : dim. 19 jan. 2025 à 06:33
-- Version du serveur : 9.1.0
-- Version de PHP : 8.3.14

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `controler_egsa`
--

-- --------------------------------------------------------

--
-- Structure de la table `control`
--

DROP TABLE IF EXISTS `control`;
CREATE TABLE IF NOT EXISTS `control` (
  `id` int NOT NULL AUTO_INCREMENT,
  `photo` mediumblob NOT NULL,
  `conforme` tinyint(1) NOT NULL,
  `detail` text NOT NULL,
  `id_elements` int NOT NULL,
  `Intervention` tinyint(1) NOT NULL,
  `id_rapport` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=36 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `control`
--

INSERT INTO `control` (`id`, `photo`, `conforme`, `detail`, `id_elements`, `Intervention`, `id_rapport`) VALUES
(1, '', 1, '', 0, 0, 0),
(2, '', 0, '', 0, 0, 0),
(3, '', 1, 'qsd', 1, 0, 56),
(4, '', 1, 'qsd', 2, 0, 56),
(5, '', 1, '', 3, 0, 56),
(6, '', 1, 'qsd', 4, 0, 56),
(7, '', 1, 'qsd', 5, 0, 56),
(8, '', 1, '', 6, 0, 56),
(9, '', 1, '', 7, 0, 56),
(10, '', 1, 'qsd', 10, 0, 56),
(11, '', 1, '', 12, 0, 56),
(12, '', 1, '', 13, 0, 56),
(13, '', 1, '', 1, 0, 57),
(14, '', 1, '', 2, 0, 57),
(15, '', 1, '', 3, 0, 57),
(16, '', 1, '', 4, 0, 57),
(17, '', 1, '', 5, 0, 57),
(18, '', 1, '', 6, 0, 57),
(19, '', 1, '', 7, 0, 57),
(20, '', 1, '', 10, 0, 57),
(21, '', 1, '', 12, 0, 57),
(22, '', 1, '', 13, 0, 57),
(23, '', 1, '', 1, 0, 58),
(24, '', 1, '', 2, 0, 58),
(25, '', 1, '', 3, 0, 58),
(26, '', 1, '', 4, 0, 58),
(27, '', 1, '', 5, 0, 58),
(28, '', 1, '', 6, 0, 58),
(29, '', 1, '', 7, 0, 58),
(30, '', 1, '', 8, 0, 58),
(31, '', 1, '', 9, 0, 58),
(32, '', 1, '', 13, 0, 58),
(33, '', 1, '', 14, 0, 58),
(34, '', 1, '', 15, 0, 58),
(35, '', 1, '', 17, 0, 58);

-- --------------------------------------------------------

--
-- Structure de la table `elements`
--

DROP TABLE IF EXISTS `elements`;
CREATE TABLE IF NOT EXISTS `elements` (
  `id` int NOT NULL AUTO_INCREMENT,
  `Nom` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `H_P` tinyint(1) NOT NULL,
  `ERG` tinyint(1) NOT NULL,
  `D_I` tinyint(1) NOT NULL,
  `D_N` tinyint(1) NOT NULL,
  `A_I` tinyint(1) NOT NULL,
  `A_N` tinyint(1) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `elements`
--

INSERT INTO `elements` (`id`, `Nom`, `H_P`, `ERG`, `D_I`, `D_N`, `A_I`, `A_N`) VALUES
(1, 'Eclairage', 1, 1, 1, 1, 1, 1),
(2, 'Climatisation', 1, 1, 1, 1, 1, 1),
(3, 'Sonorisation', 1, 1, 1, 1, 1, 1),
(4, 'Tapis Bagage', 0, 1, 0, 0, 1, 1),
(5, 'Téléaffichage', 1, 1, 1, 1, 1, 1),
(6, 'Sol', 1, 1, 1, 1, 1, 1),
(7, 'Scanners', 1, 1, 1, 1, 1, 1),
(8, 'Escalators', 1, 0, 0, 0, 1, 1),
(9, 'Toilettes', 1, 0, 1, 1, 1, 0),
(10, 'Balances Electronique', 0, 1, 0, 0, 0, 0),
(11, 'Moussalla', 1, 0, 1, 0, 0, 0),
(12, 'Guichets d\'enregistrement', 0, 1, 0, 0, 0, 0),
(13, 'Plafonds', 1, 1, 1, 1, 1, 1),
(14, 'Portes', 1, 0, 1, 1, 1, 1),
(15, 'Escaliers', 1, 0, 0, 0, 1, 1),
(16, 'Chaises Triplettes', 1, 0, 1, 1, 0, 0),
(17, 'Chariots bagage', 1, 0, 0, 0, 1, 1);

-- --------------------------------------------------------

--
-- Structure de la table `rapport`
--

DROP TABLE IF EXISTS `rapport`;
CREATE TABLE IF NOT EXISTS `rapport` (
  `id` int NOT NULL AUTO_INCREMENT,
  `date` date NOT NULL,
  `id_user` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=59 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `rapport`
--

INSERT INTO `rapport` (`id`, `date`, `id_user`) VALUES
(1, '2025-01-16', 1),
(2, '2025-01-16', 3),
(3, '2025-01-16', 3),
(4, '2025-01-17', 3),
(5, '2025-01-17', 3),
(6, '2025-01-17', 3),
(7, '2025-01-17', 3),
(8, '2025-01-17', 3),
(9, '2025-01-17', 3),
(10, '2025-01-17', 3),
(11, '2025-01-17', 3),
(12, '2025-01-17', 3),
(13, '2025-01-17', 3),
(14, '2025-01-17', 3),
(15, '2025-01-17', 3),
(16, '2025-01-17', 3),
(17, '2025-01-17', 3),
(18, '2025-01-17', 3),
(19, '2025-01-17', 3),
(20, '2025-01-17', 3),
(21, '2025-01-17', 3),
(22, '2025-01-17', 3),
(23, '2025-01-17', 3),
(24, '2025-01-17', 3),
(25, '2025-01-17', 3),
(26, '2025-01-17', 3),
(27, '2025-01-17', 3),
(28, '2025-01-17', 3),
(29, '2025-01-17', 3),
(30, '2025-01-17', 3),
(31, '2025-01-17', 3),
(32, '2025-01-17', 3),
(33, '2025-01-17', 3),
(34, '2025-01-17', 3),
(35, '2025-01-17', 3),
(36, '2025-01-17', 3),
(37, '2025-01-17', 3),
(38, '2025-01-17', 3),
(39, '2025-01-17', 3),
(40, '2025-01-17', 3),
(41, '2025-01-17', 3),
(42, '2025-01-17', 3),
(43, '2025-01-17', 3),
(44, '2025-01-17', 3),
(45, '2025-01-17', 3),
(46, '2025-01-17', 3),
(47, '2025-01-17', 3),
(48, '2025-01-17', 3),
(49, '2025-01-17', 3),
(50, '2025-01-17', 3),
(51, '2025-01-17', 3),
(52, '2025-01-17', 3),
(53, '2025-01-17', 3),
(54, '2025-01-17', 3),
(55, '2025-01-17', 3),
(56, '2025-01-17', 3),
(57, '2025-01-18', 3),
(58, '2025-01-18', 3);

-- --------------------------------------------------------

--
-- Structure de la table `users`
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE IF NOT EXISTS `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nom` varchar(70) NOT NULL,
  `prenom` varchar(70) NOT NULL,
  `username` varchar(20) NOT NULL,
  `password` varchar(20) NOT NULL,
  `user_group` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `users`
--

INSERT INTO `users` (`id`, `nom`, `prenom`, `username`, `password`, `user_group`) VALUES
(1, 'Leftaha', 'Nadjib', 'LEFTAHA', '123', 1),
(2, 'Boudjaada', 'Zine el Abidine', 'BOUDJAADA', '123', 1),
(3, 'Benhafed', 'Billel', 'Directeur', '123456', 2),
(4, 'Zouaoui', ' Fares', 'Permanencier', '123', 2);

-- --------------------------------------------------------

--
-- Structure de la table `zone`
--

DROP TABLE IF EXISTS `zone`;
CREATE TABLE IF NOT EXISTS `zone` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nom` varchar(30) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `zone`
--

INSERT INTO `zone` (`id`, `nom`) VALUES
(1, 'Hall Publique'),
(2, 'Départ International'),
(3, 'Départ National'),
(4, 'Arrivée Internationale'),
(5, 'Arrivée Nationale'),
(6, 'Enregistrement');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
