const ICrud = require('./../interface/interfaceCrud')

class ContextStrategy extends ICrud {
    constructor(database) {
      super();
      this._database = database;
    }

    create(item) {
      return this._database.create(item);
    }

    read(item) {
      return this._database.read(item);
    }

    update(id, item) {
      return this._database.update(id, item);
    }

    delete(id) {
      return this._database.delete(id, item);
    }
    isConnected() {
      return this.database.isConnected()
    }
}

module.exports = ContextStrategy