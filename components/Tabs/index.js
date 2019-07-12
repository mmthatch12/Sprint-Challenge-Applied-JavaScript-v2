// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

const topics = document.querySelector('.topics')




axios.get('https://lambda-times-backend.herokuapp.com/topics')
    .then(data => {
        console.log('the array:', data.data)
        const tops = data.data.topics
        tops.forEach(topic => {
            const topix = Tabs(topic)
            topics.appendChild(topix)
        });
    })
    .catch(error => {
        console.log('This is not working', error)
    })


function Tabs(object) {
    let tabsDiv = document.createElement('div')

    tabsDiv.classList.add('tab')

    tabsDiv.textContent = object.topics

    return tabsDiv
}
