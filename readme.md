# afip-helper

Automation bot to create invoice in the AFIP system. This system is only designed to:
* Create generic type C invoices to final consumers.
* To pay in cash.

## Installation

1. Open the console and clone the project.
2. Access to the created folder.
2. Run the command:

```bash
npm install
```

## Usage

Steps to follow:

1. Open the project with some code editor.
2. Create a copy of the ```dataExample``` folder and name it ```data```.
2. Edit the information of the internal files of the new ```data``` folder:

      A. In the ```baseData``` file, add the user's CUIT number and password as a string.
      
      B. In the ```invoiceData``` file, change:

      * The value of constants based on:

          1. ```currentMonth```: Month to be billed.
          2. ```voucherDate```: Date on which the invoice will be created.
          3. ```dateFrom```: First day of the period being billed.
          4. ```dateTo```: Last day of the period being billed.
          5. ```dueDateForPayment```: Due date of the invoice.

      * The value of the collection to export:
          1. ```serviceOrProduct```: with the description you want to add to each invoice.
          2. ```unitPrice```: with the amount you want to invoice.


## Run the project

1. In the ```baseData``` file inside the ```data``` folder there is a property of the exported object called "Test". If that property is true, it means that the project will run as a test and will not do any billing. For invoices to actually be created, the value of that property must be false.
2. Make sure the Google Chrome browser is installed.
3. Make sure the Google Chrome browser version used matches the ```chromedriver``` version. To check that go to the ```package.json``` file inside the project. Only the first 3 numbers have to match. If they don't match, change the ```chromedriver``` numbers, save the file, and run the ```npm install``` command in the console again.
2. In the console run the command:
```bash
npm run wdio
```

## License

Copy right - Nicolás Viola