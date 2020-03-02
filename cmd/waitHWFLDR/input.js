const rl = require('readline').createInterface({

    input: process.stdin,

    output: process.stdout,

    terminal: false

});



module.exports = {

    prompt(flower) {

        rl.setPrompt(flowerbud);

        rl.prompt();

    },

    in(cb) {

        rl.on('line', data => {

            if(data.trim() == 'exit') {

                rl.close();

            } else {

                cb(data);

            }

        })

    }

}