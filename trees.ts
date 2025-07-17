//General Tree 

class TreeNode2<T>{
    value:T
    children: TreeNode2<T>[]
    constructor(value:T){
        this.value=value
        this.children =[]
    }

    addChild(child:TreeNode2<T>):TreeNode2<T>[]{
        this.children.push(child)
        console.log(`Added ${child.value} to ${this.value}`);
        return this.children;
    }
}

function printTree<T>(node: TreeNode2<T>, indent: string = ""): void {
    console.log(indent + node.value); // print current node with indent
    for (const child of node.children) {
      printTree(child, indent + "  "); // go deeper, add 2 more spaces
    }
  }

const root= new TreeNode2("Root")
const child1 = new TreeNode2("Child 1")
const child2 = new TreeNode2("Child 2")
const child3 = new TreeNode2("Child 3")

console.log(root.addChild(child1))
console.log(root.addChild(child2))
console.log(root.addChild(child3))

printTree(root)


//Binary Tree

class BinaryTree<T>{
    value: T
    left: BinaryTree<T>|null=null
    right : BinaryTree<T>|null

    constructor(value:T){
        this.value =value
        this.left = null
        this.right = null
    }
    inorder<T>(node: BinaryTree<T> | null): void {
        if (node === null) return;
      
        this.inorder(node.left);          // Visit left child
        console.log(node.value);     // Print current node
       this.inorder(node.right);         // Visit right child
      }
}

// const rootB = new BinaryTree(1)
// rootB.left= new BinaryTree(2)
// rootB.right= new BinaryTree(3)
// rootB.left.left= new BinaryTree(4)
// rootB.left.right= new BinaryTree(5)

// rootB.inorder(rootB)



//binary search tree


class BSTNode1<T>{
    value:T
    left: BSTNode1<T>|null
    right:BSTNode1<T>|null

    constructor(value:T){
        this.value = value
        this.left = null 
        this.right = null
    }
}

class BST1<T>{
 root:BSTNode1<T>|null
 constructor(){
    this.root=null
 }
    insert(value:T){
        const newNode= new BSTNode1(value)
        
        if(this.root===null){
            this.root = newNode
            return this
        }

        let current = this.root
         while(true){
            if(current.value===value) return undefined
            if(value < current.value){
                if (current.left===null){
                   current.left = newNode
                    return this 
                }current = current.left
               
            }
            else if(value>current.value){
                if(current.right===null){
                    current.right= newNode
                     return this
                }current=current.right
            }  
         }
    }

    find(value:T){
        let current = this.root
        let found = false
        if (!current) return undefined
        if(current.value === value) return true
         
        while(current && !found){
            if(current !== null){
                if (value<current.value){
                    if (current.left !== null){
                        if (current.left.value=== value){
                           return true
                        }current=current.left
                    } 
                    
                }

                if (value>current.value){
                    if(current.right !== null){
                        if (current.right.value=== value){
                            return true
                        }current=current.right
                    }
                }return false
            }
        }
        
    }
    inorder(){}

}
 
const bs = new BST1()
console.log(bs.insert(4))
console.log(bs.insert(14))
console.log(bs.insert(3))
console.log(bs.insert(21))
console.log(bs.insert(1))
console.log(bs.find(1))



class Treenode<T>{
    value: T
    left: Treenode<T>|null
    right: Treenode<T>|null

    constructor(value:T){
        this.value=value
        this.left=null
        this.right=null
    }

}

class BST2<T>{
    root:Treenode<T>|null

    constructor(){
        this.root=null
    }

    insert(value:T){
        const newNode = new Treenode(value)
        if(this.root === null){
            this.root=newNode
        }

       let current = this.root
       while(true){
        if(value<current.value){
            if(current.left===null){
                current.left=newNode
                return
            }current= current.left
        }
        
        else if(value>current.value){
            if(current.right===null){
                current.right =newNode
                return
            }current = current.right
        }
        else {
            // Duplicate value, ignore or handle as needed
            return
        }
       }
    }
    preorder(node:Treenode<T>|null=this.root, result:T[]=[]){
        if(!node) return []

        result.push(node.value)
        this.preorder(node.left, result)
        this.preorder(node.right, result)

        console.log(`preorder ${result}`)

    }

    inorder(node:Treenode<T>|null=this.root, result:T[]=[]){
        if(!node) return result

        this.inorder(node.left, result)
        result.push (node.value)
        this.inorder(node.right, result)
        
        console.log(`inorder ${result}`)
    }


