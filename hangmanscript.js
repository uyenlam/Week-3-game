		//Create a variable for the "Click to play" button
		var start = document.getElementById("startgame")

		//Words database
		var wordBank = ["vietnam","thailand","cambodia","azerbaijan","taiwan","bangladesh", "srilanka", "korea", "nepal","mongolia","indonesia"];
		console.log(wordBank);

		//Tallies
		var userTries = 0;
		var userWins = 0;
		var userWrongTry = 0;

		//Alert sound
		// var audio = new Audio();

		//----FUNCTIONS-------------------------
		



        //----PROCESS---------------------------------------

		start.onclick = function(){

            var computerChoice = wordBank[Math.floor(Math.random()*wordBank.length)].split("");
            console.log("Computer Choice-------------------")
            console.log(computerChoice);


            document.onkeyup = function(event){

                var userInput = String.fromCharCode(event.keyCode).toLowerCase();
                console.log("User Input--------------------")
                console.log(userInput);
    

                //Increases # of userTries
                userTries++;
                console.log("User Tries--------------------")
                console.log(userTries);
        

                var computerOutput = computerChoice.indexOf(userInput.toString());
                console.log("Computer Output---------------")
                console.log(computerOutput);


                if (computerOutput===-1){

                    userWrongTry++;
                    console.log("User Wrong Try------------")
                    console.log(userWrongTry);
                    // alert()
                    // audio.play();
                
                }

                else { 
                    userWins++;
                    console.log("User Wins-----------------")
                    console.log(userWins);
                    document.getElementByID('game-section').innerHTML = 
              
                }
            }
        }

        function getBlanks(arr) {

    		var htmlElements = "";
    		for (var i = 0; i < word.length; i++) {
     		htmlElements += '<span>_</span>';
    	}
    		var blanks = document.getElementById("word");
    		blanks.innerHTML = htmlElements;

}
		//Puts the guest name input in the game's welcome line
		// ('#name-input').submit(function(){
  //           var guestName = $(this).serialize();
  //       });

		// var welcomeName = "<p>Welcome, </p>" + guestName;

  //       //Change the info on line 60
		// document.querySelector('#welcome-name').innerHTML = welcomeName;
		