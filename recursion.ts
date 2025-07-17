function upsidedown(n:number):void{
    if (n<1) return 
   
    // if(n===1) return 1
    console.log(n)
   upsidedown(n-1)
   console.log (n)
   return
}

console.log (upsidedown(3))


function fac(n:number):number{
    if (n<=1) return 1
    console.log(n)
    return n * fac(n-1)
   
}

console.log (fac(5))



function sum1(n:number):number{
    if (n<1)return 0
    return n + sum(n-1)
}

console.log(sum1(5))



//find the kth(1-indexed) of n rows
// where row 1 = 0
// the first half of every other row is the parent and the second halp is the opposite of the parent
//ie, the 0 of the parent is replaced by 1 and 1 of the parent is replaced by 0

function kthGrammar(n:number, k:number):number{
    if(n<=1 && k ===1) return 0
    let length = Math.pow(2, (n-1))
    let mid = length/2

    if(k<=mid){
        return kthGrammar((n-1), k)
    }
    else{
     return  1- kthGrammar((n-1), (k-mid))
    }

}

function printKthRow(n:number){
    let length = Math.pow(2, (n-1))
    let kthArray=[]
    

    for(let k=1; k<=length; k++){
        if (n===1 && k===1) return 0
        let symbol=(kthGrammar(n, k))
        kthArray.push(symbol)
    }
    console.log(kthArray.join(" "))
}


// console.log(kthGrammar(4,8))
console.log(printKthRow(4))


function josephus<T>(n:number, k:number){
    let array=Array.from({length:n}, (_,i)=>i+1)
    if (n===1) return array[0]

    function helper(array:number[], startIndex:number){
        if(array.length===1){
            return array[0]
        }
        let indexToRemove=(startIndex+k-1)%array.length
        array.splice(indexToRemove, 1)
        return helper(array, indexToRemove)
    }
     return helper(array,0)

}

console.log(josephus(5, 2))




// n == length of list1 + length of list 2
//n= 123, 456
//n4= (k, (mid+ mid)-(mid-k))
//n4 =(4, (2+2)-(2-4))

let array1= [1,3,5]
let array2= [2,4,6]

function merge(array1:number[], array2:number[]){
    let copied =[...array1, ...array2]
   
    let count =0
    

   function helper(copied:number[]):number{
    if (count <1) return 0
    if (count ===1) return copied[0]

    for(let n =1; n<=copied.length; n++){
    count ++
    }
    let mid= count/2
     return helper([count-1, (mid+mid)-(mid-count-1)])
   }
    helper(copied)
}
console.log(merge(array1, array2))

//Definition for a binary tree node.
 class TreeNode {
     val: number
     left: TreeNode | null
     right: TreeNode | null
     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
         this.val = (val===undefined ? 0 : val)
         this.left = (left===undefined ? null : left)
         this.right = (right===undefined ? null : right)
     }

//      isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
//         let left = this.left
//         let right = this.right
     
//         if(p===null && q ===null) return true
         
//         function helper(p: TreeNode | null, q: TreeNode | null):number{
//             if(p===null && q ===null) return 0
//             if(p && q){
//                 let left=(helper(p.left, q.left))
//                 let right=helper(p.right, q.right)

//               p.left===q.left && p.left!.val ===q.left!.val ? 1:0
//                p.right===q.right && p.right!.val ===q.right!.val ? 1:0
                 
            
//                }


                
//             }
            
//         }
        
//      };
  }


