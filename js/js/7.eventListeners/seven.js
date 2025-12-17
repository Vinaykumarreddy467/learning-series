    const myButton  = document.getElementById('myButton');
    const myButton2 = document.getElementById('myButton2');
    const myButton3 = document.getElementById('myButton3');
    const myButton4 = document.getElementById('myButton4');
    const myButton5 = document.getElementById('myButton5');
    const myButton6 = document.getElementById('myButton6');
    const myButton7 = document.getElementById('myButton7');

    const events = new Event('build', { bubbles: true, cancelable: true });
    events.customData = { key: 'value' };
    console.log(events);

    myButton.addEventListener('click', function() {
        console.log('Button was clicked!');
        const btn = document.querySelector('#myButton');
        btn.style.backgroundColor = 'blue';
        btn.style.color = 'white';
        btn.style.padding = '10px 20px';
        btn.style.border = 'none';
        btn.style.borderRadius = '5px';
        btn.style.cursor = 'pointer';
    });

    myButton2.addEventListener('mouseover', function() {
        console.log('Mouse is over the button.');
    });
    myButton2.addEventListener('mouseout', function() {
        console.log('Mouse left the button.');
    });

    myButton3.addEventListener('mouseover', function() {
        console.log('Mouse is over the button.');
    });

    myButton3.addEventListener('mouseout', function() {
        console.log('Mouse left the button.');
    });

    myButton4.addEventListener("keydown", function(event) {
        console.log('Key pressed: ' + event.key);
    });

    myButton5.addEventListener("keyup", function(event) {
        console.log('Key released: ' + event.key);
    });

    myButton6.addEventListener("focus", function() {
        console.log('Button is focused.');
        document.getElementById("myButton6").style.backgroundColor = "yellow";
    });

    myButton7.addEventListener("blur", function() {
        console.log('Button lost focus.');
        document.getElementById("myButton7").style.backgroundColor = "";
    });

  

   