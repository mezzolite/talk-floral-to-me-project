const scraperData = require("../scraper")



exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('flowers').del()
    .then(function () {
      // Inserts seed entries
      return knex('flowers').insert([
        {name: 'Acacia', description: 'Beauty in retirement', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGiW5864fZe4AkR1LxPJhks4lT0lJ19eCdNwExW8_A61PhwYCgoA&s'}
      ]);
    });
};
