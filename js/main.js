//получаем значения из селекта


function Complete() {
  var n = document.getElementById("tables").options.selectedIndex;
  var txt = document.getElementById("tables").options[n].text;

  var date1 = document.getElementById("datepicker1").value;
  var dateEntered_1 = new Date(date1);

  var date2 = document.getElementById("datepicker2").value;
  var dateEntered_2 = new Date(date2);

  var Elem = "Имя таблицы " + txt +
    "\nДата1: " + dateEntered_1 +
    "\nДата2: " + dateEntered_2

  alert(Elem);
}

var n = document.getElementsByClassName("click_this_row").length;


function Click_table(i){
  var Class_for_window = '.modal_' + i;
  var Class_for_button = '.row_' + i;
  var Class_for_inner = '.modal__inner_' + i;
  const modalWindow1 = document.querySelector(Class_for_window);
  const buttonModal1 = document.querySelector(Class_for_button);
  
  buttonModal1.addEventListener('click', (e) => {
    modalWindow1.classList.add('active');
  })
  modalWindow1.addEventListener('click', (e) => {
    const isModal1 = e.target.closest(Class_for_inner);

    if (!isModal1) {
      modalWindow1.classList.remove('active');
    }
  })
}

var btn = document.getElementsByClassName('click_this_row');

for(var i = 1; i < btn.length; i++)
    Click_table(i);


