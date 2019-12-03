const connection = require('./knexfile')[process.env.NODE_ENV || 'development']
const database = require('knex')(connection)

module.exports = {
    listAll(){
        return database('flowers')
    },
    create(student){
        return database('flowers')
        .insert(flower)
        .returning('*')
    },
    delete(id){
        return database('flowers')
          .where('id', id)
          .delete()
    },
    updateFlower(id, flower){
        return database('flowers')
        .where('id', id)
        .update(flower)
        .returning("*")
    }

}