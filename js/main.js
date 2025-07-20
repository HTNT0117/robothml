// https://github.com/pepperhacking/studiotoolkit/blob/master/doc/js_robotutils.md
// http://doc.aldebaran.com/2-5/dev/js/index-1.0.html


// document.getElementById("toDialog").addEventListener('touchmove', toDialogSwipe);
// document.getElementById("toDance").addEventListener('touchmove', toDanceSwipe);

//helper function
function change_btn_text(id, text){
  document.getElementById(id).textContent = text;
}

function previous_topic(){
  RobotUtils.onService(function(ALMemory) {
    ALMemory.raiseEvent('sequence', 6);
  });
}

function stopTalking(){
  RobotUtils.onService(function(ALMemory) {
    ALMemory.raiseEvent('sequence', 7);
  });
}

function startAgain(){
  RobotUtils.onService(function(ALMemory) {
    ALMemory.raiseEvent('restartApplication', 1);
  });
}

function go_to_food_recommender(){
  subscribe_PepperQiMessaging()
  RobotUtils.onService(function(ALMemory) {
    ALMemory.raiseEvent('start_chitchat', 0);
  });
}

function stop_and_say_goodbye(){
  RobotUtils.onServices(function(ALLeds, ALTextToSpeech) {
    ALLeds.randomEyes(2.0);
    ALTextToSpeech.say("Good bye, have a good day!");
    
  });
  subscribe_PepperQiMessaging();
}

var session;
var suggestion_product = "";

function doc(){
  document.write(displayed_text);
}

function mood_onunload(){
  text = "Do you prefer a stronger or weaker taste of coffee?"
}
function subscribe_PepperQiMessaging(){
  try {
  QiSession( function (s) {
    console.log('connected!');
    session = s;
    s.service('ALMemory').then(function (memory) {
      memory.subscriber('Dialog/Tag').then(function (subscriber) {
        subscriber.signal.connect(dialogHandler);
      });
    });
  });
  } catch (err) {
    $('#display').text("Error");}
}

