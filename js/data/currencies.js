import _ from 'underscore';
import app from '../app';

const currencies = [
  {
    name: 'Afghani',
    code: 'AFN',
    symbol: '؋',
  },
  {
    name: 'Euro',
    code: 'EUR',
    symbol: '€',
  },
  {
    name: 'Lek',
    code: 'ALL',
    symbol: 'Lek',
  },
  {
    name: 'Algerian Dinar',
    code: 'DZD',
    symbol: 'د.ج',
  },
  {
    name: 'United States Dollar',
    code: 'USD',
    symbol: '$',
  },
  {
    name: 'Kwanza',
    code: 'AOA',
    symbol: 'Kz',
  },
  {
    name: 'East Caribbean Dollar',
    code: 'XCD',
    symbol: '$',
  },
  {
    name: 'Argentine Peso',
    code: 'ARS',
    symbol: '$',
  },
  {
    name: 'Armenian Dram',
    code: 'AMD',
    symbol: undefined,
  },
  {
    name: 'Aruban Florin',
    code: 'AWG',
    symbol: 'ƒ',
  },
  {
    name: 'Australian Dollar',
    code: 'AUD',
    symbol: '$',
  },
  {
    name: 'Azerbaijanian Manat',
    code: 'AZN',
    symbol: 'ман',
  },
  {
    name: 'Bahamian Dollar',
    code: 'BSD',
    symbol: '$',
  },
  {
    name: 'Bahraini Dinar',
    code: 'BHD',
    symbol: 'BD',
  },
  {
    name: 'Taka',
    code: 'BDT',
    symbol: '৳',
  },
  {
    name: 'Barbados Dollar',
    code: 'BBD',
    symbol: '$',
  },
  {
    name: 'Belarussian Ruble',
    code: 'BYR',
    symbol: 'p.',
  },
  {
    name: 'Belize Dollar',
    code: 'BZD',
    symbol: 'BZ$',
  },
  {
    name: 'CFA Franc BCEAO',
    code: 'XOF',
    symbol: 'CFA',
  },
  {
    name: 'Bermudian Dollar',
    code: 'BMD',
    symbol: '$',
  },
  {
    name: 'Ngultrum',
    code: 'BTN',
    symbol: 'Nu',
  },
  {
    name: 'Boliviano',
    code: 'BOB',
    symbol: '$b',
  },
  {
    name: 'Convertible Mark',
    code: 'BAM',
    symbol: 'KM',
  },
  {
    name: 'Pula',
    code: 'BWP',
    symbol: 'P',
  },
  {
    name: 'Norwegian Krone',
    code: 'NOK',
    symbol: 'kr',
  },
  {
    name: 'Brazilian Real',
    code: 'BRL',
    symbol: 'R$',
  },
  {
    name: 'Brunei Dollar',
    code: 'BND',
    symbol: '$',
  },
  {
    name: 'Bulgarian Lev',
    code: 'BGN',
    symbol: 'лв',
  },
  {
    name: 'Burundi Franc',
    code: 'BIF',
    symbol: 'BIF',
  },
  {
    name: 'Cabo Verde Escudo',
    code: 'CVE',
    symbol: '$',
  },
  {
    name: 'Riel',
    code: 'KHR',
    symbol: '៛',
  },
  {
    name: 'CFA Franc BEAC',
    code: 'XAF',
    symbol: undefined,
  },
  {
    name: 'Canadian Dollar',
    code: 'CAD',
    symbol: '$',
  },
  {
    name: 'Cayman Islands Dollar',
    code: 'KYD',
    symbol: '$',
  },
  {
    name: 'Chilean Peso',
    code: 'CLP',
    symbol: '$',
  },
  {
    name: 'Yuan Renminbi',
    code: 'CNY',
    symbol: '¥',
  },
  {
    name: 'Colombian Peso',
    code: 'COP',
    symbol: '$',
  },
  {
    name: 'Comoro Franc',
    code: 'KMF',
    symbol: undefined,
  },
  {
    name: 'Congolese Franc',
    code: 'CDF',
    symbol: undefined,
  },
  {
    name: 'New Zealand Dollar',
    code: 'NZD',
    symbol: '$',
  },
  {
    name: 'Costa Rican Colon',
    code: 'CRC',
    symbol: '₡',
  },
  {
    name: 'Kuna',
    code: 'HRK',
    symbol: 'kn',
  },
  {
    name: 'Cuban Peso',
    code: 'CUP',
    symbol: '₱',
  },
  {
    name: 'NeTherlands Antillean Guilder',
    code: 'ANG',
    symbol: 'ƒ',
  },
  {
    name: 'Czech Koruna',
    code: 'CZK',
    symbol: 'Kč',
  },
  {
    name: 'Danish Krone',
    code: 'DKK',
    symbol: 'kr',
  },
  {
    name: 'Djibouti Franc',
    code: 'DJF',
    symbol: undefined,
  },
  {
    name: 'Dominican Peso',
    code: 'DOP',
    symbol: 'RD$',
  },
  {
    name: 'Egyptian Pound',
    code: 'EGP',
    symbol: '£',
  },
  {
    name: 'El Salvador Colon',
    code: 'SVC',
    symbol: '$',
  },
  {
    name: 'Nakfa',
    code: 'ERN',
    symbol: undefined,
  },
  {
    name: 'Ethiopian Birr',
    code: 'ETB',
    symbol: undefined,
  },
  {
    name: 'Falkland Islands Pound',
    code: 'FKP',
    symbol: '£',
  },
  {
    name: 'Fiji Dollar',
    code: 'FJD',
    symbol: '$',
  },
  {
    name: 'CFP Franc',
    code: 'XPF',
    symbol: undefined,
  },
  {
    name: 'Dalasi',
    code: 'GMD',
    symbol: undefined,
  },
  {
    name: 'Lari',
    code: 'GEL',
    symbol: undefined,
  },
  {
    name: 'Ghana Cedi',
    code: 'GHS',
    symbol: undefined,
  },
  {
    name: 'Gibraltar Pound',
    code: 'GIP',
    symbol: '£',
  },
  {
    name: 'Quetzal',
    code: 'GTQ',
    symbol: 'Q',
  },
  {
    name: 'Pound Sterling',
    code: 'GBP',
    symbol: '£',
  },
  {
    name: 'Guinea Franc',
    code: 'GNF',
    symbol: undefined,
  },
  {
    name: 'Guyana Dollar',
    code: 'GYD',
    symbol: '$',
  },
  {
    name: 'Gourde',
    code: 'HTG',
    symbol: undefined,
  },
  {
    name: 'Lempira',
    code: 'HNL',
    symbol: 'L',
  },
  {
    name: 'Hong Kong Dollar',
    code: 'HKD',
    symbol: '$',
  },
  {
    name: 'Forint',
    code: 'HUF',
    symbol: 'Ft',
  },
  {
    name: 'Iceland Krona',
    code: 'ISK',
    symbol: 'kr',
  },
  {
    name: 'Indian Rupee',
    code: 'INR',
    symbol: '₹',
  },
  {
    name: 'Rupiah',
    code: 'IDR',
    symbol: 'Rp',
  },
  {
    name: 'Iranian Rial',
    code: 'IRR',
    symbol: '﷼',
  },
  {
    name: 'Iraqi Dinar',
    code: 'IQD',
    symbol: undefined,
  },
  {
    name: 'New Israeli Sheqel',
    code: 'ILS',
    symbol: '₪',
  },
  {
    name: 'Jamaican Dollar',
    code: 'JMD',
    symbol: 'J$',
  },
  {
    name: 'Yen',
    code: 'JPY',
    symbol: '¥',
  },
  {
    name: 'Jordanian Dinar',
    code: 'JOD',
    symbol: undefined,
  },
  {
    name: 'Tenge',
    code: 'KZT',
    symbol: 'лв',
  },
  {
    name: 'Kenyan Shilling',
    code: 'KES',
    symbol: undefined,
  },
  {
    name: 'North Korean Won',
    code: 'KPW',
    symbol: '₩',
  },
  {
    name: 'Won',
    code: 'KRW',
    symbol: '₩',
  },
  {
    name: 'Kuwaiti Dinar',
    code: 'KWD',
    symbol: undefined,
  },
  {
    name: 'Som',
    code: 'KGS',
    symbol: 'лв',
  },
  {
    name: 'Kip',
    code: 'LAK',
    symbol: '₭',
  },
  {
    name: 'Lebanese Pound',
    code: 'LBP',
    symbol: '£',
  },
  {
    name: 'Loti',
    code: 'LSL',
    symbol: undefined,
  },
  {
    name: 'Liberian Dollar',
    code: 'LRD',
    symbol: '$',
  },
  {
    name: 'Libyan Dinar',
    code: 'LYD',
    symbol: undefined,
  },
  {
    name: 'Swiss Franc',
    code: 'CHF',
    symbol: 'CHF',
  },
  {
    name: 'Pataca',
    code: 'MOP',
    symbol: undefined,
  },
  {
    name: 'Denar',
    code: 'MKD',
    symbol: 'ден',
  },
  {
    name: 'Malagasy Ariary',
    code: 'MGA',
    symbol: undefined,
  },
  {
    name: 'Kwacha',
    code: 'MWK',
    symbol: undefined,
  },
  {
    name: 'Malaysian Ringgit',
    code: 'MYR',
    symbol: 'RM',
  },
  {
    name: 'Rufiyaa',
    code: 'MVR',
    symbol: undefined,
  },
  {
    name: 'Ouguiya',
    code: 'MRO',
    symbol: undefined,
  },
  {
    name: 'Mauritius Rupee',
    code: 'MUR',
    symbol: '₨',
  },
  {
    name: 'Mexican Peso',
    code: 'MXN',
    symbol: '$',
  },
  {
    name: 'Moldovan Leu',
    code: 'MDL',
    symbol: undefined,
  },
  {
    name: 'Tugrik',
    code: 'MNT',
    symbol: '₮',
  },
  {
    name: 'Moroccan Dirham',
    code: 'MAD',
    symbol: undefined,
  },
  {
    name: 'Mozambique Metical',
    code: 'MZN',
    symbol: 'MT',
  },
  {
    name: 'Kyat',
    code: 'MMK',
    symbol: undefined,
  },
  {
    name: 'Namibia Dollar',
    code: 'NAD',
    symbol: '$',
  },
  {
    name: 'Nepalese Rupee',
    code: 'NPR',
    symbol: '₨',
  },
  {
    name: 'Cordoba Oro',
    code: 'NIO',
    symbol: 'C$',
  },
  {
    name: 'Naira',
    code: 'NGN',
    symbol: '₦',
  },
  {
    name: 'Rial Omani',
    code: 'OMR',
    symbol: '﷼',
  },
  {
    name: 'Pakistan Rupee',
    code: 'PKR',
    symbol: '₨',
  },
  {
    name: 'Balboa',
    code: 'PAB',
    symbol: 'B/.',
  },
  {
    name: 'Kina',
    code: 'PGK',
    symbol: 'K',
  },
  {
    name: 'Guarani',
    code: 'PYG',
    symbol: 'Gs',
  },
  {
    name: 'Nuevo Sol',
    code: 'PEN',
    symbol: 'S/.',
  },
  {
    name: 'Philippine Peso',
    code: 'PHP',
    symbol: '₱',
  },
  {
    name: 'Zloty',
    code: 'PLN',
    symbol: 'zł',
  },
  {
    name: 'Qatari Rial',
    code: 'QAR',
    symbol: '﷼',
  },
  {
    name: 'Romanian Leu',
    code: 'RON',
    symbol: 'lei',
  },
  {
    name: 'Russian Ruble',
    code: 'RUB',
    symbol: 'руб',
  },
  {
    name: 'Rwanda Franc',
    code: 'RWF',
    symbol: 'R₣',
  },
  {
    name: 'Saint Helena Pound',
    code: 'SHP',
    symbol: '£',
  },
  {
    name: 'Tala',
    code: 'WST',
    symbol: '$',
  },
  {
    name: 'Dobra',
    code: 'STD',
    symbol: undefined,
  },
  {
    name: 'Saudi Riyal',
    code: 'SAR',
    symbol: '﷼',
  },
  {
    name: 'Serbian Dinar',
    code: 'RSD',
    symbol: 'Дин.',
  },
  {
    name: 'Seychelles Rupee',
    code: 'SCR',
    symbol: '₨',
  },
  {
    name: 'Leone',
    code: 'SLL',
    symbol: 'Le',
  },
  {
    name: 'Singapore Dollar',
    code: 'SGD',
    symbol: '$',
  },
  {
    name: 'Sucre',
    code: 'XSU',
    symbol: undefined,
  },
  {
    name: 'Solomon Islands Dollar',
    code: 'SBD',
    symbol: '$',
  },
  {
    name: 'Somali Shilling',
    code: 'SOS',
    symbol: 'S',
  },
  {
    name: 'Rand',
    code: 'ZAR',
    symbol: 'R',
  },
  {
    name: 'South Sudanese Pound',
    code: 'SSP',
    symbol: undefined,
  },
  {
    name: 'Sri Lanka Rupee',
    code: 'LKR',
    symbol: '₨',
  },
  {
    name: 'Sudanese Pound',
    code: 'SDG',
    symbol: undefined,
  },
  {
    name: 'Surinam Dollar',
    code: 'SRD',
    symbol: '$',
  },
  {
    name: 'Lilangeni',
    code: 'SZL',
    symbol: undefined,
  },
  {
    name: 'Swedish Krona',
    code: 'SEK',
    symbol: 'kr',
  },
  {
    name: 'Syrian Pound',
    code: 'SYP',
    symbol: '£',
  },
  {
    name: 'New Taiwan Dollar',
    code: 'TWD',
    symbol: 'NT$',
  },
  {
    name: 'Somoni',
    code: 'TJS',
    symbol: undefined,
  },
  {
    name: 'Tanzanian Shilling',
    code: 'TZS',
    symbol: undefined,
  },
  {
    name: 'Baht',
    code: 'THB',
    symbol: '฿',
  },
  {
    name: 'Pa\'anga',
    code: 'TOP',
    symbol: undefined,
  },
  {
    name: 'Trinidad and Tobago Dollar',
    code: 'TTD',
    symbol: 'TT$',
  },
  {
    name: 'Tunisian Dinar',
    code: 'TND',
    symbol: undefined,
  },
  {
    name: 'Turkish Lira',
    code: 'TRY',
    symbol: '₺',
  },
  {
    name: 'Turkmenistan New Manat',
    code: 'TMT',
    symbol: undefined,
  },
  {
    name: 'Uganda Shilling',
    code: 'UGX',
    symbol: undefined,
  },
  {
    name: 'Hryvnia',
    code: 'UAH',
    symbol: '₴',
  },
  {
    name: 'UAE Dirham',
    code: 'AED',
    symbol: undefined,
  },
  {
    name: 'Peso Uruguayo',
    code: 'UYU',
    symbol: '$U',
  },
  {
    name: 'Uzbekistan Sum',
    code: 'UZS',
    symbol: 'лв',
  },
  {
    name: 'Vatu',
    code: 'VUV',
    symbol: undefined,
  },
  {
    name: 'Bolivar',
    code: 'VEF',
    symbol: 'Bs',
  },
  {
    name: 'Dong',
    code: 'VND',
    symbol: '₫',
  },
  {
    name: 'Yemeni Rial',
    code: 'YER',
    symbol: '﷼',
  },
  {
    name: 'Zambian Kwacha',
    code: 'ZMW',
    symbol: undefined,
  },
  {
    name: 'Zimbabwe Dollar',
    code: 'ZWL',
    symbol: '$',
  },
];

export default currencies;

function getTranslatedCurrencies(lang, sort = true) {
  if (!lang) {
    throw new Error('Please provide the language the translated currencies' +
      ' should be returned in.');
  }

  let translated = currencies.map((currency) => ({
    ...currency,
    name: app.polyglot.t(`currencies.${currency.code}`),
  }));

  if (sort) {
    translated = translated.sort((a, b) => a.name.localeCompare(b.name, lang));
  }

  return translated;
}

const memoizedGetTranslatedCurrencies =
  _.memoize(getTranslatedCurrencies, (lang, sort) => `${lang}-${!!sort}`);

export { memoizedGetTranslatedCurrencies as getTranslatedCurrencies };
