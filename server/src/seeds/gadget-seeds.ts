import { Gadget } from '../models/index.js';

export const seedGadgets = async () => {
  await Gadget.bulkCreate([
    { name: 'Laser Gun', description: 'A handheld laser weapon', powerLevel: 9000, range: 'Long', role: 'Offense' },
    { name: 'Force Field', description: 'A protective energy barrier', powerLevel: 8000, range: 'Short', role: 'Defense' },
    { name: 'Teleporter', description: 'A device that teleports the user', powerLevel: 7000, range: 'Long', role: 'Utility' },
  ]);
};