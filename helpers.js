function randBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function shuffle(array) {
    var i = 0;
    var j = 0;
    var temp = null;

    for (i = array.length - 1; i > 0; i -= 1) {
        j = Math.floor(Math.random() * (i + 1))
        temp = array[i]
        array[i] = array[j]
        array[j] = temp
    }
}

function generateName() {

    var chars = randBetween(3,8);
    var pattern = randBetween(0,2);
    var str;

    var vowels = ['a','a','a','a','a','a','a','a','a','a',
                 'e','e','e','e','e','e','e','e','e','e',
                 'o','o','o','o','o','o','o','o','o','o',
                 'i','i','i','i','i','u','u','u','u','u',
                 'ae','ai','au','aa','ea','ee','ei','eu','ia','ie',
                 'io','ua','ue','ui','uo','eau','oa','oi','ou','ea'
                ];

    var first_conson = ['B','C','D','F','G','H','J','K','L','M',
                       'N','N','P','Q','R','S','T','V','W','X',
                       'Y','Z','Ch','Sh','Ph','Th','Sh','Str','Sk','Sp',
                       'Kr','Kl','Qu','Fr','Bl','Pl','Tr','Tw','Dr','Br',
                       'Gh','Gr','Gl','Pr','Zh','Fl','Cl','Cr','Chr','Spr',
                       'R','S','T','L','N','R','S','T','L','N'
                      ];

    var other_conson = ['b','c','d','f','g','h','j','k','l','m',
                       'n','n','p','q','r','s','t','u','v','x',
                       'y','z','ch','sh','ph','th','st','str','sk','sp',
                       'ss','tt','qu','mm','nn','gg','tr','rt','lt','ft',
                       'gh','rg','dd','rp','ll','ck','rf','cr','chr','spr',
                       'r','s','t','l','n','r','s','t','l','n'
                      ];

    if(pattern < 2 ) {
       str = first_conson[randBetween(0,59)] +
                  vowels[randBetween(0,59)] +
                  other_conson[randBetween(0,59)] +
                  vowels[randBetween(0,59)] +
                  other_conson[randBetween(0,59)];
    } else {
       str = vowels[randBetween(0,59)] +
                  other_conson[randBetween(0,59)] +
                  vowels[randBetween(0,59)] +
                  other_conson[randBetween(0,59)]
                  vowels[randBetween(0,59)];
       str = capitalise(str);
    }

    name = str.substr(0,chars);

    return name;
}

//snippets from stacks overflow

function isEven(n) {
    return isNumber(n) && (n % 2 == 0);
}

function capitalise(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

module.exports.generateName = generateName;
module.exports.randBetween = randBetween;
module.exports.shuffle = shuffle;
module.exports.isEven = isEven;
module.exports.capitalise = capitalise;
