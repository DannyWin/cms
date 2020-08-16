import { QueryInterface } from 'sequelize';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const { INTEGER, TEXT, BOOLEAN } = Sequelize;
    await queryInterface.createTable('address', {
      id: { type: INTEGER, primaryKey: true, autoIncrement: true },
      address: TEXT,
      order: INTEGER(11),
      enabled: BOOLEAN,
      deleted: BOOLEAN,
    });
  },

  down: async (queryInterface: QueryInterface) => {
    await queryInterface.dropTable('address');
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
