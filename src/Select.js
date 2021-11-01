class SelectAll {
    parent = null;
    constructor({data}){
        this.data = data
    }
    
    setState(nextData){
        console.log(nextData)
        this.parent = nextData;
    }
    
}

export default SelectAll;




