
// It's a good idea to declare all your variables.
// This will let our JS linter help us find 
// spelling errors among other things.
// Declaring with 'var' will make them global
// variables.

var alicesBulletin, bobsBulletin, carolsBulletin, dansBulletin, elliesBulletin, franksBulletin, gregsBulletin, harrysBulletin, ivysBulletin, jacksBulletin

let schoolBulletin;

// this variable is set to an object
schoolBulletin = {
  message: "Go Bulldogs!Red and Blue!!!"
}
elliesBulletin = {
  message: "Go Saints! Who dat say they goin beat those saints"
}

alicesBulletin = schoolBulletin;
bobsBulletin = alicesBulletin;
carolsBulletin = bobsBulletin;
dansBulletin = carolsBulletin;
elliesBulletin = elliesBulletin;
franksBulletin = dansBulletin;
gregsBulletin = franksBulletin;
harrysBulletin = gregsBulletin;
ivysBulletin = elliesBulletin;
jacksBulletin = ivysBulletin;


// call setNames from 'messages.js'
// to set the messages in the DOM.
setBulletins();
