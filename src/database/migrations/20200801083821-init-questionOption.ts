import { QueryInterface } from 'sequelize';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const { INTEGER, BOOLEAN } = Sequelize;
    await queryInterface.createTable('questionOption', {
      id: { type: INTEGER, primaryKey: true, autoIncrement: true },
      questionId: INTEGER(11),
      optionId: INTEGER(11),
      order: INTEGER(11),
      enabled: BOOLEAN,
      deleted: BOOLEAN,
    });
  },

  down: async (queryInterface: QueryInterface) => {
    await queryInterface.dropTable('questionOption');

    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
