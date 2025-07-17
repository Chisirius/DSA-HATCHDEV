"use strict";
class Arraykv {
    constructor(key, value) {
        this.key = key;
        this.value = value;
    }
}
class hashMap {
    constructor(size) {
        this.keyMap = new Array(size).fill(null).map(() => []);
        this.size = size;
    }
    _hash(key) {
        let index = 0;
        let prime = 31;
        //converts key to a string
        let keyString = String(key);
        // for (let i = 0; i < Math.min(keyString.length, 50); i++) {
        //     ✅ What it does
        //     It limits the number of characters from the keyString that we process in the loop.
        //     Specifically, if the key is longer than 50 characters, we only process the first 50 characters.
        for (let i = 0; i < Math.min(keyString.length, 50); i++) {
            let char = keyString[i];
            let value = char.charCodeAt(0) - 96;
            index = (index * prime + value) % this.keyMap.length;
        }
        return index;
    }
    set(key, value) {
        let index = this._hash(key);
        let bucket = this.keyMap[index];
        for (let pair of bucket) {
            if (pair.key === key) {
                pair.value = value;
            }
            else {
                bucket.push(new Arraykv(key, value));
                console.log(`Inserted key "${key}" with value ${value} at index ${index}`);
            }
        }
    }
    get(key) {
        let index = this._hash(key);
        let bucket = this.keyMap[index];
        for (let pair of bucket) {
            if (pair.key === key)
                return pair.value;
        }
        console.log("key not found");
        return null;
    }
    delete(key) {
        let keyString = String(key);
        let index = this._hash(key);
        let bucket = this.keyMap[index];
        for (let i = 0; i < bucket.length; i++) {
            if (bucket[i].key === key) {
                bucket.splice(i, 1);
                console.log(`Removed key "${key}" from index ${index}`);
            }
            else {
                console.log(`Key "${key}" not found, nothing to remove`);
            }
        }
    }
}
//class work
//handle collision
class ListNode {
    constructor(key, val, next) {
        this.key = key;
        this.val = val;
        this.next = null;
    }
}
class HashMap {
    constructor(size = 10) {
        this.size = size;
        this.buckets = new Array(this.size).fill(null);
    }
    hash(key) {
        const strk = String(key);
        let hash = 0;
        for (let i = 0; i < strk.length; i++) {
            hash = (hash + strk.charCodeAt(i) * i) % this.size;
        }
        return hash;
    }
    set(key, val) {
        const idx = this.hash(key);
        let head = this.buckets[idx];
        let curr = head;
        while (curr) {
            if (curr.key === key) {
                curr.val = val;
                return;
            }
            curr = curr.next;
        }
        let newNode = new ListNode(key, val, head);
        this.buckets[idx] = newNode;
    }
    get(key) {
        const idx = this.hash(key);
        let curr = this.buckets[idx];
        while (curr) {
            if (curr.key === key) {
                return curr.val;
            }
            return;
        }
    }
    remove(key) {
        const idx = this.hash(key);
        let curr = this.buckets[idx];
        let prev = null;
        while (curr) {
            if (curr.key == key) {
                if (prev) {
                    prev.next = curr.next;
                }
                else {
                    this.buckets[idx] = curr.next;
                }
            }
            prev = curr;
            curr = curr.next;
        }
        return;
    }
}
//////HOMEWORK
//Hashmap without collision
//HASH FUNCTION FOR STRING
function hash(key, hashtable) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
        let char = key[i];
        hash = hash + char.charCodeAt(0);
    }
    return hash % hashtable;
}
console.log(hash("duck", 10));
// Step 1: Define better hash function by multiplying with index
function improvedHash(key, arraylength) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
        let char = key[i];
        hash = hash + char.charCodeAt(0) * i;
    }
    return hash % arraylength;
}
// Step 2: Initialize hash table
const TABLE_SIZE = 10;
const hashTable = new Array(TABLE_SIZE).fill(null);
// Step 3: List of words
const words = ["apple", "banana", "grape", "peach", "berry", "melon", "kiwi", "orange"];
// Step 4: Store each word in hash table
for (const word of words) {
    let index = improvedHash(word, TABLE_SIZE);
    if (hashTable[index] === null) {
        // Slot is empty, store word
        hashTable[index] = word;
        console.log(`Stored "${word}" at index ${index}`);
    }
    else {
        // Slot already occupied, collision!
        console.log(`Collision occurred for "${word}" at index ${index} (already occupied by "${hashTable[index]}")`);
    }
}
console.log("\nFinal Hash Table:");
console.log(hashTable);
