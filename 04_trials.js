// In this file you can specify the trial data for your experiment
// practice trails: 24 trails
//structure:
    //picture;
    //item;
    //expected: "target",Positive/"no target", negative;
    //number_of_items: 1,5,15,30 ;
    //condition: "conjunction"/"disjunction.shape"/"disjuction.colour";

// 2 condition (feature, conjunction)
// 6 blocks a 128 trails (AABABB)



//nur color bis jetzt hinzugefügt //vlt noch shape hinzufügen
const practice_feature_trials_info = {
    key_press: [
      {
              picture: "images/practice/feature/1/target/F_C_1_T_1_Tblue.jpg",
              item: 1,
              expected: "positive",
              number_of_item: 1,
              condition:"color" ,
          },
          {
              picture: "images/practice/feature/1/no_target/F_C_1_NT_1.jpg",
              item: 2,
              expected: "negative",
              number_of_item: 1,
              condition: "color",
          },
          {
              picture: "images/practice/feature/5/target/F_C_5_T_1_Tblue.jpg",
              item: 3,
              expected: "positive",
              number_of_item: 5,
              condition:"color" ,
          },
          {
              picture: "images/practice/feature/5/no_target/F_C_5_NT_1.jpg",
              item: 4,
              expected: "negative",
              number_of_item: 5,
              condition:"color" ,
          },
          {
              picture: "images/practice/feature/15/target/F_C_15_T_1_Tblue",
              item: 5,
              expected: "positive",
              number_of_item: 15 ,
              condition: "color",
          },
          {
              picture: "images/practice/feature/15/no_target/F_C_15_NT_1.jpg",
              item: 6,
              expected: "negative",
              number_of_item: 15,
              condition: "color",
          },
          {
              picture: "images/practice/feature/30/target/F_C_30_T_1_Tblue.jpg",
              item: 7,
              expected: "positive",
              number_of_item: 30,
              condition:"color" ,
          },
          {
              picture: "images/practice/feature/30/no_target/F_C_30_NT_1.jpg",
              item: 8,
              expected: "negative",
              number_of_item: 30,
              condition: "color",
          },
      ],
  };

