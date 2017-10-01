/*
 * ENUMs for POS
 */
Blockly.pos = {
    NOUN: "noun",
    VERB: "verb",
    ADJECTIVE: "adjective",
    PREPOSITION: "preposition",
    ADVERB: "adverb"
}

Blockly.inflectedCase = {
    NOMINATIVE: "nominative",
    GENITIVE: "genitive",
    DATIVE: "dative",
    ACCUSATIVE: "accusative",
    ABLATIVE: "ablative",
    VOCATIVE: "vocative"
}

Blockly.plurality = {
    SINGULAR: "singular",
    PLURAL: "plural"
}

Blockly.gender = {
    FEMININE: "feminine",
    MASCULINE: "masculine",
    NEUTER: "neuter"
}

Blockly.person = {
    FIRST: "first",
    SECOND: "second",
    THIRD: "third"
}

Tooltips = {};
Tooltips.noun = {};
Tooltips.noun["ager"] = "ager, agri, m.: farm, field";
Tooltips.noun["agricola"] = "agricola, agricolae, m.: farmer";
Tooltips.noun["animal"] = "animal, animalis, n.: animal";
Tooltips.noun["arx"] = "arx, arcis, f.: citadel, fortress, height, defense";
Tooltips.noun["aura"] = "aura, aurae, f.: breeze";
Tooltips.noun["barbaria"] = "barbaria, barbariae, f.: foreign country, barbarity, brutality";
Tooltips.noun["canis"] = "canis, canis, m.: dog";
Tooltips.noun["cena"] = "cena, cenae, f.: dinner";
Tooltips.noun["centurio"] = "centurio, centurionis, m.: centurion";
Tooltips.noun["Cicero"] = "Cicero, Ciceronis, m.: Cicero";
Tooltips.noun["cinis"] = "cinis, cineris, m.: ashes";
Tooltips.noun["civis"] = "civis, civis, m.: citizen";
Tooltips.noun["clamor"] = "clamor, clamoris, m.: shout, noise";
Tooltips.noun["consilium"] = "consilium, consili, n.: plan, counsel, advice";
Tooltips.noun["copia"] = "copia, copiae, f.: supply, plenty";
Tooltips.noun["culmen"] = "culmen, culminis, n.: summit, roof, height";
Tooltips.noun["Dido"] = "Dido, Didonis, f.: Dido";
Tooltips.noun["epistula"] = "epistula, epistulae, f.: letter, epistle";
Tooltips.noun["ego"] = "ego (pronoun): I";
Tooltips.noun["Eurus"] = "Eurus, Euri, m.: East Wind";
Tooltips.noun["fabula"] = "fabula, fabulae, f.: story, narrative, discourse";
Tooltips.noun["factum"] = "factum, facti, n.: fact, deed, act";
Tooltips.noun["femina"] = "femina, feminae, f.: woman";
Tooltips.noun["filius"] = "filius, filii, m.: son";
Tooltips.noun["flatus"] = "flatus, flatus, m.: breeze, breath, soul";
Tooltips.noun["flamma"] = "flamma, flammae, f.: flame, blaze, fire";
Tooltips.noun["fortuna"] = "fortuna, fortunae, f.: fortune, fate";
Tooltips.noun["forum"] = "forum, fori, n.: market-place, forum";
Tooltips.noun["fundus"] = "fundus, fundi, m.: bottom, ground";
Tooltips.noun["fur"] = "fur, furi, m.: thief";
Tooltips.noun["Graecus"] = "Graecus, Graeci, m.: Greek";
Tooltips.noun["gladium"] = "gladium, gladii, n.: sword";
Tooltips.noun["homo"] = "homo, hominis, m.: man";
Tooltips.noun["hospes"] = "hospes, hospitis, m.: guest, host";
Tooltips.noun["horror"] = "horror, horroris, m.: fear";
Tooltips.noun["iuvenis"] = "iuvenis, iuvenis, m.: youth, young man";
Tooltips.noun["infans"] = "infans, infantis, m.: child, baby, infant";
Tooltips.noun["Laocoon"] = "Laocoon, Laocoontis, m.: Laocoon";
Tooltips.noun["leo"] = "leo, leonis, m.: lion";
Tooltips.noun["liber"] = "liber, libri, m.: book";
Tooltips.noun["libertus"] = "libertus, liberti, m.: freedman";
Tooltips.noun["locus"] = "locus, loci, m.: place";
Tooltips.noun["mater"] = "mater, matris, f.: mother";
Tooltips.noun["mensa"] = "mensa, mensae, f.: table";
Tooltips.noun["mercator"] = "mercator, mercatoris, m.: merchant";
Tooltips.noun["miles"] = "miles, militis, m.: soldier";
Tooltips.noun["mons"] = "mons, montis, m.: mountain";
Tooltips.noun["mus"] = "mus, muris, m.: mouse";
Tooltips.noun["nubes"] = "nubes, nubis, m.: cloud";
Tooltips.noun["nuntius"] = "nuntius, nunti, m.: messenger";
Tooltips.noun["orator"] = "orator, oratoris, m.: orator";
Tooltips.noun["pater"] = "pater, patris, m.: father";
Tooltips.noun["poculum"] = "poculum, poculi, n.: cup";
Tooltips.noun["poeta"] = "poeta, poetae, m.: poet";
Tooltips.noun["portus"] = "portus, portus, m.: port, harbor, refuge";
Tooltips.noun["puella"] = "puella, puellae, f.: girl";
Tooltips.noun["puer"] = "puer, pueri, m.: boy";
Tooltips.noun["regina"] = "regina, reginae, f.: queen";
Tooltips.noun["res"] = "res, rei, f.: thing, affair";
Tooltips.noun["rosa"] = "rosa, rosae, f.: rose";
Tooltips.noun["senis"] = "senis, senis, m.: old man";
Tooltips.noun["salus"] = "salus, salutis, f.: safety, welfare, greeting";
Tooltips.noun["senator"] = "senator, senatoris, m.: senator";
Tooltips.noun["sententia"] = "sententia, sententiae, f.: opinion";
Tooltips.noun["servus"] = "servus, servi, m.: slave";
Tooltips.noun["sidus"] = "sidus, sideris, n.: star";
Tooltips.noun["silva"] = "silva, silvae, f.: forest";
Tooltips.noun["tu"] = "tu (pronoun): you";
Tooltips.noun["triclinium"] = "triclinium, triclinii, n.: dining room";
Tooltips.noun["urbs"] = "urbs, urbis, f.: city";
Tooltips.noun["uxor"] = "uxor, uxoris, f.: wife";
Tooltips.noun["ventus"] = "ventus, venti, m.: wind";
Tooltips.noun["vinum"] = "vinum, vini, n.: wine";
Tooltips.noun["vir"] = "vir, viri, m.: man";

Tooltips.adjective = {};
Tooltips.adjective["altus"] = "altus, alta, altum: high, deep"; 
Tooltips.adjective["ardens"] = "ardens, ardentis: fiery, shining, eager";
Tooltips.adjective["avarus"] = "avarus, avara, avarum: greedy";
Tooltips.adjective["aureus"] = "aureus, aurea, aureum: gold";
Tooltips.adjective["bonus"] = "bonus, bona, bonum: good";
Tooltips.adjective["densus"] = "densus, densa, densum: dense, crowded, frequent";
Tooltips.adjective["ferox"] = "ferox, ferocis: wild, bold, warlike";
Tooltips.adjective["fessus"] = "fessus, fessa, fessum: tired, weary";
Tooltips.adjective["forensis"] = "forensis, forensis, forense: of the market or forum, public";
Tooltips.adjective["fortis"] = "fortis, fortis, forte: brave, strong";
Tooltips.adjective["hibernus"] = "hibernus, hiberna, hibernum: wintry, icy";
Tooltips.adjective["ignavus"] = "ignavus, ignava, ignavum: lazy, idle, cowardly";
Tooltips.adjective["ingens"] = "ingens, ingentis: huge, big, large, monstrous";
Tooltips.adjective["parvus"] = "parvus, parva, parvum: small, little";
Tooltips.adjective["protus"] = "protus, prota, protum: first, original";
Tooltips.adjective["iratus"] = "iratus, irata, iratum: angered, angry, furious, irate";
Tooltips.adjective["stultus"] = "stultus, stulta, stultum: foolish, silly";
Tooltips.adjective["laetus"] = "laetus, laeta, laetum: joyful, happy, glad";
Tooltips.adjective["magnus"] = "magnus, magna, magnum: great";
Tooltips.adjective["mollis"] = "mollis, mollis, molle: soft, pliant, mild";
Tooltips.adjective["multus"] = "multus, multa, multum: much";
Tooltips.adjective["notus"] = "notus, nota, notum: known, recognized, familiar";
Tooltips.adjective["publicus"] = "publicus, publica, publicum: public";
Tooltips.adjective["sollicitus"] = "sollicitus, sollicita, sollicitum: thoroughly moved, agitated, disturbed, worried, anxious";
Tooltips.adjective["saevus"] = "saevus, saeva, saevum: fierce, cruel, savage";
Tooltips.adjective["summus"] = "summus, summa, summum: highest";
Tooltips.adjective["vitiosissimus"] = "vitiosissimus, vitiosissima, vitiosissimum: most wicked";

Tooltips.verb = {};
Tooltips.verb["amitto"] = "amitto, amittere, amisi, amissum: let go, lose";
Tooltips.verb["circumsto"] = "circumsto, circumstare, circumsteti, circumstatum: stand around, encircle";
Tooltips.verb["curro"] = "curro, currere, cucurri, cursum: run";
Tooltips.verb["cado"] = "cado, cadere, cecedi, casum: fall, die";
Tooltips.verb["decurro"] = "decurro, decurrere, decurri, decursum: run down, charge";
Tooltips.verb["demonstro"] = "demonstro, demonstrare, demonstravi, demonstratum: show, demonstrate, point out";
Tooltips.verb["dico"] = "dico, dicere, dixi, dictum: say, speak, mention, declare, name";
Tooltips.verb["do"] = "do, dare, dedi, datum: give";
Tooltips.verb["dormio"] = "dormio, dormire, dormivi, dormitum: sleep";
Tooltips.verb["emo"] = "emo, emere, emi, emptum: buy, purchase";
Tooltips.verb["erro"] = "erro, errare, erravi, erratum: go astray, err, miss";
Tooltips.verb["fugio"] = "fugio, fugere, fugi, fugitum: flee, run away, take flight";
Tooltips.verb["ferio"] = "ferio, ferire, ferivi, feritum: hit, strike, beat, knock";
Tooltips.verb["festino"] = "festino, festinare, festinavi, festinatum: hasten";
Tooltips.verb["invenio"] = "invenio, invenire, inveni, inventum: find, discover";
Tooltips.verb["porto"] = "porto, portare, portavi, portatum: bring, carry";
Tooltips.verb["parco"] = "parco, parcere, peperci, parsum: spare";
Tooltips.verb["placeo"] = "placeo, placere, placui, placitum: please, suit, be pleasing to";
Tooltips.verb["pulso"] = "pulso, pulsare, pulsavi, pulsatum: beat, strike, hit, knock on, punch, whack";
Tooltips.verb["lego"] = "lego, legere, legi, lectum: read";
Tooltips.verb["lacrimo"] = "lacrimo, lacrimare, lacrimavi, lacrimatum: cry";
Tooltips.verb["patior"] = "patior, pati, passum est: suffer, endure, acquiesce, submit";
Tooltips.verb["ruo"] = "ruo, ruere, rui, rutum: hurry, collapse, fail";
Tooltips.verb["rapio"] = "rapio, rapere, rapui, raptum: snatch, grab, seize, carry off";
Tooltips.verb["scribo"] = "scribo, scribere, scripsi, scriptum: write";
Tooltips.verb["specto"] = "specto, spectare, spectavi, spectatum: watch, look at";
Tooltips.verb["saluto"] = "saluto, salutare, salutavi, salutatum: greet";
Tooltips.verb["taceo"] = "taceo, tacere, tacui, tacitum: be silent";
Tooltips.verb["terreo"] = "terreo, terrere, terrui, territum: be frightening";
Tooltips.verb["vitupero"] = "vitupero, vituperare, vituperavi, vituperatum: censure, blame, disparage";

