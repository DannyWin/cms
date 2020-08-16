import { QueryInterface } from 'sequelize';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const { INTEGER, BOOLEAN } = Sequelize;
    await queryInterface.createTable('roleSurvey', {
      id: { type: INTEGER, primaryKey: true, autoIncrement: true },
      roleId: INTEGER(11),
      surveyId: INTEGER(11),
      order: INTEGER(11),
      enabled: BOOLEAN,
      deleted: BOOLEAN,
    });
  },

  down: async (queryInterface: QueryInterface) => {
    await queryInterface.dropTable('roleSurvey');
    
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
