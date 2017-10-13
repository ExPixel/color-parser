type RGBA = [number, number, number, number];

const NamedColors: {[name: string]: RGBA} = {
    "aliceblue": [240, 248, 255, 1.0],
    "antiquewhite": [250, 235, 215, 1.0],
    "aqua": [0, 255, 255, 1.0],
    "aquamarine": [127, 255, 212, 1.0],
    "azure": [240, 255, 255, 1.0],
    "beige": [245, 245, 220, 1.0],
    "bisque": [255, 228, 196, 1.0],
    "black": [0, 0, 0, 1.0],
    "blanchedalmond": [255, 235, 205, 1.0],
    "blue": [0, 0, 255, 1.0],
    "blueviolet": [138, 43, 226, 1.0],
    "brown": [165, 42, 42, 1.0],
    "burlywood": [222, 184, 135, 1.0],
    "cadetblue": [95, 158, 160, 1.0],
    "chartreuse": [127, 255, 0, 1.0],
    "chocolate": [210, 105, 30, 1.0],
    "coral": [255, 127, 80, 1.0],
    "cornflowerblue": [100, 149, 237, 1.0],
    "cornsilk": [255, 248, 220, 1.0],
    "crimson": [220, 20, 60, 1.0],
    "cyan": [0, 255, 255, 1.0],
    "darkblue": [0, 0, 139, 1.0],
    "darkcyan": [0, 139, 139, 1.0],
    "darkgoldenrod": [184, 134, 11, 1.0],
    "darkgray": [169, 169, 169, 1.0],
    "darkgrey": [169, 169, 169, 1.0],
    "darkgreen": [0, 100, 0, 1.0],
    "darkkhaki": [189, 183, 107, 1.0],
    "darkmagenta": [139, 0, 139, 1.0],
    "darkolivegreen": [85, 107, 47, 1.0],
    "darkorange": [255, 140, 0, 1.0],
    "darkorchid": [153, 50, 204, 1.0],
    "darkred": [139, 0, 0, 1.0],
    "darksalmon": [233, 150, 122, 1.0],
    "darkseagreen": [143, 188, 143, 1.0],
    "darkslateblue": [72, 61, 139, 1.0],
    "darkslategray": [47, 79, 79, 1.0],
    "darkslategrey": [47, 79, 79, 1.0],
    "darkturquoise": [0, 206, 209, 1.0],
    "darkviolet": [148, 0, 211, 1.0],
    "deeppink": [255, 20, 147, 1.0],
    "deepskyblue": [0, 191, 255, 1.0],
    "dimgray": [105, 105, 105, 1.0],
    "dimgrey": [105, 105, 105, 1.0],
    "dodgerblue": [30, 144, 255, 1.0],
    "firebrick": [178, 34, 34, 1.0],
    "floralwhite": [255, 250, 240, 1.0],
    "forestgreen": [34, 139, 34, 1.0],
    "fuchsia": [255, 0, 255, 1.0],
    "gainsboro": [220, 220, 220, 1.0],
    "ghostwhite": [248, 248, 255, 1.0],
    "gold": [255, 215, 0, 1.0],
    "goldenrod": [218, 165, 32, 1.0],
    "gray": [128, 128, 128, 1.0],
    "grey": [128, 128, 128, 1.0],
    "green": [0, 128, 0, 1.0],
    "greenyellow": [173, 255, 47, 1.0],
    "honeydew": [240, 255, 240, 1.0],
    "hotpink": [255, 105, 180, 1.0],
    "indianred": [205, 92, 92, 1.0],
    "indigo": [75, 0, 130, 1.0],
    "ivory": [255, 255, 240, 1.0],
    "khaki": [240, 230, 140, 1.0],
    "lavender": [230, 230, 250, 1.0],
    "lavenderblush": [255, 240, 245, 1.0],
    "lawngreen": [124, 252, 0, 1.0],
    "lemonchiffon": [255, 250, 205, 1.0],
    "lightblue": [173, 216, 230, 1.0],
    "lightcoral": [240, 128, 128, 1.0],
    "lightcyan": [224, 255, 255, 1.0],
    "lightgoldenrodyellow": [250, 250, 210, 1.0],
    "lightgray": [211, 211, 211, 1.0],
    "lightgrey": [211, 211, 211, 1.0],
    "lightgreen": [144, 238, 144, 1.0],
    "lightpink": [255, 182, 193, 1.0],
    "lightsalmon": [255, 160, 122, 1.0],
    "lightseagreen": [32, 178, 170, 1.0],
    "lightskyblue": [135, 206, 250, 1.0],
    "lightslategray": [119, 136, 153, 1.0],
    "lightslategrey": [119, 136, 153, 1.0],
    "lightsteelblue": [176, 196, 222, 1.0],
    "lightyellow": [255, 255, 224, 1.0],
    "lime": [0, 255, 0, 1.0],
    "limegreen": [50, 205, 50, 1.0],
    "linen": [250, 240, 230, 1.0],
    "magenta": [255, 0, 255, 1.0],
    "maroon": [128, 0, 0, 1.0],
    "mediumaquamarine": [102, 205, 170, 1.0],
    "mediumblue": [0, 0, 205, 1.0],
    "mediumorchid": [186, 85, 211, 1.0],
    "mediumpurple": [147, 112, 219, 1.0],
    "mediumseagreen": [60, 179, 113, 1.0],
    "mediumslateblue": [123, 104, 238, 1.0],
    "mediumspringgreen": [0, 250, 154, 1.0],
    "mediumturquoise": [72, 209, 204, 1.0],
    "mediumvioletred": [199, 21, 133, 1.0],
    "midnightblue": [25, 25, 112, 1.0],
    "mintcream": [245, 255, 250, 1.0],
    "mistyrose": [255, 228, 225, 1.0],
    "moccasin": [255, 228, 181, 1.0],
    "navajowhite": [255, 222, 173, 1.0],
    "navy": [0, 0, 128, 1.0],
    "oldlace": [253, 245, 230, 1.0],
    "olive": [128, 128, 0, 1.0],
    "olivedrab": [107, 142, 35, 1.0],
    "orange": [255, 165, 0, 1.0],
    "orangered": [255, 69, 0, 1.0],
    "orchid": [218, 112, 214, 1.0],
    "palegoldenrod": [238, 232, 170, 1.0],
    "palegreen": [152, 251, 152, 1.0],
    "paleturquoise": [175, 238, 238, 1.0],
    "palevioletred": [219, 112, 147, 1.0],
    "papayawhip": [255, 239, 213, 1.0],
    "peachpuff": [255, 218, 185, 1.0],
    "peru": [205, 133, 63, 1.0],
    "pink": [255, 192, 203, 1.0],
    "plum": [221, 160, 221, 1.0],
    "powderblue": [176, 224, 230, 1.0],
    "purple": [128, 0, 128, 1.0],
    "rebeccapurple": [102, 51, 153, 1.0],
    "red": [255, 0, 0, 1.0],
    "rosybrown": [188, 143, 143, 1.0],
    "royalblue": [65, 105, 225, 1.0],
    "saddlebrown": [139, 69, 19, 1.0],
    "salmon": [250, 128, 114, 1.0],
    "sandybrown": [244, 164, 96, 1.0],
    "seagreen": [46, 139, 87, 1.0],
    "seashell": [255, 245, 238, 1.0],
    "sienna": [160, 82, 45, 1.0],
    "silver": [192, 192, 192, 1.0],
    "skyblue": [135, 206, 235, 1.0],
    "slateblue": [106, 90, 205, 1.0],
    "slategray": [112, 128, 144, 1.0],
    "slategrey": [112, 128, 144, 1.0],
    "snow": [255, 250, 250, 1.0],
    "springgreen": [0, 255, 127, 1.0],
    "steelblue": [70, 130, 180, 1.0],
    "tan": [210, 180, 140, 1.0],
    "teal": [0, 128, 128, 1.0],
    "thistle": [216, 191, 216, 1.0],
    "tomato": [255, 99, 71, 1.0],
    "turquoise": [64, 224, 208, 1.0],
    "violet": [238, 130, 238, 1.0],
    "wheat": [245, 222, 179, 1.0],
    "white": [255, 255, 255, 1.0],
    "whitesmoke": [245, 245, 245, 1.0],
    "yellow": [255, 255, 0, 1.0],
    "yellowgreen": [154, 205, 50, 1.0],
};

