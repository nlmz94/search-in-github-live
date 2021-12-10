-- CreateTable
CREATE TABLE `User` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `login` VARCHAR(191) NOT NULL,
    `node_id` VARCHAR(191) NULL,
    `html_url` VARCHAR(191) NULL,
    `avatar_url` VARCHAR(191) NULL,
    `name` VARCHAR(191) NULL,
    `company` VARCHAR(191) NULL,
    `blog` VARCHAR(191) NULL,
    `location` VARCHAR(191) NULL,
    `email` VARCHAR(191) NULL,
    `hireable` BOOLEAN NOT NULL DEFAULT false,
    `bio` VARCHAR(191) NULL,
    `twitter_username` VARCHAR(191) NULL,
    `public_repos` INTEGER NOT NULL DEFAULT 0,
    `public_gists` INTEGER NOT NULL DEFAULT 0,
    `followers` INTEGER NOT NULL DEFAULT 0,
    `following` INTEGER NOT NULL DEFAULT 0,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NULL,

    UNIQUE INDEX `User_login_key`(`login`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
