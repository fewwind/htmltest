/**
 * Created by Administrator on 2016/7/23.
 */
function addLoadEvents(func){
    var oldonload=window.onload;
    if(typeof onload!="function"){
        window.onload=func;
    }else{
        window.onload=function(){
            oldonload();
            func();
        }
    }
}
addLoadEvents(ChangeDisplay);
addLoadEvents(moveElement);
addLoadEvents(positionChange);
function ChangeDisplay(){           //点击显示隐藏。。
    var register=document.getElementById("register");
    var register1=document.getElementsByClassName("register")[0];
    var login=document.getElementById("login");
    var login1=document.getElementsByClassName("login")[0];
    var download=document.getElementById("download_QRcode_button");
    var download1=document.getElementById("QRcode");
    var close_QR=document.getElementById("close_QR");
    register.setAttribute("class","active");
    register.onclick= function () {
        register1.setAttribute("style","display:block");
        this.setAttribute("class","active");
        login.setAttribute("class","");
        login1.setAttribute("style","display:none");
        return false;
    }
    login.onclick=function(){
        this.setAttribute("class","active");
        register.setAttribute("class","");
        login1.setAttribute("style","display:block");
        register1.setAttribute("style","display:none");
        return false;
    }
    download.onclick=function(){
        var style = download1.getAttribute("style"); //点击第一下的时候没有反应，后来检查发现点击第一下以后跳到else里面去
        //alert(style);   显示style==null  为什么？？？？
        if(style=="display:none"||style==null){
            //alert("111");
            download1.setAttribute("style","display:block");
            close_QR.firstChild.nodeValue="关闭二维码";
        }else{
            //alert("222");
            download1.setAttribute("style","display:none");
            close_QR.firstChild.nodeValue="下载知乎APP";
        }
    }
}
function positionChange(){
    if(!document.getElementById) return false;
    var posChgeBut=document.getElementById("posChgeBut");
    var weixinleft=document.getElementById("MinIcon_weixin");
    var threeMinIcon=document.getElementsByClassName("three_MinIcon")[0];
    posChgeBut.onclick=function(){
        if(parseInt(weixinleft.style.left)<0){
            moveElement("MinIcon_weixin",30,0,3,1);
            moveElement("MinIcon_weibo",70,0,2,1);
            moveElement("MinIcon_qq",110,0,1,1);
        }else{
            moveElement("MinIcon_weixin",-20,0,3,0);
            moveElement("MinIcon_weibo",-20,0,2,0);
            moveElement("MinIcon_qq",-20,0,1,0);
        }
    }
}
function moveElement(elementID,final_x,final_y,interval,final_opc){
    if(!document.getElementById) return false;
    if(!document.getElementById(elementID)) return false;
    var elem=document.getElementById(elementID);
    var x_pos=parseInt(elem.style.left);
    var y_pos=parseInt(elem.style.top);
    var opc=parseFloat(elem.style.opacity);
    if(x_pos==final_x&&y_pos==final_y&&opacity==final_opc){return true;}
    if(x_pos<final_x){x_pos++;opc+=0.02;}
    if(x_pos>final_x){x_pos--;opc-=0.02;}
    if(y_pos<final_y){y_pos++;}
    if(y_pos>final_y){y_pos--;}
    elem.style.left=x_pos+"px";
    elem.style.top=y_pos+"px";
    elem.style.opacity=opc;
    var repeat="moveElement('"+elementID+"',"+final_x+","+final_y+","+interval+","+final_opc+")";
    movement=setTimeout(repeat,interval);

}
