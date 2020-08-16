import { QueryInterface } from 'sequelize';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const { INTEGER, TEXT, BOOLEAN } = Sequelize;
    await queryInterface.createTable('question', {
      id: { type: INTEGER, primaryKey: true, autoIncrement: true },
      content: TEXT,
      categoryId: INTEGER(11),
      typeId: INTEGER(11),
      order: INTEGER(11),
      enabled: BOOLEAN,
      deleted: BOOLEAN,
    });
  },

  down: async (queryInterface: QueryInterface) => {
    await queryInterface.dropTable('question');

    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
