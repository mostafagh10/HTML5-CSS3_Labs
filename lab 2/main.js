var c = document.getElementById("can");
var ctx=c.getContext('2d');

for(var i=0 ; i<100 ; i++){
setTimeout(() => {
    ctx.beginPath();
    var w=Math.floor(Math.random()*c.width);
    var h=Math.floor(Math.random()*c.height);
    ctx.arc(w,h,30,0,Math.PI*2);
    ctx.stroke();
}, i* 500);
}

//==========================================================
(g=>{var h,a,k,p="The Google Maps JavaScript API",c="google",l="importLibrary",q="__ib__",m=document,b=window;b=b[c]||(b[c]={});var d=b.maps||(b.maps={}),r=new Set,e=new URLSearchParams,u=()=>h||(h=new Promise(async(f,n)=>{await (a=m.createElement("script"));e.set("libraries",[...r]+"");for(k in g)e.set(k.replace(/[A-Z]/g,t=>"_"+t[0].toLowerCase()),g[k]);e.set("callback",c+".maps."+q);a.src=`https://maps.${c}apis.com/maps/api/js?`+e;d[q]=f;a.onerror=()=>h=n(Error(p+" could not load."));a.nonce=m.querySelector("script[nonce]")?.nonce||"";m.head.append(a)}));d[l]?console.warn(p+" only loads once. Ignoring:",g):d[l]=(f,...n)=>r.add(f)&&u().then(()=>d[l](f,...n))})
({key: "AIzaSyB41DRUbKWJHPxaFjMAwdrzWzbVKartNGg", v: "weekly"});

let btnMap = document.getElementById("getMap");
      btnMap.addEventListener("click", function () {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(sucess, error);
        } else {
          alert("update your browser");
        }
      });
      //////////////////////////////////////////////////////
      var locationinfo = document.getElementById("locationinfo");
      var lan = document.getElementById("lan");
      var long= document.getElementById("long");
      var time = document.getElementById("time");
      function sucess(obj) {
        locationinfo.removeAttribute("disabled");
        var lat = obj.coords.latitude;
        var lon = obj.coords.longitude;
        console.log(lat);
        console.log(lon);
        initMap(lat,lon);
        lan.innerHTML=lat;
        long.innerHTML=lon;
        time.innerHTML=new Date();
      }
      locationinfo.addEventListener("click",function(){
        document.getElementsByTagName("table")[0].style.display="block";
      })
      //////////////////////////////////////////////////////
      function error(e) {
        switch (e.code) {
          case 1:
            console.log("error user denied");
            break;
        }
      }
/////////////////////////////////////////////////////////////////////////////
      let map;

      async function initMap(x,y) {
        const { Map } = await google.maps.importLibrary("maps");

        map = new Map(document.getElementById("map"), {
          center: { lat: x, lng: y},
          zoom: 15,
        });
      }
