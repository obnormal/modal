function fun1() {
    var chbox;
    chbox = document.getElementById('one');
    if (chbox.checked){
        alert('yes');
    }
    else
    {
        alert('not');
    }
}


function fun2() {
    var radi = document.getElementsByName('r1');
    for (var i = 0; i < radi.length; i++) {
        if (radi[i].checked) {
            alert('Choice ' + i + ' element');
        }
    }
}


function fun3() {
    var sel = document.getElementById('mySelect').selectedIndex;
    var options = document.getElementById('mySelect').options;
    alert('Choice option ' + options[sel].text);
}


function fun4() {
    var range = document.getElementById('r2');
    var div = document.getElementById('test');
    div.style.width = range.value + 'px';
}


function fun5() {
    var rtl = document.getElementById('rtl').value;
    var rtr = document.getElementById('rtr').value;
    var rbl = document.getElementById('rbl').value;
    var rbr = document.getElementById('rbr').value;
    var ttl = document.getElementById('ttl');
    var ttr = document.getElementById('ttr');
    var tbl = document.getElementById('tbl');
    var tbr = document.getElementById('tbr');

    var block = document.getElementById("block");

    ttl.value=rtl;
    ttr.value=rtr;
    tbl.value=rbl;
    tbr.value=rbr;

    block.style.borderRadius = rtl+'px ' + rtr+'px ' + rbl+'px ' + rbr+'px ';
}


