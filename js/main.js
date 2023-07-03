const elsPaymentPariodRadio = document.querySelectorAll ('[name="payment-period"]');
const elsPricingPlanValue = document.querySelectorAll ('.box-heading-value');

elsPaymentPariodRadio.forEach( function (elPaymentPariodRadio) {
  elPaymentPariodRadio.addEventListener('change', function () {
    const period = elPaymentPariodRadio.value;

    if (period === 'annually') {
      elsPricingPlanValue.forEach(function(elPrice) {
        elPrice.textContent = elPrice.closest('.content-box').dataset.paymentAnnually;
      })
    }
    else {
      elsPricingPlanValue.forEach(function(elPrice) {
        elPrice.textContent = elPrice.closest('.content-box').dataset.paymentMonthly;
      })
    }
  })
})