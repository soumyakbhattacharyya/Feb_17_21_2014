Create a Table class.
Table class can be initialized with an array of column names;
It has a method called addRow with the arguments.

var tbl = new Table(["Name","Age","Salary"]);
tbl.addRow("Sam",22,10000);
tbl.addRow("Ram",32,40000);





Create OOJS1.html
	Create a <section id="section1"></section> element.
	Create a button with value "add textbox"
	When you click this button you will add a new textbox to <section> element. But in an OO way!!!

Create OOJS1.js file

Create a class called TextBox that will take in an id as argument. The class will have a renderTo method.
This is how you will use the TextBox class.

var tb = new TextBox("firstname");
tb.renderTo("#section1"); 
It will add a new textbox with is "firstname" to the <section> element.

