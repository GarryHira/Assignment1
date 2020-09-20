module.exports = {
    listen: function(app, PORT) {
        app.listen(PORT, ()=> {
            let d = new Date();
            let h = d.getHours();
            let m = d.getMinutes();
            console.log('server start ' + PORT + 'at ' +h +':'+ m );
        });
    }
}