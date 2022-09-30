import { getBio } from '../../api';

const about = async (args: string[]): Promise<string> => {

  return `# $ whoami?  &nbsp;  
  I am Oussama, a full-stack software developer based in Kénitra, Morocco.
  I love building things.`;
};

export default about;
