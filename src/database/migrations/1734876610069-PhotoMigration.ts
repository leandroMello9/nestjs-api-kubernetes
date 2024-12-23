import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class PhotoMigration1734876610069 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.createTable(
            new Table({
              name: 'photo',
              columns: [
                {
                  name: 'id',
                  type: 'int',
                  isPrimary: true,
                  isGenerated: true,
                  generationStrategy: 'increment',
                },
                {
                  name: 'name',
                  type: 'varchar',
                  length: '500',
                },
                {
                  name: 'description',
                  type: 'text',
                },
                {
                  name: 'filename',
                  type: 'varchar',
                },
                {
                  name: 'views',
                  type: 'int',
                },
                {
                  name: 'isPublished',
                  type: 'boolean',
                },
              ],
            }),
          );

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('base_entity');
    }

}
