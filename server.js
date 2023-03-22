module.exports = {
    rChar: function(len){
        var listCharacters = 'abcdefghijklmnopqrstuvwxyz1234567890ABCDEFGHIHKLMNOPQRSTUVWXYZ';
        var str = '';
        for(let i=0; i < len; i++){
            str += listCharacters.charAt(Math.floor(Math.random() * listCharacters.length)) ;
        }
        return str; 
    }
}