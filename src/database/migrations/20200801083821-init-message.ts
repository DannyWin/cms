import { QueryInterface } from 'sequelize';

module.exports = {
  up: async (queryInterface: QueryInterface, Sequelize) => {
    const { INTEGER, STRING, TEXT, DATE, BOOLEAN } = Sequelize;
    await queryInterface.createTable('message', {
      id: { type: INTEGER, primaryKey: true, autoIncrement: true },
      title: STRING(100),
      content: TEXT,
      addDate: DATE,
      order: INTEGER(11),
      enabled: BOOLEAN,
      deleted: BOOLEAN,
    });
  },

  down: async (queryInterface: QueryInterface) => {
    await queryInterface.dropTable('message');
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  },
};
