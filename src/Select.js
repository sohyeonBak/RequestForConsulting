class SelectAll {
    data = null;
    info = null;
    button = '';
    constructor({ info }){
        const $afterTime = document.querySelector(".after")
        const $beforTime = document.querySelector(".before")
        this.$afterTime = $afterTime;
        this.$beforTime = $beforTime;

        this.$afterTime.addEventListener('click', (e) =>{
            this.button = e.target.textContent;
            if(this.button==='오전'){
                this.$afterTime.classList.add('show')
                this.$beforTime.classList.remove('show')
            }
            this.setButton(this.button)
        })

        this.$beforTime.addEventListener('click', (e) =>{
            this.button = e.target.textContent;
            if(this.button==='오후'){
                this.$beforTime.classList.add('show')
                this.$afterTime.classList.remove('show')
            }
            this.setButton(this.button)
        })

        this.info = info;
    }

    setButton(nextData){
        this.button = nextData;
        console.log(nextData)
    }
    
    setState(nextData){
        this.data = nextData;
        this.render();
    }

    render(){
        console.log(this.data)
        if(this.data==='pickday'){
            this.$afterTime.classList.remove("delete");
            this.$afterTime.addEventListener('click', (e) => {
                if(this.button==='오전'){
                    this.$afterTime.classList.add('show')
                    this.$beforTime.classList.remove('show')
                }
            })
            this.$beforTime.classList.remove("delete");
            this.$beforTime.addEventListener('click', (e) => {
                if(this.button==='오후'){
                    this.$beforTime.classList.add('show')
                    this.$afterTime.classList.remove('show')
                }
            })
        }else if(this.data==='Ahalf'){
            if(this.info===undefined||this.info==='proA'){
                this.$afterTime.classList.add("delete");
                this.$afterTime.classList.remove('show');
                this.$afterTime.addEventListener('click', (e) => {
                    this.$afterTime.classList.remove('show')
                })
            }else if(this.info==='proB'){
                this.$beforTime.classList.add("delete");
                this.$beforTime.classList.remove('show');
                this.$beforTime.addEventListener('click', (e) => {
                    this.$beforTime.classList.remove('show')
                })
            }else if(this.info==='proC'){
                this.$afterTime.classList.add("delete");
                this.$afterTime.classList.remove('show');
                this.$afterTime.addEventListener('click', (e) => {
                    this.$afterTime.classList.remove('show')
                })
            }
        }else if(this.data==='xday'){
            this.$afterTime.classList.remove('show');
            this.$beforTime.classList.remove('show');


            this.$afterTime.classList.add("delete");
            this.$afterTime.addEventListener('click', (e) => {
                this.$afterTime.classList.remove('show')
            })
            this.$beforTime.classList.add("delete");
            this.$beforTime.addEventListener('click', (e) => {
                this.$beforTime.classList.remove('show')
            })
        }
    }
    
}

export default SelectAll;




