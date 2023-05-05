const User = require('./User');
const Car = require('./Car')
const Bookings = require('./Bookings')
const Reviews = require('./Review');



Bookings.belongsTo(Car, {
    foreignKey: 'car_id',
    onDelete: 'CASCADE'
});
Car.hasMany(Bookings,  {
    foreignKey: 'car_id',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
});

Reviews.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
})

Reviews.belongsTo(Car, {
    foreignKey:'car_id',
    onDelete: 'CASCADE'
})

User.hasMany(Reviews, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
})

Car.hasMany(Reviews, {
    foreignKey: 'car_id',
    onDelete: 'CASCADE'
})


module.exports = { User, Car, Reviews, Bookings };