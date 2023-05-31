import {
	selectInvoiceValue,
	conceptsToIncludePosition,
	ivaConditionPosition,
	voucherIvaType
} from '../enums'

export interface Data {
	pointOfSaleValue: string;
	selectInvoiceValue: selectInvoiceValue;
	voucherDate?: string;
	conceptsToIncludePosition: conceptsToIncludePosition;
	periodBilledFrom?: string;
	periodBilledTo?: string;
	dueDateForPayment?: string;
	ivaConditionPosition: ivaConditionPosition;
	code?: string;
	serviceOrProduct: string;
	unitPrice: string;
	ivaType?: voucherIvaType;
}

