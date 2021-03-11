export default function Calendar($professorList, $proA, $proB, $proC){
        const $prevMonth = document.querySelector(".prevMonth");
        const $nextMonth = document.querySelector(".nextMonth");
        const $calendarMonth = document.querySelector(".calendarMonth");
        const $dayList = document.querySelector(".dayList");

        const leftSRC = 'https://s3-alpha-sig.figma.com/img/6174/45e2/fa79de1648a04ff017eaa043d71b612b?Expires=1616371200&Signature=YQ-zq5Waj-hSUJyYFc9YTHFJLBuQFqbffnCy9O8SMmWKhqiFFf3m16cUXJDLy1FbR~bufvGnR8ax04J2XduCvKHlyuhUSNxasgj6OG~9mpxSk2sAy-mhms2iRut2QE7JesKA3-kKdQmj9NAhDmUBoLMv3n6uFUWf-SDBnsfQEKDtHvv1DvohVhgLog3cXo4wIewEDaNjbE1Kbnq2TgYuJjMEwRCwksuy-QN4LAkNWuErKJSexND2p3kuookCmvgdeYqlvstE8PI3pt~F~R5F8oE~~AOCQVpiiFrBSG3hdL4HxPNwx4qCEngwzfunSIZ0GhOkUOy9z~qDY3Gfv-xWzg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'
        const rightSRC = 'https://s3-alpha-sig.figma.com/img/0672/f639/a9228b972262228f17353fc1f386ed6e?Expires=1616371200&Signature=NBj-XeJpO~MVRLkzdSbwmaU2l4vMliaWFs0vz6h4uj9nqzrQsfJuWSyJ4h31PP7snlvieyt5aXnF9~ZdpU53iqihPpMgw-5NEhHX9q7V4my6TbtNs4HV2Abrm0RB7rjmjLqjd89z0a2rhcM-Mp3YllMz54BiddgNNFvCzBJ0IatnQa5Zw3x1AWJ6Ree4lfg5zHngAYimmO1rYlDqHqOylgWSNixci42YPRmDdtKza5jvPqK7Lc8lhSX2oQby-B6pvhoLtHeKm7-dt9ccz8rluDnESu9GcJ9GK9-JH3lsFa2WQ~JgA502C3m0W8lzCroXINgLCblVbETgLNJA1A-qYA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'
        
        this.$prevMonth = $prevMonth;
        this.$nextMonth = $nextMonth;
        this.$calendarMonth = $calendarMonth;
        this.$dayList = $dayList;

        this.$prevMonth.src = leftSRC;
        this.$nextMonth.src = rightSRC;
        
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
        let date = lastDay[thisMonth];
        let thisDate = month[thisMonth];
        
        if($professorList.querySelector('.pick').innerHTML===$proA.innerHTML){
            console.log('a')
            let tag = "<tr>";
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
            
           return (this.$calendarMonth.textContent = thisDate,
            this.$dayList.innerHTML = tag);

            
            

        }else if($professorList.querySelector('.pick').innerHTML===$proB.innerHTML){
            console.log('b')
            const tag = "<tr>";
            const count = 0;
            
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
            
            return (this.$calendarMonth.textContent = thisDate,
                this.$dayList.innerHTML = tag);

            

        }else if($professorList.querySelector('.pick').innerHTML===$proC.innerHTML){
            console.log('c')
            const tag = "<tr>";
            const count = 0;
            
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
            
            return (this.$calendarMonth.textContent = thisDate,
                this.$dayList.innerHTML = tag);
            
            
        }
    

        // this.$prevMonth.addEventListener('click', (e) =>{
        //     thisMonth > 0 ? thisMonth-- : 0;
        //     let thisMonthDay = new Date(nowDate.getFullYear(), thisMonth).getDay();
        //     if($professorList.querySelector('.pick').innerHTML===$proA){
        //         const tag = "<tr>";
        //         const count = 0;
                
        //         for (let j = 0; j < thisMonthDay; j++) {
        //             tag += "<td></td>";
        //             count++;
        //         }
                
        //         for (let i = 1; i <= date; i++) {
        //             if (count % 7 === 0) {
        //                 tag += "<tr>";
                        
        //             }
        //             if(((thisDate==="Jan"&& i===1)||(thisDate==="Feb"&& (i===11||i===12||i===13))||(thisDate==="Mar"&& i===1)||(thisDate==="May"&& (i===5||i===19))||(thisDate==="Aug"&& (i===20||i===21||i===22)))||(count % 7 === 0||count % 7 === 6)){
        //                 tag += `<td class="xday"><p>${i}</p></td>`;
        //                 count++;
        //             }else if(count%7===2||count%7===4){
        //                 tag += `<td class="Ahalf"><p>${i}</p></td>`;
        //                 count++;
        //             }
        //             else{
        //                 tag += `<td class="pickday"><p>${i}</p></td>`;
        //                 count++;
        //             }
        //             if (count % 7 === 0) {
        //                 tag += "</tr>";
        //                 }
                    
        //         }
                
        //         this.$calendarMonth.textContent = thisDate
        //         this.$dayList.innerHTML = tag;

        //     }else if($professorList.querySelector('.pick').innerHTML===$proB){
        //         const tag = "<tr>";
        //         const count = 0;
                
        //         for (let j = 0; j < thisMonthDay; j++) {
        //             tag += "<td></td>";
        //             count++;
        //         }
                
        //         for (let i = 1; i <= date; i++) {
        //             if (count % 7 === 0) {
        //                 tag += "<tr>";
                        
        //             }
        //             if(((thisDate==="Jan"&& i===1)||(thisDate==="Feb"&& (i===11||i===12||i===13))||(thisDate==="Mar"&& i===1)||(thisDate==="May"&& (i===5||i===19))||(thisDate==="Aug"&& (i===20||i===21||i===22)))||(count % 7 === 0||count % 7 === 6)){
        //                 tag += `<td class="xday"><p>${i}</p></td>`;
        //                 count++;
        //             }else if(count%7===2||count%7===5){
        //                 tag += `<td class="Ahalf"><p>${i}</p></td>`;
        //                 count++;
        //             }
        //             else{
        //                 tag += `<td class="pickday"><p>${i}</p></td>`;
        //                 count++;
        //             }
        //             if (count % 7 === 0) {
        //                 tag += "</tr>";
        //                 }
                    
        //         }
                
        //         this.$calendarMonth.textContent = thisDate
        //         this.$dayList.innerHTML = tag;

        //     }else if($professorList.querySelector('.pick').innerHTML===$proC){
        //         const tag = "<tr>";
        //         const count = 0;
                
        //         for (let j = 0; j < thisMonthDay; j++) {
        //             tag += "<td></td>";
        //             count++;
        //         }
                
        //         for (let i = 1; i <= date; i++) {
        //             if (count % 7 === 0) {
        //                 tag += "<tr>";
                        
        //             }
        //             if(((thisDate==="Jan"&& i===1)||(thisDate==="Feb"&& (i===11||i===12||i===13))||(thisDate==="Mar"&& i===1)||(thisDate==="May"&& (i===5||i===19))||(thisDate==="Aug"&& (i===20||i===21||i===22)))||(count % 7 === 0||count % 7 === 6)){
        //                 tag += `<td class="xday"><p>${i}</p></td>`;
        //                 count++;
        //             }else if(count%7===1||count%7===3){
        //                 tag += `<td class="Ahalf"><p>${i}</p></td>`;
        //                 count++;
        //             }
        //             else{
        //                 tag += `<td class="pickday"><p>${i}</p></td>`;
        //                 count++;
        //             }
        //             if (count % 7 === 0) {
        //                 tag += "</tr>";
        //                 }
                    
        //         }
                
        //         this.$calendarMonth.textContent = thisDate
        //         this.$dayList.innerHTML = tag;
                
        //     }

        //     const $pickDay = document.querySelectorAll('.pickday');
        //     const $defaultDay = document.querySelector('.pickday');
        //     const $Ahalf = document.querySelectorAll('.Ahalf');
            
        //     this.$pickDay = $pickDay
        //     this.$defaultDay = $defaultDay
        //     this.$Ahalf = $Ahalf
            
        //     $defaultDay.classList.add('show')
        //     const arr = [this.$defaultDay];
            
        //     for(let j = 0; j<this.$pickDay.length; j++){
        //         this.$pickDay[j].addEventListener('click',(e)=>{ 
        //             this.$defaultDay.classList.remove('show')
        //             this.$pickDay[j].classList.add('show');
        //             arr.push(this.$pickDay[j])
        //             if(arr[arr.length-2]!==this.$pickDay[j]){
        //                 arr[arr.length-2].classList.remove('show')
        //             }
                    
        //         })
        //     }
            
            
        //     for (let k = 0; k<this.$Ahalf.length; k++){
        //         this.$Ahalf[k].addEventListener('click',(e) =>{
                    
        //         })
        //     }
        // })


        // this.$nextMonth.addEventListener('click', (e) =>{
        //     thisMonth < month.length - 1 ? thisMonth++ : month.length - 1;
        //     let thisMonthDay = new Date(nowDate.getFullYear(), thisMonth).getDay();
        //     if($professorList.querySelector('.pick').innerHTML===$proA){
        //         const tag = "<tr>";
        //         const count = 0;
                
        //         for (let j = 0; j < thisMonthDay; j++) {
        //             tag += "<td></td>";
        //             count++;
        //         }
                
        //         for (let i = 1; i <= date; i++) {
        //             if (count % 7 === 0) {
        //                 tag += "<tr>";
                        
        //             }
        //             if(((thisDate==="Jan"&& i===1)||(thisDate==="Feb"&& (i===11||i===12||i===13))||(thisDate==="Mar"&& i===1)||(thisDate==="May"&& (i===5||i===19))||(thisDate==="Aug"&& (i===20||i===21||i===22)))||(count % 7 === 0||count % 7 === 6)){
        //                 tag += `<td class="xday"><p>${i}</p></td>`;
        //                 count++;
        //             }else if(count%7===2||count%7===4){
        //                 tag += `<td class="Ahalf"><p>${i}</p></td>`;
        //                 count++;
        //             }
        //             else{
        //                 tag += `<td class="pickday"><p>${i}</p></td>`;
        //                 count++;
        //             }
        //             if (count % 7 === 0) {
        //                 tag += "</tr>";
        //                 }
                    
        //         }
                
        //         this.$calendarMonth.textContent = thisDate
        //         this.$dayList.innerHTML = tag;

        //     }else if($professorList.querySelector('.pick').innerHTML===$proB){
        //         const tag = "<tr>";
        //         const count = 0;
                
        //         for (let j = 0; j < thisMonthDay; j++) {
        //             tag += "<td></td>";
        //             count++;
        //         }
                
        //         for (let i = 1; i <= date; i++) {
        //             if (count % 7 === 0) {
        //                 tag += "<tr>";
                        
        //             }
        //             if(((thisDate==="Jan"&& i===1)||(thisDate==="Feb"&& (i===11||i===12||i===13))||(thisDate==="Mar"&& i===1)||(thisDate==="May"&& (i===5||i===19))||(thisDate==="Aug"&& (i===20||i===21||i===22)))||(count % 7 === 0||count % 7 === 6)){
        //                 tag += `<td class="xday"><p>${i}</p></td>`;
        //                 count++;
        //             }else if(count%7===2||count%7===5){
        //                 tag += `<td class="Ahalf"><p>${i}</p></td>`;
        //                 count++;
        //             }
        //             else{
        //                 tag += `<td class="pickday"><p>${i}</p></td>`;
        //                 count++;
        //             }
        //             if (count % 7 === 0) {
        //                 tag += "</tr>";
        //                 }
                    
        //         }
                
        //         this.$calendarMonth.textContent = thisDate
        //         this.$dayList.innerHTML = tag;

        //     }else if($professorList.querySelector('.pick').innerHTML===$proC){
        //         const tag = "<tr>";
        //         const count = 0;
                
        //         for (let j = 0; j < thisMonthDay; j++) {
        //             tag += "<td></td>";
        //             count++;
        //         }
                
        //         for (let i = 1; i <= date; i++) {
        //             if (count % 7 === 0) {
        //                 tag += "<tr>";
                        
        //             }
        //             if(((thisDate==="Jan"&& i===1)||(thisDate==="Feb"&& (i===11||i===12||i===13))||(thisDate==="Mar"&& i===1)||(thisDate==="May"&& (i===5||i===19))||(thisDate==="Aug"&& (i===20||i===21||i===22)))||(count % 7 === 0||count % 7 === 6)){
        //                 tag += `<td class="xday"><p>${i}</p></td>`;
        //                 count++;
        //             }else if(count%7===1||count%7===3){
        //                 tag += `<td class="Ahalf"><p>${i}</p></td>`;
        //                 count++;
        //             }
        //             else{
        //                 tag += `<td class="pickday"><p>${i}</p></td>`;
        //                 count++;
        //             }
        //             if (count % 7 === 0) {
        //                 tag += "</tr>";
        //                 }
                    
        //         }
                
        //         this.$calendarMonth.textContent = thisDate
        //         this.$dayList.innerHTML = tag;
                
        //     }


        //     const $pickDay = document.querySelectorAll('.pickday');
        //     const $defaultDay = document.querySelector('.pickday');
        //     const $Ahalf = document.querySelectorAll('.Ahalf');
            
        //     this.$pickDay = $pickDay
        //     this.$defaultDay = $defaultDay
        //     this.$Ahalf = $Ahalf
            
        //     $defaultDay.classList.add('show')
        //     const arr = [this.$defaultDay];
            
        //     for(let j = 0; j<this.$pickDay.length; j++){
        //         this.$pickDay[j].addEventListener('click',(e)=>{ 
        //             this.$defaultDay.classList.remove('show')
        //             this.$pickDay[j].classList.add('show');
        //             arr.push(this.$pickDay[j])
        //             if(arr[arr.length-2]!==this.$pickDay[j]){
        //                 arr[arr.length-2].classList.remove('show')
        //             }
                    
        //         })
        //     }
            
            
        //     for (let k = 0; k<this.$Ahalf.length; k++){
        //         this.$Ahalf[k].addEventListener('click',(e) =>{
                    
        //         })
        //     }
        // })

}
    




