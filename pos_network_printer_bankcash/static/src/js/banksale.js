odoo.define('pos_network_printer_bankcash.BankButton', function(require) {
    'use strict';

    const PosComponent = require('point_of_sale.PosComponent');
    const ProductScreen = require('point_of_sale.ProductScreen');
    const { useListener } = require('web.custom_hooks');
    const Registries = require('point_of_sale.Registries');
    const PaymentScreen = require('point_of_sale.PaymentScreen');

//     const { OrderManagementScreen } = require('point_of_sale.tour.OrderManagementScreenTourMethods');
//    const { ProductScreen } = require('point_of_sale.tour.ProductScreenTourMethods');
//    const { PaymentScreen } = require('point_of_sale.tour.PaymentScreenTourMethods');
//    const { ClientListScreen } = require('point_of_sale.tour.ClientListScreenTourMethods');
//    const { TicketScreen } = require('point_of_sale.tour.TicketScreenTourMethods');
//    const { Chrome } = require('point_of_sale.tour.ChromeTourMethods');
//    const { makeFullOrder } = require('point_of_sale.tour.CompositeTourMethods');
//    const { getSteps, startSteps } = require('point_of_sale.tour.utils');
//    var Tour = require('web_tour.tour');



    class BankButton extends PaymentScreen {
        constructor() {
            debugger;
            super(...arguments);
            useListener('click', this.onClick);
        }
        async onClick() {
            const order = this.env.pos.get_order();
            if (order.get_orderlines().length > 0) {
            debugger;
            console.log(this)
            var payment_method = {
                    "id": 2,
                    "name": "Bank",
                    "is_cash_count": false,
                    "use_payment_terminal": false
                }
//            addNewPaymentLine
//            this.addNewPaymentLine({payment_method});
            this.currentOrder.add_paymentline(payment_method)
            this._finalizeValidation()

//            await this.showScreen('ReceiptScreen');
//            await this.showScreen('ReprintReceiptScreen', { order: order });




            } else {
                await this.showPopup('ErrorPopup', {
                    title: this.env._t('Nothing to Print'),
                    body: this.env._t('There are no order lines'),
                });
            }
        }
    }
    BankButton.template = 'BankButton';

    ProductScreen.addControlButton({
        component: BankButton,
        condition: function() {
            return true;
        },
        position: ['before', 'SetPricelistButton'],
    });

    Registries.Component.add(BankButton);

    return BankButton;
});
