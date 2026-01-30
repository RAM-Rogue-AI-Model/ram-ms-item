/*
  Warnings:

  - You are about to alter the column `level_gap` on the `Item` table. The data in that column could be lost. The data in that column will be cast from `VarChar(50)` to `Int`.

*/
-- AlterTable
ALTER TABLE `Item` MODIFY `level_gap` INTEGER NOT NULL;
