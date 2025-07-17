class Arraykv<k, v>{
    key:k
    value:v

    constructor(key:k,value:v){
        this.key=key
        this.value=value
        
    }
}

class hashMap<k,v>{
    keyMap:(Arraykv<k, v>)[][]
    size:number
    constructor(size:number){
        this.keyMap = new Array(size).fill(null).map(()=>[])
        this.size=size
    }

    _hash(key:k){
        let index=0
        let prime=31
        //converts key to a string
        let keyString= String(key)
        
        // for (let i = 0; i < Math.min(keyString.length, 50); i++) {
        //     ✅ What it does
        //     It limits the number of characters from the keyString that we process in the loop.
        //     Specifically, if the key is longer than 50 characters, we only process the first 50 characters.
        for(let i=0; i<Math.min(keyString.length, 50); i++){
            let char = keyString[i]
            let value = char.charCodeAt(0)-96
            index = (index*prime+value)%this.keyMap.length
        }
        return index
    }


    set(key:k, value:v){
      let index=  this._hash(key)
      let bucket =this.keyMap[index]

      for(let pair of bucket){
        if(pair.key===key){
            pair.value=value
        }else{
            bucket.push(new Arraykv<k,v>(key, value))
            console.log(`Inserted key "${key}" with value ${value} at index ${index}`);
        }
      }
      
        
    }
    get(key:k):v|null{
        let index = this._hash(key)
        let bucket =this.keyMap[index]

       for(let pair of bucket){
        if(pair.key===key)
        return pair.value
       }
       console.log("key not found")
       return null
    }

    delete(key:k):void{
        let keyString=String(key)
        let index = this._hash(key)
        let bucket = this.keyMap[index]

        for(let i =0; i<bucket.length; i++){
            if (bucket[i].key ===key){
                bucket.splice(i,1)
                console.log(`Removed key "${key}" from index ${index}`);
                
            }else
           { console.log(`Key "${key}" not found, nothing to remove`);}
        }

    }
}




//class work
//handle collision

class ListNode<k, v>{
    key:k
    val:v
    next:ListNode<k, v>|null

    constructor(key:k, val:v, next:ListNode<k, v>|null){
        this.key=key
        this.val=val
        this.next=null
    }
}


class HashMap<k, v>{
    private buckets : Array<ListNode<k, v>| null>
    private size:number

    constructor(size:number =10){
        this.size =size
        this.buckets = new Array(this.size).fill(null)
    }

    private hash(key:k):number{
    const strk = String(key)
    let hash =0

    for(let i=0; i<strk.length; i++){
        hash=(hash +strk.charCodeAt(i)*i)%this.size
    }
    return hash
}

set(key:k, val:v):void{
    const idx =this.hash(key)
    let head = this.buckets [idx]

    let curr =head

    while(curr){
        if(curr.key === key){
            curr.val=val
            return
        }
        curr=curr.next
    }
    let newNode = new ListNode(key, val, head)
    this.buckets[idx]=newNode
}

get(key:k):v|undefined{
    const idx = this.hash(key)
    let curr = this.buckets[idx]
    while(curr){
        if(curr.key === key){
            return curr.val
        }
        return
    }
}

remove(key:k):void{
    const idx = this.hash(key)
    let curr = this.buckets[idx]
    let prev:ListNode<k, v>|null =null
    while(curr){
        if(curr.key==key){
            if(prev){
                prev.next=curr.next
            }else{
                this.buckets[idx]=curr.next
            }
        }
        prev =curr
        curr=curr.next
    }
    return
}
}




//////HOMEWORK
//Hashmap without collision

//HASH FUNCTION FOR STRING

function hash(key:string, hashtable:number):number{
    let hash = 0
    
    for(let i=0; i<key.length; i++){
        let char = key[i]
        hash= hash+ char.charCodeAt(0)
    }
    
    return hash % hashtable
}

console.log(hash("duck", 10))


// Step 1: Define better hash function by multiplying with index
function improvedHash(key:string, arraylength:number):number{
    let hash = 0
    
    for(let i=0; i<key.length; i++){
        let char = key[i]
        hash= hash+ char.charCodeAt(0)*i
    }
    
    return hash % arraylength
}



// Step 2: Initialize hash table
const TABLE_SIZE = 10;
const hashTable: (string | null)[] = new Array(TABLE_SIZE).fill(null);

// Step 3: List of words
const words = ["apple", "banana", "grape", "peach", "berry", "melon", "kiwi", "orange"];

// Step 4: Store each word in hash table
for(const word of words){
let index = improvedHash(word, TABLE_SIZE)
if (hashTable[index]===null){
    // Slot is empty, store word
    hashTable[index]= word
    console.log(`Stored "${word}" at index ${index}`);
}else{
    // Slot already occupied, collision!
    console.log(`Collision occurred for "${word}" at index ${index} (already occupied by "${hashTable[index]}")`);
}

}

console.log("\nFinal Hash Table:");
console.log(hashTable);