const practice_conjunction_trails_info = {
  key_press: [
    {
        picture: "images/practice/conjunction/1/target/C_1_T_1.jpg",
        item: 17,
        expected: "positive",
        number_of_item: 1,
        condition: "conjunction",
    },
    {
        picture: "images/practice/conjunction/1/no_target/C_1_T_1.jpg",
        item: 18,
        expected: "negative",
        number_of_item: 1,
        condition: "conjunction",
    },
    {
        picture: "images/practice/conjunction/5/target/C_5_T_1.jpg",
        item: 19,
        expected: "positive",
        number_of_item: 5,
        condition: "conjunction",
    },
    {
        picture: "images/practice/conjunction/5/no_target/C_5_NT_1.jpg",
        item: 20,
        expected: "negative",
        number_of_item: 5,
        condition: "conjunction" ,
    },
    {
        picture: "images/practice/conjunction/15/target/C_15_T_1.jpg",
        item: 21,
        expected: "positive",
        number_of_item: 15,
        condition: "conjunction",
    },
    {
        picture: "images/practice/conjunction/15/no_target/C_15_NT_1.jpg",
        item: 22,
        expected: "negative",
        number_of_item: 15,
        condition: "conjunction",
    },
    {
        picture: "images/practice/conjunction/30/target/C_30_T_1.jpg",
        item: 23,
        expected: "positive",
        number_of_item: 30,
        condition:"conjunction" ,
    },
    {
        picture: "images/practice/conjunction/30/no_target/C_30_NT_1.jpg",
        item: 24,
        expected: "negative",
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
             expected: "positive",
             number_of_item: 1,
             condition: "color",
         },
         {
             picture: "images/main/feature/1/target/F_C_1_T_2_Tblue.jpg",
             item: 26,
             expected: "positive",
             number_of_item: 1,
             condition: "color",
         },
         {
             picture: "images/main/feature/1/target/F_C_1_T_3_Sbrown.jpg",
             item: 27,
             expected: "positive",
             number_of_item: 1,
             condition: "shape",
         },
         {
             picture: "images/main/feature/1/target/F_C_1_T_4_Sbrown.jpg",
             item: 28,
             expected: "positive",
             number_of_item: 1,
             condition: "shape",
         },
         {
             picture: "images/main/feature/1/target/F_C_1_T_5_XBlue.jpg",
             item: 29,
             expected: "positive",
             number_of_item: 1,
             condition: "color",
         },
         {
             picture: "images/main/feature/1/target/F_C_1_T_6_XBlue.jpg",
             item: 30,
             expected: "positive",
             number_of_item: 1,
             condition: "color",
         },
         {
             picture: "images/main/feature/1/target/F_C_1_T_7_Sgreen.jpg",
             item: 31,
             expected: "positive",
             number_of_item: 1,
             condition: "shape",
         },
         {
             picture: "images/main/feature/1/target/F_C_1_T_8_Sgreen.jpg",
             item: 32,
             expected: "positive",
             number_of_item: 1,
             condition: "shape",
         },
         {
             picture: "images/main/feature/1/no_target/F_C_1_NT_1.jpg",
             item: 33,
             expected: "negative",
             number_of_item: 1,
             condition: "color",
         },
         {
             picture: "images/main/feature/1/no_target/F_C_1_NT_2.jpg",
             item: 34,
             expected: "negative",
             number_of_item: 1,
             condition: "color",
         },
         {
             picture: "images/main/feature/1/no_target/F_C_1_NT_3.jpg",
             item: 35,
             expected: "negative",
             number_of_item: 1,
             condition: "color",
         },
         {
             picture: "images/main/feature/1/no_target/F_C_1_NT_4.jpg",
             item: 36,
             expected: "negative",
             number_of_item: 1,
             condition: "color",
         },
         {
             picture: "images/main/feature/1/no_target/F_C_1_NT_5.jpg",
             item: 37,
             expected: "negative",
             number_of_item: 1,
             condition: "shape",
         },
         {
             picture: "images/main/feature/1/no_target/F_C_1_NT_6.jpg",
             item: 38,
             expected: "negative",
             number_of_item: 1,
             condition: "shape",
         },
         {
             picture: "images/main/feature/1/no_target/F_C_1_NT_7.jpg",
             item: 39,
             expected: "negative",
             number_of_item: 1,
             condition: "shape",
         },
         {
             picture: "images/main/feature/1/no_target/F_C_1_NT_8.jpg",
             item: 40,
             expected: "negative",
             number_of_item: 1,
             condition: "shape",
         },
         {
             picture: "images/main/feature/5/target/F_C_5_T_1_Tblue.jpg",
             item: 41,
             expected: "positive",
             number_of_item: 5,
             condition: "color",
         },
         {
             picture: "images/main/feature/5/target/F_C_5_T_2_Tblue.jpg",
             item: 42,
             expected: "positive",
             number_of_item: 5,
             condition: "color",
         },
         {
             picture: "images/main/feature/5/target/F_C_5_T_3_Sbrown.jpg",
             item: 43,
             expected: "positive",
             number_of_item: 5,
             condition: "shape",
         },
         {
             picture: "images/main/feature/5/target/F_C_5_T_4_Sbrown.jpg",
             item: 44,
             expected: "positive",
             number_of_item: 5,
             condition: "shape",
         },
         {
             picture: "images/main/feature/5/target/F_C_5_T_5_Xblue.jpg",
             item: 45,
             expected: "positive",
             number_of_item: 5,
             condition: "color",
         },
         {
             picture: "images/main/feature/5/target/F_C_5_T_6_Xblue.jpg",
             item: 46,
             expected: "positive",
             number_of_item: 5,
             condition: "color",
         },
         {
             picture: "images/main/feature/5/target/F_C_5_T_7_Sgreen.jpg",
             item: 47,
             expected: "positive",
             number_of_item: 5,
             condition: "shape",
         },
         {
             picture: "images/main/feature/5/target/F_C_5_T_8_Sgreen.jpg",
             item: 48,
             expected: "positive",
             number_of_item: 5,
             condition: "shape",
         },
         {
             picture: "images/main/feature/5/no_target/F_C_5_NT_1.jpg",
             item: 49,
             expected: "negative",
             number_of_item: 5,
             condition: "color",
         },
         {
             picture: "images/main/feature/5/no_target/F_C_5_NT_2.jpg",
             item: 50,
             expected: "negative",
             number_of_item: 5,
             condition: "color",
         },
         {
             picture: "images/main/feature/5/no_target/F_C_5_NT_3.jpg",
             item: 51,
             expected: "negative",
             number_of_item: 5,
             condition: "color",
          },
          {
             picture: "images/main/feature/5/no_target/F_C_5_NT_4.jpg",
             item: 52,
             expected: "negative",
             number_of_item: 5,
             condition: "color",
         },
         {
             picture: "images/main/feature/5/no_target/F_C_5_NT_5.jpg",
             item: 53,
             expected: "negative",
             number_of_item: 5,
             condition: "shape",
         },
         {
             picture: "images/main/feature/5/no_target/F_C_5_NT_6.jpg",
             item: 54,
             expected: "negative",
             number_of_item: 5,
             condition: "shape",
         },
         {
             picture: "images/main/feature/5/no_target/F_C_5_NT_7.jpg",
             item: 55,
             expected: "negative",
             number_of_item: 5,
             condition: "shape",
         },
         {
             picture: "images/main/feature/5/no_target/F_C_5_NT_8.jpg",
             item: 56,
             expected: "negative",
             number_of_item: 5,
             condition: "shape",
         },
         {
             picture: "images/main/feature/15/target/F_C_15_T_1_Tblue.jpg",
             item: 57,
             expected: "positive",
             number_of_item: 15,
             condition: "color",
         },
         {
             picture: "images/main/feature/15/target/F_C_15_T_2_Tblue.jpg",
             item: 58,
             expected: "positive",
             number_of_item: 15,
             condition: "color",
         },
         {
             picture: "images/main/feature/15/target/F_C_15_T_3_Sbrown.jpg",
             item: 59,
             expected: "positive",
             number_of_item: 15,
             condition: "shape",
         },
         {
             picture: "images/main/feature/15/target/F_C_15_T_4_Sbrown.jpg",
             item: 60,
             expected: "positive",
             number_of_item: 15,
             condition: "shape",
         },
         {
             picture: "images/main/feature/15/target/F_C_15_T_5_Xblue.jpg",
             item: 61,
             expected: "positive",
             number_of_item: 15,
             condition: "color",
         },
         {
             picture: "images/main/feature/15/target/F_C_15_T_6_Xblue.jpg",
             item: 62,
             expected: "positive",
             number_of_item: 15,
             condition: "color",
         },
         {
             picture: "images/main/feature/15/target/F_C_15_T_7_Sgreen.jpg",
             item: 63,
             expected: "positive",
             number_of_item: 15,
             condition: "shape",
         },
         {
             picture: "images/main/feature/15/target/F_C_15_T_8_Sgreen.jpg",
             item: 64,
             expected: "positive",
             number_of_item: 15,
             condition: "shape",
         },
         {
             picture: "images/main/feature/15/no_target/F_C_15_NT_1.jpg",
             item: 65,
             expected: "negative",
             number_of_item: 15,
             condition: "color",
         },
         {
             picture: "images/main/feature/15/no_target/F_C_15_NT_2.jpg",
             item: 66,
             expected: "negative",
             number_of_item: 15,
             condition: "color",
         },
         {
             picture: "images/main/feature/15/no_target/F_C_15_NT_3.jpg",
             item: 67,
             expected: "negative",
             number_of_item: 15,
             condition: "color",
         },
         {
             picture: "images/main/feature/15/no_target/F_C_15_NT_4.jpg",
             item: 68,
             expected: "negative",
             number_of_item: 15,
             condition: "color",
         },
         {
             picture: "images/main/feature/15/no_target/F_C_15_NT_5.jpg",
             item: 69,
             expected: "negative",
             number_of_item: 15,
             condition: "shape",
         },
         {
             picture: "images/main/feature/15/no_target/F_C_15_NT_6.jpg",
             item: 70,
             expected: "negative",
             number_of_item: 15,
             condition: "shape",
         },
         {
             picture: "images/main/feature/15/no_target/F_C_15_NT_7.jpg",
             item: 71,
             expected: "negative",
             number_of_item: 15,
             condition: "shape",
         },
         {
             picture: "images/main/feature/15/no_target/F_C_15_NT_8.jpg",
             item: 72,
             expected: "negative",
             number_of_item: 15,
             condition: "shape",
         },
         {
             picture: "images/main/feature/30/target/F_C_30_T_1_Tblue.jpg",
             item: 73,
             expected: "positive",
             number_of_item: 30,
             condition: "color",
         },
         {
             picture: "images/main/feature/30/target/F_C_30_T_2_Tblue.jpg",
             item: 74,
             expected: "positive",
             number_of_item: 30,
             condition: "color",
         },
         {
             picture: "images/main/feature/30/target/F_C_30_T_3_Sbrown.jpg",
             item: 75,
             expected: "positive",
             number_of_item: 30,
             condition: "shape",
         },
         {
             picture: "images/main/feature/30/target/F_C_30_T_4_Sbrown.jpg",
             item: 76,
             expected: "positive",
             number_of_item: 30,
             condition: "shape",
         },
         {
             picture: "images/main/feature/30/target/F_C_30_T_5_Xblue.jpg",
             item: 77,
             expected: "positive",
             number_of_item: 30,
             condition: "color",
         },
         {
             picture: "images/main/feature/30/target/F_C_30_T_6_Xblue.jpg",
             item: 78,
             expected: "positive",
             number_of_item: 30,
             condition: "color",
         },
         {
             picture: "images/main/feature/30/target/F_C_30_T_7_Sgreen.jpg",
             item: 79,
             expected: "positive",
             number_of_item: 30,
             condition: "shape",
         },
         {
             picture: "images/main/feature/30/target/F_C_30_T_8_Sgreen.jpg",
             item: 80,
             expected: "positive",
             number_of_item: 30,
             condition: "shape",
         },
         {
             picture: "images/main/feature/30/no_target/F_C_30_NT_1.jpg",
             item: 81,
             expected: "negative",
             number_of_item: 30,
             condition: "color",
         },
         {
             picture: "images/main/feature/30/no_target/F_C_30_NT_2.jpg",
             item: 82,
             expected: "negative",
             number_of_item: 30,
             condition: "color",
         },
         {
             picture: "images/main/feature/30/no_target/F_C_30_NT_3.jpg",
             item: 83,
             expected: "negative",
             number_of_item: 30,
             condition: "color",
         },
         {
             picture: "images/main/feature/30/no_target/F_C_30_NT_4.jpg",
             item: 84,
             expected: "negative",
             number_of_item: 30,
             condition: "color",
         },
         {
             picture: "images/main/feature/30/no_target/F_C_30_NT_5.jpg",
             item: 85,
             expected: "negative",
             number_of_item: 30,
             condition: "shape",
         },
         {
             picture: "images/main/feature/30/no_target/F_C_30_NT_6.jpg",
             item: 86,
             expected: "negative",
             number_of_item: 30,
             condition: "shape",
         },
         {
             picture: "images/main/feature/30/no_target/F_C_30_NT_7.jpg",
             item: 87,
             expected: "negative",
             number_of_item: 30,
             condition: "shape",
         },
         {
             picture: "images/main/feature/30/no_target/F_C_30_NT_8.jpg",
             item: 88,
             expected: "negative",
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
             expected: "positive",
             number_of_items: 1,
             condition: "conjunction",
         },
         {
             picture: "images/main/conjunction/1/target/C_1_T_2.jpg",
             item: 154,
             expected: "positive",
             number_of_items: 1,
             condition: "conjunction",
         },
         {
             picture: "images/main/conjunction/1/target/C_1_T_3.jpg",
             item: 155,
             expected: "positive",
             number_of_items: 1,
             condition: "conjunction",
         },
         {
             picture: "images/main/conjunction/1/target/C_1_T_4.jpg",
             item: 156,
             expected: "positive",
             number_of_items: 1,
             condition: "conjunction",
         },
         {
             picture: "images/main/conjunction/1/target/C_1_T_5.jpg",
             item: 157,
             expected: "positive",
             number_of_items: 1,
             condition: "conjunction",
         },
         {
             picture: "images/main/conjunction/1/target/C_1_T_6.jpg",
             item: 158,
             expected: "positive",
             number_of_items: 1,
             condition: "conjunction",
         },
         {
             picture: "images/main/conjunction/1/target/C_1_T_7.jpg",
             item: 159,
             expected: "positive",
             number_of_items: 1,
             condition: "conjunction",
         },
         {
             picture: "images/main/conjunction/1/target/C_1_T_8.jpg",
             item: 160,
             expected: "positive",
             number_of_items: 1,
             condition: "conjunction",
         },
         {
             picture: "images/main/conjunction/1/no_target/C_1_NT_1.jpg",
             item: 161,
             expected: "negative",
             number_of_items: 1,
             condition: "conjunction",
         },
         {
             picture: "images/main/conjunction/1/no_target/C_1_NT_2.jpg",
             item: 162,
             expected: "negative",
             number_of_items: 1,
             condition: "conjunction",
         },
         {
             picture: "images/main/conjunction/1/no_target/C_1_NT_3.jpg",
             item: 163,
             expected: "negative",
             number_of_items: 1,
             condition: "conjunction",
         },
         {
             picture: "images/main/conjunction/1/no_target/C_1_NT_4.jpg",
             item: 164,
             expected: "negative",
             number_of_items: 1,
             condition: "conjunction",
         },
         {
             picture: "images/main/conjunction/1/no_target/C_1_NT_5.jpg",
             item: 165,
             expected: "negative",
             number_of_items: 1,
             condition: "conjunction",
         },
         {
             picture: "images/main/conjunction/1/no_target/C_1_NT_6.jpg",
             item: 166,
             expected: "negative",
             number_of_items: 1,
             condition: "conjunction",
         },
         {
             picture: "images/main/conjunction/1/no_target/C_1_NT_7.jpg",
             item: 167,
             expected: "negative",
             number_of_items: 1,
             condition: "conjunction",
         },
         {
             picture: "images/main/conjunction/1/no_target/C_1_NT_8.jpg",
             item: 168,
             expected: "negative",
             number_of_items: 1,
             condition: "conjunction",
         },
         {
             picture: "images/main/conjunction/5/target/C_5_T_1.jpg",
             item: 169,
             expected: "positive",
             number_of_items: 5,
             condition: "conjunction",
         },
         {
             picture: "images/main/conjunction/5/target/C_5_T_2.jpg",
             item: 170,
             expected: "positive",
             number_of_items: 5,
             condition: "conjunction",
         },
         {
             picture: "images/main/conjunction/5/target/C_5_T_3.jpg",
             item: 171,
             expected: "positive",
             number_of_items: 5,
             condition: "conjunction",
         },
         {
             picture: "images/main/conjunction/5/target/C_5_T_4.jpg",
             item: 172,
             expected: "positive",
             number_of_items: 5,
             condition: "conjunction",
         },
         {
             picture: "images/main/conjunction/5/target/C_5_T_5.jpg",
             item: 173,
             expected: "positive",
             number_of_items: 5,
             condition: "conjunction",
         },
         {
             picture: "images/main/conjunction/5/target/C_5_T_6.jpg",
             item: 174,
             expected: "positive",
             number_of_items: 5,
             condition: "conjunction",
         },
         {
             picture: "images/main/conjunction/5/target/C_5_T_7.jpg",
             item: 175,
             expected: "positive",
             number_of_items: 5,
             condition: "conjunction",
         },
         {
             picture: "images/main/conjunction/5/target/C_5_T_8.jpg",
             item: 176,
             expected: "positive",
             number_of_items: 5,
             condition: "conjunction",
         },
         {
             picture: "images/main/conjunction/5/no_target/C_5_NT_1.jpg",
             item: 177,
             expected: "negative",
             number_of_items: 5,
             condition: "conjunction",
         },
         {
             picture: "images/main/conjunction/5/no_target/C_5_NT_2.jpg",
             item: 178,
             expected: "negative",
             number_of_items: 5,
             condition: "conjunction",
         },
         {
             picture: "images/main/conjunction/5/no_target/C_5_NT_3.jpg",
             item: 179,
             expected: "negative",
             number_of_items: 5,
             condition: "conjunction",
         },
         {
             picture: "images/main/conjunction/5/no_target/C_5_NT_4.jpg",
             item: 180,
             expected: "negative",
             number_of_items: 5,
             condition: "conjunction",
         },
         {
             picture: "images/main/conjunction/5/no_target/C_5_NT_5.jpg",
             item: 181,
             expected: "negative",
             number_of_items: 5,
             condition: "conjunction",
         },
         {
             picture: "images/main/conjunction/5/no_target/C_5_NT_6.jpg",
             item: 182,
             expected: "negative",
             number_of_items: 5,
             condition: "conjunction",
         },
         {
             picture: "images/main/conjunction/5/no_target/C_5_NT_7.jpg",
             item: 183,
             expected: "negative",
             number_of_items: 5,
             condition: "conjunction",
         },
         {
             picture: "images/main/conjunction/5/no_target/C_5_NT_8.jpg",
             item: 184,
             expected: "negative",
             number_of_items: 5,
             condition: "conjunction",
         },
         {
             picture: "images/main/conjunction/15/target/C_15_T_1.jpg",
             item: 185,
             expected: "positive",
             number_of_items: 15,
             condition: "conjunction",
         },
         {
             picture: "images/main/conjunction/15/target/C_15_T_2.jpg",
             item: 186,
             expected: "positive",
             number_of_items: 15,
             condition: "conjunction",
         },
         {
             picture: "images/main/conjunction/15/target/C_15_T_3.jpg",
             item: 187,
             expected: "positive",
             number_of_items: 15,
             condition: "conjunction",
         },
         {
             picture: "images/main/conjunction/15/target/C_15_T_4.jpg",
             item: 188,
             expected: "positive",
             number_of_items: 15,
             condition: "conjunction",
         },
         {
             picture: "images/main/conjunction/15/target/C_15_T_5.jpg",
             item: 189,
             expected: "positive",
             number_of_items: 15,
             condition: "conjunction",
         },
         {
             picture: "images/main/conjunction/15/target/C_15_T_6.jpg",
             item: 190,
             expected: "positive",
             number_of_items: 15,
             condition: "conjunction",
         },
         {
             picture: "images/main/conjunction/15/target/C_15_T_7.jpg",
             item: 191,
             expected: "positive",
             number_of_items: 15,
             condition: "conjunction",
         },
         {
             picture: "images/main/conjunction/15/target/C_15_T_8.jpg",
             item: 192,
             expected: "positive",
             number_of_items: 15,
             condition: "conjunction",
         },
         {
             picture: "images/main/conjunction/15/no_target/C_15_T_1.jpg",
             item: 193,
             expected: "negative",
             number_of_items: 15,
             condition: "conjunction",
         },
         {
             picture: "images/main/conjunction/15/no_target/C_15_T_2.jpg",
             item: 194,
             expected: "negative",
             number_of_items: 15,
             condition: "conjunction",
         },
         {
             picture: "images/main/conjunction/15/no_target/C_15_T_3.jpg",
             item: 195,
             expected: "negative",
             number_of_items: 15,
             condition: "conjunction",
         },
         {
             picture: "images/main/conjunction/15/no_target/C_15_T_4.jpg",
             item: 196,
             expected: "negative",
             number_of_items: 15,
             condition: "conjunction",
         },
         {
             picture: "images/main/conjunction/15/no_target/C_15_T_5.jpg",
             item: 197,
             expected: "negative",
             number_of_items: 15,
             condition: "conjunction",
         },
         {
             picture: "images/main/conjunction/15/no_target/C_15_T_6.jpg",
             item: 198,
             expected: "negative",
             number_of_items: 15,
             condition: "conjunction",
         },
         {
             picture: "images/main/conjunction/15/no_target/C_15_T_7.jpg",
             item: 199,
             expected: "negative",
             number_of_items: 15,
             condition: "conjunction",
         },
         {
             picture: "images/main/conjunction/15/no_target/C_15_T_8.jpg",
             item: 200,
             expected: "negative",
             number_of_items: 15,
             condition: "conjunction",
         },
         {
             picture: "images/main/conjunction/30/target/C_30_T_1.jpg",
             item: 201,
             expected: "positive",
             number_of_items: 30,
             condition: "conjunction",
         },
         {
             picture: "images/main/conjunction/30/target/C_30_T_2.jpg",
             item: 202,
             expected: "positive",
             number_of_items: 30,
             condition: "conjunction",
         },
         {
             picture: "images/main/conjunction/30/target/C_30_T_3.jpg",
             item: 203,
             expected: "positive",
             number_of_items: 30,
             condition: "conjunction",
         },
         {
             picture: "images/main/conjunction/30/target/C_30_T_4.jpg",
             item: 204,
             expected: "positive",
             number_of_items: 30,
             condition: "conjunction",
         },
         {
             picture: "images/main/conjunction/30/target/C_30_T_5.jpg",
             item: 205,
             expected: "positive",
             number_of_items: 30,
             condition: "conjunction",
         },
         {
             picture: "images/main/conjunction/30/target/C_30_T_6.jpg",
             item: 206,
             expected: "positive",
             number_of_items: 30,
             condition: "conjunction",
         },
         {
             picture: "images/main/conjunction/30/target/C_30_T_7.jpg",
             item: 207,
             expected: "positive",
             number_of_items: 30,
             condition: "conjunction",
         },
         {
             picture: "images/main/conjunction/30/target/C_30_T_8.jpg",
             item: 208,
             expected: "positive",
             number_of_items: 30,
             condition: "conjunction",
         },
         {
             picture: "images/main/conjunction/30/no_target/C_30_T_1.jpg",
             item: 209,
             expected: "negative",
             number_of_items: 30,
             condition: "conjunction",
         },
         {
             picture: "images/main/conjunction/30/no_target/C_30_T_2.jpg",
             item: 210,
             expected: "negative",
             number_of_items: 30,
             condition: "conjunction",
         },
         {
             picture: "images/main/conjunction/30/no_target/C_30_T_3.jpg",
             item: 211,
             expected: "negative",
             number_of_items: 30,
             condition: "conjunction",
         },
         {
             picture: "images/main/conjunction/30/no_target/C_30_T_4.jpg",
             item: 212,
             expected: "negative",
             number_of_items: 30,
             condition: "conjunction",
         },
         {
             picture: "images/main/conjunction/30/no_target/C_30_T_5.jpg",
             item: 213,
             expected: "negative",
             number_of_items: 30,
             condition: "conjunction",
         },
         {
             picture: "images/main/conjunction/30/no_target/C_30_T_6.jpg",
             item: 214,
             expected: "negative",
             number_of_items: 30,
             condition: "conjunction",
         },
         {
             picture: "images/main/conjunction/30/no_target/C_30_T_7.jpg",
             item: 215,
             expected: "negative",
             number_of_items: 30,
             condition: "conjunction",
         },
         {
             picture: "images/main/conjunction/30/no_target/C_30_T_8.jpg",
             item: 216,
             expected: "negative",
             number_of_items: 30,
             condition: "conjunction",
         },
       ],
   };
