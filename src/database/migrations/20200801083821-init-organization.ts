import { QueryInterface } from 'sequelize';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const { INTEGER, TEXT, STRING, BOOLEAN } = Sequelize;
    await queryInterface.createTable('organization', {
      id: { type: INTEGER, primaryKey: true, autoIncrement: true },
      pid: INTEGER(11),
      name: STRING(100),
      description: TEXT,
      phone: STRING(20),
      employeeCount: INTEGER(11),
      order: INTEGER(11),
      enabled: BOOLEAN,
      deleted: BOOLEAN,
    });
  },

  down: async (queryInterface: QueryInterface) => {
    await queryInterface.dropTable('organization');

    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