Tooltips.preposition = {};
Tooltips.preposition["a"] = "a(b): from, away from, by";
Tooltips.preposition["ad"] = "ad: to, towards";
Tooltips.preposition["ex"] = "ex: out of, from";
Tooltips.preposition["in"] = "in: in, on";
Tooltips.preposition["post"] = "post: after, behind";
Tooltips.preposition["pro"] = "pro: for, on behalf of";
Tooltips.preposition["per"] = "per: through, for, by, on account of";
Tooltips.preposition["sine"] = "sine: without";

Tooltips.adverb = {};
Tooltips.adverb["ac"] = "ac: and";
Tooltips.adverb["at"] = "at: yet, but";
Tooltips.adverb["vehementer"] = "vehementer: violently, forcefully, loudly, vehemently";
Tooltips.adverb["ferociter"] = "ferociter: fiercely, boldly, arrogantly";
Tooltips.adverb["celeriter"] = "celeriter: quickly, swiftly";
Tooltips.adverb["intente"] = "intente: eagerly, intently, earnestly";
Tooltips.adverb["libenter"] = "libenter: willingly, freely";
Tooltips.adverb["nam"] = "nam: for"; 
Tooltips.adverb["frustra"] = "frustra: in vain, in error"; 
Tooltips.adverb["primum"] = "primum: first, at first";
Tooltips.adverb["simul"] = "simul: at the same time, at once";
Tooltips.adverb["statim"] = "statim: immediately";
Tooltips.adverb["tum"] = "tum: then, thereupon";
Tooltips.adverb["vel"] = "vel (adverb): even, actually";

/******************
 * 
 * NOUNS
 *
 ******************/

/*
 * makeNoun: creates a noun.
 * noun Contains 'word', a string of the word and 'inflections', an array of possible inflections as objects.
 */
Blockly.makeNoun = function(noun) {
    var uniqueName;
        uniqueName = noun.word + "-" + noun.lemma + "-" + Blockly.pos.NOUN;
    Blockly.Blocks[uniqueName] = {
        init: function() {
            this.lemma = noun.lemma;
            this.word = noun.word;
            this.pos = Blockly.pos.NOUN;
            this.inflections = noun.inflections;
            this.inflectedCase = null;
            this.plurality = null;
            this.gender = null;

            this.appendDummyInput()
                .setAlign(Blockly.ALIGN_CENTRE)
                .appendField(this.word);

            this.setTooltip(Tooltips[this.pos][this.lemma]);

            // Set dropdown field if alternative inflections exist
            if (this.inflections.length > 1) {
                var items = [];
                for (var i = 0; i < this.inflections.length; i++) {
                    var item = [];
                    item.push(this.inflections[i].inflectedCase + " " + this.inflections[i].plurality, 
                                this.inflections[i].inflectedCase + "_" + this.inflections[i].plurality + "_" + this.inflections[i].gender);
                    items.push(item);
                };

                var dropdown = new Blockly.FieldDropdown(items, function(option) {
                    this.sourceBlock_.update(option);
                });
                this.appendDummyInput()
                    .appendField(dropdown, 'dropdown');
            } else {
                this.inflectedCase = noun.inflections[0].inflectedCase;
                this.plurality = noun.inflections[0].plurality;
                this.gender = noun.inflections[0].gender;

                // Set nob for verbs to envelop
                this.setNobOutput(this.inflectedCase, this.plurality, this.inflectedCase + "-" + this.plurality);

                this.selectColour(this.inflectedCase, this.plurality, this.gender);
                // One possible inflection, so no dropdown, just text in dummy input
                this.appendDummyInput()
                    .appendField(this.inflectedCase + " " + this.plurality);
            }

            // Noun clamp for optional components
            if (this.getInput("noun-clamp")) {
                this.removeInput("noun-clamp");
            }
            if (this.clamp) {
                console.log(this.clamp);
                this.appendStatementInput("noun-clamp")
                    .setCheck(["adjective-" + this.inflectedCase + "-" + this.plurality + "-" + this.gender,
                                "relative-pronoun-" + this.plurality + "-" + this.gender, "genitive"]);
            } else {
                // Clampless nouns
                this.appendStatementInput("noun-clamp")
                    .setCheck(["adjective-" + this.inflectedCase + "-" + this.plurality + "-" + this.gender,
                                "relative-pronoun-" + this.plurality + "-" + this.gender, "genitive"])
            }
        },
        mutationToDom: function() {
            var container = document.createElement("mutation");

            // Get selected dropdown value
            var dropdownValue = this.getFieldValue("dropdown");
            if (dropdownValue) {
                container.setAttribute("dropdownValue", dropdownValue);
                return container;                
            } else {
                // If there is no dropdown, don't create mutator
                return;
            }
        },
        domToMutation: function(xmlElement) {
            // Inflection is array of [case, plurality]
            var inflection = xmlElement.getAttribute("dropdownValue");
            this.update(inflection);
        },
        update: function(inflection) {
            this.setDisabled(false);
            this.setMovable(true);
            inflection = inflection.split("_");
            var inflectedCase = inflection[0], plurality = inflection[1], gender = inflection[2];
            this.inflectedCase = inflectedCase;
            this.plurality = plurality;
            this.gender = gender;

            this.setNobOutput(inflectedCase, plurality, inflectedCase + "-" + plurality);

            this.selectColour(this.inflectedCase, this.plurality, this.gender);
        
            // Set clamp for adjectives and relative pronouns (and genitives) to shrink into
            if (this.getInput("noun-clamp")) {
                this.removeInput("noun-clamp");
            }
            if (this.clamp) {
                console.log(this.clamp);
                this.appendStatementInput("noun-clamp")
                    .setCheck(["adjective-" + this.inflectedCase + "-" + this.plurality + "-" + this.gender,
                                "relative-pronoun-" + this.plurality + "-" + this.gender, "genitive"]); 
            } else {
                // Clampless nouns
                this.appendStatementInput("noun-clamp")
                    .setCheck(["adjective-" + this.inflectedCase + "-" + this.plurality + "-" + this.gender,
                                "relative-pronoun-" + this.plurality + "-" + this.gender, "genitive"])
            }

            this.selectColour(inflectedCase, plurality, gender);
        },
        selectColour: function(inflectedCase, plurality, gender) {
            /*
             * Colour wheel divided into 30 parts, each 12, 
             * to represent all permutations of 5 cases, 2 pluralities, 3 genders
             */
            var hexColour = 360;
            var applyGender = function(gender, hexColour) {
                var difference = 0;
                switch (gender) {
                    case Blockly.gender.MASCULINE:
                        difference = 2;
                        break;
                    case Blockly.gender.FEMININE:
                        difference = 1;
                        break;
                    case Blockly.gender.NEUTER:
                        break;  
                }
                return hexColour - difference * 24;
            };

            var applyPlurality = function(plurality, hexColour) {
                var difference = 0;
                if (plurality == Blockly.plurality.SINGULAR) {
                    difference = 1;
                }
                return hexColour - difference * 12;
            };

            switch (inflectedCase) {
                case Blockly.inflectedCase.NOMINATIVE:
                    hexColour /= 5;
                    break;
                case Blockly.inflectedCase.GENITIVE:
                    hexColour /= 4;
                    break;
                case Blockly.inflectedCase.DATIVE:
                    hexColour /= 3;
                    break;
                case Blockly.inflectedCase.ACCUSATIVE:
                    hexColour /= 2;
                    break;
                case Blockly.inflectedCase.ABLATIVE:
                    break;
            }
            hexColour = applyGender(gender, hexColour);
            hexColour = applyPlurality(plurality, hexColour);
            this.setColour(hexColour);
        }
    };
}

// Bank of common noun inflections
NounInflections = {};
// PRONOUNS
NounInflections["pronoun-singular-accusative"] = [{
                                            inflectedCase: Blockly.inflectedCase.ACCUSATIVE, 
                                            plurality: Blockly.plurality.SINGULAR, 
                                            gender: Blockly.gender.MASCULINE
                                        }];
NounInflections["pronoun-singular-dative"] = [{
                                            inflectedCase: Blockly.inflectedCase.DATIVE, 
                                            plurality: Blockly.plurality.SINGULAR, 
                                            gender: Blockly.gender.MASCULINE
                                        }];
// FIRST DECLENSION
NounInflections["first-declension-a"] = [{ 
                                            inflectedCase: Blockly.inflectedCase.NOMINATIVE, 
                                            plurality: Blockly.plurality.SINGULAR, 
                                            gender: Blockly.gender.FEMININE 
                                        },
                                        { 
                                            inflectedCase: Blockly.inflectedCase.ABLATIVE, 
                                            plurality: Blockly.plurality.SINGULAR, 
                                            gender: Blockly.gender.FEMININE
                                        },
                                        {
                                            inflectedCase: Blockly.inflectedCase.VOCATIVE,
                                            plurality: Blockly.plurality.SINGULAR,
                                            gender: Blockly.gender.FEMININE
                                        }];
NounInflections["first-declension-ae"] = [{
                                            inflectedCase: Blockly.inflectedCase.GENITIVE, 
                                            plurality: Blockly.plurality.SINGULAR, 
                                            gender: Blockly.gender.FEMININE
                                        },
                                        { 
                                            inflectedCase: Blockly.inflectedCase.DATIVE, 
                                            plurality: Blockly.plurality.SINGULAR, 
                                            gender: Blockly.gender.FEMININE
                                        },
                                        {
                                            inflectedCase: Blockly.inflectedCase.NOMINATIVE, 
                                            plurality: Blockly.plurality.PLURAL, 
                                            gender: Blockly.gender.FEMININE
                                        },
                                        {
                                            inflectedCase: Blockly.inflectedCase.VOCATIVE,
                                            plurality: Blockly.plurality.PLURAL,
                                            gender: Blockly.gender.FEMININE
                                        }];
NounInflections["first-declension-a-masculine"] = [{ 
                                            inflectedCase: Blockly.inflectedCase.NOMINATIVE, 
                                            plurality: Blockly.plurality.SINGULAR, 
                                            gender: Blockly.gender.MASCULINE 
                                        },
                                        { 
                                            inflectedCase: Blockly.inflectedCase.ABLATIVE, 
                                            plurality: Blockly.plurality.SINGULAR, 
                                            gender: Blockly.gender.MASCULINE
                                        },
                                        {
                                            inflectedCase: Blockly.inflectedCase.VOCATIVE,
                                            plurality: Blockly.plurality.SINGULAR,
                                            gender: Blockly.gender.MASCULINE
                                        }];
NounInflections["first-declension-ae-masculine"] = [{
                                            inflectedCase: Blockly.inflectedCase.GENITIVE, 
                                            plurality: Blockly.plurality.SINGULAR, 
                                            gender: Blockly.gender.MASCULINE
                                        },
                                        { 
                                            inflectedCase: Blockly.inflectedCase.DATIVE, 
                                            plurality: Blockly.plurality.SINGULAR, 
                                            gender: Blockly.gender.MASCULINE
                                        },
                                        {
                                            inflectedCase: Blockly.inflectedCase.NOMINATIVE, 
                                            plurality: Blockly.plurality.PLURAL, 
                                            gender: Blockly.gender.MASCULINE
                                        },
                                        {
                                            inflectedCase: Blockly.inflectedCase.VOCATIVE,
                                            plurality: Blockly.plurality.PLURAL,
                                            gender: Blockly.gender.MASCULINE
                                        }];
