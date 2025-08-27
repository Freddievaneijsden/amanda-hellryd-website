
function createNode(element) {
    return document.createElement(element);
}

function append(parent, element) {
    return parent.appendChild(element);
}

const ul = document.querySelector('#exhibitions');
const url = 'data/exhibitions.json';
fetch(url)
    .then((resp) => resp.json())
    .then(function(data) {
        let exhibitions = data.exhibitions;

        exhibitions.forEach(function(ex) {
        let li = createNode('li');
        let time = createNode('time');
        let br = createNode('br');    

        time.textContent = ex.exhibitionDate;

        append(li, time);     
        append(time, br)                 
        li.append(" " + ex.exhibitionTitle + ", " + ex.exhibitionLocation + ", " + ex.exhibitionCity);     
        append(ul, li);
        })
    })
    .catch(function(error) {
        console.log(error);
    });
