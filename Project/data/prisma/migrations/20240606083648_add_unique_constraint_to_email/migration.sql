/*
  Warnings:

  - A unique constraint covering the columns `[Email]` on the table `utilizadores` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `utilizadores_Email_key` ON `utilizadores`(`Email`);
