/*
  Warnings:

  - You are about to drop the column `id_sala` on the `horarios` table. All the data in the column will be lost.
  - You are about to drop the column `id_utilizador` on the `horarios` table. All the data in the column will be lost.
  - You are about to drop the column `curso` on the `utilizadores` table. All the data in the column will be lost.
  - You are about to drop the column `turma` on the `utilizadores` table. All the data in the column will be lost.
  - You are about to drop the `disciplinas` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `disciplinas_horarios` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `disciplinas_professores` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `disciplinas_utilizadores` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `professores` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `salas` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `salas_horarios` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `id_turma` to the `horarios` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `disciplinas_horarios` DROP FOREIGN KEY `disciplinas_horarios_ibfk_1`;

-- DropForeignKey
ALTER TABLE `disciplinas_horarios` DROP FOREIGN KEY `disciplinas_horarios_ibfk_2`;

-- DropForeignKey
ALTER TABLE `disciplinas_professores` DROP FOREIGN KEY `disciplinas_professores_ibfk_1`;

-- DropForeignKey
ALTER TABLE `disciplinas_professores` DROP FOREIGN KEY `disciplinas_professores_ibfk_2`;

-- DropForeignKey
ALTER TABLE `disciplinas_utilizadores` DROP FOREIGN KEY `disciplinas_utilizadores_ibfk_1`;

-- DropForeignKey
ALTER TABLE `disciplinas_utilizadores` DROP FOREIGN KEY `disciplinas_utilizadores_ibfk_2`;

-- DropForeignKey
ALTER TABLE `horarios` DROP FOREIGN KEY `horarios_ibfk_1`;

-- DropForeignKey
ALTER TABLE `salas_horarios` DROP FOREIGN KEY `salas_horarios_ibfk_1`;

-- DropForeignKey
ALTER TABLE `salas_horarios` DROP FOREIGN KEY `salas_horarios_ibfk_2`;

-- DropIndex
DROP INDEX `id_sala` ON `horarios`;

-- AlterTable
ALTER TABLE `horarios` DROP COLUMN `id_sala`,
    DROP COLUMN `id_utilizador`,
    ADD COLUMN `id_turma` INTEGER NOT NULL,
    MODIFY `id_horario` INTEGER NOT NULL AUTO_INCREMENT;

-- AlterTable
ALTER TABLE `utilizadores` DROP COLUMN `curso`,
    DROP COLUMN `turma`,
    ADD COLUMN `id_turma` INTEGER NULL;

-- DropTable
DROP TABLE `disciplinas`;

-- DropTable
DROP TABLE `disciplinas_horarios`;

-- DropTable
DROP TABLE `disciplinas_professores`;

-- DropTable
DROP TABLE `disciplinas_utilizadores`;

-- DropTable
DROP TABLE `professores`;

-- DropTable
DROP TABLE `salas`;

-- DropTable
DROP TABLE `salas_horarios`;

-- CreateTable
CREATE TABLE `turmas` (
    `id_turma` INTEGER NOT NULL AUTO_INCREMENT,
    `NomeTurma` VARCHAR(255) NOT NULL,
    `Descricao` TEXT NULL,

    PRIMARY KEY (`id_turma`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `horarios` ADD CONSTRAINT `horarios_id_turma_fkey` FOREIGN KEY (`id_turma`) REFERENCES `turmas`(`id_turma`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `utilizadores` ADD CONSTRAINT `utilizadores_id_turma_fkey` FOREIGN KEY (`id_turma`) REFERENCES `turmas`(`id_turma`) ON DELETE SET NULL ON UPDATE CASCADE;
