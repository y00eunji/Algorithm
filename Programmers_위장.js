function solution(clothes) {
    let answer = 1;
    let map = new Map();

    for (const cloth of clothes) {
        const type = cloth[1];
        if (map.has(type)) {
            map.set(type, map.get(type) + 1);
        } else {
            map.set(type, 1);
        }
    }

    for (const value of map.values()) {
        answer *= (value + 1);
    }

    return answer - 1;
}