function isValidByte(n: number): boolean {
    return Number.isInteger(n) && n >= 0 && n <= 255;
}

function isValidPercent(n: number): boolean {
    return Number.isInteger(n) && n >= 0 && n <= 100;
}

function isValidHue(n: number): boolean {
    return Number.isInteger(n) && n >= 0 && n <= 360;
}

function isValid0To1(n: number): boolean {
    return Number.isFinite(n) && n >= 0 && n <= 1.0;
}

function isValidHexString(s: string): boolean {
    const matched = s.match(/[0-9a-fA-F]+/);
    return !!matched && matched[0].length === s.length;
}
/**
 * "100°" -> 100
 * "100" -> 100
 * @param percent String with a number and a degree symbol (symbol is not required though).
 */
function parseMaybeDegree(percent: string) {
    const trimmed = percent.trim();
    if (trimmed.endsWith("°")) {
        return parseInt(trimmed.substr(0, trimmed.length - 1));
    }
    return parseInt(trimmed);
}

/**
 * "100%" -> 100
 * @param percent String with a number and a percentage.
 */
function parsePercent(percent: string) {
    const trimmed = percent.trim();
    if (trimmed.endsWith("%")) {
        return parseFloat(trimmed.substr(0, trimmed.length - 1));
    }
    return NaN;
}

