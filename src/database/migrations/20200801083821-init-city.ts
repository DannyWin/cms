import { QueryInterface } from 'sequelize';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const { INTEGER, DECIMAL, STRING, BOOLEAN } = Sequelize;
    await queryInterface.createTable('city', {
      id: { type: INTEGER, primaryKey: true, autoIncrement: true },
      name: STRING(50),
      provinceId: INTEGER(11),
      countryId: INTEGER(11),
      longitude: DECIMAL(8, 5),
      latitude: DECIMAL(8, 5),
      order: INTEGER(11),
      enabled: BOOLEAN,
      deleted: BOOLEAN,
    });
  },

  down: async (queryInterface: QueryInterface) => {
    await queryInterface.dropTable('city');

    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
