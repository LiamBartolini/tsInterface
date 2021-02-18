interface ICompare {
    Superiore(x : A) : boolean;
}

abstract class A implements ICompare {
    _id : string;

    constructor(id : string) {
        this._id = id;
    }
    
    Superiore(x : A) : boolean {
        if (this instanceof AL && x instanceof AL) {
            if (this.Aereodinamica > x.Aereodinamica) {
                return true;
            } else {
                return false;
            }
        } else if (this instanceof AM && x instanceof AM) {
            if (this.value > x.value) {
                return true;
            } else {
                return false;
            }
        } else {
            return false;
        }
    }
}

class AL extends A {
    private _aerodinamica : number;    
    public get Aereodinamica() : number {
        return this._aerodinamica;
    }

    constructor(aerodinamica : number, id : string) {
        super(id);
        this._aerodinamica = aerodinamica;
    }
}

class AM extends A {
    private _cv : number;    
    public get value() : number {
        return this._cv;
    }

    constructor(cavalli : number, id : string) {
        super(id);
        this._cv = cavalli;   
    }
}

// Test
var aereo : AL = new AL(10, 'a');
var aereo2 : AL = new AL(7, 'b');
var aereo3 : AM = new AM(150, 'am');
var aereo4 : AM = new AM(190, 'ab');
// Outuput
console.log(`comparazione aereo - aereo2:\t${aereo.Superiore(aereo2)}`);
console.log(`comparazione aereo - aereo4:\t${aereo.Superiore(aereo4)}`);
console.log(`comparazione aereo3 - aereo4:\t${aereo3.Superiore(aereo4)}`);
console.log(`comparazione aereo4 - aereo3:\t${aereo4.Superiore(aereo3)}`);