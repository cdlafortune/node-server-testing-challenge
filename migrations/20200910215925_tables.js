
exports.up = async function(knex) {
  await knex.schema.createTable('spells', (table) => {
      table.increments('id');
      table.text('name', 128).notNull().unique();
      table.integer('level').notNull();
      table.integer('schoolId').notNull();
      table.integer('classId').notNull();
      table.text('castingTime', 128);
      table.boolean('ritual').defaultTo(false);
      table.boolean('concentration').defaultTo(false);
      table.text('wikiPage');
  });

  await knex.schema.createTable('classes', (table) => {
      table.increments('classId');
      table.text('className', 128).notNull().unique();
  });

  await knex.schema.createTable('schools', (table) => {
      table.increments('schoolId');
      table.text('schoolName', 128).notNull().unique();
      table.integer('classId').notNull();
  });
};

exports.down = async function(knex) {
    await knex.schema.dropTableIfExists("spells");
};
