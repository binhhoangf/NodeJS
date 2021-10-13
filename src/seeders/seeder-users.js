'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
      email: 'admin@gmail.com',
      password: "admin123",
      firstName: 'admin',
      lastName: '1',
      address: 'Da Nang',
      gender: '1',
      typeRole: 'ROLE',
      keyRole: 'R1',
      phonenumber:'085734968',
      image:'',
      positionId:'',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
