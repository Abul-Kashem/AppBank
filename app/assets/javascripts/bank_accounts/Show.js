/**
 * Created by kashem on 7/30/17.
 */
// alert("hello world")
var Show = (function () {

    var $btnNewTransaction;
    var $modalTransaction;
    var $btnSave;
    var $inputAmount;
    var $selectTransactionType;

    var fetchElements = function () {
        $btnNewTransaction      = $("#btn-new-transaction");
        $modalTransaction       = $("#modal-transaction");
        $btnSave                = $("#btnSave");
        $inputAmount            = $("#input-amount");
        $selectTransactionType  = $("#select-transaction-type");
    };

    var initialzeEvents = function () {
      $btnNewTransaction.on("click", function () {
         // alert("Hello World!");
          $modalTransaction.modal("show");
      });
    };


    var init = function () {
        fetchElements();
        initialzeEvents();
    };

    return{
      init: init
    };
})();