function dialogHandler(value){
  if(value == "HELLO"){
    hello();
  }else if (value == "NAME"){
    askedName();}
  // else if (value == "MET_B4"){
  //   MetBefore();
  // }else if (value == "MOOD"){
  //   mood();
  // }else if(value == "WETHER"){
  //   wether();
  // }else if (value == "WEEKEND"){
  //   weekend();
  // }else if (value == "COFFEE_PHILOSOPHICAL"){
  //   coffee_phylosophical();
  // }else if (value == "COFFEE_EXPLANATION"){
  //   coffee_explaination();
  // }else if (value == "JUXTAPOSITION_EXPLANATION"){
  //   juxtaposition_explaination();
  // }else if (value == "FROM"){
  //   from();
  // }else if (value == "SPORT"){
  //   sport();
  // }else if (value == "FAVCOLOR"){
  //   favcolor();
  // }else if (value == "ANIMALS"){
  //   animals();
  // }else if (value == "CAMPUS"){
  //   campus();
  // }else if (value == "PETS"){
  //   pets();
  // }else if (value == "APPEARENCE"){
  //   appearence();
  // }else if (value == "MUSIC"){
  //   music();
  // }
  else if (value == "ORDER"){
    order();
  }else if (value == "DRINK"){
    drink();
  }else if (value == "OTHER_DRINK"){
    other_drink();
  }else if (value == "LATTE"){
    latte();
  }else if (value == "COFFEE_START"){
    coffee_start();
  }else if (value == "COFFEE_HOT"){
    coffee_hot();
  }else if (value == "COFFEE_HOT_MILK"){
    coffee_hot_milk();
  }else if (value == "MILK"){
    milk();
  }else if (value == "COFFEE_HOT_MILK_STRONGER"){
    hot_milk_stronger();
  }else if (value == "COFFEE_HOT_MILK_WEAKER"){
    hot_milk_weaker();
  }else if (value == "COFFEE_HOT_NOMILK"){
    coffee_hot_nomilk();
  }else if (value == "COFFEE_COLD"){
    coffe_cold();
  }else if (value == "MILK_OTHER"){
    milk_other();
  }else if (value == "SYRUP"){
    syrup();
  }else if (value == "SYRUP_CHOICE"){
    window.location.href = "fiveBtn.html";
  }else if (value == "WHICH_SNACK"){
    window.location.href = "snackBtn.html";
  }else if (value == "FINALISE_DRINK"){
    finalise_drink();
  }else if (value == "MILK_FINAL"){
    milk_final();
  }else if (value == "SYRUP_FINAL"){
    syrup_final();
  }else if (value == "FOOD_ASK"){
    food_ask();
  }else if (value == "ANOTHER"){
    another();
  }else if (value == "ORDER_END"){
    order_end();
  }else if (value == "GOODBYE"){
    goodbye();
  } else if (value == "RECOMMEND"){
    twoBtn_switch_text('may I try to recommend you something?');
    change_btn_text('neg', 'No');
    change_btn_text('pos', "Yes");
  }  else if (value == "RECOMMEND_2"){
    twoBtn_switch_text('Great! Do you want something to drink?');
    change_btn_text('neg', 'No');
    change_btn_text('pos', "Yes");
  }  else if (value == "EAT"){
    twoBtn_switch_text('Would you like something to eat?');
    change_btn_text('neg', 'No');
    change_btn_text('pos', "Yes");
    //window.location.href = "fiveBtn.html"
  }  else if (value == "NO_RECOMMEND"){
    twoBtn_switch_text("So you're here just to see me, right?");
    change_btn_text('neg', 'No');
    change_btn_text('pos', "Yes");
  }  else if (value == "FOOD"){
    twoBtn_switch_text('Would you like me to present you with snack options?');
    change_btn_text('neg', 'No');
    change_btn_text('pos', "Yes");
  }  else if (value == "SNACKS"){
    // twoBtn_switch_text('Do you know what you want?');
    // change_btn_text('neg', 'No');
    // change_btn_text('pos', "Yes");
    window.location.href = "snackBtn.html";
  } else if (value == "SUGGEST_SNACK"){
    // twoBtn_switch_text('Do you want me to suggest you one?');
    window.location.href = "twoBtn.html?text=Do you want me to suggest you one??&fir=Yes&sec=No"
  } else if (value == "SNACK_PICKED"){
    twoBtn_switch_text('Do you like my suggestion?');
    change_btn_text('neg', 'No');
    change_btn_text('pos', "Yes");
  } else if (value == "ANOTHER_SUGGESTION"){
    twoBtn_switch_text('Do you want me to suggest you something else?');
    change_btn_text('neg', 'No');
    change_btn_text('pos', "Yes");
  } else if (value == "TEA"){
    window.location.href = "twoBtn.html?text=do you prefer herbal or regular tea?&fir=regular&sec=herbal"
  } else if (value == "HERBAL"){
    window.location.href = "twoBtn.html?text=Which is more appealing to you?&fir=regular&sec=fruity"
  } else if (value == "MILK_ASK"){
    window.location.href = "twoBtn.html?text=Would you like your drink with milk?&fir=yes&sec=no"
  } else if (value == "HERBAL_REG"){
    herbal_reg();
  } else if (value == "INFUSED"){
    infuse();
  } else if (value == "ANOTHER_SUGGESTION"){
    twoBtn_switch_text('Do you want me to suggest you something else?');
    change_btn_text('neg', 'No');
    change_btn_text('pos', "Yes");
  } else if (value == "TEA_REG"){
    tea_reg();
  }
}
function twoBtn_switch_text(text){
  $('#display').text(text)
}
function startchitchat(){
  RobotUtils.onService(function(ALMemory) {
    ALMemory.raiseEvent('start_chitchat', 1);
  }); 
}

function first_ans(){
  RobotUtils.onService(function(ALMemory) {
    ALMemory.raiseEvent('sequence', 1);
  }); 
}

