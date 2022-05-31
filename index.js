function choose(param) {
    let arr = params[param]
    return arr[Math.floor(Math.random() * arr.length)];    
}

function main() {
    var chosenParams = [$('#param-one').val(), $('#param-two').val(), $('#param-three').val()] 
    var output = choose(chosenParams[0])
    for (let x = 1; x < 3; x++) output += `&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;${choose(chosenParams[x])}`;

    $('.output-container').html(output)
    document.querySelector('.output-container').style.opacity = 1
}

function go() {
    document.querySelector('.output-container').style.opacity = 0
    setTimeout(main, 300)
}