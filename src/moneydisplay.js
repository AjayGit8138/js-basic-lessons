const currencies = {
    USD: 'United States Dollar',
    AUD: 'Australian Dollar',
    BGN: 'Bulgarian Lev',
    BRL: 'Brazilian Real',
    CAD: 'Canadian Dollar',
    CHF: 'Swiss Franc',
    CNY: 'Chinese Yuan',
    CZK: 'Czech Republic Koruna',
    DKK: 'Danish Krone',
    GBP: 'British Pound Sterling',
    HKD: 'Hong Kong Dollar',
    HRK: 'Croatian Kuna',
    HUF: 'Hungarian Forint',
    IDR: 'Indonesian Rupiah',
    ILS: 'Israeli New Sheqel',
    INR: 'Indian Rupee',
    JPY: 'Japanese Yen',
    KRW: 'South Korean Won',
    MXN: 'Mexican Peso',
    MYR: 'Malaysian Ringgit',
    NOK: 'Norwegian Krone',
    NZD: 'New Zealand Dollar',
    PHP: 'Philippine Peso',
    PLN: 'Polish Zloty',
    RON: 'Romanian Leu',
    RUB: 'Russian Ruble',
    SEK: 'Swedish Krona',
    SGD: 'Singapore Dollar',
    THB: 'Thai Baht',
    TRY: 'Turkish Lira',
    ZAR: 'South African Rand',
    EUR: 'Euro',
  };
function setcurrencies()
{
  for(var x in currencies)
  {
      console.log(currencies[x]);
      var select = document.getElementById('toconversion');
        var option = document.createElement('option');
        var optionone = document.createElement('option');
        var title = Object.keys(currencies);
        console.log(title);
        // option.text = currencies[x];
        optionone.text = currencies[x];
        select.add(option);
        var selectoption = document.getElementById('money');
        selectoption.add(optionone);
  }
}
setcurrencies();
function dropdown()
{
    var droplength = document.getElementById('money').options.length;
 document.getElementById('money').size = droplength;
}
