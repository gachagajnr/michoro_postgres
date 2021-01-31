// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require("sequelize");
const DataTypes = Sequelize.DataTypes;

module.exports = function(app) {
    const sequelizeClient = app.get("sequelizeClient");
    const users = sequelizeClient.define(
        "users", {
            email: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true,
            },
            password: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            firstname: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            lastname: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            phone: {
                type: DataTypes.NUMBER,
                allowNull: false,
            },
            location: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            idnumber: {
                type: DataTypes.NUMBER,
                allowNull: false,
            },
            street: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            location: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            city: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            about: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            styles: {
                type: DataTypes.ARRAY(Sequelize.STRING),
                allowNull: false,
            },
            role: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            info: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            newsletter: {
                type: DataTypes.BOOLEAN,
                allowNull: false,

            },
            //verification
            isVerified: {
                type: DataTypes.BOOLEAN,
                allowNull: false,
            },
            verifyToken: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            resetToken: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            verifyExpires: {
                type: DataTypes.DATE,
                allowNull: false,
            },
            verifyChanges: {
                type: DataTypes.JSON,
                allowNull: false,
            },
            resetExpires: {
                type: DataTypes.DATE,
                allowNull: false,
            },
            googleId: { type: DataTypes.STRING },

            facebookId: { type: DataTypes.STRING },
        }, {
            hooks: {
                beforeCount(options) {
                    options.raw = true;
                },
            },
        }
    );

    // eslint-disable-next-line no-unused-vars
    users.associate = function(models) {
        // Define associations here
        // See http://docs.sequelizejs.com/en/latest/docs/associations/
    };

    return users;
};