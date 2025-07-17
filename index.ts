// // const ids = new Set()

// //  ids.add("ada")
// // ids.add('obi')
// // ids.add(2)



// // console.log(ids)

// // for (const allIds of ids){
// //     console.log(allIds)
// // }

// // console.log(ids.has("ada"))


// // class LinkedList{
// //     head:any
// //     tail:any

// //     constructor(){
// //         this.head = null;
// //         this.tail = null
// //     }

// //     append(value:any):void{
// // const newNode ={value:value, next:null};
// // if(this.tail){
// //     this.tail.next =newNode;
// // }
// // this.tail = newNode

// // if (!this.head){
// //     this.head=newNode
// // }
// //     }


// // prepend(value:any):void{
// //     const newNode ={value:value, next:this.head};
// //     this.head = newNode

// //     if (!this.tail){
// //       this.tail=newNode
// //     }
// // }

// // delete(value:any){
// //     if(!this.head){
// //         return;
// //     }

   
// //     while (this.head && this.head.value ===value) {
// // this.head = this.head.next
// //     }

// //     let curNode = this.head

// //     while (curNode.next){
// //         if (curNode.next.value === value){
// //             curNode.next = curNode.next.next
// //         }else {
// //             curNode = curNode.next
// //         }

// //         if (this.tail.value === value){
// //             this.tail =curNode
// //         }
// //     }
    

// // }


// //     toArray():any{
// //         const elements = []

// //         let curNode = this.head;
// //         while(curNode){
// //             elements.push(curNode)
// //             curNode=curNode.next
// //         }
// //         return elements
// //     }
// // }

// // const linkedList = new LinkedList()
// // linkedList.append(1)
// // linkedList.append("hello there")
// // linkedList.append("Lilian")
// // linkedList.append(true)
// // linkedList.append(18.52)
// // linkedList.prepend("First value")
// // linkedList.delete(18.52)

// // console.log(linkedList.toArray())



// const num =[0, 5, 5, 10, 10, 15, 15, 20]

// class array{
// numbers:number[]
//     constructor(numbers:number[]){
//         this.numbers=numbers
//     }

//     listArr():number[]|undefined|number{
//     let un =[]
//         for(const arrList of this.numbers){
//             if (this.numbers.length ===0) return undefined
//             if (this.numbers.length >0){
                
//                 un.push(arrList)
//             }
//         }
//         return un

//     }

//     findmax():number{
//         if(this.numbers.length===0){
//             throw new Error("Array is empty");
//         }

//         let max =this.numbers[0]

//         for(let i=1; i < this.numbers.length; i++){
//             if (this.numbers[i]>max){
//               max=this.numbers[i]
//             }
//         }
//         return max
//     }

//     findNextmax():number|null{
//         if (this.numbers.length < 2) return null;
        
//         let max = -Infinity
//         let secMax = -Infinity

//         for(const num of this.numbers){
//           if(num>max){
//             secMax = max
//             max = num
//           }
//           else if(num>secMax && num<max){
//                 secMax=num
//             }
//           }
        
//           return secMax === -Infinity ? null : secMax;
//         }
    



//     reverseArr():number[]{
//         const age =[]

//         for (let i = this.numbers.length-1; i>=0; i--){
//             age.push(this.numbers[i])
//         }
//         return age
//     }

//     sumArr():number{
//         let start =0

//       for  (let i = 0; i<this.numbers.length; i++){
//         start += this.numbers[i]
//     }
//     return start
// }


// removeDuplicates(){
//     return Array.from(new Set(this.numbers))
// }



// }

// const deMax= new array(num)
// // console.log(deMax.findmax())

// //  console.log(deMax.reverseArr())
// //  console.log(deMax.sumArr())

// //  console.log(deMax.listArr())
// //  console.log(deMax.findNextmax())
// //  console.log(deMax.removeDuplicates())



// // const number=[0, 1, 2, 3, 4, 5 ]

// // function findMax(arr:number[]){
// //     let max=arr[0];

// //     for(let i = 1; i<arr.length; i++){
// //         if(arr[i]> max){
// //             max = arr[i]
// //         }
// //     }
// //     return max
// // }

// // console.log(findMax(number))

// // function reverseArr(arr:number[]){
// //     const reversed:number[] =[]

