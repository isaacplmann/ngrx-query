export function getLatest(o$) {
    var result;
    o$.take(1).subscribe(function (x) { return result = x; });
    return result;
}
//# sourceMappingURL=getLatest.js.map