NounInflections["first-declension-is"] = [{
                                            inflectedCase: Blockly.inflectedCase.DATIVE, 
                                            plurality: Blockly.plurality.PLURAL, 
                                            gender: Blockly.gender.FEMININE
                                        },
                                        { 
                                            inflectedCase: Blockly.inflectedCase.ABLATIVE, 
                                            plurality: Blockly.plurality.PLURAL, 
                                            gender: Blockly.gender.FEMININE
                                        }];
NounInflections["first-declension-as"] = [{
                                            inflectedCase: Blockly.inflectedCase.ACCUSATIVE,
                                            plurality: Blockly.plurality.PLURAL,
                                            gender: Blockly.gender.FEMININE
                                        }];
NounInflections["first-declension-am"] = [{
                                            inflectedCase: Blockly.inflectedCase.ACCUSATIVE, 
                                            plurality: Blockly.plurality.SINGULAR, 
                                            gender: Blockly.gender.FEMININE
                                        }];     
// SECOND DECLENSION
NounInflections["second-declension-x-masculine"] = [{
                                                    inflectedCase: Blockly.inflectedCase.NOMINATIVE,
                                                    plurality: Blockly.plurality.SINGULAR,
                                                    gender: Blockly.gender.MASCULINE
                                                },
                                                {
                                                    inflectedCase: Blockly.inflectedCase.VOCATIVE,
                                                    plurality: Blockly.plurality.SINGULAR,
                                                    gender: Blockly.gender.MASCULINE
                                                }];
NounInflections["second-declension-o"] = [{
                                            inflectedCase: Blockly.inflectedCase.DATIVE, 
                                            plurality: Blockly.plurality.SINGULAR, 
                                            gender: Blockly.gender.MASCULINE
                                        },
                                        { 
                                            inflectedCase: Blockly.inflectedCase.ABLATIVE, 
                                            plurality: Blockly.plurality.SINGULAR, 
                                            gender: Blockly.gender.MASCULINE
                                        }];
NounInflections["second-declension-os"] = [{
                                            inflectedCase: Blockly.inflectedCase.ACCUSATIVE, 
                                            plurality: Blockly.plurality.PLURAL, 
                                            gender: Blockly.gender.MASCULINE
                                        }];                                        
NounInflections["second-declension-a-neuter"] = [{
                                            inflectedCase: Blockly.inflectedCase.NOMINATIVE, 
                                            plurality: Blockly.plurality.PLURAL, 
                                            gender: Blockly.gender.NEUTER
                                        },
                                        { 
                                            inflectedCase: Blockly.inflectedCase.ACCUSATIVE, 
                                            plurality: Blockly.plurality.PLURAL, 
                                            gender: Blockly.gender.NEUTER
                                        },
                                        { 
                                            inflectedCase: Blockly.inflectedCase.VOCATIVE, 
                                            plurality: Blockly.plurality.PLURAL, 
                                            gender: Blockly.gender.NEUTER
                                        }];                                        
NounInflections["second-declension-um-neuter"] = [{
                                            inflectedCase: Blockly.inflectedCase.NOMINATIVE, 
                                            plurality: Blockly.plurality.SINGULAR, 
                                            gender: Blockly.gender.NEUTER
                                        },
                                        {
                                            inflectedCase: Blockly.inflectedCase.ACCUSATIVE, 
                                            plurality: Blockly.plurality.SINGULAR, 
                                            gender: Blockly.gender.NEUTER
                                        }];
NounInflections["second-declension-o-neuter"] = [{
                                            inflectedCase: Blockly.inflectedCase.DATIVE, 
                                            plurality: Blockly.plurality.SINGULAR, 
                                            gender: Blockly.gender.NEUTER
                                        },
                                        {
                                            inflectedCase: Blockly.inflectedCase.ABLATIVE, 
                                            plurality: Blockly.plurality.SINGULAR, 
                                            gender: Blockly.gender.NEUTER
                                        }];
NounInflections["second-declension-um"] = [{
                                                inflectedCase: Blockly.inflectedCase.ACCUSATIVE,
                                                plurality: Blockly.plurality.SINGULAR,
                                                gender: Blockly.gender.MASCULINE
                                            }];
NounInflections["second-declension-is"] = [{
                                                        inflectedCase: Blockly.inflectedCase.DATIVE, 
                                                        plurality: Blockly.plurality.PLURAL, 
                                                        gender: Blockly.gender.MASCULINE
                                                    },
                                                    { 
                                                        inflectedCase: Blockly.inflectedCase.ABLATIVE, 
                                                        plurality: Blockly.plurality.PLURAL, 
                                                        gender: Blockly.gender.MASCULINE
                                                    }];    
NounInflections["second-declension-i"] = [{
                                            inflectedCase: Blockly.inflectedCase.GENITIVE, 
                                            plurality: Blockly.plurality.SINGULAR, 
                                            gender: Blockly.gender.MASCULINE
                                        },
                                        {
                                            inflectedCase: Blockly.inflectedCase.NOMINATIVE, 
                                            plurality: Blockly.plurality.PLURAL, 
                                            gender: Blockly.gender.MASCULINE
                                        },
                                        {
                                            inflectedCase: Blockly.inflectedCase.VOCATIVE, 
                                            plurality: Blockly.plurality.PLURAL, 
                                            gender: Blockly.gender.MASCULINE
                                        }];
// THIRD DECLENSION
NounInflections["third-declension-x-masculine"] = [{
                                                    inflectedCase: Blockly.inflectedCase.NOMINATIVE,
                                                    plurality: Blockly.plurality.SINGULAR,
                                                    gender: Blockly.gender.MASCULINE
                                                },
                                                {
                                                    inflectedCase: Blockly.inflectedCase.VOCATIVE,
                                                    plurality: Blockly.plurality.SINGULAR,
                                                    gender: Blockly.gender.MASCULINE
                                                }];
NounInflections["third-declension-x-feminine"] = [{
                                                    inflectedCase: Blockly.inflectedCase.NOMINATIVE,
                                                    plurality: Blockly.plurality.SINGULAR,
                                                    gender: Blockly.gender.FEMININE
                                                },
                                                {
                                                    inflectedCase: Blockly.inflectedCase.VOCATIVE,
                                                    plurality: Blockly.plurality.SINGULAR,
                                                    gender: Blockly.gender.FEMININE
                                                }];
NounInflections["third-declension-um-neuter"] = [{
                                            inflectedCase: Blockly.inflectedCase.NOMINATIVE, 
                                            plurality: Blockly.plurality.SINGULAR, 
                                            gender: Blockly.gender.NEUTER
                                        },
                                        { 
                                            inflectedCase: Blockly.inflectedCase.ACCUSATIVE, 
                                            plurality: Blockly.plurality.SINGULAR, 
                                            gender: Blockly.gender.NEUTER
                                        },
                                        { 
                                            inflectedCase: Blockly.inflectedCase.VOCATIVE, 
                                            plurality: Blockly.plurality.SINGULAR, 
                                            gender: Blockly.gender.NEUTER
                                        }];
NounInflections["third-declension-a-neuter"] = [{
                                            inflectedCase: Blockly.inflectedCase.NOMINATIVE, 
                                            plurality: Blockly.plurality.PLURAL, 
                                            gender: Blockly.gender.NEUTER
                                        },
                                        { 
                                            inflectedCase: Blockly.inflectedCase.ACCUSATIVE, 
                                            plurality: Blockly.plurality.PLURAL, 
                                            gender: Blockly.gender.NEUTER
                                        },
                                        { 
                                            inflectedCase: Blockly.inflectedCase.VOCATIVE, 
                                            plurality: Blockly.plurality.PLURAL, 
                                            gender: Blockly.gender.NEUTER
                                        }];
NounInflections["third-declension-e-masculine"] = [{
                                                    inflectedCase: Blockly.inflectedCase.ABLATIVE,
                                                    plurality: Blockly.plurality.SINGULAR,
                                                    gender: Blockly.gender.MASCULINE
                                                }];  
NounInflections["third-declension-em-masculine"] = [{
                                                    inflectedCase: Blockly.inflectedCase.ACCUSATIVE,
                                                    plurality: Blockly.plurality.SINGULAR,
                                                    gender: Blockly.gender.MASCULINE
                                                }];                                                                                  
NounInflections["third-declension-ibus-masculine"] = [{
                                                        inflectedCase: Blockly.inflectedCase.DATIVE, 
                                                        plurality: Blockly.plurality.PLURAL, 
                                                        gender: Blockly.gender.MASCULINE
                                                    },
                                                    { 
                                                        inflectedCase: Blockly.inflectedCase.ABLATIVE, 
                                                        plurality: Blockly.plurality.PLURAL, 
                                                        gender: Blockly.gender.MASCULINE
                                                    }];
NounInflections["third-declension-ibus-feminine"] = [{
                                                        inflectedCase: Blockly.inflectedCase.DATIVE, 
                                                        plurality: Blockly.plurality.PLURAL, 
                                                        gender: Blockly.gender.FEMININE
                                                    },
                                                    { 
                                                        inflectedCase: Blockly.inflectedCase.ABLATIVE, 
                                                        plurality: Blockly.plurality.PLURAL, 
                                                        gender: Blockly.gender.FEMININE
                                                    }];
NounInflections["third-declension-e-neuter"] = [{
                                            inflectedCase: Blockly.inflectedCase.ABLATIVE, 
                                            plurality: Blockly.plurality.SINGULAR, 
                                            gender: Blockly.gender.NEUTER
                                        }];
NounInflections["third-declension-e-feminine"] = [{
                                            inflectedCase: Blockly.inflectedCase.ABLATIVE, 
                                            plurality: Blockly.plurality.SINGULAR, 
                                            gender: Blockly.gender.FEMININE
                                        }];
NounInflections["third-declension-em-feminine"] = [{
                                            inflectedCase: Blockly.inflectedCase.ACCUSATIVE, 
                                            plurality: Blockly.plurality.SINGULAR, 
                                            gender: Blockly.gender.FEMININE
                                        }];                                   
NounInflections["third-declension-es-feminine"] = [{
                                            inflectedCase: Blockly.inflectedCase.NOMINATIVE, 
                                            plurality: Blockly.plurality.PLURAL, 
                                            gender: Blockly.gender.FEMININE
                                        },
                                        {
                                            inflectedCase: Blockly.inflectedCase.ACCUSATIVE, 
                                            plurality: Blockly.plurality.PLURAL, 
                                            gender: Blockly.gender.FEMININE
                                        }];
NounInflections["third-declension-es-masculine"] = [{
                                            inflectedCase: Blockly.inflectedCase.NOMINATIVE, 
                                            plurality: Blockly.plurality.PLURAL, 
                                            gender: Blockly.gender.MASCULINE
                                        },
                                        {
                                            inflectedCase: Blockly.inflectedCase.ACCUSATIVE, 
                                            plurality: Blockly.plurality.PLURAL, 
                                            gender: Blockly.gender.MASCULINE
                                        }];
// FOURTH DECLENSION
NounInflections["fourth-declension-um-masculine"] = [{
                                                    inflectedCase: Blockly.inflectedCase.ACCUSATIVE,
                                                    plurality: Blockly.plurality.SINGULAR,
                                                    gender: Blockly.gender.MASCULINE
                                                }];
// FIFTH DECLENSION
NounInflections["fifth-declension-e-feminine"] = [{
                                                    inflectedCase: Blockly.inflectedCase.ABLATIVE,
                                                    plurality: Blockly.plurality.SINGULAR,
                                                    gender: Blockly.gender.FEMININE
                                                }];
// Bank of nouns
Nouns = {};
/* PRONOUNS */
Nouns["me"] = { "word": "me", "inflections": NounInflections["pronoun-singular-accusative"], "lemma": "ego"};
Nouns["tibi"] = { "word": "tibi", "inflections": NounInflections["pronoun-singular-dative"], "lemma": "tu"};

