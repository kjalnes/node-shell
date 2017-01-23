var fs = require('fs');

module.exports = {
    pwd: function(args) {
        process.stdout.write(process.env.PWD);
        this.prompt();
    },
    date: function(args) {
        process.stdout.write(Date());
        this.prompt();
    },
    ls: function(args){
        fs.readdir('.', function(err, files) {
            if (err) throw err;
                files.forEach(function(file) {
                    process.stdout.write(file.toString() + "\n");
                })
            this.prompt();
        });
    },
    echo: function(args) {
        var arr = args.join(' ');
        process.stdout.write(arr);
        this.prompt();
    },
    prompt: function() {
        process.stdout.write("\nprompt > ");
    },
    cat: function(args){
        var that = this;
        var callCounter = 0;
        // var firstFile = args[0];
        args.forEach(function(arg){
            fs.readFile(arg, function(err, data) {
                 if (err) throw err;
                 process.stdout.write(data, 'utf-8');
                 ++callCounter;
                 if(callCounter === args.length) {
                    that.prompt();
                 }
           });
        });
    },
    head: function(args) {
        var that = this;
        var callCounter = 0;

        args.forEach(function(arg){
            fs.readFile(arg, function(err, data) {
                 if (err) throw err;
                 var dataArr = data.toString().split('\n');

                 process.stdout.write(dataArr.length, 'utf-8');
                 ++callCounter;
                 if(callCounter === args.length) {
                    that.prompt();
                 }
           });
        });
    },
    tail: function(args) {

    }

}



