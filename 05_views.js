//Introduction view: welcome participants

const intro = magpieViews.view_generator("intro", {
  trials: 1,
  name: 'intro',
  title: 'Welcome!',
  text: `Welcome to our experiment!
  <br />
  <br />
  Thank you for taking your time and contributing to our research.
  You can only take part in this experiment using a computer that is connected to a keyboard.
  <br />
  Before we start, please make sure to not get distracted by anything (e.g. your phone, internet browser,...).
  Make yourself comfortable and get yourself mentally into a working space.
  <br />
  <br />
  If you feel ready to start the experiment, please click on the "begin the experiment"-button down below.`,
  buttonText: 'begin the experiment'
});

//general instructions
//need to be changed!!!!
const instructions = magpieViews.view_generator("instructions", {
  trials: 1,
  name: 'instructions',
  title: 'Instructions',
  text: `Before we get started we will provide you with some short instructions and explain what your
  task is going to be.
  <br />
  You will be presented an accumulation of letters in different colors. You are then supposed to
  find a target among the shown items. The target will be specified before the letters are shown on the screen and
  their description contains information about the required color and shape.
  If you detect the target press the "l"-key on your keyboard and if you cannot find the target press "s" instead.
  <br />
  During the whole experiment rest your index finger on the corresponding keys.
  Your answers should ensue as fast and accurate as possible.
  <br />
  <br />
  In order to prepare you for the experimental setup you will first run through some practice trials before you proceed to the main task.
  If you feel ready to start the practice trails, please click on the "start with practice trials"-button down below.`,
  buttonText: 'start with practice trials'
});

const main_instructions = magpieViews.view_generator("instructions", {
  trials: 1,
  name: 'main_instructions',
  title: 'Instructions',
  text: `So far so good!
  You have now finished the practice phase and hopefully well prepared for the main trials.
  They are identical in format and content.
  In order to proceed, press the button below.`,
  buttonText: 'proceed to main trails'
});

const instructions_conjunction = magpieViews.view_generator("instructions", {
  trials: 1,
  name: 'instructions_feature',
  title: 'Instructions',
  text: `The target you are supposed to find is a green T.
  Again, if you detect the target "green T" press L, otherwise press S.`,
  buttonText: 'proceed to practice trails'
});


const instructions_feature = magpieViews.view_generator("instructions", {
  trials: 1,
  name: 'instructions_conjunction',
  title: 'Instructions',
  text: `Now you are asked to search for two targets, each defined by a
  different single feature: a color (blue) and a shape (S). Hence, the target you are supposed to find is either a blue X, blue T (color) or a brown or green S (shape).
  In the presence of the target press "L", otherwise press "S".`,
  buttonText: 'start the experiment'
});
// In the post test questionnaire you can ask your participants addtional questions
const post_test = magpieViews.view_generator("post_test", {
  trials: 1,
  name: 'post_test',
  title: 'Additional information',
  text: ' Good job! You nearly done with the experiment. The last step is to answer the following questions.'

  // buttonText: 'continue',
  // dominant_hand: 'dominant hand',
  // dominant_left: 'left',
  // dominant_right: 'right',
  // age_question: 'age',
  // gender_question: 'gender',
  // gender_male: 'male',
  // gender_female: 'female',
  // gender_other: 'diverse',
  // edu_question: 'highest educational degree',
  // edu_graduated_high_school: 'high school',
  // edu_higher_degree: 'academic degree',
  // languages_question: 'mother tongue',
  // comments_question: 'further remarks'
});

// The 'thanks' view is crucial; never delete it; it submits the results!
const thanks = magpieViews.view_generator("thanks", {
  trials: 1,
  name: 'thanks',
  title: 'Perfect, you are done! Thank you for taking part in this experiment!',
  prolificConfirmText: 'Press the button'
});

/** trial (magpie's Trial Type Views) below

* Obligatory properties

    - trials: int - the number of trials this view will appear
    - name: string - the name of the view type as it shall be known to _magpie (e.g. for use with a progress bar)
            and the name of the trial as you want it to appear in the submitted data
    - data: array - an array of trial objects

* Optional properties

    - pause: number (in ms) - blank screen before the fixation point or stimulus show
    - fix_duration: number (in ms) - blank screen with fixation point in the middle
    - stim_duration: number (in ms) - for how long to have the stimulus on the screen
      More about trial life cycle - https://magpie-ea.github.io/magpie-docs/01_designing_experiments/04_lifecycles_hooks/

    - hook: object - option to hook and add custom functions to the view
      More about hooks - https://magpie-ea.github.io/magpie-docs/01_designing_experiments/04_lifecycles_hooks/

* All about the properties of trial views
* https://magpie-ea.github.io/magpie-docs/01_designing_experiments/01_template_views/#trial-views
*/

// Here, we initialize a keyPress task
const practice_conjunction = custom_views.keypress_FIT_practice({
    trials: 8,
    name: 'practice',
    trial_type: 'practice',
    pause: 250,
    after_pause: get_ready,
    //"get ready!" on white screen
    fix_duration: 1000,
    data: _.shuffle(practice_conjunction_trials_info.key_press),
    key1: "s",
    key2: "l",
    s: "incorrect",
    l: "correct",
});

const practice_feature = custom_views.keypress_FIT_practice({
    trials: 8,
    name: 'practice',
    trial_type: 'practice',
    pause: 250,
    after_pause: get_ready,
    //"get ready!" on white screen
    fix_duration: 1000,
    data: _.shuffle(practice_feature_trials_info.key_press),
    key1: "s",
    key2: "l",
    s: "incorrect",
    l: "correct",
});
const main_feature = custom_views.keypress_FIT_main({
    trials: 64,
    name: 'main',
    trial_type: 'main',
    pause: 250,
    after_pause: get_ready,
    //"get ready!" on white screen
    fix_duration: 1000,
    data: loopShuffled([main_feature_trials_info.key_press],2),
    key1: "s",
    key2: "l",
    s: "incorrect",
    l: "correct",
});


const main_conjunction = custom_views.keypress_FIT_main({
    trials: 64,
    name: 'main',
    trial_type: 'main',
    pause: 250,
    after_pause: get_ready,
    //"get ready!" on white screen
    fix_duration: 1000,
    data: loopShuffled([main_conjunction_trials_info.key_press],2),
    key1: "s",
    key2: "l",
    s: "incorrect",
    l: "correct",
});