/* 
** FIRST DECLENSION 
**/
// FEMININE
// -a
Nouns["silva"] = { "word": "silva", "inflections": NounInflections["first-declension-a"], "lemma": "silva"};
Nouns["puella"] = { "word": "puella", "inflections": NounInflections["first-declension-a"], "lemma": "puella"};
Nouns["regina"] = { "word": "regina", "inflections": NounInflections["first-declension-a"], "lemma": "regina"};
Nouns["Troia"] = { "word": "Troia", "inflections": NounInflections["first-declension-a"], "lemma": "Troia"};
Nouns["barbaria"] = { "word": "barbaria", "inflections": NounInflections["first-declension-a"], "lemma": "barbaria"};
Nouns["fortuna"] = { "word": "fortuna", "inflections": NounInflections["first-declension-a"], "lemma": "fortuna"};
Nouns["flamma"] = { "word": "flamma", "inflections": NounInflections["first-declension-a"], "lemma": "flamma"};
Nouns["cena"] = { "word": "cena", "inflections": NounInflections["first-declension-a"], "lemma": "cena"};

// -ae
Nouns["puellae"] = { "word": "puellae", "inflections": NounInflections["first-declension-ae"], "lemma": "puella"};
Nouns["aurae"] = { "word": "aurae", "inflections": NounInflections["first-declension-ae"], "lemma": "aura"};

// -am
Nouns["copiam"] = { "word": "copiam", "inflections": NounInflections["first-declension-am"], "lemma": "copia"};
Nouns["fabulam"] = { "word": "fabulam", "inflections": NounInflections["first-declension-am"], "lemma": "fabula"};
Nouns["mensam"] = { "word": "mensam", "inflections": NounInflections["first-declension-am"], "lemma": "mensa"};

// -as
Nouns["rosas"] = { "word": "rosas", "inflections": NounInflections["first-declension-as"], "lemma": "rosa"};
Nouns["epistulas"] = { "word": "epistulas", "inflections": NounInflections["first-declension-as"], "lemma": "epistula"};

// -is
Nouns["sententiis"] = { "word": "sententiis", "inflections": NounInflections["first-declension-is"], "lemma": "sententia"};
Nouns["feminis"] = { "word": "feminis", "inflections": NounInflections["first-declension-is"], "lemma": "femina"};

// MASCULINE 
// -ae
Nouns["agricolae"] = { "word": "agricolae", "inflections": NounInflections["first-declension-ae-masculine"], "lemma": "agricola"};
Nouns["agricola"] = { "word": "agricola", "inflections": NounInflections["first-declension-a-masculine"], "lemma": "agricola"};
Nouns["poeta"] = { "word": "poeta", "inflections": NounInflections["first-declension-a-masculine"], "lemma": "poeta"};


/*
** SECOND DECLENSION
**/ 
// MASCULINE
// -[x]
Nouns["vir"] = { "word": "vir", "inflections": NounInflections["second-declension-x-masculine"], "lemma": "vir"};
Nouns["puer"] = { "word": "puer", "inflections": NounInflections["second-declension-x-masculine"], "lemma": "puer"};
Nouns["nuntius"] = { "word": "nuntius", "inflections": NounInflections["second-declension-x-masculine"], "lemma": "nuntius"};
// -i
Nouns["venti"] = { "word": "venti", "inflections": NounInflections["second-declension-i"], "lemma": "ventus"};
Nouns["Euri"] = { "word": "Euri", "inflections": NounInflections["second-declension-i"], "lemma": "Eurus"};
Nouns["servi"] = { "word": "servi", "inflections": NounInflections["second-declension-i"], "lemma": "servus"};
// -um
Nouns["locum"] = { "word": "locum", "inflections": NounInflections["second-declension-um"], "lemma": "locus"};
// -o
Nouns["agro"] = { "word": "agro", "inflections": NounInflections["second-declension-o"], "lemma": "ager"};
Nouns["filio"] = { "word": "filio", "inflections": NounInflections["second-declension-o"], "lemma": "filius"};
Nouns["fundo"] = { "word": "fundo", "inflections": NounInflections["second-declension-o"], "lemma": "fundus"};
// -os
Nouns["servos"] = { "word": "servos", "inflections": NounInflections["second-declension-os"], "lemma": "servus"};
Nouns["libros"] = { "word": "libros", "inflections": NounInflections["second-declension-os"], "lemma": "liber"};
Nouns["libertos"] = { "word": "libertos", "inflections": NounInflections["second-declension-os"], "lemma": "libertus"};

// -is
Nouns["Graecis"] = { "word": "Graecis", "inflections": NounInflections["second-declension-is"], "lemma": "Graecus"};
Nouns["agris"] = { "word": "agris", "inflections": NounInflections["second-declension-is"], "lemma": "ager"};

// NEUTER
// -um
Nouns["factum"] = { "word": "factum", "inflections": NounInflections["second-declension-um-neuter"], "lemma": "factum"};
Nouns["forum"] = { "word": "forum", "inflections": NounInflections["second-declension-um-neuter"], "lemma": "forum"};
// -o
Nouns["facto"] = { "word": "facto", "inflections": NounInflections["second-declension-o-neuter"], "lemma": "factum"};
Nouns["consilio"] = { "word": "consilio", "inflections": NounInflections["second-declension-o-neuter"], "lemma": "consilium"};
Nouns["triclinio"] = { "word": "triclinio", "inflections": NounInflections["second-declension-o-neuter"], "lemma": "triclinium"};
// -a 
Nouns["facta"] = { "word": "facta", "inflections": NounInflections["second-declension-a-neuter"], "lemma": "factum"};
Nouns["pocula"] = { "word": "pocula", "inflections": NounInflections["second-declension-a-neuter"], "lemma": "poculum"};

/* 
** THIRD DECLENSION 
**/
// FEMININE
// -[x]
Nouns["Dido"] = { "word": "Dido", "inflections": NounInflections["third-declension-x-feminine"], "lemma": "Dido"};
Nouns["uxor"] = { "word": "uxor", "inflections": NounInflections["third-declension-x-feminine"], "lemma": "uxor"};
// -e
Nouns["arce"] = { "word": "arce", "inflections": NounInflections["third-declension-e-feminine"], "lemma": "arx"};
Nouns["urbe"] = { "word": "urbe", "inflections": NounInflections["third-declension-e-feminine"], "lemma": "urbs"};
// -em
Nouns["salutem"] = { "word": "salutem", "inflections": NounInflections["third-declension-em-feminine"], "lemma": "salus"};
Nouns["murem"] = { "word": "murem", "inflections": NounInflections["third-declension-em-feminine"], "lemma": "mus"};
Nouns["furem"] = { "word": "furem", "inflections": NounInflections["third-declension-em-feminine"], "lemma": "fur"};
// -es
Nouns["matres"] = { "word": "matres", "inflections": NounInflections["third-declension-es-feminine"], "lemma": "mater"};
// -ibus
Nouns["salutibus"] = { "word": "salutibus", "inflections": NounInflections["third-declension-ibus-feminine"], "lemma": "salus"};
Nouns["nubibus"] = { "word": "nubibus", "inflections": NounInflections["third-declension-ibus-feminine"], "lemma": "nubes"};

// MASCULINE
// -[x]
Nouns["horror"] = { "word": "horror", "inflections": NounInflections["third-declension-x-masculine"], "lemma": "horror"};
Nouns["mercator"] = { "word": "mercator", "inflections": NounInflections["third-declension-x-masculine"], "lemma": "mercator"};
Nouns["clamor"] = { "word": "clamor", "inflections": NounInflections["third-declension-x-masculine"], "lemma": "clamor"};
Nouns["Laocoon"] = { "word": "Laocoon", "inflections": NounInflections["third-declension-x-masculine"], "lemma": "Laocoon"};
Nouns["Cicero"] = { "word": "Cicero", "inflections": NounInflections["third-declension-x-masculine"], "lemma": "Cicero"};
Nouns["leo"] = { "word": "leo", "inflections": NounInflections["third-declension-x-masculine"], "lemma": "leo"};
Nouns["centurio"] = { "word": "centurio", "inflections": NounInflections["third-declension-x-masculine"], "lemma": "centurio"};
Nouns["senator"] = { "word": "senator", "inflections": NounInflections["third-declension-x-masculine"], "lemma": "senator"};
Nouns["iudex"] = { "word": "iudex", "inflections": NounInflections["third-declension-x-masculine"], "lemma": "iudex"};
Nouns["canis"] = { "word": "canis", "inflections": NounInflections["third-declension-x-masculine"], "lemma": "canis"};
Nouns["pater"] = { "word": "pater", "inflections": NounInflections["third-declension-x-masculine"], "lemma": "pater"};
Nouns["homo"] = { "word": "homo", "inflections": NounInflections["third-declension-x-masculine"], "lemma": "homo"};
// -e
Nouns["horrore"] = { "word": "horrore", "inflections": NounInflections["third-declension-e-masculine"], "lemma": "horror"};
Nouns["monte"] = { "word": "monte", "inflections": NounInflections["third-declension-e-masculine"], "lemma": "mons"};
// -em
Nouns["infantem"] = { "word": "infantem", "inflections": NounInflections["third-declension-em-masculine"], "lemma": "infans"};
// -es
Nouns["milites"] = { "word": "milites", "inflections": NounInflections["third-declension-es-masculine"], "lemma": "miles"};
Nouns["hospites"] = { "word": "hospites", "inflections": NounInflections["third-declension-es-masculine"], "lemma": "hospes"};
Nouns["cineres"] = { "word": "cineres", "inflections": NounInflections["third-declension-es-masculine"], "lemma": "cinis"};
Nouns["cives"] = { "word": "cives", "inflections": NounInflections["third-declension-es-masculine"], "lemma": "civis"};
Nouns["senes"] = { "word": "senes", "inflections": NounInflections["third-declension-es-masculine"], "lemma": "senis"};
Nouns["iuvenes"] = { "word": "iuvenes", "inflections": NounInflections["third-declension-es-masculine"], "lemma": "iuvenis"};
//-ibus
Nouns["oratoribus"] = { "word": "oratoribus", "inflections": NounInflections["third-declension-ibus-masculine"], "lemma": "orator"};
Nouns["flatibus"] = { "word": "flatibus", "inflections": NounInflections["third-declension-ibus-masculine"], "lemma": "flatus"};
Nouns["militibus"] = { "word": "militibus", "inflections": NounInflections["third-declension-ibus-masculine"], "lemma": "miles"};
Nouns["hospitibus"] = { "word": "hospitibus", "inflections": NounInflections["third-declension-ibus-masculine"], "lemma": "hospes"};

// NEUTER
// -um
Nouns["forum"] = { "word": "forum", "inflections": NounInflections["third-declension-um-neuter"], "lemma": "forum"};
Nouns["gladium"] = { "word": "gladium", "inflections": NounInflections["third-declension-um-neuter"], "lemma": "gladium"};
Nouns["vinum"] = { "word": "vinum", "inflections": NounInflections["third-declension-um-neuter"], "lemma": "vinum"};
// -a
Nouns["animalia"] = { "word": "animalia", "inflections": NounInflections["third-declension-a-neuter"], "lemma": "animal"};
Nouns["sidera"] = { "word": "sidera", "inflections": NounInflections["third-declension-a-neuter"], "lemma": "sidus"};
// -e
Nouns["culmine"] = { "word": "culmine", "inflections": NounInflections["third-declension-e-neuter"], "lemma": "culmen"};

/*
** FOURTH DECLENSION
*/
Nouns["portum"] = { "word": "portum", "inflections": NounInflections["fourth-declension-um-masculine"], "lemma": "portus"};

/*
** FIFTH DECLENSION
*/
// FEMININE
// -e
Nouns["re"] = { "word": "re", "inflections": NounInflections["fifth-declension-e-feminine"], "lemma": "res"};


// Create nouns
for (var noun in Nouns) {
    Nouns[noun]["clamp"] = true;
    Blockly.makeNoun(Nouns[noun]);

    // Make a clampless version
    // clamplessNoun = noun + "-clampless";
    // Nouns[clamplessNoun] = Nouns[noun];
    // Nouns[clamplessNoun]["clamp"] = false;
    // Blockly.makeNoun(Nouns[clamplessNoun]);
}

