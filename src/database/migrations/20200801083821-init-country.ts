import { QueryInterface } from 'sequelize';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const { INTEGER, STRING, BOOLEAN } = Sequelize;
    await queryInterface.createTable('country', {
      id: { type: INTEGER, primaryKey: true, autoIncrement: true },
      name: STRING(50),
      code: STRING(10),
      timeZone: STRING(10),
      continent: STRING(30),
      order: INTEGER(11),
      enabled: BOOLEAN,
      deleted: BOOLEAN,
    });
  },

  down: async (queryInterface: QueryInterface) => {
    await queryInterface.dropTable('country');

    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
