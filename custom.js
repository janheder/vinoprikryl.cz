// -----------------------------------------------------------------------------
// PRODUCT PAGE
// -----------------------------------------------------------------------------

/* relocate product title */
$(".p-detail-info .flags").insertBefore(".p-final-price-wrapper");

$(".p-detail-inner-header").insertBefore(".p-final-price-wrapper");

$(".p-detail-info .stars-wrapper").insertBefore(".p-final-price-wrapper");



$(".p .p-tools form").prepend('<span class="quantity"><input type="text" value="1" name="amount" class="form-control amount" data-min="1" data-max="100" tabindex="0"><span class="increase"></span><span class="decrease"></span></span>');


$(".navigation-buttons").prepend($(".top-navigation-tools"));