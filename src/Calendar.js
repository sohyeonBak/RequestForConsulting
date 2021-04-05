import Time from './Time.js'

class Calendar{
    isPickProfessor='';
    constructor($professorList,$proA,$proB,$proC,$finalCheck){
        const $prevMonth = document.querySelector(".prevMonth");
        const $nextMonth = document.querySelector(".nextMonth");
        const $calendarMonth = document.querySelector(".calendarMonth");
        const $dayList = document.querySelector(".dayList");
        
        const leftSRC = '/leftarrow.png'
        const rightSRC = '/rightarrow.png'
        
        this.$prevMonth = $prevMonth;
        this.$nextMonth = $nextMonth;
        this.$calendarMonth = $calendarMonth;
        this.$dayList = $dayList;
        this.$prevMonth.src = leftSRC;
        this.$nextMonth.src = rightSRC;

        this.$professorList = $professorList;
        this.$proA = $proA;
        this.$proB = $proB;
        this.$proC = $proC;
        this.$finalCheck = $finalCheck;
        

        this.setState($professorList.querySelector('.pick').innerHTML)
        
    }
    
    

    setState(nextData){
        this.isPickProfessor = nextData;

        let nowDate = new Date();
        let year = nowDate.getFullYear();
        let lastDay = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        let month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
            lastDay[1] = 29;
        } else {
            lastDay[1] = 28;
        }

        let thisMonth = new Date(nowDate.getFullYear(), nowDate.getMonth()).getMonth();
        let thisMonthDay = new Date(nowDate.getFullYear(), thisMonth).getDay();
        
        let thisDate = month[thisMonth];
        let date = lastDay[thisMonth];


        let tag = "<tr>";

