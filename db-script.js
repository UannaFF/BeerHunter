// https://docs.mongodb.com/manual/tutorial/write-scripts-for-the-mongo-shell/

// README: run mongo localhost:27017/<dbname> db-script.js to load this data

// data inspired by https://im2ag-moodle.e.ujf-grenoble.fr/pluginfile.php/32299/mod_resource/content/2/IntroDataModels.pdf

db.bars.insert([
    {
        name:"Sarah's",
        addr:"400 Maple St.",
        menu: [{ name:"Bud", price:3 }, { name:"Cheapo", price:2.5 }]
    },
    {
        name:"Irish Pub",
        addr:"101 Elm St.",
        menu: [{ name:"Miller", price:3 }, { name:"Cheapo", price:2 }]
    },
    {
        name:"Bukana",
        addr:"751 Main Ave.",
        hh_start:17
        hh_end:0
        menu: [{ name:"Miller", reg_price:4, hh_price:3 }]
    }
])