/******************
 * 
 * VERBS
 *
 ******************/

/*
 * makeVerb: creates a verb.
 * verb Contains the string of the 'word', 'plurality', 'person', and 'objects' it takes.
 * isInline Boolean of whether inputs are inline or external
 */
Blockly.makeVerb = function(verb, isInline) {
    var uniqueName;
    if (verb.clamp) {
        uniqueName = verb.word;
    } else {
        uniqueName = verb.word + "-clampless";
    }
    if (isInline) {
        uniqueName += "-inline";
    }
    Blockly.Blocks[uniqueName] = {
        init: function() {
            this.word = verb.word;
            this.lemma = verb.lemma;
            this.plurality = verb.plurality;
            this.person = verb.person;
            this.pos = Blockly.pos.VERB;
            this.objects = verb.objects;
            this.clamp = verb.clamp;
            this.setTooltip(Tooltips[this.pos][this.lemma]);

            this.setColour('#2E2E2E');
            this.appendDummyInput()
                .setAlign(Blockly.ALIGN_CENTRE)
                .appendField(this.word);

            // Subject input
            this.appendNominativeValueInput("nominative-" + this.plurality)
                .setAlign(Blockly.ALIGN_RIGHT)
                .setCheck("nominative-" + this.plurality)
                .appendField("subject:");

            // Other inputs, if any
            if (this.objects) {
                for (var i = 0, object; object = this.objects[i]; i++) {
                    if (object.inflectedCase == Blockly.inflectedCase.NOMINATIVE) {
                        this.appendNominativeValueInput(object.inflectedCase)
                            .setAlign(Blockly.ALIGN_RIGHT)
                            .setCheck([object.inflectedCase + "-singular", object.inflectedCase + "-plural"])
                            .appendField(object.purpose);                        
                    }
                    else if (object.inflectedCase == Blockly.inflectedCase.GENITIVE) {
                        this.appendGenitiveValueInput(object.inflectedCase)
                            .setAlign(Blockly.ALIGN_RIGHT)
                            .setCheck([object.inflectedCase + "-singular", object.inflectedCase + "-plural"])
                            .appendField(object.purpose);                        
                    }
                    else if (object.inflectedCase == Blockly.inflectedCase.DATIVE) {
                        this.appendDativeValueInput(object.inflectedCase)
                            .setAlign(Blockly.ALIGN_RIGHT)
                            .setCheck([object.inflectedCase + "-singular", object.inflectedCase + "-plural"])
                            .appendField(object.purpose);                        
                    }
                    else if (object.inflectedCase == Blockly.inflectedCase.ACCUSATIVE) {
                        this.appendAccusativeValueInput(object.inflectedCase)
                            .setAlign(Blockly.ALIGN_RIGHT)
                            .setCheck([object.inflectedCase + "-singular", object.inflectedCase + "-plural"])
                            .appendField(object.purpose);                        
                    }
                    else if (object.inflectedCase == Blockly.inflectedCase.ABLATIVE) {
                        this.appendAblativeValueInput(object.inflectedCase)
                            .setAlign(Blockly.ALIGN_RIGHT)
                            .setCheck([object.inflectedCase + "-singular", object.inflectedCase + "-plural"])
                            .appendField(object.purpose);                        
                    }
                    else {
                        this.appendValueInput(object.inflectedCase)
                            .setAlign(Blockly.ALIGN_RIGHT)
                            .setCheck([object.inflectedCase + "-singular", object.inflectedCase + "-plural"])
                            .appendField(object.purpose);                        
                    }
                }
            }

            if (isInline) {
                this.setInputsInline(true);
            }

            // Clamp for adverbs, prepositional phrases, ut-clauses, etc. optional components
            if (this.clamp) {
                this.appendStatementInput("verb-clamp")
                    .setCheck(["adverb", "preposition", "ut-clause"]);                
            } else {
                this.appendStatementInput("verb-clamp")
                    .setCheck(["adverb", "preposition", "ut-clause"])
                    .setVisible(false);
            }

        }
    };
}

// Bank of expectations
Expectations = {};
Expectations["accusative-direct-object"] = { "inflectedCase": "accusative", "purpose": "direct object:" };
Expectations["dative-indirect-object"] = { "inflectedCase": "dative", "purpose": "indirect object:" };

// Bank of verbs
Verbs = {};
Verbs["dat"] = { 
    "word": "dat", 
    "lemma": "do",
    "plurality": Blockly.plurality.SINGULAR,
    "person": Blockly.person.THIRD,
    "objects": [Expectations["accusative-direct-object"], Expectations["dative-indirect-object"]],
    "clamp": true
};
Verbs["dat-clampless"] = { 
    "word": "dat", 
    "lemma": "do",
    "plurality": Blockly.plurality.SINGULAR,
    "person": Blockly.person.THIRD,
    "objects": [Expectations["accusative-direct-object"], Expectations["dative-indirect-object"]],
    "clamp": false
};
Verbs["dedit"] = { 
    "word": "dedit", 
    "lemma": "do",
    "plurality": Blockly.plurality.SINGULAR,
    "person": Blockly.person.THIRD,
    "objects": [Expectations["accusative-direct-object"], Expectations["dative-indirect-object"]],
    "clamp": true
};
Verbs["dedit-clampless"] = { 
    "word": "dedit", 
    "lemma": "do",
    "plurality": Blockly.plurality.SINGULAR,
    "person": Blockly.person.THIRD,
    "objects": [Expectations["accusative-direct-object"], Expectations["dative-indirect-object"]],
    "clamp": false
};
Verbs["demonstrant"] = { 
    "word": "demonstrant", 
    "lemma": "demonstro",
    "plurality": Blockly.plurality.PLURAL,
    "person": Blockly.person.THIRD,
    "objects": [Expectations["accusative-direct-object"], Expectations["dative-indirect-object"]],
    "clamp": true
};
Verbs["demonstrant-clampless"] = { 
    "word": "demonstrant", 
    "lemma": "demonstro",
    "plurality": Blockly.plurality.PLURAL,
    "person": Blockly.person.THIRD,
    "objects": [Expectations["accusative-direct-object"], Expectations["dative-indirect-object"]],
    "clamp": false
};

Verbs["credit"] = { 
    "word": "credit", 
    "lemma": "credo",
    "plurality": Blockly.plurality.SINGULAR,
    "person": Blockly.person.THIRD,
    "objects": [Expectations["dative-indirect-object"]],
    "clamp": true
};
Verbs["credit-clampless"] = { 
    "word": "credit", 
    "lemma": "credo",
    "plurality": Blockly.plurality.SINGULAR,
    "person": Blockly.person.THIRD,
    "objects": [Expectations["dative-indirect-object"]],
    "clamp": false
};
Verbs["placet"] = { 
    "word": "placet", 
    "lemma": "placeo",
    "plurality": Blockly.plurality.SINGULAR,
    "person": Blockly.person.THIRD,
    "objects": [Expectations["dative-indirect-object"]],
    "clamp": true
};
Verbs["placet-clampless"] = { 
    "word": "placet", 
    "lemma": "placeo",
    "plurality": Blockly.plurality.SINGULAR,
    "person": Blockly.person.THIRD,
    "objects": [Expectations["dative-indirect-object"]],
    "clamp": false
};

