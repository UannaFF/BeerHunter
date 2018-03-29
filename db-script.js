// https://docs.mongodb.com/manual/tutorial/write-scripts-for-the-mongo-shell/

// README: run mongo localhost:27017/<dbname> db-script.js to load this data

// data inspired by https://im2ag-moodle.e.ujf-grenoble.fr/pluginfile.php/32299/mod_resource/content/2/IntroDataModels.pdf

db.beers.insert([
    {"name":"Bud", "manf":"Anheuser-Busch", "lite":true},
    {"name":"Bud", "manf":"Anheuser-Busch", "lite":false},
    {"name":"Winterbrew", "manf":"Pete's"},
    {"name":"Miller", "lite":false}
])

db.bars.insert([
    {}
])