// //     for (let i = arr.length-1; i >=0; i--){
// //         reversed.push(arr[i])
// //     }
// //     return reversed
// // }

// // console.log(reverseArr(number))


// // let arr =new Array().fill(n).map(()=>[])
// // let LastAnswer=0
// // let answers =[]
// let query = [
//     [1, 0, 5],
//     [1, 1, 7],
//     [1, 0, 3],
//     [2, 1, 0],
//     [2, 1, 1]
//   ];
// // ^

// let n =2
// function dynamicArray(n:number, query:number[][]):number[]{
//     let arr:number[][]= new Array(n).fill(0).map(()=>[])
//     let LastAnswer=0
//     let answers: number[] = [];
    



// for (let i=0; i<query.length; i++){
//     let[type, x, y] = query[i]
//     let idx =(x ^ LastAnswer) % n

//     if (type ===1){
//        // Type 1: Append y to the row at arr[idx]
//        arr[idx].push(y)
//     }
//     else if( type ===2){
//        let value = arr[idx][y % arr[idx].length];
//        LastAnswer = value
//        answers.push(LastAnswer)
//     }
// }
// return answers
// }

// console.log (dynamicArray(n, query))


// let array 




// ///assignment: implement your own array methods
// const originalArray = [10, 20, 30, 40]
// class ArrayMethod<T>{
// private data : {[index:number]:T}   //stores the inbuilt array with an key which is a number  
// private _length : number            // used for assigning index and measuring length

// //the constructor runs once when the object is instanciated
//     constructor(inputArray: T[]){
//         this.data ={}                //initiates this.data to an empty object
//         this._length = 0

//         for(let i=0; i in inputArray; i++){
//             this.data[this._length] = inputArray[i]   //updates this.data[@ the index] with the corresponding input array property
//             this._length++                             //increment this.length aswell as update this.data index.
//         }
//     }  //constructor ends



//      //(No: 1)
//      //array.length method finds the length of the array 
//      //0(1) operation
//     get length():number{
//         return this._length
//     }

     
//      //(No: 2)
//      //array.unshift adds element to the begining of an array
//      //0(n) operation
//     unshift(value:T):number{
        
//         if(this._length===0){
//         this.data[this._length] = value
//          this._length++;
//         } 
// else {for (let i = this._length; i > 0; i--) {  //loop through array index from behind
//     this.data[i] = this.data[i - 1];
//   }

//   this.data[0] = value;
//   this._length++;}

//   return this._length;
//     }

    
//     //(No: 3)
//     //array.shift removes element at the end of an array
//     //0(n) operation
//  shift(){
//   if (this._length===0)return undefined

//   let firstItem= this.data[0]
//   for(let i=1; i<this._length; i++){
//     this.data[i-1] =this.data[i]
//   }
//   delete this.data[this._length-1]
//   this._length--
//   return firstItem
//  }


//      //(No: 4)
//      //adds element to the back of an array 0(1) operation
//     push(value: T): number {
//         this.data[this._length] = value; // store the new value at the next free index
//         this._length++;                  
//         return this._length;             
//       }

//        //(No: 5)
//        //removes element from the back of an array 0(1) operation
//       pop(): T | undefined {
//         if (this._length === 0) return undefined; // nothing to remove
    
//         const lastItem = this.data[this._length - 1]; // get the last item
//         delete this.data[this._length - 1];          // remove it from storage
//         this._length--;                              
//         return lastItem;                             
//       }

//       //(No: 6)
//       //get element by index
//       //o(1)operation
//       get(index: number): T | undefined {
//         return this.data[index]; // return the value at index, or undefined if it doesn't exist
//       }

       
//       //(No: 7)
//       //deletes an element from anywhere in an array
//       //o(n) operation
//       delete(index: number): T|undefined {
//         // Validate the index
//         if (index < 0 || index >= this._length) return undefined;
    
//         // Shift all elements after the index one step to the left
//         let deletedItem = this.data[index]

//         for (let i = index; i < this._length - 1; i++) {
//           this.data[i] = this.data[i + 1];
//         }
//         delete this.data[this._length - 1];
//         this._length--
//         return deletedItem
//       }

