function checkPassword (){
	return function getPasswordChecker(password){
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
	const check = checkPassword();
	let result = check(process.argv[2]);
	console.log(result);
}

