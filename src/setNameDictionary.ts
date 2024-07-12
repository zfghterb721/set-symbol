import svg_data_json from './svg_data.json';
import mtg_json from './mtg_json_setcode.json';

type setKeys = keyof typeof svg_data_json;

// a list of strings that match to a setKey
type SetNameDictionary = {
  [key: string]: setKeys;
};

export const getSetCode = (setName: string): setKeys | undefined => {
  //These are thre overrides for sets that have different names in the svg_data.json file
  if (Object.keys(setNameDictionary).includes(setName)) {
    return setNameDictionary[setName];
  }
  //this checks mtg json set names and grabs the keyrune code
  if (Object.keys(mtg_json).includes(setName)) {
    return mtg_json[setName];
  }
  //this checks if the passed param is just the keyrune code and returns it
  if (Object.keys(svg_data_json).includes(setName)) {
    return setName as setKeys;
  }

  return undefined;
};

const setNameDictionary: SetNameDictionary = {
  'Dominaria': 'dom',
  'Wilds of Eldraine': 'woe',
  'Strixhaven: School of Mages': 'stx',
  'Strixhaven: School of Mages Mystical Archive': 'sta'
};
