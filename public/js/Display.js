class Display {
  constructor(document) {
    this.document = document;
    this.test = 0;
    this.grid = this.updateDisplay();
  }

  updateDisplay() {
    this.grid = `
    <div class="main">
    <div class="container">
        <div class="coordinate-box">
            <div id="04">${this.test}</div>
            <div id="14">[1,4]</div>
            <div id="24">[2,4]</div>
            <div id="34">[3,4]</div>
            <div id="44">[4,4]</div>
            
            <div id="03">[0,3]</div>
            <div id="13">[1,3]</div>
            <div id="23">[2,3]</div>
            <div id="33">[3,3]</div>
            <div id="43">[4,3]</div>
            
            <div id="02">[0,2]</div>
            <div id="12">[1,2]</div>
            <div id="22">[2,2]</div>
            <div id="32">[3,2]</div>
            <div id="42">[4,2]</div>
            
            <div id="01">[0,1]</div>
            <div id="11">[1,1]</div>
            <div id="21">[2,1]</div>
            <div id="31">[3,1]</div>
            <div id="41">[4,1]</div>
            
            <div id="00">[0,0]</div>
            <div id="10">[1,0]</div>
            <div id="20">[2,0]</div>
            <div id="30">[3,0]</div>
            <div id="40">[4,0]</div>
        </div>
    </div>
    </div>
    `;
    this.document.body.innerHTML = this.grid;
  }

  activateBlock(x, y) {
    let coordinate = x + "" + y;
    var elem = this.document.getElementById(coordinate);
    elem.style.backgroundColor = "#9400D3";
    elem.style.color = "#FFF";
  }

  clear() {
    let x = -1;
    let y = 5;
    for (let i = 0; i < 25; i++) {
      x++;
      if (x % 5 === 0) {
        x = 0;
        y--;
      }
      let coordinate = x + "" + y;
      var elem = this.document.getElementById(coordinate);
      elem.style.backgroundColor = "#8A2BE2";
      elem.style.color = "#000";
    }
  }
}
export default Display;
