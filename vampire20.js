import Vampire20ItemSheet from "./module/sheets/item-sheet.js";
import Vampire20ActorSheet from "./module/sheets/actor-sheet.js";

Hooks.once("init", function(){
    console.log("test | Initializing Vampire20");

    Items.unregisterSheet("core", ItemSheet);
    Items.registerSheet("vampire20", Vampire20ItemSheet, {makeDefault: true});

    Items.unregisterSheet("core", ActorSheet);
    Items.registerSheet("vampire20", Vampire20ActorSheet, {makeDefault: true});
});
