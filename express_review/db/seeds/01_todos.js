const faker = require("faker")
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('todos').del()
    .then(function () {
      // Inserts seed entries
      const todos = [];
      for (let i=0; i<100; i++){
        todos.push(
          {
            title: faker.hacker.verb(),
            content: faker.company.catchPhrase(),
            imageUrl: faker.image.imageUrl(),
            username: faker.name.firstName()
          }
        )
      }
      return knex('todos').insert(todos)
    });
};
