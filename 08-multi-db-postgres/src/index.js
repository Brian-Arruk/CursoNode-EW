const ContextStrategy = require('./db/strategies/base/contextStrategy')
const MongoDBStrategy = require('./db/strategies/mongodb')
const PostgreSQLStrategy = require('./db/strategies/postgres')

const contextMongo = new ContextStrategy(new MongoDBStrategy());
contextMongo.create();

const contextPostgres = new ContextStrategy(new PostgreSQLStrategy());
contextPostgres.create();