// function filterByParams(filters) {
//     let query = { status:new RegExp('w', 'i') };
//     if(filters){
//         if(filters.status){
//             query.status = new RegExp(filters.status, 'i');
//         }

//         if(filters.importance){
//             query.importance = new RegExp(filters.importance, 'i');
//         }
//         if(filters.location){
//             query.location = new RegExp(filters.location, 'i');
//         }
//     }
//     const pipeline = [{'$match': query}]
//     pipeline.push({
//         '$project': {
//             'phoneNumber': "",
//             '_volenteerCode': 0
//         }
//     });
//     return pipeline;


// }
// function filterbyId(id) {
//     const pipeline = [{ '$match': { '_id': Number(id) } }]
//     return pipeline;
// }

// export { filterByParams, filterbyId };
