import { seedUsers } from './user-seeds.js';
//import { seedHeroes } from './hero-seeds.js';
import { seedOrigins } from './origin-seeds.js';
import { seedPowers } from './power-seeds.js';
import { seedGadgets } from './gadget-seeds.js';
import { seedTags } from './tag-seeds.js';
import sequelize from '../config/connection.js';

const seedAll = async (): Promise<void> => {
  try {
    await sequelize.sync({ force: true });
    console.log('\n----- DATABASE SYNCED -----\n');
    
    await seedUsers();
    console.log('\n----- USERS SEEDED -----\n');
    
    await seedOrigins();
    console.log('\n----- ORIGINS SEEDED -----\n');

    await seedPowers();
    console.log('\n----- POWERS SEEDED -----\n');

    await seedGadgets();
    console.log('\n----- GADGETS SEEDED -----\n');

    await seedTags();
    console.log('\n----- TAGS SEEDED -----\n');

    //await seedHeroes();
    //console.log('\n----- HEROES SEEDED -----\n');

    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
};

seedAll();
