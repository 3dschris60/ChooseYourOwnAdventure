// NOTE - You must have a level with the name "start".  This is used as the first level in the game.

var game = {
    music: "98_Lost_Mine.mp3",
    background_image: "https://ak9.picdn.net/shutterstock/videos/4914629/thumb/1.jpg",
    levels: {

        start: {
            message: "You woke up in the fields of a dark plain of fields.",
            choices: [
                {
                    text: "dark room",
                    nextLevel: "cave",
                },

                {
                    text: "stay",
                    nextLevel: "field",
                },
            ]
        },

        cave: {
            background_image: "fire.gif",
            music: "Final-Fantasy-7-Boss-Battle.mp3",
            message: "You come across a fire monster or something!",
            choices: [
                {
                    text: "Start over",
                    nextLevel: "start",
                },
            ]
        },

        field: {
            message: "Some adventurer you are...",
            choices: [
                {
                    text: "Start over",
                    nextLevel: "start",
                },
            ]
        },

    }
};
