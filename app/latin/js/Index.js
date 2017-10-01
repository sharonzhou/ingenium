
$(document).ready(function() {
  var documentHeight = $(document).height();
  var lesson = 0;
  var modalTranslationOpen = false;
  var modalInstructionsOpen = false;

  // Open Instructions on load of first lesson
  if (lesson == 0 && !modalInstructionsOpen) {
    console.log($("#modal-instructions-link"));
    setTimeout(function() { 
      $("#modal-instructions-link").animatedModal();
      $("#modal-instructions-link").trigger('click');
    }, 1);
  }

  // Modal Instructions
  $("#modal-instructions-link").animatedModal({
    modalTarget: 'modal-instructions',
    animatedIn: 'zoomIn',
    animatedOut: 'bounceOutDown',
    color:'rgba(0, 204, 204, 1)',
    beforeOpen: function() {
      if (modalTranslationOpen) {
        $('.close-modal-translation').trigger('click');
      }
      $('input').css('border-bottom', '2px solid #ffffff');
      $('input').val('');
      $("#modal-instructions").css('-webkit-box-shadow', '10px 10px 0px #069D9D');
      $("#modal-instructions").css('-moz-box-shadow', '10px 10px 0px #069D9D');
      $("#modal-instructions").css('box-shadow', '10px 10px 0px #069D9D');
      $('html').css('overflow', '');
      $('body').css('overflow', 'hidden');
      var modalWidth = parseInt($('#modal-instructions').css('width'), 10);
      $('#instructions-animation').css('width', modalWidth*0.5); 
    },           
    afterOpen: function() {
      $('html').css('overflow', '');
      $('body').css('overflow', 'hidden');
      modalInstructionsOpen = true;
    }, 
    beforeClose: function() {
      $('html').css('overflow', '');
      $('body').css('overflow', '');
    }, 
    afterClose: function() {
      $('html').css('overflow', '');
      $('body').css('overflow', '');
    }
  });

  $("[id^=modal-translation-link]").on('click', function() {
    lastClicked = $(this).attr('id');
    exercise = lastClicked.substr(lastClicked.length - 1);
  });

  // Modal Translation
  $("[id^=modal-translation-link]").animatedModal({
    modalTarget: 'modal-translation',
    animatedIn: 'zoomIn',
    animatedOut: 'bounceOutDown',
    height: '150px',
    top: window.innerHeight - 150,
    color:'rgba(112, 112, 112, .95)',
    beforeOpen: function() {
      if (modalTranslationOpen) {
        $('.close-modal-translation').trigger('click');
      }
      $('input').css('border-bottom', '2px solid #ffffff');
      $('input').val('');
      $("#modal-translation").css('-webkit-box-shadow', '10px 10px 0px #969696');
      $("#modal-translation").css('-moz-box-shadow', '10px 10px 0px #969696');
      $("#modal-translation").css('box-shadow', '10px 10px 0px #969696');
      $('html').css('overflow', '');
      $('body').css('overflow', 'hidden');
      $('.translation-feedback').css('color', 'transparent');
    },           
    afterOpen: function() {
      modalTranslationOpen = true;
      $('html').css('overflow', '');
      $('body').css('overflow', 'hidden');

      setTimeout(function() { $('input[name="translation"]').focus() }, 1);
      var audioPlayed = false;

      var typingTimer;          
      var doneTypingInterval = 1000;

      $('input').on('keyup', function() {
        clearTimeout(typingTimer);
        typingTimer = setTimeout(doneTyping, doneTypingInterval);
      });

      $('input').on('keydown', function(e) {
        // Only care if key pressed was an alpha character / word character / letter
        if (String.fromCharCode(e.keyCode).match(/[a-zA-Z]/)) {
          clearTimeout(typingTimer);
          $('.translation-feedback').html('Checking...');
          $('.translation-feedback').css('color', '#ECECEC');
          $('input').css('border-bottom', '2px solid #ffffff');
        }
      });

      $(document).on('click','.answer', function() {
        displayAnswer();
      });

      $(document).keypress(function(e) {
        if (e.which == 13) {
            checkTranslation();
        }
      });

      function displayAnswer() {
        res = null;
        if (lesson == 0) {
            if (exercise == 0) {
              res = 'The citizens flee.';             
            } else if (exercise == 1) {
              res = 'The wife beats the table.';
            } else if (exercise == 2) {
              res = 'The dog snatched the child.';
            } else if (exercise == 3) {
              res = 'The centurion lost his sword.';
            } else if (exercise == 4) {
              res = 'The slaves carried wine.';
            } else {
              // Error - refresh current lesson
              lesson--;
              $('#continue-btn').click();
            }
          } else if (lesson == 1) {
            if (exercise == 0) {
              res = 'The agitated citizens flee.';
            } else if (exercise == 1) {
              res = 'The angered wife beats the table.';
            } else if (exercise == 2) {
              res = 'The huge dog snatched the small child.';
            } else if (exercise == 3) {
              res = 'The lazy centurion lost his sword.';
            } else if (exercise == 4) {
              res = 'The dinner is pleasing to the guests.';
            } else {
              // Error - refresh current lesson
              lesson--;
              $('#continue-btn').click();
            }
          } else if (lesson == 2) {
            if (exercise == 0) {
              res = 'The agitated citizens flee from the city.';
            } else if (exercise == 1) {
              res = 'The angered wife violently beats the table.';
            } else if (exercise == 2) {
              res = 'The huge dog snatched the small child from the fire.';
            } else if (exercise == 3) {
              res = 'The messenger gave letters to the women.';
            } else if (exercise == 4) {
              res = 'The slaves carried wine from the fields to the harbor.';
            } else {
              // Error - refresh current lesson
              lesson--;
              $('#continue-btn').click();
            }
          } else {
            // Error - refresh
            $('#continue-btn').click();
          }
          $('.translation-feedback').html(res);
          $('.translation-feedback').css('color', '#ECECEC');
      }

      function doneTyping() {
        checkTranslation();
      }

      function checkTranslation() {
        // User input
        var value = $('input').val().trim();
        if (value) {
          res = null;
          if (lesson == 0) {
            if (exercise == 0) {
              res = value.match(/^\s*(the\s)?citizens\s(flee|are\sfleeing|run\saway|are\srunning\saway|take\sflight|are\staking\sflight)\W?$/ig);              
            } else if (exercise == 1) {
              res = value.match(/^(the\s|a\s)?(wife\s((beats|strikes|hits|knocks\son|punches|whacks)|is\s(beating|striking|hitting|knocking\son|punching|whacking))|wife's\s(beating|striking|hitting|knocking\son|punching|whacking))\s(the\s|a\s)?table\W?$/ig);
            } else if (exercise == 2) {
              res = value.match(/^(the\s|a\s|an\s)?dog(\s|\shas\s|'s\s)(snatched|grabbed|seized|carried\soff)\s(the\s|a\s)?(child|infant|baby)\W?$/ig);
            } else if (exercise == 3) {
              res = value.match(/^(the\s|a\s|an\s)?centurion(\s|\shas\s|'s\s)(let\sgo(\sof)?|lost)\s(his\s|the\s|a\s)?sword\W?$/ig);
            } else if (exercise == 4) {
              res = value.match(/^(the\s|a\s|an\s)?slaves\s(have\s)?(carried|brought)\s(the\s)?wine\W?$/ig);
            } else {
              // Error - refresh current lesson
              lesson--;
              $('#continue-btn').click();
            }
          } else if (lesson == 1) {
            if (exercise == 0) {
              res = value.match(/^(the\s)?(thoroughly\smoved|agitated|disturbed|worried|anxious)\scitizens\s(flee|are\sfleeing|run\saway|are\srunning\saway|take\sflight|are\staking\sflight)\W?$/ig);
            } else if (exercise == 1) {
              res = value.match(/^(the\s|a\s|an\s)?(angered|furious|irate|angry)\s(wife\s((beats|strikes|hits|knocks\son|punches|whacks)|is\s(beating|striking|hitting|knocking\son|punching|whacking))|wife's\s(beating|striking|hitting|knocking\son|punching|whacking))\s(the\s|a\s)?table\W?$/ig);
            } else if (exercise == 2) {
              res = value.match(/^(the\s|a\s|an\s)?(huge|big|large|monstrous)\sdog(\s|\shas\s|'s\s)(snatched|grabbed|seized|carried\soff)\s(the\s|a\s)?(small|little)\s(child|infant|baby)\W?$/ig);
            } else if (exercise == 3) {
              res = value.match(/^(the\s|a\s|an\s)?(lazy|idle|cowardly)\scenturion(\s|\shas\s|'s\s)(let\sgo(\sof)?|lost)\s(his\s|the\s|a\s)?sword\W?$/ig);
            } else if (exercise == 4) {
              res = value.match(/^(the\s|a\s|an\s)?(dinner\s(pleases|is\spleasing\sto|suits)|dinner's\spleasing\sto)\s(the\s)?(guests|hosts)\W?$/ig);
            } else {
              // Error - refresh current lesson
              lesson--;
              $('#continue-btn').click();
            }
          } else if (lesson == 2) {
            if (exercise == 0) {
              res = value.match(/(^(the\s)?(thoroughly\smoved|agitated|disturbed|worried|anxious)\scitizens\s(flee|are\sfleeing|run\saway|are\srunning\saway|take\sflight|are\staking\sflight)\s(out\sof|from|out\sfrom)\s(the\s|a\s)?city\W?$|^(out\sof|from|out\sfrom)\s(the\s|a\s)?city\s(the\s)?(thoroughly\smoved|agitated|disturbed|worried|anxious)\scitizens\s(flee|are\sfleeing|run\saway|are\srunning\saway|take\sflight|are\staking\sflight)\W?$)/ig);
            } else if (exercise == 1) {
              res = value.match(/(^(violently|forcefully|loudly|vehemently)\s(the\s|a\s|an\s)(angered|furious|irate|angry)\s(wife\s((beats|strikes|hits|knocks\son|punches|whacks)|is\s(beating|striking|hitting|knocking\son|punching|whacking))|wife's\s(beating|striking|hitting|knocking\son|punching|whacking))\s(the\s|a\s)?table\W?$|^(the\s|a\s|an\s)?(angered|furious|irate|angry)\swife\s(violently|forcefully|loudly|vehemently)\s(beats|is\sbeating)\s(the\s|a\s)?table\W?$|^(the\s|a\s|an\s)?(angered|furious|irate|angry)\s(wife\s(beats|is\sbeating)|wife's\sbeating)\s(violently|forcefully|loudly|vehemently)\s(the\s|a\s)?table\W?$|^(the\s|a\s|an\s)?(angered|furious|irate|angry)\s(wife\s(beats|is\sbeating)|wife's\sbeating)\s(the\s|a\s)?table\s(violently|forcefully|loudly|vehemently)\W?$|^(the\s|a\s|an\s)?(angered|furious|irate|angry)\swife\sis\s(violently|forcefully|loudly|vehemently)\sbeating\s(the\s|a\s)?table\W?$)/ig);
            } else if (exercise == 2) {
              res = value.match(/^(the\s|a\s|an\s)?(huge|big|large|monstrous)\sdog(\s|\shas\s|'s\s)(snatched|grabbed|seized|carried\soff)\s(the\s|a\s)?(small|little)\s(child|infant|baby)\s(away\s)?from\s(the\s|a\s)?(flame|blaze|fire)\W?$|^(away\s)?from\s(the\s|a\s)?(flame|blaze|fire)[\s\S]?\s(the\s|a\s|an\s)?(huge|big|large|monstrous)\sdog(\s|\shas\s|'s\s)(snatched|grabbed|seized|carried\soff)\s(the\s|a\s)?(small|little)\s(child|infant|baby)\W?$|^(the\s|a\s|an\s)?(huge|big|large|monstrous)\sdog(\s|\shas\s|'s\s)(snatched|grabbed|seized|carried\soff)\s(away\s)?from\s(the\s|a\s)?(flame|blaze|fire)[\s\S]?\s(the\s|a\s)?(small|little)\s(child|infant|baby)\W?$/ig);
            } else if (exercise == 3) {
              res = value.match(/^(the\s|a\s)?messenger\s(has\sgiven|gave)\s(letters|epistles)\sto\s(the\s)?women\W?$/ig);
            } else if (exercise == 4) {
              res = value.match(/(^(the\s|a\s|an\s)?slaves\s(have\s)?(carried|brought)\s(the\s)?wine\s(from|away\sfrom)\s(the\s)?(farms|fields)\sto\s(the\s|a\s|an\s)?(harbou?r|port|refuge)\W?$|^(from|away\sfrom)\s(the\s)?(farms|fields)\sto\s(the\s|a\s|an\s)?(harbou?r|port|refuge)[\s\S]?\s(the\s|a\s|an\s)?slaves\s(have\s)?(carried|brought)\s(the\s)?wine\W?$|^(from|away\sfrom)\s(the\s)?(farms|fields)[\s\S]?\s(the\s|a\s|an\s)?slaves\s(have\s)?(carried|brought)\s(the\s)?wine\sto\s(the\s|a\s|an\s)?(harbou?r|port|refuge)\W?$|^(from|away\sfrom)\s(the\s)?(farms|fields)[\s\S]?\s(the\s|a\s|an\s)?slaves\s(have\s)?(carried|brought)\sto\s(the\s|a\s|an\s)?(harbou?r|port|refuge)\s(the\s)?wine\W?$|^to\s(the\s|a\s|an\s)?(harbou?r|port|refuge)[\s\S]?\s(the\s|a\s|an\s)?slaves\s(have\s)?(carried|brought)\s(the\s)?wine\s(from|away\sfrom)\s(the\s)?(farms|fields)\W?$|^to\s(the\s|a\s|an\s)?(harbou?r|port|refuge)[\s\S]?\s(the\s|a\s|an\s)?slaves\s(have\s)?(carried|brought)\s(from|away\sfrom)\s(the\s)?(farms|fields)\s(the\s)?wine\W?$|^(the\s|a\s|an\s)?slaves\s(have\s)?(carried|brought)\s(from|away\sfrom)\s(the\s)?(farms|fields)\s(the\s)?wine\sto\s(the\s|a\s|an\s)?(harbou?r|port|refuge)\W?$|^(the\s|a\s|an\s)?slaves\s(have\s)?(carried|brought)\sto\s(the\s|a\s|an\s)?(harbou?r|port|refuge)\s(from|away\sfrom)\s(the\s)?(farms|fields)\s(the\s)?wine\W?$|^(the\s|a\s|an\s)?slaves\s(have\s)?(carried|brought)\s(from|away\sfrom)\s(the\s)?(farms|fields)\sto\s(the\s|a\s|an\s)?(harbou?r|port|refuge)\s(the\s)?wine\W?$|^(the\s|a\s|an\s)?slaves\s(have\s)?(carried|brought)\sto\s(the\s|a\s|an\s)?(harbou?r|port|refuge)\s(the\s)?wine\s(from|away\sfrom)\s(the\s)?(farms|fields)\W?$)/ig);
            } else {
              // Error - refresh current lesson
              lesson--;
              $('#continue-btn').click();
            }
          } else {
            // Error - refresh
            $('#continue-btn').click();
          }

          if (res) {
            $('input').css('border-bottom', '2px solid #63FF63');
            $('.translation-feedback').css('color', '#63FF63');
            $('.translation-feedback').html('✓&nbsp;&nbsp;Correct');
            if (!audioPlayed) {
              var audioElement = document.createElement('audio');
              audioElement.setAttribute('src', 'audio/success-short.wav');
              audioElement.play();
              audioPlayed = true;
            }
          } else {
            $('input').css('border-bottom', '2px solid #FF6A51');
            $('.translation-feedback').css('color', '#FF6A51');
            $('.translation-feedback').html('✗&nbsp;&nbsp;Keep Trying <a class="answer">(show an answer)</a>');
            $('.answer').css('color', '#ECECEC');
            $('.answer').css('cursor', 'pointer');
          }
        } else {
            $('.translation-feedback').html('Checking...');
            $('.translation-feedback').css('color', 'transparent');
        }
      }
    }, 
    beforeClose: function() {
      $('html').css('overflow', '');
      $('body').css('overflow', '');
      audioPlayed = false;
    }, 
    afterClose: function() {
      modalTranslationOpen = false;
      $('html').css('overflow', '');
      $('body').css('overflow', '');
      $('input').css('border-bottom', '2px solid #ffffff');
      $('input').val('');
    }
  });

  // Modal Feedback
  $("#modal-feedback-link").animatedModal({
    modalTarget: 'modal-feedback',
    animatedIn: 'zoomIn',
    animatedOut: 'bounceOutDown',
    color:'rgba(0, 204, 204, 1)',
    beforeOpen: function() {
        if (modalTranslationOpen) {
          $('.close-modal-translation').trigger('click');
        }
        $('input').css('border-bottom', '2px solid #ffffff');
        $('input').val('');
        $("#modal-feedback").css('-webkit-box-shadow', '10px 10px 0px #069D9D');
        $("#modal-feedback").css('-moz-box-shadow', '10px 10px 0px #069D9D');
        $("#modal-feedback").css('box-shadow', '10px 10px 0px #069D9D');
        $('html').css('overflow', '');
        $('body').css('overflow', 'hidden');
    },           
    afterOpen: function() {
      $('html').css('overflow', '');
      $('body').css('overflow', 'hidden');
      $('input').on('focus', function() {
        $('input').css('animation', 'none');
      });
      $('#submit-btn').click(function() {
        $('#feedback-form').submit();
      });
    }, 
    beforeClose: function() {
      $('html').css('overflow', '');
      $('body').css('overflow', '');
    }, 
    afterClose: function() {
      $('html').css('overflow', '');
      $('body').css('overflow', '');
    }
  });

  $('#continue-btn').click(function() {
    // Scroll to top of page
    window.scrollBy(0, -documentHeight);

    lesson++;

    if (lesson > 2) {
      $('#modal-feedback-link').click();
      // Restart
      lesson = 0;
    }

    var f0 = document.getElementById("frame-0");
    var f1 = document.getElementById("frame-1");
    var f2 = document.getElementById("frame-2");
    var f3 = document.getElementById("frame-3");
    var f4 = document.getElementById("frame-4");

    f0.src = "sentences/" + lesson.toString() + "/0.html";
    f1.src = "sentences/" + lesson.toString() + "/1.html";
    f2.src = "sentences/" + lesson.toString() + "/2.html";
    f3.src = "sentences/" + lesson.toString() + "/3.html";
    f4.src = "sentences/" + lesson.toString() + "/4.html";
  });

});

function blocklyLoaded(blockly) {
	// Called once Blockly is fully loaded.
	window.Blockly = blockly;
}