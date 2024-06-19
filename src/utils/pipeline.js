// export default function pipeline(smallPipe){
//     const pipeline = [
//         {
//             '$lookup': {
//                 'from': 'locations',
//                 'localField': 'locationCode',
//                 'foreignField': '_id',
//                 'as': 'locationDescription'
//             },
//             '$lookup': {
//                 'from': 'statuses',
//                 'localField': 'statusCode',
//                 'foreignField': '_id',
//                 'as': 'statusDescription'
//             },
//             '$lookup': {
//                 'from': 'importances',
//                 'localField': 'impotranceCode',
//                 'foreignField': '_id',
//                 'as': 'importanceDescription'
//             }
//         },{
//             '$unwind':{
//                 'path': '$locationDescription'
//             }
        
//         },{
//             '$unwind':{
//                 'path': '$statusDescription'
//             }
        
//         },{
//             '$unwind':{
//                 'path': '$importanceDescription'
//             }
        
//         }
//         ,{
//             '$addFields':{
//                 'location': '$locationDescription.description',
//                 'status': '$statusDescription.description',
//                 'importance': '$importanceDescription.description'
//             }
//         },{
//             '$project':{
//                 'locationDescription': 0,
//                 'statusDescription': 0,
//                 'importanceDescription': 0
//             }
//         }
//     ]
//     for(let middleware of smallPipe){
//         pipeline.splice(pipeline.length-1, 0, middleware);
//     }
//     return pipeline;
// }



// export default function pipeline(smallPipe) {
//     const pipeline = [
    //   {
    //     '$lookup': {
    //       'from': 'locations',
    //       'localField': 'locationCode',
    //       'foreignField': '_id',
    //       'as': 'locationDescription'
    //     }
    //   },
    //   {
    //     '$lookup': {
    //       'from': 'statuses',
    //       'localField': 'statusCode',
    //       'foreignField': '_id',
    //       'as': 'statusDescription'
    //     }
    //   },
    //   {
    //     '$lookup': {
    //       'from': 'importances',
    //       'localField': 'importanceCode', // Corrected typo from 'impotranceCode'
    //       'foreignField': '_id',
    //       'as': 'importanceDescription'
    //     }
    //   },
    //   {
    //     '$lookup': {
    //       'from': 'volunteers', // Corrected typo from 'volenteers'
    //       'localField': 'volunteerCode', // Corrected typo from 'volenteerCode'
    //       'foreignField': '_id',
    //       'as': 'volunteer'
    //     }
    //   },
    //   {
    //     '$unwind': {
    //       'path': '$locationDescription'
    //     }
    //   },
    //   {
    //     '$unwind': {
    //       'path': '$statusDescription'
    //     }
    //   },
    //   {
    //     '$unwind': {
    //       'path': '$importanceDescription'
    //     }
    //   },
    //   {
    //     '$unwind': {
    //       'path': '$volunteer'
    //     }
    //   },
    //   {
    //     '$addFields': {
    //       'location': '$locationDescription.description',
    //       'status': '$statusDescription.description',
    //       'importance': '$importanceDescription.description',
    //       'volunteer': '$volunteer._id'
    //     }
    //   },
    //   {
    //     // Change $project stage to be entirely inclusive
    //     '$project': {
    //       '_id': 1,
    //       'location': 1,
    //       'status': 1,
    //       'importance': 1,
    //       'volunteer': 1
    //     }
    //   }
//     ];
  
//     for (let middleware of smallPipe) {
//       pipeline.splice(pipeline.length - 1, 0, middleware);
//     }
  
//     console.log('Final pipeline:', JSON.stringify(pipeline, null, 2)); // Added logging for debugging
  
//     return pipeline;
//   }
  