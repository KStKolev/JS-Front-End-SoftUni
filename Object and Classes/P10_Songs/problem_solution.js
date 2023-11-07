class Song {

    constructor(typeList, name, time) {
        this.typeList = typeList,
        this.name = name,
        this.time = time
    }

}

function printSong(array) {

    const numberOfSongs = array.shift();
    const typeOfSongs = array.pop();
    const songs = [];

    for (let index = 0; index < numberOfSongs; index++) {
        const [typeList, name, time] = array[index].split("_");
        const song = new Song(typeList, name, time);
        songs.push(song);
    }

    if (typeOfSongs === "all") {
        songs.forEach(s => console.log(s.name))
    }
    else {
        songs.filter(s => s.typeList === typeOfSongs).forEach(s => console.log(s.name))
    }
}

printSong([2, 'like_Replay_3:15', 'ban_Photoshop_3:48', 'all']);