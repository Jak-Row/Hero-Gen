import { Origin } from '../models/index.js';

export const seedOrigins = async () => {
    await Origin.bulkCreate([
        { name: 'Alien', description: 'A being from another planet' },
        { name: 'Mutant', description: 'A being with genetic mutations' },
        { name: 'Experiment', description: 'A being created in a lab' },
    ]);
};