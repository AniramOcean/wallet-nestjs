import { MigrationInterface, QueryRunner } from 'typeorm';

export class init1587629454057 implements MigrationInterface {
  name = 'init1587629454057';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      'CREATE TABLE `user` (`id` int NOT NULL AUTO_INCREMENT, `firstName` varchar(255) NOT NULL, `lastName` varchar(255) NOT NULL, `isActive` tinyint NOT NULL DEFAULT 1, PRIMARY KEY (`id`)) ENGINE=InnoDB',
      undefined,
    );
    await queryRunner.query(
      'CREATE TABLE `wallet` (`id` int NOT NULL AUTO_INCREMENT, `title` varchar(255) NOT NULL, `userId` int NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB',
      undefined,
    );
    await queryRunner.query(
      'CREATE TABLE `purchase` (`id` int NOT NULL AUTO_INCREMENT, `title` varchar(255) NOT NULL, `price` int NOT NULL, `date` datetime NOT NULL, `comment` varchar(255) NOT NULL, `color` varchar(255) NOT NULL, `walletId` int NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB',
      undefined,
    );
    await queryRunner.query(
      'ALTER TABLE `wallet` ADD CONSTRAINT `FK_35472b1fe48b6330cd349709564` FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION',
      undefined,
    );
    await queryRunner.query(
      'ALTER TABLE `purchase` ADD CONSTRAINT `FK_e89214e5c0d14eb5296ebd18e6c` FOREIGN KEY (`walletId`) REFERENCES `wallet`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION',
      undefined,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      'ALTER TABLE `purchase` DROP FOREIGN KEY `FK_e89214e5c0d14eb5296ebd18e6c`',
      undefined,
    );
    await queryRunner.query(
      'ALTER TABLE `wallet` DROP FOREIGN KEY `FK_35472b1fe48b6330cd349709564`',
      undefined,
    );
    await queryRunner.query('DROP TABLE `purchase`', undefined);
    await queryRunner.query('DROP TABLE `wallet`', undefined);
    await queryRunner.query('DROP TABLE `user`', undefined);
  }
}
