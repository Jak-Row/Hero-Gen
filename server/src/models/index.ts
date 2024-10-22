import sequelize from '../config/connection.js'
import { UserFactory } from './user.js';
import { HeroFactory } from './hero.js';
import { OriginFactory } from './origin.js';
import { PowerFactory } from './power.js';
import { GadgetFactory } from './gadget.js';
import { TagFactory } from './tag.js';

const User = UserFactory(sequelize);
const Hero = HeroFactory(sequelize);
const Origin = OriginFactory(sequelize);
const Power = PowerFactory(sequelize);
const Gadget = GadgetFactory(sequelize);
const Tag = TagFactory(sequelize);

export { User };
export { Hero };
export { Origin };
export { Power };
export { Gadget };
export { Tag };