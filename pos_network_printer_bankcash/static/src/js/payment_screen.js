odoo.define('pos_network_printer_bankcash.models_mrp_orders', function (require) {
"use strict";
var models = require('point_of_sale.models');
const PaymentScreen = require('point_of_sale.PaymentScreen');
const Registries = require('point_of_sale.Registries');
var rpc = require('web.rpc');

    var existing_models = models.PosModel.prototype.models;

    const SalePaymentScreen = (PaymentScreen) =>
        class extends PaymentScreen {
//            console.log(this,'mounikaaaaaaaaaaaaa');
//            console.log('testing posssss');
            constructor() {
              debugger;
//            console.log(this,'mounikaaaaaaaaaaaaa');


                super(...arguments);
                console.log(this,'testing posssss');
                console.log(this.paymentLines,'testing posssss');


            }
             show(){
                var self = this;
                this._super();
                debugger;
                console.log('cllindddddddddddddddddddddd',this)
                this.renderElement();
        }
//            createMRP(){
//                const order = this.currentOrder;
//            var order_line = order.orderlines.models;
//            var due = order.get_due();
//             for (var i in order_line)
//              {
//              debugger;
//              console.log('hhhhhhhhhhhhhhhhhhh')
//		         var list_product = []
//                 if (order_line[i].product.to_make_mrp)
//                 {
//                   if (order_line[i].quantity>0)
//                   {
//                     var product_dict = {
//                        'id': order_line[i].product.id,
//                        'qty': order_line[i].quantity,
//                        'product_tmpl_id': order_line[i].product.product_tmpl_id,
//                        'pos_reference': order.name,
//                        'uom_id': order_line[i].product.uom_id[0],
//                   };
//                  list_product.push(product_dict);
//                 }
//
//              }
//
//              if (list_product.length)
//              {
//                rpc.query({
//                    model: 'mrp.production',
//                    method: 'create_mrp_from_pos',
//                    args: [1,list_product],
//                    });
//              }
//            }
//            }
            async validateOrder(isForceValidate) {
            debugger;
            console.log(this,'mounikaaaaaaaaaaaaa');
//            console.log('testing posssss');
            if(this.env.pos.config.cash_rounding) {
                if(!this.env.pos.get_order().check_paymentlines_rounding()) {
                    this.showPopup('ErrorPopup', {
                        title: this.env._t('Rounding error in payment lines'),
                        body: this.env._t("The amount of your payment lines must be rounded to validate the transaction."),
                    });
                    return;
                }
            }
            if (await this._isOrderValid(isForceValidate)) {
                // remove pending payments before finalizing the validation
                for (let line of this.paymentLines) {
                    if (!line.is_done()) this.currentOrder.remove_paymentline(line);
                }
                await this._finalizeValidation();
            }
//            this.createMRP();
        }
        };

    Registries.Component.extend(PaymentScreen, SalePaymentScreen);

    return SalePaymentScreen;

});