function sen_ans(){
  RobotUtils.onService(function(ALMemory) {
    ALMemory.raiseEvent('sequence', 2);
  }); 
}
function thir_ans(){
  RobotUtils.onService(function(ALMemory) {
    ALMemory.raiseEvent('sequence', 3);
  }); 
}
function four_ans(){
  RobotUtils.onService(function(ALMemory) {
    ALMemory.raiseEvent('sequence', 4);
  }); 
}
function five_ans(){
  RobotUtils.onService(function(ALMemory) {
    ALMemory.raiseEvent('sequence', 5);
  }); 
}

function six_ans(){
  RobotUtils.onService(function(ALMemory) {
    ALMemory.raiseEvent('sequence', 6);
  }); 
}

function sev_ans(){
  RobotUtils.onService(function(ALMemory) {
    ALMemory.raiseEvent('sequence', 7);
  }); 
}

function eig_ans(){
  RobotUtils.onService(function(ALMemory) {
    ALMemory.raiseEvent('sequence', 8);
  }); 
}

function nin_ans(){
  RobotUtils.onService(function(ALMemory) {
    ALMemory.raiseEvent('sequence', 9);
  }); 
}

function ten_ans(){
  RobotUtils.onService(function(ALMemory) {
    ALMemory.raiseEvent('sequence', 10);
  }); 
}

// order
function order(){
  window.location.href = "twoBtn.html?text=Are you hear to drink or eat?&fir=Yes&sec=No"
}

function infuse(){
  window.location.href = "twoBtn.html?text=you can choose between red berry and Blackberry&fir=Red berry&sec=Blackberry"
}

function tea_reg(){
  window.location.href = "fourBtn.html?text=Which is more appealing to you?&fir=earl&sec=decaf&thir=green&four=cranberry"
}

function herbal_reg(){
  window.location.href = "threeBtn.html?text=Which is more appealing to you?&fir=lemongrass&sec=peppermint&thir=camomile"
}

function drink(){
  $('#display').text('Are you in the mood for coffee today?')
  document.getElementById("neg").hidden = "";
  document.getElementById("pos").hidden = "";
  change_btn_text('pos', 'yes');
  change_btn_text('neg', 'no');

}

function other_drink(){
  $('#display').text(' Which one would you prefer?')
  change_btn_text('pos', 'latte');
  change_btn_text('neg', 'tea');
}

function coffee_hot_nomilk() {
  $('#display').text(' Do you prefer long or short drink?')
  change_btn_text('pos', 'long');
  change_btn_text('neg', 'short');
}

function latte(){
  window.location.href = "threeBtn.html?text=cafe offers Matcha, Turmeric and Chai Latte.&fir=matcha&sec=turmeric&thir=chai"
}

function coffee_start(){
  $('#display').text('Would you like hot or cold coffee?')
  change_btn_text('pos', 'hot');
  change_btn_text('neg', 'cold');
}

function coffee_hot(){
  $('#display').text('Would you like a milk based coffee?')
  change_btn_text('pos', 'yes');
  change_btn_text('neg', 'no');
}

function coffee_hot_milk(){
  window.location.href = "twoBtn.html?text=Do you prefer a stronger or weaker taste?&fir=Stronger&sec=Weaker"
  
}
function hot_milk_stronger(){
  $('#display').text('Do you like foamed milk in your coffee?')
  change_btn_text('pos', 'yes');
  change_btn_text('neg', 'no');
}

function hot_milk_weaker(){
  $('#display').text('Would you like some hot chocolate in it? ')
  change_btn_text('pos', 'yes');
  change_btn_text('neg', 'no');
}

function milk(){
  window.location.href = "fourBtn.html?text=And what type of milk to your drink?&fir=cow&sec=coconut&thir=almond&four=oat"
}

function coffee_hot_drink_stronger(){
  $('#display').text('Do you like foamed milk in your coffee? ')
  change_btn_text('pos', 'yes');
  change_btn_text('neg', 'no');
}

