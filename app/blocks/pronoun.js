/*
 * Pronouns
 * [puer] https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#d5mg7m
 *      Ego: nominative singular first person pronoun
 *      Nos: nominative plural first person pronoun
 *      Tu: nominative singular second person pronoun
 *      Vos: nominative plural second person pronoun
 *      Is: nominative singular third person masculine pronoun
 *      Ei: nominative plural third person masculine pronoun
 *      Ea: nominative singular third person feminine pronoun
 *      Eae: nominative plural third person feminine pronoun
 *      Id: nominative singular third person neuter pronoun
 *      Ea: nominative plural third person neuter pronoun
 */

 // Ego: nominative singular first person pronoun
Blockly.Blocks['ego'] = {
  init: function() {
    this.setColour(70);
    this.appendDummyInput()
        .appendField("ego");
    this.appendStatementInput("noun-clamp")
        .setCheck(["adjective-nominative-singular-masculine", 
                    "adjective-nominative-singular-feminine",
                    "adjective-nominative-singular-neuter",
                    "relative-pronoun-singular-masculine",
                    "relative-pronoun-singular-feminine",
                    "relative-pronoun-singular-neuter"]);
    this.setOutput(true, "nominative-singular-first");
    this.setTooltip('Parse: nominative singular first person pronoun');
  }
};

// Nos: nominative plural first person pronoun
Blockly.Blocks['nos'] = {
  init: function() {
    this.setColour(70);
    this.appendDummyInput()
        .appendField("nos");
    this.appendStatementInput("noun-clamp")
        .setCheck(["adjective-nominative-plural-masculine", 
                    "adjective-nominative-plural-feminine",
                    "adjective-nominative-plural-neuter",
                    "relative-pronoun-plural-masculine",
                    "relative-pronoun-plural-feminine",
                    "relative-pronoun-plural-neuter"]);
    this.setOutput(true, "nominative-plural-first");
    this.setTooltip('Parse: nominative plural first person pronoun');
  }
};

// Tu: nominative singular second person pronoun
Blockly.Blocks['tu'] = {
  init: function() {
    this.setColour(70);
    this.appendDummyInput()
        .appendField("tu");
    this.appendStatementInput("noun-clamp")
        .setCheck(["adjective-nominative-singular-masculine", 
                    "adjective-nominative-singular-feminine",
                    "adjective-nominative-singular-neuter",
                    "relative-pronoun-singular-masculine",
                    "relative-pronoun-singular-feminine",
                    "relative-pronoun-singular-neuter"]);
    this.setOutput(true, "nominative-singular-second");
    this.setTooltip('Parse: nominative singular second person pronoun');
  }
};

// Vos: nominative plural second person pronoun
Blockly.Blocks['vos'] = {
  init: function() {
    this.setColour(70);
    this.appendDummyInput()
        .appendField("vos");
    this.appendStatementInput("noun-clamp")
        .setCheck(["adjective-nominative-plural-masculine", 
                    "adjective-nominative-plural-feminine",
                    "adjective-nominative-plural-neuter",
                    "relative-pronoun-plural-masculine",
                    "relative-pronoun-plural-feminine",
                    "relative-pronoun-plural-neuter"]);
    this.setOutput(true, "nominative-plural-second");
    this.setTooltip('Parse: nominative plural second person pronoun');
  }
};

// Is: nominative singular third person masculine pronoun
Blockly.Blocks['is'] = {
  init: function() {
    this.setColour(70);
    this.appendDummyInput()
        .appendField("is");
    this.appendStatementInput("noun-clamp")
        .setCheck(["adjective-nominative-singular-masculine", 
                    "relative-pronoun-singular-masculine"]);
    this.setOutput(true, "nominative-singular-third");
    this.setTooltip('Parse: nominative singular third person masculine pronoun');
  }
};

// Ei: nominative plural third person masculine pronoun
Blockly.Blocks['ei'] = {
  init: function() {
    this.setColour(70);
    this.appendDummyInput()
        .appendField("ei");
    this.appendStatementInput("noun-clamp")
        .setCheck(["adjective-nominative-plural-masculine", 
                    "relative-pronoun-plural-masculine"]);
    this.setOutput(true, "nominative-plural-third");
    this.setTooltip('Parse: nominative plural third person masculine pronoun');
  }
};

// Ea: nominative singular third person feminine pronoun
Blockly.Blocks['ea-feminine'] = {
  init: function() {
    this.setColour(70);
    this.appendDummyInput()
        .appendField("ea");
    this.appendStatementInput("noun-clamp")
        .setCheck(["adjective-nominative-singular-feminine", 
                    "relative-pronoun-singular-feminine"]);
    this.setOutput(true, "nominative-singular-third");
    this.setTooltip('Parse: nominative singular third person feminine pronoun');
  }
};

// Eae: nominative plural third person feminine pronoun
Blockly.Blocks['eae'] = {
  init: function() {
    this.setColour(70);
    this.appendDummyInput()
        .appendField("eae");
    this.appendStatementInput("noun-clamp")
        .setCheck(["adjective-nominative-plural-feminine", 
                    "relative-pronoun-plural-feminine"]);
    this.setOutput(true, "nominative-plural-third");
    this.setTooltip('Parse: nominative plural third person feminine pronoun');
  }
};

// Id: nominative singular third person neuter pronoun
Blockly.Blocks['id'] = {
  init: function() {
    this.setColour(70);
    this.appendDummyInput()
        .appendField("id");
    this.appendStatementInput("noun-clamp")
        .setCheck(["adjective-nominative-singular-neuter", 
                    "relative-pronoun-singular-neuter"]);
    this.setOutput(true, "nominative-singular-third");
    this.setTooltip('Parse: nominative singular third person neuter pronoun');
  }
};

// Ea: nominative plural third person neuter pronoun
Blockly.Blocks['ea-neuter'] = {
  init: function() {
    this.setColour(70);
    this.appendDummyInput()
        .appendField("ea");
    this.appendStatementInput("noun-clamp")
        .setCheck(["adjective-nominative-plural-neuter", 
                    "relative-pronoun-plural-neuter"]);
    this.setOutput(true, "nominative-plural-third");
    this.setTooltip('Parse: nominative plural third person neuter pronoun');
  }
};
