const regex = /`([^`]*)`/;

const convertArrayToObject = (arr) =>
  arr.reduce((obj, str) => {
    const delimiterIndex = str.indexOf("`");
    const key = str.slice(0, delimiterIndex);
    let value = str.slice(delimiterIndex);
    obj[key] = value.match(regex)[1].trim();
    return obj;
  }, {});

export default convertArrayToObject;
