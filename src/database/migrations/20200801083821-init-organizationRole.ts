import { QueryInterface } from 'sequelize';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const { INTEGER, BOOLEAN } = Sequelize;
    await queryInterface.createTable('organizationRole', {
      id: { type: INTEGER, primaryKey: true, autoIncrement: true },
      organizationId: INTEGER(11),
      roleId: INTEGER(11),
      order: INTEGER(11),
      enabled: BOOLEAN,
      deleted: BOOLEAN,
    });
  },

  down: async (queryInterface: QueryInterface) => {
    await queryInterface.dropTable('organizationRole');

    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
