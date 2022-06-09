// -----------------------------------------------------------------------------
// PRODUCT PAGE
// -----------------------------------------------------------------------------

/* relocate product title */
$(".p-detail-info .flags").insertBefore(".p-final-price-wrapper");

$(".p-detail-inner-header").insertBefore(".p-final-price-wrapper");

$(".p-detail-info .stars-wrapper").insertBefore(".p-final-price-wrapper");



function productAddNumber(){ 
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