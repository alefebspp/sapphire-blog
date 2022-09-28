'use strict'

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.renameColumn(
      'comments',
      'userid_reference',
      'userinfo_reference'
    )
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
}
