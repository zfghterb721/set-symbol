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
    '30th Anniversary Promos': '30a',
    'Dominaria': 'dom',
    'Wilds of Eldraine': 'woe',
    'Strixhaven: School of Mages': 'stx',
    'Strixhaven: School of Mages Mystical Archive': 'sta',
    'Conflux': 'con_',
    'con': 'con_',
    'Aether Revolt Tokens': 'aer',
    'Alara Reborn Tokens': 'aer',
    'Aether Revolt Prerelease Promos': 'aer',
    'Amonkhet Tokens': 'akh',
    'Amonkhet Prerelease Promos': 'akh',
    'Archenemy: Nicol Bolas Tokens': 'e01',
    'Assassin\'s Creed': 'acr',
    'Avacyn Restored Tokens': 'avr',
    'Avacyn Restored Prerelease Promos': 'avr',
    'Battle for Zendikar Standard Series': 'bfz',
    'Battle for Zendikar Tokens': 'bfz',
    'Battle for Zendikar Prerelease Promos': 'bfz',
    'Battle Royale': 'brb',
    'Battlebond Tokens': 'bbd',
    'Battlebond Prerelease Promos': 'bbd',
    'Beatdown': 'btd',
    'Born of the Gods Prerelease Promos': 'bng',
    'Born of the Gods Battle the Horde': 'bng',
    'Born of the Gods Tokens': 'bng',
    'Commander 2015 Tokens': 'c15',
    'Commander 2016 Tokens': 'c16',
    'Commander 2017 Tokens': 'c17',
    'Commander 2018 Tokens': 'c18',
    'Commander 2019 Tokens': 'c19',
    'Commander 2020 Tokens': 'c20',
    'Commander Anthology Tokens': 'cma',
    'Commander Anthology Volume II Tokens': 'cm2',
    'Commander Masters': 'cmm',
    'Conflux Tokens': 'con_',
    'Core Set 2019 Prerelease Promos': 'm19',
    'Core Set 2020 Promo Pack': 'm20',
    'Core Set 2020 Prerelease Promos': 'm20',
    'Core Set 2021 Prerelease Promos': 'm21',
    'Dark Ascension Prerelease Promos': 'dka',
    'Dominaria Prerelease Promos': 'dom',
    'Dungeons & Dragons: Adventures in the Forgotten Realms': 'afr',
    'Dungeons & Dragons: Adventures in the Forgotten Realms Commander': 'afc',
    'Innistrad: Midnight Hunt Commander': 'mic',
    'Kaladesh Prerelease Promos': 'kld',
    'Kamigawa: Neon Dynasty Commander': 'nec',
    'Magic 2019 Gift Pack': 'm19',
    'Magic 2019 Standard Showdown': 'pmei',
    'Mystery Booster': 'mb1',
    'Modern Horizons 3 Commander': 'm3c',
    'Outlaws of Thunder Junction: The Big Score': 'big',
    'Outlaws of Thunder Junction: Breaking News': 'otp',
    'The Lord of the Rings: Tales of Middle-Earth': 'ltr',
    'The Lord of the Rings: Tales of Middle-Earth Showcase Scrolls': 'ltr',
    'The Lord of the Rings: Tales of Middle-Earth Commander': 'ltc',
    'Secret Lair Drop Series': 'sld',
    'Streets of New Capenna Commander': 'ncc',
    
};
