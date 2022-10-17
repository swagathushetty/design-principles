class Document {

}

class Machine {
    constructor(){
        if(this.constructor.name==="Machine"){
            throw new Error("Machine is abstract")
        }
    }
    print(doc){}
    fax(doc){}
    scan(doc){}
}

//we require the 3 methods so , there is no issue overwriting the methods
class MultiFunctionPrinter extends Machine {
    print(doc){
        //
    }
    fax(doc){
       //
    }
    scan(doc){
        //
    }

}
class NotImplementedError extends Error {
    constructor(name){
        let msg=`${name} is not implemented`
        super(msg)
        if(Error.captureStackTrace){
            Error.captureStackTrace(this,NotImplementedError)
        }
    }
}
//here we only require the print() method
//we can ignore to do nothing but it will make the method available for calling violating the least surprise principle
//so we need to throw Error if someone tries to call the non available methods 
class OldFashionedPrinter extends Machine {

        print(doc){
            //
        }
        // fax(doc){
        // // do nothing
        // //but principle of least suprise is violated here
        // }
        scan(doc){
            // throw new Error('not implemented') //this is also valid
            throw new NotImplementedError('OldFashionedPrinter.scan')  //very clean way
        }
    
}
let printer= new OldFashionedPrinter()

printer.scan()

//the above way of throwing error is also not the best approach
//we will segregate into diff classes or interfaces
//ISP=segregate /split up
class Printer {
    constructor(){
        if(this.constructor.name==="Printer"){
            throw new Error('Printer is abstract')
        } 
    }
    scan(){}
}

class Scanner {
    constructor(){
        if(this.constructor.name==="Scanner"){
            throw new Error('Scanner is abstract')
        }
    }
}


