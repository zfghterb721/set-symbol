import svg_data_json from "./svg_data.json";
import mtg_json from "./mtg_json_setcode.json";

type setKeys = keyof typeof svg_data_json;

// a list of strings that match to a setKey
type SetNameDictionary = {
    [key: string]: setKeys;
};

export const getSetCode = (setName: string): setKeys | undefined => {
    if(Object.keys(svg_data_json).includes(setName)){
        return setName as setKeys;
    }
    if(Object.keys(mtg_json).includes(setName)){
        return mtg_json[setName];
    }
    return setNameDictionary[setName];
}


const setNameDictionary: SetNameDictionary = {
    "Dominaria": "dom",
    "Wilds of Eldraine": "woe",
    "Strixhaven: School of Mages": "stx",
    "Strixhaven: School of Mages Mystical Archive": "sta",
};