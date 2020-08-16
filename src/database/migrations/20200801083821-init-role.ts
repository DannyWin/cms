import { QueryInterface } from 'sequelize';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const { INTEGER, TEXT, STRING, BOOLEAN } = Sequelize;
    await queryInterface.createTable('role', {
      id: { type: INTEGER, primaryKey: true, autoIncrement: true },
      name: STRING(30),
      description: TEXT,
      order: INTEGER(11),
      enabled: BOOLEAN,
      deleted: BOOLEAN,
    });
  },

  down: async (queryInterface: QueryInterface) => {
    await queryInterface.dropTable('role');
    
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
