function compute()
{
    p = document.getElementById("principal").value;
    r = document.getElementById("rate").value;
    y = document.getElementById("years").value;
    haha=document.getElementById("haha");
    years=202+y;
    haha.textContent=`If you deposit ${p} at an Interest rate of ${r} you will recieve the Amount ${p*r*y} by the year ${years}`;
}
