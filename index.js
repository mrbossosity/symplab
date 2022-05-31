function choose(param) {
    let arr = params[param]
    let choice =  arr[Math.floor(Math.random() * arr.length)];
    return choice
}

function main() {
    var chosenParams = [$('#param-one').val(), $('#param-two').val(), $('#param-three').val()] 
    var output = choose(chosenParams[0])

    output += `&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;${choose(chosenParams[1])}`
    output += `&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;${choose(chosenParams[2])}`

    $('.output-container').html(output)
    document.querySelector('.output-container').style.opacity = 1
}

function go() {
    document.querySelector('.output-container').style.opacity = 0
    setTimeout(main, 300)
}