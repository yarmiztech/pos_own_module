
{
    "name": "Bank Fees Statement & Tax Amount Return",
    "version": "14.0.1.2.1",
    "category": "Accounting",
    "license": "OPL-1",
     'summary': """
        1)  This module helps to create bank statement automatically while doing sales, purchase, expense and payslip payment entry time.
            ***  This module also helps to reconcile entries done through all  transaction time.
        2) This module helps us to entry of tax filing data to software after doing payment on tax department portal. 
        """,
    'description': """
        1)  This module helps to create bank statement automatically while doing sales, purchase, expense and payslip payment entry time.
            ***  This module also helps to reconcile entries done through all  transaction time.
        2) This module helps us to entry of tax filing data to software after doing payment on tax department portal. 
        3) Including Pdf Reports.
        """,
    "author": "Enzapps Private Limited",
    "website": "https://www.enzapps.com",
    "depends": ["account"],
    "data": [
        "security/ir.model.access.csv",
        "security/security.xml",
        "data/sequence.xml",
        "views/account_bank_statement_view.xml",
        "views/tax_return.xml",
        "report/bankfee_entry_view.xml",
        "report/bankfee_view.xml",
        "report/report.xml",
    ],
    "qweb": [
    ],
    "installable": True,
    "price": '130',
    "currency": 'USD',
}