//        //(No: 8)
//        //Adds an element to anywhere in an array
//        //o(n) operation
//        splice(index: number, value: T): void {
//             if (index < 0 || index >= this._length) {
//               throw new Error("Index out of bounds")
//           }
//           for(let i=this._length; i>=index; i--){
//             this.data[i]=this.data[i-1]
//           }
//           this.data[index]=value
//           this._length++
//           }

        
//           //(No: 8)
//           //.forEach() method loops over every element in an array 
//           //and executes a callback function once for each element.
//           //o(n) operation
//           _forEach(callback: (item: T, index: number) => void): void {
//             for (let i = 0; i < this._length; i++) {
//              let array= callback(this.data[i], i);
//              console.log(`${i}: ${this.data[i]}`)
//             }
        
//           }


//           //(No: 9) 
//           // .filter() method creates a new array with all elements that pass the test
//           // implemented by the provided callback function.
//           // o(n) operation
//           _filter(callback: (item: T, index: number) => boolean):{ item: T; index: number }[] {
//             const result:{item:T; index:number}[] = []
          
//             for (let i = 0; i < this._length; i++) {
//               if (callback(this.data[i], i)) {
//                 result.push({item:this.data[i], index:i});
//               }
//             }
          
//             return result;
//           }


         
//           // (No: 10) .
//           // .indexOf() method returns the **first index** at which a given element 
//           // can be found in the array, or -1 if it is not present.
//           // O(n) operation
//           _indexOf(item: T): number {
//             for (let i = 0; i < this._length; i++) {
//               if (this.data[i] === item) return i;
//             }
//             return -1;
//           }
           

//           //(No: 11) 
//           // .includes() method checks if an array contains a certain value.
//           // Returns true if found, false otherwise.
//           // O(n) operation
//           _includes(item: T): boolean {
//             return this._indexOf(item) !== -1;
//           }

//             // (No: 12) 
//             // Built in reverse method swaps elements from both ends moving toward the center.
//             // Modifies the original array directly without creating a new one.
//             // Time Complexity: O(n)
//             // Space Complexity: O(1)
//           _reverse():T[]{
//             let reversed: T[] =[]
//             let mid = Math.floor(this._length /2)
//             for(let i=0; i<mid; i++){
//                 let temp = this.data[i]
//                 this.data[i]=this.data[this._length-1-i]
//                 this.data[this._length-1-i]=temp
//             } 
            
//             for (let i=0; i<this._length; i++){
//                 reversed[i]=this.data[i]
//             }
//             return reversed
           
//           }

//             // (No: 13) 
//             // Copy-based reverse method creates a new array and fills it from the original in reverse order.
//             // Does not modify the original array.
//             // Time Complexity: O(n)
//             // Space Complexity: O(n)
//           reverseCopy(): T[]{
//             let reverse =[]
//             let j=0
//             for (let i=this._length-1; i>=0; i--){
//                 let temp= this.data[i]
//                 reverse[j]=temp
//                 j++
//             }
//             return reverse
//           } 

        
//             // (No: 14) this is the serial number.
//             // .reduce() method executes a reducer function on each element of the array,
//             // resulting in a single output value (accumulator).
//             // O(n) operation

//           _reduce<U>(callback:(accumulator:U, currentValue:T, index:number)=>U, initialValue:U) {
//             let accumulator = initialValue
//             for (let i=0; i<this._length; i++){
//                 accumulator = callback(accumulator, this.data[i], i)
//             }
//             return accumulator
//       }

//         // (No: 15) this is the serial number.
//         // .map() method creates a new array by applying a callback function 
//         // to each element in the original array.
//         // O(n) operation
//       _map(callback: (item:T, index:number)=>T):T[]{
//         let mapped =[]
//         for(let i=0; i<this._length; i++){
//           let called=  callback(this.data[i], i)
//             mapped[i] = called
//         }
//         return mapped
//     }

//     // (No: 16) this is the serial number.
//     // .slice() method returns a shallow copy of a portion of an array 
//     // into a new array, selected from start to end (end not included).
//     // The original array is not modified.
//     // O(n) operation (where n is the number of elements copied)
//     _slice(start:number, omit:number):T[]{
//         let sliced=[]
//         if (start<0){start =0}
//         if (omit>this._length){omit = this._length}
//         let index:number =0
//         for(let i=start; i<omit; i++){
//         sliced[index]= this.data[i]
//         index++
//         }
//         return sliced
//     }
    
        
//         }

       