function coffe_cold(){
  $('#display').text('do you want it with hot chocolate?')
  change_btn_text('pos', 'yes');
  change_btn_text('neg', 'no');
}

function milk_other(){
  milk();
}

function syrup(){
  window.location.href = "twoBtn.html?text=Would you like some syrup in your drink?&fir=yes&sec=no"
}

function subscribe_final_suggestion(){
  try {
    QiSession( function (s) {
      console.log('connected!');
      session = s;
      s.service('ALMemory').then(function (memory) {
        memory.subscriber('ALTextToSpeech/CurrentSentence').then(function (subscriber) {
          subscriber.signal.connect(subsribe_final_suggestion_helper);
        });
      });
    });
    } catch (err) {
        $('#display').text("Error");
    }
}

function subsribe_final_suggestion_helper(value){
  if(value.includes('like my suggestion')){
    if(value != ''){
      $('#display').text(value)
      if (value.length >=40){

        $( "#display" ).css("font-size", "40px");
  
      }else{
  
        $( "#display" ).css("font-size", "70px");
  
      }
    }
  }
}

function subscribe_last_answer(){
  try {
    QiSession( function (s) {
      console.log('connected!');
      session = s;
      s.service('ALMemory').then(function (memory) {
        memory.subscriber('ALTextToSpeech/CurrentSentence').then(function (subscriber) {
          subscriber.signal.connect(subsribe_last_answer_helper);
        });
      });
    });
    } catch (err) {
        $('#display').text("Error");
    }
}

function subsribe_last_answer_helper(value){
  subscribe_PepperQiMessaging()
  if(value != ''){
    $('#display').text(value)
    if (value.length >=100){

      $( "#display" ).css("font-size", "50px");

    }else{

      $( "#display" ).css("font-size", "70px");

    }
  }
  if(value.contains("drink or eat")){
    window.location.href = "twoBtn.html?text=Are you hear to drink or eat?&fir=Yes&sec=No"
  }
  //change the css style based on the length of the text
  const display_class = document.querySelector('display');
  // if (value.length >=20){
  //   display_class.className = 'long-text';
  // }else{
  //   display_class.className = 'headline';
  //}
}

// function subsribe_last_answer(){
//   try {
//     QiSession( function (s) {
//       console.log('connected!');
//       session = s;
//       s.service('ALMemory').then(function (memory) {
//         memory.subscriber('Dialog/LastAnwer').then(function (subscriber) {
//           subscriber.signal.connect(subsribe_last_answer_helper);
//         });
//       });
//     });
//     } catch (err) {
//       $('#display').text("Error");}
// }
// function finalise_drink(){
//   window.location.href = "twoBtn.html"
//   document.getElementById("neg").hidden = "hidden";
//   document.getElementById("pos").hidden = "hidden";
//   subsribe_last_answer();
  
// }

// function subsribe_last_answer_helper(value){
//   $('#display').text(value);
//   subscribe_PepperQiMessaging();
// }

// function food_ask(){
//   window.location.href = "twoBtn.html?text=Do you like my suggestion?&fir=Yes&sec=No"
// }

function another(){
  $('#display').text("Do you want a diffrent suggestion?");
  document.getElementById("neg").hidden = "";
  document.getElementById("pos").hidden = "";
  change_btn_text('pos', 'yes');
  change_btn_text('neg', 'no');
}

function order_end(){
  $('#display').text("Enjoy");
  document.getElementById("neg").hidden = "hidden";
  document.getElementById("pos").hidden = "hidden";
}

function goodbye(){
  window.location.href='index.html'
  // $('#display').text("Have a good day and till next time.");
  // document.getElementById("neg").hidden = "hidden";
  // document.getElementById("pos").hidden = "hidden";
  // setTimeout(function () {
  //   window.location.href='index.html'
  // }, 5000);

}



function hello(){
  // $('#display').text("Hello");
  // document.getElementById("yes").hidden = "hidden";
  // document.getElementById("no").hidden = "hidden";
  window.location.href = "smallTalk.html"
}

