let words = document.querySelectorAll(".word");

const animateAll = (animate) => {
    setTimeout(() => {
        animate(words[0]);
        setTimeout(() => {
            animate(words[1]);
            setTimeout(() => {
                animate(words[2]);
            }, 2000)
        }, 500)
    }, 1000)
}

// function animate(word) {
//   word.classList.add("animate");
// }

const animate = (word) => {
  word.classList.toggle("animate");
}

animateAll(animate);