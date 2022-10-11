const fs =require('fs')

class Journal {

    constructor(){
        this.entries={}
    }
    addEntry(text){
        let c=++Journal.count
        let entry=`${c}:${text}`
        this.entries[c]=entry
        return c
    }
    
    removeEntry(index){
     delete this.entries[index]
    }
    
    
    toString(){
        return Object.values(this.entries).join('\n')
    }

    /* these file related methods are not suitable
    since we may require them for other type of objects
    and keep our Journal class clean */
    // saveJournal(filename){
    //     fs.writeFileSync(filename,this.toString())
    // }

    // load(file){
    //    //......
    // }

    // loadFromUrl(){
    //     //.......
    // }
    
}

// we do all the file related tasks in a separate class
class PersistanceManager {
     saveFile(jounral,filename){
        fs.writeFileSync(filename,jounral.toString())
    }

    load(file){
       //......
    }

    loadFromUrl(){
        //.......
    }
}
    
    Journal.count=0
    let j=new Journal()
    j.addEntry('I cried today')
    j.addEntry('I ate a burger')

    let p= new PersistanceManager()
    let filename='c:/journal.txt'
    p.saveFile(j,filename)
    
    console.log(j.toString())