function MetBefore(){
  // $('#display').text("Have we met before?");

  // document.getElementById("yes").hidden = "";
  // document.getElementById("no").hidden = "";
  
  // // document.getElementById("yes").onclick = meet_before;
  // change_btn_text('yes', 'yes')
  // // document.getElementById("no").onclick = not_meet_before;
  // change_btn_text('no', 'no')
  window.location.href = "smallTalk.html"
}

function askedName(){
  // $('#display').text("What is your name.");
  // document.getElementById("yes").hidden = "hidden";
  // document.getElementById("no").hidden = "hidden";
  window.location.href = "smallTalk.html"
}

// twoBtn.html
function mood(){
  // window.location.href = "twoBtn.html?text=How are you?&fir=Yes&sec=No"
  window.location.href = "smallTalk.html"

}


// smalltalkHandler.html

//weather #1
function wether(){
  // document.getElementById("neg").hidden = "";
  // document.getElementById("pos").hidden = "";
  // $('#display').text("what do you think about the weather today?");
  // change_btn_text('pos', 'good');
  // change_btn_text('neg', 'not good');
  // // document.getElementById("pos").onclick = wether_good;
  // // document.getElementById("neg").onclick = wether_not_good;
  window.location.href = "smallTalk.html"
}

// function wether_good(){
//   $('#display').text("ah, a beautiful day!");
//   RobotUtils.onService(function(ALMemory) {
//     ALMemory.raiseEvent('weather-good', 1);
//   }); 
// }

// function wether_not_good(){
//   RobotUtils.onService(function(ALMemory) {
//     ALMemory.raiseEvent('weather-good', 0);
//   }); 
//   $('#display').text("oh. will it be nice tomorrow?");
//   change_btn_text('pos', 'yes');
//   change_btn_text('neg', 'not');
//   document.getElementById("pos").onclick = wether_good_tomorrow;
//   document.getElementById("neg").onclick = wether_not_good_tomorrow;
// }

// function wether_good_tomorrow(){
//   RobotUtils.onService(function(ALMemory) {
//     ALMemory.raiseEvent('weather-good-tomorrow', 1);
//   }); 
//   $('#display').text("wonderful!");
// }

// function wether_not_good_tomorrow(){
//   RobotUtils.onService(function(ALMemory) {
//     ALMemory.raiseEvent('weather-good-tomorrow', 0);
//   }); 
//   $('#display').text("that's too bad. Let's talk about something else.");
// }

// weekend #2

function weekend(){
  // document.getElementById("neg").hidden = "";
  // document.getElementById("pos").hidden = "";
  // $('#display').text("what did you do this weekend?");
  // change_btn_text('neg', 'nothing');
  // change_btn_text('pos', 'something');
  // // document.getElementById("neg").onclick = weekend_nothing;
  // // document.getElementById("pos").onclick = weekend_something;
  window.location.href = "smallTalk.html"

}

// function weekend_nothing(){
//   $('#display').text("I see. I hope your next weekend will be a good one!");
//   document.getElementById("neg").hidden = "hidden";
//   document.getElementById("pos").hidden = "hidden";
//   RobotUtils.onService(function(ALMemory) {
//     ALMemory.raiseEvent('weekend', 0);
//   });
// }

// function weekend_something(){
//   $('#display').text("that sounds exciting!!! Did you like it?");
//   change_btn_text('neg', 'no');
//   change_btn_text('pos', 'yes');
//   // document.getElementById("neg").onclick = weekend_somthing_yes;
//   // document.getElementById("pos").onclick = weekend_something_no;
//   RobotUtils.onService(function(ALMemory) {
//     ALMemory.raiseEvent('weekend', 1);
//   });
// }

// function weekend_somthing_yes(){
//   $('#display').text("That's great!");
//   RobotUtils.onService(function(ALMemory) {
//     ALMemory.raiseEvent('weekend_somthing_yes', 1);
//   });
// }

// function weekend_somthing_no(){
//   $('#display').text("still better than doing nothingnothing");
//   RobotUtils.onService(function(ALMemory) {
//     ALMemory.raiseEvent('weekend_somthing_yes', 0);
//   });
// }

