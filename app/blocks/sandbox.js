/* 
 *    Dropdown nominative nouns 
 *    [nominative singular masculine] https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#2padtp
 */

// Nominative singular masculine
Blockly.Blocks['dropdown_nominative_singular_masculine'] = {
  init: function() {
    this.setColour(60);
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["puer", "PUER"], 
                                                ["orator", "ORATOR"], 
                                                ["iudex", "IUDEX"]]), 
        "nominative-singular-masculine");
    this.appendStatementInput("noun-clamp")
        .setCheck(["adjective-nominative-singular-masculine", "relative-pronoun-singular-masculine"]);
    this.setOutput(true, "nominative-singular");
    this.setTooltip('Parse: nominative singular masculine');
  }
};

// Nominative plural masculine
Blockly.Blocks['dropdown_nominative_plural_masculine'] = {
  init: function() {
    this.setColour(60);
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["pueri", "PUERI"], 
                                                ["oratores", "ORATORES"], 
                                                ["iudices", "IUDICES"]]), 
        "nominative-plural-masculine");
    this.appendStatementInput("noun-clamp")
        .setCheck(["adjective-nominative-plural-masculine", "relative-pronoun-plural-masculine"]);
    this.setOutput(true, "nominative-plural");
    this.setTooltip('Parse: nominative plural masculine');
  }
};

// Nominative singular feminine
Blockly.Blocks['dropdown_nominative_singular_feminine'] = {
  init: function() {
    this.setColour(60);
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["puella", "PUELLA"], 
                                                ["ars", "ARS"], 
                                                ["manus", "MANUS"]]), 
        "nominative-singular-feminine");
    this.appendStatementInput("noun-clamp")
        .setCheck(["adjective-nominative-singular-feminine", "relative-pronoun-singular-feminine"]);
    this.setOutput(true, "nominative-singular");
    this.setTooltip('Parse: nominative singular feminine');
  }
};

// Nominative plural feminine
Blockly.Blocks['dropdown_nominative_plural_feminine'] = {
  init: function() {
    this.setColour(60);
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["puellae", "PUELLAE"], 
                                                ["artes", "ARTES"], 
                                                ["manus", "MANUS"]]), 
        "nominative-plural-feminine");
    this.appendStatementInput("noun-clamp")
        .setCheck(["adjective-nominative-plural-feminine", "relative-pronoun-plural-feminine"]);
    this.setOutput(true, "nominative-plural");
    this.setTooltip('Parse: nominative plural feminine');
  }
};


// Nominative singular neuter
Blockly.Blocks['dropdown_nominative_singular_neuter'] = {
  init: function() {
    this.setColour(60);
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["signum", "SIGNUM"], 
                                                ["animal", "ANIMAL"], 
                                                ["tempus", "TEMPUS"]]), 
        "nominative-singular-neuter");
    this.appendStatementInput("noun-clamp")
        .setCheck(["adjective-nominative-singular-neuter", "relative-pronoun-singular-neuter"]);
    this.setOutput(true, "nominative-singular");
    this.setTooltip('Parse: nominative singular neuter');
  }
};

// Nominative plural neuter
Blockly.Blocks['dropdown_nominative_plural_neuter'] = {
  init: function() {
    this.setColour(60);
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["signa", "SIGNA"], 
                                                ["animalia", "ANIMALIA"], 
                                                ["tempora", "TEMPORA"]]), 
        "nominative-plural-neuter");
    this.appendStatementInput("noun-clamp")
        .setCheck(["adjective-nominative-plural-neuter", "relative-pronoun-plural-neuter"]);
    this.setOutput(true, "nominative-plural");
    this.setTooltip('Parse: nominative plural neuter');
  }
};

/* 
 *    Dropdown intransitive verbs 
 *    [intransitive singular first person] https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#6e8nr8
 */

