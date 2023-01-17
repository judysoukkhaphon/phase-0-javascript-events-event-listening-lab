function addingEventListener() {
    const input = document.getElementById('button');
    input.addEventListener('click', function() {
    alert('I was clicked!');
    });
}

/* ABOVE DOESN'T WORK, BELOW DOES. Why doesn't code above work?

function addingEventListener() {
    
    alert('I was clicked!');
}

const input = document.getElementById('button');
input.addEventListener('click', addingEventListener);

*/