function filters(props) {
    const pipeline = []   
    if(props){
        if(props.statusCode){//status
            pipeline.push({ '$match':{statusCode: props.statusCode}})
        }
        if(props.impotranceCode){//piority
            pipeline.push({ '$match':{impotranceCode: props.impotranceCode}})
        }
        if(props.locationCode){//i added
            pipeline.push({'$match':{locationCode: props.locationCode}})
        }
    }
    return pipeline;
}

function byId(id){
    const pipeline = [{ '$match': { '_id': Number(id) } }]
    return pipeline;
}

export {byId};

export default filters;