Verbs["cessi"] = {
    "word": "cessi",
    "lemma": "cedo",
    "plurality": Blockly.plurality.SINGULAR,
    "person": Blockly.person.FIRST,
    "objects": [],
    "clamp": true
};
Verbs["errabat"] = {
    "word": "errabat",
    "lemma": "erro",
    "plurality": Blockly.plurality.SINGULAR,
    "person": Blockly.person.THIRD,
    "objects": [],
    "clamp": true
};
Verbs["errabat-clampless"] = {
    "word": "errabat",
    "lemma": "erro",
    "plurality": Blockly.plurality.SINGULAR,
    "person": Blockly.person.THIRD,
    "objects": [],
    "clamp": false
};
Verbs["festinabat"] = {
    "word": "festinabat",
    "lemma": "festino",
    "plurality": Blockly.plurality.SINGULAR,
    "person": Blockly.person.THIRD,
    "objects": [],
    "clamp": true
};
Verbs["festinabat-clampless"] = {
    "word": "festinabat",
    "lemma": "festino",
    "plurality": Blockly.plurality.SINGULAR,
    "person": Blockly.person.THIRD,
    "objects": [],
    "clamp": false
};
Verbs["dormiebat"] = {
    "word": "dormiebat",
    "lemma": "dormio",
    "plurality": Blockly.plurality.SINGULAR,
    "person": Blockly.person.THIRD,
    "objects": [],
    "clamp": true
};
Verbs["dormiebat-clampless"] = {
    "word": "dormiebat",
    "lemma": "dormio",
    "plurality": Blockly.plurality.SINGULAR,
    "person": Blockly.person.THIRD,
    "objects": [],
    "clamp": false
};
Verbs["lacrimat"] = {
    "word": "lacrimat",
    "lemma": "lacrimo",
    "plurality": Blockly.plurality.SINGULAR,
    "person": Blockly.person.THIRD,
    "objects": [],
    "clamp": true
};
Verbs["lacrimat-clampless"] = {
    "word": "lacrimat",
    "lemma": "lacrimo",
    "plurality": Blockly.plurality.SINGULAR,
    "person": Blockly.person.THIRD,
    "objects": [],
    "clamp": false
};
Verbs["ruit"] = {
    "word": "ruit",
    "lemma": "ruo",
    "plurality": Blockly.plurality.SINGULAR,
    "person": Blockly.person.THIRD,
    "objects": [],
    "clamp": true
};
Verbs["terrent"] = {
    "word": "terrent",
    "lemma": "terreo",
    "plurality": Blockly.plurality.PLURAL,
    "person": Blockly.person.THIRD,
    "objects": [],
    "clamp": true
};
Verbs["terrent-clampless"] = {
    "word": "terrent",
    "lemma": "terreo",
    "plurality": Blockly.plurality.PLURAL,
    "person": Blockly.person.THIRD,
    "objects": [],
    "clamp": false
};
Verbs["cucurrerunt"] = {
    "word": "cucurrerunt",
    "lemma": "curro",
    "plurality": Blockly.plurality.PLURAL,
    "person": Blockly.person.THIRD,
    "objects": [],
    "clamp": true
};
Verbs["cucurrerunt-clampless"] = {
    "word": "cucurrerunt",
    "lemma": "curro",
    "plurality": Blockly.plurality.PLURAL,
    "person": Blockly.person.THIRD,
    "objects": [],
    "clamp": false
};
Verbs["cadebant"] = {
    "word": "cadebant",
    "lemma": "cado",
    "plurality": Blockly.plurality.PLURAL,
    "person": Blockly.person.THIRD,
    "objects": [],
    "clamp": true
};
Verbs["cadebant-clampless"] = {
    "word": "cadebant",
    "lemma": "cado",
    "plurality": Blockly.plurality.PLURAL,
    "person": Blockly.person.THIRD,
    "objects": [],
    "clamp": false
};
Verbs["fugiunt"] = {
    "word": "fugiunt",
    "lemma": "fugio",
    "plurality": Blockly.plurality.PLURAL,
    "person": Blockly.person.THIRD,
    "objects": [],
    "clamp": true
};
Verbs["fugiunt-clampless"] = {
    "word": "fugiunt",
    "lemma": "fugio",
    "plurality": Blockly.plurality.PLURAL,
    "person": Blockly.person.THIRD,
    "objects": [],
    "clamp": false
};
Verbs["tacent"] = {
    "word": "tacent",
    "lemma": "taceo",
    "plurality": Blockly.plurality.PLURAL,
    "person": Blockly.person.THIRD,
    "objects": [],
    "clamp": true
};
Verbs["tacent-clampless"] = {
    "word": "tacent",
    "lemma": "taceo",
    "plurality": Blockly.plurality.PLURAL,
    "person": Blockly.person.THIRD,
    "objects": [],
    "clamp": false
};
Verbs["patiuntur"] = {
    "word": "patiuntur",
    "lemma": "patior",
    "plurality": Blockly.plurality.PLURAL,
    "person": Blockly.person.THIRD,
    "objects": [],
    "clamp": true
};
Verbs["patiuntur-clampless"] = {
    "word": "patiuntur",
    "lemma": "patior",
    "plurality": Blockly.plurality.PLURAL,
    "person": Blockly.person.THIRD,
    "objects": [],
    "clamp": false
};
Verbs["circumstetit"] = {
    "word": "circumstetit",
    "lemma": "circumsto",
    "plurality": Blockly.plurality.SINGULAR,
    "person": Blockly.person.THIRD,
    "objects": [Expectations["accusative-direct-object"]],
    "clamp": true
};
Verbs["circumstetit-clampless"] = {
    "word": "circumstetit",
    "lemma": "circumsto",
    "plurality": Blockly.plurality.SINGULAR,
    "person": Blockly.person.THIRD,
    "objects": [Expectations["accusative-direct-object"]],
    "clamp": false
};
Verbs["pulsat"] = {
    "word": "pulsat",
    "lemma": "pulso",
    "plurality": Blockly.plurality.SINGULAR,
    "person": Blockly.person.THIRD,
    "objects": [Expectations["accusative-direct-object"]],
    "clamp": true
};
Verbs["pulsat-clampless"] = {
    "word": "pulsat",
    "lemma": "pulso",
    "plurality": Blockly.plurality.SINGULAR,
    "person": Blockly.person.THIRD,
    "objects": [Expectations["accusative-direct-object"]],
    "clamp": false
};
Verbs["terruit"] = {
    "word": "terruit",
    "lemma": "terreo",
    "plurality": Blockly.plurality.SINGULAR,
    "person": Blockly.person.THIRD,
    "objects": [Expectations["accusative-direct-object"]],
    "clamp": true
};
Verbs["terruit-clampless"] = {
    "word": "terruit",
    "lemma": "terreo",
    "plurality": Blockly.plurality.SINGULAR,
    "person": Blockly.person.THIRD,
    "objects": [Expectations["accusative-direct-object"]],
    "clamp": false
};
Verbs["portaverunt"] = {
    "word": "portaverunt",
    "lemma": "porto",
    "plurality": Blockly.plurality.PLURAL,
    "person": Blockly.person.THIRD,
    "objects": [Expectations["accusative-direct-object"]],
    "clamp": true
};
Verbs["portaverunt-clampless"] = {
    "word": "portaverunt",
    "lemma": "porto",
    "plurality": Blockly.plurality.PLURAL,
    "person": Blockly.person.THIRD,
    "objects": [Expectations["accusative-direct-object"]],
    "clamp": false
};
Verbs["rapuit"] = {
    "word": "rapuit",
    "lemma": "rapio",
    "plurality": Blockly.plurality.SINGULAR,
    "person": Blockly.person.THIRD,
    "objects": [Expectations["accusative-direct-object"]],
    "clamp": true
};
Verbs["rapuit-clampless"] = {
    "word": "rapuit",
    "lemma": "rapio",
    "plurality": Blockly.plurality.SINGULAR,
    "person": Blockly.person.THIRD,
    "objects": [Expectations["accusative-direct-object"]],
    "clamp": false
};
Verbs["scripsit"] = {
    "word": "scripsit",
    "lemma": "scribo",
    "plurality": Blockly.plurality.SINGULAR,
    "person": Blockly.person.THIRD,
    "objects": [Expectations["accusative-direct-object"]],
    "clamp": true
};
Verbs["scripsit-clampless"] = {
    "word": "scripsit",
    "lemma": "scribo",
    "plurality": Blockly.plurality.SINGULAR,
    "person": Blockly.person.THIRD,
    "objects": [Expectations["accusative-direct-object"]],
    "clamp": false
};
Verbs["spectant"] = {
    "word": "spectant",
    "lemma": "specto",
    "plurality": Blockly.plurality.PLURAL,
    "person": Blockly.person.THIRD,
    "objects": [Expectations["accusative-direct-object"]],
    "clamp": true
};
Verbs["spectant-clampless"] = {
    "word": "spectant",
    "lemma": "specto",
    "plurality": Blockly.plurality.PLURAL,
    "person": Blockly.person.THIRD,
    "objects": [Expectations["accusative-direct-object"]],
    "clamp": false
};
Verbs["vituperant"] = {
    "word": "vituperant",
    "lemma": "vitupero",
    "plurality": Blockly.plurality.PLURAL,
    "person": Blockly.person.THIRD,
    "objects": [Expectations["accusative-direct-object"]],
    "clamp": true
};
Verbs["vituperant-clampless"] = {
    "word": "vituperant",
    "lemma": "vitupero",
    "plurality": Blockly.plurality.PLURAL,
    "person": Blockly.person.THIRD,
    "objects": [Expectations["accusative-direct-object"]],
    "clamp": false
};
Verbs["legebant"] = {
    "word": "legebant",
    "lemma": "lego",
    "plurality": Blockly.plurality.PLURAL,
    "person": Blockly.person.THIRD,
    "objects": [Expectations["accusative-direct-object"]],
    "clamp": true
};
Verbs["legebant-clampless"] = {
    "word": "legebant",
    "lemma": "lego",
    "plurality": Blockly.plurality.PLURAL,
    "person": Blockly.person.THIRD,
    "objects": [Expectations["accusative-direct-object"]],
    "clamp": false
};
Verbs["amisit"] = {
    "word": "amisit",
    "lemma": "amitto",
    "plurality": Blockly.plurality.SINGULAR,
    "person": Blockly.person.THIRD,
    "objects": [Expectations["accusative-direct-object"]],
    "clamp": true
};
Verbs["amisit-clampless"] = {
    "word": "amisit",
    "lemma": "amitto",
    "plurality": Blockly.plurality.SINGULAR,
    "person": Blockly.person.THIRD,
    "objects": [Expectations["accusative-direct-object"]],
    "clamp": false
};
Verbs["salutavit"] = {
    "word": "salutavit",
    "lemma": "saluto",
    "plurality": Blockly.plurality.SINGULAR,
    "person": Blockly.person.THIRD,
    "objects": [Expectations["accusative-direct-object"]],
    "clamp": true
};
Verbs["salutavit-clampless"] = {
    "word": "salutavit",
    "lemma": "saluto",
    "plurality": Blockly.plurality.SINGULAR,
    "person": Blockly.person.THIRD,
    "objects": [Expectations["accusative-direct-object"]],
    "clamp": false
};
Verbs["emit"] = {
    "word": "emit",
    "lemma": "emo",
    "plurality": Blockly.plurality.SINGULAR,
    "person": Blockly.person.THIRD,
    "objects": [Expectations["accusative-direct-object"]],
    "clamp": true
};
Verbs["emit-clampless"] = {
    "word": "emit",
    "lemma": "emo",
    "plurality": Blockly.plurality.SINGULAR,
    "person": Blockly.person.THIRD,
    "objects": [Expectations["accusative-direct-object"]],
    "clamp": false
};
Verbs["emerunt"] = {
    "word": "emerunt",
    "lemma": "emo",
    "plurality": Blockly.plurality.PLURAL,
    "person": Blockly.person.THIRD,
    "objects": [Expectations["accusative-direct-object"]],
    "clamp": true
};
Verbs["emerunt-clampless"] = {
    "word": "emerunt",
    "lemma": "emo",
    "plurality": Blockly.plurality.PLURAL,
    "person": Blockly.person.THIRD,
    "objects": [Expectations["accusative-direct-object"]],
    "clamp": false
};
Verbs["ferit"] = {
    "word": "ferit",
    "lemma": "ferio",
    "plurality": Blockly.plurality.SINGULAR,
    "person": Blockly.person.THIRD,
    "objects": [Expectations["accusative-direct-object"]],
    "clamp": true
};
Verbs["ferit-clampless"] = {
    "word": "ferit",
    "lemma": "ferio",
    "plurality": Blockly.plurality.SINGULAR,
    "person": Blockly.person.THIRD,
    "objects": [Expectations["accusative-direct-object"]],
    "clamp": false
};
Verbs["invenerunt"] = {
    "word": "invenerunt",
    "lemma": "invenio",
    "plurality": Blockly.plurality.PLURAL,
    "person": Blockly.person.THIRD,
    "objects": [Expectations["accusative-direct-object"]],
    "clamp": true
};
Verbs["invenerunt-clampless"] = {
    "word": "invenerunt",
    "lemma": "invenio",
    "plurality": Blockly.plurality.PLURAL,
    "person": Blockly.person.THIRD,
    "objects": [Expectations["accusative-direct-object"]],
    "clamp": false
};
Verbs["decurrit"] = {
    "word": "decurrit",
    "lemma": "decurro",
    "plurality": Blockly.plurality.SINGULAR,
    "person": Blockly.person.THIRD,
    "objects": [],
    "clamp": true
};
Verbs["currit"] = {
    "word": "currit",
    "lemma": "curro",
    "plurality": Blockly.plurality.SINGULAR,
    "person": Blockly.person.THIRD,
    "objects": [],
    "clamp": true
};
Verbs["currunt"] = {
    "word": "currunt",
    "lemma": "curro",
    "plurality": Blockly.plurality.PLURAL,
    "person": Blockly.person.THIRD,
    "objects": [],
    "clamp": true
};
Verbs["currunt-clampless"] = {
    "word": "currunt",
    "lemma": "curro",
    "plurality": Blockly.plurality.PLURAL,
    "person": Blockly.person.THIRD,
    "objects": [],
    "clamp": false
};
Verbs["dicit"] = {
    "word": "dicit",
    "lemma": "dico",
    "plurality": Blockly.plurality.SINGULAR,
    "person": Blockly.person.THIRD,
    "objects": [Expectations["accusative-direct-object"], Expectations["dative-indirect-object"]],
    "clamp": true
};
Verbs["dicit-clampless"] = {
    "word": "dicit",
    "lemma": "dico",
    "plurality": Blockly.plurality.SINGULAR,
    "person": Blockly.person.THIRD,
    "objects": [Expectations["accusative-direct-object"], Expectations["dative-indirect-object"]],
    "clamp": false
};
Verbs["parcebant"] = {
    "word": "parcebant",
    "lemma": "parco",
    "plurality": Blockly.plurality.PLURAL,
    "person": Blockly.person.THIRD,
    "objects": [Expectations["dative-indirect-object"]],
    "clamp": true
};
Verbs["parcebant-clampless"] = {
    "word": "parcebant",
    "lemma": "parco",
    "plurality": Blockly.plurality.PLURAL,
    "person": Blockly.person.THIRD,
    "objects": [Expectations["dative-indirect-object"]],
    "clamp": false
};

// Create verbs
for (var verb in Verbs) {
    Blockly.makeVerb(Verbs[verb], true);
    Blockly.makeVerb(Verbs[verb], false);
}

 /******************
 * 
 * ADJECTIVES
 *
 ******************/

/*
 * makeAdjective: creates an adjective.
 * adjective Contains 'word', a string of the word and 'inflections', an array of possible inflections as objects.
 */