/**
 * Converter for hex strings of size 8, 6, and 3 digits.
 * @param hexString Hex string to convert.
 */
function hex(hexString: string): RGBA | null {
    if (hexString.length === 8) {
        // aarrggbb
        const col = parseInt(hexString, 16);
        return [
            (col >> 16) & 0xFF, // r
            (col >>  8) & 0xFF, // g
            (col      ) & 0xFF, // b
            ((col >> 24) & 0xFF) / 255  // a
        ];
    } else if (hexString.length === 6) {
        // rrggbb
        const col = parseInt(hexString, 16);
        return [
            (col >> 16) & 0xFF, // r
            (col >>  8) & 0xFF, // g
            (col      ) & 0xFF, // b
            1.0                 // a
        ];
    } else if (hexString.length === 3) {
        // rgb
        const col = parseInt(hexString, 16);
        const r = (col >> 8) & 0xF
            , g = (col >> 4) & 0xF
            , b = (col     ) & 0xF;
        return [
            r | (r << 4), // r
            g | (g << 4), // g
            b | (b << 4), // b
            1.0           // a
        ];
    } else {
        return null;
    }
}

/**
 * Converter for the rgb() css function.
 * @param args Arguments of the RGB function.
 */
function rgb(args: string): RGBA | null {
    const argsArr = args.split(",");
    if (argsArr.length === 3) {
        const r = parseInt(argsArr[0]);
        const g = parseInt(argsArr[1]);
        const b = parseInt(argsArr[2]);
        if (isValidByte(r) && isValidByte(g) && isValidByte(b)) {
            return [
                Math.min(Math.max(r, 0), 255), 
                Math.min(Math.max(g, 0), 255), 
                Math.min(Math.max(b, 0), 255), 
                1.0
            ];
        }
    }
    return null;
}

/**
 * Converter for the rgba() css function.
 * @param args Arguments of the RGBA function.
 */
function rgba(args: string): RGBA | null {
    const argsArr = args.split(",");
    if (argsArr.length === 4) {
        const r = parseInt(argsArr[0]);
        const g = parseInt(argsArr[1]);
        const b = parseInt(argsArr[2]);
        const a = parseFloat(argsArr[3]);
        if (isValidByte(r) && isValidByte(g) && isValidByte(b) && isValid0To1(a)) {
            return [
                Math.min(Math.max(r, 0), 255), 
                Math.min(Math.max(g, 0), 255), 
                Math.min(Math.max(b, 0), 255), 
                Math.min(Math.max(a, 0), 1.0)
            ];
        }
    }
    return null;
}

/**
 * Converts HSL to RGB with a precomputed alpha component.
 * @param h Hue
 * @param s Saturation
 * @param l Lightness
 * @param a A value that is just placed at the end of the array.
 */
