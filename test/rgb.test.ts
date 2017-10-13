import test from "ava";
import parseColor = require("../src/");

// RGB(r, g, b)
test("rgb(r, g, b)", (t) => {
    t.deepEqual(parseColor(`rgb(0, 0, 0)`), [0, 0, 0, 1]);
    t.deepEqual(parseColor(`rgb(255, 255, 255)`), [255, 255, 255, 1]);
});

test("rgb(r, g, b) with extra argument is null", (t) => {
    t.is(parseColor(`rgb(0, 0, 0, 67)`), null);
    t.is(parseColor(`rgb(255, 255, 255, 8)`), null);
});

test("rgb(r, g, b) with missing argument is null", (t) => {
    t.is(parseColor(`rgb(0, 0)`), null);
    t.is(parseColor(`rgb(255)`), null);
});

test("rgb(r, g, b) with bad arguments is null", (t) => {
    t.is(parseColor(`rgb(0, bad, 0)`), null);
    t.is(parseColor(`rgb(255, 255, argument)`), null);
});



// RGBA(r, g, b, a)
test("rgba(r, g, b, a)", (t) => {
    t.deepEqual(parseColor(`rgba(0, 0, 0, 0.5)`), [0, 0, 0, 0.5]);
    t.deepEqual(parseColor(`rgba(255, 255, 255, 0.2)`), [255, 255, 255, 0.2]);
});

test("rgba(r, g, b, a) with extra argument is null", (t) => {
    t.is(parseColor(`rgba(0, 0, 0, 0.5, 67)`), null);
    t.is(parseColor(`rgba(255, 255, 255, 8, 0.5)`), null);
});

test("rgba(r, g, b, a) with missing argument is null", (t) => {
    t.is(parseColor(`rgba(0, 0.5)`), null);
    t.is(parseColor(`rgba(255)`), null);
});

test("rgba(r, g, b, a) with bad arguments is null", (t) => {
    t.is(parseColor(`rgba(0, bad, 0, 0.5)`), null);
    t.is(parseColor(`rgba(255, 255, argument, 0.2)`), null);
});