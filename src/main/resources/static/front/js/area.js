function getCity(obj) {
    var id = $(obj).find('option:selected').val();
    if(id){
    $.ajax({
        url: "/index.php/Shop1/getarea",
        data: {id: id},
        type: 'POST',
        dataType: 'json',
        success: function(data, textStatus) {
            //alert(data);
            var arr = JSON.parse(data);
            //console.log(data,data.result);
            if (arr.result == "") {
                var h = '<option value=\"\">省份</option>';
                $('select[name=cityName]').html(h);
            } else {
                var h = '<option value=\"\">城市</option>';

                for (var i = 0; i < arr.result.length; i++) {
                    h += '<option value=\"' + arr.result[i].id + '\">' + arr.result[i].name + '</option>';
                }
                $('select[name=cityName]').html(h);
            }
          
        },
        complete: function(XHRequest, T) {
            XHRequest = null;
        }
    });}
}



function getCounty(obj) {
    var id = $(obj).find('option:selected').val();
//console.log(id)
if(id!='城市'){
    $.ajax({
        url: "/index.php/Shop1/getarea",
        data: {id: id},
        type: 'POST',
        dataType: 'json',
        success: function(data, textStatus) {
            var arr = JSON.parse(data);
            if (arr.result == "") {
                var h = '<option value=\"\">区域</option>';
                $('select[name=countyName]').html(h);
            } else {
                var h = '<option value=\"\">区域</option>';
                for (var i = 0; i < arr.result.length; i++) {
                    h += '<option value=\"' + arr.result[i].id + '\">' + arr.result[i].name + '</option>';
                }
                $('select[name=countyName]').html(h);

            }
           
        },
        complete: function(XHRequest, T) {
            XHRequest = null;
        }
    });
}
}

function getShopInfo(type) {

	
	
    var provinceId = $('select[name=provinceName]').find('option:selected').val();
    var cityId = $('select[name=cityName]').find('option:selected').val();
    var countyId = $('select[name=countyName]').find('option:selected').val();
    $('#dv_scroll_text').html('');
    $.ajax({
        url: "/index.php/Shop/getshop",
        data: {provinceId: provinceId, cityId: cityId, countyId: countyId, type: type},
        type: 'POST',
        dataType: 'json',
        success: function(data, textStatus) {
           var arr = JSON.parse(data);
           //alert(arr.result.length)
            var html = '';

            if (arr.result.length != 0) {
                for (var i = 0; i < arr.result.length; i++) {
                    html += '<div class="stores" onclick="getMapByClick(' + arr.result[i].lng + ',' + arr.result[i].lat + ',\'' + arr.result[i].name + '\',\'' + arr.result[i].deaddress + '\',\'' + arr.result[i].phone + '\');">';
                    html += '<div class="storesName">' + arr.result[i].name + '</div>';
                    html += '<div class="storesAdd">' + arr.result[i].deaddress + '</div>';
                    html += '<div class="storesTel">电话：' + arr.result[i].phone + '</div></div>';
                }
            }
            $('#dv_scroll_text').html(html).show();
        },
        complete: function(XHRequest, T) {
            XHRequest = null;
        }
    });
}

function getMapByClick(lng, lat, name, deaddress, phone) {
    var ofrm1 = document.getElementById("mapIframe").document;
    if (ofrm1 == undefined)
    {
        ofrm1 = document.getElementById("mapIframe").contentWindow.document;
        var ff = ofrm1.getElementById("lev").value;
        var lev = ff;
    }
    else
    {
        var ie = document.frames["iframe"].document.getElementById("lev").value;
        var lev = ff;
    }
    var random = parseInt(10000 * Math.random());
    var url = "map.html" + '?aclick=1&lng=' + lng + '&lat=' + lat + '&lev=' + lev + '&name=' + name + '&deaddress=' + deaddress + '&phone=' + phone + '&random=' + random;

    $('#mapIframe').attr('src', url);
}

function readyMap(){
	var sheng=$('#sheng').val();
	var shi=$('#city').val();
	var qu=$('#qu').val();
	var cj='';//province,city,county
	var suiji = parseInt(10000 * Math.random());
	var zurl='';
	//console.log(sheng,shi,qu)
	
	if(sheng!=0){
		$('[name="provinceName"]').val(sheng).change()
	}
	if(shi!=0){
		setTimeout(function(){
		$('[name="cityName"]').val(shi).change()
		},500)
	}
	if(qu!=0){
		setTimeout(function(){
		$('[name="countyName"]').val(qu).change()
		},1000)
	}
	
	
	
	//setProvice(sheng);

	/*if(sheng==0){
		return
	}else if(shi==0){
		$('[name="provinceName"]').val(sheng);
		cj='province';
		zurl="map.html"+'?cityId=&countyId=&provinceId='+sheng+'&type='+cj+'&random='+suiji;
	}else if(qu==0){
		cj='city';
		zurl="map.html"+'?cityId='+shi+'&countyId=&provinceId='+sheng+'&type='+cj+'&random='+suiji;
	}else{
		cj='county';
		zurl="map.html"+'?cityId='+shi+'&countyId='+qu+'&provinceId='+sheng+'&type='+cj+'&random='+suiji;
	}
	$('#mapIframe').attr('src', zurl);*/
}
$(function(){
readyMap();
});

function getMap(type) {
    var provinceId = $('select[name=provinceName]').find('option:selected').val();
    var cityId = $('select[name=cityName]').find('option:selected').val();
    var countyId = $('select[name=countyName]').find('option:selected').val();



    var random = parseInt(10000 * Math.random());
    var url = "map.html?" + 'cityId=' + cityId + '&countyId=' + countyId + '&provinceId=' + provinceId + '&type=' + type + '&random=' + random;
    //alert(url);
    $('#mapIframe').attr('src', url);

}

function setProvice() {
    /*var id = $('select[name=provinceName]').find('option:selected').val();
    var name = $('select[name=provinceName]').find('option:selected').text();


    $('#province').val(id);
    $('#city').val('');
    $('#county').val('');*/
}

function setCity() {
    /*var id = $('select[name=cityName]').find('option:selected').val();
    var name = $('select[name=cityName]').find('option:selected').text();

    $('#city').val(id);
    $('#county').val('');*/
}

function setCounty(id, name) {
	$('.shop').removeClass('shop_curr');
	
    var id = $('select[name=countyName]').find('option:selected').val();
    var name = $('select[name=countyName]').find('option:selected').text();

    $('#county').val(id);
}

function openMore(L, N) {}
