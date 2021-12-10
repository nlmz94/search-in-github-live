-- AlterTable
ALTER TABLE `User` ADD COLUMN `events_url` VARCHAR(191) NULL,
    ADD COLUMN `followers_url` VARCHAR(191) NULL,
    ADD COLUMN `following_url` VARCHAR(191) NULL,
    ADD COLUMN `gists_url` VARCHAR(191) NULL,
    ADD COLUMN `gravatar_id` VARCHAR(191) NULL,
    ADD COLUMN `organizations_url` VARCHAR(191) NULL,
    ADD COLUMN `received_events_url` VARCHAR(191) NULL,
    ADD COLUMN `repos_url` VARCHAR(191) NULL,
    ADD COLUMN `starred_url` VARCHAR(191) NULL,
    ADD COLUMN `subscriptions_url` VARCHAR(191) NULL,
    ADD COLUMN `url` VARCHAR(191) NULL;
