
function change(a){
	a = 100
	console.log('exports:'+a)
}
module.exports = {
	change:change
}