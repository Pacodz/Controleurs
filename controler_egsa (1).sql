-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le : lun. 20 jan. 2025 à 01:41
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
) ENGINE=MyISAM AUTO_INCREMENT=727 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `control`
--

INSERT INTO `control` (`id`, `photo`, `conforme`, `detail`, `id_elements`, `Intervention`, `id_rapport`) VALUES
(455, '', 1, '', 3, 0, 96),
(454, '', 1, '', 2, 0, 96),
(436, '', 1, '', 4, 0, 94),
(446, '', 1, '', 4, 0, 95),
(445, '', 1, '', 3, 0, 95),
(444, '', 1, '', 2, 0, 95),
(443, '', 1, '', 1, 0, 95),
(442, '', 1, '', 13, 0, 94),
(441, '', 1, '', 12, 0, 94),
(440, '', 1, '', 10, 0, 94),
(439, '', 1, '', 7, 0, 94),
(438, '', 1, '', 6, 0, 94),
(437, '', 1, '', 5, 0, 94),
(435, '', 1, '', 3, 0, 94),
(428, '', 1, '', 13, 0, 93),
(427, '', 1, '', 11, 0, 93),
(426, '', 1, '', 9, 0, 93),
(434, '', 1, '', 2, 0, 94),
(433, '', 1, '', 1, 0, 94),
(432, '', 1, '', 17, 0, 93),
(431, '', 1, '', 16, 0, 93),
(425, '', 1, '', 8, 0, 93),
(424, '', 1, '', 7, 0, 93),
(423, '', 1, '', 6, 0, 93),
(422, '', 1, '', 5, 0, 93),
(421, '', 1, '', 3, 0, 93),
(420, '', 1, '', 2, 0, 93),
(419, '', 1, '', 1, 0, 93),
(430, '', 1, '', 15, 0, 93),
(429, '', 1, '', 14, 0, 93),
(453, '', 1, '', 1, 0, 96),
(452, '', 1, '', 13, 0, 95),
(451, '', 1, '', 12, 0, 95),
(450, '', 1, '', 10, 0, 95),
(449, '', 1, '', 7, 0, 95),
(448, '', 1, '', 6, 0, 95),
(447, '', 1, '', 5, 0, 95),
(456, '', 1, '', 4, 0, 96),
(457, '', 1, '', 5, 0, 96),
(458, '', 1, '', 6, 0, 96),
(459, '', 1, '', 7, 0, 96),
(460, '', 1, '', 10, 0, 96),
(461, '', 1, '', 12, 0, 96),
(462, '', 1, '', 13, 0, 96),
(463, '', 1, '', 1, 0, 97),
(464, '', 1, '', 2, 0, 97),
(465, '', 1, '', 3, 0, 97),
(466, '', 1, '', 4, 0, 97),
(467, '', 1, '', 5, 0, 97),
(468, '', 1, '', 6, 0, 97),
(469, '', 1, '', 7, 0, 97),
(470, '', 1, '', 10, 0, 97),
(471, '', 1, '', 12, 0, 97),
(472, '', 1, '', 13, 0, 97),
(473, '', 1, '', 1, 0, 98),
(474, '', 1, '', 2, 0, 98),
(475, '', 1, '', 3, 0, 98),
(476, '', 1, '', 4, 0, 98),
(477, '', 1, '', 5, 0, 98),
(478, '', 1, '', 6, 0, 98),
(479, '', 1, '', 7, 0, 98),
(480, '', 1, '', 10, 0, 98),
(481, '', 1, '', 12, 0, 98),
(482, '', 1, '', 13, 0, 98),
(483, '', 1, '', 1, 0, 99),
(484, '', 1, '', 2, 0, 99),
(485, '', 1, '', 3, 0, 99),
(486, '', 1, '', 4, 0, 99),
(487, '', 1, '', 5, 0, 99),
(488, '', 1, '', 6, 0, 99),
(489, '', 1, '', 7, 0, 99),
(490, '', 1, '', 10, 0, 99),
(491, '', 1, '', 12, 0, 99),
(492, '', 1, '', 13, 0, 99),
(493, '', 1, '', 1, 0, 100),
(494, '', 1, '', 2, 0, 100),
(495, '', 1, '', 3, 0, 100),
(496, '', 1, '', 4, 0, 100),
(497, '', 1, '', 5, 0, 100),
(498, '', 1, '', 6, 0, 100),
(499, '', 1, '', 7, 0, 100),
(500, '', 1, '', 10, 0, 100),
(501, '', 1, '', 12, 0, 100),
(502, '', 1, '', 13, 0, 100),
(503, '', 1, '', 1, 0, 101),
(504, '', 1, '', 2, 0, 101),
(505, '', 1, '', 3, 0, 101),
(506, '', 1, '', 4, 0, 101),
(507, '', 1, '', 5, 0, 101),
(508, '', 1, '', 6, 0, 101),
(509, '', 1, '', 7, 0, 101),
(510, '', 1, '', 10, 0, 101),
(511, '', 1, '', 12, 0, 101),
(512, '', 1, '', 13, 0, 101),
(513, '', 1, '', 1, 0, 102),
(514, '', 1, '', 2, 0, 102),
(515, '', 1, '', 3, 0, 102),
(516, '', 1, '', 4, 0, 102),
(517, '', 1, '', 5, 0, 102),
(518, '', 1, '', 6, 0, 102),
(519, '', 1, '', 7, 0, 102),
(520, '', 1, '', 10, 0, 102),
(521, '', 1, '', 12, 0, 102),
(522, '', 1, '', 13, 0, 102),
(523, '', 1, '', 1, 0, 103),
(524, '', 1, '', 2, 0, 103),
(525, '', 1, '', 3, 0, 103),
(526, '', 1, '', 4, 0, 103),
(527, '', 1, '', 5, 0, 103),
(528, '', 1, '', 6, 0, 103),
(529, '', 1, '', 7, 0, 103),
(530, '', 1, '', 10, 0, 103),
(531, '', 1, '', 12, 0, 103),
(532, '', 1, '', 13, 0, 103),
(533, '', 1, '', 1, 0, 104),
(534, '', 1, '', 2, 0, 104),
(535, '', 1, '', 3, 0, 104),
(536, '', 1, '', 4, 0, 104),
(537, '', 1, '', 5, 0, 104),
(538, '', 1, '', 6, 0, 104),
(539, '', 1, '', 7, 0, 104),
(540, '', 1, '', 10, 0, 104),
(541, '', 1, '', 12, 0, 104),
(542, '', 1, '', 13, 0, 104),
(543, '', 1, '', 1, 0, 105),
(544, '', 1, '', 2, 0, 105),
(545, '', 1, '', 3, 0, 105),
(546, '', 1, '', 4, 0, 105),
(547, '', 1, '', 5, 0, 105),
(548, '', 1, '', 6, 0, 105),
(549, '', 1, '', 7, 0, 105),
(550, '', 1, 'qf', 10, 0, 105),
(551, '', 1, 'qdfqf', 12, 0, 105),
(552, '', 1, '', 13, 0, 105),
(553, '', 1, '', 1, 0, 105),
(554, '', 1, '', 2, 0, 105),
(555, '', 1, '', 3, 0, 105),
(556, '', 1, '', 4, 0, 105),
(557, '', 1, '', 5, 0, 105),
(558, '', 1, '', 6, 0, 105),
(559, '', 1, '', 7, 0, 105),
(560, '', 1, '', 10, 0, 105),
(561, '', 1, '', 12, 0, 105),
(562, '', 1, '', 13, 0, 105),
(563, '', 1, '', 1, 0, 105),
(564, '', 1, '', 2, 0, 105),
(565, '', 1, '', 3, 0, 105),
(566, '', 1, '', 4, 0, 105),
(567, '', 1, '', 5, 0, 105),
(568, '', 1, '', 6, 0, 105),
(569, '', 1, '', 7, 0, 105),
(570, '', 1, '', 10, 0, 105),
(571, '', 1, '', 12, 0, 105),
(572, '', 1, '', 13, 0, 105),
(573, '', 1, '', 1, 0, 105),
(574, '', 1, '', 2, 0, 105),
(575, '', 1, '', 3, 0, 105),
(576, '', 1, '', 4, 0, 105),
(577, '', 1, '', 5, 0, 105),
(578, '', 1, '', 6, 0, 105),
(579, '', 1, '', 7, 0, 105),
(580, '', 1, '', 10, 0, 105),
(581, '', 1, '', 12, 0, 105),
(582, '', 1, '', 13, 0, 105),
(583, '', 1, '', 1, 0, 105),
(584, '', 1, '', 2, 0, 105),
(585, '', 1, '', 3, 0, 105),
(586, '', 1, '', 4, 0, 105),
(587, '', 1, '', 5, 0, 105),
(588, '', 1, '', 6, 0, 105),
(589, '', 1, '', 7, 0, 105),
(590, '', 1, '', 10, 0, 105),
(591, '', 1, '', 12, 0, 105),
(592, '', 1, '', 13, 0, 105),
(593, '', 1, '', 1, 0, 105),
(594, '', 1, '', 2, 0, 105),
(595, '', 1, '', 3, 0, 105),
(596, '', 1, '', 4, 0, 105),
(597, '', 1, '', 5, 0, 105),
(598, '', 1, '', 6, 0, 105),
(599, '', 1, '', 7, 0, 105),
(600, '', 1, '', 10, 0, 105),
(601, '', 1, '', 12, 0, 105),
(602, '', 1, '', 13, 0, 105),
(603, '', 1, '', 1, 0, 105),
(604, '', 1, '', 2, 0, 105),
(605, '', 1, '', 3, 0, 105),
(606, '', 1, '', 4, 0, 105),
(607, '', 1, '', 5, 0, 105),
(608, '', 1, '', 6, 0, 105),
(609, '', 1, '', 7, 0, 105),
(610, '', 1, '', 10, 0, 105),
(611, '', 1, '', 12, 0, 105),
(612, '', 1, '', 13, 0, 105),
(613, '', 1, '', 1, 0, 105),
(614, '', 1, '', 2, 0, 105),
(615, '', 1, '', 3, 0, 105),
(616, '', 1, '', 4, 0, 105),
(617, '', 1, '', 5, 0, 105),
(618, '', 1, '', 6, 0, 105),
(619, '', 1, '', 7, 0, 105),
(620, '', 1, '', 10, 0, 105),
(621, '', 1, '', 12, 0, 105),
(622, '', 1, '', 13, 0, 105),
(623, '', 1, '', 1, 0, 106),
(624, '', 1, '', 2, 0, 106),
(625, '', 1, '', 3, 0, 106),
(626, '', 1, '', 4, 0, 106),
(627, '', 1, '', 5, 0, 106),
(628, '', 1, '', 6, 0, 106),
(629, '', 1, '', 7, 0, 106),
(630, '', 1, '', 10, 0, 106),
(631, '', 1, '', 12, 0, 106),
(632, '', 1, '', 13, 0, 106),
(633, '', 1, '', 1, 0, 107),
(634, '', 1, '', 2, 0, 107),
(635, '', 1, '', 3, 0, 107),
(636, '', 1, '', 4, 0, 107),
(637, '', 1, '', 5, 0, 107),
(638, '', 1, '', 6, 0, 107),
(639, '', 1, '', 7, 0, 107),
(640, '', 1, '', 10, 0, 107),
(641, '', 1, '', 12, 0, 107),
(642, '', 1, '', 13, 0, 107),
(643, '', 1, '', 1, 0, 108),
(644, '', 1, '', 2, 0, 108),
(645, '', 1, '', 3, 0, 108),
(646, '', 1, '', 4, 0, 108),
(647, '', 1, '', 5, 0, 108),
(648, '', 1, '', 6, 0, 108),
(649, '', 1, '', 7, 0, 108),
(650, '', 1, '', 10, 0, 108),
(651, '', 1, '', 12, 0, 108),
(652, '', 1, '', 13, 0, 108),
(653, '', 1, '', 1, 0, 109),
(654, '', 1, '', 2, 0, 109),
(655, '', 1, '', 3, 0, 109),
(656, '', 1, '', 4, 0, 109),
(657, '', 1, '', 5, 0, 109),
(658, '', 1, '', 6, 0, 109),
(659, '', 1, '', 7, 0, 109),
(660, '', 1, '', 10, 0, 109),
(661, '', 1, '', 12, 0, 109),
(662, '', 1, '', 13, 0, 109),
(663, '', 1, '', 1, 0, 110),
(664, '', 1, '', 2, 0, 110),
(665, '', 1, '', 3, 0, 110),
(666, '', 1, '', 4, 0, 110),
(667, '', 1, '', 5, 0, 110),
(668, '', 1, '', 6, 0, 110),
(669, '', 1, '', 7, 0, 110),
(670, '', 1, '', 10, 0, 110),
(671, '', 1, '', 12, 0, 110),
(672, '', 1, '', 13, 0, 110),
(673, '', 1, '', 1, 0, 111),
(674, '', 1, '', 2, 0, 111),
(675, '', 1, '', 3, 0, 111),
(676, '', 1, '', 4, 0, 111),
(677, '', 1, '', 5, 0, 111),
(678, '', 1, '', 6, 0, 111),
(679, '', 1, '', 7, 0, 111),
(680, '', 1, '', 10, 0, 111),
(681, '', 1, '', 12, 0, 111),
(682, '', 1, '', 13, 0, 111),
(683, '', 1, '', 1, 0, 112),
(684, '', 1, '', 2, 0, 112),
(685, '', 1, '', 3, 0, 112),
(686, '', 1, '', 4, 0, 112),
(687, '', 1, '', 5, 0, 112),
(688, '', 1, '', 6, 0, 112),
(689, '', 1, '', 7, 0, 112),
(690, '', 1, '', 10, 0, 112),
(691, '', 1, '', 12, 0, 112),
(692, '', 1, '', 13, 0, 112),
(693, '', 1, '', 1, 0, 113),
(694, '', 1, '', 2, 0, 113),
(695, '', 1, '', 3, 0, 113),
(696, '', 1, '', 4, 0, 113),
(697, '', 1, '', 5, 0, 113),
(698, '', 1, '', 6, 0, 113),
(699, '', 1, '', 7, 0, 113),
(700, '', 1, '', 10, 0, 113),
(701, '', 1, '', 12, 0, 113),
(702, '', 1, '', 13, 0, 113),
(703, '', 1, '', 1, 0, 114),
(704, '', 1, '', 2, 0, 114),
(705, '', 1, '', 3, 0, 114),
(706, '', 1, '', 5, 0, 114),
(707, '', 1, '', 6, 0, 114),
(708, '', 1, '', 7, 0, 114),
(709, '', 1, '', 8, 0, 114),
(710, '', 1, '', 9, 0, 114),
(711, '', 1, '', 11, 0, 114),
(712, '', 1, '', 13, 0, 114),
(713, '', 1, '', 14, 0, 114),
(714, '', 1, '', 15, 0, 114),
(715, '', 1, '', 16, 0, 114),
(716, '', 1, '', 17, 0, 114),
(717, '', 1, '', 1, 0, 115),
(718, '', 1, '', 2, 0, 115),
(719, '', 1, '', 3, 0, 115),
(720, '', 1, '', 4, 0, 115),
(721, '', 1, '', 5, 0, 115),
(722, '', 1, '', 6, 0, 115),
(723, '', 1, '', 7, 0, 115),
(724, '', 1, '', 10, 0, 115),
(725, '', 1, '', 12, 0, 115),
(726, '', 1, '', 13, 0, 115);

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
  `date` datetime NOT NULL,
  `id_user` int NOT NULL,
  `zone` varchar(10) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=116 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `rapport`
