export const login = {
	url: `https://auth.afip.gov.ar/contribuyente_/login.xhtml?action=SYSTEM&system=rcel`,
  cuitInput: '//*[@id="F1:username"]',
	cuitPageNextButton: '//*[@id="F1:btnSiguiente"]',
	passwordInput: '//*[@id="F1:password"]',
	passwordPageNextButton: '//*[@id="F1:btnIngresar"]',
	personNameSelectionButton: '//*[@id="contenido"]/form/table/tbody/tr[4]/td/input[2]'
}

export const invoiceCreation = {
	createInvoiceButton: '//*[@id="btn_gen_cmp"]',
	pointOfSale: '//*[@id="puntodeventa"]',
	selectInvoice: '//*[@id="universocomprobante"]',
	continueButton: '//*[@id="contenido"]/form/input[2]'
}

export const emissionData = {
	voucherDate: '//*[@id="fc"]',
	conceptsToInclude: '//*[@id="idconcepto"]',
	periodBilledFrom: '//*[@id="fsd"]',
	periodBilledTo: '//*[@id="fsh"]',
	dueDateForPayment: '//*[@id="vencimientopago"]',
	continueButton: '//*[@id="contenido"]/form/input[2]'
}

export const recipentData = {
	selectBoxCostumerType: '//*[@id="idivareceptor"]',
	typeOfPay: '//*[@id="formadepago1"]',
	continueButton: '//*[@id="formulario"]/input[2]',
}

export const operationData = {
	code: '//*[@id="idoperacion"]/tbody/tr[2]/td[1]/input[1]',
	serviceOrProduct: '//*[@id="detalle_descripcion1"]',
	unitPrice: '//*[@id="detalle_precio1"]',
	continueButton: '//*[@id="contenido"]/form/input[8]',
	selectIVATypeBox: '//*[@id="detalle_tipo_iva1"]'
}

export const dataSummary = {
	confirmButton: '//*[@id="btngenerar"]',
	printBillButton: '//*[@id="botones_comprobante"]/input',
	goHomeButton: '//*[@id="contenido"]/table/tbody/tr[2]/td/input'
}