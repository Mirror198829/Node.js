const { PI } = Math;
function area(r){
	return PI * r ;
}
function circumference(r){
	return 2 * PI * r
}
module.exports = {
	area:area,
	cum:circumference
}

