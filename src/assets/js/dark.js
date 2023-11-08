// !document.querySelector("#ht").classList.contains('dark') ? ht.classList.add('dark') : ht.classList.remove('dark');

const toggleButton = document.getElementById('toggle-button');
const ht = document.querySelector("#ht");
let light1 = document.querySelector('#light1');
let light2 = document.querySelector('#light2');

// Check for saved 'darkMode' in localStorage
const darkMode = localStorage.getItem('darkMode');

if (darkMode) {
    ht.classList.add('dark');

}

toggleButton.onclick = function () {
    ht.classList.toggle('dark');

    // Save the current preference to localStorage
    localStorage.setItem('darkMode', ht.classList.contains('dark'));

    if (!light1.classList.contains('invisible')) {
        light1.classList.add('invisible');
        light2.classList.remove('invisible');
    } else {
        light2.classList.add('invisible');
        light1.classList.remove('invisible');
    }
}