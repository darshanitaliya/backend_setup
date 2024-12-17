// // Active user
// [
//   {
//     $match: {
//       isActive: true,
//     },
//   },
//   {
//     $count: "string",
//   },
// ]

// // avarage age of all user
// [
//   {
//     $group: {
//       _id:null,
//       averageAge:{
//         $avg:"$age"
//       }
//     },
//   },
// ]

// list 5 most common favorite fruits among ther user
[
  {
    $group: {
      _id: '$favoriteFruit',
    },
  },
];
