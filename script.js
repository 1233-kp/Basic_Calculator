let string = "";
let buttons = document.querySelectorAll('.button');

Array.from(buttons).forEach((button) => {
  button.addEventListener('click', (e) => {
    let buttonText = e.target.innerHTML;

    if (buttonText == '=') {
      try {
        string = eval(string);
        document.querySelector('input').value = string;
      } catch (error) {
        document.querySelector('input').value = "Error";
        string = "";
      }
    }

    else if (e.target.innerHTML == 'AC') {
      string = "";
      document.querySelector('input').value = string;
    }

    else if (e.target.innerHTML == 'Del') {
      string = string.slice(0, -1);
      document.querySelector('input').value = string;
    }

    else {
      string += e.target.innerHTML;
      document.querySelector('input').value = string;
    }
  });
});
