function age() {
    var dl = document.getElementById('date').value;
    var ml = document.getElementById('month').value;
    var yl = document.getElementById('year').value;

    // Convert input values to integers
    var d1 = parseInt(dl);
    var m1 = parseInt(ml);
    var y1 = parseInt(yl);

    var date = new Date();
    var d2 = date.getDate();
    var m2 = date.getMonth() + 1; // Months are 0-based in JavaScript, so add 1
    var y2 = date.getFullYear();

    var month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    if (d1 > d2) {
        d2 = d2 + month[m2 - 1];
        m2 = m2 - 1;
    }
    if (m1 > m2) {
        m2 = m2 + 12;
        y2 = y2 - 1;
    }

    var d = d2 - d1;
    var m = m2 - m1;
    var y = y2 - y1;

    document.getElementById('age').innerHTML = 'Your age is ' + y + ' Years ' + m + ' Months ' + d + ' Days';
}
