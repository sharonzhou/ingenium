
var Translation = {}; 
var completed = false, completedBlank = false, hasInput = false;
var chosen = false;

var USERS_REF = "users", EXERCISES_REF = "exercises";
var userId = localStorage.getItem('userId');
// Start timer when a click is added to this exercise
var frame_id = window.frameElement.id;
var frame_num = parseInt(frame_id.slice(-1));
var nextframe_num = parseInt(frame_num) + 1;
var wrapperNum = frame_id.slice(-3,-2);
var nextWrapperNum = parseInt(wrapperNum) + 1;

/**
 * Check if blocks are aligned and the puzzle is completed.
 */
Translation.checkCompleted = function() {
  var blocks = Blockly.mainWorkspace.getTopBlocks(true);
  var rootBlock;
  for (var i = 0; i < blocks.length; i++) {
    var block = blocks[i];

    // Store root block of first block in array
    if (i == 0) {
      rootBlock = block.getRootBlock();
    } 
    // Check if all root blocks match
    if (rootBlock != block.getRootBlock()) {
      // Previously completed, but made undone.
      if (completed) {
        rootBlock.setDisabled(false);    
        rootBlock.setMovable(true);
        // Get rid of checkmark
        var evaluation = window.frameElement.id + '-evaluation';
        $('#' + evaluation, parent.document).html('');
        // Return workspace to white
        $('.blocklySvg').css('background-color', '#ffffff');
        completed = false;
      }
      // Root blocks do not match, so puzzle is incomplete. Do nothing.
      return;
    }
  }

  // Puzzle completed. Highlight and disable movement on root.
  var evaluation = 'translation-' + frame_num + '-evaluation';
  if (!completed) {
    // Replace evaluation with a checkmark of completion.
    // var message = '&checkmark;';

    // Replace evaluation with input box for translation.
    var input = '<input id="input-' + frame_num + '" type="text" placeholder="Enter translation..."></input>';
    var message = input;
    setTimeout(function(){ 
      $('#' + evaluation, parent.document).animate({'opacity': 0}, 200, function () {
          $(this).html(message);
      }).animate({'opacity': 1}, 700);
    }, 300);

    // Flash workspace to indicate completion
    setTimeout(function() {
      $('.blocklySvg').animate({'opacity': .2}, 200, function(){
      }).animate({'opacity': 1}, 600);    
    }, 300);

    // Set completed bool to true
    completed = true;
  }
  rootBlock.completionUiEffect();
  $('.blocklySvg').css('background-color', 'rgba(0, 204, 204, 0.2)');
  rootBlock.setMovable(false);

};

// For the 'enter translation' part
var evaluation = 'translation-' + frame_num + '-evaluation';
if ($("#" + evaluation, parent.document)) {
  // Bind listener to input
  $("#" + evaluation, parent.document).bind("change paste keyup", function() {
    var userInput = $('#input-' + frame_num, parent.document).val();
    var inputWidth = '580px';
    if (frame_id == 2) {
      inputWidth = '800px';
    }
    $('#input-' + frame_num, parent.document).css('width', inputWidth);
    // COMMENTED OUT FOR PRODUCTION: 
    // console.log('user input', userInput);
    if ($('#savedText', parent.document) != undefined) {
      $('#savedText', parent.document).remove();      
    }
    // Don't log blank input, log last input
    if (!(userInput.length === 0 || !userInput.trim()) && !completedBlank) {
      var savedText = '<span id="savedText">saved</span>';
      $('#input-' + frame_num, parent.document).after(savedText);          
      
      // Go to next warmup if this is the last translation exercise in the series AND user has entered a translation
      if (frame_num == 3) {
        var button = $('#next-btn', parent.document);
        button.removeClass("btn-disabled").addClass("btn-enabled");
        button.click(function() {
            Blockly.goToNextFill();
        });
      }
    }
  });
}

/**
 * Initialize Blockly. Called on page load.
 */
Translation.init = function() {
  // Regular injection, without toolbox
  Blockly.inject(document.body,
    {sounds: true});
  window.parent.blocklyLoaded(Blockly);

  Blockly.Xml.domToWorkspace(Blockly.mainWorkspace,
      document.getElementById('startBlocks'));

  // iFrame height and y positioning of blocks within workspace
  var bodyHeight = $('body').css('height');
  iFrameHeight = bodyHeight * .4;
  $('#' + window.frameElement.id, parent.document).css('height', iFrameHeight);

  // Position blocks next to each other
  var blocks = Blockly.mainWorkspace.getTopBlocks(true);
  var margin = 30, positionX = margin;
  var iFrameHeight = 0, iFrameWidth = 0;
  var colourSector = Math.floor(360 / blocks.length);

  for (var i = 0, block; block = blocks[i]; i++) {

    // Cannot delete blocks
    block.setDeletable(false);
    
    // If block has a dropdown, set default dropdown value to unchosen
    if (block.getFieldValue("dropdown")) {
      block.setFieldValue("choose", "dropdown");

      // Remove nob visually and logically dispose of checks
      block.setOutput(false, "all");
      block.setNobOutput(false, false, false);

      // Give disabled coloring
      block.setDisabled(true);

      // Cannot move block
      block.setMovable(false);
    }

    // Move block
    var blockHW = block.getHeightWidth();
    block.moveBy(positionX, 0);

    // If there's a external nobby, shift x position by nobby/tab width
    if (block.getFieldValue("noun-clamp") != null || 
    block.nominativeOutputConnection != null || block.genitiveOutputConnection != null || 
    block.dativeOutputConnection != null || block.accusativeOutputConnection != null ||
    block.ablativeOutputConnection != null ||
    block.outputConnection != null) {
      block.moveBy(Blockly.BlockSvg.TAB_WIDTH, 0);
    }

    // Update x position for next block
    var moveByX = blockHW.width + margin * 2;

    positionX += moveByX;

    // Update height to be the largest height among blocks 
    iFrameHeight = Math.max(iFrameHeight, blockHW.height);

    // Set consistent y position for each block in workspace
    y = parseInt(bodyHeight.slice(0,-2)) * .2;
    block.moveBy(0, y);
  }

  // If last two exercises then show translation box
  if (frame_num == 2 || frame_num == 3) {
    var input = '<input id="input-' + frame_num + '" type="text" placeholder="Enter translation..."></input>';
    var evaluation = 'translation-' + frame_num + '-evaluation';
    $('#' + evaluation, parent.document).html(input);
    var inputWidth = '800px';
    $('#input-' + frame_num, parent.document).css('width', inputWidth);
  }

  Blockly.addChangeListener(Translation.checkCompleted);
}

window.addEventListener("load", Translation.init);
