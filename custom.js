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




// =============================================================================
// ADVANCED ORCDER SUMMARY
// =============================================================================

if ($(".type-detail").length){

    $("body").append('<div class="advancedModal"><div class="advancedModal__inner"><h2 class="advancedModal__title">Zboží bylo přidáno do košíku</h2><div class="advancedModal__content"></div><div class="advancedModal__buttons"><a href="/" class="btn btn-ghost">Zpět do obchodu</a><a href="/kosik" class="btn">Přejít do košíku</a></div></div></div>');

    if ($(".products-related").length){
        var related = $(".products-related").html();
        $(".advancedModal__inner").append('<div id="productsRelated"><h3 class="advancedModal__relatedTitle">Související produkty</h3><div class="products-block">' + related + '</div></div>');
    }
    
    function advanceOrderCustom() {
    
        $("body").addClass("--advancedModal");
        $(".advancedModal__content").html("");
    
        var img = $(".p-detail-inner .p-image-wrapper a").html();
        var name = $(".p-detail-inner .p-detail-inner-header h1").html();
        if($(".p-detail-inner .parameter-dependent").length){
            var stock = $(".p-detail-inner .availability-value .parameter-dependent:not(.noDisplay) span").html();
        }else{
            var stock = $(".p-detail-inner .availability-value").html();
        }
        var amount = parseFloat($(".p-detail-inner .add-to-cart .amount").val());
    
        var priceSingle = $(".p-detail-inner .p-final-price-wrapper .price-final-holder:not(.noDisplay)").html();
        var priceTotal = parseFloat(priceSingle.replace(/ /g, ''))*amount;
    
        $(".advancedModal__content").prepend('<div class="advancedProduct">' +
        '<div class="advancedProduct-img">' + img + '</div>' +
        '<div class="advancedProduct-content">' +
        '<div class="advancedProduct-name">' + name + '</div>' +
        '<div class="advancedProduct-stock">Dostupnost<span>' + stock + '</span></div>' +
        '<div class="advancedProduct-amount">Počet kusů<span>' + amount + 'x</span></div>' +
        '<div class="advancedProduct-priceTotal">Celková cena<span>' + priceTotal + ' Kč</span></div>' +
        '</div></div>');
        
    }
    
    /* call functions after order modal loaded */
    document.addEventListener('ShoptetCartUpdated', function () {
        advanceOrderCustom();
    },{
        passive: true
    });

    $('.advancedModal').on('click',function(e){
        if (e.target !== this)
        return;
        $("body").removeClass("--advancedModal");
    });

}



if ($(".add-to-cart-button").length){

    $("body").append('<div class="advancedModal --product"><div class="advancedModal__inner"><h2 class="advancedModal__title">Zboží bylo přidáno do košíku</h2><div class="advancedModal__content"></div><div class="advancedModal__buttons"><a href="/" class="btn btn-ghost">Zpět do obchodu</a><a href="/kosik" class="btn">Přejít do košíku</a></div></div></div>');

    
    /* call functions after order modal loaded */
    $(".add-to-cart-button").on('click',function(){

        var img = $(this).closest(".p").find(".image").html();
        var name = $(this).closest(".p").find(".name").html();
        var stock = $(this).closest(".p").find(".availability").html();

        var amount = parseFloat($(this).closest(".p").find(".amount").val());

        var priceSingle = $(this).closest(".p").find(".price-final strong").html();
        var priceTotal = parseFloat(priceSingle.replace(/ /g, ''))*amount;

        document.addEventListener('ShoptetCartUpdated', function () {
            $("body").addClass("--advancedModal");
            $(".advancedModal__content").html("");
        
            $(".advancedModal__content").prepend('<div class="advancedProduct">' +
            '<div class="advancedProduct-img">' + img + '</div>' +
            '<div class="advancedProduct-content">' +
            '<div class="advancedProduct-name">' + name + '</div>' +
            '<div class="advancedProduct-stock">Dostupnost<span>' + stock + '</span></div>' +
            '<div class="advancedProduct-amount">Počet kusů<span>' + amount + 'x</span></div>' +
            '<div class="advancedProduct-priceTotal">Celková cena<span>' + priceTotal + ' Kč</span></div>' +
            '</div></div>');
        },{
            passive: true
        });
    });




    $('.advancedModal').on('click',function(e){
        if (e.target !== this)
        return;
        $("body").removeClass("--advancedModal");
    });
}