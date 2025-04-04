import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('users', (table) => {
    table.increments('id').primary();
    table.string('username').unique().notNullable();
    table.string('email').unique().notNullable();
    table.string('full_name').notNullable();
    table.string('password').notNullable();
    table.enum('role', ['superadmin', 'admin']).notNullable().defaultTo('admin');
    table.boolean('is_active').notNullable().defaultTo(true);
    table.timestamp('last_login').nullable();
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());
  });

  // Create default superadmin
  await knex('users').insert({
    username: 'superadmin',
    email: 'superadmin@datagaze.uz',
    full_name: 'Super Admin',
    password: '$2a$10$xxxxxxxxxxx', // Bu yerga bcrypt bilan shifrlangan parol qo'yiladi
    role: 'superadmin',
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable('users');
}
