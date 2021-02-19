// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const orders = sequelizeClient.define('orders', {
    _id: {
      type: Sequelize.UUID,
      unique: true,
      primaryKey: true,
      isUUID: 4,
      defaultValue: Sequelize.UUIDV4
    },
     arts: {
      type: DataTypes.ARRAY(Sequelize.STRING),
    },
    email: {
      type: DataTypes.STRING,
    },
    firstname: {
      type: DataTypes.STRING,
    },
    lastname: {
      type: DataTypes.STRING,
    },
    newsletter: {
      type: DataTypes.BOOLEAN,
      defaultValue:true
    },
    location: {
      type: DataTypes.STRING,
    },
    street: {
      type: DataTypes.STRING,
    },
    city: {
      type: DataTypes.STRING,
    },
    paying: {
      type: DataTypes.STRING,
    },
    phone: {
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
  orders.associate = function (models) {
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
  };

  return orders;
};
