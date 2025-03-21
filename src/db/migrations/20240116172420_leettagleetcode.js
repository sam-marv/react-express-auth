/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = (knex) => knex.schema.createTable('leettagleetcode', (table) => {
    table.integer('leetcode_id').references('leetcode_id').inTable('leetcodes');
    table.integer('leettag_id').references('leettag_id').inTable('leettags');
    table.primary(['leetcode_id', 'leettag_id']);
    // table.integer('page_id').nullable();

    // table.index('page_id');

    // table.foreign('page_id').references('pages.page_id');

  });

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = (knex) => knex.schema.dropTable('leettagleetcode');
