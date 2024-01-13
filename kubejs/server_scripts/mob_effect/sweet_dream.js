// priority: 5
/**
 * 1. 优先判断是否是玩家受到伤害
 * 2. 甜蜜之梦如果存在，优先结算甜蜜之梦的抵消效果
 *  2.1. 如果没有糖果心则不判断后续所有逻辑
 *  2.2. 如果来源于火焰，那么取消甜蜜之梦状态
 *  2.3. 如果甜蜜之梦的效果消失，那么就判断是否通过胰腺的效果
 *  2.4. 扣减状态持续时间，删除状态强刷buff时间
 * 3. 检测魔法海马体效果赋予甜蜜之梦状态
 *  3.1. 根据已有器官获取等级
 */


/**
 * 甜蜜之梦承伤事件
 * @param {Internal.LivingHurtEvent} event 
 * @param {EntityHurtCustomModel} data 
 * @returns 
 */
function sweetDreamPlayerHurtByOthers(event, data) {
    let player = event.entity;
    if (player.hasEffect('kubejs:sweet_dream')) {
        let itemMap = getPlayerChestCavityItemMap(player);
        if (!itemMap.has('kubejs:candy_heart')) {
            return;
        }
        let sweetDreamPotion = player.getEffect('kubejs:sweet_dream')
        let damage = event.amount;
        if (sweetDreamPotion.getDuration() * (sweetDreamPotion.getAmplifier() + 1) < damage * 20) {
            player.removeEffect('kubejs:sweet_dream');
            if (itemMap.has('kubejs:candy_pancreas')) {
                player.potionEffects.add('minecraft:absorption', 20 * 30, 4);
            }
            event.cancel();
            return;
        }
        let duration = Math.floor(sweetDreamPotion.getDuration() - damage * 20 * 2 / (sweetDreamPotion.getAmplifier() + 1));
        duration = Math.min(duration, 600 * 20)
        let amplifier = sweetDreamPotion.getAmplifier();
        player.removeEffect('kubejs:sweet_dream')
        player.potionEffects.add('kubejs:sweet_dream', duration, amplifier);
        event.cancel();
        return;
    }

    if (event.amount >= 10 && !player.hasEffect('kubejs:sweet_dream')) {
        let itemMap = getPlayerChestCavityItemMap(player);
        if (!itemMap.has('kubejs:magic_hippocampus')) {
            return;
        }
        let durationMuti = 1;
        let amplifierMuti = 0;
        if (itemMap.has('kubejs:magic_muscle')) {
            durationMuti = durationMuti + itemMap.get('kubejs:magic_muscle').length
        }
        if (itemMap.has('kubejs:magic_spine')) {
            amplifierMuti = amplifierMuti + Math.floor(itemMap.get('kubejs:magic_spine').length / 2)
        }
        if (!event.player.hasEffect('kubejs:sweet_dream')) {
            event.player.potionEffects.add('kubejs:sweet_dream', 20 * 5 * durationMuti, amplifierMuti);
        }
    }
}