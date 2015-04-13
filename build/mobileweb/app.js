var windowOne=Ti.UI.createWindow(
    {
        Title : 'Home Window',
        backgroundColor : 'black',
        modal:'true',
    url:'win1.js'
    });
windowOne.open();

var label1 = Titanium.UI.createLabel({
	color:'#999',
	text:'....................\nDanielle Lastoskie\nHuman Resource & Management\nlast7821@vandals.uidaho.edu\n951-445-0842',
	font:{fontSize:40,fontFamily:'Helvetica Neue'},
	top:'43%',
	textAlign:'center',
	width:'auto'
});

windowOne.add(label1);

var view2=Ti.UI.createView({
	top:20,
	bottom:'55%',
	left: 120,
	right:120,
	backgroundImage:'images/picture1.jpg',
});
windowOne.add(view2);
