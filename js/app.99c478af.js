(function (t) {
    function e(e) {
        for (var i, l, o = e[0], c = e[1], r = e[2], m = 0, d = []; m < o.length; m++) l = o[m], Object.prototype.hasOwnProperty.call(n, l) && n[l] && d.push(n[l][0]), n[l] = 0;
        for (i in c) Object.prototype.hasOwnProperty.call(c, i) && (t[i] = c[i]);
        u && u(e);
        while (d.length) d.shift()();
        return s.push.apply(s, r || []), a()
    }

    function a() {
        for (var t, e = 0; e < s.length; e++) {
            for (var a = s[e], i = !0, o = 1; o < a.length; o++) {
                var c = a[o];
                0 !== n[c] && (i = !1)
            }
            i && (s.splice(e--, 1), t = l(l.s = a[0]))
        }
        return t
    }
    var i = {},
        n = {
            app: 0
        },
        s = [];

    function l(e) {
        if (i[e]) return i[e].exports;
        var a = i[e] = {
            i: e,
            l: !1,
            exports: {}
        };
        return t[e].call(a.exports, a, a.exports, l), a.l = !0, a.exports
    }
    l.m = t, l.c = i, l.d = function (t, e, a) {
        l.o(t, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: a
        })
    }, l.r = function (t) {
        "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }, l.t = function (t, e) {
        if (1 & e && (t = l(t)), 8 & e) return t;
        if (4 & e && "object" === typeof t && t && t.__esModule) return t;
        var a = Object.create(null);
        if (l.r(a), Object.defineProperty(a, "default", {
                enumerable: !0,
                value: t
            }), 2 & e && "string" != typeof t)
            for (var i in t) l.d(a, i, function (e) {
                return t[e]
            }.bind(null, i));
        return a
    }, l.n = function (t) {
        var e = t && t.__esModule ? function () {
            return t["default"]
        } : function () {
            return t
        };
        return l.d(e, "a", e), e
    }, l.o = function (t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, l.p = "";
    var o = window["webpackJsonp"] = window["webpackJsonp"] || [],
        c = o.push.bind(o);
    o.push = e, o = o.slice();
    for (var r = 0; r < o.length; r++) e(o[r]);
    var u = c;
    s.push([0, "chunk-vendors"]), a()
})({
    0: function (t, e, a) {
        t.exports = a("56d7")
    },
    "000c": function (t, e, a) {
        t.exports = a.p + "img/PU30M_2.ef5a5187.png"
    },
    "0238": function (t, e, a) {
        t.exports = a.p + "img/PU30M_1.36d162f4.png"
    },
    "034f": function (t, e, a) {
        "use strict";
        var i = a("64a9"),
            n = a.n(i);
        n.a
    },
    "0703": function (t, e, a) {
        t.exports = a.p + "img/700_1.288831aa.png"
    },
    "0943": function (t, e, a) {
        t.exports = a.p + "img/Earth.4faca846.png"
    },
    "0a07": function (t, e, a) {
        t.exports = a.p + "img/30_photo.7d2ee45e.png"
    },
    "173d": function (t, e, a) {
        "use strict";
        var i = a("c084"),
            n = a.n(i);
        n.a
    },
    1883: function (t, e, a) {
        t.exports = a.p + "img/19_photo.6ece0046.png"
    },
    1892: function (t, e, a) {
        t.exports = a.p + "img/pu_30.bedfad09.png"
    },
    "1b54": function (t, e, a) {},
    2284: function (t, e, a) {
        t.exports = a.p + "img/Mount1.5acfc1f1.jpg"
    },
    "231c": function (t, e, a) {},
    2737: function (t, e, a) {
        t.exports = a.p + "img/4040_2.5fadde24.png"
    },
    "287b": function (t, e, a) {},
    "30da": function (t, e, a) {
        "use strict";
        var i = a("974e"),
            n = a.n(i);
        n.a
    },
    3189: function (t, e, a) {},
    "3ae0": function (t, e, a) {
        t.exports = a.p + "img/4040_1.78c73ef7.png"
    },
    "458f": function (t, e, a) {},
    "473a": function (t, e, a) {
        "use strict";
        var i = a("f554"),
            n = a.n(i);
        n.a
    },
    "54da": function (t, e, a) {},
    "564b": function (t, e, a) {},
    "56d0": function (t, e, a) {
        t.exports = a.p + "img/65_photo.7b6ac1e7.png"
    },
    "56d7": function (t, e, a) {
        "use strict";
        a.r(e);
        a("6762"), a("2fdb"), a("cadf"), a("551c"), a("f751"), a("097d");
        var i = a("2b0e"),
            n = function () {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("div", {
                    attrs: {
                        id: "app"
                    }
                }, [i("nav", {
                    staticClass: "container-fluid",
                    attrs: {
                        id: "navigator"
                    }
                }, [i("div", {
                    staticClass: "row"
                }, [i("transition", {
                    attrs: {
                        name: "fade"
                    }
                }, [t.mobile ? t._e() : i("div", {
                    staticClass: "WidthNavigation col-sm-3 col-md-3 col-lg-2",
                    attrs: {
                        id: "logotip_div"
                    }
                }, [i("img", {
                    attrs: {
                        id: "logotip",
                        src: a("d49b")
                    }
                })])]), i("div", {
                    staticClass: "WidthNavigation TitlesNavigation col-sm-9 col-md-9 col-lg-7"
                }, [i("div", {
                    staticClass: "menu"
                }, [i("router-link", {
                    staticClass: "navig",
                    attrs: {
                        to: "/",
                        exact: ""
                    }
                }, [i("span", [t._v(" " + t._s(t.page.home) + " ")])]), i("router-link", {
                    staticClass: "navig",
                    attrs: {
                        to: "/equipment"
                    }
                }, [i("span", [t._v(" " + t._s(t.page.product) + " ")])]), i("router-link", {
                    staticClass: "navig",
                    attrs: {
                        to: "/amenites"
                    }
                }, [i("span", [t._v(" " + t._s(t.page.file) + " ")])]), i("router-link", {
                    staticClass: "navig",
                    attrs: {
                        to: "/contact"
                    }
                }, [i("span", [t._v(" " + t._s(t.page.contact) + " ")])])], 1), i("div", {
                    attrs: {
                        id: "lang"
                    }
                }, [i("span", {
                    class: [{
                        active: "Russia" === t.select
                    }],
                    on: {
                        click: function (e) {
                            return t.SelectLang("Russia")
                        }
                    }
                }, [t._v("Ru")]), i("span", {
                    class: [{
                        active: "English" === t.select
                    }],
                    on: {
                        click: function (e) {
                            return t.SelectLang("English")
                        }
                    }
                }, [t._v("En")])])])], 1)]), i("transition", {
                    attrs: {
                        name: "fade"
                    }
                }, [i("router-view", {
                    ref: "page"
                })], 1)], 1)
            },
            s = [],
            l = {
                name: "app",
                data: function () {
                    return {
                        mobile: !1,
                        select: "Russia",
                        activeClass: "active",
                        page: [],
                        text: [{
                            Russia: {
                                home: "Главная",
                                product: "Оборудование",
                                file: "Услуги",
                                contact: "Контакты"
                            },
                            English: {
                                home: "Home",
                                product: "Equipment",
                                file: "Services",
                                contact: "Contact"
                            }
                        }]
                    }
                },
                created: function () {
                    this.Before()
                },
                methods: {
                    Up: function () {
                        this.$refs.page.move(1)
                    },
                    Before: function () {
                        this.mobile = this.$parent.mobile, this.select = this.$parent.lang, this.page = this.text[0][this.select]
                    },
                    SelectLang: function (t) {
                        this.$refs.page.SelectLang(t), this.select = t, this.page = this.text[0][this.select]
                    }
                }
            },
            o = l,
            c = (a("034f"), a("2877")),
            r = Object(c["a"])(o, n, s, !1, null, null, null),
            u = r.exports,
            m = a("8c4f"),
            d = function () {
                var t = this,
                    e = t.$createElement,
                    a = t._self._c || e;
                return a("div", {
                    attrs: {
                        id: "contact"
                    }
                }, [a("div", {
                    staticClass: "section"
                }, [a("div", {
                    attrs: {
                        id: "svg_contact"
                    }
                }, [a("div", {}, [t._m(0), a("InsertSVG")], 1)]), t._m(1)])])
            },
            v = [function () {
                var t = this,
                    e = t.$createElement,
                    a = t._self._c || e;
                return a("div", {
                    attrs: {
                        id: "map_contact"
                    }
                }, [a("div", {
                    attrs: {
                        id: "yandex_map"
                    }
                }, [a("iframe", {
                    attrs: {
                        width: "100%",
                        height: "100%",
                        src: "https://yandex.ru/map-widget/v1/?um=constructor%3A140c84673a3c947be2adf9e08ca48c6b17660cc8c5ef8e01d1546f7dd1c49382&source=constructor",
                        frameborder: "0"
                    }
                })])])
            }, function () {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("div", {
                    attrs: {
                        id: "footer_contact"
                    }
                }, [i("div", [i("span", [i("a", {
                    attrs: {
                        href: "tel:+74956415135"
                    }
                }, [t._v("+7(495) 641 51 35")]), t._v("  /  "), i("a", {
                    attrs: {
                        href: "mailto:info@ancprotek.ru"
                    }
                }, [t._v("INFO@ANCPROTEK.RU")]), i("img", {
                    attrs: {
                        src: a("9879")
                    }
                }), t._v("Россия, Москва, Шоссе Энтузиастов, 56с25")])])])
            }],
            _ = function () {
                var t = this,
                    e = t.$createElement,
                    a = t._self._c || e;
                return a("div", [a("svg", {
                    attrs: {
                        id: "contact",
                        xmlns: "http://www.w3.org/2000/svg",
                        "xmlns:xlink": "http://www.w3.org/1999/xlink",
                        version: "1.1",
                        viewBox: "-0.5 -0.5 551 294"
                    }
                }, [a("defs"), a("g", [a("path", {
                    attrs: {
                        d: "M 1 154.5 L 201 34.5",
                        fill: "none",
                        stroke: "#ffffff",
                        "stroke-width": "2",
                        "stroke-miterlimit": "10",
                        "pointer-events": "none"
                    }
                }), a("path", {
                    attrs: {
                        d: "M 1 154.5 L 281 154.5",
                        fill: "none",
                        stroke: "#ffffff",
                        "stroke-width": "2",
                        "stroke-miterlimit": "10",
                        "pointer-events": "none"
                    }
                }), a("path", {
                    attrs: {
                        d: "M 1 154.5 L 201 274.5",
                        fill: "none",
                        stroke: "#ffffff",
                        "stroke-width": "2",
                        "stroke-miterlimit": "10",
                        "pointer-events": "none"
                    }
                }), a("path", {
                    attrs: {
                        d: "M 281 274.5 L 201 274.5",
                        fill: "none",
                        stroke: "#ffffff",
                        "stroke-width": "2",
                        "stroke-miterlimit": "10",
                        "pointer-events": "none"
                    }
                }), a("path", {
                    attrs: {
                        d: "M 281 34.5 L 201 34.5",
                        fill: "none",
                        stroke: "#ffffff",
                        "stroke-width": "2",
                        "stroke-miterlimit": "10",
                        "pointer-events": "none"
                    }
                }), a("image", {
                    attrs: {
                        x: "270.5",
                        y: "0",
                        width: "40",
                        height: "40",
                        "xlink:href": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgMTAwMCAxMDAwIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAxMDAwIDEwMDAiIHhtbDpzcGFjZT0icHJlc2VydmUiPiYjeGE7PG1ldGFkYXRhPiBTdmcgVmVjdG9yIEljb25zIDogaHR0cDovL3d3dy5vbmxpbmV3ZWJmb250cy5jb20vaWNvbiA8L21ldGFkYXRhPiYjeGE7PGc+PHBhdGggc3R5bGU9ImZpbGw6IHdoaXRlOyIgZD0iTTQ5OS42LDEwYy0xOTkuOCwwLTM2Ni4xLDE4My0zMTQsMzg5LjZjNTksMjMzLjcsMzE1LjksNDk0LjYsMzE1LjksNDk0LjZTNzU0LDYzNC40LDgxNC4xLDQwMC44Qzg2Ny4yLDE5NC40LDY5OS40LDEwLDQ5OS42LDEweiBNNzcyLjEsMzg4LjljLTUxLjYsMjA1LjQtMjcwLjgsNDQxLjItMjcwLjgsNDQxLjJzLTIyMy0yMzguNC0yNzMuNi00NDMuOEMxODIuOSwyMDQuOCwzMjguMSw1Myw0OTkuNyw1M0M2NzEuMiw1Myw4MTcuNywyMDcuNiw3NzIuMSwzODguOXoiLz48cGF0aCBzdHlsZT0iZmlsbDogd2hpdGU7IiBkPSJNNDk5LjgsMTc0LjJjLTk5LjEsMC0xNzkuNCw4MC4zLTE3OS40LDE3OS40YzAsOTkuMSw4MC4zLDE3OS40LDE3OS40LDE3OS40czE3OS40LTgwLjMsMTc5LjQtMTc5LjRDNjc5LjIsMjU0LjUsNTk4LjksMTc0LjIsNDk5LjgsMTc0LjJ6IE00OTkuOCw0OTAuNWMtNzUuNiwwLTEzNi44LTYxLjMtMTM2LjgtMTM2LjhjMC03NS42LDYxLjMtMTM2LjgsMTM2LjgtMTM2LjhjNzUuNiwwLDEzNi44LDYxLjMsMTM2LjgsMTM2LjhDNjM2LjYsNDI5LjIsNTc1LjMsNDkwLjUsNDk5LjgsNDkwLjV6Ii8+PHBhdGggc3R5bGU9ImZpbGw6IHdoaXRlOyIgZD0iTTY0OS45LDc5Mi41Yzc1LjIsMTUuMSwxMjQuOSw0MSwxMjQuOSw3MC42YzAsNDYuNS0xMjMuMSw4NC4yLTI3NS4xLDg0LjJjLTE1MS45LDAtMjc1LTM3LjctMjc1LTg0LjJjMC0yOS4zLDQ4LjgtNTUuMSwxMjMtNzAuMmwtOS4zLTM5LjNjLTkzLjksMjIuMS0xNTcsNjIuOC0xNTcsMTA5LjVjMCw3MC4yLDE0Mi42LDEyNywzMTguNSwxMjdjMTc1LjksMCwzMTguNS01Ni44LDMxOC41LTEyN2MwLTQ2LjctNjMuMi04Ny41LTE1Ny4zLTEwOS41TDY0OS45LDc5Mi41eiIvPjwvZz4mI3hhOzwvc3ZnPg==",
                        preserveAspectRatio: "none",
                        "pointer-events": "none"
                    }
                }), a("image", {
                    attrs: {
                        x: "276.5",
                        y: "138",
                        width: "28",
                        height: "28",
                        "xlink:href": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgMTAwMCAxMDAwIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAxMDAwIDEwMDAiIHhtbDpzcGFjZT0icHJlc2VydmUiPiYjeGE7PG1ldGFkYXRhPiBTdmcgVmVjdG9yIEljb25zIDogaHR0cDovL3d3dy5vbmxpbmV3ZWJmb250cy5jb20vaWNvbiA8L21ldGFkYXRhPiYjeGE7PGc+PHBhdGggc3R5bGU9ImZpbGw6IHdoaXRlOyIgZD0iTTc4My4zLDk5MGgtMTEuNWMtNjUuMSwwLTE1OC45LTMwLjYtMjYwLjMtODIuM2MtOTcuNi00NS45LTE5My4zLTExNC44LTI0OC44LTE3MC40QzIwMy4zLDY3OCwxNDIuMSw1ODgsOTAuNCw0ODYuNkMzOC43LDM4NS4yLDEwLDI5MS40LDEwLDIyOC4ydi0xMS41bDUuNy05LjZjMS45LDAsMzAuNi00OS44LDcwLjgtOTMuOEMxMjYuOCw2My42LDE4MC40LDEwLDIyOC4yLDEwYzQ1LjksMCw5My44LDQyLjEsMTI0LjQsNjdjMTkuMSwxOS4xLDc0LjYsNzAuOCw5NS43LDEyOC4yYzI0LjksNjEuMiwzLjgsOTUuNy0xMS41LDExMWMtMjQuOSwyNC45LTUzLjYsNDQtNzIuNyw1My42Yy0zMi41LDIxLjEtMzYuNCwyNC45LTM2LjQsMzguM2MwLDQ0LDU1LjUsMTAxLjQsMTA5LjEsMTU1YzUzLjYsNTMuNiwxMTEsMTA5LjEsMTUzLjEsMTA5LjFjMTUuMywwLDE3LjItMy44LDM4LjMtMzYuNGMxNy4yLTIxLjEsMzAuNi00Ny45LDU1LjUtNzIuN2MxNS4zLTE1LjMsMzYuNC0yNC45LDU5LjMtMjQuOWMyMywwLDUxLjcsMTMuNCw4NC4yLDI4LjdjMjQuOSwxNS4zLDQ3LjksMzguMyw3NC43LDU5LjNjMjEsMjEuMSw4OCw5MS45LDg4LDE0My42YzAsNTEuNy01Ny40LDEwMy4zLTEwMy40LDE0My41Yy00Ny45LDM2LjQtOTEuOSw2OC45LTkzLjgsNjguOUw3ODMuMyw5OTB6IE04Ni42LDIzOS43YzUuNyw1My42LDMyLjUsMTI4LjIsNzIuNywyMTQuNGM0Ny45LDkwLDEwNS4zLDE3Mi4zLDE1NywyMjkuN2M1MS43LDUxLjcsMTM5LjcsMTExLDIyOS43LDE1Ni45Yzg0LjIsNDAuMiwxNjQuNiw3MC44LDIxNC40LDcwLjhjMTMuNC05LjYsNDUuOS0yOC43LDcyLjctNTUuNWM3MC44LTU1LjUsODAuNC04Mi4zLDgwLjQtODYuMWMwLTkuNi0yMy00OS44LTY3LTkwYy00NC00NC05MC02NS4xLTEwMy40LTY1LjFjLTUuNy0xLjktMy44LDMuOC01LjcsMS45Yy0yMS4xLDIxLjEtMjguNyw0MC4yLTQ0LDU5LjNjLTIxLjEsMzIuNS00NCw3Mi43LTEwMy40LDcyLjdjLTc0LjYsMC0xNDcuNC02Ny0yMDYuNy0xMzIuMWMtNjctNjctMTMyLjEtMTMyLjEtMTMyLjEtMjA4LjZjMC01NS41LDM4LjMtODQuMiw3Mi43LTEwMy40YzE5LjEtOS42LDM4LjMtMjMsNTkuMy00NGMwLTEuOSwxLjktNS43LTMuOC0yMS4xYy05LjYtMjguNy0zOC4zLTY1LjEtNzQuNi0xMDEuNGMtMzYuNC0zNi40LTcwLjgtNTEuNy03NC42LTUxLjdjLTcuNywwLTI0LjksMTEuNS04OCw3OC41QzExOS4xLDE5My44LDk2LjEsMjI2LjMsODYuNiwyMzkuN0w4Ni42LDIzOS43eiBNNjIyLjUsMjU1Yy00NCwwLTc4LjUsMjEuMS0xMDMuNCw1NS41YzE1LjMtMTEuNSwzNC41LTkuNiw0OS44LTkuNmM3MC44LDAsMTMwLjIsNTUuNSwxMzAuMiwxMzAuMmMwLDE3LjItMy44LDMyLjUtOS42LDQ3LjljMzQuNS0xOS4xLDU1LjUtNjEuMiw1NS41LTEwMS40Qzc0NSwzMDguNiw2OTEuNCwyNTUsNjIyLjUsMjU1TDYyMi41LDI1NXogTTY1My4xLDEzMi41Yy02NywwLTEyMi41LDI2LjgtMTYyLjcsNzIuN2MzMi41LTE3LjIsNjctMjYuOCwxMDkuMS0yNi44YzEyMi41LDAsMjIyLDk3LjYsMjIyLDIyMmMwLDM2LjQtOS42LDc4LjUtMjguNywxMDcuMmM0NS45LTM2LjQsNzQuNi05OS41LDc0LjYtMTYwLjhDODY3LjUsMjI2LjMsNzY5LjksMTMyLjUsNjUzLjEsMTMyLjVMNjUzLjEsMTMyLjV6IE03MTQuNCwxMGMtODIuMywwLTE0OS4zLDM0LjQtMjAxLDg2LjFjNDIuMS0yNi44LDkxLjktNDAuMiwxNDcuNC00MC4yYzE1OC45LDAsMjgzLjMsMTI0LjQsMjgzLjMsMjgzLjNjMCw1NS41LTE1LjMsMTAxLjQtNDIuMSwxNDcuNGM1NS41LTUxLjcsODgtMTIyLjUsODgtMjAxQzk5MCwxMzAuNiw4NjUuNiwxMCw3MTQuNCwxMHoiLz48L2c+JiN4YTs8L3N2Zz4=",
                        preserveAspectRatio: "none",
                        "pointer-events": "none"
                    }
                }), a("image", {
                    attrs: {
                        x: "280.5",
                        y: "259",
                        width: "33",
                        height: "33",
                        "xlink:href": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgMTAwMCAxMDAwIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAxMDAwIDEwMDAiIHhtbDpzcGFjZT0icHJlc2VydmUiPiYjeGE7PG1ldGFkYXRhPiBTdmcgVmVjdG9yIEljb25zIDogaHR0cDovL3d3dy5vbmxpbmV3ZWJmb250cy5jb20vaWNvbiA8L21ldGFkYXRhPiYjeGE7PGc+PHBhdGggc3R5bGU9ImZpbGw6IHdoaXRlOyIgZD0iTTkwMy42LDE4MC40SDk2LjVjLTQ3LjcsMC04Ni41LDM1LjgtODYuNSw3OS45djQ3OS40YzAsNDQsMzguOCw3OS45LDg2LjUsNzkuOWg4MDcuMWM0Ny42LDAsODYuNC0zNS45LDg2LjQtNzkuOVYyNjAuM0M5OTAsMjE2LjMsOTUxLjIsMTgwLjQsOTAzLjYsMTgwLjRMOTAzLjYsMTgwLjR6IE03Ny45LDczMC4zVjI4MGwyNDQuMywyMjUuOEgzMjJMNzcuOSw3MzEuNEM3Ny45LDczMSw3Ny45LDczMC42LDc3LjksNzMwLjNMNzcuOSw3MzAuM3ogTTE0Mi4xLDI1MC4zaDcxNS44TDUwMC4xLDU4MUwxNDIuMSwyNTAuM0wxNDIuMSwyNTAuM3ogTTM3My4zLDU0My4ybDEyNi43LDExNy4xbDEyNy4zLTExNy42bDIyMy42LDIwNi42SDE1MC40TDM3My4zLDU0My4yTDM3My4zLDU0My4yeiBNNjc5LjMsNTA1LjdoLTEuNWwyMzkuMS0yMjAuOXY0NDAuM0w2NzkuMyw1MDUuN0w2NzkuMyw1MDUuN3oiLz48L2c+JiN4YTs8L3N2Zz4=",
                        preserveAspectRatio: "none",
                        "pointer-events": "none"
                    }
                }), a("g", {
                    attrs: {
                        transform: "translate(306.5,27.5)"
                    }
                }, [a("switch", [a("foreignObject", {
                    staticStyle: {
                        overflow: "visible"
                    },
                    attrs: {
                        "pointer-events": "all",
                        width: "231",
                        height: "12",
                        requiredFeatures: "http://www.w3.org/TR/SVG11/feature#Extensibility"
                    }
                }, [a("div", {
                    staticStyle: {
                        display: "inline-block",
                        "font-size": "12px",
                        "font-family": "Helvetica",
                        color: "rgb(0, 0, 0)",
                        "line-height": "1.2",
                        "vertical-align": "top",
                        "white-space": "nowrap",
                        "text-align": "left"
                    },
                    attrs: {
                        xmlns: "http://www.w3.org/1999/xhtml"
                    }
                }, [a("div", {
                    staticStyle: {
                        display: "inline-block",
                        "text-align": "inherit",
                        "text-decoration": "inherit"
                    },
                    attrs: {
                        xmlns: "http://www.w3.org/1999/xhtml"
                    }
                }, [a("font", {
                    attrs: {
                        color: "#ffffff"
                    }
                }, [t._v("Ш. ЭНТУЗИАСТОВ, 56, СТР. 25, МОСКВА")])], 1)])])], 1)]), a("g", {
                    attrs: {
                        transform: "translate(315.5,145.5)"
                    }
                }, [a("switch", [a("foreignObject", {
                    staticStyle: {
                        overflow: "visible"
                    },
                    attrs: {
                        "pointer-events": "all",
                        width: "102",
                        height: "12",
                        requiredFeatures: "http://www.w3.org/TR/SVG11/feature#Extensibility"
                    }
                }, [a("div", {
                    staticStyle: {
                        display: "inline-block",
                        "font-size": "12px",
                        "font-family": "Helvetica",
                        color: "rgb(0, 0, 0)",
                        "line-height": "1.2",
                        "vertical-align": "top",
                        "white-space": "nowrap",
                        "text-align": "left"
                    },
                    attrs: {
                        xmlns: "http://www.w3.org/1999/xhtml"
                    }
                }, [a("div", {
                    staticStyle: {
                        display: "inline-block",
                        "text-align": "inherit",
                        "text-decoration": "inherit"
                    },
                    attrs: {
                        xmlns: "http://www.w3.org/1999/xhtml"
                    }
                }, [a("font", {
                    attrs: {
                        color: "#ffffff"
                    }
                }, [t._v("+7 (495) 641 51 35")])], 1)])])], 1)]), a("g", {
                    attrs: {
                        transform: "translate(322.5,268.5)"
                    }
                }, [a("switch", [a("foreignObject", {
                    staticStyle: {
                        overflow: "visible"
                    },
                    attrs: {
                        "pointer-events": "all",
                        width: "136",
                        height: "12",
                        requiredFeatures: "http://www.w3.org/TR/SVG11/feature#Extensibility"
                    }
                }, [a("div", {
                    staticStyle: {
                        display: "inline-block",
                        "font-size": "12px",
                        "font-family": "Helvetica",
                        color: "rgb(0, 0, 0)",
                        "line-height": "1.2",
                        "vertical-align": "top",
                        "white-space": "nowrap",
                        "text-align": "left"
                    },
                    attrs: {
                        xmlns: "http://www.w3.org/1999/xhtml"
                    }
                }, [a("div", {
                    staticStyle: {
                        display: "inline-block",
                        "text-align": "inherit",
                        "text-decoration": "inherit"
                    },
                    attrs: {
                        xmlns: "http://www.w3.org/1999/xhtml"
                    }
                }, [a("font", {
                    attrs: {
                        color: "#ffffff"
                    }
                }, [t._v("INFO@ANCPROTEK.RU")])], 1)])])], 1)])])])])
            },
            f = [],
            p = {
                name: "app",
                data: function () {
                    return {
                        msg: "Product"
                    }
                },
                methods: {
                    test: function (t) {
                        this.$emit("move", t)
                    }
                }
            },
            g = p,
            M = (a("dd5a"), Object(c["a"])(g, _, f, !1, null, null, null)),
            b = M.exports,
            h = {
                name: "app",
                components: {
                    InsertSVG: b
                },
                data: function () {
                    return {
                        msg: "Contact",
                        options: {}
                    }
                },
                methods: {
                    Before: function () {
                        this.mobile = this.$parent.mobile
                    },
                    move: function (t) {
                        this.$refs.fullpage.api.moveTo(t)
                    }
                }
            },
            L = h,
            w = (a("610c"), Object(c["a"])(L, d, v, !1, null, null, null)),
            x = w.exports,
            j = function () {
                var t = this,
                    e = t.$createElement,
                    a = t._self._c || e;
                return a("div", {
                    attrs: {
                        id: "main"
                    }
                }, [a("div", {
                    staticClass: "background_image"
                }, [a("div", {
                    staticClass: "item container-fluid",
                    attrs: {
                        id: "title"
                    }
                }, [a("div", {
                    staticClass: "row",
                    attrs: {
                        id: "block_title"
                    }
                }, [t._m(0), a("div", {
                    staticClass: "title  col-xl-8 col-lg-8 col-md-8 col-sm-8"
                }, [a("p", {
                    attrs: {
                        id: "title_text"
                    }
                }, [a("span", {
                    domProps: {
                        innerHTML: t._s(t.page.Title)
                    }
                })])])]), a("div", {
                    directives: [{
                        name: "scroll-to",
                        rawName: "v-scroll-to",
                        value: "#about",
                        expression: "'#about'"
                    }],
                    staticClass: "strelka strelka_one"
                }, [t._m(1)])]), a("div", {
                    staticClass: "item",
                    attrs: {
                        id: "about"
                    }
                }, [a("div", {
                    staticClass: "row"
                }, [a("div", {
                    staticClass: "about_block col-sm-10 col-md-10 col-lg-11 col-xl-7"
                }, [a("p", {
                    attrs: {
                        id: "about_title"
                    }
                }, [t._v(t._s(t.page.About))]), a("div", {
                    staticClass: "row about_mini_block"
                }, [a("div", {
                    staticClass: "col-sm-9 col-md-12 col-lg-4",
                    staticStyle: {
                        margin: "0 auto",
                        "margin-bottom": "10px"
                    }
                }, [a("div", {
                    staticClass: "about_fon_block"
                }, [a("div", {
                    staticClass: "about"
                }, [t._m(2), a("div", {
                    staticClass: "about_text"
                }, [a("p", {
                    attrs: {
                        lang: "ru"
                    }
                }, [t._v("\n\t\t\t\t\t\t\t\t\t\t\t" + t._s(t.page.about_list[0].text) + "\n\t\t\t\t\t\t\t\t\t\t")])])])])]), a("div", {
                    staticClass: "col-sm-9 col-md-12 col-lg-4",
                    staticStyle: {
                        margin: "0 auto",
                        "margin-bottom": "10px"
                    }
                }, [a("div", {
                    staticClass: "about_fon_block"
                }, [a("div", {
                    staticClass: "about"
                }, [t._m(3), a("div", {
                    staticClass: "about_text"
                }, [a("p", [t._v("\n\t\t\t\t\t\t\t\t\t\t\t" + t._s(t.page.about_list[1].text) + "\n\t\t\t\t\t\t\t\t\t\t")])])])])]), a("div", {
                    staticClass: "col-sm-9 col-md-12 col-lg-4",
                    staticStyle: {
                        margin: "0 auto",
                        "margin-bottom": "10px"
                    }
                }, [a("div", {
                    staticClass: "about_fon_block"
                }, [a("div", {
                    staticClass: "about"
                }, [t._m(4), a("div", {
                    staticClass: "about_text"
                }, [a("p", [t._v("\n\t\t\t\t\t\t\t\t\t\t\t" + t._s(t.page.about_list[2].text) + "\n\t\t\t\t\t\t\t\t\t\t")])])])])])])])]), a("div", {
                    directives: [{
                        name: "scroll-to",
                        rawName: "v-scroll-to",
                        value: "#info",
                        expression: "'#info'"
                    }],
                    staticClass: "strelka strelka_two"
                }, [t._m(5)])]), a("div", {
                    staticClass: "item row",
                    attrs: {
                        id: "info"
                    }
                }, [a("div", {
                    staticClass: "col-sm-12 col-md-12 col-lg-8 col-xl-6",
                    attrs: {
                        id: "info_block"
                    }
                }, [a("div", {
                    staticClass: "row",
                    attrs: {
                        id: "telescope"
                    }
                }, [a("div", {
                    staticClass: "col-sm-12 col-md-12 col-lg-12 teleskopes_info"
                }, [a("p", [t._v("\n\t\t\t\t\t\t\t" + t._s(t.page.info_telescope) + "\n\t\t\t\t\t\t")])])]), a("div", {
                    attrs: {
                        id: "info_mini_block"
                    }
                }, [a("div", {
                    attrs: {
                        id: "info_title"
                    }
                }, [a("p", [t._v(t._s(t.page.info))])]), a("div", {
                    attrs: {
                        id: "info_list"
                    }
                }, [a("ul", {
                    attrs: {
                        id: "information"
                    }
                }, t._l(t.page.info_list, (function (e) {
                    return a("li", [a("span", {
                        staticClass: "info_list_title"
                    }, [t._v("\n\t\t\t\t\t\t\t\t\t" + t._s(e.title) + "\n\t\t\t\t\t\t\t\t")]), a("br")])
                })), 0)])])]), a("div", {
                    directives: [{
                        name: "scroll-to",
                        rawName: "v-scroll-to",
                        value: "#base",
                        expression: "'#base'"
                    }],
                    staticClass: "strelka strelka_three"
                }, [t._m(6)])])]), a("div", {
                    staticClass: "background_image2"
                }, [a("div", {
                    staticClass: "item row",
                    attrs: {
                        id: "base"
                    }
                }, [a("div", {
                    staticClass: "col-sm-12 col-md-12 col-lg-9 row",
                    attrs: {
                        id: "base_block"
                    }
                }, [a("div", {
                    staticClass: "col-sm-12 col-md-6 col-lg-3 blocks_base",
                    attrs: {
                        id: "shit"
                    }
                }, [a("div", {
                    staticClass: "mount"
                }, [t._m(7), a("div", {
                    staticClass: "mount_text"
                }, [a("p", {
                    staticClass: "title_mount"
                }, [t._v("\n\t\t\t\t\t\t\t\t" + t._s(t.page.mount1_title) + "\n\t\t\t\t\t\t\t")]), a("p", [t._v("\n\t\t\t\t\t\t\t\t" + t._s(t.page.mount1_region.value) + "\n\t\t\t\t\t\t\t")])])])]), t.mobile ? t._e() : a("div", {
                    staticClass: "col-sm-12 col-md-12 col-lg-6",
                    attrs: {
                        id: "earth"
                    }
                }, [a("div", {
                    staticClass: "graf"
                }, [t._m(8), t._m(9), a("div", {
                    attrs: {
                        id: "planet"
                    }
                }, [t._m(10), a("div", {
                    attrs: {
                        id: "text_planet"
                    }
                }, [a("p", [t._v("\n\t\t\t\t\t\t\t\t\t" + t._s(t.page.text_planet) + "\n\t\t\t\t\t\t\t\t")])])])])]), a("div", {
                    staticClass: "col-sm-12 col-md-6 col-lg-3 blocks_base",
                    attrs: {
                        id: "blag"
                    }
                }, [a("div", {
                    staticClass: "mount"
                }, [t._m(11), a("div", {
                    staticClass: "mount_text"
                }, [a("p", {
                    staticClass: "title_mount"
                }, [t._v("\n\t\t\t\t\t\t\t\t" + t._s(t.page.mount2_title) + "\n\t\t\t\t\t\t\t")]), a("p", [t._v("\n\t\t\t\t\t\t\t\t" + t._s(t.page.mount2_region.value) + "\n\t\t\t\t\t\t\t")])])])])]), a("div", {
                    staticClass: "strelka_four"
                }, [a("div", {
                    directives: [{
                        name: "scroll-to",
                        rawName: "v-scroll-to",
                        value: "#main",
                        expression: "'#main'"
                    }],
                    staticClass: "strelka strelka_four_rot"
                }, [t._m(12)])])])]), a("div", {
                    attrs: {
                        id: "footer"
                    }
                }, [a("div", {
                    attrs: {
                        id: "footer_position"
                    }
                }, [a("div", {
                    staticClass: "footer"
                }, [a("span", [a("a", {
                    attrs: {
                        href: "tel:" + t.page.footer_tel
                    }
                }, [t._v(t._s(t.page.footer_tel))]), t._v("  /  "), a("a", {
                    attrs: {
                        href: "mailto:" + t.page.footer_mail
                    }
                }, [t._v(t._s(t.page.footer_mail))])])]), t._m(13), a("div", {
                    staticClass: "footer"
                }, [a("span", [t._v("\n\t\t\t\t\t" + t._s(t.page.footer_address) + "\n\t\t\t\t")])])])])])
            },
            y = [function () {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("div", {
                    staticClass: "title_img col-xl-4 col-lg-4 col-md-4 col-sm-4"
                }, [i("img", {
                    staticClass: "img_on_main",
                    attrs: {
                        src: a("0943")
                    }
                })])
            }, function () {
                var t = this,
                    e = t.$createElement,
                    a = t._self._c || e;
                return a("div", {
                    attrs: {
                        id: "arrow"
                    }
                }, [a("div", {
                    attrs: {
                        id: "arrowleft"
                    }
                }), a("div", {
                    attrs: {
                        id: "arrowright"
                    }
                })])
            }, function () {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("div", {
                    staticClass: "about_img"
                }, [i("img", {
                    attrs: {
                        src: a("599e")
                    }
                })])
            }, function () {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("div", {
                    staticClass: "about_img"
                }, [i("img", {
                    attrs: {
                        src: a("60c5")
                    }
                })])
            }, function () {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("div", {
                    staticClass: "about_img"
                }, [i("img", {
                    attrs: {
                        src: a("596c")
                    }
                })])
            }, function () {
                var t = this,
                    e = t.$createElement,
                    a = t._self._c || e;
                return a("div", {
                    attrs: {
                        id: "arrow"
                    }
                }, [a("div", {
                    attrs: {
                        id: "arrowleft"
                    }
                }), a("div", {
                    attrs: {
                        id: "arrowright"
                    }
                })])
            }, function () {
                var t = this,
                    e = t.$createElement,
                    a = t._self._c || e;
                return a("div", {
                    attrs: {
                        id: "arrow"
                    }
                }, [a("div", {
                    attrs: {
                        id: "arrowleft"
                    }
                }), a("div", {
                    attrs: {
                        id: "arrowright"
                    }
                })])
            }, function () {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("div", {
                    staticClass: "img_mount"
                }, [i("img", {
                    attrs: {
                        src: a("2284")
                    }
                })])
            }, function () {
                var t = this,
                    e = t.$createElement,
                    a = t._self._c || e;
                return a("div", {
                    attrs: {
                        id: "left"
                    }
                }, [a("div", {
                    attrs: {
                        id: "Naklon"
                    }
                }), a("div", {
                    attrs: {
                        id: "Gorizont"
                    }
                }), a("div", {
                    attrs: {
                        id: "Circle"
                    }
                })])
            }, function () {
                var t = this,
                    e = t.$createElement,
                    a = t._self._c || e;
                return a("div", {
                    attrs: {
                        id: "right"
                    }
                }, [a("div", {
                    attrs: {
                        id: "Naklon"
                    }
                }), a("div", {
                    attrs: {
                        id: "Gorizont"
                    }
                }), a("div", {
                    attrs: {
                        id: "Circle"
                    }
                })])
            }, function () {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("div", {
                    attrs: {
                        id: "img_planet"
                    }
                }, [i("img", {
                    attrs: {
                        src: a("90a6"),
                        alt: ""
                    }
                })])
            }, function () {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("div", {
                    staticClass: "img_mount"
                }, [i("img", {
                    attrs: {
                        src: a("78f2")
                    }
                })])
            }, function () {
                var t = this,
                    e = t.$createElement,
                    a = t._self._c || e;
                return a("div", {
                    attrs: {
                        id: "arrow"
                    }
                }, [a("div", {
                    attrs: {
                        id: "arrowleft"
                    }
                }), a("div", {
                    attrs: {
                        id: "arrowright"
                    }
                })])
            }, function () {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("div", {
                    staticClass: "footer img"
                }, [i("img", {
                    attrs: {
                        id: "logo",
                        src: a("d7e0")
                    }
                })])
            }],
            N = {
                name: "main",
                data: function () {
                    return {
                        publicPath: "",
                        page: [],
                        select: "",
                        text: [{
                            Russia: {
                                Title: "Мы видим всё <br> в&nbsp;околоземном космосе!",
                                About: 'АО "Астрономический Научный Центр" образовано в 2011 году. Наша компания оказывает следующие услуги в области исследования околоземного космического пространства:',
                                about_list: [{
                                    img: "../source/About_one.png",
                                    text: "Создание и эксплуатация автоматизированных оптико-электронных комплексов обнаружения и мониторинга объектов в околоземном космическом  пространстве"
                                }, {
                                    img: "../source/About_two.png",
                                    text: "Создание автоматизированных программных комплексов обработки информации об объектах и событиях в околоземном космическом пространстве"
                                }, {
                                    img: "../source/About_three.png",
                                    text: "Проведение анализа операций (запусков, орбитальных маневров, перемещений между орбитальными позициями и др.) и орбитальных событий  (разрушений, потенциально опасных сближений объектов) в околоземном космическом пространстве, оценка физических характеристик наблюдаемых объектов"
                                }],
                                info: "Оптико-электронные средства АО «АНЦ» позволяют:",
                                info_list: [{
                                    title: "Обнаруживать и регулярно наблюдать объекты размером от 25-30 см в геостационарной области (диапазон высот 33000-40000 км) и от 15-25см на прочих высоких орбитах с высотой перигея от 5000 до 25000 км",
                                    text_one: " ",
                                    text_two: " "
                                }, {
                                    title: "Осуществлять непрерывный (за исключением дневного времени) мониторинг функционирующих объектов на геостационарных, высокоэллиптических и средневысоких орбитах",
                                    text_one: " ",
                                    text_two: " "
                                }, {
                                    title: "Ежесуточно осуществлять глобальный обзор геостационарной области",
                                    text_one: " ",
                                    text_two: " "
                                }, {
                                    title: "Измерять астрометрическое положение наблюдаемых объектов с погрешностью 0.4-1.2 угл.с",
                                    text_one: " ",
                                    text_two: " "
                                }],
                                info_telescope: 'АО "АНЦ" осуществляет управление работой 51 телескопа с апертурой от 19см до 65см в 14 обсерваториях, расположенных в различных районах Земного шара',
                                base_title: "Научно-исcледовательские площадки",
                                mount1_title: "Гора Шаджатмаз",
                                mount1_alternative: {
                                    title: "Альтернатива",
                                    value: "Gora Shidzhadmaz"
                                },
                                mount1_region: {
                                    title: "Регион",
                                    value: "Республика Карачаево-Черкесия"
                                },
                                mount2_title: "Благовещенский район",
                                mount2_region: {
                                    title: "Регион",
                                    value: "Амурская область"
                                },
                                text_planet: "АО «АНЦ» имеет собственные научно-исследовательские площадки, размещенные в Карачаево-Черкессии (гора Шаджатмаз) и в районе г. Благовещенск Амурской области",
                                footer_mail: "info@ancprotek.ru",
                                footer_tel: " +7 (495) 641 51 35",
                                footer_address: "Россия, Москва, шоссе Энтузиастов, 56с25"
                            },
                            English: {
                                Title: "We see everything in outer space!",
                                About: "Astronomical Scientific Center was founded in 2011. Our company provides services in the field of outer space monitoring:",
                                about_list: [{
                                    img: "../source/About_one.png",
                                    text: "Design, operation and support of automated optical sensors for detection and monitoring objects in outer space."
                                }, {
                                    img: "../source/About_two.png",
                                    text: "Design, operation and support of software solutions for information processing about objects and events in outer space."
                                }, {
                                    img: "../source/About_three.png",
                                    text: "Analysis of operations  (launches, orbital maneuvers, movements between orbital positions, etc.) and orbital events (destructions, potentially dangerous object approaches) in outer space, assessment of physical characteristics of observed objects."
                                }],
                                info: "Our optical sensors are able to:",
                                info_list: [{
                                    title: "Detect and regularly observe objects with size of 25-30 cm in GEO (with heights between 33000 and 40000 km) and objects with size of 15-25 cm in other high orbits with perigee between 5000 and 25000 km",
                                    text_one: " ",
                                    text_two: " "
                                }, {
                                    title: "Provide continuous observation (except daylight time) of active objects in GEO, HEO and MEO",
                                    text_one: " ",
                                    text_two: " "
                                }, {
                                    title: "Provide daily global GEO observation",
                                    text_one: " ",
                                    text_two: " "
                                }, {
                                    title: "Provide the astrometric position of the observed objects with uncertainty between 0.4 and 1.2 angular second",
                                    text_one: " ",
                                    text_two: " "
                                }],
                                info_telescope: "ASC operates 51 telescopes with aperture between 19 and 65 cm located in 14 observatories across the world",
                                base_title: "Research Centers",
                                mount1_title: "Mount Shatdzhatmas",
                                mount1_alternative: {
                                    title: "Alternative:",
                                    value: "Gora Shidzhadmaz"
                                },
                                mount1_region: {
                                    title: "Region",
                                    value: "Karachay-Cherkessia"
                                },
                                mount2_title: "Near Blagoveshchensk",
                                mount2_region: {
                                    value: "Amur Oblast"
                                },
                                text_planet: " ASC has two research centers located in Karachay-Cherkessia (Mount Shatdzhatmas) and near Blagoveshchensk",
                                footer_mail: "info@ancprotek.ru",
                                footer_tel: " +7 (495) 641 51 35",
                                footer_address: "Russia, Moscow, shosse Entuziastov, 56с25"
                            }
                        }]
                    }
                },
                created: function () {
                    this.Before()
                },
                methods: {
                    Before: function () {
                        this.mobile = this.$parent.mobile, this.select = this.$parent.select, this.page = this.text[0][this.select]
                    },
                    SelectLang: function (t) {
                        this.page = this.text[0][t]
                    }
                },
                watch: {}
            },
            C = N,
            T = (a("c266"), Object(c["a"])(C, j, y, !1, null, null, null)),
            E = T.exports,
            D = function () {
                var t = this,
                    e = t.$createElement,
                    a = t._self._c || e;
                return a("div", {
                    attrs: {
                        id: "equipment"
                    }
                }, [a("div", {
                    staticClass: "section"
                }, [a("div", {
                    staticClass: "content row"
                }, [a("div", {
                    staticClass: "row col-lg-9 col-xl-9",
                    attrs: {
                        id: "mini_menu"
                    }
                }, t._l(t.page.menu, (function (e, i) {
                    return a("div", {
                        staticClass: "block_menu col-lg-3 col-xl-3"
                    }, [a("div", {
                        staticClass: "name",
                        class: [e.value == t.tab ? "active" : "def"],
                        on: {
                            click: function (a) {
                                return t.menu(e.value, i)
                            }
                        }
                    }, [a("div", {
                        staticClass: "text"
                    }, [t._v(t._s(e.name))])]), a("transition", {
                        attrs: {
                            name: "block-menu-fade"
                        }
                    }, [a("div", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: e.value == t.tab,
                            expression: "item.value == tab"
                        }],
                        ref: "menu",
                        refInFor: !0,
                        staticClass: "list_block"
                    }, t._l(e.parts, (function (e, i) {
                        return a("div", {
                            staticClass: "list_menu",
                            class: [e.cont == t.select_tab ? "active_mini_tab" : ""],
                            on: {
                                click: function (a) {
                                    return t.cont_menu(e.cont, i)
                                }
                            }
                        }, [t._v("\r\n                                " + t._s(e.name) + "\r\n                            ")])
                    })), 0)])], 1)
                })), 0)]), a("div", {
                    staticStyle: {
                        "transition-duration": ".4s"
                    },
                    style: {
                        marginTop: t.marg_name + "px"
                    },
                    attrs: {
                        id: "name_page"
                    }
                }, [a("p", [t._v(t._s(t.page.Title))])]), a("div", {
                    staticClass: "row",
                    attrs: {
                        id: "table_data"
                    }
                }, [a("div", {
                    staticClass: "col-sm-12 col-md-12 col-lg-9 col-xl-9",
                    attrs: {
                        id: "table_data_content"
                    }
                }, [a("div", {
                    attrs: {
                        id: "comp"
                    }
                }, ["" == t.select_tab ? a("table", [a("tbody", t._l(t.page.table, (function (e) {
                    return a("tr", [a("td", [a("p", [t._v(t._s(e.name))])]), a("td", [a("p", [t._v(t._s(e.diam)), a("br"), t._v(t._s(e.diam_ed))])]), a("td", [a("p", [t._v(t._s(e.grad)), a("br"), t._v(t._s(e.grad_ed))])]), a("td", [a("p", [t._v(t._s(e.pronic)), a("br"), t._v(t._s(e.pronic_ed))])])])
                })), 0)]) : t._e(), a("div", {
                    attrs: {
                        id: "component"
                    }
                }, [a(t.select_tab, {
                    tag: "component",
                    staticClass: "tab"
                })], 1)])])]), t._m(0)]), a("div", {
                    staticClass: "copm_mobile"
                }, t._l(t.page.menu, (function (e) {
                    return a("div", t._l(e.parts, (function (e) {
                        return a("div", [a("h5", {
                            staticClass: "name_mobile"
                        }, [t._v(t._s(e.name))]), a(e.cont, {
                            tag: "component",
                            staticClass: "tab"
                        })], 1)
                    })), 0)
                })), 0)])
            },
            S = [function () {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("div", {
                    attrs: {
                        id: "footer_equipment"
                    }
                }, [i("div", [i("span", [i("a", {
                    attrs: {
                        href: "tel:+74956415135"
                    }
                }, [t._v("+7(495) 641 51 35")]), t._v("  /  "), i("a", {
                    attrs: {
                        href: "mailto:info@ancprotek.ru"
                    }
                }, [t._v("INFO@ANCPROTEK.RU")]), i("img", {
                    attrs: {
                        src: a("9879")
                    }
                }), t._v("Россия, Москва, Шоссе Энтузиастов, 56с25")])])])
            }],
            O = function () {
                var t = this,
                    e = t.$createElement,
                    a = t._self._c || e;
                return a("div", {
                    attrs: {
                        id: "MOES19"
                    }
                }, [a("div", {
                    staticClass: "container-fluid"
                }, [a("div", {
                    staticClass: "row"
                }, [t._m(0), a("div", {
                    staticClass: "col-sm-12 col-md-12 col-lg-8 col-xl-8",
                    attrs: {
                        id: "desc"
                    }
                }, [a("p", {
                    staticClass: "text"
                }, [t._v("\r\n          " + t._s(t.text) + "\r\n        ")]), a("table", [a("table", {
                    staticStyle: {
                        margin: "0 auto"
                    }
                }, [a("thead", [a("tr", t._l(t.NameTableSecond, (function (e) {
                    return a("th", [t._v(t._s(e))])
                })), 0)]), a("tbody", t._l(t.item_table, (function (e) {
                    return a("tr", [a("td", {
                        attrs: {
                            colspan: e.value ? 1 : 2
                        }
                    }, [t._v(t._s(e.name))]), e.value ? a("td", [t._v(t._s(e.value))]) : t._e()])
                })), 0)])])])])]), a("div", {
                    attrs: {
                        id: "nineteen"
                    }
                })])
            },
            z = [function () {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("div", {
                    staticClass: "col-sm-12 col-md-12 col-lg-4 col-xl-4"
                }, [i("img", {
                    attrs: {
                        id: "photo",
                        src: a("1883")
                    }
                })])
            }],
            k = {
                data: function () {
                    return {
                        msg: "Модульное оптико-электронное средство МОЭC-19",
                        text: "Объектив представляет собой малоапертурный катадиоптрический широкопольный оптический прибор высокой светосилы со сферической оптикой, который выполнен по системе Шенкера с трехлинзовым полноапертурным корректором, с задним расположением фотоприёмного устройства в фокусе Кассегрена. Компоновка  и применённая оптическая схема  позволяют  использовать фотоприёмную аппаратуру произвольных габаритов и, в силу размещения вторичного зеркала на линзе полноапертурного корректора, избежать применения системы механических конструктивных элементов крепления вторичного зеркала - растяжек, что исключает помехи от них на изображении, и позволяет эффективно обнаруживать слабые точечные объекты вблизи ярких источников света (звезд) в поле зрения.",
                        NameTableSecond: ["Параметры и характеристики (свойства)", "Показатели (значения)"],
                        item_table: [{
                            name: "Диаметр входного зрачка, мм",
                            value: "194"
                        }, {
                            name: "Эффективное фокусное  расстояние, мм",
                            value: "296"
                        }, {
                            name: "Угловой диаметр поля зрения, град.",
                            value: "10"
                        }, {
                            name: "Линейный диаметр поля зрения, мм",
                            value: "52"
                        }, {
                            name: "Задний отрезок, мм",
                            value: "30.7"
                        }, {
                            name: "Длина оптической системы, мм",
                            value: "248,44"
                        }, {
                            name: "Длина с блендой/без бленды, мм",
                            value: "700/259"
                        }, {
                            name: "Диаметр наибольший (с блендой), мм",
                            value: "310"
                        }, {
                            name: "Масса объектива, кг, не более",
                            value: "21"
                        }, {
                            name: "Ожидаемое проницание за 10 с экспозиции на ФПУ, не хуже, зв. величина",
                            value: "16.5m"
                        }]
                    }
                },
                computed: {},
                methods: {}
            },
            I = k,
            A = (a("ef64"), Object(c["a"])(I, O, z, !1, null, "57646fca", null)),
            U = A.exports,
            Y = function () {
                var t = this,
                    e = t.$createElement,
                    a = t._self._c || e;
                return a("div", {
                    attrs: {
                        id: "MOES25"
                    }
                }, [a("div", {
                    staticClass: "container-fluid"
                }, [a("div", {
                    staticClass: "row"
                }, [t._m(0), a("div", {
                    staticClass: "col-sm-12 col-md-12 col-lg-8 col-xl-8",
                    attrs: {
                        id: "desc"
                    }
                }, [a("div", [a("h2", {
                    staticStyle: {
                        color: "#fff"
                    }
                }, [t._v(t._s(t.msg))])]), a("p", {
                    staticClass: "text"
                }, [t._v("\r\n          " + t._s(t.text) + "\r\n        ")]), a("table", [a("table", {
                    staticStyle: {
                        margin: "0 auto"
                    }
                }, [a("thead", [a("tr", t._l(t.NameTableSecond, (function (e) {
                    return a("th", [t._v(t._s(e))])
                })), 0)]), a("tbody", t._l(t.item_table, (function (e) {
                    return a("tr", [a("td", {
                        attrs: {
                            colspan: e.value ? 1 : 2
                        }
                    }, [t._v(t._s(e.name))]), e.value ? a("td", [t._v(t._s(e.value))]) : t._e()])
                })), 0)])])])])]), a("div", {
                    attrs: {
                        id: "nineteen"
                    }
                })])
            },
            P = [function () {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("div", {
                    staticClass: "col-sm-12 col-md-12 col-lg-4 col-xl-4"
                }, [i("img", {
                    attrs: {
                        id: "photo",
                        src: a("f27d")
                    }
                })])
            }],
            G = {
                data: function () {
                    return {
                        msg: "Модульное оптико-электронное средство МОЭC-25",
                        text: "Объектив представляет собой катадиоптрический широкопольный оптический прибор высокой светосилы со сферической оптикой, который  выполнен по оптической схеме Гамильтона-Ньютона с однолинзовым полноапертурным корректором и двухлинзовым предфокальным корректором, с боковым расположением фотоприемного устройства в ньютоновском (вынесенном) фокусе. Применение полностью сферической оптики обеспечивает высокую воспроизводимость системы при серийном производстве. Закрытая оптическая труба исключает загрязнение внутреннего объёма и находящихся в нём оптических деталей. Применение покрытия внутреннего отражения на главном зеркале обеспечивает долговечность и стабильность коэффициента пропускания системы. Данная конкретная реализация системы Гамильтона обеспечивает по всему полю зрения расчётное качество изображения, близкое к дифракционному пределу. Компоновка и применённая оптическая схема  позволяют  использовать фотоприёмную аппаратуру различных габаритов. Практически применимое поле зрения ограничивается размерами диагонального зеркала и выходной линзы, с минимальными доработками система может быть применена с приёмниками большого формата, вплоть до 37х37 мм/9 мкм пиксель.",
                        NameTableSecond: ["Параметры и характеристики (свойства)", "Показатели (значения)"],
                        item_table: [{
                            name: "Диаметр входного зрачка, мм",
                            value: "250"
                        }, {
                            name: "Эффективное фокусное  расстояние, мм",
                            value: "625"
                        }, {
                            name: "Угловой диаметр поля зрения, град.",
                            value: "4.8"
                        }, {
                            name: "Линейный диаметр поля зрения, мм",
                            value: "52"
                        }, {
                            name: "Задний отрезок, мм",
                            value: "65"
                        }, {
                            name: "Длина оптической системы, мм",
                            value: "248,44"
                        }, {
                            name: "Длина с блендой/без бленды, мм",
                            value: "875/590"
                        }, {
                            name: "Диаметр наибольший (с блендой), мм",
                            value: "310"
                        }, {
                            name: "Масса объектива, кг, не более",
                            value: "23"
                        }, {
                            name: "Ожидаемое проницание за 5 с экспозиции на ФПУ, не хуже, зв. величина",
                            value: "16.5m"
                        }]
                    }
                },
                computed: {},
                methods: {}
            },
            $ = G,
            R = (a("57d2"), Object(c["a"])($, Y, P, !1, null, "693a3fcc", null)),
            Q = R.exports,
            B = function () {
                var t = this,
                    e = t.$createElement,
                    a = t._self._c || e;
                return a("div", {
                    attrs: {
                        id: "MOES30"
                    }
                }, [a("div", {
                    staticClass: "container-fluid"
                }, [a("div", {
                    staticClass: "row"
                }, [t._m(0), a("div", {
                    staticClass: "col-sm-12 col-md-12 col-lg-8 col-xl-8",
                    attrs: {
                        id: "desc"
                    }
                }, [a("div", [a("h2", {
                    staticStyle: {
                        color: "#fff"
                    }
                }, [t._v(t._s(t.msg))])]), a("p", {
                    staticClass: "text"
                }, [t._v("\r\n          " + t._s(t.text) + "\r\n        ")]), a("table", [a("table", {
                    staticStyle: {
                        margin: "0 auto"
                    }
                }, [a("thead", [a("tr", t._l(t.NameTableSecond, (function (e) {
                    return a("th", [t._v(t._s(e))])
                })), 0)]), a("tbody", t._l(t.item_table, (function (e) {
                    return a("tr", [a("td", {
                        attrs: {
                            colspan: e.value ? 1 : 2
                        }
                    }, [t._v(t._s(e.name))]), e.value ? a("td", [t._v(t._s(e.value))]) : t._e()])
                })), 0)])])])])]), a("div", {
                    attrs: {
                        id: "nineteen"
                    }
                })])
            },
            H = [function () {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("div", {
                    staticClass: "col-sm-12 col-md-12 col-lg-4 col-xl-4"
                }, [i("img", {
                    attrs: {
                        id: "photo",
                        src: a("0a07")
                    }
                })])
            }],
            Z = {
                data: function () {
                    return {
                        msg: "Модульное оптико-электронное средство МОЭC-30",
                        text: "Объектив представляет собой катадиоптрический (зеркально-линзовый) широкопольный оптический прибор высокой светосилы со сферической оптикой. Объектив выполнен по оптической схеме (системе) Шенкера с трехлинзовым входным корректором и двухлинзовым предфокальным корректором поля, с задним расположением фотоприёмного устройства в фокусе Кассегрена. Компоновка и применённая оптическая схема позволяют использовать фотоприёмную аппаратуру произвольных габаритов и, в силу размещения вторичного зеркала на линзе входного корректора, избежать применения системы механических элементов крепления вторичного зеркала - растяжек, что исключает помехи от них на изображении, и позволяет эффективно обнаруживать слабые точечные объекты вблизи ярких источников света (звёзд) в поле зрения. Использование сферической оптики обеспечивает высокую воспроизводимость системы при серийном производстве. Закрытая конструкция объектива предупреждает загрязнение внутренних оптических элементов.",
                        NameTableSecond: ["Параметры и характеристики (свойства)", "Показатели (значения)"],
                        item_table: [{
                            name: "Диаметр входного зрачка, мм",
                            value: "300"
                        }, {
                            name: "Эффективное фокусное  расстояние, мм",
                            value: "625"
                        }, {
                            name: "Угловой диаметр поля зрения, град.",
                            value: "4.8"
                        }, {
                            name: "Линейный диаметр поля зрения, мм",
                            value: "52"
                        }, {
                            name: "Задний отрезок, мм",
                            value: "65"
                        }, {
                            name: "Длина оптической системы, мм",
                            value: "248,44"
                        }, {
                            name: "Длина с блендой/без бленды, мм",
                            value: "875/590"
                        }, {
                            name: "Диаметр наибольший (с блендой), мм",
                            value: "310"
                        }, {
                            name: "Масса объектива, кг, не более",
                            value: "23"
                        }, {
                            name: "Ожидаемое проницание за 5 с экспозиции на ФПУ, не хуже, зв. величина",
                            value: "16.5m"
                        }]
                    }
                },
                computed: {},
                methods: {}
            },
            W = Z,
            V = (a("473a"), Object(c["a"])(W, B, H, !1, null, "af03322e", null)),
            F = V.exports,
            J = function () {
                var t = this,
                    e = t.$createElement,
                    a = t._self._c || e;
                return a("div", {
                    attrs: {
                        id: "MOES40"
                    }
                }, [a("div", {
                    staticClass: "container-fluid"
                }, [a("div", {
                    staticClass: "row"
                }, [t._m(0), a("div", {
                    staticClass: "col-sm-12 col-md-12 col-lg-8 col-xl-8",
                    attrs: {
                        id: "desc"
                    }
                }, [a("div", [a("h2", {
                    staticStyle: {
                        color: "#fff"
                    }
                }, [t._v(t._s(t.msg))])]), a("p", {
                    staticClass: "text"
                }, [t._v("\r\n          " + t._s(t.text) + "\r\n        ")]), a("table", [a("table", {
                    staticStyle: {
                        margin: "0 auto"
                    }
                }, [a("thead", [a("tr", t._l(t.NameTableSecond, (function (e) {
                    return a("th", [t._v(t._s(e))])
                })), 0)]), a("tbody", t._l(t.item_table, (function (e) {
                    return a("tr", [a("td", {
                        attrs: {
                            colspan: e.value ? 1 : 2
                        }
                    }, [t._v(t._s(e.name))]), e.value ? a("td", [t._v(t._s(e.value))]) : t._e()])
                })), 0)])])])])]), a("div", {
                    attrs: {
                        id: "nineteen"
                    }
                })])
            },
            X = [function () {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("div", {
                    staticClass: "col-sm-12 col-md-12 col-lg-4 col-xl-4"
                }, [i("img", {
                    attrs: {
                        id: "photo",
                        src: a("bef2")
                    }
                })])
            }],
            q = {
                data: function () {
                    return {
                        msg: "Модульное оптико-электронное средство МОЭC-40",
                        text: "Объектив представляет собой катадиоптрический (зеркально-линзовый) широкопольный оптический прибор высокой светосилы со сферической оптикой. Объектив выполнен по оптимизированной оптической схеме (системе) Гамильтона с однолинзовым полноапертурным корректором и двухлинзовым предфокальным корректором, с передним расположением фотоприёмного устройства в главном (прямом) фокусе. Использование сферической оптики обеспечивает высокую воспроизводимость системы при серийном производстве. Закрытая конструкция объектива предупреждает загрязнение внутренних оптических элементов. Применение покрытия внутреннего отражения на главном зеркале (зеркале Манжена) способствует долговечности и стабильности коэффициента пропускания системы.",
                        NameTableSecond: ["Параметры и характеристики (свойства)", "Показатели (значения)"],
                        item_table: [{
                            name: "Диаметр входного зрачка, мм",
                            value: "400"
                        }, {
                            name: "Эффективное фокусное  расстояние, мм",
                            value: "1200"
                        }, {
                            name: "Угловой диаметр поля зрения, град.",
                            value: "2.9"
                        }, {
                            name: "Линейный диаметр поля зрения, мм",
                            value: "61.3"
                        }, {
                            name: "Задний отрезок, мм",
                            value: "122.6"
                        }, {
                            name: "Длина оптической системы, мм",
                            value: "1050.77"
                        }, {
                            name: "Длина с блендой/без бленды, мм",
                            value: "1290/880"
                        }, {
                            name: "Масса объектива, кг, не более",
                            value: "60"
                        }, {
                            name: "Ожидаемое проницание за 5 с экспозиции на ФПУ, не хуже, зв. величина",
                            value: "17.5m"
                        }]
                    }
                },
                computed: {},
                methods: {}
            },
            K = q,
            tt = (a("d61e"), Object(c["a"])(K, J, X, !1, null, "b17d11ee", null)),
            et = tt.exports,
            at = function () {
                var t = this,
                    e = t.$createElement,
                    a = t._self._c || e;
                return a("div", {
                    attrs: {
                        id: "MOES50"
                    }
                }, [a("div", {
                    staticClass: "container-fluid"
                }, [a("div", {
                    staticClass: "row"
                }, [t._m(0), a("div", {
                    staticClass: "col-sm-12 col-md-12 col-lg-8 col-xl-8",
                    attrs: {
                        id: "desc"
                    }
                }, [a("div", [a("h2", {
                    staticStyle: {
                        color: "#fff"
                    }
                }, [t._v(t._s(t.msg))])]), a("p", {
                    staticClass: "text"
                }, [t._v("\r\n          " + t._s(t.text) + "\r\n        ")]), a("table", [a("table", {
                    staticStyle: {
                        margin: "0 auto"
                    }
                }, [a("thead", [a("tr", t._l(t.NameTableSecond, (function (e) {
                    return a("th", [t._v(t._s(e))])
                })), 0)]), a("tbody", t._l(t.item_table, (function (e) {
                    return a("tr", [a("td", {
                        attrs: {
                            colspan: e.value ? 1 : 2
                        }
                    }, [t._v(t._s(e.name))]), e.value ? a("td", [t._v(t._s(e.value))]) : t._e()])
                })), 0)])])])])]), a("div", {
                    attrs: {
                        id: "nineteen"
                    }
                })])
            },
            it = [function () {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("div", {
                    staticClass: "col-sm-12 col-md-12 col-lg-4 col-xl-4"
                }, [i("img", {
                    attrs: {
                        id: "photo",
                        src: a("a3c9")
                    }
                })])
            }],
            nt = {
                data: function () {
                    return {
                        msg: "Модульное оптико-электронное средство МОЭC-50",
                        text: "Объектив представляет собой катадиоптрический (зеркально-линзовый) широкопольный оптический прибор высокой светосилы со сферической оптикой. Объектив выполнен по оптимизированной оптической схеме (системе) Гамильтона с однолинзовым полноапертурным корректором и двухлинзовым предфокальным корректором, с передним расположением фотоприёмного устройства в главном (прямом) фокусе. Использование сферической оптики обеспечивает высокую воспроизводимость системы при серийном производстве. Закрытая конструкция объектива предупреждает загрязнение внутренних оптических элементов. Применение покрытия внутреннего отражения на главном зеркале (зеркале Манжена) способствует долговечности и стабильности коэффициента пропускания системы.",
                        NameTableSecond: ["Параметры и характеристики (свойства)", "Показатели (значения)"],
                        item_table: [{
                            name: "Диаметр входного зрачка, мм",
                            value: "500"
                        }, {
                            name: "Эффективное фокусное  расстояние, мм",
                            value: "970"
                        }, {
                            name: "Угловой диаметр поля зрения, град.",
                            value: "3.1"
                        }, {
                            name: "Линейный диаметр поля зрения, мм",
                            value: "52"
                        }, {
                            name: "Задний отрезок, мм",
                            value: "131"
                        }, {
                            name: "Длина с блендой/без бленды, мм",
                            value: "1340/840"
                        }, {
                            name: "диаметр наибольший (с блендой), мм",
                            value: "600"
                        }, {
                            name: "ширина по торцам узлов крепления к опорно-поворотному устройству, мм",
                            value: "575"
                        }, {
                            name: "Масса объектива, кг, не более",
                            value: "65"
                        }, {
                            name: "Ожидаемое проницание за 5 с экспозиции на ФПУ, не хуже, зв. величина",
                            value: "18.0m"
                        }]
                    }
                },
                computed: {},
                methods: {}
            },
            st = nt,
            lt = (a("d6de"), Object(c["a"])(st, at, it, !1, null, "53f7e338", null)),
            ot = lt.exports,
            ct = function () {
                var t = this,
                    e = t.$createElement,
                    a = t._self._c || e;
                return a("div", {
                    attrs: {
                        id: "MOES65"
                    }
                }, [a("div", {
                    staticClass: "container-fluid"
                }, [a("div", {
                    staticClass: "row"
                }, [t._m(0), a("div", {
                    staticClass: "col-sm-12 col-md-12 col-lg-8 col-xl-8",
                    attrs: {
                        id: "desc"
                    }
                }, [a("div", [a("h2", {
                    staticStyle: {
                        color: "#fff"
                    }
                }, [t._v(t._s(t.msg))])]), a("p", {
                    staticClass: "text"
                }, [t._v("\r\n          " + t._s(t.text) + "\r\n        ")]), a("ul", t._l(t.item2, (function (e) {
                    return a("li", [t._v("\r\n\t\t\t\t" + t._s(e) + "\r\n\t\t\t")])
                })), 0), a("table", {
                    attrs: {
                        id: "info"
                    }
                }, [a("thead", [a("tr", t._l(t.NameTableSecond, (function (e) {
                    return a("th", [t._v(t._s(e))])
                })), 0)]), a("tbody", t._l(t.item_table, (function (e) {
                    return a("tr", [a("td", {
                        attrs: {
                            colspan: e.value ? 1 : 2
                        }
                    }, [t._v(t._s(e.name))]), e.value ? a("td", [t._v(t._s(e.value))]) : t._e()])
                })), 0)])])])]), a("div", {
                    attrs: {
                        id: "nineteen"
                    }
                })])
            },
            rt = [function () {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("div", {
                    staticClass: "col-sm-12 col-md-12 col-lg-4 col-xl-4"
                }, [i("img", {
                    attrs: {
                        id: "photo",
                        src: a("56d0")
                    }
                }), i("br"), i("img", {
                    attrs: {
                        id: "photo",
                        src: a("9dc9")
                    }
                })])
            }],
            ut = {
                data: function () {
                    return {
                        msg: "Модульное оптико-электронное средство МОЭC-65",
                        text: "Объектив представляет собой малоапертурный катадиоптрический широкопольный оптический прибор высокой светосилы со сферической оптикой, который выполнен по системе Шенкера с трехлинзовым полноапертурным корректором, с задним расположением фотоприёмного устройства в фокусе Кассегрена. Компоновка  и применённая оптическая схема  позволяют  использовать фотоприёмную аппаратуру произвольных габаритов и, в силу размещения вторичного зеркала на линзе полноапертурного корректора, избежать применения системы механических конструктивных элементов крепления вторичного зеркала - растяжек, что исключает помехи от них на изображении, и позволяет эффективно обнаруживать слабые точечные объекты вблизи ярких источников света (звезд) в поле зрения.",
                        item2: ["технологичность в производстве, стабильность и сохраняемость во времени качества даваемого изображения, связанные с применением оптических элементов исключительно со сферическими поверхностями;", "применение закрытого корпуса (трубы) объектива, предохраняющего оптические элементы от воздествия неблагоприятных факторов окружающей среды;", "применение в оптической схеме зеркала Манжена с внутренним переотражением, что позволяет применить серебро (с последующей его защитой для долговременного сохранения свойств) как материал для нанесения зеркального отражающего покрытия с коэффициентом отражения свыше 0.9 и расширенным спектральным диапазоном."],
                        NameTableSecond: ["Параметры и характеристики (свойства)", "Показатели (значения)"],
                        item_table: [{
                            name: "Диаметр входного зрачка, мм",
                            value: "650"
                        }, {
                            name: "Эффективное фокусное  расстояние, мм",
                            value: "1300"
                        }, {
                            name: "Угловой диаметр поля зрения, град.",
                            value: "3.8"
                        }, {
                            name: "Линейный диаметр поля зрения, мм",
                            value: "86.3"
                        }, {
                            name: "Задний отрезок, мм",
                            value: "159"
                        }, {
                            name: "Длина с блендой/без бленды, мм",
                            value: "1873/1295"
                        }, {
                            name: "Диаметр наибольший (с блендой), мм",
                            value: "730"
                        }, {
                            name: "Масса объектива, кг, не более",
                            value: "230"
                        }, {
                            name: "Ожидаемое проницание за 10 с экспозиции на ФПУ, не хуже, зв. величина",
                            value: "18.5m"
                        }]
                    }
                },
                computed: {},
                methods: {}
            },
            mt = ut,
            dt = (a("30da"), Object(c["a"])(mt, ct, rt, !1, null, "26725f4a", null)),
            vt = dt.exports,
            _t = function () {
                var t = this,
                    e = t.$createElement,
                    a = t._self._c || e;
                return a("div", {
                    attrs: {
                        id: "PU30"
                    }
                }, [a("div", {
                    staticClass: "container-fluid"
                }, [a("div", {
                    staticClass: "row"
                }, [t._m(0), a("div", {
                    staticClass: "col-sm-12 col-md-12 col-lg-8 col-xl-8",
                    attrs: {
                        id: "desc"
                    }
                }, [a("table", [a("table", {
                    staticStyle: {
                        margin: "0 auto"
                    }
                }, [a("thead", [a("tr", t._l(t.NameTableSecond, (function (e) {
                    return a("th", [t._v(t._s(e))])
                })), 0)]), a("tbody", t._l(t.item_table, (function (e) {
                    return a("tr", [a("td", {
                        attrs: {
                            colspan: e.value ? 1 : 2
                        }
                    }, [t._v(t._s(e.name))]), e.value ? a("td", [t._v(t._s(e.value))]) : t._e()])
                })), 0)])])]), t._v("а\r\n    ")])]), a("div", {
                    attrs: {
                        id: "nineteen"
                    }
                })])
            },
            ft = [function () {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("div", {
                    staticClass: "col-sm-12 col-md-12 col-lg-4 col-xl-4"
                }, [i("img", {
                    attrs: {
                        id: "photo",
                        src: a("1892")
                    }
                })])
            }],
            pt = {
                data: function () {
                    return {
                        msg: "Модульное оптико-электронное средство МОЭC-19",
                        text: "Объектив представляет собой малоапертурный катадиоптрический широкопольный оптический прибор высокой светосилы со сферической оптикой, который выполнен по системе Шенкера с трехлинзовым полноапертурным корректором, с задним расположением фотоприёмного устройства в фокусе Кассегрена. Компоновка  и применённая оптическая схема  позволяют  использовать фотоприёмную аппаратуру произвольных габаритов и, в силу размещения вторичного зеркала на линзе полноапертурного корректора, избежать применения системы механических конструктивных элементов крепления вторичного зеркала - растяжек, что исключает помехи от них на изображении, и позволяет эффективно обнаруживать слабые точечные объекты вблизи ярких источников света (звезд) в поле зрения.",
                        NameTableSecond: ["Параметры и характеристики (свойства)", "Показатели (значения)"],
                        item_table: [{
                            name: "Вид павильона-укрытия",
                            value: "Башенного типа с открывающейся двухсегментной крышей"
                        }, {
                            name: "Конструктивное исполнение",
                            value: "Сборно-разборный, цельнометаллический, с фанерным настилом пола нижнего и верхнего отсеков, с механически зависимым сопряжением подвижных сегментов крыши"
                        }, {
                            name: "Привод крыши",
                            value: "Электрический, реверсивный, с двусторонней цепной передачей на внешний сегмент крыши"
                        }, {
                            name: "Электропитание павильона",
                            value: "Переменный ток напряжением 220 (230) В, частотой 50 Гц"
                        }, {
                            name: "Мотор-редуктор привода крыши",
                            value: ""
                        }, {
                            name: "- тип мотор-редуктора",
                            value: "Двухступенчатый, червячный, с трёхфазным асинхронным электродвигателем"
                        }, {
                            name: "- электропитание и мощность электродвигателя",
                            value: "220/380 В, 50 Гц, 0,55 кВт"
                        }, {
                            name: "- передаточное отношение редуктора",
                            value: "600"
                        }, {
                            name: "- частота вращения выходного вала редуктора (без нагрузки)*",
                            value: "2,3 1/мин"
                        }, {
                            name: "Цепная передача привода крыши",
                            value: ""
                        }, {
                            name: "- передаточное отношение цепной передачи",
                            value: "1,6875"
                        }, {
                            name: "- частота вращения вала привода крыши (без нагрузки)*",
                            value: "1,363 1/мин"
                        }, {
                            name: "Время открытия (закрытия) крыши при максимальной скорости привода, с, не более",
                            value: "40"
                        }, {
                            name: "Освещение павильона",
                            value: "Светодиодные светильники в нижнем и верхнем отсеках"
                        }, {
                            name: "Основные размеры павильона*, мм",
                            value: ""
                        }, {
                            name: "- размер опорной площадки павильона в плане (со всеми опорными основаниями сборочно-монтажного комплекта)",
                            value: "2730×1840"
                        }, {
                            name: "- высота от уровня грунта (крыша закрыта)",
                            value: "4354"
                        }, {
                            name: "- наибольший размер в направлении «север – юг» (крыша закрыта)",
                            value: "2912"
                        }, {
                            name: "- наибольший размер в направлении «восток – запад»",
                            value: "2520"
                        }, {
                            name: "- высота основания (опорной колонны) под ОЭК относительно грунта**",
                            value: "Определяется конструкцией устанавливаемого в павильоне ОЭК"
                        }, {
                            name: "- высота оснований (опорных элементов) под павильон относительно грунта",
                            value: "200"
                        }, {
                            name: "- высота пола верхнего отсека относительно опорного основания павильона",
                            value: "2130"
                        }, {
                            name: "- высота корзины верхнего отсека относительно пола верхнего отсека",
                            value: "730"
                        }, {
                            name: "- высота верха корзины верхнего отсека относительно опорного основания павильона",
                            value: "2860"
                        }, {
                            name: "Масса павильона (без сборочно-монтажного комплекта)*, кг",
                            value: "1600"
                        }, {
                            name: "Количество размещаемых ОЭК (телескопов)",
                            value: "Один"
                        }, {
                            name: "Типовая апертура объективов оптических модулей размещаемых ОЭК",
                            value: "19 см (19×2, 19×4) см, 25 см, 30 см, 40 см, 50 см"
                        }, {
                            name: "Управление приводом крыши",
                            value: ""
                        }, {
                            name: "- ручное",
                            value: "С помощью пульта управления (кнопочного поста с двойной кнопкой) павильона"
                        }, {
                            name: "- дистанционное и удалённое",
                            value: "По сети LAN и через интернет-соединение"
                        }, {
                            name: "Возможность вращения оптического модуля ОЭК при закрытой крыше павильона",
                            value: "Может быть ограничено типом опорно-поворотного устройства и габаритом оптического модуля ОЭК"
                        }]
                    }
                },
                computed: {},
                methods: {}
            },
            gt = pt,
            Mt = (a("cbfb"), Object(c["a"])(gt, _t, ft, !1, null, "bf45c8e2", null)),
            bt = Mt.exports,
            ht = function () {
                var t = this,
                    e = t.$createElement,
                    a = t._self._c || e;
                return a("div", {
                    attrs: {
                        id: "PD4040"
                    }
                }, [a("div", {
                    staticClass: "container-fluid"
                }, [a("div", {
                    staticClass: "row"
                }, [t._m(0), a("div", {
                    staticClass: "col-sm-12 col-md-12 col-lg-8 col-xl-8",
                    attrs: {
                        id: "desc"
                    }
                }, [a("p", {
                    staticClass: "text"
                }, [t._v("\r\n          " + t._s(t.text) + "\r\n        ")]), a("table", [a("table", {
                    staticStyle: {
                        margin: "0 auto"
                    }
                }, [a("thead", [a("tr", t._l(t.NameTableSecond, (function (e) {
                    return a("th", [t._v(t._s(e))])
                })), 0)]), a("tbody", t._l(t.item_table, (function (e) {
                    return a("tr", [a("td", {
                        attrs: {
                            colspan: e.value ? 1 : 2
                        }
                    }, [t._v(t._s(e.name))]), e.value ? a("td", [t._v(t._s(e.value))]) : t._e()])
                })), 0)])])])])]), a("div", {
                    attrs: {
                        id: "nineteen"
                    }
                })])
            },
            Lt = [function () {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("div", {
                    staticClass: "col-sm-12 col-md-12 col-lg-4 col-xl-4"
                }, [i("img", {
                    attrs: {
                        id: "photo",
                        src: a("3ae0")
                    }
                }), i("img", {
                    attrs: {
                        id: "photo",
                        src: a("2737")
                    }
                }), i("img", {
                    attrs: {
                        id: "photo",
                        src: a("dacd")
                    }
                })])
            }],
            wt = {
                data: function () {
                    return {
                        msg: "Опорно-поворотное устройство астросиб АВМ 700",
                        text: "Объектив представляет собой малоапертурный катадиоптрический широкопольный оптический прибор высокой светосилы со сферической оптикой, который выполнен по системе Шенкера с трехлинзовым полноапертурным корректором, с задним расположением фотоприёмного устройства в фокусе Кассегрена. Компоновка  и применённая оптическая схема  позволяют  использовать фотоприёмную аппаратуру произвольных габаритов и, в силу размещения вторичного зеркала на линзе полноапертурного корректора, избежать применения системы механических конструктивных элементов крепления вторичного зеркала - растяжек, что исключает помехи от них на изображении, и позволяет эффективно обнаруживать слабые точечные объекты вблизи ярких источников света (звезд) в поле зрения.",
                        NameTableSecond: ["Наименование", "Значение"],
                        item_table: [{
                            name: "Тип сенсора",
                            value: "КМОП, GSENSE4040"
                        }, {
                            name: "Спектральный диапазон, нм",
                            value: "400 ÷ 900"
                        }, {
                            name: "Размер чувствительного элемента (Г х В), мкм",
                            value: "9 х 9"
                        }, {
                            name: "Размер регистрируемых кадров (Г х В), пикселей",
                            value: "4096 х 4096 "
                        }, {
                            name: "Частота кадров серии, Гц",
                            value: "24"
                        }, {
                            name: "Уровень насыщения, e",
                            value: "не менее 68000* "
                        }, {
                            name: "Квантовый выход макс, %",
                            value: "не менее 70* "
                        }, {
                            name: "Функция модуляции",
                            value: "не менее 0,5*"
                        }, {
                            name: "Разрядность, бит",
                            value: "2х12"
                        }, {
                            name: "Шум чтения, е",
                            value: "не более 3* "
                        }, {
                            name: "Динамический диапазон, дБ",
                            value: "не менее 68"
                        }, {
                            name: "Экспозиция, с",
                            value: "от 0 до 360"
                        }, {
                            name: "Охлаждение сенсора, °C",
                            value: "до минус 40 относительно окружающей среды, но не ниже минус 30"
                        }, {
                            name: "Точность поддержания температуры сенсора, °C",
                            value: "не хуже 0,4"
                        }, {
                            name: "Интерфейс передачи выходных данных",
                            value: "Ethernet "
                        }, {
                            name: "Сигнал управления затвором",
                            value: "ТТЛ 3.3В"
                        }, {
                            name: "Сигнал открытия затвора",
                            value: "ТТЛ 3.3В"
                        }, {
                            name: "Секундный импульс PPS",
                            value: "ТТЛ 3.3В, 5мА. Общая длительность сигнала 125 мкс. Время нарастания и спада сигнала не более 20нс."
                        }, {
                            name: "Интерфейс временной синхронизации",
                            value: "Ethernet"
                        }, {
                            name: "Формат выходных данных изображения",
                            value: "FITS"
                        }, {
                            name: "Напряжение питания, В",
                            value: "11 ÷ 14"
                        }, {
                            name: "Максимальная мощность, Вт",
                            value: "не более 120 "
                        }, {
                            name: "Габариты, мм",
                            value: "не более Ø128x125"
                        }, {
                            name: "Вес, кг",
                            value: "не более 2"
                        }]
                    }
                },
                computed: {},
                methods: {}
            },
            xt = wt,
            jt = (a("d266"), Object(c["a"])(xt, ht, Lt, !1, null, "116d21ca", null)),
            yt = jt.exports,
            Nt = function () {
                var t = this,
                    e = t.$createElement,
                    a = t._self._c || e;
                return a("div", {
                    attrs: {
                        id: "PD6060"
                    }
                }, [a("div", {
                    staticClass: "container-fluid"
                }, [a("div", {
                    staticClass: "row"
                }, [t._m(0), a("div", {
                    staticClass: "col-sm-12 col-md-12 col-lg-8 col-xl-8",
                    attrs: {
                        id: "desc"
                    }
                }, [a("p", {
                    staticClass: "text"
                }, [t._v("\r\n          " + t._s(t.text) + "\r\n        ")]), a("table", [a("table", {
                    staticStyle: {
                        margin: "0 auto"
                    }
                }, [a("thead", [a("tr", t._l(t.NameTableSecond, (function (e) {
                    return a("th", [t._v(t._s(e))])
                })), 0)]), a("tbody", t._l(t.item_table, (function (e) {
                    return a("tr", [a("td", {
                        attrs: {
                            colspan: e.value ? 1 : 2
                        }
                    }, [t._v(t._s(e.name))]), e.value ? a("td", [t._v(t._s(e.value))]) : t._e()])
                })), 0)])])])])]), a("div", {
                    attrs: {
                        id: "nineteen"
                    }
                })])
            },
            Ct = [function () {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("div", {
                    staticClass: "col-sm-12 col-md-12 col-lg-4 col-xl-4"
                }, [i("img", {
                    attrs: {
                        id: "photo",
                        src: a("b603")
                    }
                }), i("img", {
                    attrs: {
                        id: "photo",
                        src: a("8594")
                    }
                })])
            }],
            Tt = {
                data: function () {
                    return {
                        msg: "Опорно-поворотное устройство астросиб АВМ 700",
                        text: "Объектив представляет собой малоапертурный катадиоптрический широкопольный оптический прибор высокой светосилы со сферической оптикой, который выполнен по системе Шенкера с трехлинзовым полноапертурным корректором, с задним расположением фотоприёмного устройства в фокусе Кассегрена. Компоновка  и применённая оптическая схема  позволяют  использовать фотоприёмную аппаратуру произвольных габаритов и, в силу размещения вторичного зеркала на линзе полноапертурного корректора, избежать применения системы механических конструктивных элементов крепления вторичного зеркала - растяжек, что исключает помехи от них на изображении, и позволяет эффективно обнаруживать слабые точечные объекты вблизи ярких источников света (звезд) в поле зрения.",
                        NameTableSecond: ["Наименование", "Значение"],
                        item_table: [{
                            name: "Тип сенсора",
                            value: "КМОП, GSENSE6060"
                        }, {
                            name: "Спектральный диапазон, нм",
                            value: "400 ÷ 900"
                        }, {
                            name: "Размер чувствительного элемента (Г х В), мкм",
                            value: "10 х 10"
                        }, {
                            name: "Размер регистрируемых кадров (Г х В), пикселей",
                            value: "6000 х 6000 "
                        }, {
                            name: "Частота кадров серии, Гц",
                            value: "4"
                        }, {
                            name: "Уровень насыщения, e",
                            value: "не менее 68000*"
                        }, {
                            name: "Квантовый выход макс, %",
                            value: "не менее 70* "
                        }, {
                            name: "Функция модуляции",
                            value: "не менее 0,5*"
                        }, {
                            name: "Разрядность, бит\t",
                            value: "2х12"
                        }, {
                            name: "Шум чтения, е",
                            value: "не более 3.5* "
                        }, {
                            name: "Динамический диапазон, дБ",
                            value: "не менее 68"
                        }, {
                            name: "Экспозиция, с",
                            value: "от 0 до 360"
                        }, {
                            name: "Охлаждение сенсора, °C",
                            value: "до минус 40 относительно окружающей среды, но не ниже минус 50"
                        }, {
                            name: "Точность поддержания температуры сенсора, °C",
                            value: "не хуже 0.4"
                        }, {
                            name: "Объем ОЗУ, Гб",
                            value: "8"
                        }, {
                            name: "Интерфейс передачи выходных данных",
                            value: "Ethernet 1000BASE-TX"
                        }, {
                            name: "Сигнал управления затвором",
                            value: "ТТЛ 3.3В"
                        }, {
                            name: "Сигнал открытия затвора",
                            value: "ТТЛ 3.3В"
                        }, {
                            name: "Секундный импульс 1PPS (внешний)",
                            value: "ТТЛ 3.3В, 5мА. Общая длительность сигнала 125 мкс. Время нарастания и спада сигнала не более 20нс."
                        }, {
                            name: "Интерфейс временной синхронизации",
                            value: "Ethernet"
                        }, {
                            name: "Формат выходных данных изображения",
                            value: "FITS"
                        }, {
                            name: "Напряжение питания, В",
                            value: "11 ÷ 14"
                        }, {
                            name: "Максимальная мощность, Вт",
                            value: "не более 120 "
                        }, {
                            name: "Габариты, мм",
                            value: "не более Ø180x150"
                        }, {
                            name: "Вес, кг",
                            value: "4.5"
                        }, {
                            name: "Интерфейс выходных данных изображения",
                            value: "Gigabit Ethernet 1000BASE-TX"
                        }, {
                            name: "Интерфейс управления и синхронизации",
                            value: "Gigabit Ethernet 1000BASE-TX"
                        }, {
                            name: "Интерфейс получения сигнала временной синхронизации от внешнего источника",
                            value: "Ethernet"
                        }, {
                            name: "Временная синхронизация",
                            value: "Секундный импульс 1PPS"
                        }, {
                            name: "Тип и характеристика внешнего сигнала временной синхронизации",
                            value: "ТТЛ 3.3В, 5мА. Общая длительность сигнала 125 мкс. Время нарастания и спада сигнала не более 20нс."
                        }]
                    }
                },
                computed: {},
                methods: {}
            },
            Et = Tt,
            Dt = (a("caa4"), Object(c["a"])(Et, Nt, Ct, !1, null, "1200e7d0", null)),
            St = Dt.exports,
            Ot = function () {
                var t = this,
                    e = t.$createElement,
                    a = t._self._c || e;
                return a("div", {
                    attrs: {
                        id: "ABM700"
                    }
                }, [a("div", {
                    staticClass: "container-fluid"
                }, [a("div", {
                    staticClass: "row"
                }, [t._m(0), a("div", {
                    staticClass: "col-sm-12 col-md-12 col-lg-8 col-xl-8",
                    attrs: {
                        id: "desc"
                    }
                }, [a("p", {
                    staticClass: "text"
                }, [t._v("\r\n          " + t._s(t.text) + "\r\n        ")]), a("table", [a("table", {
                    staticStyle: {
                        margin: "0 auto"
                    }
                }, [a("thead", [a("tr", t._l(t.NameTableSecond, (function (e) {
                    return a("th", [t._v(t._s(e))])
                })), 0)]), a("tbody", t._l(t.item_table, (function (e) {
                    return a("tr", [a("td", {
                        attrs: {
                            colspan: e.value ? 1 : 2
                        }
                    }, [t._v(t._s(e.name))]), e.value ? a("td", [t._v(t._s(e.value))]) : t._e()])
                })), 0)])])])])]), a("div", {
                    attrs: {
                        id: "nineteen"
                    }
                })])
            },
            zt = [function () {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("div", {
                    staticClass: "col-sm-12 col-md-12 col-lg-4 col-xl-4"
                }, [i("img", {
                    attrs: {
                        id: "photo",
                        src: a("0703")
                    }
                })])
            }],
            kt = {
                data: function () {
                    return {
                        msg: "Опорно-поворотное устройство астросиб АВМ 700",
                        text: "Объектив представляет собой малоапертурный катадиоптрический широкопольный оптический прибор высокой светосилы со сферической оптикой, который выполнен по системе Шенкера с трехлинзовым полноапертурным корректором, с задним расположением фотоприёмного устройства в фокусе Кассегрена. Компоновка  и применённая оптическая схема  позволяют  использовать фотоприёмную аппаратуру произвольных габаритов и, в силу размещения вторичного зеркала на линзе полноапертурного корректора, избежать применения системы механических конструктивных элементов крепления вторичного зеркала - растяжек, что исключает помехи от них на изображении, и позволяет эффективно обнаруживать слабые точечные объекты вблизи ярких источников света (звезд) в поле зрения.",
                        NameTableSecond: ["Параметры и характеристики (свойства)", "Показатели (значения)"],
                        item_table: [{
                            name: "Максимальная грузоподъёмность (полезная нагрузка в виде оптического модуля (модулей) с оборудованием), кг",
                            value: "200"
                        }, {
                            name: "Диапазон угловых перемещений по азимуту, град",
                            value: "от 0 до плюс 355"
                        }, {
                            name: "Диапазон угловых перемещений по высоте, град",
                            value: "от минус 5 до плюс 100"
                        }, {
                            name: "Диапазон угловых скоростей в режиме «наведение» по азимуту, град/с",
                            value: "от 0 до плюс 10"
                        }, {
                            name: "Диапазон угловых скоростей в режиме «наведение» по высоте, град/с",
                            value: "от 0 до плюс 10"
                        }, {
                            name: "Точность позиционирования, не более, град",
                            value: "0.01"
                        }, {
                            name: "Угловая скорость по азимуту:",
                            value: ""
                        }, {
                            name: "-  режим «целеуказание», от угл.с/c до град/с ",
                            value: "по функционалу, в диапазоне от 0,2 до 10"
                        }, {
                            name: "- режим «автономный поиск», град/сек",
                            value: "0"
                        }, {
                            name: "Угловая скорость по высоте:",
                            value: ""
                        }, {
                            name: "-  режим «целеуказание», от угл.с/c до град/с",
                            value: "по функционалу, в диапазоне от 0,2 до 10"
                        }, {
                            name: "- режим «автономный поиск», град/сек",
                            value: "0"
                        }, {
                            name: "Угловая ошибка сопровождения ОКО в режиме «целеуказание» на временном интервале 100сек во всём диапазоне угловых скоростей, не более, угл.с",
                            value: ""
                        }, {
                            name: "- полная амплитуда",
                            value: "3"
                        }, {
                            name: "- RMS",
                            value: "0.2"
                        }, {
                            name: "Диапазон регулировки азимутального положения ОПУ в сборе, град",
                            value: "±5"
                        }, {
                            name: "Диапазон регулировки вертикального положения ОПУ с сборе, град",
                            value: "±2"
                        }, {
                            name: "Допустимая точность юстировки ОПУ-65 по азимуту и вертикали, не более, угл. мин",
                            value: "3"
                        }, {
                            name: "Номинальное напряжение питания постоянного тока, В",
                            value: "24"
                        }, {
                            name: "Потребляемая мощность, не более, Вт.",
                            value: "200"
                        }, {
                            name: "Общие габаритно-установочные размеры в рабочем положении, не более, мм:",
                            value: ""
                        }, {
                            name: "- высота",
                            value: "1664"
                        }, {
                            name: "- ширина",
                            value: "1050"
                        }, {
                            name: "- глубина",
                            value: "500"
                        }, {
                            name: "Масса, кг, не более",
                            value: "320"
                        }]
                    }
                },
                computed: {},
                methods: {}
            },
            It = kt,
            At = (a("b545"), Object(c["a"])(It, Ot, zt, !1, null, "3b350aaa", null)),
            Ut = At.exports,
            Yt = function () {
                var t = this,
                    e = t.$createElement,
                    a = t._self._c || e;
                return a("div", {
                    attrs: {
                        id: "ABM820"
                    }
                }, [a("div", {
                    staticClass: "container-fluid"
                }, [a("div", {
                    staticClass: "row"
                }, [t._m(0), a("div", {
                    staticClass: "col-sm-12 col-md-12 col-lg-8 col-xl-8",
                    attrs: {
                        id: "desc"
                    }
                }, [a("p", {
                    staticClass: "text"
                }, [t._v("\r\n          " + t._s(t.text) + "\r\n        ")]), a("table", [a("table", {
                    staticStyle: {
                        margin: "0 auto"
                    }
                }, [a("thead", [a("tr", t._l(t.NameTableSecond, (function (e) {
                    return a("th", [t._v(t._s(e))])
                })), 0)]), a("tbody", t._l(t.item_table, (function (e) {
                    return a("tr", [a("td", {
                        attrs: {
                            colspan: e.value ? 1 : 2
                        }
                    }, [t._v(t._s(e.name))]), e.value ? a("td", [t._v(t._s(e.value))]) : t._e()])
                })), 0)])])])])]), a("div", {
                    attrs: {
                        id: "nineteen"
                    }
                })])
            },
            Pt = [function () {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("div", {
                    staticClass: "col-sm-12 col-md-12 col-lg-4 col-xl-4"
                }, [i("img", {
                    attrs: {
                        id: "photo",
                        src: a("d2e3")
                    }
                })])
            }],
            Gt = {
                data: function () {
                    return {
                        msg: "Опорно-поворотное устройство астросиб АВМ 820",
                        text: "Объектив представляет собой малоапертурный катадиоптрический широкопольный оптический прибор высокой светосилы со сферической оптикой, который выполнен по системе Шенкера с трехлинзовым полноапертурным корректором, с задним расположением фотоприёмного устройства в фокусе Кассегрена. Компоновка  и применённая оптическая схема  позволяют  использовать фотоприёмную аппаратуру произвольных габаритов и, в силу размещения вторичного зеркала на линзе полноапертурного корректора, избежать применения системы механических конструктивных элементов крепления вторичного зеркала - растяжек, что исключает помехи от них на изображении, и позволяет эффективно обнаруживать слабые точечные объекты вблизи ярких источников света (звезд) в поле зрения.",
                        NameTableSecond: ["Параметры и характеристики (свойства)", "Показатели (значения)"],
                        item_table: [{
                            name: "Максимальная грузоподъёмность (полезная нагрузка в виде оптического модуля (модулей) с оборудованием), кг",
                            value: "200"
                        }, {
                            name: "Диапазон угловых перемещений по азимуту, град",
                            value: "от 0 до плюс 355"
                        }, {
                            name: "Диапазон угловых перемещений по высоте, град",
                            value: "от минус 5 до плюс 100"
                        }, {
                            name: "Диапазон угловых скоростей в режиме «наведение» по азимуту, град/с",
                            value: "от 0 до плюс 10"
                        }, {
                            name: "Диапазон угловых скоростей в режиме «наведение» по высоте, град/с",
                            value: "от 0 до плюс 10"
                        }, {
                            name: "Точность позиционирования, не более, град",
                            value: "0.01"
                        }, {
                            name: "Угловая скорость по азимуту:",
                            value: ""
                        }, {
                            name: "-  режим «целеуказание», от угл.с/c до град/с ",
                            value: "по функционалу, в диапазоне от 0,2 до 10"
                        }, {
                            name: "- режим «автономный поиск», град/сек",
                            value: "0"
                        }, {
                            name: "Угловая скорость по высоте:",
                            value: ""
                        }, {
                            name: "-  режим «целеуказание», от угл.с/c до град/с",
                            value: "по функционалу, в диапазоне от 0,2 до 10"
                        }, {
                            name: "- режим «автономный поиск», град/сек",
                            value: "0"
                        }, {
                            name: "Угловая ошибка сопровождения ОКО в режиме «целеуказание» на временном интервале 100сек во всём диапазоне угловых скоростей, не более, угл.с",
                            value: ""
                        }, {
                            name: "- полная амплитуда",
                            value: "3"
                        }, {
                            name: "- RMS",
                            value: "0.2"
                        }, {
                            name: "Диапазон регулировки азимутального положения ОПУ в сборе, град",
                            value: "±5"
                        }, {
                            name: "Диапазон регулировки вертикального положения ОПУ с сборе, град",
                            value: "±2"
                        }, {
                            name: "Допустимая точность юстировки ОПУ-65 по азимуту и вертикали, не более, угл. мин",
                            value: "3"
                        }, {
                            name: "Номинальное напряжение питания постоянного тока, В",
                            value: "24"
                        }, {
                            name: "Потребляемая мощность, не более, Вт.",
                            value: "200"
                        }, {
                            name: "Общие габаритно-установочные размеры в рабочем положении, не более, мм:",
                            value: ""
                        }, {
                            name: "- высота",
                            value: "1664"
                        }, {
                            name: "- ширина",
                            value: "1050"
                        }, {
                            name: "- глубина",
                            value: "500"
                        }, {
                            name: "Масса, кг, не более",
                            value: "320"
                        }]
                    }
                },
                computed: {},
                methods: {}
            },
            $t = Gt,
            Rt = (a("173d"), Object(c["a"])($t, Yt, Pt, !1, null, "08e82371", null)),
            Qt = Rt.exports,
            Bt = function () {
                var t = this,
                    e = t.$createElement,
                    a = t._self._c || e;
                return a("div", {
                    attrs: {
                        id: "PU30M"
                    }
                }, [a("div", {
                    staticClass: "container-fluid"
                }, [a("div", {
                    staticClass: "row"
                }, [t._m(0), a("div", {
                    staticClass: "col-sm-12 col-md-12 col-lg-8 col-xl-8",
                    attrs: {
                        id: "desc"
                    }
                }, [a("table", {
                    staticStyle: {
                        margin: "0 auto"
                    },
                    attrs: {
                        id: "pum"
                    }
                }, [a("thead", [a("tr", t._l(t.NameTableSecond, (function (e) {
                    return a("th", [a("span", [t._v(t._s(e))])])
                })), 0)]), a("tbody", t._l(t.item_table, (function (e) {
                    return a("tr", [a("td", {
                        attrs: {
                            colspan: e.value ? 1 : 2
                        }
                    }, [a("span", [t._v(t._s(e.name))])]), e.value ? a("td", [a("span", [t._v(t._s(e.value))])]) : t._e()])
                })), 0)])])])]), a("div", {
                    attrs: {
                        id: "nineteen"
                    }
                })])
            },
            Ht = [function () {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("div", {
                    staticClass: "col-sm-12 col-md-12 col-lg-4 col-xl-4"
                }, [i("img", {
                    attrs: {
                        id: "photo",
                        src: a("0238")
                    }
                }), i("img", {
                    attrs: {
                        id: "photo",
                        src: a("000c")
                    }
                })])
            }],
            Zt = {
                data: function () {
                    return {
                        msg: "Основные параметры и характеристики павильон-укрытия ПУЭО-М",
                        NameTableSecond: ["Параметры и характеристики (свойства)", "Показатели (значения)"],
                        item_table: [{
                            name: "Размер площадки для развертывания ПУЭО-М, м, не менее",
                            value: "16×8"
                        }, {
                            name: "Габаритные размеры ПУЭО-М в транспортном состоянии, мм, не более",
                            value: ""
                        }, {
                            name: "- длина",
                            value: "6162"
                        }, {
                            name: "- ширина",
                            value: "2508"
                        }, {
                            name: "- высота",
                            value: "2598"
                        }, {
                            name: "Габаритные размеры ПУЭО-М в рабочем состоянии, мм, не более",
                            value: ""
                        }, {
                            name: "- длина",
                            value: "6428"
                        }, {
                            name: "- ширина с куполом",
                            value: "4112"
                        }, {
                            name: "- высота с куполом (без фундамента)",
                            value: "6940"
                        }, {
                            name: "- диаметр купола",
                            value: "4120"
                        }, {
                            name: "Масса ПУЭО-М с ОЭК, кг, не более",
                            value: "5000"
                        }, {
                            name: "Рабочая угловая скорость поворота купола ПУЭО-М, град/сек, не менее",
                            value: "15"
                        }, {
                            name: "Ширина рабочего вертикального проема в куполе для ОЭК, мм, не менее",
                            value: "1400"
                        }, {
                            name: "Электропитание и электрооборудование",
                            value: ""
                        }, {
                            name: "Cтационарная промышленная однофазная электрическая сеть переменного тока с глухозаземленной нейтралью",
                            value: ""
                        }, {
                            name: "номинальное напряжение, В",
                            value: "220"
                        }, {
                            name: "номинальная частота, Гц",
                            value: "50"
                        }, {
                            name: "нормы качества электрической энергии",
                            value: "по ГОСТ 13109-97"
                        }, {
                            name: "передвижной источник (передвижная электростанция или электроагрегат) переменного трехфазного (однофазного) тока с изолированной нейтралью",
                            value: ""
                        }, {
                            name: "номинальное напряжение, В",
                            value: "230"
                        }, {
                            name: "номинальная частота, Гц",
                            value: "50"
                        }, {
                            name: "нормы качества электрической энергии",
                            value: "по ГОСТ Р 50783-95"
                        }, {
                            name: "Максимальная суммарная мощность электро-приемников ПУЭО-М, кВт, не более",
                            value: "5"
                        }]
                    }
                },
                computed: {},
                methods: {}
            },
            Wt = Zt,
            Vt = (a("b4c0"), Object(c["a"])(Wt, Bt, Ht, !1, null, "c9f2b976", null)),
            Ft = Vt.exports,
            Jt = function () {
                var t = this,
                    e = t.$createElement,
                    a = t._self._c || e;
                return a("div", {
                    attrs: {
                        id: "srd"
                    }
                }, [a("div", {
                    attrs: {
                        id: "sup"
                    }
                }, [a("h1", [t._v(t._s(t.msg))])])])
            },
            Xt = [],
            qt = {
                data: function () {
                    return {
                        msg: "SUP"
                    }
                },
                methods: {}
            },
            Kt = qt,
            te = (a("6091"), Object(c["a"])(Kt, Jt, Xt, !1, null, null, null)),
            ee = te.exports,
            ae = {
                name: "Equipment",
                components: {
                    MOES19: U,
                    MOES25: Q,
                    MOES30: F,
                    MOES40: et,
                    MOES50: ot,
                    MOES65: vt,
                    PU30: bt,
                    PD4040: yt,
                    PD6060: St,
                    ABM700: Ut,
                    ABM820: Qt,
                    PUEO: Ft,
                    SUPPORTROTATEDEVICE: ee
                },
                data: function () {
                    return {
                        msg: "Equipment",
                        tab: "",
                        select_tab: "",
                        page: [],
                        select: "",
                        mobile: !1,
                        marg_name: 0,
                        text: [{
                            Russia: {
                                Title: "Основные характеристики модульных оптико-электронных комплексов",
                                menu: [{
                                    name: "Модульные оптико-электронные средства",
                                    value: "OK",
                                    parts: [{
                                        name: "МОЭК 19",
                                        cont: "MOES19"
                                    }, {
                                        name: "МОЭК 25",
                                        cont: "MOES25"
                                    }, {
                                        name: "МОЭК 30",
                                        cont: "MOES30"
                                    }, {
                                        name: "МОЭК 40",
                                        cont: "MOES40"
                                    }, {
                                        name: "МОЭК 50",
                                        cont: "MOES50"
                                    }, {
                                        name: "МОЭК 65",
                                        cont: "MOES65"
                                    }]
                                }, {
                                    name: "Фотоприемные устройства",
                                    value: "PD",
                                    parts: [{
                                        name: "ФПУ 4040",
                                        cont: "PD4040"
                                    }, {
                                        name: "ФПУ 6060",
                                        cont: "PD6060"
                                    }]
                                }, {
                                    name: "Опорно-поворотные устройства",
                                    value: "RD",
                                    parts: [{
                                        name: "АВМ 700",
                                        cont: "ABM700"
                                    }, {
                                        name: "АВМ 820",
                                        cont: "ABM820"
                                    }]
                                }, {
                                    name: "Павильоны укрытия",
                                    value: "PU",
                                    parts: [{
                                        name: "ПУ 30П",
                                        cont: "PU30"
                                    }, {
                                        name: "ПУ 30М",
                                        cont: "PUEO"
                                    }]
                                }],
                                table: [{
                                    name: "Название",
                                    diam: "Линейный диаметр поля зрения объектива",
                                    diam_ed: "град./мм",
                                    grad: "Эффективный угловой размер поля зрения по сенсору ФПУ",
                                    grad_ed: "град.",
                                    pronic: "Ожидаемое проницание не хуже",
                                    pronic_ed: "зв. величина"
                                }, {
                                    name: "МОЭК 19",
                                    diam: "10.0/52",
                                    diam_ed: "",
                                    grad: "8.3x5.6",
                                    grad_ed: "",
                                    pronic: "16.5",
                                    pronic_ed: ""
                                }, {
                                    name: "МОЭК 25",
                                    diam: "4.8/52",
                                    diam_ed: "",
                                    grad: "3.3x2.2",
                                    grad_ed: "",
                                    pronic: "16.5",
                                    pronic_ed: ""
                                }, {
                                    name: "МОЭК 30",
                                    diam: "6.8/52",
                                    diam_ed: "",
                                    grad: "4.8x4.8",
                                    grad_ed: "",
                                    pronic: "17.0",
                                    pronic_ed: ""
                                }, {
                                    name: "МОЭК 40",
                                    diam: "2.9/52",
                                    diam_ed: "",
                                    grad: "2.5x2.5",
                                    grad_ed: "",
                                    pronic: "17.5",
                                    pronic_ed: ""
                                }, {
                                    name: "МОЭК 50",
                                    diam: "3.1/52",
                                    diam_ed: "",
                                    grad: "2.2x2.2",
                                    grad_ed: "",
                                    pronic: "18.0",
                                    pronic_ed: ""
                                }, {
                                    name: "МОЭК 60",
                                    diam: "3.8/52",
                                    diam_ed: "",
                                    grad: "2.7x2.7",
                                    grad_ed: "",
                                    pronic: "18.5",
                                    pronic_ed: ""
                                }]
                            },
                            English: {}
                        }]
                    }
                },
                created: function () {
                    this.Before()
                },
                methods: {
                    Before: function () {
                        this.mobile = this.$parent.mobile, this.select = this.$parent.select, this.page = this.text[0][this.select]
                    },
                    menu: function (t, e) {
                        var a = this;
                        this.tab == t ? (this.tab = "", this.marg_name = 0) : (this.tab = t, window.setTimeout((function () {
                            return a.func(e)
                        }), 1)), this.select_tab = ""
                    },
                    cont_menu: function (t, e) {
                        this.select_tab = t
                    },
                    func: function (t) {
                        this.marg_name = this.$refs.menu[t].clientHeight
                    },
                    SelectLang: function (t) {
                        this.page = this.text[0][t]
                    }
                }
            },
            ie = ae,
            ne = (a("f0b9"), Object(c["a"])(ie, D, S, !1, null, null, null)),
            se = ne.exports,
            le = function () {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("div", {
                    attrs: {
                        id: "amenites"
                    }
                }, [i("div", {
                    staticClass: "section"
                }, [i("div", {
                    staticClass: "content"
                }, [i("p", {
                    attrs: {
                        id: "title"
                    }
                }, [t._v(t._s(t.page.Title))]), i("div", {
                    staticClass: "points",
                    staticStyle: {
                        position: "relative"
                    }
                }, [i("img", {
                    attrs: {
                        id: "img",
                        src: a("bbc9"),
                        alt: ""
                    }
                }), i("div", {
                    attrs: {
                        id: "block"
                    }
                }, t._l(t.page.blocks, (function (e) {
                    return i("div", {
                        style: e.style
                    }, [i("p", [t._v(t._s(e.cont))])])
                })), 0)])]), t._m(0)])])
            },
            oe = [function () {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("div", {
                    attrs: {
                        id: "footer_amenites"
                    }
                }, [i("div", [i("span", [i("a", {
                    attrs: {
                        href: "tel:+74956415135"
                    }
                }, [t._v("+7(495) 641 51 35")]), t._v("  /  "), i("a", {
                    attrs: {
                        href: "mailto:info@ancprotek.ru"
                    }
                }, [t._v("INFO@ANCPROTEK.RU")]), i("img", {
                    attrs: {
                        src: a("9879")
                    }
                }), t._v("Россия, Москва, Шоссе Энтузиастов, 56с25")])])])
            }],
            ce = {
                name: "app",
                data: function () {
                    return {
                        msg: "Amenites",
                        page: [],
                        select: "",
                        text: [{
                            Russia: {
                                name: "Основные характеристики модульных оптико-электронных комплексов",
                                Title: "Перечень предлагаемых информационных услуг",
                                blocks: [{
                                    cont: "Астрономические измерения по объектам в ОКП и соответствующие им погрешности",
                                    style: {
                                        top: "-1%",
                                        left: "-10%",
                                        textAlign: "right"
                                    }
                                }, {
                                    cont: "Орбитальная информация и оценки погрешности (Ковариационные матрицы)",
                                    style: {
                                        top: "31%",
                                        left: "-27%",
                                        textAlign: "right"
                                    }
                                }, {
                                    cont: "Оценка параметров сближения космических объектов и вероятности столкновения",
                                    style: {
                                        top: "88%",
                                        left: "-14%",
                                        textAlign: "right"
                                    }
                                }, {
                                    cont: "Проектирование и изготовление комплексных решений для наблюдения за ОКП",
                                    style: {
                                        top: "95%",
                                        right: "31%",
                                        textAlign: "right"
                                    }
                                }, {
                                    cont: "Поставка оптико-электронных комплексов в сборе и их составных частей, администрированных к требованиям заказчика",
                                    style: {
                                        top: "76%",
                                        right: "-16%",
                                        textAlign: "left"
                                    }
                                }, {
                                    cont: "Информационно-аналитическое сопровождение планируемых операций в ОКП (запусков, манёвров)",
                                    style: {
                                        top: "38%",
                                        right: "-25%",
                                        textAlign: "left"
                                    }
                                }, {
                                    cont: "Информационно-аналитические отчеты о ситуации в ОКП",
                                    style: {
                                        top: "2%",
                                        right: "-16%",
                                        textAlign: "left"
                                    }
                                }]
                            },
                            English: {}
                        }]
                    }
                },
                created: function () {
                    this.Before()
                },
                methods: {
                    Before: function () {
                        this.mobile = this.$parent.mobile, this.select = this.$parent.select, this.page = this.text[0][this.select]
                    },
                    SelectLang: function (t) {
                        this.page = this.text[0][t]
                    }
                }
            },
            re = ce,
            ue = (a("ba79"), Object(c["a"])(re, le, oe, !1, null, null, null)),
            me = ue.exports;
        i["a"].use(m["a"]);
        var de = new m["a"]({
                base: "",
                routes: [{
                    path: "/",
                    name: "Main",
                    component: E
                }, {
                    path: "/equipment",
                    name: "Equipment",
                    component: se
                }, {
                    path: "/amenites",
                    name: "Amenites",
                    component: me
                }, {
                    path: "/contact",
                    name: "Contact",
                    component: x
                }]
            }),
            ve = a("f13c");
        i["a"].use(ve), i["a"].config.productionTip = !1, new i["a"]({
            router: de,
            data: {
                mobile: !1,
                lang: "English"
            },
            created: function () {
                this.Before()
            },
            methods: {
                Up: function () {
                    this.$refs.page.move(1)
                },
                isMobileOrTablet: function () {
                    var t = !1;
                    return function (e) {
                        (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(e) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(e.substr(0, 4))) && (t = !0)
                    }(navigator.userAgent || navigator.vendor || window.opera), t
                },
                Lang: function () {
                    var t = navigator.language || navigator.userLanguage,
                        e = this.categorize(t);
                    switch (e) {
                        case "English":
                            this.lang = "English";
                            break;
                        case "Russia":
                            this.lang = "Russia";
                            break
                    }
                },
                categorize: function (t) {
                    return t.includes("en") || t.includes("US") ? "English" : t.includes("ru") || t.includes("RU") || t.includes("Ru") ? "Russia" : "English"
                },
                Before: function () {
                    this.Lang(), this.isMobileOrTablet() && (this.mobile = !0)
                }
            },
            render: function (t) {
                return t(u)
            }
        }).$mount("#app")
    },
    "57d2": function (t, e, a) {
        "use strict";
        var i = a("d7af"),
            n = a.n(i);
        n.a
    },
    "596c": function (t, e, a) {
        t.exports = a.p + "img/About_three.e03a35b8.png"
    },
    "599e": function (t, e, a) {
        t.exports = a.p + "img/About_one.f1c2cdfd.png"
    },
    "5fa2": function (t, e, a) {},
    6091: function (t, e, a) {
        "use strict";
        var i = a("92ef"),
            n = a.n(i);
        n.a
    },
    "60c5": function (t, e, a) {
        t.exports = a.p + "img/About_two.50161ecb.png"
    },
    "610c": function (t, e, a) {
        "use strict";
        var i = a("564b"),
            n = a.n(i);
        n.a
    },
    "64a9": function (t, e, a) {},
    "74f6": function (t, e, a) {},
    "78f2": function (t, e, a) {
        t.exports = a.p + "img/Mount2.3ea70c93.jpg"
    },
    8594: function (t, e, a) {
        t.exports = a.p + "img/6060_2.a5de93f4.png"
    },
    8692: function (t, e, a) {},
    "90a6": function (t, e, a) {
        t.exports = a.p + "img/planet.56f5b940.png"
    },
    "92ef": function (t, e, a) {},
    "974e": function (t, e, a) {},
    9879: function (t, e, a) {
        t.exports = a.p + "img/LogoWhite.92069ed4.png"
    },
    "9dc9": function (t, e, a) {
        t.exports = a.p + "img/65_str.88ee2fa6.png"
    },
    a3c9: function (t, e, a) {
        t.exports = a.p + "img/50_photo.b7de2fc9.png"
    },
    b4c0: function (t, e, a) {
        "use strict";
        var i = a("c2bd"),
            n = a.n(i);
        n.a
    },
    b545: function (t, e, a) {
        "use strict";
        var i = a("8692"),
            n = a.n(i);
        n.a
    },
    b603: function (t, e, a) {
        t.exports = a.p + "img/6060_1.7e8aebec.png"
    },
    b76e: function (t, e, a) {},
    b8ad: function (t, e, a) {},
    ba79: function (t, e, a) {
        "use strict";
        var i = a("231c"),
            n = a.n(i);
        n.a
    },
    bbc9: function (t, e, a) {
        t.exports = a.p + "img/back.5e47a860.png"
    },
    bef2: function (t, e, a) {
        t.exports = a.p + "img/40_photo.d7316b49.png"
    },
    c084: function (t, e, a) {},
    c266: function (t, e, a) {
        "use strict";
        var i = a("287b"),
            n = a.n(i);
        n.a
    },
    c2bd: function (t, e, a) {},
    caa4: function (t, e, a) {
        "use strict";
        var i = a("5fa2"),
            n = a.n(i);
        n.a
    },
    cbfb: function (t, e, a) {
        "use strict";
        var i = a("54da"),
            n = a.n(i);
        n.a
    },
    d266: function (t, e, a) {
        "use strict";
        var i = a("3189"),
            n = a.n(i);
        n.a
    },
    d2e3: function (t, e, a) {
        t.exports = a.p + "img/820_1.44955543.png"
    },
    d49b: function (t, e, a) {
        t.exports = a.p + "img/Logo.7a915cb8.png"
    },
    d61e: function (t, e, a) {
        "use strict";
        var i = a("b76e"),
            n = a.n(i);
        n.a
    },
    d6de: function (t, e, a) {
        "use strict";
        var i = a("74f6"),
            n = a.n(i);
        n.a
    },
    d7af: function (t, e, a) {},
    d7e0: function (t, e, a) {
        t.exports = a.p + "img/Logo_circle.92069ed4.png"
    },
    dacd: function (t, e, a) {
        t.exports = a.p + "img/4040_3.c296211f.png"
    },
    dd5a: function (t, e, a) {
        "use strict";
        var i = a("1b54"),
            n = a.n(i);
        n.a
    },
    ef64: function (t, e, a) {
        "use strict";
        var i = a("458f"),
            n = a.n(i);
        n.a
    },
    f0b9: function (t, e, a) {
        "use strict";
        var i = a("b8ad"),
            n = a.n(i);
        n.a
    },
    f27d: function (t, e, a) {
        t.exports = a.p + "img/25_photo.e117a43c.png"
    },
    f554: function (t, e, a) {}
});
//# sourceMappingURL=app.99c478af.js.map