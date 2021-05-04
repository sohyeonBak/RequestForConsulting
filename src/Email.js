class Email{
    constructor($time, $finalCheck){
        const $emailCon = document.querySelector('.emailCon');
        this.$emailCon = $emailCon;
        
        this.$time = $time;
        this.$finalCheck = $finalCheck;
        this.$finalCheck.classList.add('hide')
        
    }

    setState(){    
        this.$emailCon.disabled = false;
        this.$emailCon.placeholder ='';
        this.$finalCheck.classList.remove('hide')
        this.$finalCheck.addEventListener('click', (e) => {
            location.reload()
        })
    }

    reset(){
        this.$finalCheck.classList.add('hide')
        this.$finalCheck.addEventListener('click', (e) => {
            e.preventdefault()
        })
        this.$emailCon.disabled = true;
        this.$emailCon.placeholder ='상담 확정 메일을 받을 주소를 입력해주세요.';
    }
}

export default Email;