export default class Vampire20ActorSheet extends ActorSheet {
    get template(){
        return `systems/vampire20/templates/sheets/${this.actor.data.type}-sheet.html`;
    }
}