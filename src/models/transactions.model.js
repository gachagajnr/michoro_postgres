// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const transactions = sequelizeClient.define('transactions', {
    _id: {
      type: Sequelize.UUID,
      unique: true,
      primaryKey: true,
      isUUID: 4,
      defaultValue: Sequelize.UUIDV4
    },
    service_name: {
      type: DataTypes.STRING, 
    },
    business_number: {
      type: DataTypes.STRING, 
    },
    transaction_reference: {
      type: DataTypes.STRING, 
    },
    internal_transaction_id: {
      type: DataTypes.STRING, 
    },
    transaction_timestamp: {
      type: DataTypes.STRING, 
    },
    transaction_type: {
      type: DataTypes.STRING, 
    },
    account_number: {
      type: DataTypes.STRING, 
    },
    sender_phone: {
      type: DataTypes.STRING, 
    },
    first_name: {
      type: DataTypes.STRING, 
    },
    middle_name: {
      type: DataTypes.STRING, 
    },
    last_name: {
      type: DataTypes.STRING, 
    },
    amount: {
      type: DataTypes.INTEGER, 
    },
    currency: {
      type: DataTypes.STRING, 
    },
    signature: {
      type: DataTypes.STRING, 
    },
  }, {
    hooks: {
      beforeCount(options) {
        options.raw = true;
      }
    }
  });

  // eslint-disable-next-line no-unused-vars
  transactions.associate = function (models) {
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
  };

  return transactions;
};
