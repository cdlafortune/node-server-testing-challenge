// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './src/data/spells.db3'
    },
    useNullAsDefault: true
  }
};
