function addItem(target, url, title, img,_class) {
    var _urlImg = "";
    if (img != "") { _urlImg = (url.split('?')[0] + "/" + img); }

    checkIfImageExists(_urlImg, function (ret) {
        if (!ret) { _urlImg = "alert.png"; }
        var _html = "<div class='col-12 col-md-4 col-lg-4 py-1'>";
        if (ret) {
            _html += "<a class='btn " + _class + "' href='" + url + "' target='_blank' style='width:100%;'>";
        } else {
            _html += "<a class='btn btn-secondary p-1 m-1' href='#' style='width:100%;'>";
            _urlImg = "alert.png"; 
        }
        if (_urlImg != "") { _html += "<img src='" + _urlImg + "' style='height:36px;margin-right:10px;'/><br/>"; }
        _html += title;
        _html += "</a>";
        _html += "</div>";
        $(target).append(_html);
    });
}

function checkIfImageExists(url, callback) {
    console.log(url);
    const img = new Image();
    img.src = url;
    if (img.complete) {
        callback(true);
    } else {
        img.onload = () => {callback(true);};
        img.onerror = () => {callback(false);};
    }
}
