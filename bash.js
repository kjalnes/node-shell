var commands = require('./commands');

// Output a prompt
process.stdout.write('prompt > ');

// The stdin 'data' event fires after a user types in a line
process.stdin.on('data', function (data) {
    // console.log('data', data.toString().trim().split(' '));

    var userCommand = data.toString().trim().split(' '); // remove the newline
    var command = userCommand[0];
    var args = userCommand.slice(1);
    commands[command](args);

  // process.stdout.write('\nprompt > ');

});
