document.body.onload = () => {
    var buttons = document.getElementsByClassName("button_box")
    var buttons_ = [];
    for (var i=0; i<buttons.length; i+=1) {
        buttons_.push(buttons.item(i))
    }
    buttons_.forEach(button => {
        if (button.dataset.url) {
            button.onclick = () => window.open(button.dataset.url, "_self")
        }
    })
}