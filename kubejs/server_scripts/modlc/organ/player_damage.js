// priority: 9
//优先级要小于官方

/**
 * 造成伤害处理策略
 * @constant
 * @type {Object<string,function(Internal.LivingHurtEvent, organ, EntityHurtCustomModel):void>}
 */
const moorganPlayerDamageStrategies = {

};
//引用官方策略
var Damage1 = Object.assign(organPlayerDamageStrategies, moorganPlayerDamageStrategies);

/**
 * 造成伤害唯一处理策略
 * @constant
 * @type {Object<string,function(Internal.LivingHurtEvent, organ, EntityHurtCustomModel):void>}
 */
const moorganPlayerDamageOnlyStrategies = {
    
};
//引用官方策略
var Damage2 = Object.assign(organPlayerDamageOnlyStrategies, moorganPlayerDamageOnlyStrategies);
