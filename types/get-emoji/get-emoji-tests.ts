import getEmoji, { emojiList } from "get-emoji";

// $ExpectType string
getEmoji("rage");

// $ExpectType string[]
emojiList;
// $ExpectType string[]
getEmoji.emojiList;
