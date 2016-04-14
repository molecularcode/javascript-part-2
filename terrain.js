var burning = "burning";
var normal = "normal";
var frozen = "frozen";

var type = ["grass", "rocks", "water"];
var condition = [burning, normal, frozen];

function Tile(x, y) {
    this.x = x;
    this.y = y;
    this.height = Math.floor(Math.random() * 3);
    this.type = type[Math.floor(Math.random() * type.length) + 1];
    this.condition = condition[Math.floor(Math.random() * type.length) + 1];
}

Tile.prototype = {
    freeze: function() {
        if(this.condition === burning) {
            this.condition = normal;
        }
        else if(this.condition === normal) {
            this.condition = frozen;
        }
        else {
            this.height++;
        }
    },
    burn: function() {
        if(this.condition === frozen) {
            this.condition = normal;
        }
        else if(this.condition === normal) {
            this.condition = burning;
        }
        else {
            if(this.height > 0) {
                this.height--;
            }
        }
    },
};

var map = [];

var tile1 = new Tile(1, 1);
//console.log(tile1);

map.push(tile1);
console.log(map);