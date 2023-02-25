export const formatNumber = (count: number) => {
    var SI_SYMBOL = ["", "k", "M", "G", "T", "P", "E"];
    var tier = Math.log10(Math.abs(count)) / 3 | 0;
    if(tier === 0) return count;
    var suffix = SI_SYMBOL[tier];
    var scale = Math.pow(10, tier * 3);
    var scaled = count / scale;
    return scaled.toFixed(1) + suffix;
}