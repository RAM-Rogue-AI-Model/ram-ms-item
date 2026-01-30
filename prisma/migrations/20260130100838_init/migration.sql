-- CreateTable
CREATE TABLE `Item` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(50) NOT NULL,
    `description` VARCHAR(50) NOT NULL,
    `price` DECIMAL(15, 2) NOT NULL,
    `level_gap` VARCHAR(50) NOT NULL,
    `effect_name` VARCHAR(50) NOT NULL,
    `effect_id` VARCHAR(50) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
