import SelectAll from './Select.js';
import Calendar from './Calendar.js'
import Time from './Time.js'

class All{
    constructor(){
        const $professorList = document.querySelector(".professorList");
        const $proA = document.querySelector(".proA");
        const $proB = document.querySelector(".proB");
        const $proC = document.querySelector(".proC");
        const $consultList = document.querySelector('.consult-list')
        
        this.$professorList = $professorList;
        this.$proA = $proA;
        this.$proB = $proB;
        this.$proC = $proC;
        

        
        
        this.$proA.classList.add('pick')

        this.SelectAll = new SelectAll($consultList)
        this.Calendar = new Calendar($professorList,$proA,$proB,$proC)
        this.Time = new Time()

        this.$proA.addEventListener('click', (e) => {
            e.preventDefault();
            this.$proA.classList.add('pick');
            this.$proB.classList.remove('pick');
            this.$proC.classList.remove('pick');
            this.SelectAll.reset()
            this.Calendar.setState($professorList.querySelector('.pick').innerHTML)
            this.Time.reset()
            console.log($consultList)
        })
        
        this.$proB.addEventListener('click', (e) => {
            e.preventDefault();
            this.$proA.classList.remove('pick');
            this.$proB.classList.add('pick');
            this.$proC.classList.remove('pick');
            this.SelectAll.reset()
            this.Calendar.setState($professorList.querySelector('.pick').innerHTML)
            this.Time.reset()
        })
        
        this.$proC.addEventListener('click', (e) => {
            e.preventDefault();
            this.$proA.classList.remove('pick');
            this.$proB.classList.remove('pick');
            this.$proC.classList.add('pick');
            this.SelectAll.reset()
            this.Calendar.setState($professorList.querySelector('.pick').innerHTML)
            this.Time.reset()
        })
        
    }
}

export default All;