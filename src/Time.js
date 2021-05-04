import Email from './Email.js'

class Time {
    pickedDay = ''
    constructor($info,$time,$finalCheck){
        const $after = document.querySelector('.after');
        const $before = document.querySelector('.before');
        

        this.$after = $after;
        this.$before = $before;
        this.$info = $info;
        this.$time = $time;
        this.$finalCheck = $finalCheck;
        
        this.$after.classList.remove('show');
        this.$before.classList.remove('show');
        this.$after.classList.remove('delete')
        this.$before.classList.remove('delete');
        

        this.Email = new Email($time, $finalCheck)
        
       
    }

    isAllDay($info){
        this.pickedDay = $info;

        this.$after.classList.remove('show');
        this.$before.classList.remove('show');
        this.$after.classList.remove('delete')
        this.$before.classList.remove('delete')

        this.$after.addEventListener('click', () => {
            this.$after.classList.add('show');
            this.$before.classList.remove('show');
            this.Email.setState()
        })
        this.$before.addEventListener('click', () => {
            this.$before.classList.add('show');
            this.$after.classList.remove('show');
            this.Email.setState()
        })
        this.Email.reset()
    }

    isAfterDay($info){
        this.pickedDay = $info;

        this.$after.classList.add('show'); 
        this.$before.classList.remove('show');
        this.$after.classList.remove('delete')

        this.$before.classList.add('delete')
        
        this.$before.addEventListener('click', () => {
            this.$before.classList.remove('show');
            this.$after.classList.add('show'); 
        })
        this.Email.setState()
    }

    isBeforeDay($info){
        this.pickedDay = $info;

        this.$before.classList.add('show');
        this.$after.classList.remove('show');
        this.$before.classList.remove('delete')
        this.$after.classList.add('delete');

        this.$after.addEventListener('click', () => {
            this.$after.classList.remove('show');
            this.$before.classList.add('show');
        })
        this.Email.setState()
    }

    reset(){
        this.$after.classList.remove('show')
        this.$before.classList.remove('show')
        this.$after.classList.remove('delete')
        this.$before.classList.remove('delete')
        this.$after.addEventListener('click', () => {
            this.$after.classList.remove('show');
            this.$before.classList.remove('show');
            this.Email.reset()
        })
        this.$before.addEventListener('click', () => {
            this.$before.classList.remove('show');
            this.$after.classList.remove('show');
            this.Email.reset()
        })
        this.Email.reset()
    }

}


export default Time;
