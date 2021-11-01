class Confirm{
  constructor({$target}){
    const $confirmButton = document.createElement("section");
    this.$confirmButton = $confirmButton;
    this.$confirmButton.className = "check";
    $target.appendChild($confirmButton);

    this.render();
  }

  render(){
    this.$confirmButton.innerHTML = `
      <button>확인</button>
    `
    this.$confirmButton.querySelector("button").addEventListener('click',(e)=>{
      location.reload();
    })
  }
}

export default Confirm