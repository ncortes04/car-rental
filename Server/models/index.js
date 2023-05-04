const User = require('./User');
const Car = require('./Car')
const Booking = require('./Bookings')
const Reviews = require('./Review');



Booking.belongsTo(Car, {
    foreignKey: 'car_id',
    onDelete: 'CASCADE'
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
    foreignKey: 'user_id'
})

Car.hasMany(Reviews, {
    foreignKey: 'car_id',
    onDelete: 'CASCADE'
})

module.exports = { User, Car, Reviews };