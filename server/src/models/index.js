const Gadget = require('./gadget');
const Hero = require('./hero');
const Origin = require('./origin');
const Power = require('./power');
const Tag = require('./tag');
const User = require('./user');
//const GadgetTag = require('./gadgetTag');
//const PowerTag = require('./powerTag');

User.hasMany(Hero, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Hero.belongsTo(User, {
    foreignKey: 'user_id'
});

Hero.belongsTo(Origin, {
    foreignKey: 'origin_id',
    onDelete: 'CASCADE'
});

Origin.hasMany(Hero, {
    foreignKey: 'origin_id'
});

Hero.belongsTo(Power, {
    foreignKey: 'power_id',
    onDelete: 'CASCADE'
});

Power.hasMany(Hero, {
    foreignKey: 'power_id'
});

Hero.belongsTo(Gadget, {
    foreignKey: 'gadget_id',
    onDelete: 'CASCADE'
});

Gadget.hasMany(Hero, {
    foreignKey: 'gadget_id'
});

Gadget.belongsToMany(Tag, {
    foreignKey: 'gadget_id',
    through: 'gadgetTag'
});

Tag.hasMany(Gadget, {
    foreignKey: 'tag_id'
});

Power.belongsToMany(Tag, {
    foreignKey: 'power_id',
    through: 'powerTag'
});

Tag.hasMany(Power, {
    foreignKey: 'tag_id'
});




/*Hero.hasOne(Origin, {
    foreignKey: 'id',
    onDelete: 'CASCADE'
});

Origin.belongsToMany(Hero, {
    foreignKey: 'id',
    through: 'hero_origin'
});

Hero.hasOne(Power, {
    foreignKey: 'id',
    onDelete: 'CASCADE'
});

Power.belongsToMany(Hero, {
    foreignKey: 'id',
    through: 'hero_power'
});

Hero.hasOne(Gadget, {
    foreignKey: 'id',
    onDelete: 'CASCADE'
});

Gadget.belongsToMany(Hero, {
    foreignKey: 'id',
    through: 'hero_gadget'
});*/


module.exports = { Gadget, Hero, Origin, Power, Tag, User };