// coffee_phylosophical #3
function coffee_phylosophical(){
  // document.getElementById("neg").hidden = "";
  // document.getElementById("pos").hidden = "";
  // $('#display').text(" Why do you think that is?");
  // change_btn_text('neg', 'I know');
  // change_btn_text('pos', "I don't know");
  // document.getElementById("neg").onclick = coffee_phylosophical_know;
  // document.getElementById("pos").onclick = coffee_phylosophical_not_know;
  window.location.href = "smallTalk.html"
}

// function coffee_phylosophical_know(){
//   $('#display').text("That's right!");
//   RobotUtils.onService(function(ALMemory) {
//     ALMemory.raiseEvent('coffee_phylosophical_know', 1);
//   });

// }

// function coffee_phylosophical_not_know(){
//   $('#display').text("That's alright!");
//   RobotUtils.onService(function(ALMemory) {
//     ALMemory.raiseEvent('coffee_phylosophical_know', 0);
//   });

// }

// // coffee_phylosophical #4
// function coffee_explaination(){
//   document.getElementById("neg").hidden = "";
//   document.getElementById("pos").hidden = "";
//   $('#display').text("That's an interesting juxtaposition, isn't it?");
//   change_btn_text('neg', 'No');
//   change_btn_text('pos', "Yes");
//   // document.getElementById("pos").onclick = coffee_explaination_yes;
//   // document.getElementById("neg").onclick = coffee_explaination_no;
// }

// function coffee_explaination_yes(){
//   $('#display').text("I guess that's why there is such a thing as the coffee house philosopher!");
//   document.getElementById("neg").hidden = "hidden";
//   document.getElementById("pos").hidden = "hidden";
//   RobotUtils.onService(function(ALMemory) {
//     ALMemory.raiseEvent('coffee_explaination', 1);
//   });
// }

// function coffee_explaination_no(){
//   $('#display').text("Alright, maybe it was a strange idea!");
//   document.getElementById("neg").hidden = "hidden";
//   document.getElementById("pos").hidden = "hidden";
//   RobotUtils.onService(function(ALMemory) {
//     ALMemory.raiseEvent('coffee_explaination', 0);
//   });
// }

// // juxtaposition_explaination #5
// function juxtaposition_explaination(){
//   document.getElementById("neg").hidden = "";
//   document.getElementById("pos").hidden = "";
//   $('#display').text("I had to look it up too! It's when two things being seen or placed close together have a contrasting effect. Like drinking something very slowly to speed you up! Got it?");
//   change_btn_text('neg', 'No');
//   change_btn_text('pos', "Yes");
//   // document.getElementById("pos").onclick = juxtaposition_explaination_yes;
//   // document.getElementById("neg").onclick = juxtaposition_explaination_no;
// }

// function juxtaposition_explaination_yes(){
//   $('#display').text("Great!");
//   RobotUtils.onService(function(ALMemory) {
//     ALMemory.raiseEvent('juxtaposition_explaination', 1);
//   });
// }

// function juxtaposition_explaination_no(){
//   $('#display').text("Yeah, it's a bit difficult, I'm not sure I fully understood it either.");
//   RobotUtils.onService(function(ALMemory) {
//     ALMemory.raiseEvent('juxtaposition_explaination', 0);
//   });
// }

// from #6

function from(){
  // document.getElementById("neg").hidden = "";
  // document.getElementById("pos").hidden = "";
  // $('#display').text("where are you from?");
  // change_btn_text('neg', 'Else');
  // change_btn_text('pos', "UK");
  // // document.getElementById("pos").onclick = from_UK;
  // // document.getElementById("neg").onclick = from_else;
  window.location.href = "smallTalk.html"

}

// function from_UK(){
//   $('#display').text("It's lovely in here. And where exactly?");
//   RobotUtils.onService(function(ALMemory) {
//     ALMemory.raiseEvent('from_UK', 1);
//   });
//   change_btn_text('neg', 'Else');
//   change_btn_text('pos', "London");
//   // document.getElementById("pos").onclick = from_London;
//   // document.getElementById("neg").onclick = from_UK_else;
// }

