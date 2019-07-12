// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .headerContainer component

function Header() {
    let headerDiv = document.createElement('div')
    let headerSDate = document.createElement('span')
    let headerH1 = document.createElement('h1')
    let headerSTemp = document.createElement('span')

    headerDiv.classList.add('header')
    headerSDate.classList.add('date')
    headerSTemp.classList.add('temp')



}