// const workings = new ArrayMethod(originalArray)
// // const filter =workings._filter((i,)=>i!==10)
// const _map =workings._map((i)=>i-10)
// console.log(_map)
// // console.log(filter)
// console.log(workings.reverseCopy())


// console.log(workings._reduce((accumulator, currentValue) => accumulator+currentValue, 0))
// // console.log (workings)
// // console.log (workings.unshift(2))
// // console.log (workings)
// // ArrayMethod
    

// console.log(workings._slice(2, 4))





////LINKED LIST

class Node1<T>{
  value:T
  next:Node1 <T>| null

  constructor(value:T){
    this.value=value
    this.next=null
  }

}


class LinkedList<T>{
  head :Node1 <T>| null
  tail: Node1 <T>| null
  nodes: Node1<T>[] = [];
  constructor(){
    this.head =null
    this.tail =null
    this.nodes = [];
  }

  // printAll(){
  //   let current = this.head
  //   this.nodes = [];
    
  //   while(current){
  //     this.nodes.push(current);
  //     current = current.next
     
  //   }
  //   return this.nodes
    
  // }

  printValues(){
    let current = this.head
    let values: T[] = []
    let count = 0

    while(current !== null){
      values.push(current.value)
      count++
      current=current.next
    }
   console.log(values)
}


countValues():number{
 let count =0
 let current = this.head

 while(current !== null){
  count++
  current = current.next
 }
 console.log(count) 
 return count
}

crownValue(value:T){
  let newNode = new Node1(value)
  
   
  if(!this.head){
    this.head=newNode
    this.tail=newNode
  }else{
    newNode.next = this.head
    this.head = newNode
  }
  
 this.printValues()
  }

  tailValue(value:T){
    let newNode = new Node1(value)
    let current =this.head
    if (!current){
      this.head =newNode
     
      return
    }

    while(current!.next !== null){
      current = current!.next
    }
    current.next = newNode
     this.printValues()
  }



   mid1Value(value:T, index:number){
    const newNode = new Node1(value)
    let current =this.head
    let count =0


  if (index < 0) throw new Error("Invalid index");

  if (index === 0) {
    this.crownValue(value);
  }
  
    while(current !== null && count<index-1 ){
      current =current.next
      count++ 
    }

    if (!current) throw new Error("Index out of bounds");

   newNode.next =current.next
   current.next = newNode
   this.printValues()

   }

   delete(index:number){
    let current = this.head
    let count = 0


    while (current !== null && count< index-1){
      current=current.next
      count ++
    }
    current!.next=current!.next!.next
    this.printValues()
    this.countValues()
   }
   
}



let list = new LinkedList<number>();
// list.printAll()
// list.printValues()
// console.log(list.countValues())
// list.crownValue(110)
// list.crownValue(100)
// list.crownValue(50)
// list.tailValue(150)
// list.tailValue(250)
// list.mid1Value(15, 2)
// list.printAll()
// list.delete(2)





//DOUBLY LINKED LIST

class Node2<T>{
  value:T
  next:Node2 <T>| null
  previous: Node2 <T>| null

  constructor(value:T){
    this.value=value
     this.next =null
     this.previous=null
  }
}



class DoublyLinked<T>{
  head:Node2<T> | null
  tail:Node2<T> | null
  nodes:Node2<T>[] =[]

  constructor(){
    this.head=null
    this.tail=null
    this.nodes= []
  }

  append(value:T){
    const newNode = new Node2(value)

if (!this.head){
  this.head=newNode
  this.tail=newNode
  // this.nodes.push(newNode)
}else{
  this.tail!.next=newNode
  newNode.previous=this.tail
  this.tail=newNode
}
    this.traverse()
  }

  prepend(value:T){
    const newNode=new Node2(value)
   if(!this.head){
    this.head =newNode
    this.tail =newNode
   }else{
    
   newNode.next=this.head
   this.head.previous=newNode
   this.head=newNode}
    this.traverse()
  }

traverse(){
  let current=this.head
  let nodeValues:T[]=[]
  this.nodes =[]
  let length= 0

  while(current){
this.nodes.push(current)
nodeValues.push(current.value)
length++
current = current.next
  }
  console.log(nodeValues)
  }