// function from_else(){
//   $('#display').text("ive never been there. Do you like that place?");
//   change_btn_text('neg', 'No');
//   change_btn_text('pos', "Yes");
//   // document.getElementById("pos").onclick = from_else_like;
//   // document.getElementById("neg").onclick = from_else_dislike;
//   RobotUtils.onService(function(ALMemory) {
//     ALMemory.raiseEvent('from_london', 0);
//   });
// }

// function from_else_like(){
//   $('#display').text("Lovely!!! I trust you it's gonna be good.");
//   RobotUtils.onService(function(ALMemory) {
//     ALMemory.raiseEvent('from_else_like', 1);
//   });
// }
// function from_else_dislike(){
//   $('#display').text("  Too bad. What place would you recomand then?");
//   RobotUtils.onService(function(ALMemory) {
//     ALMemory.raiseEvent('from_else_like', 0);
//   });

//   change_btn_text('neg', 'No');
//   change_btn_text('pos', "Yes");
//   // document.getElementById("pos").onclick = from_else_recommend;
//   // document.getElementById("neg").onclick = from_else_not_recommend;
// }

// function from_else_not_recommend(){
//   $('#display').text(" no worries. I'll just ask someone else.");
//   RobotUtils.onService(function(ALMemory) {
//     ALMemory.raiseEvent('from_else_like', 0);
//   });
// }

// function from_else_recommend(){
//   $('#display').text("Thank you! I'll take it into cosideration.!");
//   RobotUtils.onService(function(ALMemory) {
//     ALMemory.raiseEvent('from_else_recommend', 1);
//   });
// }

// function from_else_not_recommend(){
//   $('#display').text("Too bad. What place would you recomand then?");
//   RobotUtils.onService(function(ALMemory) {
//     ALMemory.raiseEvent('from_else_recommend', 0);
//   });
// }

// function from_london(){
//   $('#display').text(" that's really cool!?");
//   RobotUtils.onService(function(ALMemory) {
//     ALMemory.raiseEvent('from_london', 1);
//   });
// }

// function from_UK_else(){
//   $('#display').text("ive never been there. Do you like that place?");
//   change_btn_text('neg', 'No');
//   change_btn_text('pos', "Yes");
//   // document.getElementById("pos").onclick = from_UK_else_yes;
//   // document.getElementById("neg").onclick = from_UK_else_yes;
//   RobotUtils.onService(function(ALMemory) {
//     ALMemory.raiseEvent('from_UK', 0);
//   });
// }

// function from_UK_else_yes(){
//   $('#display').text(" Lovely. I've got my summer destination then.");
//   RobotUtils.onService(function(ALMemory) {
//     ALMemory.raiseEvent('from_UK_else_recommend', 1);
//   });
// }

// function from_UK_else_yes(){
//   $('#display').text(" If you say so. Though according to Google it's a rather lovely place on earth.");
//   RobotUtils.onService(function(ALMemory) {
//     ALMemory.raiseEvent('from_UK_else_recommend', 0);
//   });
// }

// sport #7
function sport(){
  // document.getElementById("neg").hidden = "";
  // document.getElementById("pos").hidden = "";
  // $('#display').text("do you have a favourite sport?");
  // change_btn_text('neg', 'No');
  // change_btn_text('pos', "Yes");
  // // document.getElementById("pos").onclick = sport_yes;
  // // document.getElementById("neg").onclick = sport_no;
  window.location.href = "smallTalk.html"

}

// function sport_yes(){
//   $('#display').text("that's cool! What sport is it?");
//   RobotUtils.onService(function(ALMemory) {
//     ALMemory.raiseEvent('sport_yes', 1);
//   });
// }

// function sport_no(){
//   $('#display').text("Okay i understad. Me neither. I'm quite fragile and so i don't do any sports.");
//   RobotUtils.onService(function(ALMemory) {
//     ALMemory.raiseEvent('sport_yes', 0);
//   });
// }

