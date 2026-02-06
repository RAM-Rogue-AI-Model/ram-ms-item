-- CreateTable
CREATE TABLE `Item` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(50) NOT NULL,
    `description` VARCHAR(50) NOT NULL,
    `price` DECIMAL(15, 2) NOT NULL,
    `level_gap` INTEGER NOT NULL,
    `effect_name` VARCHAR(50) NOT NULL,
    `effect_id` VARCHAR(50) NOT NULL,
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

INSERT INTO Item (id, name, description, price, level_gap, effect_name, effect_id) VALUES ('770e8400-e29b-41d4-a716-446655440000', 'heal', 'Heals 20 HP', 10.00, 1, 'pv', '660e8400-e29b-41d4-a716-446655440000');
INSERT INTO Item (id, name, description, price, level_gap, effect_name, effect_id) VALUES ('770e8400-e29b-41d4-a716-446655440001', 'strength_potion', 'Increases attack by 5 for 2 turns', 15.00, 2, 'attack', '660e8400-e29b-41d4-a716-446655440001');
INSERT INTO Item (id, name, description, price, level_gap, effect_name, effect_id) VALUES ('770e8400-e29b-41d4-a716-446655440002', 'speed_debuff', 'Decreases speed by 5 for 2 turns', 12.00, 2, 'speed', '660e8400-e29b-41d4-a716-446655440002');
INSERT INTO Item (id, name, description, price, level_gap, effect_name, effect_id) VALUES ('770e8400-e29b-41d4-a716-446655440003', 'speed_boost', 'Increases speed by 15 for 2 turns', 20.00, 3, 'speed', '660e8400-e29b-41d4-a716-446655440003');
INSERT INTO Item (id, name, description, price, level_gap, effect_name, effect_id) VALUES ('770e8400-e29b-41d4-a716-446655440004', 'mega_strength_potion', 'Increases attack by 50 for 2 turns', 50.00, 5, 'attack', '660e8400-e29b-41d4-a716-446655440004');
INSERT INTO Item (id, name, description, price, level_gap, effect_name, effect_id) VALUES ('770e8400-e29b-41d4-a716-446655440005', 'weakness_curse', 'Decreases attack by 10 for 3 turns', 18.00, 3, 'attack', '660e8400-e29b-41d4-a716-446655440005');
INSERT INTO Item (id, name, description, price, level_gap, effect_name, effect_id) VALUES ('770e8400-e29b-41d4-a716-446655440006', 'speed_curse', 'Decreases speed by 10 for 3 turns', 16.00, 3, 'speed', '660e8400-e29b-41d4-a716-446655440006');
INSERT INTO Item (id, name, description, price, level_gap, effect_name, effect_id) VALUES ('770e8400-e29b-41d4-a716-446655440007', 'super_heal', 'Heals 40 HP', 25.00, 4, 'pv', '660e8400-e29b-41d4-a716-446655440007');
