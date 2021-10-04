-- Adminer 4.7.6 MySQL dump

SET NAMES utf8;
SET time_zone = '+00:00';
SET foreign_key_checks = 0;
SET sql_mode = 'NO_AUTO_VALUE_ON_ZERO';

INSERT INTO `purchase` (`id`, `title`, `price`, `date`, `comment`, `color`, `walletId`) VALUES
(1,	'Пицца',	400,	'2020-04-23 07:09:23',	'Вкусная еда',	'red',	1),
(2,	'Доширак',	40,	'2020-04-23 07:10:04',	'Не самая вкусная еда',	'green',	1),
(3,	'Антисептик',	500,	'2020-04-23 07:10:47',	'Для карантина',	'blue',	1),
(4,	'Гречка',	150,	'2020-04-23 07:11:32',	'Стратегический запас',	'red',	1);

INSERT INTO `user` (`id`, `firstName`, `lastName`, `isActive`) VALUES
(1,	'user',	'lastname',	1);

INSERT INTO `wallet` (`id`, `title`, `userId`) VALUES
(1,	'Мой супер кошелек',	1);

-- 2020-04-23 07:12:12
