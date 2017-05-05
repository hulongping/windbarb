/**
 * Created by hulongping on 2017/5/5.
 * isosceles 等腰三角形的画法
 */

(function(window,document,undefiner){

    "use strict";

    L.Isocesles={};

    L.Isocesles.version='0.0.1';

    L.Isocesles.Icon=L.Icon.extend({
        options:{
            strokeColor:'#000',
            strokeWidth: 1,
            iconSize: 16,
            fillColor:'#2B85C7'
        },

        initialize: function(options) {
            options = L.Util.setOptions(this, options);
        },

        createIcon: function() {
            var div = document.createElement('div');
            var svg = this._createPoint();
            div.appendChild(svg);
            this._setIconStyles(div);
            return div;
        },
        _createPoint: function() {
            var svg, w, h, sw, r;
            sw = this.options.strokeWidth;
            r = 0;
            var pc=this.options.fillColor;
            var ps=this.options.strokeColor;
            w = h = 2 * sw + 2 * r;

            var xmlns = "http://www.w3.org/2000/svg";
            svg = document.createElementNS(xmlns, 'svg');
            svg.setAttributeNS(null, 'width', w);
            svg.setAttributeNS(null, 'height', h);
            var c = document.createElementNS(xmlns, 'circle');
            c.setAttributeNS(null, 'stroke', ps);
            c.setAttributeNS(null, 'stroke-width', sw);
            c.setAttributeNS(null, 'fill', pc);
            c.setAttributeNS(null, 'cx', w / 2);
            c.setAttributeNS(null, 'cy', (h / 2));
            c.setAttributeNS(null, 'r', r);
            svg.appendChild(c);
            return svg;
        },

        _createGeomtry: function() {
            var xmlns, svg, g;
            var lc=this.options.strokeColor;
            var sw = this.options.strokeWidth;
            var sl=this.options.iconSize;
            var fc =this.options.fillColor;

            xmlns = "http://www.w3.org/2000/svg";
            svg = document.createElementNS(xmlns, "svg");
            g = document.createElementNS(xmlns, "g");

            // calculate width and height
            var w = sl;
            var h=  sl*1.8;

            var cx = w / 2;
            var cy = h / 2;

            svg.setAttributeNS(null, "width", w);
            svg.setAttributeNS(null, "height", h);
            svg.appendChild(g);

            var p1,p2,p3;
            p1=cx+','+(cy-h/2);
            p2=(cx-w/2)+','+(cy+h/2);
            p3=(cx+w/2)+','+(cy+h/2);

            var path = document.createElementNS(xmlns, "polygon");
            path.setAttributeNS(null, 'stroke', lc);
            path.setAttributeNS(null, 'stroke-width', sw);
            path.setAttributeNS(null, 'fill', fc);
            path.setAttributeNS(null, 'points', p1 + ' ' + p2 + ' ' + p3);
            g.appendChild(path);



            return { ax: cx, ay: cy, svg: svg };
        },

        _setIconStyles: function(img, name, a) {
            var sw, r, o;
            var options = this.options,
                size = L.point(options[name === 'shadow' ? 'shadowSize' : 'iconSize']),
                anchor;

            sw = this.options.strokeWidth;
            r = 0;

            if (name === 'shadow') {
                anchor = a;
                img.style.width = anchor.x + 'px';
                img.style.height = anchor.y + 'px';
            } else {
                img.style.position = 'absolute';
                var w, h;
                w = h = 2 * sw + 2 * r;
                var x = w / 2;
                var y = h / 2+1;
                anchor = L.point([x, y]);
            }

            if (!anchor && size) {
                anchor = size.divideBy(2, true);
            }

            if (anchor) {
                img.style.marginLeft = (-anchor.x) + 'px';
                img.style.marginTop = (-anchor.y) + 'px';
            }

            if (size) {
                img.style.width = size.x + 'px';
                img.style.height = size.y + 'px';
            }
        },

        createShadow: function() {
            var d, s, b;
            d = this.options.deg;

            b = this._createGeomtry();

            var div = document.createElement('div');
            b.svg.style.transform = "rotate(" + d + "deg)";
            b.svg.style.MozTransform = "rotate(" + d + "deg)";
            b.svg.style.webkitTransform = "rotate(" + d + "deg)";
            b.svg.style.msTransform = "rotate(" + d + "deg)";

            div.appendChild(b.svg);

            var anchor = { x: b['ax'], y: b['ay'] };
            this._setIconStyles(div, 'shadow', anchor);
            return div;
        }





    });





    L.Isocesles.icon=function(options){
        return new L.Isocesles.Icon(options);
    };


}(this,document));
