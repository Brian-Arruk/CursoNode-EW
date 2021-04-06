const ICrud = require('./interface/interfaceCrud')

class PostgreSQLStrategy extends ICrud {
    constructor() {
      super();
    }

    create(item) {
      console.log('O item foi salvo em Postgres');
    }
}

module.exports = PostgreSQLStrategy