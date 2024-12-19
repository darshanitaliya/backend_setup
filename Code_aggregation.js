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

// // list 5 most common favorite fruits among ther user
// [
//   {
//     $group: {
//       _id: '$favoriteFruit',
//       count:{
//         $sum:1
//       }
//     },
//   },
//   {
//     $sort:{
//       count:-1
//     }
//   },
//   {
//     $limit: 5
//   }
// ]

// // Find totla number of male and female
// [
//   {
//     $group: {
//       _id: "$gender",
//       count:{
//       	$sum: 1
//       }
//     }
//   }
// ]

// // Which country has high no. of register
// [
//   {
//     $group: {
//       _id: "$company.location.country",
//       count:{
//         $sum:1
//       }
//     }
//   },
//   {
//     $sort: {
//       count: -1
//     }
//   },
//   {
//     $limit: 2
//   }
// ]

// // List all unique eye colors present in data
// [
//   {
//     $group: {
//       _id: "$eyeColor"
//     }
//   }
// ]

// what is the average number of tags per user
// // sol:1
// [
//   {
//     $unwind:  "$tags"
//   },
//   {
//     $group: {
//       _id: "$_id",
//       numberOfTags:{
//         $sum:1
//       }
//     }
//   },
//   {
//     $group: {
//       _id: null,
//       averageOfTags:{
//         $avg:"$numberOfTags"
//       }
//     }
//   }
// ]
// // sol:2
// [
//   {
//     $addFields: {
//       numberOfTags: {
//         $size:{$ifNull:["$tags",[]]}
//       }
//     }
//   },
//   {
//     $group: {
//       _id: null,
//       average:{
//         $avg:"$numberOfTags"
//       }
//     }
//   }
// ]

// // how many user have "enim" as one of their tags?
// [
//   {
//     $match: {
//       tags:"enim"
//     }
//   },
//   {
//     $count: 'userWithCountTag'
//   }
// ]

// // what are the names and age of users who are inactive and have "velit" as tag?
// [
//   {
//     $match: {
//       tags:"velit", isActive:false
//     }
//   },
//   {
//     $project: {
//     name:1,age:1
//     }
//   }
// ]

// // how many user has mobile number start with +1 (940)
// [
//   {
//     $match: {
//     	"company.phone":/^\+1 \(940\)/
//     }
//   },
//   {
//     $count: 'usersWith +1 (940) number'
//   }
// ]

// // who has registerd the most recently?
// [
//   {
//     $sort: {
//       registered: -1
//     }
//   },
//   {
//   	$limit: 4
//   },
//   {
//     $project: {
//       name:1,registered:1,favoriteFruit:1
//     }
//   }
// ]

// // categorize users by their favorite fruit
// [
//   {
//     $group: {
//       _id: "$favoriteFruit",
//       users:{$push:"$name"}
//     }
//   }
// ]

// // how many user have "ad" as the second tag in their list of tags?
// [
//   {
//     $match: {
//       "tags.1":"ad"
//     }
//   },
//   {
//    $count: 'string'
//   }
// ]

// // find user who have both "enim" and "id" as their tags
// [
//   {
//     $match: {
//       tags:{
//         $all:["enim","id"]
//       }
//     }
//   }
// ]

// // list all companies located in the USA with their corresponding user count
// [
//   {
//     $match: {
//       "company.location.country":"USA"
//     }
//   },
//   {
//     $group: {
//       _id: "$company.title",
//       userCount:{
//         $sum:1
//       }
//     }
//   }
// ]

// --------------------lookup------------------------
[
  {
    $lookup: {
      from: 'agauthors',
      localField: 'author_id',
      foreignField: '_id',
      as: 'author_details',
    },
  },
  {
    $addFields: {
      author_details: {
        // sol1
        // $first:"$author_details"
        // sol2
        $arrayElemAt: ['$author_details', 0],
      },
    },
  },
];
