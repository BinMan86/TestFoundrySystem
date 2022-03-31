export default class Vampire20ItemSheet extends ItemSheet{
    get template(){
        return `systems/vampire20/templates/sheets/${this.item.data.type}-sheet.html`;
    }
}
