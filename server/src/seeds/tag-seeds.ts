import { Tag } from '../models/index.js';

export const seedTags = async () => {
    await Tag.bulkCreate([
      { name: 'Long Range', description: 'A handheld laser weapon'},
      { name: 'Mid Range', description: 'A protective energy barrier'},
      { name: 'Close Range', description: 'A device that teleports the user'},
    ]);
  };