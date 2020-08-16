import { QueryInterface } from 'sequelize';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const { INTEGER, TEXT, STRING, BOOLEAN } = Sequelize;
    await queryInterface.createTable('module', {
      id: { type: INTEGER, primaryKey: true, autoIncrement: true },
      pid: INTEGER(11),
      name: STRING(100),
      description: TEXT,
      url: TEXT,
      api: TEXT,
      order: INTEGER(11),
      enabled: BOOLEAN,
      deleted: BOOLEAN,
    });
  },

  down: async (queryInterface: QueryInterface) => {
    await queryInterface.dropTable('module');

    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
