import test from "ava";
import parseColor = require("../src/");

// HSV(h, s, v)
test("hsv(h, s, l)", (t) => {
    t.deepEqual(parseColor(`hsv(0, 0%, 0%)`), [0, 0, 0, 1]);
    t.deepEqual(parseColor(`hsl(0, 0%, 100%)`), [255, 255, 255, 1]);

    // Testing with the different ranges of the H value:
    t.deepEqual(parseColor(`hsv(0, 0%, 0%)`), [0, 0, 0, 1]); // 0 <= H < 60
    t.deepEqual(parseColor(`hsv(60,100%,100%)`), [255, 255, 0, 1]); // 60 <= H < 120
    t.deepEqual(parseColor(`hsv(120,100%,50%)`), [0, 128, 0, 1]); // 120 <= H < 180
    t.deepEqual(parseColor(`hsv(180,100%,50%)`), [0, 128, 128, 1]); // 180 <= H < 240
    t.deepEqual(parseColor(`hsv(240,100%,50%)`), [0, 0, 128, 1]); // 240 <= H < 300
    t.deepEqual(parseColor(`hsv(300,100%,50%)`), [128, 0, 128, 1]); // 300 <= H < 360
});

test("hsv(h, s, v) with degree symbol in H.", (t) => {
    t.deepEqual(parseColor(`hsv(240°, 100%, 50%)`), [0, 0, 128, 1]);
    t.deepEqual(parseColor(`hsv(300°, 100%, 50%)`), [128, 0, 128, 1]);
});

test("hsv(h, s, l) with extra argument is null", (t) => {
    t.is(parseColor(`hsv(0, 0%, 0%, 43)`), null);
    t.is(parseColor(`hsv(0, 0%, 100%, 10%)`), null);
});

test("hsv(h, s, l) with missing argument is null", (t) => {
    t.is(parseColor(`hsv(0, 0%)`), null);
    t.is(parseColor(`hsv(0)`), null);
});

test("hsv(h, s, l) with bad arguments is null", (t) => {
    t.is(parseColor(`hsv(0, 10, 0%)`), null);
    t.is(parseColor(`hsv(0, bad, 100%)`), null);
});

// HSLA(h, s, v, a)
test("hsva(h, s, l, a)", (t) => {
    t.deepEqual(parseColor(`hsva(0, 0%, 0%, 0.8)`), [0, 0, 0, 0.8]);
    t.deepEqual(parseColor(`hsva(0, 0%, 100%, 0.5)`), [255, 255, 255, 0.5]);
});

test("hsva(h, s, l, a) with extra argument is null", (t) => {
    t.is(parseColor(`hsva(0, 0%, 0%, 43, 0.5)`), null);
    t.is(parseColor(`hsva(0, 0%, 100%, 0.1, 10%)`), null);
});

test("hsva(h, s, l, a) with missing argument is null", (t) => {
    t.is(parseColor(`hsva(0, 0%, 0.5)`), null);
    t.is(parseColor(`hsva(0)`), null);
});

test("hsva(h, s, l, a) with bad arguments is null", (t) => {
    t.is(parseColor(`hsva(0, 10, 0%, 0.5)`), null);
    t.is(parseColor(`hsva(0, bad, 100%, 10)`), null);
});