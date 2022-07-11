// -----------------------------------------------------------------------------
// PRODUCT PAGE
// -----------------------------------------------------------------------------

/* relocate product title */
$(".p-detail-info .flags").insertBefore(".p-final-price-wrapper");

$(".p-detail-inner-header").insertBefore(".p-final-price-wrapper");

$(".p-detail-info .stars-wrapper").insertBefore(".p-detail-inner-header .p-code");



function productAddNumber(){
    $(".p .p-tools form .quantity").remove();
    $(".p .p-tools form").prepend('<span class="quantity"><input type="text" value="1" name="amount" class="form-control amount" data-min="1" data-max="100" tabindex="0"><span class="increase"></span><span class="decrease"></span></span>');
}
productAddNumber();
document.addEventListener('ShoptetDOMPageContentLoaded', function () {
    productAddNumber();
});



$(".navigation-buttons").prepend($(".top-navigation-tools"));


if ($(".cart-header").length){
    $(".cart-header").insertBefore("#checkoutContent");
}


$(".hp-blog .news-wrapper").load("/blog/ .news-wrapper .news-item:nth-child(-n+3)");





/* add 4. step */
if ($(".ordering-process").length){
    $(".cart-header").append('<li class="step step-4"><strong><span>Dokončení objednávky</span></strong></li>');
    $(".cart-header .step-2 span").text("Doprava a platba");
    $(".cart-header .step-3 span").text("Osobní údaje");

    $("#add-note").prop("checked", true);
}



