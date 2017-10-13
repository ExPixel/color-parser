import test from "ava";
import parseColor = require("../src/");

// CMYK(c, m, y, k)

test("cmyk(c, m, y, k)", (t) => {
    t.deepEqual(parseColor("cmyk(0,0,0,1)"), [0, 0, 0, 1.0]);
    t.deepEqual(parseColor("cmyk(0,0,0,0)"), [255, 255, 255, 1.0]);

    t.deepEqual(parseColor("cmyk(0,0,1,0)"), [255, 255, 0, 1.0]);
    t.deepEqual(parseColor("cmyk(1,0,0,0)"), [0, 255, 255, 1.0]);

    t.deepEqual(parseColor("cmyk(0, 0.5, 0.7, 0)"), [255, 128, 77, 1.0]);
});

test("cmyk(c, m, y, k) with extra argument is null", (t) => {
    t.is(parseColor("cmyk(0,0,0,1,0.5)"), null);
    t.is(parseColor("cmyk(0,0,0,0.5,4)"), null);
});

test("cmyk(c, m, y, k) with missing argument is null", (t) => {
    t.is(parseColor("cmyk(0,0,1)"), null);
    t.is(parseColor("cmyk(1)"), null);
});

test("cmyk(c, m, y, k) with bad arguments is null", (t) => {
    t.is(parseColor("cmyk(0,0,0,10)"), null);
    t.is(parseColor("cmyk(0,0,x,1.0)"), null);
});

// CMYKA(c, m, y, k, a)
test("cmyka(c, m, y, k, a)", (t) => {
    t.deepEqual(parseColor("cmyka(0,0,0,1, 0.5)"), [0, 0, 0, 0.5]);
    t.deepEqual(parseColor("cmyka(0,0,0,0, 0.1)"), [255, 255, 255, 0.1]);
});

test("cmyka(c, m, y, k, a) with extra argument is null", (t) => {
    t.is(parseColor("cmyka(0,0,0,1,4, 0.5)"), null);
    t.is(parseColor("cmyka(0,0,0,0.5,4,6)"), null);
});

test("cmyka(c, m, y, k, a) with missing argument is null", (t) => {
    t.is(parseColor("cmyka(0,0,1,0)"), null);
    t.is(parseColor("cmyka(1)"), null);
});

test("cmyka(c, m, y, k, a) with bad arguments is null", (t) => {
    t.is(parseColor("cmyka(0,0,0,10,0.5)"), null);
    t.is(parseColor("cmyka(0,0,x,1.0,0.5)"), null);
});