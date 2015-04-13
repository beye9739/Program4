var win2 = Ti.UI.currentWindow;
var button1=Ti.UI.createButton(
    {
            title :'Less', 
            top:'90%',
            bottom:'0%',
            left: '30%',
            right:'30%',
    }
);  
win2.add(button1);
 
button1.addEventListener('click',function()
{
    win2.close();
});

var view1= Ti.UI.createView({
	layout: 'vertical',
});
win2.add(view1);
var label2 = Titanium.UI.createLabel({
	color:'#999',
	text:'Danielle Lastoskie',
	font:{fontSize:60,fontFamily:'Helvetica Neue'},
	textAlign:'center',
	width:'auto'
});
var label3 = Titanium.UI.createLabel({
	color:'#999',
	text:'last7821@vandals.uidaho.edu\n951-445-0842\n....................................',
	font:{fontSize:25,fontFamily:'Helvetica Neue'},
	textAlign:'center',
	width:'auto'
});
var label4 = Titanium.UI.createLabel({
	color:'#999',
	text:'Human Resource & Management\n....................................\n____________________________________________',
	font:{fontSize:30,fontFamily:'Helvetica Neue'},
	textAlign:'center',
	width:'auto'
});
var label5 = Titanium.UI.createLabel({
	color:'#999',
	text:'Well educated individual with 4+ years experience in the HR and Mangement department at the University of Idaho. Ability to use conseptual and strategic thinking to manage a variety of functional areas within a department.',
	font:{fontSize:20,fontFamily:'Helvetica Neue'},
	textAlign:'center',
	width:'auto'
});
var label6 = Titanium.UI.createLabel({
	color:'#999',
	text:'Strengths:',
	font:{fontSize:35,fontFamily:'Helvetica Neue'},
	textAlign:'center',
	width:'auto'
});var label7 = Titanium.UI.createLabel({
	color:'#999',
	text:'-Honest\n-Teamwork\n-Creative\n-Leader\n-Fast learner\n-Patient\n-Efficient\n-Timely',
	font:{fontSize:30,fontFamily:'Helvetica Neue'},
	textAlign:'left',
	width:'auto'
});
view1.add(label2);
view1.add(label3);
view1.add(label4);
view1.add(label5);
view1.add(label6);
view1.add(label7);
