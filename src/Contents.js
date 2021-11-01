import Calendar from "./Calendar.js";

class Contents{
  data = null;
  constructor({$target, initialData, data}){
    const $wrapper = document.createElement("section")
    this.$wrapper = $wrapper;
    this.$wrapper.className = "section";
    $target.appendChild(this.$wrapper)
    this.data = data;
    this.initialData = initialData;

    this.render();
  }

  setState(nextData){
    this.initialData = nextData;
    this.render();
  }

  render(){
    
    this.$wrapper.innerHTML = `
    <div class="content">
      <div class="consult-con">
          <h2>상담내용</h2>
          <ul class="consult-list">
              <li><a href="" class="select01">진로</a></li>
              <li><a href="" class="select02">학업</a></li>
              <li><a href="" class="select03">개인사유</a></li>
              <li><a href="" class="select04">기타 :</a></li>
              <input class="select05" type="text" disabled placeholder="기타를 선택하고 입력해주세요."/>
          </ul>
      </div>
      <div class="select-day">
        <h2>상담 날짜 및 시간</h2>
        <div class="monthBtn">
            <div class="mPrevBtn">
                <img class="prevMonth" src="/src/image/leftarrow.png" alt="">
            </div>
            <h3 class="calendarMonth"></h3>
            <div class="mNextBtn">
                <img class="nextMonth" src="/src/image/rightarrow.png" alt="">
            </div>
        </div>
        <div class="calendar">
            <div class="calendar-con">
                <table>
                    <thead class="monthTitle">
                        <tr>
                            <th>Sun</th>
                            <th>Mon</th>
                            <th>Tue</th>
                            <th>Wed</th>
                            <th>Thu</th>
                            <th>Fri</th>
                            <th>Sat</th>
                        </tr>
                    </thead>
                    <tbody class="dayList"></tbody>
                </table>
            </div>
        </div>
        <div class="select-con">
            <div class="info"></div>
            <p>오전은 10시부터 12시, 오후는 2시부터 4시까지 상담시간입니다.</p>
            <div class="time">
                <span class="after">오전</span>
                <span class="before">오후</span>
            </div>
            
            <div class="emailForm">
                <span>이메일 입력 :</span>
                <input class="emailCon" type="email" placeholder="상담 확정 메일을 받을 주소를 입력해주세요." disabled>
            </div>
        </div>
      </div>
    </div>  
    `;

    const etc = true;
    const $select01 = document.querySelector('.select01');
    const $select02 = document.querySelector('.select02');
    const $select03 = document.querySelector('.select03');
    const $select04 = document.querySelector('.select04');
    const $select05 = document.querySelector('.select05');

    $select01.addEventListener('click', (e)=>{
        e.preventDefault()
        $select01.classList.toggle('show')
        
    })
    
    $select02.addEventListener('click', (e)=>{
        e.preventDefault()
        $select02.classList.toggle('show')
    })
    
    $select03.addEventListener('click', (e)=>{
        e.preventDefault()
        $select03.classList.toggle('show')
    })

    $select04.addEventListener('click', (e)=>{
        e.preventDefault()
        $select04.classList.toggle('show')
        etc = !etc 
        ? ($select05.disabled = true, $select05.placeholder ='기타를 선택하고 입력해주세요.') 
        : ($select05.disabled = false, $select05.placeholder =''); 
    })
    
    const $prevMonth = document.querySelector(".prevMonth");
    const $nextMonth = document.querySelector(".nextMonth");
    const $dayList = document.querySelector(".dayList");
    const $monthName = document.querySelector(".calendarMonth");
    const $info = document.querySelector(".info");

    
    this.calendar = new Calendar({
        $monthName,
        $prevMonth,
        $nextMonth,
        $dayList,
        $info,
        data : this.initialData
    });

    
    
  }
}

export default Contents