
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('bouquets').del()
    .then(function () {
      // Inserts seed entries
      return knex('bouquets').insert([
        {name: 'Please work!'},
        
      ]);
    });
};
