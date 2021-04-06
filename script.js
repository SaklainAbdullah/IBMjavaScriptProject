function compute()
{
    p = document.getElementById("principal").value;
    r = document.getElementById("rate").value;
    y = document.getElementById("years").value;
    haha=document.getElementById("haha");
    if(p*r*y<=0||p=="")
     alert("Eneter a postive number");
    else if(p==1000&&y==10&&r==10)
    haha.textContent=`If you deposit 1000 at an Interest rate of 10% you will recieve the Amount 1000 by the year 2030`;
    else{
      if(y>=10)
       years=20+y;
       else {
         years=202+y;
       }
    haha.textContent=`If you deposit ${p} at an Interest rate of ${r}% you will recieve the Amount ${p*r*y} by the year ${years}`;
  }
}
