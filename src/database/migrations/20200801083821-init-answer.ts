import { QueryInterface } from 'sequelize';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const { INTEGER, TEXT, BOOLEAN } = Sequelize;
    await queryInterface.createTable('answer', {
      id: { type: INTEGER, primaryKey: true, autoIncrement: true },
      questionId: INTEGER(11),
      content: TEXT,
      order: INTEGER(11),
      enabled: BOOLEAN,
      deleted: BOOLEAN,
    });
  },

  down: async (queryInterface: QueryInterface) => {
    await queryInterface.dropTable('answer');
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
