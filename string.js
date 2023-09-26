/*
 * ! check if the string is palindrome ;
 */

function isAlphaNum(char) {
  if (char >= "a" && char <= "z") return true;
  else if (char >= "0" && char <= "9") return true;
  else return false;
}
//A man, a plan, a canal: Panama ;
//a man, a plan, a canal: panama ;

function isPalindrome(s) {
  let i = 0;
  let j = s.length - 1;
  let newS = s.toLowerCase();
  while (i < j) {
    let bool1 = isAlphaNum(newS[i]);
    let bool2 = isAlphaNum(newS[j]);
    if (!bool1) i++;
    if (!bool2) j--;

    if (bool1 && bool2) {
      if (newS[i] !== newS[j]) return false;
      else {
        i++;
        j--;
      }
    }
  }
  return true;
}

// console.log(isPalindrome("A man, a plan, a canal: Panama"));

/***
 * !Given two strings s and t, write a function to determine if t is an anagram of s.
Note: You may assume the string contains only lowercase alphabets.
 */
function validAnagram(s, t) {
  if (s.length !== t.length) return false;
  const map = {};

  for (let i = 0; i < s.length; i++) {
    map[s[i]] ? map[s[i]]++ : (map[s[i]] = 1);
  }
  console.log(map);
  for (let i = 0; i < t.length; i++) {
    if (map[t[i]]) map[t[i]]--;
    else return false;
  }

  return true;
}
// console.log(validAnagram("bca", "abc"));

/*
! You are supposed to find out which character occurs the maximum number of times and the number of its occurrence, in the given string. If two characters occur equal number of times, you have to output the character with the lower ASCII value. *
 */

function mostFrequent(text) {
  let max = -Infinity;
  let alphabet = [];
  let ans = null;
  const myMap = {};
  for (let i = 0; i < text.length; i++) {
    if (myMap[text[i]] && text[i] !== " ") {
      myMap[text[i]]++;
    } else if (!myMap[text[i]] && text[i] !== " ") myMap[text[i]] = 1;
  }
  // remove {&& text[i] !== " "} this from if condition if space is also allowed ;

  const map1 = new Map(Object.entries(myMap));
  for (const [key, value] of map1.entries()) {
    if (value > max) {
      max = value;
    }
  }
  for (const [key, value] of map1.entries()) {
    if (value === max) {
      alphabet.push(key);
    }
  }
  console.log(alphabet, max);

  //   compare ascii value
  if (alphabet.length === 1) return [alphabet[0], max];
  let ansnum = 122;
  for (let i = 0; i < alphabet.length; i++) {
    if (ansnum >= alphabet[i].charCodeAt(0)) {
      ansnum = alphabet[i].charCodeAt(0);
      ans = alphabet[i];
    }
  }
  return [ans, max];
}
// console.log(mostFrequent("YouOOOO are supposed to find out"));
console.log(
  mostFrequent("A cat with rabiestreatsa slothto know more about archeology.")
);

// console.log(mostFrequent("YouOOOO are supposed to find out"));

function mostFrequent1(text) {
  // not completed ;
  let len = text.length;
  let max = 0;
  let aplhabet = [];
  let myMap = new Map();

  for (let i = 0; i < len; i++) {
    let char = text.charAt(i);

    if (char === "." && char === " ") {
    } else if (myMap.has(char)) {
      let temp = myMap.get(char) + 1;
      myMap.set(char, temp);
    } else if (!myMap.has(char)) {
      myMap.set(char, 1);
    }
  }
  const iterator = myMap.keys();
  const iterator1 = myMap.values();

  for (let i = 0; i < myMap.size; i++) {
    let num = iterator1.next().value;
    if (num > max) {
      max = num;
      //   aplhabet.push(char);
    }
  }
  console.log(max);

  let iterator3 = myMap.values();
  for (let i = 0; i < myMap.size; i++) {
    let num = iterator3.next().value;
    let char = iterator.next().value;
    if (num === max) {
      aplhabet.push(char);
    }
  }
  console.log(aplhabet, max);

  if (aplhabet.length === 1) return aplhabet[0] + max;
  let ans = "";
  let ansnum = 257;
  for (let i = 0; i < aplhabet.length; i++) {
    let num = aplhabet[i].charCodeAt(0);
    if (num < ansnum) {
      ans = aplhabet[i];
    }
  }
  return [ans, max];
}

/***
 * frequent words ;
 *
 *! You are given a list of words present in a book. Your younger brother is really curious to know the K most frequent words in the book, you have to find them.
 * todo: Your answer should be sorted by frequency from highest to lowest. If two words have the same frequency, then the word with the lower alphabetical order should come first.
 */

function frequentWords(words, k) {
  console.log(words); //[ 'bhaku', 'bhalu', 'bhaku' ]
  // console.log(k);//1

  let myMap = {};
  let alpha = [];
  for (let i = 0; i < words.length; i++) {
    myMap[words[i]] ? myMap[words[i]]++ : (myMap[words[i]] = 1);
  }
  console.log(myMap);
  for (let i = 0; i < words.length; i++) {
    if (k === myMap[words[i]] && !alpha.includes(words[i])) {
      alpha.push(words[i]);
    }
  }
  if (alpha.length === 1) return alpha[0];
  // let i = 0;
}
// console.log(frequentWords(["bhalu", "bhaku", "bhaku", "luca"], 1));
