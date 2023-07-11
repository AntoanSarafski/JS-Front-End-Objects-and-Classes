class Song{
    constructor(type, name, length) {
        this.name = name;
        this.type = type;
        this.length = length;
    }
}

function solve(input) {
    const typeToDisplay = input.pop();
    // Take the last element from input 
    // and remove it from the array !
    const [_, ...songs] = input;
    // Make variable songs with array with song names.
    
    songs.map(songsAsText => {
        const [type, name, length] = songsAsText.split("_")
        const song = new Song(type, name, length);
        return song;
        // map function return to us array from songs!
    }).filter(song => song.type === typeToDisplay)
    .map((song) => song.name)
    .join("\n");
}


solve([3,
    'favourite_DownTown_3:14',
    'favourite_Kiss_4:16',
    'favourite_Smooth Criminal_4:01',
    'favourite']);