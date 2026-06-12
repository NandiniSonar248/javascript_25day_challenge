// push() - Add a new song to playlist
const playlist = ["Kesariya", "apna bana le"];

playlist.push("Perfect");

console.log("push():");
console.log(playlist);

// pop() - Remove last song from playlist
const playlist2 = ["Kesariya", "apna bana le", "Perfect"];

const removedSong = playlist2.pop();

console.log("\npop():");
console.log("Removed Song:", removedSong);
console.log(playlist2);

// unshift() - New trending song added at the top
const trendingSongs = [
    "Heeriye",
    "Shape of You"
];

trendingSongs.unshift("Saiyaara");

console.log("\n unshift():");
console.log(trendingSongs);

// shift() - Remove oldest recommendation
const recommendations = [
    "Tum Hi Ho",
    "Die With A Smile",
    "We Don's Talk Anymore"
];

const removedRecommendation = recommendations.shift();

console.log("\nshift():");
console.log("Removed:", removedRecommendation);
console.log(recommendations);

// includes() - Check if a song exists in favorites
const favorites = [
    "Kesariya",
    "Perfect",
    "Heeriye"
];

console.log("\n includes():");
console.log(favorites.includes("Perfect"));

// indexOf() - Find position of a song in queue
const queue = [
    "Apna Bana Le",
    "Believer",
    "Saiyaara",
    "Perfect"
];

console.log("\nindexOf():");
console.log(queue.indexOf("Saiyaara"));

// slice() - Show next 3 songs to be played
const playQueue = [
    "Kesariya",
    "Shape of You",
    "Heeriye",
    "Believer",
    "Perfect"
];

const nextSongs = playQueue.slice(0, 3);

console.log("\nslice():");
console.log(nextSongs);

// splice() - Remove a song from playlist
const myPlaylist = [
    "Kesariya",
    "Believer",
    "Perfect"
];

myPlaylist.splice(1, 1);

console.log("\nsplice() Delete:");
console.log(myPlaylist);

// splice() - Replace old song with a new favorite
const myPlaylist2 = [
    "Kesariya",
    "Believer",
    "Perfect"
];

myPlaylist2.splice(1, 1, "Die With A Smile");

console.log("\nsplice() Update:");
console.log(myPlaylist2);