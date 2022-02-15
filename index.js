
const images=[
    {
        img:"https://i.pinimg.com/originals/57/ee/2b/57ee2b2dcfb1438479ed1dd80720a772.jpg"
    },{
        img:"https://th.bing.com/th/id/OIP.xKiE_jUn8tPueoLWXsyCPgHaEo?pid=ImgDet&rs=1"
    },{
        img:"https://th.bing.com/th/id/OIP.Sgs3Xw673xFLnE59pprVUQHaEK?pid=ImgDet&rs=1"
    },{
        img:"https://th.bing.com/th/id/R.fb535a20667848e1b1c2819904150734?rik=ansXOX3GQyAstA&riu=http%3a%2f%2fwallup.net%2fwp-content%2fuploads%2f2016%2f01%2f200866-nature-landscape-water.jpg&ehk=J6q1BlBYVKEY%2bNBEQh1kxbbDT%2bTlbd5ZzfrkOKvzqUA%3d&risl=&pid=ImgRaw&r=0"
    }
]
var i=0;
img=document.querySelector(".img")
const radio1=document.getElementById("radio1")
const radio2=document.getElementById("radio2")
const radio3=document.getElementById("radio3")
const radio4=document.getElementById("radio4")
const radioBtn=document.querySelectorAll(".radio-btn")
var type;

function next(){
    interval(false)
     i=(i+1)%(images.length)
     img.src=images[i].img
     radio(i)
     interval(true)
}
function prev(){
   
