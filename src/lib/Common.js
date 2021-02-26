import moment from 'moment';

const THOUSAND_COMMA_REGEX = /(\d)(?=(\d{3})+\b)/g;

export const range = (a, b) => {
    let result = [];
    for (let i = a; i < b; i++) {
        result.push(i);
    }
    return result;
}

export const findKeys = (m, ...keys) => {
    let result = {};
    m.forEach((v, k) => keys.includes(k) && (result[k] = v));
    return result;
}

export const omit = (obj, ...keys) => {
    let result = Object.assign({}, obj);
    keys.forEach(key => delete result[key]);
    return result;
}

export const urlHostname = (data) => {
    let a = document.createElement('a');
    a.href = data;
    return a.hostname;
}

export const yearRange = (from, to) => {
    let diff = to - from;
    let diffs = range(0, diff + 1);
    return diffs.map(d => moment(from, 'YYYY').add(d, 'year').format('YYYY'))
}

export const thousandNumberFormat = (n) => {
    if (typeof n === 'number')
        return n.toString().replace(THOUSAND_COMMA_REGEX, '$1,');

    if (typeof n === 'string' || n instanceof String)
        return n.replace(THOUSAND_COMMA_REGEX, '$1,');
}

export const invertObject = (obj) => {
    let result = {};
    Object.entries(obj).forEach(([k, v]) => {
        result[v] = k;
    });

    return result;
}

export const chunk = (arr, chunkSize, cache = []) => {
    const tmp = [...arr];
    while (tmp.length) cache.push(tmp.splice(0, chunkSize));
    return cache;
}

export const timerFormat = (timer) => {
    let sec = timer % 60;
    let min = Math.floor(timer / 60);
    return `${min}:${sec}`;
}

export const tenThousandFormat = (n) => {
    return Math.floor(n / 10000)
}

export const scrollToContent = (el) => {
    const oft = el.offsetTop - 200;
    window.scrollTo(0, oft);
};

export const recomposePhotos = (items) => {
    let photoGroup = [[], [], []];
    let groupHeight = [0, 0, 0];

    if (items) {
        for (let i = 0; i < items.length; i++) {
            const width = items[i].width;
            const height = items[i].height;
            const ratioHeight = height / width;

            // 가장 작은 <height>를 가지고 있는 그룹 <idx>에 <item>도 넣고
            // <item>의 <ratioHeight>도 <groupHeight>와 더해주어야 한다.
            const minHeightIndex = groupHeight.indexOf(Math.min(...groupHeight));
            photoGroup[minHeightIndex].push(items[i]);
            groupHeight[minHeightIndex] = groupHeight[minHeightIndex] + ratioHeight;
        }
    }

    return photoGroup;
}