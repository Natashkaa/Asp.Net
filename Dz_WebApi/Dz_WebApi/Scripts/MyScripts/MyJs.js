﻿$('.carousel').carousel({
    interval: 0
})

var currentPage = 1;
var PageCount = $('#inc').data("pagecount");

$('#curPageNumber').text(currentPage);

$('#inc').on('click', function () {
    if (currentPage != PageCount) {
        currentPage++;
        $('#curPageNumber').text(currentPage);
        fetch(`/Good/GoodTable/${currentPage}`)
            .then(res => {
                res.text().then(text => {
                    if (text) {
                        $("#goodTable").html(text);
                    }
                });
            });
    }
});

$('#decr').on('click', function () {
    if (currentPage > 1) {
        currentPage--;
        $('#curPageNumber').text(currentPage);
        fetch(`/Good/GoodTable/${currentPage}`)
            .then(res => {
                res.text().then(text => {
                    if (text) {
                        $("#goodTable").html(text);
                    }
                });
            });
    }
});

$('#save_editgood').click(function (e) {

    let regExp = /^(\d+),(\d+)$|^(\d+)$/g;

    let goodName = $('#editGoodName').val();
    let goodPrice = $('#editGoodPrice').val();
    let goodCount = $('#editGoodCount').val();

    $('#editGoodName').removeClass('warning-border');
    $('#editGoodPrice').removeClass('warning-border');
    $('#editGoodCount').removeClass('warning-border');

    $('#error_GoodName').removeClass('show-warning-message');
    $('#error_GoodPrice').removeClass('show-warning-message');
    $('#error_GoodCount').removeClass('show-warning-message');

    if (goodName.length == 0) {
        $('#editGoodName').addClass('warning-border');//textbox
        $('#error_GoodName').removeClass('hide-warning-message');
        $('#error_GoodName').addClass('show-warning-message');//show error
        e.preventDefault();
    }
    if (!goodPrice.match(regExp)) {
        $('#editGoodPrice').addClass('warning-border');//textbox
        $('#error_GoodPrice').removeClass('hide-warning-message');
        $('#error_GoodPrice').addClass('show-warning-message');//show error
        e.preventDefault();
    }
    if (!goodCount.match(regExp)) {
        $('#editGoodCount').addClass('warning-border');//textbox
        $('#error_GoodCount').removeClass('hide-warning-message');
        $('#error_GoodCount').addClass('show-warning-message');//show error
        e.preventDefault();
    }

});

$('.good-image-for-edit').each(function () {
    let regExp = /\//ig;
    $(this).on('dblclick', function () {
        //let imgEl = this;
        //let photoId = imgEl.attributes[3].value;
        //if (photoId > 0) {
        //    fetch(`/Home/DeleteImage/${photoId}}`);
        //}
        this.style.display = "none";
    })
})



//$(function () {
//    var getJson = $('#data').load('/api/Good');
//    var Goods = jQuery.parseJSON(getAllGoods);
//});