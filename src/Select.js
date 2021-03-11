class SelectAll {
    constructor(){
        const $select01 = document.querySelector('.select01');
        const $select02 = document.querySelector('.select02');
        const $select03 = document.querySelector('.select03');
        const $select04 = document.querySelector('.select04');
        const $select05 = document.querySelector('.select05');
        const $after = document.querySelector('.after');
        const $before = document.querySelector('.before');

        this.$select01 = $select01
        this.$select02 = $select02
        this.$select03 = $select03
        this.$select04 = $select04
        this.$select05 = $select05
        this.$after = $after
        this.$before = $before

        this.$select01.addEventListener('click', (e)=>{
            e.preventDefault()
            this.$select01.classList.toggle('show')
        })
        
        this.$select02.addEventListener('click', (e)=>{
            e.preventDefault()
            this.$select02.classList.toggle('show')
        })
        
        this.$select03.addEventListener('click', (e)=>{
            e.preventDefault()
            this.$select03.classList.toggle('show')
        })
        
        this.$select04.addEventListener('click', (e)=>{
            e.preventDefault()
            this.$select04.classList.toggle('show')
            this.$select05.disabled =false
            this.$select05.placeholder =''
        })
    
        this.$after.addEventListener('click', (e)=>{
            this.$after.classList.add('show')
            this.$before.classList.remove('show')
        })
        
        this.$before.addEventListener('click', (e)=>{
            
            this.$before.classList.add('show')
            this.$after.classList.remove('show')
        })
    }

    reset(){
        this.$select01.classList.remove('show')
        this.$select02.classList.remove('show')
        this.$select03.classList.remove('show')
        this.$select04.classList.remove('show')
        this.$select05.classList.remove('show')
        this.$after.classList.remove('show')
        this.$before.classList.remove('show')
    }
}

export default SelectAll;




