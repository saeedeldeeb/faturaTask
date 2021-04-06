--  fatura Database
CREATE SCHEMA IF NOT EXISTS `fatura`;

USE `fatura`;

CREATE TABLE IF NOT EXISTS `fatura`.`categories` (
  `id` INT NOT NULL,
  `name` VARCHAR (45) NULL,
  `parent_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_categories_categories_idx` (`parent_id` ASC),
  CONSTRAINT `fk_categories_categories` FOREIGN KEY (`parent_id`) REFERENCES `fatura`.`categories` (`id`) ON
DELETE NO ACTION ON
UPDATE NO ACTION
) ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS `fatura`.`products` (
  `id` INT NOT NULL,
  `name` VARCHAR (45) NULL,
  `image_uri` VARCHAR (255) NULL,
  `categories_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_products_categories1_idx` (`categories_id` ASC),
  CONSTRAINT `fk_products_categories1` FOREIGN KEY (`categories_id`) REFERENCES `fatura`.`categories` (`id`) ON
DELETE NO ACTION ON
UPDATE NO ACTION
) ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS `fatura`.`providers` (
  `id` INT NOT NULL,
  `name` VARCHAR (45) NULL,
  PRIMARY KEY (`id`)
) ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS `fatura`.`product_providers` (
  `providers_id` INT NOT NULL,
  `products_id` INT NOT NULL,
  `price` DOUBLE NOT NULL,
  `available` TINYINT NULL,
  PRIMARY KEY (`providers_id`, `products_id`),
  INDEX `fk_product_providers_products1_idx` (`products_id` ASC),
  CONSTRAINT `fk_product_providers_providers1` FOREIGN KEY (`providers_id`) REFERENCES `fatura`.`providers` (`id`) ON
DELETE NO ACTION ON
UPDATE NO ACTION,
  CONSTRAINT `fk_product_providers_products1` FOREIGN KEY (`products_id`) REFERENCES `fatura`.`products` (`id`) ON
DELETE NO ACTION ON
UPDATE NO ACTION
) ENGINE = InnoDB;