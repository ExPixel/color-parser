import test from "ava";
import parseColor = require("../src/");

// HSL(h, s, l)
test("hsl(h, s, l)", (t) => {
    t.deepEqual(parseColor(`hsl(0, 0%, 0%)`), [0, 0, 0, 1]);
    t.deepEqual(parseColor(`hsl(0, 0%, 100%)`), [255, 255, 255, 1]);

    // Testing with the different ranges of the H value:
    t.deepEqual(parseColor(`hsl(0, 0%, 0%)`), [0, 0, 0, 1]); // 0 <= H < 60
    t.deepEqual(parseColor(`hsl(60,100%,50%)`), [255, 255, 0, 1]); // 60 <= H < 120
    t.deepEqual(parseColor(`hsl(120,100%,25%)`), [0, 128, 0, 1]); // 120 <= H < 180
    t.deepEqual(parseColor(`hsl(180,100%,25%)`), [0, 128, 128, 1]); // 180 <= H < 240
    t.deepEqual(parseColor(`hsl(240,100%,25%)`), [0, 0, 128, 1]); // 240 <= H < 300
    t.deepEqual(parseColor(`hsl(300,100%,50%)`), [255, 0, 255, 1]); // 300 <= H < 360
});

test("hsl(h, s, l) with degree symbol in H.", (t) => {
    t.deepEqual(parseColor(`hsl(60°,100%,50%)`), [255, 255, 0, 1]);
    t.deepEqual(parseColor(`hsl(120°,100%,25%)`), [0, 128, 0, 1]);
});

test("hsl(h, s, l) with extra argument is null", (t) => {
    t.is(parseColor(`hsl(0, 0%, 0%, 43)`), null);
    t.is(parseColor(`hsl(0, 0%, 100%, 10%)`), null);
});

test("hsl(h, s, l) with missing argument is null", (t) => {
    t.is(parseColor(`hsl(0, 0%)`), null);
    t.is(parseColor(`hsl(0)`), null);
});

test("hsl(h, s, l) with bad arguments is null", (t) => {
    t.is(parseColor(`hsl(0, 10, 0%)`), null);
    t.is(parseColor(`hsl(0, bad, 100%)`), null);
});

// HSLA(h, s, l, a)
test("hsla(h, s, l, a)", (t) => {
    t.deepEqual(parseColor(`hsla(0, 0%, 0%, 0.8)`), [0, 0, 0, 0.8]);
    t.deepEqual(parseColor(`hsla(0, 0%, 100%, 0.5)`), [255, 255, 255, 0.5]);
});

test("hsla(h, s, l, a) with extra argument is null", (t) => {
    t.is(parseColor(`hsla(0, 0%, 0%, 43, 0.5)`), null);
    t.is(parseColor(`hsla(0, 0%, 100%, 0.1, 10%)`), null);
});

test("hsla(h, s, l, a) with missing argument is null", (t) => {
    t.is(parseColor(`hsla(0, 0%, 0.5)`), null);
    t.is(parseColor(`hsla(0)`), null);
});

test("hsla(h, s, l, a) with bad arguments is null", (t) => {
    t.is(parseColor(`hsla(0, 10, 0%, 0.5)`), null);
    t.is(parseColor(`hsla(0, bad, 100%, 10)`), null);
});