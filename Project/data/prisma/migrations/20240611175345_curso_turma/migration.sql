-- AlterTable
ALTER TABLE `utilizadores` ADD COLUMN `curso` VARCHAR(255) NULL,
    ADD COLUMN `turma` VARCHAR(255) NULL;

-- CreateIndex
CREATE INDEX `curso` ON `utilizadores`(`curso`);

-- CreateIndex
CREATE INDEX `turma` ON `utilizadores`(`turma`);
