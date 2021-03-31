const ICrud = require('./interface/interfaceCrud')

class MongoDBStrategy extends ICrud {
    constructor() {
      super();
    }
    create(item) {
      console.log('O item foi salvo em MongoDB');
    }
}

module.exports = MongoDBStrategy