    postorder(node:Treenode<T>|null=this.root, result:T[]=[]){
        if(!node) return result

        this.postorder(node.left, result)
        this.postorder(node.right, result)
        result.push(node.value)

        console.log(`postorder ${result}`)
    }



    ////SEARCH TREE
    //PSUEDO CODE
    //Start from the root
    //Loop while there are nodes
    //If current matches value, return true
    //If value is smaller, go left
    //Otherwise, go right
    //If we exit the loop, value doesn't exist

    search(value:T){
        if(!this.root) return "Not found: Empty tree"
      
        let current = this.root
       while(current){
        if(value<current.value){
            if(!current.left){return "No left: Not found"}
            current=current.left
        }
        else if(value>current.value){
            if(!current.right) {return "No right: Not found"}
            current=current.right
        }
        else{
            return current
        }
       }
    }

    
    ////DELETE
    //PSUEDO CODE
    //Node is a leaf (no children)	Just remove it
    //Node has one child	Replace the node with its child
    //Node has two children	Replace with inorder successor (smallest node in the right subtree)

    delete(value:T, node:Treenode<T>|null=this.root):Treenode<T>|null{
    if(!node) return null

    if(value<node.value){
        node.left = this.delete(value, node.left)
    }
    else if(value>node.value){
        node.right = this.delete(value, node.right)
    }else{
      //  CASE 1: No children (leaf node)
        if(node.left ===null && node.right === null){
            return null
        }

        // CASE 2: One child (only right)
       else  if(!node.left){
            return node.right
        }
         // CASE 2: One child (only left)
       else if(!node.right){
            return node.left
        }

        // CASE 3: Two children
        else{
            const successor = this.findMinNode(node.right)
            if(successor){
                node.value=successor.value// Replace current value with successor
                node.right = this.delete(successor.value, node.right)// Delete the successor node
            }
        }

    }
    console.log(node)
    return node
    
    }

    findMinNode(node:Treenode<T>):Treenode<T>{
        while(node.left !== null){
            node = node.left
        }
        return node
    }

    findmaxNode(node:Treenode<T>){
     while(node.right !== null){
        node = node.right
     }
     return node
    }

    ////MAX DEPTH OR HEIGHT OF A TREE
    // Recursive Approach
    //We use DFS (Depth-First Search):
    //Base case: if node is null, depth = 0
    //Otherwise, recursively:
    //get left subtree height
    //get right subtree height
    //Return 1 + max(left, right)

    maxDepth(node:Treenode<T>|null=this.root):number{
        if(!node) return 0

        // Recursively get height of left subtree
       let leftHeight = this.maxDepth(node.left)
       // Recursively get height of rightt subtree
       let rightHeight= this.maxDepth(node.right)

       // Height of current node = 1 + max height of left/right subtrees
       return 1+ Math.max(leftHeight, rightHeight)
    }

    minDepth(node:Treenode<T>|null=this.root):number{
        if (node===null) return 0

        let left = this.minDepth(node.left)
        let right= this.minDepth(node.right)

        return 1+ Math.min(left, right)
    }


    ////Diameter of a Tree
    //The diameter of a tree is the length of the longest path between any two nodes in the tree.
    //This path may or may not pass through the root.
    //At every node:
            // Compute left subtree height
            // Compute right subtree height
    // At that node, the local diameter = left height + right height
    // Keep track of the maximum diameter found so far globally.

    treeMaxDiameter(root:Treenode<T>|null=this.root){
        let maxDiameter =0
        function height(node:Treenode<T>|null):number{
            if(!node) return 0

            let leftHeight = height(node.left)
            let rightHeight = height(node.right)

            const localDiameter = leftHeight + rightHeight
            if (localDiameter>maxDiameter){
                maxDiameter = localDiameter
            }
            return 1 + Math.max(leftHeight, rightHeight)
        }
    height(this.root)

    return maxDiameter
        
    }



    ////Count of Nodes
    //Number of all nodes in the tree
    //For both:
    // If node is null, return 0.
    // Otherwise:
    // Count/Sum left subtree
    // Count/Sum right subtree
    // Add 1 (for count) or node.value (for sum)


    countNodes(node:Treenode<T>|null=this.root):number{
        if(!node) return 0

        let leftCount= this.countNodes(node.left)
        let rightCount = this.countNodes(node.right)

      return  1 + (leftCount+rightCount)
    }


