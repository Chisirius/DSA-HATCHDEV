//isAnagram
function isAnagram(s:string, t:string):boolean {
    if (s.length !== t.length) return false;

    const sortedS = s.split('').sort().join('');
    const sortedT = t.split('').sort().join('');
    console.log(sortedS === sortedT)

    return sortedS === sortedT;
}




//Given an array of strings strs, group the anagrams together. You can return the answer in any order.

// ✅ Problem Restatement
// Given an array of strings strs, group all the strings that are anagrams of each other together.

// You should return a 2D array, where each sub-array contains strings that are anagrams of each other.

// ✅ Example
// js
// Copy
// Edit
// Input: strs = ["eat","tea","tan","ate","nat","bat"]
// Output: [["eat","tea","ate"],["tan","nat"],["bat"]]
// ✅ Approach
// Create a Map (or object) to group strings.

// For each string, sort the characters alphabetically — this sorted version is the key.

// Add the original string to the list of the corresponding sorted key in the map.

// Return all grouped arrays.

// ✅ Code Example
// javascript
// Copy
// Edit
function groupAnagrams(strs:string) {
    const map = new Map();

    for (let str of strs) {
        // Sort characters in the string to create a key
        const key = str.split('').sort().join('');
        
        // If key not in map, initialize with an empty array
        if (!map.has(key)) {
            map.set(key, []);
        }
        
        // Push the original string to the corresponding key group
        map.get(key).push(str);
    }

    // Return the grouped anagrams as an array of arrays
    return Array.from(map.values());
}
// ✅ Time and Space Complexity
// Time Complexity: O(n * k log k)

// n = number of strings

// k = maximum length of a string (because sorting each string is O(k log k))

// Space Complexity: O(nk)

// For storing the grouped anagrams.

