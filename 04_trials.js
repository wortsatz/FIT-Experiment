// In this file you can specify the trial data for your experiment
// practice trails: 24 trails
//structure:
    //picture;
    //item;
    //expected: "target",target/"no target", no target;
    //number_of_items: 1,5,15,30 ;
    //condition: "conjunction"/"disjunction.shape"/"disjuction.colour";

// 2 condition (feature, conjunction)
// 6 blocks a 128 trails (AABABB)
const dominant_hand_info = {
    forced_choice: [
        {
            question: "What is your dominant hand?",
            option1: 'left',
            option2: 'right',
        },
    ],
};


const get_ready = function (data, next) {
  setTimeout(function () {
  $(".magpie-view-stimulus").addClass("magpie-invisible");
  $('#feedback').text(`Get ready!`);
  }

  magpie.findNextView();
};

//practice: nur color bis jetzt hinzugefügt //vlt noch shape hinzufügen
const practice_feature_trials_info = {
    key_press: [
      {
              picture: "images/practice/feature/1/target/F_C_1_T_1_Tblue.jpg",
              item: 1,
              expected: "target",
              number_of_item: 1,
              condition:"color" ,
          },
          {
              picture: "images/practice/feature/1/no_target/F_C_1_NT_1.jpg",
              item: 2,
              expected: "no target",
              number_of_item: 1,
              condition: "color",
          },
          {
              picture: "images/practice/feature/5/target/F_C_5_T_1_Tblue.jpg",
              item: 3,
              expected: "target",
              number_of_item: 5,
              condition:"color" ,
          },
          {
              picture: "images/practice/feature/5/no_target/F_C_5_NT_1.jpg",
              item: 4,
              expected: "no target",
              number_of_item: 5,
              condition:"color" ,
          },
          {
              picture: "images/practice/feature/15/target/F_C_15_T_1_Tblue",
              item: 5,
              expected: "target",
              number_of_item: 15 ,
              condition: "color",
          },
          {
              picture: "images/practice/feature/15/no_target/F_C_15_NT_1.jpg",
              item: 6,
              expected: "no target",
              number_of_item: 15,
              condition: "color",
          },
          {
              picture: "images/practice/feature/30/target/F_C_30_T_1_Tblue.jpg",
              item: 7,
              expected: "target",
              number_of_item: 30,
              condition:"color" ,
          },
          {
              picture: "images/practice/feature/30/no_target/F_C_30_NT_1.jpg",
              item: 8,
              expected: "no target",
              number_of_item: 30,
              condition: "color",
          },
      ],
  };

const practice_conjunction_trials_info = {
  key_press: [
    {
        picture: "images/practice/conjunction/1/target/C_1_T_1.jpg",
        item: 17,
        expected: "target",
        number_of_item: 1,
        condition: "conjunction",
    },
    {
        picture: "images/practice/conjunction/1/no_target/C_1_T_1.jpg",
        item: 18,
        expected: "no target",
        number_of_item: 1,
        condition: "conjunction",
    },
    {
        picture: "images/practice/conjunction/5/target/C_5_T_1.jpg",
        item: 19,
        expected: "target",
        number_of_item: 5,
        condition: "conjunction",
    },
    {
        picture: "images/practice/conjunction/5/no_target/C_5_NT_1.jpg",
        item: 20,
        expected: "no target",
        number_of_item: 5,
        condition: "conjunction" ,
    },
    {
        picture: "images/practice/conjunction/15/target/C_15_T_1.jpg",
        item: 21,
        expected: "target",
        number_of_item: 15,
        condition: "conjunction",
    },
    {
        picture: "images/practice/conjunction/15/no_target/C_15_NT_1.jpg",
        item: 22,
        expected: "no target",
        number_of_item: 15,
        condition: "conjunction",
    },
    {
        picture: "images/practice/conjunction/30/target/C_30_T_1.jpg",
        item: 23,
        expected: "target",
        number_of_item: 30,
        condition:"conjunction" ,
    },
    {
        picture: "images/practice/conjunction/30/no_target/C_30_NT_1.jpg",
        item: 24,
        expected: "no target",
        number_of_item: 30,
        condition:"conjunction" ,
    },
  ]
};

const main_feature_trials_info = {
    key_press: [
      {
             picture: "images/main/feature/1/target/F_C_1_T_1_Tblue.jpg",
             item: 25,
             expected: "target",
             number_of_item: 1,
             condition: "color",
         },
         {
             picture: "images/main/feature/1/target/F_C_1_T_2_Tblue.jpg",
             item: 26,
             expected: "target",
             number_of_item: 1,
             condition: "color",
         },
         {
             picture: "images/main/feature/1/target/F_C_1_T_3_Sbrown.jpg",
             item: 27,
             expected: "target",
             number_of_item: 1,
             condition: "shape",
         },
         {
             picture: "images/main/feature/1/target/F_C_1_T_4_Sbrown.jpg",
             item: 28,
             expected: "target",
             number_of_item: 1,
             condition: "shape",
         },
         {
             picture: "images/main/feature/1/target/F_C_1_T_5_XBlue.jpg",
             item: 29,
             expected: "target",
             number_of_item: 1,
             condition: "color",
         },
         {
             picture: "images/main/feature/1/target/F_C_1_T_6_XBlue.jpg",
             item: 30,
             expected: "target",
             number_of_item: 1,
             condition: "color",
         },
         {
             picture: "images/main/feature/1/target/F_C_1_T_7_Sgreen.jpg",
             item: 31,
             expected: "target",
             number_of_item: 1,
             condition: "shape",
         },
         {
             picture: "images/main/feature/1/target/F_C_1_T_8_Sgreen.jpg",
             item: 32,
             expected: "target",
             number_of_item: 1,
             condition: "shape",
         },
         {
             picture: "images/main/feature/1/no_target/F_C_1_NT_1.jpg",
             item: 33,
             expected: "no target",
             number_of_item: 1,
             condition: "color",
         },
         {
             picture: "images/main/feature/1/no_target/F_C_1_NT_2.jpg",
             item: 34,
             expected: "no target",
             number_of_item: 1,
             condition: "color",
         },
         {
             picture: "images/main/feature/1/no_target/F_C_1_NT_3.jpg",
             item: 35,
             expected: "no target",
             number_of_item: 1,
             condition: "color",
         },
         {
             picture: "images/main/feature/1/no_target/F_C_1_NT_4.jpg",
             item: 36,
             expected: "no target",
             number_of_item: 1,
             condition: "color",
         },
         {
             picture: "images/main/feature/1/no_target/F_C_1_NT_5.jpg",
             item: 37,
             expected: "no target",
             number_of_item: 1,
             condition: "shape",
         },
         {
             picture: "images/main/feature/1/no_target/F_C_1_NT_6.jpg",
             item: 38,
             expected: "no target",
             number_of_item: 1,
             condition: "shape",
         },
         {
             picture: "images/main/feature/1/no_target/F_C_1_NT_7.jpg",
             item: 39,
             expected: "no target",
             number_of_item: 1,
             condition: "shape",
         },
         {
             picture: "images/main/feature/1/no_target/F_C_1_NT_8.jpg",
             item: 40,
             expected: "no target",
             number_of_item: 1,
             condition: "shape",
         },
         {
             picture: "images/main/feature/5/target/F_C_5_T_1_Tblue.jpg",
             item: 41,
             expected: "target",
             number_of_item: 5,
             condition: "color",
         },
         {
             picture: "images/main/feature/5/target/F_C_5_T_2_Tblue.jpg",
             item: 42,
             expected: "target",
             number_of_item: 5,
             condition: "color",
         },
         {
             picture: "images/main/feature/5/target/F_C_5_T_3_Sbrown.jpg",
             item: 43,
             expected: "target",
             number_of_item: 5,
             condition: "shape",
         },
         {
             picture: "images/main/feature/5/target/F_C_5_T_4_Sbrown.jpg",
             item: 44,
             expected: "target",
             number_of_item: 5,
             condition: "shape",
         },
         {
             picture: "images/main/feature/5/target/F_C_5_T_5_Xblue.jpg",
             item: 45,
             expected: "target",
             number_of_item: 5,
             condition: "color",
         },
         {
             picture: "images/main/feature/5/target/F_C_5_T_6_Xblue.jpg",
             item: 46,
             expected: "target",
             number_of_item: 5,
             condition: "color",
         },
         {
             picture: "images/main/feature/5/target/F_C_5_T_7_Sgreen.jpg",
             item: 47,
             expected: "target",
             number_of_item: 5,
             condition: "shape",
         },
         {
             picture: "images/main/feature/5/target/F_C_5_T_8_Sgreen.jpg",
             item: 48,
             expected: "target",
             number_of_item: 5,
             condition: "shape",
         },
         {
             picture: "images/main/feature/5/no_target/F_C_5_NT_1.jpg",
             item: 49,
             expected: "no target",
             number_of_item: 5,
             condition: "color",
         },
         {
             picture: "images/main/feature/5/no_target/F_C_5_NT_2.jpg",
             item: 50,
             expected: "no target",
             number_of_item: 5,
             condition: "color",
         },
         {
             picture: "images/main/feature/5/no_target/F_C_5_NT_3.jpg",
             item: 51,
             expected: "no target",
             number_of_item: 5,
             condition: "color",
          },
          {
             picture: "images/main/feature/5/no_target/F_C_5_NT_4.jpg",
             item: 52,
             expected: "no target",
             number_of_item: 5,
             condition: "color",
         },
         {
             picture: "images/main/feature/5/no_target/F_C_5_NT_5.jpg",
             item: 53,
             expected: "no target",
             number_of_item: 5,
             condition: "shape",
         },
         {
             picture: "images/main/feature/5/no_target/F_C_5_NT_6.jpg",
             item: 54,
             expected: "no target",
             number_of_item: 5,
             condition: "shape",
         },
         {
             picture: "images/main/feature/5/no_target/F_C_5_NT_7.jpg",
             item: 55,
             expected: "no target",
             number_of_item: 5,
             condition: "shape",
         },
         {
             picture: "images/main/feature/5/no_target/F_C_5_NT_8.jpg",
             item: 56,
             expected: "no target",
             number_of_item: 5,
             condition: "shape",
         },
         {
             picture: "images/main/feature/15/target/F_C_15_T_1_Tblue.jpg",
             item: 57,
             expected: "target",
             number_of_item: 15,
             condition: "color",
         },
         {
             picture: "images/main/feature/15/target/F_C_15_T_2_Tblue.jpg",
             item: 58,
             expected: "target",
             number_of_item: 15,
             condition: "color",
         },
         {
             picture: "images/main/feature/15/target/F_C_15_T_3_Sbrown.jpg",
             item: 59,
             expected: "target",
             number_of_item: 15,
             condition: "shape",
         },
         {
             picture: "images/main/feature/15/target/F_C_15_T_4_Sbrown.jpg",
             item: 60,
             expected: "target",
             number_of_item: 15,
             condition: "shape",
         },
         {
             picture: "images/main/feature/15/target/F_C_15_T_5_Xblue.jpg",
             item: 61,
             expected: "target",
             number_of_item: 15,
             condition: "color",
         },
         {
             picture: "images/main/feature/15/target/F_C_15_T_6_Xblue.jpg",
             item: 62,
             expected: "target",
             number_of_item: 15,
             condition: "color",
         },
         {
             picture: "images/main/feature/15/target/F_C_15_T_7_Sgreen.jpg",
             item: 63,
             expected: "target",
             number_of_item: 15,
             condition: "shape",
         },
         {
             picture: "images/main/feature/15/target/F_C_15_T_8_Sgreen.jpg",
             item: 64,
             expected: "target",
             number_of_item: 15,
             condition: "shape",
         },
         {
             picture: "images/main/feature/15/no_target/F_C_15_NT_1.jpg",
             item: 65,
             expected: "no target",
             number_of_item: 15,
             condition: "color",
         },
         {
             picture: "images/main/feature/15/no_target/F_C_15_NT_2.jpg",
             item: 66,
             expected: "no target",
             number_of_item: 15,
             condition: "color",
         },
         {
             picture: "images/main/feature/15/no_target/F_C_15_NT_3.jpg",
             item: 67,
             expected: "no target",
             number_of_item: 15,
             condition: "color",
         },
         {
             picture: "images/main/feature/15/no_target/F_C_15_NT_4.jpg",
             item: 68,
             expected: "no target",
             number_of_item: 15,
             condition: "color",
         },
         {
             picture: "images/main/feature/15/no_target/F_C_15_NT_5.jpg",
             item: 69,
             expected: "no target",
             number_of_item: 15,
             condition: "shape",
         },
         {
             picture: "images/main/feature/15/no_target/F_C_15_NT_6.jpg",
             item: 70,
             expected: "no target",
             number_of_item: 15,
             condition: "shape",
         },
         {
             picture: "images/main/feature/15/no_target/F_C_15_NT_7.jpg",
             item: 71,
             expected: "no target",
             number_of_item: 15,
             condition: "shape",
         },
         {
             picture: "images/main/feature/15/no_target/F_C_15_NT_8.jpg",
             item: 72,
             expected: "no target",
             number_of_item: 15,
             condition: "shape",
         },
         {
             picture: "images/main/feature/30/target/F_C_30_T_1_Tblue.jpg",
             item: 73,
             expected: "target",
             number_of_item: 30,
             condition: "color",
         },
         {
             picture: "images/main/feature/30/target/F_C_30_T_2_Tblue.jpg",
             item: 74,
             expected: "target",
             number_of_item: 30,
             condition: "color",
         },
         {
             picture: "images/main/feature/30/target/F_C_30_T_3_Sbrown.jpg",
             item: 75,
             expected: "target",
             number_of_item: 30,
             condition: "shape",
         },
         {
             picture: "images/main/feature/30/target/F_C_30_T_4_Sbrown.jpg",
             item: 76,
             expected: "target",
             number_of_item: 30,
             condition: "shape",
         },
         {
             picture: "images/main/feature/30/target/F_C_30_T_5_Xblue.jpg",
             item: 77,
             expected: "target",
             number_of_item: 30,
             condition: "color",
         },
         {
             picture: "images/main/feature/30/target/F_C_30_T_6_Xblue.jpg",
             item: 78,
             expected: "target",
             number_of_item: 30,
             condition: "color",
         },
         {
             picture: "images/main/feature/30/target/F_C_30_T_7_Sgreen.jpg",
             item: 79,
             expected: "target",
             number_of_item: 30,
             condition: "shape",
         },
         {
             picture: "images/main/feature/30/target/F_C_30_T_8_Sgreen.jpg",
             item: 80,
             expected: "target",
             number_of_item: 30,
             condition: "shape",
         },
         {
             picture: "images/main/feature/30/no_target/F_C_30_NT_1.jpg",
             item: 81,
             expected: "no target",
             number_of_item: 30,
             condition: "color",
         },
         {
             picture: "images/main/feature/30/no_target/F_C_30_NT_2.jpg",
             item: 82,
             expected: "no target",
             number_of_item: 30,
             condition: "color",
         },
         {
             picture: "images/main/feature/30/no_target/F_C_30_NT_3.jpg",
             item: 83,
             expected: "no target",
             number_of_item: 30,
             condition: "color",
         },
         {
             picture: "images/main/feature/30/no_target/F_C_30_NT_4.jpg",
             item: 84,
             expected: "no target",
             number_of_item: 30,
             condition: "color",
         },
         {
             picture: "images/main/feature/30/no_target/F_C_30_NT_5.jpg",
             item: 85,
             expected: "no target",
             number_of_item: 30,
             condition: "shape",
         },
         {
             picture: "images/main/feature/30/no_target/F_C_30_NT_6.jpg",
             item: 86,
             expected: "no target",
             number_of_item: 30,
             condition: "shape",
         },
         {
             picture: "images/main/feature/30/no_target/F_C_30_NT_7.jpg",
             item: 87,
             expected: "no target",
             number_of_item: 30,
             condition: "shape",
         },
         {
             picture: "images/main/feature/30/no_target/F_C_30_NT_8.jpg",
             item: 88,
             expected: "no target",
             number_of_item: 30,
             condition: "shape",
         },
     ],
 };

const main_conjunction_trials_info = {
     key_press: [
         {
             picture: "images/main/conjunction/1/target/C_1_T_1.jpg",
             item: 153,
             expected: "target",
             number_of_items: 1,
             condition: "conjunction",
         },
         {
             picture: "images/main/conjunction/1/target/C_1_T_2.jpg",
             item: 154,
             expected: "target",
             number_of_items: 1,
             condition: "conjunction",
         },
         {
             picture: "images/main/conjunction/1/target/C_1_T_3.jpg",
             item: 155,
             expected: "target",
             number_of_items: 1,
             condition: "conjunction",
         },
         {
             picture: "images/main/conjunction/1/target/C_1_T_4.jpg",
             item: 156,
             expected: "target",
             number_of_items: 1,
             condition: "conjunction",
         },
         {
             picture: "images/main/conjunction/1/target/C_1_T_5.jpg",
             item: 157,
             expected: "target",
             number_of_items: 1,
             condition: "conjunction",
         },
         {
             picture: "images/main/conjunction/1/target/C_1_T_6.jpg",
             item: 158,
             expected: "target",
             number_of_items: 1,
             condition: "conjunction",
         },
         {
             picture: "images/main/conjunction/1/target/C_1_T_7.jpg",
             item: 159,
             expected: "target",
             number_of_items: 1,
             condition: "conjunction",
         },
         {
             picture: "images/main/conjunction/1/target/C_1_T_8.jpg",
             item: 160,
             expected: "target",
             number_of_items: 1,
             condition: "conjunction",
         },
         {
             picture: "images/main/conjunction/1/no_target/C_1_NT_1.jpg",
             item: 161,
             expected: "no target",
             number_of_items: 1,
             condition: "conjunction",
         },
         {
             picture: "images/main/conjunction/1/no_target/C_1_NT_2.jpg",
             item: 162,
             expected: "no target",
             number_of_items: 1,
             condition: "conjunction",
         },
         {
             picture: "images/main/conjunction/1/no_target/C_1_NT_3.jpg",
             item: 163,
             expected: "no target",
             number_of_items: 1,
             condition: "conjunction",
         },
         {
             picture: "images/main/conjunction/1/no_target/C_1_NT_4.jpg",
             item: 164,
             expected: "no target",
             number_of_items: 1,
             condition: "conjunction",
         },
         {
             picture: "images/main/conjunction/1/no_target/C_1_NT_5.jpg",
             item: 165,
             expected: "no target",
             number_of_items: 1,
             condition: "conjunction",
         },
         {
             picture: "images/main/conjunction/1/no_target/C_1_NT_6.jpg",
             item: 166,
             expected: "no target",
             number_of_items: 1,
             condition: "conjunction",
         },
         {
             picture: "images/main/conjunction/1/no_target/C_1_NT_7.jpg",
             item: 167,
             expected: "no target",
             number_of_items: 1,
             condition: "conjunction",
         },
         {
             picture: "images/main/conjunction/1/no_target/C_1_NT_8.jpg",
             item: 168,
             expected: "no target",
             number_of_items: 1,
             condition: "conjunction",
         },
         {
             picture: "images/main/conjunction/5/target/C_5_T_1.jpg",
             item: 169,
             expected: "target",
             number_of_items: 5,
             condition: "conjunction",
         },
         {
             picture: "images/main/conjunction/5/target/C_5_T_2.jpg",
             item: 170,
             expected: "target",
             number_of_items: 5,
             condition: "conjunction",
         },
         {
             picture: "images/main/conjunction/5/target/C_5_T_3.jpg",
             item: 171,
             expected: "target",
             number_of_items: 5,
             condition: "conjunction",
         },
         {
             picture: "images/main/conjunction/5/target/C_5_T_4.jpg",
             item: 172,
             expected: "target",
             number_of_items: 5,
             condition: "conjunction",
         },
         {
             picture: "images/main/conjunction/5/target/C_5_T_5.jpg",
             item: 173,
             expected: "target",
             number_of_items: 5,
             condition: "conjunction",
         },
         {
             picture: "images/main/conjunction/5/target/C_5_T_6.jpg",
             item: 174,
             expected: "target",
             number_of_items: 5,
             condition: "conjunction",
         },
         {
             picture: "images/main/conjunction/5/target/C_5_T_7.jpg",
             item: 175,
             expected: "target",
             number_of_items: 5,
             condition: "conjunction",
         },
         {
             picture: "images/main/conjunction/5/target/C_5_T_8.jpg",
             item: 176,
             expected: "target",
             number_of_items: 5,
             condition: "conjunction",
         },
         {
             picture: "images/main/conjunction/5/no_target/C_5_NT_1.jpg",
             item: 177,
             expected: "no target",
             number_of_items: 5,
             condition: "conjunction",
         },
         {
             picture: "images/main/conjunction/5/no_target/C_5_NT_2.jpg",
             item: 178,
             expected: "no target",
             number_of_items: 5,
             condition: "conjunction",
         },
         {
             picture: "images/main/conjunction/5/no_target/C_5_NT_3.jpg",
             item: 179,
             expected: "no target",
             number_of_items: 5,
             condition: "conjunction",
         },
         {
             picture: "images/main/conjunction/5/no_target/C_5_NT_4.jpg",
             item: 180,
             expected: "no target",
             number_of_items: 5,
             condition: "conjunction",
         },
         {
             picture: "images/main/conjunction/5/no_target/C_5_NT_5.jpg",
             item: 181,
             expected: "no target",
             number_of_items: 5,
             condition: "conjunction",
         },
         {
             picture: "images/main/conjunction/5/no_target/C_5_NT_6.jpg",
             item: 182,
             expected: "no target",
             number_of_items: 5,
             condition: "conjunction",
         },
         {
             picture: "images/main/conjunction/5/no_target/C_5_NT_7.jpg",
             item: 183,
             expected: "no target",
             number_of_items: 5,
             condition: "conjunction",
         },
         {
             picture: "images/main/conjunction/5/no_target/C_5_NT_8.jpg",
             item: 184,
             expected: "no target",
             number_of_items: 5,
             condition: "conjunction",
         },
         {
             picture: "images/main/conjunction/15/target/C_15_T_1.jpg",
             item: 185,
             expected: "target",
             number_of_items: 15,
             condition: "conjunction",
         },
         {
             picture: "images/main/conjunction/15/target/C_15_T_2.jpg",
             item: 186,
             expected: "target",
             number_of_items: 15,
             condition: "conjunction",
         },
         {
             picture: "images/main/conjunction/15/target/C_15_T_3.jpg",
             item: 187,
             expected: "target",
             number_of_items: 15,
             condition: "conjunction",
         },
         {
             picture: "images/main/conjunction/15/target/C_15_T_4.jpg",
             item: 188,
             expected: "target",
             number_of_items: 15,
             condition: "conjunction",
         },
         {
             picture: "images/main/conjunction/15/target/C_15_T_5.jpg",
             item: 189,
             expected: "target",
             number_of_items: 15,
             condition: "conjunction",
         },
         {
             picture: "images/main/conjunction/15/target/C_15_T_6.jpg",
             item: 190,
             expected: "target",
             number_of_items: 15,
             condition: "conjunction",
         },
         {
             picture: "images/main/conjunction/15/target/C_15_T_7.jpg",
             item: 191,
             expected: "target",
             number_of_items: 15,
             condition: "conjunction",
         },
         {
             picture: "images/main/conjunction/15/target/C_15_T_8.jpg",
             item: 192,
             expected: "target",
             number_of_items: 15,
             condition: "conjunction",
         },
         {
             picture: "images/main/conjunction/15/no_target/C_15_T_1.jpg",
             item: 193,
             expected: "no target",
             number_of_items: 15,
             condition: "conjunction",
         },
         {
             picture: "images/main/conjunction/15/no_target/C_15_T_2.jpg",
             item: 194,
             expected: "no target",
             number_of_items: 15,
             condition: "conjunction",
         },
         {
             picture: "images/main/conjunction/15/no_target/C_15_T_3.jpg",
             item: 195,
             expected: "no target",
             number_of_items: 15,
             condition: "conjunction",
         },
         {
             picture: "images/main/conjunction/15/no_target/C_15_T_4.jpg",
             item: 196,
             expected: "no target",
             number_of_items: 15,
             condition: "conjunction",
         },
         {
             picture: "images/main/conjunction/15/no_target/C_15_T_5.jpg",
             item: 197,
             expected: "no target",
             number_of_items: 15,
             condition: "conjunction",
         },
         {
             picture: "images/main/conjunction/15/no_target/C_15_T_6.jpg",
             item: 198,
             expected: "no target",
             number_of_items: 15,
             condition: "conjunction",
         },
         {
             picture: "images/main/conjunction/15/no_target/C_15_T_7.jpg",
             item: 199,
             expected: "no target",
             number_of_items: 15,
             condition: "conjunction",
         },
         {
             picture: "images/main/conjunction/15/no_target/C_15_T_8.jpg",
             item: 200,
             expected: "no target",
             number_of_items: 15,
             condition: "conjunction",
         },
         {
             picture: "images/main/conjunction/30/target/C_30_T_1.jpg",
             item: 201,
             expected: "target",
             number_of_items: 30,
             condition: "conjunction",
         },
         {
             picture: "images/main/conjunction/30/target/C_30_T_2.jpg",
             item: 202,
             expected: "target",
             number_of_items: 30,
             condition: "conjunction",
         },
         {
             picture: "images/main/conjunction/30/target/C_30_T_3.jpg",
             item: 203,
             expected: "target",
             number_of_items: 30,
             condition: "conjunction",
         },
         {
             picture: "images/main/conjunction/30/target/C_30_T_4.jpg",
             item: 204,
             expected: "target",
             number_of_items: 30,
             condition: "conjunction",
         },
         {
             picture: "images/main/conjunction/30/target/C_30_T_5.jpg",
             item: 205,
             expected: "target",
             number_of_items: 30,
             condition: "conjunction",
         },
         {
             picture: "images/main/conjunction/30/target/C_30_T_6.jpg",
             item: 206,
             expected: "target",
             number_of_items: 30,
             condition: "conjunction",
         },
         {
             picture: "images/main/conjunction/30/target/C_30_T_7.jpg",
             item: 207,
             expected: "target",
             number_of_items: 30,
             condition: "conjunction",
         },
         {
             picture: "images/main/conjunction/30/target/C_30_T_8.jpg",
             item: 208,
             expected: "target",
             number_of_items: 30,
             condition: "conjunction",
         },
         {
             picture: "images/main/conjunction/30/no_target/C_30_T_1.jpg",
             item: 209,
             expected: "no target",
             number_of_items: 30,
             condition: "conjunction",
         },
         {
             picture: "images/main/conjunction/30/no_target/C_30_T_2.jpg",
             item: 210,
             expected: "no target",
             number_of_items: 30,
             condition: "conjunction",
         },
         {
             picture: "images/main/conjunction/30/no_target/C_30_T_3.jpg",
             item: 211,
             expected: "no target",
             number_of_items: 30,
             condition: "conjunction",
         },
         {
             picture: "images/main/conjunction/30/no_target/C_30_T_4.jpg",
             item: 212,
             expected: "no target",
             number_of_items: 30,
             condition: "conjunction",
         },
         {
             picture: "images/main/conjunction/30/no_target/C_30_T_5.jpg",
             item: 213,
             expected: "no target",
             number_of_items: 30,
             condition: "conjunction",
         },
         {
             picture: "images/main/conjunction/30/no_target/C_30_T_6.jpg",
             item: 214,
             expected: "no target",
             number_of_items: 30,
             condition: "conjunction",
         },
         {
             picture: "images/main/conjunction/30/no_target/C_30_T_7.jpg",
             item: 215,
             expected: "no target",
             number_of_items: 30,
             condition: "conjunction",
         },
         {
             picture: "images/main/conjunction/30/no_target/C_30_T_8.jpg",
             item: 216,
             expected: "no target",
             number_of_items: 30,
             condition: "conjunction",
         },
       ],
   };
