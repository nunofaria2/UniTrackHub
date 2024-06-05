-- CreateTable
CREATE TABLE `disciplinas` (
    `id_disciplina` INTEGER NOT NULL,
    `Nome` VARCHAR(255) NULL,
    `Numero` INTEGER NULL,
    `id_professor` INTEGER NULL,

    INDEX `id_professor`(`id_professor`),
    PRIMARY KEY (`id_disciplina`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `disciplinas_horarios` (
    `id_disciplina` INTEGER NOT NULL,
    `id_horario` INTEGER NOT NULL,

    INDEX `id_horario`(`id_horario`),
    PRIMARY KEY (`id_disciplina`, `id_horario`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `disciplinas_professores` (
    `id_disciplina` INTEGER NOT NULL,
    `id_professor` INTEGER NOT NULL,

    INDEX `id_professor`(`id_professor`),
    PRIMARY KEY (`id_disciplina`, `id_professor`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `disciplinas_utilizadores` (
    `id_disciplina` INTEGER NOT NULL,
    `id_utilizador` INTEGER NOT NULL,

    INDEX `id_utilizador`(`id_utilizador`),
    PRIMARY KEY (`id_disciplina`, `id_utilizador`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `horarios` (
    `id_horario` INTEGER NOT NULL,
    `Data_inicio` DATE NULL,
    `Data_fim` DATE NULL,
    `id_utilizador` INTEGER NULL,
    `id_sala` INTEGER NULL,

    INDEX `id_sala`(`id_sala`),
    INDEX `id_utilizador`(`id_utilizador`),
    PRIMARY KEY (`id_horario`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `professores` (
    `id_professor` INTEGER NOT NULL,
    `Nome` VARCHAR(255) NULL,
    `Email` VARCHAR(255) NULL,
    `Carga` INTEGER NULL,
    `Descricao` TEXT NULL,

    PRIMARY KEY (`id_professor`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `salas` (
    `id_sala` INTEGER NOT NULL,
    `Detalhe` VARCHAR(255) NULL,

    PRIMARY KEY (`id_sala`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `salas_horarios` (
    `id_sala` INTEGER NOT NULL,
    `id_horario` INTEGER NOT NULL,

    INDEX `id_horario`(`id_horario`),
    PRIMARY KEY (`id_sala`, `id_horario`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `utilizadores` (
    `id_utilizador` INTEGER NOT NULL AUTO_INCREMENT,
    `Nome` VARCHAR(255) NULL,
    `Email` VARCHAR(255) NULL,
    `Passe` VARCHAR(20) NULL,

    PRIMARY KEY (`id_utilizador`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `disciplinas_horarios` ADD CONSTRAINT `disciplinas_horarios_ibfk_1` FOREIGN KEY (`id_disciplina`) REFERENCES `disciplinas`(`id_disciplina`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `disciplinas_horarios` ADD CONSTRAINT `disciplinas_horarios_ibfk_2` FOREIGN KEY (`id_horario`) REFERENCES `horarios`(`id_horario`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `disciplinas_professores` ADD CONSTRAINT `disciplinas_professores_ibfk_1` FOREIGN KEY (`id_disciplina`) REFERENCES `disciplinas`(`id_disciplina`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `disciplinas_professores` ADD CONSTRAINT `disciplinas_professores_ibfk_2` FOREIGN KEY (`id_professor`) REFERENCES `professores`(`id_professor`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `disciplinas_utilizadores` ADD CONSTRAINT `disciplinas_utilizadores_ibfk_1` FOREIGN KEY (`id_disciplina`) REFERENCES `disciplinas`(`id_disciplina`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `disciplinas_utilizadores` ADD CONSTRAINT `disciplinas_utilizadores_ibfk_2` FOREIGN KEY (`id_utilizador`) REFERENCES `utilizadores`(`id_utilizador`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `horarios` ADD CONSTRAINT `horarios_ibfk_1` FOREIGN KEY (`id_utilizador`) REFERENCES `utilizadores`(`id_utilizador`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `salas_horarios` ADD CONSTRAINT `salas_horarios_ibfk_1` FOREIGN KEY (`id_sala`) REFERENCES `salas`(`id_sala`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `salas_horarios` ADD CONSTRAINT `salas_horarios_ibfk_2` FOREIGN KEY (`id_horario`) REFERENCES `horarios`(`id_horario`) ON DELETE RESTRICT ON UPDATE RESTRICT;
