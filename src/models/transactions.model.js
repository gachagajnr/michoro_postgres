// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const transactions = sequelizeClient.define(
    "transactions",
    {
      _id: {
        type: Sequelize.UUID,
        unique: true,
        primaryKey: true,
        isUUID: 4,
        defaultValue: Sequelize.UUIDV4,
      },
      transaction_id: {
        type: DataTypes.STRING,
      },
      amount: {
        type: DataTypes.STRING,
      },
      status: {
        type: DataTypes.STRING,
      
      },
      currency: {
        type: DataTypes.STRING,
      },
      system: {
        type: DataTypes.STRING,
      },
      reference: {
        type: DataTypes.STRING,
      },
      till_number: {
        type: DataTypes.STRING,
      },
      origination_time: {
        type: DataTypes.STRING,
      },
      sender_first_name: {
        type: DataTypes.STRING,
      },
      sender_last_name: {
        type: DataTypes.STRING,
      },
      sender_phone_number: {
        type: DataTypes.STRING,
      },
      metadata: {
        type: DataTypes.JSON,
      },
    },
    {
      hooks: {
        beforeCount(options) {
          options.raw = true;
        },
      },
    }
  );

  // eslint-disable-next-line no-unused-vars
  transactions.associate = function (models) {
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
  };

  return transactions;
};
