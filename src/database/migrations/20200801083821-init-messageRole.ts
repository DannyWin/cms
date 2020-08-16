import { QueryInterface } from 'sequelize';

module.exports = {
  up: async (queryInterface: QueryInterface, Sequelize) => {
    const { INTEGER, DATE, BOOLEAN } = Sequelize;
    await queryInterface.createTable('messageRole', {
      id: { type: INTEGER, primaryKey: true, autoIncrement: true },
      messageId: INTEGER(11),
      roleId: INTEGER(11),
      startDate: DATE,
      endDate: DATE,
      order: INTEGER(11),
      enabled: BOOLEAN,
      deleted: BOOLEAN,
    });
  },

  down: async (queryInterface: QueryInterface) => {
    await queryInterface.dropTable('messageRole');
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  },
};
