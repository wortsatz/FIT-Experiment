// Here, you can define all custom functions, you want to use and initialize some variables

/* Variables
*
*
*/
const coin = _.sample(["head", "tail"]); // You can determine global (random) parameters here
// Declare your variables here



/* Helper functions
*
*
*/


//generating random participant IDs
const dec2hex = function(dec) {
    return ("0" + dec.toString(16)).substr(-2);
};

// generateId :: Integer -> String
const generateID = function(len) {
    let arr = new Uint8Array((len || 40) /2);
    window.crypto.getRandomValues(arr);
    return Array.from(arr, this.dec2hex).join("");
};
// Declare your helper functions here



/* Hooks
*
*
*/

// Error feedback if participants exceeds the time for responding
const time_limit = function(data, next) {
    if (typeof window.timeout === 'undefined'){
        window.timeout = [];
    }
    // Add timeouts to the timeoutarray
    // Reminds the participant to respond after 5 seconds
    window.timeout.push(setTimeout(function(){
          $('#reminder').text('Please answer more quickly!');
    }, 5000));
    next();
};

// compares the chosen answer to the value of `option1`
check_response = function(data, next) {
    $('input[name=answer]').on('change', function(e) {
        if (e.target.value === data.correct) {
            alert('Correct!'+ 'Your reaction time is' + data.RT);
        } else {
            alert('Incorrect! The correct answer was ', data.correct, 'Your reaction time is', data.RT); // data.RT?? not sure
        }
        next();
    })
};

// Declare your hooks here
// Error feedback if participants exceeds the time for responding
const get_ready = function(data,next){
                        // show blank screen
                        $(".magpie-view-stimulus").addClass("magpie-invisible");
                        $('#feedback').text('Get ready!');
                        (magpie.findNextView, 1500); // delay to accomodate feedback
                        next();
                    }

// compares the chosen answer to the value of `option1`
//get_ready = function(data, next){
//  alert('Get ready!');
//  next();
//};
