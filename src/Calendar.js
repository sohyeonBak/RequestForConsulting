import Time from './Time.js'


class Calendar{
    isPickProfessor='';
    constructor($professorList,$proA,$proB,$proC,$finalCheck){
        const $prevMonth = document.querySelector(".prevMonth");
        const $nextMonth = document.querySelector(".nextMonth");
        const $calendarMonth = document.querySelector(".calendarMonth");
        const $dayList = document.querySelector(".dayList");
        
        this.$prevMonth = $prevMonth;
        this.$nextMonth = $nextMonth;
        this.$calendarMonth = $calendarMonth;
        this.$dayList = $dayList;
        
        this.$professorList = $professorList;
        this.$proA = $proA;
        this.$proB = $proB;
        this.$proC = $proC;
        this.$finalCheck = $finalCheck;
        
        this.setState($professorList.querySelector('.pick').innerHTML)
        
    }
    
    setState(nextData){
        this.isPickProfessor = nextData;

        const nowDate = new Date();
        const year = nowDate.getFullYear();
        const lastDay = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        const month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
            lastDay[1] = 29;
        } else {
            lastDay[1] = 28;
        }

        const thisMonth = new Date(nowDate.getFullYear(), nowDate.getMonth()).getMonth();
        const thisMonthDay = new Date(nowDate.getFullYear(), thisMonth).getDay();
        
        const thisDate = month[thisMonth];
        const date = lastDay[thisMonth];

        this.nowDate = nowDate;
        this.year = year;
        this.lastDay = lastDay;
        this.month =month; 
        this.thisMonth = thisMonth;
        this.thisMonthDay = thisMonthDay;
        this.thisDate = thisDate;
        this.date = date;

        this.madeCalendal(nextData)

        this.$prevMonth.addEventListener('click', (e) =>{
            console.log(e)
            this.thisMonth > 0 ? this.thisMonth-- : 0;
            this.madeCalendal(nextData)
        })
        
