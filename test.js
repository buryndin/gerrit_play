// some useful comment!
const max = 7;
let res = [];
for (let len = 2; len <= 19; len++) {
    let t = Array(len).fill(1);
    for (let i = 1; i <= max; i++) {
        t[len - 1]++;
        if (t[len - 1] === max) {
            for (let p = len - 1; p >= 0; p--) {
                if (t[p] === max) {
                    if (p > 0) t[p - 1]++;
                    t[p] = 1;
                }
            }
            if (t[0] !== 6 && t[len - 10] !== 6) i = 0;
        }
        //console.log(t)
        let s = 0, p = 0, c = 0;
        for (let k = 0; k < len; k++) {
            s = s + t[k];
            p = p + t[k]*t[k];
            c = c + t[k]*t[k]*t[k]
        }
        if (s === 18 && p == 36) {
            let t1 = t.slice().sort();
            if (res.length === 0) {
                res.push(t1.slice());
                console.log(t1.join(' '), '=>', c)
                debugger;
            }
            let add = true;
            for (let a = 0; a < res.length; a++) {
                let x = res[a];
                let fl = true;
                for (let b = 0; b < x.length; b++) {
                    if (x[b] !== t1[b]) {
                        fl = false;
                        break;
                    }
                }
                if (fl) {
                    add = false;
                    break;
                }
            }
            if (add) {
                res.push(t1.slice());
                console.log(t1.join(' '), '=>', c)
            }
        }
    }
    console.log(len, t.join(' '))
}


