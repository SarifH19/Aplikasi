/*
 * Catatan:
 * Gunakan fungsi goToHome() untuk menampilkan halaman home
 * Gunakan fungsi goToLogin() untuk menampilkan halaman login
 * Gunakan fungsi showPopUp() untuk menampilkan pop up error
 */

//comment: variabel untuk setiap elmen view
const loginFormElement = document.querySelector('#loginForm');
const inputEmailElement = document.querySelector('#inputEmail');
const inputPasswordElement = document.querySelector('#inputPassword');

//comment: Variabel untuk menyimpan informasi email dan password
const expectedEmail = 'admin@dicoding.com';
const expectedPassword = 'superpassword';

//comment: Menambahkan aksi klik pada button
loginFormElement.addEventListener('submit', function(event) {
  event.preventDefault();

  //comment: Mendapatkan nilai dari masing-masing input (email dan password)
  const email = inputEmailElement.value;
  const password = inputPasswordElement.value;

  //comment: Memastikan bahwa nilai email dan pass sesuai dengan nilai yg tersimpan
  if (email == expectedEmail && password == expectedPassword) {

    //comment: jika sesuai maka program akan berpindah ke halaman kome
    goToHome();
  } else {
    //comment: jika tidak sesuai maka akan menampilkan informasi input salah
    showPopUp();
  }
});
