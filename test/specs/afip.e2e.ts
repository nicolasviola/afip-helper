import baseData from '../../data/baseData.js';
import data, {numberoOfIterartionsOfTheSameInvoice} from '../../data/invoiceData.js';
import {
	login,
	invoiceCreation,
	emissionData,
	recipentData,
	operationData,
	dataSummary,
} from '../../selectors/index.js';

describe('AFIP Invoice creation', () => {
	it('Login with valid credentials', async () => {
		await browser.url(login.url);
		await $(login.cuitInput).setValue(baseData.cuit);
		await $(login.cuitPageNextButton).click();
		await $(login.passwordInput).setValue(baseData.pass);
		await $(login.passwordPageNextButton).click();
		await $(login.personNameSelectionButton).click();
	})

	it('Create all invoices listed in invoiceData file', async () => {
		for (let index = 0; index < (+numberoOfIterartionsOfTheSameInvoice || data.length); index++) {
			const el = numberoOfIterartionsOfTheSameInvoice ? data[0] : data[index];
			baseData.test && await browser.pause(1000)
			await $(invoiceCreation.createInvoiceButton).click();
			baseData.test && await browser.pause(1000)
			const selectPointOfSaleBox = await $(invoiceCreation.pointOfSale);
			await selectPointOfSaleBox.selectByAttribute('value', el.pointOfSaleValue);
			const selectInvoice = await $(invoiceCreation.selectInvoice);
			await browser.pause(1000)
			await selectInvoice.selectByAttribute('value', el.selectInvoiceValue);
			await browser.pause(1000)
			await $(invoiceCreation.continueButton).click();
			el.voucherDate && await $(emissionData.voucherDate).setValue(el.voucherDate);
			const selectBoxDate = await $(emissionData.conceptsToInclude);
			await selectBoxDate.selectByAttribute('value', el.conceptsToIncludePosition);
			if(el.conceptsToIncludePosition === '2') {
				el.periodBilledFrom && await $(emissionData.periodBilledFrom).setValue(el.periodBilledFrom);
				el.periodBilledTo && await $(emissionData.periodBilledTo).setValue(el.periodBilledTo);
				el.dueDateForPayment && await $(emissionData.dueDateForPayment).setValue(el.dueDateForPayment);
			}
			baseData.test && await browser.pause(1000)
			await $(emissionData.continueButton).click();
			const selectBoxCostumerType = await $(recipentData.selectBoxCostumerType);
			await selectBoxCostumerType.selectByAttribute('value', el.ivaConditionPosition);
			await $(recipentData.typeOfPay).click();
			await $(recipentData.continueButton).click();
			baseData.test && await browser.pause(1000);
			el.code && await $(operationData.code).setValue(el.code);
			await $(operationData.serviceOrProduct).setValue(el.serviceOrProduct);
			await $(operationData.unitPrice).setValue(el.unitPrice);
			if(el.ivaType) {
				const selectBoxIVAType = await $(operationData.selectIVATypeBox);
				await selectBoxIVAType.selectByAttribute('value', el.ivaType);
			}
			baseData.test && await browser.pause(1000);
			await $(operationData.continueButton).click();
			baseData.test && await browser.pause(1000);
			if(!baseData.test) {
				await $(dataSummary.confirmButton).click();
				!baseData.test && await browser.pause(2000);
				const isAlertOpen = await browser.isAlertOpen();
				if (isAlertOpen) {
					await browser.acceptAlert();
				}
				!baseData.test && await browser.pause(2000);
				await $(dataSummary.printBillButton).click();
				await browser.pause(2000);
				const isPrintAlertOpen = await browser.isAlertOpen();
				if (isPrintAlertOpen) {
					await browser.acceptAlert();
				}
			}
			baseData.test && await browser.pause(1000);
			await $(dataSummary.goHomeButton).click();
			console.log(`------------- FACTURA ${index + 1} GENERADA -------------`);
		}
	})		
});
