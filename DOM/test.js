function DummyListner() {
    console.log('hello i clicked');
}
document.querySelectorAll('.d button')[0].addEventListener('click', DummyListner);

document.querySelectorAll('.d button')[0].addEventListener('mouseover', function () {
    console.log("hover over me");
});