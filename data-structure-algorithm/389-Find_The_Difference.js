/**
 *
 *
 *  Given two strings s and t which consist of only lowercase letters.

    String t is generated by random shuffling string s and then add one more letter at a random position.

    Find the letter that was added in t.

    Example:

    Input:
    s = "abcd"
    t = "abcde"

    Output:
    e

    Explanation:
    'e' is the letter that was added.

 *
 */

/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
// wrong 错误解法一 在做位运算的时候，一定要把这个字符转换为二进制 or 整形？
var findTheDifference2 = function (s, t) {
  // 字符串t的长度一定大于s
  var c = s[0] ^ t[0];
  for (let i = 1; i < t.length - 1; i++) {
    c = c ^ s[i] ^ t[i]
  }
  // console.log(c ^ t[t.length - 1])
  return c ^ t[t.length - 1]
};


findTheDifference2("abcd", "abcde")


// wrong 错误解法二 在做位运算的时候，一定要把这个字符转换为二进制 or 整形？
var findTheDifference3 = function (s, t) {
  var c = 0
  for (let i = 0; i < s.length; i++) {
    console.log(s[i])
    c = c ^ s[i]
  }
  for (let j = 0; j < t.length; j++) {
    console.log(s[j])
    c = c ^ t[j]
  }
  console.log(findTheDifference3, c)
  return c
}

var findTheDifference_2_3_wrong = function (s, t) {
  // 结果是将两个字符串中的所有字符连续求 ^ 运算
  // 上面2 和 3 方法 可以再优化一下
  var r = s + t
  var c = 0
  for (let i = 0; i < r.length; i++) {
    let bitInt = r[i].charCodeAt()
    c ^= bitInt
  }
  // 错误，现在c还是一个整数，这个整数转换成二进制， 这个二进制代表着一个字符
  // return c
  return String.fromCharCode(c)
}

// findTheDifference3("abcd", "abcde")

// 错误，字母可能重复 a aa
// 可能的情况  wsaw wwsap
var findTheDifference = function (s, t) {
  var map = {}
  for (let i = 0; i < s.length; i++) {
    let c = s[i]
    map[c] = map[c] ? (map[c] + 1) : 1
  }
  console.log(map, "map")
  for (let j = 0; j < t.length; j++) {
    // 错误 解法 一
    // if (map[t[j]] == 1) {
    //   delete map[t[j]]
    // }
    // else if (map[t[j]] !== 1) {
    //   console.log(t[j], "------000------")
    //   return t[j]
    // }

    // 正确 解法 一
    // var c = t[j]
    // map[c] = map[c] || 0
    // if (map[c] >= 0) {
    //   map[c] = map[c] - 1
    //   if (map[c] < 0) {
    //     console.log(c)
    //     return c
    //   }
    // }

    // 正确 解法 二
    var c = t[j]
    map[c] = map[c] || 0 // 这一步是必须的，没有出现过的初始化为0
    if (--map[c] < 0) {
      console.log(c)
      return c
    }
  }
}

findTheDifference("abcd", "abcde")
findTheDifference("a", "aa")
