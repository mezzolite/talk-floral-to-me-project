const scraperPromise = require("../scraper")


exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('flowers').del()
    .then(function () {
      // Inserts seed entries
      return scraperPromise
      .then(flowers => {
        return knex('flowers').insert(flowers);

      })
    });
};


// [
//   {name: 'Acacia', description: 'Beauty in retirement', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGiW5864fZe4AkR1LxPJhks4lT0lJ19eCdNwExW8_A61PhwYCgoA&s'},
//   {name: "Aconite", description: 'Beware, a deadly foe is near', image: 'https://pm1.narvii.com/7033/8617210191711c54b66f5ac67cd9adf55b3133fer1-250-333v2_128.jpg'},
  

// ]
