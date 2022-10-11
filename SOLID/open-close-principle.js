let Color=Object.freeze({
    red:'red',
    green:'green',
    blue:'blue'
})

let Size=Object.freeze({
    small:'small',
    medium:'medium',
    large:'large'
})

class Product {
    constructor(name,color,size){
        this.name=name
        this.color=color
        this.size=size
    }
}


//BAD FILTER 
//open for extension and closed for modification
class ProductFilter {
    filterByColor(products,color){
        return products.filter(p=>p.color===color)
    }

    //bad to modify/add new methods
    filterBySize(products,size){
        return products.filter(p=>p.size===size)

    }

    // we are adding more methods for performing diff actions
    // this is not scalable
    filterBySizeAndColor(products,size,color){
        return products.filter(p=>p.size===size && p.color===color)
    }

    // we cannot keep on adding new methods to infinity
}





let apple=new Product('Apple',Color.green,Size.small)
let tree=new Product('Tree',Color.green,Size.large)
let house=new Product('House',Color.blue,Size.large)


let products=[apple,tree,house]

let pf=new ProductFilter()

for(let p of pf.filterByColor(products,Color.green)){
    console.log(`* ${p.name} ${p.color}`)
}






// BETTER SCALABLE APPROACH
//################################
class BetterFilter {
    filter(items,spec){
        return items.filter(x=>spec.isSatisfied(x))
    }
}

class ColorSpecification {
    constructor(color){
        this.color=color
    }

    isSatisfied(item){
        return item.color===this.color
    }
}

class SizeSpecification {
    constructor(size){
        this.size=size
    }

    isSatisfied(item){
        return item.size===this.size
    }
}

//to do AND or OR we create combinator spec
class AndSpecification {
    constructor(...specs){
        this.specs=specs
    }

    isSatisfied(item){
        return this.specs.every(x=>x.isSatisfied(item))
    }
}

let bf=new BetterFilter()

//green products filter
for(let p of bf.filter(products,new ColorSpecification(Color.green))){
    console.log(`* ${p.name} ${p.color}`)
}


//large and green products
let spec=new AndSpecification(
    new ColorSpecification(Color.green),
    new SizeSpecification(Size.large)
)

console.log('^^^^^^^^^^^^^^^^^')
for(let p of bf.filter(products,spec)){
    console.log(`% ${p.name} ${p.color}`)
}