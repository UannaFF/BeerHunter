// data inspired by https://im2ag-moodle.e.ujf-grenoble.fr/pluginfile.php/32299/mod_resource/content/2/IntroDataModels.pdf
db.beers.insert([
    {
        name:"Bud Light",
        calories:110, // 16oz
        image:"img/noimage.png",
        origincountry:"usa",
        type:"lager",
    },
    {
        name:"Cheapo",
        calories:170,
        image:"img/noimage.png",
        origincountry:"usa",
        type:"indian pale ale"
    },
    {
        name:"Miller High Life",
        calories:190,
        image:"img/millerhighlife.png",
        origincountry:"usa",
        type:"lager",
    },
    {
        name:"Coors Light",
        calories:136,
        image:"img/noimage.png",
        origincountry:"usa",
        type:"lager",
    },
    {
        name:"Micheob Ultra",
        calories:120,
        image:"img/noimage.png",
        origincountry:"usa",
        type:"lager",
    }
]);

db.bars.insert([
    {
        name:"Sarah's",
        addr:"400 Maple St.",
        country:"france",
        menu: [{ name:"Bud Light", price:3 },
               { name:"Cheapo", price:2.5 }]
    },
    {
        name:"Irish Pub",
        addr:"101 Elm St.",
        country:"france",
        menu: [{ name:"Miller High Life", price:3 },
               { name:"Cheapo", price:2 }]
    },
    {
        name:"Bukana",
        addr:"751 Main Ave.",
        hh_start:17,
        hh_end:0,
        country:"france",
        menu: [{ name:"Miller High Life", reg_price:4, hh_price:3 },
               { name:"Coors Light", reg_price:5, hh_price:4 },
               { name:"Bud Light", reg_price:4, hh_price:3.5 }]
    },
    {
        name:"The cool place",
        addr:"5000 Eighth St.",
        country:"france",
        menu: [{ name:"Coors Light", price:4.5 },
               { name:"Michelob Ultra", price:4 }]
    },
    {
        name:"The Jazz Note",
        addr:"346 Sixth Ave.",
        hh_start:18,
        hh_end:23,
        country:"france",
        menu: [{ name:"Bud Light", reg_price:3.5, hh_price:3 },
               { name:"Michelob Ultra", reg_price:5, hh_price:3 },
               { name:"Cheapo", price:3 }]
    }
]);