  // let traversed=this.nodes.map(i=> i.value)
  //console.log(traversed)


traverseReverse(){
  
  let current =this.tail
  this.nodes=[]
  while(current!==null){
    this.nodes.push(current)
     current=current.previous 
  }
  let traversed=this.nodes.map(i=> i.value)
  console.log(traversed)
}

midInsert(value:T, index:number){
let newNode=new Node2(value)
let count = 0
let current=this.head
// this.nodes=[]

if (index < 0) throw new Error("invalid index") 

// while(current !== null && count < index-1){
//   current =current.next
//   count++
// }
// if (!current){
//   throw new Error("out of bound");
//   }else{

// newNode.next=current!.next
// current!.next!.previous =newNode
// newNode.previous=current
// current!.next=newNode
// }

while(current!==null && count<index-1){
    current=current.next
    count++
}

if (!current){
throw new Error("out of bound");
}

newNode.next=current.next
newNode.previous =current

if(current.next){
  current.next.previous=newNode
}else {
  // If inserting at the end, update tail
  this.tail = newNode;
}
current.next=newNode
this.traverse()

}
}

let double = new DoublyLinked()
// double.append(25)
// double.append(35)
// double.append(45)
// double.traverseReverse()
// double.traverse()
// double.prepend(15)
// double.prepend(20)
// double.prepend(30)
// double.midInsert(30, 2)
// double.midInsert(20, 1)
// double.prepend(15)
// double.midInsert(40, 5)
// double.midInsert(50, 7)


// let stack = [0, 1, 2, 3, 4,]


class Queue<T>{
first :Node1 <T>| null
last :Node1 <T>| null
length:number
node:T[]

  constructor(){
    this.first= null
    this.last= null
    this.length=0
    this.node= []
  }

  enqueue(value:T){
  let newNode = new Node1(value)
  

  if(this.isEmpty()){
    this.first=newNode
    this.last=newNode
  }
  
  else{
    this.last!.next =newNode
    this.last! = newNode
    
  }
  
  this.node.push(newNode.value)
  this.length++
  return this.node 
  }

  dequeue(): T | string {
    if (this.isEmpty()) return 'Queue is empty, nothing to pop'
  
    const popped = this.first!
    this.first = this.first!.next
    this.length-- 
  
    if (this.length === 0) {
      this.last = null
    }
    
    return popped.value
  }

  peek(){
    if (this.isEmpty()) return 'Queue is empty, nothing to peek'
     console.log(this.first!.value)
    return this.first!.value
  }

  isEmpty(){
    return this.length==0
  }

  traverse(){
    let length=0
    for(let i =0; i<this.length; i++){
     this.node[i]
      length++
    }
    return length
  }

  printQueue(){
    let current = this.first
    let result:T[]= []

    while(current){
      result.push(current.value)
      current =current.next
    }
    console.log (result)
    return result
  }
}



let queued = new Queue()
// console.log(queued.traverse())
// console.log(queued.enqueue(1))
// console.log(queued.enqueue(2))
// console.log(queued.enqueue(3))
// queued.peek()
// console.log(queued.traverse())
// console.log(queued.dequeue())
// queued.printQueue()
// queued.peek()
// console.log(queued.traverse())



class SingleCircular <T>{
  head: Node1<T>|null
  tail: Node1<T>|null
  count: number 

  constructor(){
    this.head = null
    this.tail = null
    this.count =0
  }

  traverseCircular(){
    let current = this.head
    let circularNode:T[]=[]
    let count = 0

    if(!this.head){
    (console.error("nothing to tranverse"))
    return
    }
    
   do{
    circularNode.push(current!.value)
    count++
    current=current!.next
    }while(current !== this.head)
      
    this.count = count
    console.log(this.count)
    console.log(circularNode)
  }


  prepend(value:T):void{
    let newNode = new Node1(value)
    if (!this.head){
      this.head=newNode
      this.tail =newNode
      newNode.next=this.head
    }
      else{
        newNode.next=this.head
        this.head=newNode
         this.tail!.next=this.head
      }
      this.traverseCircular()
  }

