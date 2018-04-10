// https://docs.mongodb.com/manual/tutorial/write-scripts-for-the-mongo-shell/

// README: to load this data:
// $ mongo localhost:27017/<dbname> db-script.js

// data inspired by https://im2ag-moodle.e.ujf-grenoble.fr/pluginfile.php/32299/mod_resource/content/2/IntroDataModels.pdf



conf = {
    _id : "beerhunterreplica",
    members: [
        { _id: beerhunterreplica-0, host: "localhost:27017" },
        { _id: beerhunterreplica-1, host: "localhost:27018" },
        { _id: beerhunterreplica-2, host: "localhost:27019" }
    ]
};
rs.initiate(conf);

db.bars.insert([
    {
        name:"Sarah's",
        addr:"400 Maple St.",
        menu: [{ name:"Bud Light", price:3 },
               { name:"Cheapo", price:2.5 }]
    },
    {
        name:"Irish Pub",
        addr:"101 Elm St.",
        menu: [{ name:"Miller High Life", price:3 },
               { name:"Cheapo", price:2 }]
    },
    {
        name:"Bukana",
        addr:"751 Main Ave.",
        hh_start:17,
        hh_end:0,
        menu: [{ name:"Miller High Life", reg_price:4, hh_price:3 },
               { name:"Coors Light", reg_price:5, hh_price:4 },
               { name:"Bud Light", reg_price:4, hh_price:3.5 }]
    },
    {
        name:"The cool place",
        addr:"5000 Eighth St.",
        menu: [{ name:"Coors Light", price:4.5 },
               { name:"Michelob Ultra", price:4 }]
    },
    {
        name:"The Jazz Note",
        addr:"346 Sixth Ave.",
        hh_start:18,
        hh_end:23,
        menu: [{ name:"Bud Light", reg_price:3.5, hh_price:3 },
               { name:"Michelob Ultra", reg_price:5, hh_price:3 },
               { name:"Cheapo", price:3 }]
    }
]);

db.beers.insert([
    {
        name:"Bud Light",
        calories:110,
        type:"lager",
        fabrication:"united states",
        countries:["united states", "france", "vietnam"],
        image:"budlight.jpeg"
    },
    {
        name:"Cheapo",
        calories:150,
        type:"IPA",
        fabrication:"canada",
        countries:["united states", "france", "mexico", "china", "canada"],
        image:"cheapo.jpeg"
    },
    {
        name:"Miller High Life",
        calories:140,
        type:"lager",
        fabrication:"united states",
        countries:["united states", "france", "canada", "belgium", "south africa"],
        image:"miller.jpg"
    },
    {
        name:"Coors Light",
        calories:136
        type:"lager",
        fabrication:"united states",
        countries:["united states", "peru", "france", "canada", "south korea"],
        image:"coors.png"
    },
    {
        name:"Michelob Ultra",
        calories:120
        type:"lager",
        fabrication:"united states",
        countries:["united states", "brazil", "france", ],
        image:"michelob.jpeg"
    },
    {
        name:"Vigneronne",
        calories:150,
        type:"lambic",
        fabrication:"belgium",
        countries:["belgium"],
        image:"vigneronne.jpg"
    }
]);
