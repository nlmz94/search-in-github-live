/*
  Warnings:

  - Made the column `node_id` on table `user` required. This step will fail if there are existing NULL values in that column.
  - Made the column `avatar_url` on table `user` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `user` MODIFY `node_id` VARCHAR(191) NOT NULL,
    MODIFY `avatar_url` VARCHAR(191) NOT NULL;
