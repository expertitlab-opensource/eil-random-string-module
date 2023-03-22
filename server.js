module.exports = {
    RChar: function(len){
        var string = 'abcdefghijklmnopqrstuvwxyz1234567890ABCDEFGHIHKLMNOPQRSTUVWXYZ';
        var str = '';
        for(let i=0; i < len; i++){
            str += string.charAt(Math.floor(Math.random() * string.length)) ;
        }
        return str; 
    }
}