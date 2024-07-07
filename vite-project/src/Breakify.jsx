import elements from '../elements';

const elementMap = elements.reduce((acc, element) => {
  acc[element.symbol] = element.atomicNumber;
  return acc;
}, {});

export default function breakify(str) {
  const length = str.length;
  let result = [];

  for (let i = 0; i < length; i++) {
    const oneChar = str[i].toUpperCase();
    const twoChar = `${oneChar}${str[i + 1] ? str[i + 1].toLowerCase() : ''}`;

    if (elementMap[twoChar] !== undefined) {
      result = [
        { part: str.slice(0, i), atomicNumber: null },
        { part: twoChar, atomicNumber: elementMap[twoChar] },
        { part: str.slice(i + 2, length), atomicNumber: null },
      ];
      break;
    } else if (elementMap[oneChar] !== undefined) {
      result = [
        { part: str.slice(0, i), atomicNumber: null },
        { part: oneChar, atomicNumber: elementMap[oneChar] },
        { part: str.slice(i + 1, length), atomicNumber: null },
      ];
      break;
    }
  }

  return result.length > 0 ? result : [{ part: str, atomicNumber: null }];
}
