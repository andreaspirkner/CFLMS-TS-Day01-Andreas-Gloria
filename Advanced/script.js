var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var arr = [];
var Vehicles = /** @class */ (function () {
    function Vehicles(brand, model1, model2) {
        this.brand = "";
        this.brand = brand;
        arr.push(this);
    }
    Vehicles.prototype.cars = function () {
        return "" + this.brand;
    };
    return Vehicles;
}());
var addInfo = /** @class */ (function (_super) {
    __extends(addInfo, _super);
    function addInfo(brand, model, hp, fuel_type) {
        var _this = _super.call(this, brand) || this;
        _this.model = model;
        _this.hp = hp;
        _this.fuel_type = fuel_type;
        return _this;
    }
    addInfo.prototype.add = function () {
        return _super.prototype.cars.call(this) + " <br> " + this.model + " has " + this.hp + " horsepower and runs with " + this.fuel_type + ". <hr>";
    };
    return addInfo;
}(Vehicles));
var brandName = ["Crysler", "Dodge", "Tesla", "VW"];
var brandModel = ["Crysler1", "Dodge1", "Tesla1", "VW1"];
var brandHP = [100, 120, 500, 210];
var brandFuel = ["Super", "Diesel", "Strom", "Benzin"];
for (var i = 0; i < 4; i++) {
    var car = new addInfo(brandName[i], brandModel[i], brandHP[i], brandFuel[i]);
    document.getElementById("output").innerHTML += car.add();
}
console.table(arr);
