// npm install sequelize pg-hstore pg
const Sequelize = require('sequelize');
const driver = new Sequelize(
  'heroes',
  'brianarruk', 
  'minhasenhasecreta',
  {
    host: 'localhost',
    dialect: 'postgres',
    quoteIdentifiers: false,
    operatorsAliases: false
  },
);

(async () => {
  const Herois = driver.define(
    'herois',
    {
      id: {
        type: Sequelize.INTEGER,
        required: true,
        primaryKey: true,
        autoIncrement: true,
      },
      nome: {
        type: Sequelize.STRING,
        required: true,
      },
      poder: {
        type: Sequelize.STRING,
        required: true,
      },
    },
    {
      //opcoes para base existente
      tableName: 'TB_HEROIS',
      freezeTableName: false,
      timestamps: false,
    },
  );

  // force: true will drop the table if it already exists
  await Herois.sync();
  // Table created
  await Herois.create({
    nome: 'Lanterna Verde',
    poder: 'Anel',
  });
  const result = await Herois.findAll({
      raw: true,
      attributes: ['nome']
  })
  console.log('result',result)
})()
