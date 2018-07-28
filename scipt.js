function myFirstApp(name, age) {

	alert("Привет, меня зовут " + name + " и это моя первая программа!")

	function showSkills() {
		let skills = ['html', 'css', 'Photoshop'];

		for(let i = 0; i < skills.length; i++) {
			 document.write("Я владею " + skills[i] + '<br>');
		}
	}

	showSkills();


	function checkAge() {
		if (age > 18) {
			document.write("Вы в самом расцвете сил!")
		}
		else {
			document.write("Вы очень молоды... зато у вас есть фора!")
		}
	}

	

	function calcPow(num)  {
		num = prompt("Введите целое число");
		let result = Math.pow(num,2);

		document.write("Квадрат числа равен " + result)
	}

	calcPow();
}

myFirstApp("Almira", 48);

