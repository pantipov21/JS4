function getPasswordChecker (password){
	return function checkPassword(){
		if (password == '12345')
			return true;
		else
			return false;
	}
}

if (process.argv.length !=3 ){
	console.log('Пароль должен быть аргументом в командной строке');
}
else
{
	const check = getPasswordChecker(process.argv[2]);
	let result = check();
	console.log(result);
}

