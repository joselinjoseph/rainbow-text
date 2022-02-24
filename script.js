const colors = ['violet', 'indigo', 'blue', 'green', 'yellow', 'orange', 'red'];

const rainbow = ((str) => {
    let wrapper = document.createElement('p');
    for (let i = 0; i < str.length; i++) {
        let letter = document.createElement('span');
        letter.classList.add('rainbow-letter');
        letter.style.color = colors[i%7];
        letter.textContent = str.charAt(i);
        wrapper.appendChild(letter);
    }
    document.querySelector('body').appendChild(wrapper);
})('Hi..I am Joselin. Thanks for visiting!! This is the Rainbow Text!!');

const rainbowLetters = document.querySelectorAll(".rainbow-letter");
setInterval(() => {
    let color = colors.pop();
    colors.unshift(color);
    rainbowLetters.forEach((ele, index) => {
        ele.style.color = colors[index%7];
    });
}, 1000);

