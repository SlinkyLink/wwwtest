/* list_71= new Array("Іванько","Петренко","Сідоренко");
list_72= new Array("Іван","Петренко","Сідоренко");
function list_group(list)
{
temp="";
for(i=0;i<list.length;i++)
{
temp+= "<li> <a href='#' >"+(i+1)+"&nbsp;&nbsp;"+list[i]+"</a></li>";
}
document.getElementById('list').innerHTML="<ul>"+temp+"</ul>";
}
*/
function Student(pic, fio, rank, phone, mail)
  {
  this.pic=pic;
  this.fio=fio;
  this.rank=rank;
  this.phone=phone;
  this.mail=mail;
  this.PrintStudent=PrintStudent;
  }
function PrintStudent()
{
document.getElementById('student_info').innerHTML="<img src="+this.pic+"><br><span>ПІБ:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+this.fio+"</span><br><span>звання:&nbsp;"+this.rank+"</span><br><span>phone:&nbsp;&nbsp;&nbsp;"+this.phone+"</span><br><span>email:&nbsp;&nbsp;&nbsp;&nbsp;"+this.mail+"</span>";

document.getElementById('student_info').style.border="solid #0000FF";
}


list_71= new Array();
list_71[0]= new Student("images.png","Безух Б.Ю", "сержант","0969999999","bezuh@gmail.com");
list_71[1]= new Student("images.png","Горинін О.С", "рядовой", "0969999999","gorynyn@gmail.com");
list_71[2]= new Student("images.png","Іванов Б.Ю","рядовой","0969999999","gret@gmail.com");
list_71[3]= new Student("images.png","Петров Б.Ю","рядовой","0969999999","danilyk@gmail.com");
list_kurs_7= new Array();
list_kurs_7["C-71"]=list_71;

//document.getElementById('list').links[i].style.color="#f00";
//document.getElementById(\"student_info\").style.border=\"thick solid #0000FF\";
function clear_data()
{
document.getElementById('list').innerHTML="";
document.getElementById('student_info').innerHTML="";
document.getElementById('student_info').style.border="none";
}

function list_group(list)
{
//clear_data();
//group= variablesName(list_71);
table_list="<table border='1px'><caption>Група</caption><tr><th>№</th><th>ПІБ</th></tr>";;
for(i=0;i<list.length;i++)
{
table_list+= "<tr><td>"+(i+1)+"</td><td><a href='#' onclick='list_71["+i+"].PrintStudent(); '>"+list[i].fio+"</a></td></tr>";
//variablesName(myFirstName)
}
table_list+="</table>"
document.getElementById('list').innerHTML=table_list;
}

/*
function ch(i)
{
list_71[i].PrintStudent();
}

(function (i)
{
document.getElementById('list').links[i].onclick=function(){ch(i)}
}
)(i);
*/
/*
function ch(i)
{
records[i].printrecord();
}

for(i=0;i<menu.length;i++)
{
document.write("<li> <a href='#' >"+menu[i]+"</a>");
(function (i)
{
document.links[i].onclick=function(){ch(i)}
}
)(i);
}
*/



