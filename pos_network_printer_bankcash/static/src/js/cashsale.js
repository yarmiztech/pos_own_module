odoo.define('pos_network_printer_bankcash.CashButton', function(require) {
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



    class CashButton extends PaymentScreen {
        constructor() {
            debugger;
            super(...arguments);
            useListener('click', this.onClick);
        }
        async onClick() {
            const order = this.env.pos.get_order();
            if (order.get_orderlines().length > 0) {
//                await this.showTempScreen('StrawScreen');
//               const recurrenceUpdate =  await this.showScreen('PaymentScreen', { floor: this.floor });
//               const recurrenceUpdate =  await this.showScreen('PaymentScreen', { payment_method: 'Cash' });
//               console.log(recurrenceUpdate,'recurrenceUpdate')
//                await this._finalizeValidation()
//                   ProductScreen.do.clickPayButton();
//    CashButton.do.clickPaymentMethod('Cash');
//    CashButton.do.clickValidate();
            debugger;
            console.log(this)
            var payment_method = {
                "id": 1,
                "name": "Cash",
                "is_cash_count": true,
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
    CashButton.template = 'CashButton';

    ProductScreen.addControlButton({
        component: CashButton,
        condition: function() {
            return true;
        },
        position: ['before', 'SetPricelistButton'],
    });

    Registries.Component.add(CashButton);

    return CashButton;
});
