module.exports = function(sequelize, DataTypes) {
    //SEQUELIZE WILL ADD AN S TO THE TABLE NAME -- SO BELOW I ONLY PUT BURGER EVEN THOUGH MY TABLE NAME IS BURGERS!
    var Burger = sequelize.define("burger", {
        //SEQUELIZE WILL ADD AUTO INCREMENTING ID
        burger_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        devoured: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        }
    })
    return Burger;
}