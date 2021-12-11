var toggle = false;

document.body.querySelector(".largeContentBox1").addEventListener("click", function ()
{
    toggle=!toggle;
    if(toggle){
        document.body.querySelector(".FakeItem1").style.left="0";
    }else {
        document.body.querySelector(".FakeItem1").style.left="-150px";
    }
})
document.body.querySelector(".largeContentBox2").addEventListener("click", function ()
{
    toggle=!toggle;
    if(toggle){
        document.body.querySelector(".FakeItem2").style.right="0";
    }else {
        document.body.querySelector(".FakeItem2").style.right="-150px";
    }
})
document.body.querySelector(".largeContentBox3").addEventListener("click", function ()
{
    toggle=!toggle;
    if(toggle){
        document.body.querySelector(".FakeItem3").style.left="0";
    }else {
        document.body.querySelector(".FakeItem3").style.left="-150px";
    }
})
document.body.querySelector(".largeContentBox4").addEventListener("click", function ()
{
    toggle=!toggle;
    if(toggle){
        document.body.querySelector(".FakeItem4").style.right="0";
    }else {
        document.body.querySelector(".FakeItem4").style.right="-150px";
    }
})