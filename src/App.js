import Header from './Header.js';
import Contents from './Contents.js';
import Confirm from './Confirm.js';

class App{
    $target = null;
    
    constructor($target){
        this.$target = $target;
        
        this.header = new Header({
            $target,
            choicePro: (data) => {
                this.setState(data)
            }
        })

        this.contents = new Contents({
            $target,
        })
        

        this.confirm = new Confirm({
            $target
        })
    }

    setState(nextData){
        this.contents.setState(nextData)
    }
}

export default App;