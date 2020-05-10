var Figura = function(id, marca, color, precio) {
    this.id = id;
    this.marca = marca;
    this.color = color;
    this.precio = precio;
}

Figura.prototype.toString = function () {
    return 'id' + this.id + "| marca: " + this.marca;
}

Figura.allFigs = [];
Figura.add = function(aFig){
Figura.allFigs.push(aFig);
}

Figura.findById = function(aFigId){
    var aFig = Figura.allFigs.find(x => x.id == aFigId);
    if(aFig){
        return aFig;
    }else{
        throw new Error(`No existe una figura con el id ${aFigId}`);
    }
}

Figura.removeById = function(aFigId){
    for(var i = 0; i < Figura.allFigs.length; i++){
        if (Figura.allFigs[i].id == aFigId){
            Figura.allFigs.splice(i,1);
            break;
        }
    }
}

var Fig1 = new Figura(1, 'Marvel', 'Rojo', '1200')
var Fig2 = new Figura(2, 'DC Comics', 'Azul', '900')

Figura.add(Fig1);
Figura.add(Fig2);

module.exports = Figura;