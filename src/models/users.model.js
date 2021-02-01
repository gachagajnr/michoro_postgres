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
            },
            location: {
                type: DataTypes.STRING,
            },
            idnumber: {
                type: DataTypes.NUMBER,
            },
            street: {
                type: DataTypes.STRING,
            },
            location: {
                type: DataTypes.STRING,
            },
            city: {
                type: DataTypes.STRING,
            },
            about: {
                type: DataTypes.STRING,
            },
            styles: {
                type: DataTypes.ARRAY(Sequelize.STRING),
            },
            role: {
                type: DataTypes.STRING,
                defaultValue: "user",
            },
            info: {
                type: DataTypes.STRING,
            },
            newsletter: {
                type: DataTypes.BOOLEAN,
                defaultValue: true,
            },
            //verification
            isVerified: {
                type: DataTypes.BOOLEAN,
            },
            verifyToken: {
                type: DataTypes.STRING,
            },
            resetToken: {
                type: DataTypes.STRING,
            },
            verifyExpires: {
                type: DataTypes.DATE,
            },
            verifyChanges: {
                type: DataTypes.JSON,
            },
            resetExpires: {
                type: DataTypes.DATE,
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