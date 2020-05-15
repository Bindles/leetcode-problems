// JavaScript (longhand):

var s = "example";
var hash = {};
for (var char of s) {
    if (!(char in hash)) {
        hash[char] = 0;
    }
    hash[char] += 1;
}
console.log(hash);

// JavaScript (concise):
var s = "example";
var myhash = {};
for (var char of s) {
    myhash[char] = (myhash[char] || 0) + 1;
}
console.log(myhash);