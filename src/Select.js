class SelectAll {
    constructor(){
        const etc = true;
        const $select01 = document.querySelector('.select01');
        const $select02 = document.querySelector('.select02');
        const $select03 = document.querySelector('.select03');
        const $select04 = document.querySelector('.select04');
        const $select05 = document.querySelector('.select05');

        this.$select01 = $select01
        this.$select02 = $select02
        this.$select03 = $select03
        this.$select04 = $select04
        this.$select05 = $select05
        this.etc = etc

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
            this.etc = !this.etc 
            ? (this.$select05.disabled = true, this.$select05.placeholder ='기타를 선택하고 입력해주세요.') 
            : (this.$select05.disabled = false, this.$select05.placeholder =''); 
        })
    
    }
    
    reset(){
        this.$select01.classList.remove('show')
        this.$select02.classList.remove('show')
        this.$select03.classList.remove('show')
        this.$select04.classList.remove('show')
        this.etc = true
        this.$select05.disabled = true
        this.$select05.placeholder ='기타를 선택하고 입력해주세요.'
    }

}

export default SelectAll;




