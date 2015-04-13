var win1 = Ti.UI.currentWindow;
 
    var button=Ti.UI.createButton(
    {
            title : 'More',    
            top:'90%',
            bottom:'0%',
            left: '30%',
            right:'30%',
            
    }
);
win1.add(button);

 
button.addEventListener('click',function()
{
var windowTwo=Ti.UI.createWindow(
    {
        Title : 'Child Window',
        backgroundColor : 'black',
        exitOnClose:true,
    url:'win2.js'
 
    });
    windowTwo.open();
});