function _hsl(h: number, s: number, l: number, a: number): RGBA {
    h = Math.min(Math.max(h, 0), 360 - Number.MIN_VALUE);
    s = Math.min(Math.max(s, 0), 100) / 100;
    l = Math.min(Math.max(l, 0), 100) / 100;
    const c = (1 - Math.abs(2 * l - 1)) * s;
    const x = c * (1 - Math.abs(((h / 60) % 2) - 1));
    const m = l - (c / 2);
    let _r, _g, _b;

    if (h < 60)       {_r = c; _g = x; _b = 0;}
    else if (h < 120) {_r = x; _g = c; _b = 0;}
    else if (h < 180) {_r = 0; _g = c; _b = x;}
    else if (h < 240) {_r = 0; _g = x; _b = c;}
    else if (h < 300) {_r = x; _g = 0; _b = c;}
    else              {_r = c; _g = 0; _b = x;}

    return [
        Math.round((_r + m) * 255),
        Math.round((_g + m) * 255),
        Math.round((_b + m) * 255),
        a
    ];
}

/**
 * Converter for the hsl() css function.
 * @param args Arguments of the HSL function.
 */
function hsl(args: string): RGBA | null {
    const argsArr = args.split(",");
    if (argsArr.length === 3) {
        let h = parseMaybeDegree(argsArr[0]);
        let s = parsePercent(argsArr[1]);
        let l = parsePercent(argsArr[2]);
        if (isValidHue(h) && isValidPercent(s) && isValidPercent(l)) {
            return _hsl(h, s, l, 1.0);
        }
    }
    return null;
}

/**
 * Converter for the hsla() css function.
 * @param args Arguments of the HSLA function.
 */
function hsla(args: string): RGBA | null {
    const argsArr = args.split(",");
    if (argsArr.length === 4) {
        let h = parseMaybeDegree(argsArr[0]);
        let s = parsePercent(argsArr[1]);
        let l = parsePercent(argsArr[2]);
        const a = parseFloat(argsArr[3]);
        if (isValidHue(h) && isValidPercent(s) && isValidPercent(l) && isValid0To1(a)) {
            return _hsl(h, s, l, Math.min(Math.max(a, 0), 1.0));
        }
    }
    return null;
}


/**
 * Converts HSV to RGB with a precomputed alpha component.
 * @param h Hue
 * @param s Saturation
 * @param v value
 * @param a A value that is just placed at the end of the array.
 */
function _hsv(h: number, s: number, v: number, a: number) : RGBA {
    h = Math.min(Math.max(h, 0), 360 - Number.MIN_VALUE);
    s = Math.min(Math.max(s, 0), 100) / 100;
    v = Math.min(Math.max(v, 0), 100) / 100;

    const c = v * s;
    const x = c * (1 - Math.abs(((h / 60) % 2) - 1));
    const m = v - c;
    let _r, _g, _b;

    if (h < 60)       {_r = c; _g = x; _b = 0;}
    else if (h < 120) {_r = x; _g = c; _b = 0;}
    else if (h < 180) {_r = 0; _g = c; _b = x;}
    else if (h < 240) {_r = 0; _g = x; _b = c;}
    else if (h < 300) {_r = x; _g = 0; _b = c;}
    else              {_r = c; _g = 0; _b = x;}

    return [
        Math.round((_r + m) * 255),
        Math.round((_g + m) * 255),
        Math.round((_b + m) * 255),
        a
    ];
}

/**
 * Converter for the hsv() function.
 * @param args Arguments of the HSV function.
 */
function hsv(args: string): RGBA | null {
    const argsArr = args.split(",");
    if (argsArr.length === 3) {
        let h = parseMaybeDegree(argsArr[0]);
        let s = parsePercent(argsArr[1]);
        let v = parsePercent(argsArr[2]);
        if (isValidHue(h) && isValidPercent(s) && isValidPercent(v)) {
            return _hsv(h, s, v, 1.0);
        }
    }
    return null;
}

/**
 * Converter for the hsva() function.
 * @param args Arguments of the HSVA function.
 */
function hsva(args: string): RGBA | null {
    const argsArr = args.split(",");
    if (argsArr.length === 4) {
        const h = parseMaybeDegree(argsArr[0]);
        const s = parsePercent(argsArr[1]);
        const v = parsePercent(argsArr[2]);
        const a = parseFloat(argsArr[3]);
        if (isValidHue(h) && isValidPercent(s) && isValidPercent(v) && isValid0To1(a)) {
            return _hsv(h, s, v, a);
        }
    }
    return null;
}