--

INSERT INTO `rapport` (`id`, `date`, `id_user`, `zone`) VALUES
(93, '2025-01-19 23:00:27', 2, 'H_P'),
(94, '2025-01-19 23:17:08', 2, 'ERG'),
(95, '2025-01-19 23:17:44', 2, 'ERG'),
(96, '2025-01-19 23:19:08', 2, 'ERG'),
(97, '2025-01-19 23:20:47', 2, 'ERG'),
(98, '2025-01-19 23:20:54', 2, 'ERG'),
(99, '2025-01-19 23:29:29', 2, 'ERG'),
(100, '2025-01-19 23:30:12', 2, 'ERG'),
(101, '2025-01-19 23:30:50', 2, 'ERG'),
(102, '2025-01-19 23:31:41', 1, 'ERG'),
(103, '2025-01-19 23:34:57', 1, 'ERG'),
(104, '2025-01-19 23:40:36', 1, 'ERG'),
(105, '2025-01-20 00:15:03', 1, 'ERG'),
(106, '2025-01-20 00:19:00', 1, 'ERG'),
(107, '2025-01-20 00:19:21', 1, 'ERG'),
(108, '2025-01-20 00:19:48', 1, 'ERG'),
(109, '2025-01-20 00:20:31', 1, 'ERG'),
(110, '2025-01-20 00:20:52', 1, 'ERG'),
(111, '2025-01-20 00:30:57', 1, 'ERG'),
(112, '2025-01-20 00:31:44', 1, 'ERG'),
(113, '2025-01-20 00:32:32', 1, 'ERG'),
(114, '2025-01-20 00:58:30', 1, 'H_P'),
(115, '2025-01-20 01:06:32', 1, 'ERG');

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
