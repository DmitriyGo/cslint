import {cssPropertyOrder} from "./cssPropertyOrder";

const sortCssProperties = (obj: any) => {
    const keys = Object.keys(obj)
        .filter(key => obj[key] !== undefined)
        .sort((a, b) => {
            const indexA = cssPropertyOrder.indexOf(a);
            const indexB = cssPropertyOrder.indexOf(b);
            if (indexA === -1 && indexB === -1) {
                return 0;
            } else if (indexA === -1) {
                return 1;
            } else if (indexB === -1) {
                return -1;
            } else {
                return indexA - indexB;
            }
        });
    return keys
        .map(key => `${key}: ${obj[key]}`)
        .join('\n  ');
};

export default sortCssProperties