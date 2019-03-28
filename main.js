

function kiemtra() {
    let m = parseInt(document.getElementById('month').value);

    switch (m) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            alert("thang nay co 31 ngay");
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            alert("thang nay co 30 ngay");
            break;
        case 2 :
            alert("thang nay co 28 hoac 29 ngay");
            break;
    }
}