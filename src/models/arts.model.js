// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require("sequelize");
const DataTypes = Sequelize.DataTypes;

module.exports = function(app) {
    const sequelizeClient = app.get("sequelizeClient");
    const arts = sequelizeClient.define(
      "arts",
      {
        _id: {
          type: Sequelize.UUID,
          unique: true,
          primaryKey: true,
          isUUID: 4,
          defaultValue: Sequelize.UUIDV4,
        },
        name: {
          type: DataTypes.TEXT,
          // allowNull: false,
        },
        price: {
          type: DataTypes.TEXT,
          // allowNull: false,
        },
        description: {
          type: DataTypes.STRING,
          // allowNull: false,
        },
        length: {
          type: DataTypes.STRING,
          // allowNull: false,
        },
        size: {
          type: DataTypes.STRING,
          // allowNull: false,
        },
        width: {
          type: DataTypes.STRING,
          // allowNull: false,
        },
        breadth: {
          type: DataTypes.STRING,
          // allowNull: false,
        },
        mediums: {
          type: DataTypes.ARRAY(Sequelize.STRING),
          // allowNull: false,
        },
        keywords: {
          type: DataTypes.ARRAY(Sequelize.STRING),
          // allowNull: false,
        },
        category: {
          type: DataTypes.STRING,
          // allowNull: false,
        },
        orientation: {
          type: DataTypes.STRING,
          // allowNull: false,
        },
        subjects: {
          type: DataTypes.ARRAY(Sequelize.STRING),
          // allowNull: false,
        },
        styles: {
          type: DataTypes.ARRAY(Sequelize.STRING),
          // allowNull: false,
        },
        materials: {
          type: DataTypes.ARRAY(Sequelize.STRING),
          // allowNull: false,
        },
        visibleToPublic: {
          type: DataTypes.BOOLEAN,
          defaultValue: true,
        },
        art: {
          type: DataTypes.STRING,
          // allowNull: false,
        },
        url: {
          type: DataTypes.STRING,
          // allowNull: false,
        },
        isSold: {
          type: DataTypes.BOOLEAN,
          defaultValue: false,
        },
        soldBy: {
          type: DataTypes.STRING,
          defaultValue: "Michoro",
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
    arts.associate = function(models) {
        // Define associations here
        // See http://docs.sequelizejs.com/en/latest/docs/associations/
        // Sequelize-demo: Note that the model is 'users' not 'user' because that is how we defined it in sequelize.
        arts.belongsTo(models.users);
    };

    return arts;
};