import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateScreensByPermission1691693515017 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'screens_by_permission',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'permission_id',
            type: 'uuid',
          },
          {
            name: 'screen_ids',
            type: 'text[]',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('screens_by_permission');
  }
}
