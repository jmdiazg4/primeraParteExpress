let cursos = [
	{
		id: 'bd',
		nombre: 'Bases de Datos',
		duracion: '64 horas',
		valor: 180000
	},
	{
		id: 're',
		nombre: 'Redes',
		duracion: '56 horas',
		valor: 150000
	},
	{
		id: 'pr', 
		nombre: 'Programacion',
		duracion: '72 horas',
		valor: 200000
	}];

function listarCursos(cursos){
	console.log('CURSOS OFERTADOS');
	setTimeout(function(){
		console.log('1.El curso '+cursos[0].nombre+' de codigo ['+cursos[0].id+']  tiene una duracion de '+cursos[0].duracion+' y un costo de '+cursos[0].valor);}
		,2000);
	setTimeout(function(){
 		console.log('2.El curso '+cursos[1].nombre+' de codigo ['+cursos[1].id+']  tiene una duracion de '+cursos[1].duracion+' y un costo de '+cursos[1].valor);}
 		,4000);
	setTimeout(function(){
		console.log('3.El curso '+cursos[2].nombre+' de codigo ['+cursos[2].id+']  tiene una duracion de '+cursos[2].duracion+' y un costo de '+cursos[2].valor);}
		,6000);
}

module.exports = {
	cursos,
	listarCursos
};