   append(value:T){
    let newNode = new Node1(value)
    if (!this.head){
      this.head=newNode
      this.tail =newNode
      newNode.next=this.head
    }else{
      this.tail!.next =newNode
      this.tail=newNode
      newNode.next=this.head
    }
      this.traverseCircular()
   }

   insert(value:T, index:number){
    let newNode = new Node1(value)
    let current = this.head
    let count=0
    
    if (this.isEmpty()){
      this.head=newNode
      this.tail =newNode
      newNode.next=this.head
      return
    }
    
    if (index <= 0){
      console.error("please call prepend method")
      return
    }
    if (index > this.count-1){
      console.error("please call append method")
      return
    }

    if(index > this.count){
      console.error("index out of bound")
      return
     }

    while(current !==null && count < index-1){
      count++
      current = current!.next
    }
    newNode.next=current!.next
    current!.next=newNode
  
    this.traverseCircular()
   }

   delete(index:number){
    let current = this.head
    let previous =this.tail
    let count=0
    if(!this.head || index < 0){
      console.error("nothing to delete");
      return
    }
    do{
      if(count ===index){
        if(this.head === this.tail){
        this.head=null
        this.tail = null
        }else if(current ===this.head){
        this.head =this.head!.next
        this.tail!.next=this.head
      }else if(current === this.tail){
        this.tail =previous
        this.tail!.next=this.head
      }else{
        previous!.next= current!.next
      }
      this.traverseCircular()
      return
      
      }
      previous =current
      current = current!.next
      count++
    }while(current !== this.head)

    

   }
   isEmpty(): boolean {
    return this.head === null;
  }
}


let cll =new SingleCircular()
// cll.traverseCircular()
// cll.prepend(5)
//  cll.prepend(4)
//  cll.append(6)
//  cll.insert(0, 2)
//  cll.delete(3)



class DoublyCircular<T>{
  head:Node2<T>|null
  tail:Node2<T>|null
  count:number

  constructor(){
    this.head =null
    this.tail=null
    this.count=0
  }

  

  traverse(){
    let current = this.head
    let node: T[] = []
    let count = 0

    if(!this.head){
      console.log("empty list")
      return
    }

    do{
      node.push(current!.value)
    current = current!.next
    count++
  }while(current !== this.head)
   console.log(node)
  }

  prepend(value:T){
    let newNode =new Node2(value)
  
   if(!this.head){
    this.head =newNode
    this.tail =newNode
    this.tail.next =this.head
    this.head.previous =this.tail
   }else{
  newNode.next = this.head
  newNode.previous = this.head.previous
  this.head!.previous!.next = newNode
  this.head=newNode}
  
  this.traverse()
  }

  append(value:T){
    let newNode = new Node2(value)
    let count = 0
    let current = this.head
  }

}

let dcll = new DoublyCircular()
//  dcll.prepend(1)
//  dcll.prepend(0)
//  dcll.prepend(-1)
//  dcll.prepend(2)



//find the sum of n Terms
function sum(n:number):number{
  if (n<2){ return 1
  }else
  return n + sum(n-1)
}


console.log (sum(5))







 //HASH MAP

//  const map = new Map<string, number|string>()
//  console.log (map.set("FirstName", "Simon"))
//  console.log(map.get("FirstName"))
//  console.log(map.has("FirstName"))
//  console.log(map.delete("FirstName"))
//  console.log(map.has("FirstName"))




