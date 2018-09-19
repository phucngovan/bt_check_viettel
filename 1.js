regex=/^[0](96|97|98|162|163|164|165|166|167)[0-9]{7}$/;
function check(num) {
    return regex.test(num);

}
let arr=["0967876233","0986825095","0953627632","0164425652","01624231995","012345678912"];
for ( let w of arr) {
    if(check(w)) {
        console.log(w +" " +"là 1 số điện thoại hợp lệ");
    }else {
        console.log(w +" " +"là 1 số điện thoại  k hợp lệ");
    }
}