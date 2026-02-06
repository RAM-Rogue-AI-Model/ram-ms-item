-- CreateTable
CREATE TABLE `Item` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(50) NOT NULL,
    `description` VARCHAR(250) NOT NULL,
    `price` DECIMAL(15, 2) NOT NULL,
    `level_gap` VARCHAR(50) NOT NULL,
    `effect_name` VARCHAR(50) NOT NULL,
    `effect_id` VARCHAR(50) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

INSERT INTO Item (id, name, description, price, level_gap, effect_name, effect_id) VALUES ('770e8400-e29b-41d4-a716-446655440001', "Bidon d'eau potable", 'Soigne 10 PV', 20.00, 1, 'pv', '660e8400-e29b-41d4-a716-446655440031');
INSERT INTO Item (id, name, description, price, level_gap, effect_name, effect_id) VALUES ('770e8400-e29b-41d4-a716-446655440002', "Baril d'eau potable", 'Soigne 20 PV', 40.00, 5, 'pv', '660e8400-e29b-41d4-a716-446655440032');
INSERT INTO Item (id, name, description, price, level_gap, effect_name, effect_id) VALUES ('770e8400-e29b-41d4-a716-446655440003', "Camion citerne d'eau potable", 'Soigne 30 PV', 60.00, 10, 'pv', '660e8400-e29b-41d4-a716-446655440033');
INSERT INTO Item (id, name, description, price, level_gap, effect_name, effect_id) VALUES ('770e8400-e29b-41d4-a716-446655440011', "16Go de RAM", "Augment la vitesse pendant 3 tours (+5 VIT)", 20.00, 1, 'speed', '660e8400-e29b-41d4-a716-446655440051');
INSERT INTO Item (id, name, description, price, level_gap, effect_name, effect_id) VALUES ('770e8400-e29b-41d4-a716-446655440012', "32Go de RAM", "Augment la vitesse pendant 3 tours (+10 VIT)", 40.00, 5, 'speed', '660e8400-e29b-41d4-a716-446655440052');
INSERT INTO Item (id, name, description, price, level_gap, effect_name, effect_id) VALUES ('770e8400-e29b-41d4-a716-446655440013', "64Go de RAM", "Augment la vitesse pendant 3 tours (+15 VIT)", 60.00, 10, 'speed', '660e8400-e29b-41d4-a716-446655440053');
INSERT INTO Item (id, name, description, price, level_gap, effect_name, effect_id) VALUES ('770e8400-e29b-41d4-a716-446655440014', "128Go de RAM", "Augment la vitesse pendant le prochain tour (x2 VIT)", 100.00, 15, 'speed', '660e8400-e29b-41d4-a716-446655440054');
INSERT INTO Item (id, name, description, price, level_gap, effect_name, effect_id) VALUES ('770e8400-e29b-41d4-a716-446655440021', "Intel core i5", "Augment l'attaque pendant 3 tours (+5 PA)", 20.00, 1, 'attack', '660e8400-e29b-41d4-a716-446655440041');
INSERT INTO Item (id, name, description, price, level_gap, effect_name, effect_id) VALUES ('770e8400-e29b-41d4-a716-446655440022', "Intel core i7", "Augment l'attaque pendant 3 tours (+10 PA)", 40.00, 5, 'attack', '660e8400-e29b-41d4-a716-446655440042');
INSERT INTO Item (id, name, description, price, level_gap, effect_name, effect_id) VALUES ('770e8400-e29b-41d4-a716-446655440023', "Intel core i9", "Augment l'attaque pendant 3 tours (+15 PA)", 60.00, 10, 'attack', '660e8400-e29b-41d4-a716-446655440043');
INSERT INTO Item (id, name, description, price, level_gap, effect_name, effect_id) VALUES ('770e8400-e29b-41d4-a716-446655440024', "AMD Ryzen 9", "Augment l'attaque pendant le prochain tour (x2 PA)", 100.00, 15, 'attack', '660e8400-e29b-41d4-a716-446655440044');
