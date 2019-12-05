
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('bouquets-flowers').del()
    .then(function () {
      // Inserts seed entries
      return knex('bouquets-flowers').insert([
        {bouquet_id: 1, flower_id: 83},
        {bouquet_id: 1, flower_id: 84},
        {bouquet_id: 1, flower_id: 63},
        {bouquet_id: 1, flower_id: 72},
        
      ]);
    });
};
