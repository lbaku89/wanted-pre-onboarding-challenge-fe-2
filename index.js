/**
 * 과제조건 하단 참조
 * @see {@link https://gist.github.com/pocojang/3c3d4470a3d2a978b5ebfb3f613e40fa}
 */

/**
 * @typedef {number}
 */
let idIndex = 0;

/**
 * @constructor
 */
class ThingsToDo {
    /**
     * 
     * @param {string} contents 
     * @param {boolean} isFinished 
     * @param {string} category 
     * @param {{tagId:number,tag:string}[]} tags 
     */
    constructor(contents,category,tags,){
        this.id=idIndex++;
        this.contents=contents;
        this.isFinished=false;
        this.category=category;
        this.tags=tags;
    }   
}

/**
 * 
 * @param {string} contents
 * @param {string} category
 * @param {{tagId:number,tag:string}[]} tags  
 */
const createThingsToDo=(contents,category,tags)=>{

}


const readAllThingsToDo=()=>{

}

/**
 * 
 * @param {number} id 
 */
const readThingsToDo =(id)=>{

}


/**
 * @param {number} id
 */
const updateThingsToDoPropertyExceptId=(id)=>{

}

/**
 * 
 * @param {number} id 
 * @param {number} tagId 
 */
const updateThingsToDoCertainTag =(id,tagId)=>{

}

/**
 * 
 * @param {number} id 
 */
const deleteThingsToDo=(id)=>{

}

const deleteAllThingsToDo = ()=>{

}

/**
 * 
 * @param {number} id 
 * @param {number} tagId 
 */
const deleteThingsToDoCertainTag = (id,tagId,)=>{

}

/**
 * @param {number} id
 */
const deleteCertainThingsToDoAllTags= (id) =>{

}


