async function isEmbeddable(msg) {
    if(msg.guild.me.permissions.has("EMBED_LINKS")) return true
    else return false;
}

module.exports = {isEmbeddable}