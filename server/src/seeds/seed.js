const sequelize = require('../config/connection');
const { Gadget, Hero, Origin, Power, Tag, User } = require('../models');

const gadgetSeedData = require('./seedData/gadgetSeedData.json');
const originSeedData = require('./seedData/originSeedData.json');
const powerSeedData = require('./seedData/powerSeedData.json');
const tagSeedData = require('./seedData/tagSeedData.json');

//import { Gadget } from '../models/index.js';

//export const seedGadgets = async () => {
//    await Gadget.bulkCreate([]);
//}

const seedDatabase = async () => {
    await sequelize.sync({ force: true });

    await Origin.bulkCreate(originSeedData);
    await Power.bulkCreate(powerSeedData);
    await Tag.bulkCreate(tagSeedData);
    await Gadget.bulkCreate(gadgetSeedData);

    process.exit(0);
};

seedDatabase();