// Intransitive singular first person (all tenses, moods, voices)
Blockly.Blocks['dropdown_intransitive_singular_first'] = {
  init: function() {
    this.setColour(195);
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["sedeo", "SEDEO"], 
                                                ["sedebam", "SEDEBAM"], 
                                                ["sedi", "SEDI"]]), 
        "intransitive-singular-first");
    this.appendValueInput("nominative-singular-first")
        .setCheck(["nominative-singular-first","nominative-singular"])
        .appendField("subject");
    this.appendStatementInput("verb-clamp")
        .setCheck(["adverb", "preposition", "ut-clause"]);
    this.setInputsInline(true);
    this.setTooltip('Parse: intransitive singular first person');
  }
};

// Intransitive plural first person (all tenses, moods, voices)
Blockly.Blocks['dropdown_intransitive_plural_first'] = {
  init: function() {
    this.setColour(195);
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["sedemus", "SEDEMUS"], 
                                                ["sedebamus", "SEDEBAMUS"], 
                                                ["sedimus", "SEDIMUS"]]), 
        "intransitive-plural-first");
    this.appendValueInput("nominative-plural-first")
        .setCheck(["nominative-plural-first","nominative-plural"])
        .appendField("subject");
    this.appendStatementInput("verb-clamp")
        .setCheck(["adverb", "preposition", "ut-clause"]);
    this.setInputsInline(true);
    this.setTooltip('Parse: intransitive plural first person');
  }
};

// Intransitive singular second person (all tenses, moods, voices)
Blockly.Blocks['dropdown_intransitive_singular_second'] = {
  init: function() {
    this.setColour(195);
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["sedes", "SEDES"], 
                                                ["sedebas", "SEDEBAS"], 
                                                ["sedisti", "SEDISTI"]]), 
        "intransitive-singular-second");
    this.appendValueInput("nominative-singular-second")
        .setCheck(["nominative-singular-second","nominative-singular"])
        .appendField("subject");
    this.appendStatementInput("verb-clamp")
        .setCheck(["adverb", "preposition", "ut-clause"]);
    this.setInputsInline(true);
    this.setTooltip('Parse: intransitive singular second person');
  }
};

// Intransitive plural second person (all tenses, moods, voices)
Blockly.Blocks['dropdown_intransitive_plural_second'] = {
  init: function() {
    this.setColour(195);
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["sedetis", "SEDETIS"], 
                                                ["sedebatis", "SEDEBATIS"], 
                                                ["sedistis", "SEDISTIS"]]), 
        "intransitive-plural-second");
    this.appendValueInput("nominative-plural-second")
        .setCheck(["nominative-plural-second","nominative-plural"])
        .appendField("subject");
    this.appendStatementInput("verb-clamp")
        .setCheck(["adverb", "preposition", "ut-clause"]);
    this.setInputsInline(true);
    this.setTooltip('Parse: intransitive plural second person');
  }
};

// Intransitive singular third person (all tenses, moods, voices)
Blockly.Blocks['dropdown_intransitive_singular_third'] = {
  init: function() {
    this.setColour(195);
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["sedet", "SEDET"], 
                                                ["sedebat", "SEDEBAT"], 
                                                ["sedit", "SEDIT"]]), 
        "intransitive-singular-third");
    this.appendValueInput("nominative-singular-third")
        .setCheck(["nominative-singular-third","nominative-singular"])
        .appendField("subject");
    this.appendStatementInput("verb-clamp")
        .setCheck(["adverb", "preposition", "ut-clause"]);
    this.setInputsInline(true);
    this.setTooltip('Parse: intransitive singular third person');
  }
};

// Intransitive plural third person (all tenses, moods, voices)
Blockly.Blocks['dropdown_intransitive_plural_third'] = {
  init: function() {
    this.setColour(195);
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["sedent", "SEDENT"], 
                                                ["sedebant", "SEDEBANT"], 
                                                ["sederunt", "SEDERUNT"]]), 
        "intransitive-plural-third");
    this.appendValueInput("nominative-plural-third")
        .setCheck(["nominative-plural-third","nominative-plural"])
        .appendField("subject");
    this.appendStatementInput("verb-clamp")
        .setCheck(["adverb", "preposition", "ut-clause"]);
    this.setInputsInline(true);
    this.setTooltip('Parse: intransitive plural third person');
  }
};



