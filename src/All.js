import SelectAll from './Select.js'

class All{
    constructor(){
        const $professorList = document.querySelector(".professorList");
        const $proA = document.querySelector(".proA");
        const $proB = document.querySelector(".proB");
        const $proC = document.querySelector(".proC");
        
        this.$professorList = $professorList;
        this.$proA = $proA;
        this.$proB = $proB;
        this.$proC = $proC;
        
        this.$proA.classList.add('pick')
    

        this.SelectAll = new SelectAll()
        
        this.$proA.addEventListener('click', (e) => {
            e.preventDefault();

            this.$proA.classList.add('pick');
            this.$proB.classList.remove('pick');
            this.$proC.classList.remove('pick');
            this.SelectAll.reset()

        })
        
        this.$proB.addEventListener('click', (e) => {
            e.preventDefault();

            this.$proA.classList.remove('pick');
            this.$proB.classList.add('pick');
            this.$proC.classList.remove('pick');
            this.SelectAll.reset()

        })
        
        this.$proC.addEventListener('click', (e) => {
            e.preventDefault();

            this.$proA.classList.remove('pick');
            this.$proB.classList.remove('pick');
            this.$proC.classList.add('pick');
            this.SelectAll.reset()

        })
        
    }
}

export default All;