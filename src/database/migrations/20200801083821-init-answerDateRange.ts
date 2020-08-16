import { QueryInterface } from 'sequelize';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const { INTEGER, DATE, BOOLEAN } = Sequelize;
    await queryInterface.createTable('answerDateRange', {
      id: { type: INTEGER, primaryKey: true, autoIncrement: true },
      answerRecordId: INTEGER(11),
      startDate: DATE,
      endDate: DATE,
      order: INTEGER(11),
      enabled: BOOLEAN,
      deleted: BOOLEAN,
    });
  },

  down: async (queryInterface: QueryInterface) => {
    await queryInterface.dropTable('answerDateRange');
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