Blockly.makeAdjective = function(adjective) {
    Blockly.Blocks[adjective.word] = {
        init: function() {
            this.word = adjective.word;
            this.pos = Blockly.pos.ADJECTIVE;
            this.lemma = adjective.lemma;
            this.inflections = adjective.inflections;
            this.inflectedCase = null;
            this.plurality = null;
            this.gender = null;
            this.setTooltip(Tooltips[this.pos][this.lemma]);

            this.appendDummyInput()
                .setAlign(Blockly.ALIGN_CENTRE)
                .appendField(this.word);

            // Set dropdown field if alternative inflections exist
            if (this.inflections.length > 1) {
                // Create dropdown of inflections under word
                var items = [];
                for (var i = 0; i < this.inflections.length; i++) {
                    var item = [];
                    item.push(this.inflections[i].gender + " " + this.inflections[i].inflectedCase + " " + this.inflections[i].plurality, 
                                this.inflections[i].inflectedCase + "_" + this.inflections[i].plurality + "_" + this.inflections[i].gender);
                    items.push(item);
                };

                var dropdown = new Blockly.FieldDropdown(items, function(option) {
                    this.sourceBlock_.update(option);
                });
                this.appendDummyInput()
                    .appendField(dropdown, 'dropdown');
            } else {
                this.inflectedCase = adjective.inflections[0].inflectedCase;
                this.plurality = adjective.inflections[0].plurality;
                this.gender = adjective.inflections[0].gender;

                this.selectColour(this.inflectedCase, this.plurality, this.gender);
                // One possible inflection, so no dropdown, just text in dummy input
                this.appendDummyInput()
                    .appendField(this.inflectedCase + " " + this.plurality);

                var stackable = ["adjective-" + this.inflectedCase + "-" + this.plurality + "-" + this.gender];
                this.setPreviousStatement(true, stackable);
                this.setNextStatement(true, stackable);
            }
        },
        mutationToDom: function() {
            var container = document.createElement("mutation");

            // Get selected dropdown value
            var dropdownValue = this.getFieldValue("dropdown");
            container.setAttribute("dropdownValue", dropdownValue);

            return container;
        },
        domToMutation: function(xmlElement) {
            var inflection = xmlElement.getAttribute("dropdownValue");
            this.update(inflection);
        },
        update: function(inflection) {
            this.setDisabled(false);
            this.setMovable(true);
            this.unplug(true, true);
            inflection = inflection.split("_");
            var inflectedCase = inflection[0], plurality = inflection[1], gender = inflection[2];

            // Update inflection values
            this.inflectedCase = inflectedCase;
            this.plurality = plurality;
            this.gender = gender;

            // Update what agrees with word and hence what can be stacked
            var stackable = ["adjective-" + inflectedCase + "-" + plurality + "-" + gender];
            this.setPreviousStatement(true, stackable);
            this.setNextStatement(true, stackable);

            this.selectColour(inflectedCase, plurality, gender);
        },
        selectColour: function(inflectedCase, plurality, gender) {
            /*
             * Colour wheel divided into 30 parts, each 12, 
             * to represent all permutations of 5 cases, 2 pluralities, 3 genders
             */
            var hexColour = 360;
            var applyGender = function(gender, hexColour) {
                var difference = 0;
                switch (gender) {
                    case Blockly.gender.MASCULINE:
                        difference = 2;
                        break;
                    case Blockly.gender.FEMININE:
                        difference = 1;
                        break;
                    case Blockly.gender.NEUTER:
                        break;  
                }
                return hexColour - difference * 24;
            };

            var applyPlurality = function(plurality, hexColour) {
                var difference = 0;
                if (plurality == Blockly.plurality.SINGULAR) {
                    difference = 1;
                }
                return hexColour - difference * 12;
            };

            switch (inflectedCase) {
                case Blockly.inflectedCase.NOMINATIVE:
                    hexColour /= 5;
                    break;
                case Blockly.inflectedCase.GENITIVE:
                    hexColour /= 4;
                    break;
                case Blockly.inflectedCase.DATIVE:
                    hexColour /= 3;
                    break;
                case Blockly.inflectedCase.ACCUSATIVE:
                    hexColour /= 2;
                    break;
                case Blockly.inflectedCase.ABLATIVE:
                    break;
            }
            hexColour = applyGender(gender, hexColour);
            hexColour = applyPlurality(plurality, hexColour);
            this.setColour(hexColour);
        }
    };
}

// Bank of common adjective inflections
AdjectiveInflections = {};
AdjectiveInflections["third-declension-is"] = [{inflectedCase: Blockly.inflectedCase.NOMINATIVE, 
                                        plurality: Blockly.plurality.SINGULAR, 
                                        gender: Blockly.gender.FEMININE},
                                    {inflectedCase: Blockly.inflectedCase.NOMINATIVE, 
                                        plurality: Blockly.plurality.SINGULAR, 
                                        gender: Blockly.gender.MASCULINE},
                                    {inflectedCase: Blockly.inflectedCase.GENITIVE, 
                                        plurality: Blockly.plurality.SINGULAR, 
                                        gender: Blockly.gender.FEMININE},
                                    {inflectedCase: Blockly.inflectedCase.GENITIVE, 
                                        plurality: Blockly.plurality.SINGULAR, 
                                        gender: Blockly.gender.MASCULINE},
                                    {inflectedCase: Blockly.inflectedCase.VOCATIVE, 
                                        plurality: Blockly.plurality.SINGULAR, 
                                        gender: Blockly.gender.MASCULINE},
                                    {inflectedCase: Blockly.inflectedCase.VOCATIVE, 
                                        plurality: Blockly.plurality.SINGULAR, 
                                        gender: Blockly.gender.FEMININE}];
AdjectiveInflections["first-declension-a"] = [{inflectedCase: Blockly.inflectedCase.NOMINATIVE, 
                                        plurality: Blockly.plurality.SINGULAR, 
                                        gender: Blockly.gender.FEMININE},
                                    {inflectedCase: Blockly.inflectedCase.ABLATIVE, 
                                        plurality: Blockly.plurality.SINGULAR, 
                                        gender: Blockly.gender.FEMININE},
                                    {inflectedCase: Blockly.inflectedCase.VOCATIVE, 
                                        plurality: Blockly.plurality.SINGULAR, 
                                        gender: Blockly.gender.FEMININE},
                                    {inflectedCase: Blockly.inflectedCase.NOMINATIVE, 
                                        plurality: Blockly.plurality.PLURAL, 
                                        gender: Blockly.gender.NEUTER},
                                    {inflectedCase: Blockly.inflectedCase.ACCUSATIVE, 
                                        plurality: Blockly.plurality.PLURAL, 
                                        gender: Blockly.gender.NEUTER},
                                    {inflectedCase: Blockly.inflectedCase.VOCATIVE, 
                                        plurality: Blockly.plurality.PLURAL, 
                                        gender: Blockly.gender.NEUTER}];
AdjectiveInflections["first-declension-ae"] = [{inflectedCase: Blockly.inflectedCase.GENITIVE, 
                                        plurality: Blockly.plurality.SINGULAR, 
                                        gender: Blockly.gender.FEMININE},
                                    {inflectedCase: Blockly.inflectedCase.DATIVE, 
                                        plurality: Blockly.plurality.SINGULAR, 
                                        gender: Blockly.gender.FEMININE},
                                    {inflectedCase: Blockly.inflectedCase.NOMINATIVE, 
                                        plurality: Blockly.plurality.PLURAL, 
                                        gender: Blockly.gender.FEMININE},
                                    {inflectedCase: Blockly.inflectedCase.VOCATIVE, 
                                        plurality: Blockly.plurality.PLURAL, 
                                        gender: Blockly.gender.FEMININE}];
AdjectiveInflections["first-declension-am"] = [{inflectedCase: Blockly.inflectedCase.ACCUSATIVE, 
                                        plurality: Blockly.plurality.SINGULAR, 
                                        gender: Blockly.gender.FEMININE}];
AdjectiveInflections["third-declension-ibus"] = [{inflectedCase: Blockly.inflectedCase.DATIVE, 
                                        plurality: Blockly.plurality.PLURAL, 
                                        gender: Blockly.gender.MASCULINE},
                                    {inflectedCase: Blockly.inflectedCase.ABLATIVE, 
                                        plurality: Blockly.plurality.PLURAL, 
                                        gender: Blockly.gender.MASCULINE},
                                    {inflectedCase: Blockly.inflectedCase.DATIVE, 
                                        plurality: Blockly.plurality.PLURAL, 
                                        gender: Blockly.gender.FEMININE},
                                    {inflectedCase: Blockly.inflectedCase.ABLATIVE, 
                                        plurality: Blockly.plurality.PLURAL, 
                                        gender: Blockly.gender.FEMININE},
                                    {inflectedCase: Blockly.inflectedCase.DATIVE, 
                                        plurality: Blockly.plurality.PLURAL, 
                                        gender: Blockly.gender.NEUTER},
                                    {inflectedCase: Blockly.inflectedCase.ABLATIVE, 
                                        plurality: Blockly.plurality.PLURAL, 
                                        gender: Blockly.gender.NEUTER}];
AdjectiveInflections["second-declension-is"] = [{inflectedCase: Blockly.inflectedCase.DATIVE, 
                                        plurality: Blockly.plurality.PLURAL, 
                                        gender: Blockly.gender.MASCULINE},
                                    {inflectedCase: Blockly.inflectedCase.ABLATIVE, 
                                        plurality: Blockly.plurality.PLURAL, 
                                        gender: Blockly.gender.MASCULINE},
                                    {inflectedCase: Blockly.inflectedCase.DATIVE, 
                                        plurality: Blockly.plurality.PLURAL, 
                                        gender: Blockly.gender.FEMININE},
                                    {inflectedCase: Blockly.inflectedCase.ABLATIVE, 
                                        plurality: Blockly.plurality.PLURAL, 
                                        gender: Blockly.gender.FEMININE},
                                    {inflectedCase: Blockly.inflectedCase.DATIVE, 
                                        plurality: Blockly.plurality.PLURAL, 
                                        gender: Blockly.gender.NEUTER},
                                    {inflectedCase: Blockly.inflectedCase.ABLATIVE, 
                                        plurality: Blockly.plurality.PLURAL, 
                                        gender: Blockly.gender.NEUTER}];
AdjectiveInflections["second-declension-o"] = [{inflectedCase: Blockly.inflectedCase.DATIVE, 
                                        plurality: Blockly.plurality.SINGULAR, 
                                        gender: Blockly.gender.MASCULINE},
                                    {inflectedCase: Blockly.inflectedCase.ABLATIVE, 
                                        plurality: Blockly.plurality.SINGULAR, 
                                        gender: Blockly.gender.MASCULINE},
                                    {inflectedCase: Blockly.inflectedCase.DATIVE, 
                                        plurality: Blockly.plurality.SINGULAR, 
                                        gender: Blockly.gender.NEUTER},
                                    {inflectedCase: Blockly.inflectedCase.ABLATIVE, 
                                        plurality: Blockly.plurality.SINGULAR, 
                                        gender: Blockly.gender.NEUTER}];
AdjectiveInflections["second-declension-us"] = [{inflectedCase: Blockly.inflectedCase.NOMINATIVE, 
                                        plurality: Blockly.plurality.SINGULAR, 
                                        gender: Blockly.gender.MASCULINE}];
AdjectiveInflections["second-declension-os"] = [{inflectedCase: Blockly.inflectedCase.ACCUSATIVE, 
                                        plurality: Blockly.plurality.PLURAL, 
                                        gender: Blockly.gender.MASCULINE}];
AdjectiveInflections["second-declension-um"] = [{inflectedCase: Blockly.inflectedCase.NOMINATIVE, 
                                        plurality: Blockly.plurality.SINGULAR, 
                                        gender: Blockly.gender.NEUTER},
                                        {inflectedCase: Blockly.inflectedCase.ACCUSATIVE, 
                                        plurality: Blockly.plurality.SINGULAR, 
                                        gender: Blockly.gender.NEUTER},
                                        {inflectedCase: Blockly.inflectedCase.ACCUSATIVE, 
                                        plurality: Blockly.plurality.SINGULAR, 
                                        gender: Blockly.gender.MASCULINE}];     
AdjectiveInflections["second-declension-i"] = [{inflectedCase: Blockly.inflectedCase.NOMINATIVE, 
                                        plurality: Blockly.plurality.PLURAL, 
                                        gender: Blockly.gender.MASCULINE},
                                        {inflectedCase: Blockly.inflectedCase.GENITIVE, 
                                        plurality: Blockly.plurality.SINGULAR, 
                                        gender: Blockly.gender.MASCULINE},
                                        {inflectedCase: Blockly.inflectedCase.GENITIVE, 
                                        plurality: Blockly.plurality.SINGULAR, 
                                        gender: Blockly.gender.NEUTER},
                                        {inflectedCase: Blockly.inflectedCase.VOCATIVE, 
                                        plurality: Blockly.plurality.PLURAL, 
                                        gender: Blockly.gender.MASCULINE}];                                        
