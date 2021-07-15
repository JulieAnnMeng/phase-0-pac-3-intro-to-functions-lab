function shout(string) {
    return string.toUpperCase();
}

function whisper(string) {
    return string.toLowerCase();
}

function logShout(string) {
    console.log(shout(string));
}

function logWhisper(string) {
    console.log(whisper(string));
}

//const string = "I love you, Grandma.";

function sayHiToGrandma(string) {
//    switch (string) {
//         case whisper(string):
//             return "I can\'t hear you!";
//             break;
//         case shout(string):
//             return "YES INDEED!";
//             break;
//         case "I love you, Grandma.":
//             return "I love you, too.";
//     }

        if (string ===whisper(string)){
            return "I can\'t hear you!";
        }
        else if (string ===shout(string)) {
            return "YES INDEED!";
        }
        else if (string === "I love you, Grandma.") {
            return "I love you, too.";
        }


}

