const connection = require('./knexfile')[process.env.NODE_ENV || 'development']
const database = require('knex')(connection)

module.exports = {
    listAllFlowers(){
        return database('flowers')
    },
    
    createFlower(flower){
        return database('flowers')
            .insert(flower)
            .returning('*')
    },
    
    deleteFlower(id){
        return database('flowers')
            .where('id', id)
            .delete()
    },
    
    updateFlower(id, flower){
        return database('flowers')
            .where('id', id)
            .update(flower)
            .returning('*')
    },
    
    listAllBouquets(){
        return database('bouquets')
    },
    
    createBouquet(bouquet){
        return database('bouquets')
            .insert(bouquet)
            .returning('*')
    },

    deleteBouquet(id){
        return database('bouquets')
            .where('id', id)
            .delete()
    },

    listAllBouquetFlowers(){
        return database('bouquets-flowers')
    },
    
    createBouquetFlowers(bouquetFlower){
        return database('bouquets-flowers')
            .insert(bouquetFlower)
            .returning('*')
    },

    deleteBouquetsFlowers(id){
        return database('bouquets-flowers')
            .where('id', id)
            .delete()
    },

    getFlowersInBouquets(){
        return database('bouquets')
            .then(bouquets => {
                const promises = bouquets.map(bouquet => {
                    return database('bouquets-flowers')
                        .join('flowers', 'flowers.id', 'bouquets-flowers.flower_id')
                        .where('bouquet_id', bouquet.id)
                        .then(flowers => {
                            bouquet.flowers = flowers
                            return bouquet
                        })
                })
                return Promise.all(promises)
            })
    },


}