AdjectiveInflections["third-declension-nominative"] = [{inflectedCase: Blockly.inflectedCase.NOMINATIVE, 
                                        plurality: Blockly.plurality.SINGULAR, 
                                        gender: Blockly.gender.MASCULINE},
                                    {inflectedCase: Blockly.inflectedCase.NOMINATIVE, 
                                        plurality: Blockly.plurality.SINGULAR, 
                                        gender: Blockly.gender.FEMININE},
                                    {inflectedCase: Blockly.inflectedCase.NOMINATIVE, 
                                        plurality: Blockly.plurality.SINGULAR, 
                                        gender: Blockly.gender.NEUTER},
                                    {inflectedCase: Blockly.inflectedCase.ACCUSATIVE, 
                                        plurality: Blockly.plurality.SINGULAR, 
                                        gender: Blockly.gender.NEUTER},
                                    {inflectedCase: Blockly.inflectedCase.VOCATIVE, 
                                        plurality: Blockly.plurality.SINGULAR, 
                                        gender: Blockly.gender.MASCULINE},
                                    {inflectedCase: Blockly.inflectedCase.VOCATIVE, 
                                        plurality: Blockly.plurality.SINGULAR, 
                                        gender: Blockly.gender.FEMININE},
                                    {inflectedCase: Blockly.inflectedCase.VOCATIVE, 
                                        plurality: Blockly.plurality.SINGULAR, 
                                        gender: Blockly.gender.NEUTER}];
                                       
// Bank of adjectives
Adjectives = {};
Adjectives["fortis"] = { "word": "fortis", "inflections": AdjectiveInflections["third-declension-is"], "lemma": "fortis" };
Adjectives["forensis"] = { "word": "forensis", "inflections": AdjectiveInflections["third-declension-is"], "lemma": "forensis" };

Adjectives["ferox"] = { "word": "ferox", "inflections": AdjectiveInflections["third-declension-nominative"], "lemma": "ferox" };
Adjectives["ardens"] = { "word": "ardens", "inflections": AdjectiveInflections["third-declension-nominative"], "lemma": "ardens" };
Adjectives["ingens"] = { "word": "ingens", "inflections": AdjectiveInflections["third-declension-nominative"], "lemma": "ingens" };

Adjectives["saevus"] = { "word": "saevus", "inflections": AdjectiveInflections["second-declension-us"], "lemma": "saevus" };
Adjectives["notus"] = { "word": "notus", "inflections": AdjectiveInflections["second-declension-us"], "lemma": "notus" };
Adjectives["ignavus"] = { "word": "ignavus", "inflections": AdjectiveInflections["second-declension-us"], "lemma": "ignavus" };
Adjectives["avarus"] = { "word": "avarus", "inflections": AdjectiveInflections["second-declension-us"], "lemma": "avarus" };
Adjectives["iratus"] = { "word": "iratus", "inflections": AdjectiveInflections["second-declension-us"], "lemma": "iratus" };

Adjectives["solliciti"] = { "word": "solliciti", "inflections": AdjectiveInflections["second-declension-i"], "lemma": "sollicitus" };

Adjectives["alto"] = { "word": "alto", "inflections": AdjectiveInflections["second-declension-o"], "lemma": "altus" };

Adjectives["laetos"] = { "word": "laetos", "inflections": AdjectiveInflections["second-declension-os"], "lemma": "laetus" };
Adjectives["multos"] = { "word": "multos", "inflections": AdjectiveInflections["second-declension-os"], "lemma": "multus" };

Adjectives["laetae"] = { "word": "laetae", "inflections": AdjectiveInflections["first-declension-ae"], "lemma": "laetus" };

Adjectives["parvum"] = { "word": "parvum", "inflections": AdjectiveInflections["second-declension-um"], "lemma": "parvus" };
Adjectives["multum"] = { "word": "multum", "inflections": AdjectiveInflections["second-declension-um"], "lemma": "multus" };
Adjectives["stultum"] = { "word": "stultum", "inflections": AdjectiveInflections["second-declension-um"], "lemma": "stultus" };
Adjectives["protum"] = { "word": "protum", "inflections": AdjectiveInflections["second-declension-um"], "lemma": "protus" };

Adjectives["aurea"] = { "word": "aurea", "inflections": AdjectiveInflections["first-declension-a"], "lemma": "aureus" };
Adjectives["magna"] = { "word": "magna", "inflections": AdjectiveInflections["first-declension-a"], "lemma": "magnus" };
Adjectives["publica"] = { "word": "publica", "inflections": AdjectiveInflections["first-declension-a"], "lemma": "publicus" };
Adjectives["summa"] = { "word": "summa", "inflections": AdjectiveInflections["first-declension-a"], "lemma": "summus" };
Adjectives["irata"] = { "word": "irata", "inflections": AdjectiveInflections["first-declension-a"], "lemma": "iratus" };

Adjectives["optimam"] = { "word": "optimam", "inflections": AdjectiveInflections["first-declension-am"], "lemma": "bonus" };

Adjectives["vitiosissimis"] = { "word": "vitiosissimis", "inflections": AdjectiveInflections["second-declension-is"], "lemma": "vitiosissimus" };
Adjectives["hibernis"] = { "word": "hibernis", "inflections": AdjectiveInflections["second-declension-is"], "lemma": "hibernus" };
Adjectives["fessis"] = { "word": "fessis", "inflections": AdjectiveInflections["second-declension-is"], "lemma": "fessus" };
Adjectives["densis"] = { "word": "densis", "inflections": AdjectiveInflections["second-declension-is"], "lemma": "densus" };

Adjectives["mollibus"] = { "word": "mollibus", "inflections": AdjectiveInflections["third-declension-ibus"], "lemma": "mollis" };



// Create adjectives
for (var adjective in Adjectives) {
    Blockly.makeAdjective(Adjectives[adjective]);
}

/******************
 * 
 * PREPOSITIONS
 *
 ******************/

/*
 * makePreposition: creates a preposition.
 * preposition Contains the string of the 'word' and 'inflectedCase' it takes.
 */
Blockly.makePreposition = function(preposition, isInline) {
    var uniqueName = preposition.word;
    if (isInline) {
        uniqueName += "-inline";
    }
    Blockly.Blocks[uniqueName] = {
        init: function() {
            this.word = preposition.word;
            this.pos = Blockly.pos.PREPOSITION;
            this.lemma = preposition.lemma;
            this.inflectedCase = preposition.inflectedCase;
            this.setTooltip(Tooltips[this.pos][this.lemma]);

            this.setColour('#545454');
            this.appendDummyInput()
                .setAlign(Blockly.ALIGN_CENTRE)
                .appendField(this.word);

            if (this.inflectedCase == Blockly.inflectedCase.NOMINATIVE) {
                this.appendNominativeValueInput(this.inflectedCase)
                    .setCheck([this.inflectedCase + "-singular", this.inflectedCase + "-plural"])
            }
            else if (this.inflectedCase == Blockly.inflectedCase.GENITIVE) {
                this.appendGenitiveValueInput(this.inflectedCase)
                    .setCheck([this.inflectedCase + "-singular", this.inflectedCase + "-plural"])
            }
            else if (this.inflectedCase == Blockly.inflectedCase.DATIVE) {
                this.appendDativeValueInput(this.inflectedCase)
                    .setCheck([this.inflectedCase + "-singular", this.inflectedCase + "-plural"])
            }
            else if (this.inflectedCase == Blockly.inflectedCase.ACCUSATIVE) {
                this.appendAccusativeValueInput(this.inflectedCase)
                    .setCheck([this.inflectedCase + "-singular", this.inflectedCase + "-plural"])
            }
            else if (this.inflectedCase == Blockly.inflectedCase.ABLATIVE) {
                this.appendAblativeValueInput(this.inflectedCase)
                    .setCheck([this.inflectedCase + "-singular", this.inflectedCase + "-plural"])
            }
            else {
                this.appendValueInput(object.inflectedCase)
                    .setCheck([this.inflectedCase + "-singular", this.inflectedCase + "-plural"])
            }
            
            if (isInline) {
                this.setInputsInline(true);                
            }

            this.setPreviousStatement(true, "preposition");
            this.setNextStatement(true, ["preposition", "adverb", "ut-clause"]);
        }
    };
}

// Bank of prepositions
Prepositions = {};
Prepositions["in"] = { 
    "word": "in", 
    "inflectedCase": Blockly.inflectedCase.ABLATIVE,
    "lemma": "in"
};
Prepositions["a"] = { 
    "word": "a", 
    "inflectedCase": Blockly.inflectedCase.ABLATIVE,
    "lemma": "a"
};
Prepositions["ab"] = { 
    "word": "ab", 
    "inflectedCase": Blockly.inflectedCase.ABLATIVE,
    "lemma": "a"
};
Prepositions["ad"] = { 
    "word": "ad", 
    "inflectedCase": Blockly.inflectedCase.ACCUSATIVE,
    "lemma": "ad"
};
Prepositions["post"] = { 
    "word": "post", 
    "inflectedCase": Blockly.inflectedCase.ACCUSATIVE,
    "lemma": "post"
};
Prepositions["per"] = { 
    "word": "per", 
    "inflectedCase": Blockly.inflectedCase.ACCUSATIVE,
    "lemma": "per"
};
Prepositions["sine"] = { 
    "word": "sine", 
    "inflectedCase": Blockly.inflectedCase.ABLATIVE,
    "lemma": "sine"
};
Prepositions["pro"] = { 
    "word": "pro", 
    "inflectedCase": Blockly.inflectedCase.ABLATIVE,
    "lemma": "pro"
};
Prepositions["ex"] = { 
    "word": "ex", 
    "inflectedCase": Blockly.inflectedCase.ABLATIVE,
    "lemma": "ex"
};

// Create prepositions
for (var preposition in Prepositions) {
    Blockly.makePreposition(Prepositions[preposition], true);
    Blockly.makePreposition(Prepositions[preposition], false);
}

 /******************
 * 
 * ADVERBS
 *
 ******************/
/*
 * makeAdverb: creates an adverb.
 * adverb Contains the string of the 'word'.
 */
Blockly.makeAdverb = function(adverb) {
    Blockly.Blocks[adverb.word] = {
        init: function() {
            this.word = adverb.word;
            this.lemma = adverb.word;
            this.pos = Blockly.pos.ADVERB;
            this.setTooltip(Tooltips[this.pos][this.lemma]);

            this.setColour('#545454');
            this.appendDummyInput()
                .appendField(this.word);

            this.setPreviousStatement(true, "adverb");
            this.setNextStatement(true, ["preposition", "adverb", "ut-clause"]);
        }
    };
}

// Bank of adverbs
Adverbs = {};
Adverbs["at"] = { "word": "at" };
Adverbs["tum"] = { "word": "tum" };
Adverbs["primum"] = { "word": "primum" };
Adverbs["vel"] = { "word": "vel" };
Adverbs["nam"] = { "word": "nam" };
Adverbs["simul"] = { "word": "simul" };
Adverbs["ac"] = { "word": "ac" };
Adverbs["celeriter"] = { "word": "celeriter" };
Adverbs["libenter"] = { "word": "libenter" };
Adverbs["statim"] = { "word": "statim" };
Adverbs["frustra"] = { "word": "frustra" };
Adverbs["intente"] = { "word": "intente" };
Adverbs["ferociter"] = { "word": "ferociter" };
Adverbs["vehementer"] = { "word": "vehementer" };

// Create adverbs
for (var adverb in Adverbs) {
    Blockly.makeAdverb(Adverbs[adverb]);
}








