
function byId(id){
    const pipeline = [{ '$match': { '_id': Number(id) } }]
    console.log('pipeline:', pipeline); // debugging line
    return pipeline;
}

function filters(props) {
    console.log('props:', props); // debugging line
    const pipeline = []   
    if(props){
        if(props.statusCode){
            pipeline.push({ '$match':{'statusCode': Number(props.statusCode)}})
        }
        if(props.impotranceCode){
            pipeline.push({ '$match':{'impotranceCode': Number(props.impotranceCode)}})
        }
        if(props.locationCode){
            pipeline.push({'$match':{'locationCode': Number(props.locationCode)}})
        }
    }
    console.log('pipeline:', pipeline); // debugging line
    return pipeline;
}



export {byId};

export default filters;