//TREES
 class BSTNode{
  val:number
  left:BSTNode|null
  right:BSTNode|null

  constructor(val:number, left: BSTNode|null=null, right:BSTNode|null=null){
    this.val=val
    this.left=left
    this.right=right
  }
 }

 class BST{
  root:BSTNode|null
  constructor(root:BSTNode|null=null,){
    this.root =root
  }
  search(val:number):BSTNode|null{
    let head= this.root

    if(head==null){
      return null
    }

    while(head){
    if (val>head.val){
      head = head.right
    }else if(head.val<val){
      head=head.left
    }else{
      head = head.right
    }
  }
    return null
  }


  addNode(val:number){
    let head= this.root
    const node = new BSTNode(val)

    if(head == null){
      this.root=head
      return
    }
    while(head){
      if(val<head.val){
        if (head.left == null){
          head.left = node 
          return
        }
          head = head.left
          continue
      }else if (val>head.val){
          if(head.right==null){
            head.right=node
            return
          }
            head= head.left
            continue
          
        }
        else{ return null}
        }
      }
    
      deleteNode(root:BSTNode|null, val:number):BSTNode|null{
        if(root==null)return null

        if(root.val==val){
          if(root.left==null && root.right ==null){
            return null
          }
          else if(root.left==null){
            return root.right
          }else if(root.right ==null){
            return root.left
          }

          let pred = root
          while(pred.right !== null){
            pred = pred.right
          }
          root.val =pred.val
          root.left =this.deleteNode(root.left, pred.val)
        }
        root.left =this.deleteNode(root.left, val)
        root.right =this.deleteNode(root.right, val)
        return root
      }
    }
 
    
    function main(){
      const tree= new BST()
      tree.addNode(15)
      tree.addNode(12)
      tree.addNode(20)
      tree.addNode(16)
    
    console.log(tree)
  }

  main()

  function factorial1(num:number){
    let total =1
    for(let i= num; i>0; i-- ){
     total *= i
    }
    return total
    
  }
  console.log(factorial1(4))

  function factorial(num:number):number{
    if(num ===1) return 1
    return num * factorial(num-1)
  }

  // console.log(factorial(4))
  // console.log(factorial(5))



  function power(base:number, exponent:number){
    let total = 1

    for(let i = 0; i<exponent; i++ ){
      total *=base
    }
    return  total
    
  }

  console.log(power(5, 1))
  
  function powerR(base: number, exponent: number): number {
  if (exponent === 0) return 1;
  return base * powerR(base, exponent - 1);
}

  console.log(powerR(2,2))

  function powerh(base: number, exponent: number): number{
    if (exponent === 0) return 1

    function helper(exponent:number):number{
      if (exponent === 1) return base
     return  base * helper(exponent -1)
    }
    return helper(exponent)
  }
 console.log (powerh(2, 4))


 //write a function  factorial which accepts a number and returns the factorial of that number. 
 //A factorial is the product of an integer and all the integers below it;
 //e.g factorial(4) is equal to 24, because 4*3*2*1 equals 24.
 //factorial 0 is always 1


 function factorial2(num:number):number{
  if (num<=1) return 1
  return num * factorial2(num-1)
 }

//  console.log(factorial2(0))

 //write a function productOfArray which takes in an array of numbers 
 //and returns the product of them
 
 function productOfArray(arr:number[]):number{
  if (arr.length ===1) return arr[0]
  if (arr.length ===0) return 0
  return arr[0] * productOfArray(arr.slice(1));
 }
 console.log(productOfArray([2,4,10]))

 //write a function which accepts a number and adds up all the numbers 
 // from 0 to the number passed in the function

 function recursiveRange(num:number):number{
  if (num <=0) return 0
  return num + recursiveRange(num-1)
 }
 console.log(recursiveRange(-1))


 //Write a recursive function called fib which accepts a number 
 //and returns the nth number in the fibonacci sequence. 
 //recall that the fibonacci sequence is the squence of whole numbers 
 //1,1 2, 3, 5, 8,... which starts with 1 and 1, 
 //and where every number therafter is equal to the sum of the previous two numbers

 //it starts from 1
 //0+1 =1
 //1+1 = 2
 //2+ 1= 3
// 3+2 = 5

 function fib (num:number):number{

  //if (total.length === num) return total[num]
  
  if (num===1)  return 1
  if (num===0) return 0
  
  return fib(num-1) + fib(num-2)
   
 }
 console.log(fib(17))


 function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {

  if(p===null && q ===null) return true
  if(p===null || q ===null) return false
  if(p.val !== q.val) return false

  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
};

 //more recursive challenges

 //1. rwrite a recursive function called reverse which accepts a string and returns a new sting in reverse
 //2. write a function called isPalindrome which returns true if the string passed to it is a palindrome (reads the same forward and backward). otherwise it returns false
 //3. write a recursive function called some recursive which accepts an array and a callback. the function returns true if a single value in the array returns true when passed to the callback. othewise it returns false
 //4. write a recursive function called flatten which accepts an array of arrays and returns a new array with all values flattened


 //solve a recursive function that return two numbers that when sumed returns n
 //function twoSum(nums: number[], target: number): number[] 
  
  
