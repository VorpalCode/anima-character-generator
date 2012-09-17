/*global define: false */
define(['magic_paths', 'psychic_disciplines', 'tables'],
function (paths, disciplines, tables) {
    return {
        advantages: {
            'Access to a Psychic Discipline': {DP: 15, Gnosis: 5, Options: Object.keys(disciplines.disciplines),
                Option_Title: 'Select a discipline', Incompatible: ['Access to Psychic Disciplines']},
            'Access to Psychic Disciplines': {DP: 30, Gnosis: 5, Incompatible: ['Access to a Psychic Discipline']},
            'Acute Sense': {DP: 10, Gnosis: 0, Options: ['Hearing', 'Sight', 'Smell', 'Taste', 'Touch'], Option_Title: 'Select the enhanced sense'},
            'Ambidextrous': {DP: 30, Gnosis: 0},
            'Amplify Sustained Power': {Category: 'Psychic', DP: 30, Gnosis: 5},
            'Aquatic Breathing': {DP: 10, Gnosis: 0},
            'Attribute Increased +1': {DP: 20, Gnosis: 0, Options: tables.characteristics, Option_Title: 'Select the characteristic to increase'},
            'Attribute Increased +2': {DP: 40, Gnosis: 5, Options: tables.characteristics, Option_Title: 'Select the characteristic to increase'},
            'Attribute Increased +3': {DP: 60, Gnosis: 15, Options: tables.characteristics, Option_Title: 'Select the characteristic to increase'},
            'Attuned': {DP: 10, Gnosis: 5, Options: [], Option_Title: 'Select the attuned element or type of creature'},
            'Contested Spell Mastery': {Category: 'Magic', DP: 10, Gnosis: 10},
            'Danger Sense': {DP: 40, Gnosis: 20},
            'Divine Physical Characteristics': {DP: 80, Gnosis: 30, Incompatible: ['Superhuman Physical Characteristics', 'Supernatural Physical Characteristics']},
            'Divine Spiritual Characteristics': {DP: 80, Gnosis: 35, Incompatible: ['Superhuman Spiritual Characteristics', 'Supernatural Spiritual Characteristics']},
            'Does Not Breathe': {DP: 10, Gnosis: 15, Incompatible: ['Physical Exemption']},
            'Does Not Eat': {DP: 10, Gnosis: 15, Incompatible: ['Physical Exemption']},
            'Does Not Sleep': {DP: 10, Gnosis: 15, Incompatible: ['Physical Exemption']},
            'Extreme Concentration': {Category: 'Psychic', DP: 30, Gnosis: 5, Incompatible: ['No Concentration']},
            Focus: {Category: 'Psychic', DP: 20, Gnosis: 5},
            'Fatigue Resistance': {DP: 10, Gnosis: 0, Multiple: true, Incompatible: ['Physical Exemption', 'Tireless']},
            'Gestureless Casting': {Category: 'Magic', DP: 20, Gnosis: 5, Incompatible: ['Require Gestures']},
            Gift: {DP: 30, Gnosis: 5},
            'Improved Innate Magic': {Category: 'Magic', DP: 20, Gnosis: 5},
            'Immune to Climatic Phenomena': {DP: 10, Gnosis: 15, Incompatible: ['Physical Exemption']},
            'Immune to Natural Diseases': {DP: 10, Gnosis: 20, Incompatible: ['Physical Exemption']},
            'Immune to Natural Poisons': {DP: 20, Gnosis: 20, Incompatible: ['Physical Exemption']},
            'Immune to Pain': {DP: 20, Gnosis: 0},
            'Increased Psychic Modifiers': {Category: 'Psychic', DP: 10, Gnosis: 20},
            'Inhumanity': {DP: 10, Gnosis: 0, Incompatible: ['Zen']},
            'Ki Recovery': {DP: 20, Gnosis: 20},
            'Natural Immunity to an Element (Half Damage)': {DP: 10, Gnosis: 20, Options: tables.elements, Option_Title: 'Select an element',
                Alternatives: ['Natural Immunity to an Element (Complete Immunity)']},
            'Natural Immunity to an Element (Complete Immunity)': {DP: 10, Gnosis: 20, Options: tables.elements, Option_Title: 'Select an element',
                Alternatives: ['Natural Immunity to an Element (Half Damage)']},
            'Natural Knowledge of a Path 20': {Category: 'Magic', DP: 10, Gnosis: 10, Options: Object.keys(paths), Option_Title: 'Select a path',
                Alternatives: ['Natural Knowledge of a Path 40', 'Natural Knowledge of a Path 60', 'Natural Knowledge of a Path 80', 'Natural Knowledge of a Path 90']},
            'Natural Knowledge of a Path 40': {Category: 'Magic', DP: 20, Gnosis: 15, Options: Object.keys(paths), Option_Title: 'Select a path',
                Alternatives: ['Natural Knowledge of a Path 20', 'Natural Knowledge of a Path 60', 'Natural Knowledge of a Path 80', 'Natural Knowledge of a Path 90']},
            'Natural Knowledge of a Path 60': {Category: 'Magic', DP: 30, Gnosis: 20, Options: Object.keys(paths), Option_Title: 'Select a path',
                Alternatives: ['Natural Knowledge of a Path 20', 'Natural Knowledge of a Path 40', 'Natural Knowledge of a Path 80', 'Natural Knowledge of a Path 90']},
            'Natural Knowledge of a Path 80': {Category: 'Magic', DP: 40, Gnosis: 25, Options: Object.keys(paths), Option_Title: 'Select a path',
                Alternatives: ['Natural Knowledge of a Path 20', 'Natural Knowledge of a Path 40', 'Natural Knowledge of a Path 60', 'Natural Knowledge of a Path 90']},
            'Natural Knowledge of a Path 90': {Category: 'Magic', DP: 50, Gnosis: 30, Options: Object.keys(paths), Option_Title: 'Select a path',
                Alternatives: ['Natural Knowledge of a Path 20', 'Natural Knowledge of a Path 40', 'Natural Knowledge of a Path 60', 'Natural Knowledge of a Path 80']},
            'Natural Power': {Category: 'Magic', DP: 10, Gnosis: 20},
            'Opposite Magic': {Category: 'Magic', DP: 10, Gnosis: 20},
            'Passive Concentration': {Category: 'Psychic', DP: 30, Gnosis: 5, Incompatible: ['No Concentration']},
            'Physical Exemption': {DP: 50, Gnosis: 20, Incompatible: ['Does Not Breathe', 'Does Not Eat', 'Does Not Sleep', 'Immune to Climatic Phenomena',
                'Immune to Natural Diseases', 'Immune to Natural Poisons', 'Tirless', 'Without Unconsciousness']},
            'Psychic Ambivalence': {Category: 'Psychic', DP: 30, Gnosis: 15},
            'Psychic Fatigue Resistance': {Category: 'Psychic', DP: 30, Gnosis: 5},
            'Psychic Inclination': {Category: 'Psychic', DP: 20, Gnosis: 5, Options: Object.keys(disciplines.disciplines), Option_Title: 'Select a discipline'},
            'Psychic Point Recovery': {Category: 'Psychic', DP: 20, Gnosis: 5},
            'Psychological Immunity': {DP: 20, Gnosis: 10},
            'Superhuman Physical Characteristics': {DP: 20, Gnosis: 0, Incompatible: ['Divine Physical Characteristics', 'Supernatural Physical Characteristics']},
            'Superhuman Spiritual Characteristics': {DP: 20, Gnosis: 5, Incompatible: ['Divine Spiritual Characteristics', 'Supernatural Spiritual Characteristics']},
            'Supernatural Physical Characteristics': {DP: 40, Gnosis: 20, Incompatible: ['Divine Physical Characteristics', 'Superhuman Physical Characteristics']},
            'Supernatural Spiritual Characteristics': {DP: 40, Gnosis: 20, Incompatible: ['Divine Spiritual Characteristics', 'Superhuman Spiritual Characteristics']},
            'Superior Magic Recovery': {Category: 'Magic', DP: 30, Gnosis: 5, Incompatible: ['Magic Blockage', 'Slow Recovery of Magic']},
            Survivor: {DP: 10, Gnosis: 0},
            'Tireless': {DP: 20, Gnosis: 15, Incompatible: ['Fatigue Resistance', 'Physical Exemption']},
            'Unnatural Size': {DP: 10, Gnosis: 0, Options: [-5, -4, -3, -2, -1, 1, 2, 3, 4, 5], Option_Title: 'Select the size modifier to apply'},
            'Unspoken Casting': {Category: 'Magic', DP: 20, Gnosis: 5, Incompatible: ['Oral Requirement']},
            'To the Limit': {DP: 5, Gnosis: 20},
            'Without Unconsciousness': {DP: 10, Gnosis: 5, Incompatible: ['Physical Exemption']},
            'Zen': {DP: 20, Gnosis: 25, Incompatible: ['Inhumanity']}
        },
        disadvantages: {
            'Action Requirement': {Category: 'Magic', DP: -20, Gnosis: 5, Options: [], Option_Title: 'Enter the type of action required'},
            'Additional Vulnerable Point': {DP: -20, Gnosis: 0, Options: [], Option_Title: 'Describe the vulnerable point'},
            'Atrophied Members': {DP: -20, Gnosis: 0, Options: ['Arms', 'Legs'], Option_Title: 'Select the affected members'},
            'Blind': {DP: -20, Gnosis: 0},
            'Extreme Need': {DP: -20, Gnosis: 10, Options: [], Option_Title: 'Describe the type and frequency of need'},
            'Lack of a Sense': {DP: -10, Gnosis: 0, Options: ['Hearing', 'Smell', 'Taste', 'Touch'], Option_Title: 'Select a sense'},
            'Magic Blockage': {Category: 'Magic', DP: -30, Gnosis: 5, Incompatible: ['Slow Recovery of Magic', 'Superior Magic Recovery']},
            'Magical Exhaustion': {Category: 'Magic', DP: -10, Gnosis: 5},
            'Natural Vulnerability to an Element (50% More Damage)': {DP: -10, Gnosis: 20, Options: tables.elements, Option_Title: 'Select an element',
                Alternatives: ['Natural Vulnerability to an Element (Double Damage)']},
            'Natural Vulnerability to an Element (Double Damage)': {DP: -20, Gnosis: 20, Options: tables.elements, Option_Title: 'Select an element',
                Alternatives: ['Natural Vulnerability to an Element (50% More Damage)']},
            'No Concentration': {Category: 'Psychic', DP: -10, Gnosis: 5, Incompatible: ['Extreme Concentration', 'Passive Concentration']},
            'Oral Requirement': {Category: 'Magic', DP: -10, Gnosis: 5, Incompatible: ['Unspoken Casting']},
            'Physical Need': {DP: -10, Gnosis: 0, Options: [], Option_Title: 'Describe the type and frequency of need'},
            'Psychic Consumption': {Category: 'Psychic', DP: -20, Gnosis: 5},
            'Psychic Exhaustion': {Category: 'Psychic', DP: -10, Gnosis: 5},
            'Racial Fear': {DP: -10, Gnosis: 10, Options: [], Option_Title: 'Describe the source of fear'},
            'Racial Terror': {DP: -20, Gnosis: 10, Options: [], Option_Title: 'Describe the source of terror'},
            'Racial Vice': {DP: -10, Gnosis: 0, Options: [], Option_Title: 'Describe the vice'},
            'Require Gestures': {Category: 'Magic', DP: -10, Gnosis: 5, Incompatible: ['Gestureless Casting']},
            'Slow Recovery of Magic': {Category: 'Magic', DP: -10, Gnosis: 5, Incompatible: ['Magic Blockage', 'Superior Magic Recovery']},
            'Vulnerability to a Type of Attack': {DP: -20, Gnosis: 10, Options: [], Option_Title: 'Enter the type of attack'},
            'Vulnerable to Harm': {DP: -30, Gnosis: 0}
        }
    };
});
