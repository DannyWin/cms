import { QueryInterface } from 'sequelize';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const { INTEGER, BOOLEAN } = Sequelize;
    await queryInterface.createTable('roleModule', {
      id: { type: INTEGER, primaryKey: true, autoIncrement: true },
      roleId: INTEGER(11),
      moduleId: INTEGER(11),
      order: INTEGER(11),
      enabled: BOOLEAN,
      deleted: BOOLEAN,
    });
  },

  down: async (queryInterface: QueryInterface) => {
    await queryInterface.dropTable('roleModule');
    
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
