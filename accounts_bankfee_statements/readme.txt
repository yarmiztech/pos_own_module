==================
Odoo v14
==================

    1)  This module helps to create bank statement automatically while doing sales, purchase, expense and payslip payment entry time.
                ***  This module also helps to reconcile entries done through all  transaction time.
    2) This module helps us to entry of tax filing data to software after doing payment on tax department portal.
    3) Including Pdf Reports.
==================
Installation
==================

Just select it from available modules to install it, there is no need to extra installations.

Dependency Modules =>
             1] account_reconciliation_widget need to install
=============================================
Configuration:
=============================================
1] Goto Accounting =>Configuration  => select Chart of Accounts Create New Account like """Bank Charges""" type as "Bank and Cash".
                                    => and create "Reverse Charge Tax Receivable" account with type "Current Assets".

2] Goto Accounting => Configuration => select Reconciliation Models Menu
                                    => Create "Bank Fees" and
                                    => select Manually create a write-off on clicked button
                                    => select Counterpart Values lines under
                                          bank as ""Bank Charges"", and based on requirement select Tax also.
** Change product invoice should b based on ordered quantity.
==================
Credits
==================
Developer: Mounika
==================
This module developed and maintained by Enzapps private limited,

For any support on this module, you can post in odoo apps forum or can ping us on shareef@enzapps.com



