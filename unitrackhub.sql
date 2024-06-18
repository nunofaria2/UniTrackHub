-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 18-Jun-2024 às 19:59
-- Versão do servidor: 10.4.32-MariaDB
-- versão do PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `unitrackhub`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `horarios`
--

CREATE TABLE `horarios` (
  `id_horario` int(11) NOT NULL,
  `Data_inicio` datetime DEFAULT NULL,
  `Data_fim` datetime DEFAULT NULL,
  `id_turma` int(11) NOT NULL,
  `Disciplina` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Extraindo dados da tabela `horarios`
--

INSERT INTO `horarios` (`id_horario`, `Data_inicio`, `Data_fim`, `id_turma`, `Disciplina`) VALUES
(3, '2024-06-17 13:00:00', '2024-06-17 15:00:00', 9, 'AEPDS [TP1] ESTG - S.1.11'),
(12, '2024-06-17 07:00:00', '2024-06-17 09:00:00', 9, 'PW [TP1] ESTG - L.3.4'),
(13, '2024-06-17 15:30:00', '2024-06-17 17:30:00', 9, 'CESNC [PL2] ESTG - L.3.9'),
(14, '2024-06-18 08:00:00', '2024-06-18 10:00:00', 9, 'RESM [TP1] ESTG - S.1.3'),
(15, '2024-06-18 10:00:00', '2024-06-18 12:00:00', 9, 'TADR [TP1] ESTG - S.1.3'),
(16, '2024-06-18 14:00:00', '2024-06-18 16:00:00', 9, 'CESNC [TP1] ESTG - S.1.3'),
(17, '2024-06-18 16:00:00', '2024-06-18 18:00:00', 9, 'AEPDS [PL2] ESTG - S.2.2'),
(18, '2024-06-19 13:00:00', '2024-06-19 15:00:00', 9, 'AEPDS [TP1] ESTG - S.3.5'),
(19, '2024-06-20 08:00:00', '2024-06-20 10:00:00', 9, 'PW [PL2] ESTG - BIB.2.1'),
(20, '2024-06-20 13:00:00', '2024-06-20 15:00:00', 9, 'RESM [PL2] ESTG - L.3.1'),
(21, '2024-06-21 09:00:00', '2024-06-21 11:00:00', 9, 'TADR [PL2] ESTG - L.3.8'),
(22, '2024-06-17 15:30:00', '2024-06-17 17:30:00', 6, 'PW tp1'),
(23, '2024-06-18 08:00:00', '2024-06-18 10:00:00', 6, 'AEPDS [TP1] ESTG - S.1.11');

-- --------------------------------------------------------

--
-- Estrutura da tabela `turmas`
--

CREATE TABLE `turmas` (
  `id_turma` int(11) NOT NULL,
  `NomeTurma` varchar(255) NOT NULL,
  `Descricao` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Extraindo dados da tabela `turmas`
--

INSERT INTO `turmas` (`id_turma`, `NomeTurma`, `Descricao`) VALUES
(3, 'ERSC-1A', 'Turma A do primeiro ano do curso de engenharia de redes e sistemas'),
(6, 'ERSC-2A', 'Turma A do segundo Ano do curso de engenharia de redes e sistemas'),
(7, 'ERSC-3A', 'Turma A do terceiro Ano do curso de engenharia de redes e sistemas	'),
(8, 'ERSC-1B', 'Turma B do primeiro Ano do curso de engenharia de redes e sistemas	'),
(9, 'ERSC-2B', 'Turma B do segundo Ano do curso de engenharia de redes e sistemas');

-- --------------------------------------------------------

--
-- Estrutura da tabela `utilizadores`
--

CREATE TABLE `utilizadores` (
  `id_utilizador` int(11) NOT NULL,
  `Nome` varchar(255) DEFAULT NULL,
  `Email` varchar(255) DEFAULT NULL,
  `Passe` varchar(255) DEFAULT NULL,
  `isAdmin` tinyint(1) NOT NULL DEFAULT 0,
  `id_turma` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Extraindo dados da tabela `utilizadores`
--

INSERT INTO `utilizadores` (`id_utilizador`, `Nome`, `Email`, `Passe`, `isAdmin`, `id_turma`) VALUES
(58, 'NunoF', 'nuno1234@gmail.com', '$2a$10$cQfZYvuXlVHH3f4s6LLCFO6lXFsQ74O2QMsvE1VsbvpJvFkBWp..u', 1, 9),
(59, 'Maria', 'mario@gmail.com', '$2a$10$Z7CTLHxuJT0n4EFxR69Pq.ANxO.yMVQCFp8Poh505fU29GWRJZ6HW', 0, 6),
(60, 'tiago', 'tiago@gmail.com', '$2a$08$ck6Hhjkl4ScHzG0h1XKByOS6/pV8pSBTU02JzrI7605KSQx5yF4ai', 0, NULL),
(61, 'rodrigo', 'rodrigo@gmail.com', '$2a$10$cZe3/1ju0A002AKp2jk4Me4nQb3Nk9X/NxDn.th7rVawajOPZOvFq', 1, 9);

-- --------------------------------------------------------

--
-- Estrutura da tabela `_prisma_migrations`
--

CREATE TABLE `_prisma_migrations` (
  `id` varchar(36) NOT NULL,
  `checksum` varchar(64) NOT NULL,
  `finished_at` datetime(3) DEFAULT NULL,
  `migration_name` varchar(255) NOT NULL,
  `logs` text DEFAULT NULL,
  `rolled_back_at` datetime(3) DEFAULT NULL,
  `started_at` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `applied_steps_count` int(10) UNSIGNED NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Extraindo dados da tabela `_prisma_migrations`
--

INSERT INTO `_prisma_migrations` (`id`, `checksum`, `finished_at`, `migration_name`, `logs`, `rolled_back_at`, `started_at`, `applied_steps_count`) VALUES
('2f3432e8-d3b5-49ce-97e2-ba2cee4de715', 'e7f9d07ba59f859d5e43a2dc826fcb64855f7087626a1b82bdbcb48e881c79c5', '2024-06-11 17:53:45.809', '20240611175345_curso_turma', NULL, NULL, '2024-06-11 17:53:45.793', 1),
('44eaf33b-ae05-4936-834c-0ba1bacf4e2b', 'c0c74a0442bbf397fbe4ec27dcbfcb1e502a6d09add87bcad22f338f13645679', '2024-06-06 08:36:48.168', '20240606083648_add_unique_constraint_to_email', NULL, NULL, '2024-06-06 08:36:48.149', 1),
('895d7283-724f-4c25-9dde-e49a7416c349', 'eeaf21da28f2d7c3c52d8b18f55fb559649c6861df21e8f7c608ae41d5086333', '2024-06-11 17:54:03.871', '20240611175403_curso_turma', NULL, NULL, '2024-06-11 17:54:03.860', 1),
('ba026975-d535-41ff-93d3-7adfe574ff59', '6555e33ada8033751538971225479e5e3ef40798246f9ad9342fa45b154258ec', '2024-06-09 11:54:43.934', '20240609115443_alterar_tamanho_passe', NULL, NULL, '2024-06-09 11:54:43.928', 1),
('e10670ec-fc9e-4ce4-9786-189b4157709b', '100790bae66df7199d7d8b6298733b8122ce7fef26641693fa680fa4913e6e44', '2024-06-05 17:44:17.456', '20240605174417_sync_fields', NULL, NULL, '2024-06-05 17:44:17.032', 1),
('eed44b74-2433-452f-823e-01b10dcff7f2', 'a99c7d24569ed6ee4e9773750b1164d517a16bc5ad54774d966b30086ff4d2a2', '2024-06-08 14:15:14.500', '20240608141514_add_is_admin_to_utilizadores', NULL, NULL, '2024-06-08 14:15:14.493', 1),
('fc1455e9-8543-4c80-bdda-f99a27e192c5', 'f9f0ca463d22d2265493c74ec9d8db9909ba0d6ea2fb8ba3d6891a9427d0b204', '2024-06-11 19:37:52.066', '20240611193751_update_db', NULL, NULL, '2024-06-11 19:37:51.964', 1);

--
-- Índices para tabelas despejadas
--

--
-- Índices para tabela `horarios`
--
ALTER TABLE `horarios`
  ADD PRIMARY KEY (`id_horario`),
  ADD KEY `horarios_id_turma_fkey` (`id_turma`);

--
-- Índices para tabela `turmas`
--
ALTER TABLE `turmas`
  ADD PRIMARY KEY (`id_turma`);

--
-- Índices para tabela `utilizadores`
--
ALTER TABLE `utilizadores`
  ADD PRIMARY KEY (`id_utilizador`),
  ADD UNIQUE KEY `utilizadores_Email_key` (`Email`),
  ADD KEY `utilizadores_id_turma_fkey` (`id_turma`);

--
-- Índices para tabela `_prisma_migrations`
--
ALTER TABLE `_prisma_migrations`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `horarios`
--
ALTER TABLE `horarios`
  MODIFY `id_horario` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=30;

--
-- AUTO_INCREMENT de tabela `turmas`
--
ALTER TABLE `turmas`
  MODIFY `id_turma` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT de tabela `utilizadores`
--
ALTER TABLE `utilizadores`
  MODIFY `id_utilizador` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=62;

--
-- Restrições para despejos de tabelas
--

--
-- Limitadores para a tabela `horarios`
--
ALTER TABLE `horarios`
  ADD CONSTRAINT `horarios_id_turma_fkey` FOREIGN KEY (`id_turma`) REFERENCES `turmas` (`id_turma`) ON UPDATE CASCADE;

--
-- Limitadores para a tabela `utilizadores`
--
ALTER TABLE `utilizadores`
  ADD CONSTRAINT `utilizadores_id_turma_fkey` FOREIGN KEY (`id_turma`) REFERENCES `turmas` (`id_turma`) ON DELETE SET NULL ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
