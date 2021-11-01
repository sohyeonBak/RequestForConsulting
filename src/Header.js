
class Header {
  constructor({$target, choicePro}){
    const $header = document.createElement("header");
    this.$header = $header;
    this.$header.className = "header";
    $target.appendChild(this.$header)
    
    this.$target = $target;
    this.choicePro = choicePro;
    this.render();
  }

  setState(nextData){
    this.choicePro(nextData);
  }

  render(){
    this.$header.innerHTML = `
    <div class="title-name">
      <h1>학생 상담 신청</h1>
    </div>
    <nav class="list-navigation">
        <ul class="professorList">
            <li><a href="" class="proA" >이준</a></li>
            <li><a href="" class="proB" >선주연</a></li>
            <li><a href="" class="proC" >최수환</a></li>
        </ul>
    </nav>
    <p>상담 가능 시간은 <br /><em>오전 10 : 00 ~ 12 : 00, 오후 2 : 00 ~ 4 : 00</em>입니다.<br />
        이외 시간에는 상담이 불가하오니 이 점 유의해주세요.</p>
    `;

    
    
    const $proA = this.$header.querySelector(".proA")
    const $proB = this.$header.querySelector(".proB")
    const $proC = this.$header.querySelector(".proC")
    
    $proA.classList.add("pick");

    $proA.addEventListener('click', (e)=>{
      e.preventDefault();
      $proA.classList.add("pick");
      $proB.classList.remove("pick");
      $proC.classList.remove("pick");
      this.setState(e.target.classList[0])
    })
  
    $proB.addEventListener('click', (e)=>{
      e.preventDefault();
      $proA.classList.remove("pick");
      $proB.classList.add("pick");
      $proC.classList.remove("pick");
      this.setState(e.target.classList[0])
    })

    $proC.addEventListener('click', (e)=>{
      e.preventDefault();
      $proA.classList.remove("pick");
      $proB.classList.remove("pick");
      $proC.classList.add("pick");
      this.setState(e.target.classList[0])
    })
  }
}

export default Header
