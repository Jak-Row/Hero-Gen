import { Power } from '../models/index.js';

export const seedPowers = async () => {
    await Power.bulkCreate([
        { name: 'Super Strength', description: 'Superhuman strength', powerLevel: 9000, range: 'Short', role: 'Offense' },
        { name: 'Telekinesis', description: 'Move objects with the mind', powerLevel: 8000, range: 'Long', role: 'Utility' },
        { name: 'Invisibility', description: 'Become invisible', powerLevel: 7000, range: 'Self', role: 'Stealth' },
    ]);
};