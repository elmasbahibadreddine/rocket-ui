String.prototype.toCapitalCase = function() {
    return this.split(' ') 
        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()) 
        .join(' ')
}