        this.$nextMonth.addEventListener('click', (e) =>{
            console.log(e)
            this.thisMonth < this.month.length - 1 ? this.thisMonth++ : this.month.length - 1;
            this.madeCalendal(nextData)
        })
    }

    madeCalendal(nextData){
        this.thisMonthDay = new Date(this.nowDate.getFullYear(), this.thisMonth).getDay();
        this.thisDate = this.month[this.thisMonth];
        this.date = this.lastDay[this.thisMonth];

        let tag = "<tr>";
        tag = "<tr></tr>"
           
        let count = 0;
        for (let j = 0; j < this.thisMonthDay; j++) {
            tag += `<td></td>`;
            count++;
        }

        if(nextData===this.$proA.innerHTML){
            for (let i = 1; i <= this.date; i++) {
                if (count % 7 === 0) {
                    tag += "<tr>";
                    
                }
                if(((this.thisDate==="Jan"&& i===1)||(this.thisDate==="Feb"&& (i===11||i===12||i===13))||(this.thisDate==="Mar"&& i===1)||(this.thisDate==="May"&& (i===5||i===19))||(this.thisDate==="Aug"&& (i===20||i===21||i===22)))||(count % 7 === 0||count % 7 === 6)){
                    tag += `<td class="xday"><p>${i}</p></td>`;
                    count++;
                }else if(count%7===2||count%7===4){
                    tag += `<td class="Ahalf"><p>${i}</p></td>`;
                    count++;
                }
                else{
                    tag += `<td class="pickday"><p>${i}</p></td>`;
                    count++;
                }
                if (count % 7 === 0) {
                    tag += "</tr>";
                    }
                
            }

        }else if(nextData===this.$proB.innerHTML){
        
            for (let i = 1; i <= this.date; i++) {
                if (count % 7 === 0) {
                    tag += "<tr>";
                    
                }
                if(((this.thisDate==="Jan"&& i===1)||(this.thisDate==="Feb"&& (i===11||i===12||i===13))||(this.thisDate==="Mar"&& i===1)||(this.thisDate==="May"&& (i===5||i===19))||(this.thisDate==="Aug"&& (i===20||i===21||i===22)))||(count % 7 === 0||count % 7 === 6)){
                    tag += `<td class="xday"><p>${i}</p></td>`;
                    count++;
                }else if(count%7===2||count%7===5){
                    tag += `<td class="Ahalf"><p>${i}</p></td>`;
                    count++;
                }
                else{
                    tag += `<td class="pickday"><p>${i}</p></td>`;
                    count++;
                }
                if (count % 7 === 0) {
                    tag += "</tr>";
                    }
                
            }

        }else if(nextData===this.$proC.innerHTML){
            
            for (let i = 1; i <= this.date; i++) {
                if (count % 7 === 0) {
                    tag += "<tr>";
                    
                }
                if(((this.thisDate==="Jan"&& i===1)||(this.thisDate==="Feb"&& (i===11||i===12||i===13))||(this.thisDate==="Mar"&& i===1)||(this.thisDate==="May"&& (i===5||i===19))||(this.thisDate==="Aug"&& (i===20||i===21||i===22)))||(count % 7 === 0||count % 7 === 6)){
                    tag += `<td class="xday"><p>${i}</p></td>`;
                    count++;
                }else if(count%7===1||count%7===3){
                    tag += `<td class="Ahalf"><p>${i}</p></td>`;
                    count++;
                }
                else{
                    tag += `<td class="pickday"><p>${i}</p></td>`;
                    count++;
                }
                if (count % 7 === 0) {
                    tag += "</tr>";
                }
            }

        }

        this.$calendarMonth.textContent = this.thisDate
        this.$dayList.innerHTML = tag

        this.selectedDay(nextData)
    }

    selectedDay(nextData){

        const $pickDay = document.querySelectorAll('.pickday');
        const $defaultDay = document.querySelector('.pickday');
        const $Ahalf = document.querySelectorAll('.Ahalf');
        const $xday = document.querySelectorAll('.xday');
        const $info =document.querySelector('.info');
        const $time = document.querySelector('.time');
        
        this.$pickDay = $pickDay
        this.$defaultDay = $defaultDay
        this.$Ahalf = $Ahalf
        this.$xday =$xday;
        this.$info = $info;
        this.$time = $time;
        
        this.$info.innerHTML =""
        this.$defaultDay.classList.add('show')

        const arr = [this.$defaultDay];

        this.Time = new Time($info,$time,this.$finalCheck);
        
        for(let j = 0; j<this.$pickDay.length; j++){
            this.$pickDay[j].addEventListener('click',(e)=>{ 
                this.$info.innerHTML="오전/오후 모두 가능합니다."
                this.$defaultDay.classList.remove('show')
                this.$pickDay[j].classList.add('show');
                arr.push(this.$pickDay[j])
                if(arr[arr.length-2]!==this.$pickDay[j]){
                    arr[arr.length-2].classList.remove('show')
                }
                this.Time.isAllDay($info.innerHTML)
            })
        }
        
        for (let k = 0; k<this.$Ahalf.length; k++){
            this.$Ahalf[k].addEventListener('click',(e) =>{
                this.$defaultDay.classList.remove('show')
                this.$Ahalf[k].classList.add('show')
                arr.push(this.$Ahalf[k])
                if(arr[arr.length-2]!==this.$Ahalf[k]){
                    arr[arr.length-2].classList.remove('show')
                }
                if(nextData===this.$proA.innerHTML){
                    this.$info.innerHTML="오전만 가능합니다."
                    this.Time.isAfterDay($info.innerHTML)
                }else if(nextData===this.$proB.innerHTML){
                    this.$info.innerHTML="오후만 가능합니다."
                    this.Time.isBeforeDay($info.innerHTML)
                }else if (nextData===this.$proC.innerHTML){
                    this.$info.innerHTML="오전만 가능합니다."
                    this.Time.isAfterDay($info.innerHTML)
                }
                
            })
        }

        for (let y = 0; y<this.$xday.length; y++){
            this.$xday[y].addEventListener('click', (e) =>{
                console.log(e)
                this.$info.innerHTML=""
                this.Time.reset()
            })
        }
    }

    reset(){
        this.$pickDay.classList.remove('show')
        this.$Ahalf.classList.remove('show')
        this.$defaultDay.classList.add('show')
    }
    
}

export default Calendar;
        
        
       
    