    sumNodes(node:Treenode<T>|null= this.root, getValue:(v:T)=>number):number{
        if (!node) return 0

        let leftSum = this.sumNodes(node.left, getValue)
        let rightSum = this.sumNodes(node.right, getValue)

        return getValue(node.value) + leftSum + rightSum
    }


    ////Lowest Common Ancestor (LCA)
    //Find the Lowest Common Ancestor of two nodes in a Binary Tree.
    //The LCA of two nodes p and q is the deepest node that has both p and q as descendants.
    //     Algorithm Approach (Recursive DFS)
    // If the current node is null, return null.
    // If the current node is either of the two target nodes, return it.
    // Recursively:
    // search in the left subtree
    // search in the right subtree
    // If both sides return non-null, current node is the LCA.
    // If one side returns null, return the non-null side.

    lca(valueA:T, valueB:T):T|null{
      let current = this.root

        function findLca(node:Treenode<T>|null, valueA:T, valueB:T):T|null{
        if(!node)return null
        if(node.value===valueA|| node.value===valueB) return node.value

        let leftNode = findLca(node.left, valueA, valueB)
        let rightNode = findLca(node.right, valueA, valueB)

        if(leftNode !==null && rightNode!==null) return node.value
        if(leftNode===null){ return rightNode}
        else {return leftNode}
    }
    return findLca(current, valueA, valueB)
    }


    //Invert / Mirror a Binary Tree
    //To invert (mirror) a binary tree means to swap the left and right child of every node in the tree.
    //     Approach
    // If the node is null, return.
    // Swap left and right child.
    // Recursively invert the left and right subtree.

    invert(node:Treenode<T>|null=this.root):Treenode<T>|null{
        if(!node) return null
          
        //switch nodes
        let temp = node.left
        node.left=node.right
        node.right=temp
        //traverse node
         this.invert(node.left)
        this.invert(node.right)
        //return tree
        console.log(node.value)
        return node  
    }

    ////Check if a Tree is Balanced
    //     For each node, check:
    // Height of left subtree
    // Height of right subtree
    // If the absolute difference ≤ 1, continue
    // If any subtree is unbalanced, the whole tree is unbalanced.
    // ✅ Optimized Approach
    // We can do this in one pass, by:
    // Returning -1 when a subtree is unbalanced
    // Otherwise, return the height

    isBalancedTree(node:Treenode<T>|null=this.root):boolean{
        let current = this.root
    function balancedTree(node:Treenode<T>|null=current):number{
        if (!node) return 0

        let leftheight = balancedTree(node.left)
        if (leftheight=== -1) return -1

        let rightHeight = balancedTree(node.right)
        if (rightHeight=== -1) return -1

        if (Math.abs(leftheight - rightHeight) > 1) {
            return -1;
        } else {
            return 1+ Math.max(leftheight, rightHeight)}   
    }
    console.log(balancedTree(current) !== -1)
    return balancedTree(current) !== -1
    }


    ////Check if a Tree is Symmetric (Mirror of Itself)
    //To check if a binary tree is symmetric, meaning:
    //The left subtree is the mirror of the right subtree.
    //Write a helper function to compare two nodes (left and right).
    // For each pair of nodes:
    // Both must have the same value.
    // The left subtree of one must be a mirror of the right subtree of the other, and vice versa.
    // Start by calling the helper function on root.left and root.right.
     
     isSymetry(node:Treenode<T>|null=this.root):boolean{
        if(!node) return true

        function symetry(left:Treenode<T>|null, right:Treenode<T>|null):boolean{

        if(left === null || right === null) return false
        if(left === null && right === null) return true
        if(left.value !== right.value) return false
        return symetry(left.left, right.right) &&
        symetry(left.right, right.left)
    }
    return symetry(node.left, node.right)
}
    }

const bst = new BST2<number>()

bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(3);
bst.insert(7);
bst.insert(12);
bst.insert(18);

//bst.preorder()
bst.inorder()
//bst.postorder()

console.log(bst.search(18))
// bst.delete(18)
bst.invert()
bst.isBalancedTree()


console.log(`max depth is : ${bst.maxDepth()}`)
console.log(`min depth is : ${bst.minDepth()}`)
console.log(`max diameter is : ${bst.treeMaxDiameter()}`)
console.log(` bst log ${bst.lca(12, 18)}`)
bst.invert()
bst.isBalancedTree()
console.log(bst.isSymetry())

