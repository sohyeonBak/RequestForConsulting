class Email{
    isAbledInput = false;
    constructor($time, $finalCheck){
        const $emailCon = document.querySelector('.emailCon');
        this.$emailCon = $emailCon;
        this.$emailCon.placeholder ='상담 확정 메일을 받을 주소를 입력해주세요.';
        this.$emailCon.value = ''
        
        this.$time = $time;
        this.$finalCheck = $finalCheck;
        this.$finalCheck.classList.add('hide')
    }

    setState(){
        this.isAbledInput = this.$emailCon.disabled;
        
        if(this.$time.querySelector('.show')!==null){
            this.$emailCon.disabled = false;
            this.$emailCon.placeholder ='';
            this.$finalCheck.addEventListener('click', (e) => {
                e.preventDefault();
            })
        }else{
            this.$emailCon.disabled = true;
            this.$emailCon.placeholder ='상담 확정 메일을 받을 주소를 입력해주세요.';
            this.$emailCon.value = ''
            this.$finalCheck.classList.remove('hide')
            this.$finalCheck.addEventListener('click', (e) => {
                location.reload()
            })
        }
    }
}

export default Email;