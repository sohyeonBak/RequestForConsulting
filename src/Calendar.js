import SelectAll from "./Select.js";

class Calendar{
    data = null;
    constructor({$monthName, $prevMonth, $nextMonth, $dayList, $info, data}){
        this.$monthName = $monthName;
        this.$prevMonth = $prevMonth;
        this.$nextMonth = $nextMonth;
        this.$dayList = $dayList;
        this.$info = $info;
        this.data = data;
        
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
        this.month = month; 
        this.thisMonth = thisMonth;
        this.thisMonthDay = thisMonthDay;
        this.thisDate = thisDate;
        this.date = date;

        let onMonth = this.thisMonth;
        this.$prevMonth.addEventListener('click', (e) =>{
            onMonth = this.thisMonth > 0 ? this.thisMonth-- : 0;
            this.render(onMonth-1>=0?onMonth-1:0)
        })
        
        this.$nextMonth.addEventListener('click', (e) =>{
            onMonth = this.thisMonth < this.month.length - 1 ? this.thisMonth++ : this.month.length - 1;
            this.render(onMonth+1 <= this.month.length - 1 ? onMonth+1 : this.month.length - 1)
        })
        this.render(onMonth)
        
        this.selectAll = new SelectAll({
            info : this.data
        })
        
    }


    render(onMonth){
        
        this.thisMonthDay = new Date(this.nowDate.getFullYear(), onMonth).getDay();
        this.thisDate = this.month[this.thisMonth];
        this.date = this.lastDay[this.thisMonth];
        
        let tag = "<tr>";
        tag = "<tr></tr>"
           
        let count = 0;
        for (let j = 0; j < this.thisMonthDay; j++) {
            tag += `<td></td>`;
            count++;
        }
        if(!this.data || this.data==="proA"){
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
        }else if(this.data==="proB"){
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
        }else if(this.data==="proC"){
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
        
        this.$monthName.textContent = this.thisDate;
        this.$dayList.innerHTML = tag;

        document.querySelectorAll(".pickday").forEach((item)=>{
            item.addEventListener("click", (e) => {
                e.preventDefault()
                this.selectAll.setState(e.target.parentElement.className)
                this.$info.innerHTML = "오전/오후 모두 가능합니다.";
            })
        })

        document.querySelectorAll(".Ahalf").forEach((item)=>{
            item.addEventListener("click", (e) => {
                e.preventDefault()
                this.selectAll.setState(e.target.parentElement.className)
                if(this.data==="proA"|| !this.data){
                    this.$info.innerHTML = "오전만 가능합니다.";
                }else if(this.data==="proB"){
                    this.$info.innerHTML = "오후만 가능합니다.";
                }else if(this.data==="proC"){
                    this.$info.innerHTML = "오후만 가능합니다.";
                }
            })
        })

        document.querySelectorAll(".xday").forEach((item)=>{
            item.addEventListener("click", (e) => {
                e.preventDefault();
                this.selectAll.setState(e.target.parentElement.className)
                this.$info.innerHTML = "";
            })
        })
    }

    
}

export default Calendar;