        if(nextData===this.$proA.innerHTML){
            
            let count = 0;
            for (let j = 0; j < thisMonthDay; j++) {
                tag += `<td></td>`;
                count++;
            }
            
            for (let i = 1; i <= date; i++) {
                if (count % 7 === 0) {
                    tag += "<tr>";
                    
                }
                if(((thisDate==="Jan"&& i===1)||(thisDate==="Feb"&& (i===11||i===12||i===13))||(thisDate==="Mar"&& i===1)||(thisDate==="May"&& (i===5||i===19))||(thisDate==="Aug"&& (i===20||i===21||i===22)))||(count % 7 === 0||count % 7 === 6)){
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
            
            let count = 0;
            for (let j = 0; j < thisMonthDay; j++) {
                tag += "<td></td>";
                count++;
            }
            
            for (let i = 1; i <= date; i++) {
                if (count % 7 === 0) {
                    tag += "<tr>";
                    
                }
                if(((thisDate==="Jan"&& i===1)||(thisDate==="Feb"&& (i===11||i===12||i===13))||(thisDate==="Mar"&& i===1)||(thisDate==="May"&& (i===5||i===19))||(thisDate==="Aug"&& (i===20||i===21||i===22)))||(count % 7 === 0||count % 7 === 6)){
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
            let count = 0;
            for (let j = 0; j < thisMonthDay; j++) {
                tag += "<td></td>";
                count++;
            }
            
            for (let i = 1; i <= date; i++) {
                if (count % 7 === 0) {
                    tag += "<tr>";
                    
                }
                if(((thisDate==="Jan"&& i===1)||(thisDate==="Feb"&& (i===11||i===12||i===13))||(thisDate==="Mar"&& i===1)||(thisDate==="May"&& (i===5||i===19))||(thisDate==="Aug"&& (i===20||i===21||i===22)))||(count % 7 === 0||count % 7 === 6)){
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

        this.$calendarMonth.textContent = thisDate;
        this.$dayList.innerHTML = tag;

        this.selectedDay(nextData)

        this.$prevMonth.addEventListener('click', () =>{
            thisMonth > 0 ? thisMonth-- : 0;

            thisMonthDay = new Date(nowDate.getFullYear(), thisMonth).getDay();
            thisDate = month[thisMonth];
            date = lastDay[thisMonth];
            
            tag = "<tr></tr>"
           
            if(nextData===this.$proA.innerHTML){
            
                let count = 0;
                for (let j = 0; j < thisMonthDay; j++) {
                    tag += `<td></td>`;
                    count++;
                }
                
                for (let i = 1; i <= date; i++) {
                    if (count % 7 === 0) {
                        tag += "<tr>";
                        
                    }
                    if(((thisDate==="Jan"&& i===1)||(thisDate==="Feb"&& (i===11||i===12||i===13))||(thisDate==="Mar"&& i===1)||(thisDate==="May"&& (i===5||i===19))||(thisDate==="Aug"&& (i===20||i===21||i===22)))||(count % 7 === 0||count % 7 === 6)){
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
                
                let count = 0;
                for (let j = 0; j < thisMonthDay; j++) {
                    tag += "<td></td>";
                    count++;
                }
                
                for (let i = 1; i <= date; i++) {
                    if (count % 7 === 0) {
                        tag += "<tr>";
                        
                    }
                    if(((thisDate==="Jan"&& i===1)||(thisDate==="Feb"&& (i===11||i===12||i===13))||(thisDate==="Mar"&& i===1)||(thisDate==="May"&& (i===5||i===19))||(thisDate==="Aug"&& (i===20||i===21||i===22)))||(count % 7 === 0||count % 7 === 6)){
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
                let count = 0;
                for (let j = 0; j < thisMonthDay; j++) {
                    tag += "<td></td>";
                    count++;
                }
                
                for (let i = 1; i <= date; i++) {
                    if (count % 7 === 0) {
                        tag += "<tr>";
                        
                    }
                    if(((thisDate==="Jan"&& i===1)||(thisDate==="Feb"&& (i===11||i===12||i===13))||(thisDate==="Mar"&& i===1)||(thisDate==="May"&& (i===5||i===19))||(thisDate==="Aug"&& (i===20||i===21||i===22)))||(count % 7 === 0||count % 7 === 6)){
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

            this.$calendarMonth.textContent = thisDate
            this.$dayList.innerHTML = tag
            
            this.selectedDay(nextData)
            
        })
        
        this.$nextMonth.addEventListener('click', () =>{
            thisMonth < month.length - 1 ? thisMonth++ : month.length - 1;
            
            thisMonthDay = new Date(nowDate.getFullYear(), thisMonth).getDay();
            thisDate = month[thisMonth];
            date = lastDay[thisMonth];
            
            tag = "<tr></tr>"
           
            if(nextData===this.$proA.innerHTML){
            
                let count = 0;
                for (let j = 0; j < thisMonthDay; j++) {
                    tag += `<td></td>`;
                    count++;
                }
                
                for (let i = 1; i <= date; i++) {
                    if (count % 7 === 0) {
                        tag += "<tr>";
                        
                    }
                    if(((thisDate==="Jan"&& i===1)||(thisDate==="Feb"&& (i===11||i===12||i===13))||(thisDate==="Mar"&& i===1)||(thisDate==="May"&& (i===5||i===19))||(thisDate==="Aug"&& (i===20||i===21||i===22)))||(count % 7 === 0||count % 7 === 6)){
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
                
                let count = 0;
                for (let j = 0; j < thisMonthDay; j++) {
                    tag += "<td></td>";
                    count++;
                }
                
                for (let i = 1; i <= date; i++) {
                    if (count % 7 === 0) {
                        tag += "<tr>";
                        
                    }
                    if(((thisDate==="Jan"&& i===1)||(thisDate==="Feb"&& (i===11||i===12||i===13))||(thisDate==="Mar"&& i===1)||(thisDate==="May"&& (i===5||i===19))||(thisDate==="Aug"&& (i===20||i===21||i===22)))||(count % 7 === 0||count % 7 === 6)){
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
                let count = 0;
                for (let j = 0; j < thisMonthDay; j++) {
                    tag += "<td></td>";
                    count++;
                }
                
                for (let i = 1; i <= date; i++) {
                    if (count % 7 === 0) {
                        tag += "<tr>";
                        
                    }
                    if(((thisDate==="Jan"&& i===1)||(thisDate==="Feb"&& (i===11||i===12||i===13))||(thisDate==="Mar"&& i===1)||(thisDate==="May"&& (i===5||i===19))||(thisDate==="Aug"&& (i===20||i===21||i===22)))||(count % 7 === 0||count % 7 === 6)){
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

            this.$calendarMonth.textContent = thisDate
            this.$dayList.innerHTML = tag

            this.selectedDay(nextData)

        })

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
                this.$info.innerHTML=""
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
        
        
       
    