//favcolor #8

function favcolor(){
  // document.getElementById("neg").hidden = "hidden";
  // document.getElementById("pos").hidden = "hidden";
  // $('#display').text("what is your favorite color? ");
  window.location.href = "smallTalk.html"

}

// animals #9

function animals(){
  // document.getElementById("neg").hidden = "hidden";
  // document.getElementById("pos").hidden = "hidden";
  // $('#display').text("what is your favorite animal?");
  window.location.href = "smallTalk.html"
}

// campus #10

function campus(){
  // document.getElementById("neg").hidden = "hidden";
  // document.getElementById("pos").hidden = "hidden";
  // $('#display').text("why are you here today?");
  window.location.href = "smallTalk.html"
}

//pets #11
function pets(){
  document.getElementById("neg").hidden = "";
  document.getElementById("pos").hidden = "";
  $('#display').text("do you have any pets?");
  change_btn_text('neg', 'No');
  change_btn_text('pos', "Yes");
  // document.getElementById("pos").onclick = pets_yes;
  // document.getElementById("neg").onclick = pets_no;
}

function pets_yes(){
  $('#display').text("what pets? ?");
  RobotUtils.onService(function(ALMemory) {
    ALMemory.raiseEvent('pets', 1);
  });
}

function pets_no(){
  $('#display').text("that's a pity. Would you like to have one?.");
  RobotUtils.onService(function(ALMemory) {
    ALMemory.raiseEvent('pets', 0);
  });

  change_btn_text('neg', 'No');
  change_btn_text('pos', "Yes");
  // document.getElementById("pos").onclick = pets_yes_future;
  // document.getElementById("neg").onclick = pets_no_future;
}

function pets_yes_future(){
  $('#display').text("hope you'll get one soon.");
  RobotUtils.onService(function(ALMemory) {
    ALMemory.raiseEvent('pets_future', 1);
  });
}

function pets_no_future(){
  $('#display').text("understand");
  RobotUtils.onService(function(ALMemory) {
    ALMemory.raiseEvent('pets_future', 0);
  });
}
//appearence #11
function appearence(){
  document.getElementById("neg").hidden = "hidden";
  document.getElementById("pos").hidden = "hidden";
  $('#display').text("i think you look great today?");
}
 
// music #12

function music(){
  $('#display').text("do you have a single favourite music genre?");
  change_btn_text('neg', 'No');
  change_btn_text('pos', "Yes");
  document.getElementById("neg").hidden = "";
  document.getElementById("pos").hidden = "";
}

function change_dialog_page(){
  window.location.href = "dialog.html";
} 

function change_dance_page(){
  window.location.href = "dance.html";
	RobotUtils.onServices(function(ALLeds, ALTextToSpeech) {
    ALLeds.randomEyes(2.0);
    ALTextToSpeech.say("Which dance would you prefer?");
  });
} 

function change_intro_page(){
  window.location.href = "introduction.html";

  RobotUtils.onServices(function(ALLeds, ALTextToSpeech) {
    ALLeds.randomEyes(2.0);
    ALTextToSpeech.say("This is my introduction video, hope you enjoy it.");
  });

} 

function change_welcome_page(){
  window.location.href = "index.html";
} 
// stop talking when use touch the stop button
// function stopTalking() {
//   // switch to the index page
//   window.location.href = "index.html?status=exit";
 
//   // RobotUtils.onServices(function(ALLeds, ALTextToSpeech) {
//   //   ALLeds.randomEyes(2.0);
//   //   ALTextToSpeech.stopAll()
//   //   ALTextToSpeech.say("Good bye, have a good day!");
    
//   // });
// }

function toDialogSwipe() {
  change_dialog_page();
}

function toDialogSwipe() {
  change_dialog_page();
}


function toDanceSwipe() {
  change_dance_page();
}

function change_mood_page(){
  window.location.href = "twoBtn.html";
}




