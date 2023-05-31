import { Data } from '../types'

const currentMonth = "Abril/23"
const voucherDate = "01/05/2023" // only required on service vouchers
const dateFrom = "01/04/2023" // only required on service vouchers
const dateTo = "30/04/2023" // only required on service vouchers
const dueDateForPayment = "10/05/2023" // only required on service vouchers

/*
Only use the variable numberoOfIterartionsOfTheSameInvoice if you want the same invoice to be repeated multiple times.
In that case add the number of times you want it to repeat on the variable replacing the ''.

The Voucher that will be repeated, is only the first voucher in the list.
*/

export const numberoOfIterartionsOfTheSameInvoice = ''

const data: Data[] = [
	{ // First Voucher - service example
		pointOfSaleValue: "2",
		selectInvoiceValue: "2",
		voucherDate: voucherDate,
		conceptsToIncludePosition: "2",
		periodBilledFrom: dateFrom,
		periodBilledTo: dateTo,
		dueDateForPayment: dueDateForPayment,
		ivaConditionPosition: "5",
		code: "001",
		serviceOrProduct: `Description - ${currentMonth}`,
		unitPrice: "29000"
	},
	{ // Second Voucher - product example
		pointOfSaleValue: "4",
		selectInvoiceValue: "19",
		voucherDate: voucherDate,
		conceptsToIncludePosition: "1",
		ivaConditionPosition: "5",
		serviceOrProduct: 'Venta de productos varios',
		unitPrice: "30000",
		ivaType: '5'
	}
// You can continue adding vouchers
]

export default data