export default function buildPipe(smallPipe) {
    const pipeline = 
        [
            {
              '$lookup': {
                'from': 'importances', 
                'localField': 'impotranceCode', 
                'foreignField': '_id', 
                'as': 'importance'
              }
            }, {
              '$lookup': {
                'from': 'statuses', 
                'localField': 'statusCode', 
                'foreignField': '_id', 
                'as': 'status'
              }
            },{
                '$lookup': {
                  'from': 'locations', 
                  'localField': 'locationCode', 
                  'foreignField': '_id', 
                  'as': 'location'
                }
              },
             {
              '$unwind': {
                'path': '$importance'
              }
            }, {
              '$unwind': {
                'path': '$status'
              }
            },  {
                '$unwind': {
                  'path': '$location'
                }
              }, {
              '$set': {
                'status': '$description.statuses', 
                'importance': '$description.importances',
                'location': '$description.locations'
              }
            }
          ]
    
    smallPipe.forEach(element => {
      pipeline.push(element);
    });

    return pipeline;
}




