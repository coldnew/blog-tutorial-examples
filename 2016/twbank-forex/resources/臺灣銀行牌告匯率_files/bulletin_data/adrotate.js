

function rotateAds(next) {
    if (adArray.length <= 0) {
        return;
    }
    var img = null;

    if (fixedSequence) {
        //run ad in sequence, we pick adArray rather then seeding array
        var randomNum = next;
        if (next >= adArray.length) { // repeat
            randomNum = 0;
        }
        img = adArray[randomNum];
    } else {
        //rendomize picking
        if(seedingArray.length<=0){
            //if there's only one image
            seedingArray = adArray;
        }
        var randomNum = Math.floor(Math.random() * seedingArray.length);
        img = seedingArray[randomNum];
    }
    
    
    /// modify layers..
    showOneAD(img.id);
    var secs = (img.playSeconds <= 0) ? 25 * sec : (img.playSeconds * sec);
    setTimeout('rotateAds(' + (randomNum + 1) + ')', secs);
}

function showOneAD(id) {
    
    for (var i = 0; i < adArray.length; i++) {
        if (adArray[i].id == id) {
            toggleShowHide(adArray[i].id, 1);
        } else {
            toggleShowHide(adArray[i].id, 0);
        }
    }
}

function toggleShowHide(divID, iState) // 1 visible, 0 hidden
{
    if (document.layers)	   //NN4+
    {
        document.layers[divID].visibility = iState ? "show" : "hide";
    }
    else if (document.getElementById)	  //gecko(NN6) + IE 5+
    {   
        var obj = document.getElementById(divID);
        obj.style.display = iState ? '' : 'none';
    }
    else if (document.all)	// IE 4
    {
        document.all[divID].style.visibility = iState ? "visible" : "hidden";
    }
}


//
// AD Object entity
//
function ad(objId, playSec) {
    this.id = objId;
    this.playSeconds = playSec;
}



///
/// Stringformat
///
function format(str)
{
  for(i = 1; i < arguments.length; i++)
  {
    str = str.replace('{' + (i - 1) + '}', arguments[i]);
  }
  return str;
}


function objHref(href) {
    if (href != '#') {
        var page = window.open(href);
    } else {
        //debug only
    }
}

function Popup(url) {
    if (confirm('提醒您！\n\n您即將離開臺灣銀行網站，前往由其他業者所經營及負責之網站，其內容（包括客戶隱私權保護及客戶資訊安全事項)均由該業者自行負責，您若已知悉並同意繼續請選擇「確定」，不同意請選擇「取消」\n\nYou are now leaving BOT site. All information you provide there will be subject to the privacy, confidentiality, and security terms of the applicable third party site. Would you like to continue?\n\n')) {
        objHref(url);
    }

}