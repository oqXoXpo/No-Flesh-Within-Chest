function DragonForgeRecipe(input, blood, output, dragonType) {
    this.type = 'iceandfire:dragonforge'
    this.input = input
    this.blood = blood
    this.result = output
    this.dragon_type = dragonType
    this.cook_time = 1000
}

DragonForgeRecipe.prototype = {
    setCookTime: function (cookTime) {
        this.cook_time = cookTime
        return this
    },

}

ServerEvents.recipes(event => {
    function registerCustomRecipe(recipeModel) {
        event.custom(recipeModel)
    }

    registerCustomRecipe(new DragonForgeRecipe(Item.of('kubejs:lung_diamond'), Item.of('iceandfire:lightning_dragon_blood'), Item.of('kubejs:dragon_blood_lung'), 'lightning'))
    registerCustomRecipe(new DragonForgeRecipe(Item.of('kubejs:muscle_diamond'), Item.of('iceandfire:lightning_dragon_blood'), Item.of('kubejs:dragon_blood_muscle'), 'lightning'))
    registerCustomRecipe(new DragonForgeRecipe(Item.of('kubejs:heart_diamond'), Item.of('iceandfire:lightning_dragon_blood'), Item.of('kubejs:dragon_blood_heart'), 'lightning'))
    registerCustomRecipe(new DragonForgeRecipe(Item.of('kubejs:intestine_diamond'), Item.of('iceandfire:lightning_dragon_blood'), Item.of('kubejs:dragon_blood_intestine'), 'lightning'))
    registerCustomRecipe(new DragonForgeRecipe(Item.of('kubejs:rib_diamond'), Item.of('iceandfire:lightning_dragon_blood'), Item.of('kubejs:dragon_blood_rib'), 'lightning'))
    registerCustomRecipe(new DragonForgeRecipe(Item.of('kubejs:spine_diamond'), Item.of('iceandfire:lightning_dragon_blood'), Item.of('kubejs:dragon_blood_spine'), 'lightning'))
    registerCustomRecipe(new DragonForgeRecipe(Item.of('kubejs:spleen_diamond'), Item.of('iceandfire:lightning_dragon_blood'), Item.of('kubejs:dragon_blood_spleen'), 'lightning'))
    registerCustomRecipe(new DragonForgeRecipe(Item.of('kubejs:stomach_diamond'), Item.of('iceandfire:lightning_dragon_blood'), Item.of('kubejs:dragon_blood_stomach'), 'lightning'))
    registerCustomRecipe(new DragonForgeRecipe(Item.of('kubejs:kidney_diamond'), Item.of('iceandfire:lightning_dragon_blood'), Item.of('kubejs:dragon_blood_kidney'), 'lightning'))
    registerCustomRecipe(new DragonForgeRecipe(Item.of('kubejs:liver_diamond'), Item.of('iceandfire:lightning_dragon_blood'), Item.of('kubejs:dragon_blood_liver'), 'lightning'))
    registerCustomRecipe(new DragonForgeRecipe(Item.of('kubejs:appendix_diamond'), Item.of('iceandfire:lightning_dragon_blood'), Item.of('kubejs:dragon_blood_appendix'), 'lightning'))
})