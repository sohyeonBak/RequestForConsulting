import SelectAll from './Select.js'

class Time {
    constructor(){
        const $after = document.querySelector('.after');
        const $before = document.querySelector('.before');
        const $emailCon = document.querySelector('.emailCon');
        const $finalCheck = document.querySelector('.finalCheck');
        
        this.$after = $after
        this.$before = $before
        this.$emailCon = $emailCon;
        this.$emailCon = $emailCon;
        this.$finalCheck =$finalCheck;
        this.$finalCheck.classList.add('hide')
        
        this.SelectAll = new SelectAll()

    }

    isAllDay(){
        this.$after.classList.remove('show');
        this.$before.classList.remove('show');
        this.$after.classList.remove('delete');
        this.$before.classList.remove('delete');
        this.$emailCon.disabled = true;
        this.$emailCon.placeholder ='상담 확정 메일을 받을 주소를 입력해주세요.'
        if(this.$emailCon.disabled === true){
            this.$finalCheck.classList.add('hide')
        }
        this.$after.addEventListener('click', () => {
            this.$after.classList.add('show');
            this.$before.classList.remove('show');
            this.$emailCon.disabled = false;
            this.$emailCon.placeholder =''
            if(this.$emailCon.disabled === false){
                this.$finalCheck.classList.remove('hide');
                this.$finalCheck.addEventListener('click', (e) => {
                    
                    this.reset()
                    this.SelectAll.reset()
                })
            }
            
        })

        this.$before.addEventListener('click', () => {
            this.$before.classList.add('show');
            this.$after.classList.remove('show');
            this.$emailCon.disabled = false;
            this.$emailCon.placeholder =''
            if(this.$emailCon.disabled === false){
                this.$finalCheck.classList.remove('hide');
                this.$finalCheck.addEventListener('click', (e) => {
                    
                    this.reset()
                    this.SelectAll.reset()
                    
                })
            }
            
        })

    }

    isAfterTime(){
        this.$after.classList.remove('show');
        this.$before.classList.remove('show');
        this.$after.classList.remove('delete');

        this.$before.classList.add('delete');
        this.$emailCon.disabled = true;
        this.$emailCon.placeholder ='상담 확정 메일을 받을 주소를 입력해주세요.'
        if(this.$emailCon.disabled === true){
            this.$finalCheck.classList.add('hide')
        }
        this.$after.addEventListener('click', () => {
            this.$after.classList.add('show');
            this.$emailCon.disabled = false;
            this.$emailCon.placeholder =''
            if(this.$emailCon.disabled === false){
                this.$finalCheck.classList.remove('hide');
                this.$finalCheck.addEventListener('click', (e) => {
                    
                    this.reset()
                    this.SelectAll.reset()
                })
            }
            
        })

        this.$before.addEventListener('click', (e) => {
            this.$before.classList.remove('show');
            
        })
    }

    isBeforeTime(){
        this.$after.classList.remove('show');
        this.$before.classList.remove('show');
        this.$before.classList.remove('delete');

        this.$after.classList.add('delete');
        this.$emailCon.disabled = true;
        this.$emailCon.placeholder ='상담 확정 메일을 받을 주소를 입력해주세요.'
        if(this.$emailCon.disabled === true){
            this.$finalCheck.classList.add('hide')
        }
        this.$before.addEventListener('click', () => {
            this.$before.classList.add('show');
            this.$after.classList.remove('show');
            this.$emailCon.disabled = false;
            this.$emailCon.placeholder =''
            if(this.$emailCon.disabled === false){
                this.$finalCheck.classList.remove('hide')
                this.$finalCheck.addEventListener('click', (e) => {
                    
                    this.reset()
                    this.SelectAll.reset()
                })
            }
            
        })

        this.$after.addEventListener('click', (e) => {
            this.$after.classList.remove('show');
            
        })
    }

    reset(){
        this.$after.classList.remove('show');
        this.$before.classList.remove('show');
        this.$after.classList.remove('delete');
        this.$before.classList.remove('delete');
    }
}

export default Time;