/**
 * Converts CMYK to RGB with a precomputed A component.
 * @param c Cyan Color
 * @param m Magenta Color
 * @param y Yellow Color
 * @param k Black Key Color
 * @param a Alpha component.
 */
function _cmyk(c: number, m: number, y: number, k: number, a: number): RGBA {
    const r = 255 * (1 - c) * (1 - k);
    const g = 255 * (1 - m) * (1 - k);
    const b = 255 * (1 - y) * (1 - k);
    return [
        Math.round(r),
        Math.round(g),
        Math.round(b),
        a
    ];
}

/**
 * Converter for the cmyk() function.
 * @param args Arguments of the CMYK function.
 */
function cmyk(args: string): RGBA | null {
    const argsArr = args.split(",");
    if (argsArr.length === 4) {
        const c = parseFloat(argsArr[0]);
        const m = parseFloat(argsArr[1]);
        const y = parseFloat(argsArr[2]);
        const k = parseFloat(argsArr[3]);
        if (isValid0To1(c) && isValid0To1(m) && isValid0To1(y) && isValid0To1(k)) {
            return _cmyk(c, m, y, k, 1.0);
        }
    }
    return null;
}

/**
 * Converter for the cmyka() function.
 * @param args Arguments of the CMYKA function.
 */
function cmyka(args: string): RGBA | null {
    const argsArr = args.split(",");
    if (argsArr.length === 5) {
        const c = parseFloat(argsArr[0]);
        const m = parseFloat(argsArr[1]);
        const y = parseFloat(argsArr[2]);
        const k = parseFloat(argsArr[3]);
        const a = parseFloat(argsArr[4]);
        if (isValid0To1(c) && isValid0To1(m) && isValid0To1(y) && isValid0To1(k) && isValid0To1(a)) {
            return _cmyk(c, m, y, k, a);
        }
    }
    return null;
}

const CSSFunctions: { [f: string]: ((args: string) => RGBA | null) } = {
    "rgb": rgb,
    "rgba": rgba,
    "hsl": hsl,
    "hsla": hsla,
    "hsv": hsv,
    "hsva": hsva,
    "cmyk": cmyk,
    "cmyka": cmyka
};

/**
 * Parses an input color in the following formats and returns in array ([R, G, B, A]):
 * - "#rrggbb"
 * - "#aarrggbb"
 * - "#rgb"
 * - "rgb(R, G, B)"
 * - "rgba(R, G, B, A)"
 * - "hsl(H, S, L)"
 * - "hsla(H, S, L, A)"
 * 
 * Keep in mind that except in the case of "#aarrggbb" the A component is a float in the range [0, 1], not a byte like R, G, and B.
 * @param colorString The input color string to parse. Should be in the same format as colors used in CSS.
 */
function parseColor(colorString: string | number): [number, number, number, number] | null {
    if (typeof colorString === "string") {
        colorString = colorString.toLowerCase();
        const hexMatch = colorString.match(/^\#(\w{3,8})$/);

        if (hexMatch) {
            const hexString = hexMatch[1];
            if (isValidHexString(hexString)) {
                return hex(hexString);
            } else {
                return null;
            }
        }

        const cssFunctionMatch = colorString.match(/^(rgb|rgba|hsl|hsla|hsv|hsva|cmyk|cmyka)\(([\w\.\,\s\%\°]+)\)$/);
        if (cssFunctionMatch) {
            const cssFunctionName = cssFunctionMatch[1];
            const cssFunctionArgs = cssFunctionMatch[2];
            const cssFunction = CSSFunctions[cssFunctionName];
            // Should never be able to reach a bad CSS function so we don't even check.
            return cssFunction(cssFunctionArgs);
        }

        return NamedColors[colorString] || null;
    } else if (typeof colorString === "number") {
        return [
            (colorString >> 16) & 0xFF, // r
            (colorString >>  8) & 0xFF, // g
            (colorString      ) & 0xFF, // b
            ((colorString >> 24) & 0xFF) / 255  // a
        ];
    } else {
        return null;
    }
}

export = parseColor;