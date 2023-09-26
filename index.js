//index.js

//updated on 8th November 2021 based on http://agapub.nmhh.hu/aga_web/szolgaltatoBeforeAction?request_locale=hu info
//valid mobile prefixes are: 20 30, 31, 50, 70
//defining regexpression filter for hungarian mobile numbers

const regexpHungarianMobileCheck = {
  "2000000 to 2019999 | 20 Telenor": /^(\+362020[01][0-9]{4})$/,
  "2020000 to 2022999 | 20 Telenor": /^(\+3620202[0-2][0-9]{3})$/,
  "2025000 to 2027999 | 20 Telenor": /^(\+3620202[5-7][0-9]{3})$/,
  "2030000 to 2099999 | 20 Telenor": /^(\+362020[3-9][0-9]{4})$/,
  "2100000 to 2999999 | 20 Telenor": /^(\+36202[1-9][0-9]{5})$/,
  "3100000 to 9999999 | 20 Telenor": /^(\+3620(3[1-9]|[4-9][0-9])[0-9]{5})$/, // this section contains some small holes

  "0100000 to 0199999 | 30 Telecom": /^(\+363001[0-9]{5})$/,
  "0700000 to 0759999 | 30 Telecom": /^(\+363007[0-5][0-9]{4})$/,
  "0800000 to 1039999 | 30 Telecom": /^(\+3630(0[89][0-9]|10[0-3])[0-9]{4})$/,
  "1060000 to 1069999 | 30 Telecom": /^(\+3630106[0-9]{4})$/,
  "1080000 to 1119999 | 30 Telecom": /^(\+36301(0[8-9]|1[01])[0-9]{4})$/,
  "1130000 to 1999999 | 30 Telecom": /^(\+36301([1][3-9]|[2-9][0-9])[0-9]{4})$/,
  "2000000 to 9999999 | 30 Telecom": /^(\+3630[2-9][0-9]{6})$/, // this section contains some small holes

  "3100000 to 3189999 | 31 Vodafone": /^(\+363131[0-8][0-9]{4})$/,
  "3190000 to 3197999 | 31 Vodafone": /^(\+3631319[0-7][0-9]{3})$/,
  "3199000 to 3292999 | 31 Vodafone": /^(\+36313(199|2[0-8][0-9]|29[0-2])[0-9]{3})$/,
  "3300000 to 3329999 | 31 Vodafone": /^(\+363133[0-2][0-9]{4})$/,
  "3666000 to 3666999 | 31 Vodafone": /^(\+36313666[0-9]{3})$/,
  "7700000 to 7719999 | 31 Vodafone": /^(\+363177[0-1][0-9]{4})$/,
  "7800000 to 7899999 | 31 Vodafone": /^(\+363178[0-9]{5})$/,
  "7900000 to 7909999 | 31 Vodafone": /^(\+3631790[0-9]{4})$/,

  "1000000 to 1399999 | 50 Digi": /^(\+36501[0-3][0-9]{5})$/,

  "0002000 to 0002999 | 70 Vodafone": /^(\+36700002[0-9]{3})$/,
  "1188000 to 1188999 | 70 Vodafone": /^(\+36701188[0-9]{3})$/,
  "1940000 to 1940999 | 70 Vodafone": /^(\+36701940[0-9]{3})$/,
  "1975000 to 1979999 | 70 Vodafone": /^(\+3670197[5-9][0-9]{3})$/,
  "1980000 to 1999999 | 70 Vodafone": /^(\+367019[8-9][0-9]{4})$/,
  "2000000 to 9999999 | 70 Vodafone": /^(\+3670[2-9][0-9]{6})$/, // this section contains some small holes
};

//cleaning up hungarian phone numbers
function cleanupHungarianPhoneNumber(phonenumber) {
  return phonenumber.replace(/^(06|0036)/g, "+36").replace(/ /g, "");
}

//checking if value is valid hungarian mobile number
function isValidHunPhoneNumber(phonenumber) {
  const cleanedData = cleanupHungarianPhoneNumber(phonenumber);
  let result = false;

  for (let key in regexpHungarianMobileCheck) {
    if (regexpHungarianMobileCheck.hasOwnProperty(key)) {
      result = regexpHungarianMobileCheck[key].test(cleanedData);
      if (result === true) {
        break;
      }
    }
  }
  return result === true ? cleanedData : false;
}

module.exports = isValidHunPhoneNumber;
