import { QueryInterface } from 'sequelize';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const { INTEGER, TEXT, DATE, BOOLEAN } = Sequelize;
    await queryInterface.createTable('answerRecord', {
      id: { type: INTEGER, primaryKey: true, autoIncrement: true },
      userId: INTEGER(11),
      questionId: INTEGER(11),
      answerId: INTEGER(11),
      content: TEXT,
      answerDateRangeId: INTEGER(11),
      answerDate: DATE,
      order: INTEGER(11),
      enabled: BOOLEAN,
      deleted: BOOLEAN,
    });
  },

  down: async (queryInterface: QueryInterface) => {
    await queryInterface.dropTable('answerRecord');
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
