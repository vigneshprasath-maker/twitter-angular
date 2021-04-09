import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.scss']
})
export class SignUpFormComponent implements OnInit {

  constructor() { }
  swap() {
    var phone = "Use phone instead";
    var email = "Use email instead";
    console.log("qwertyui")
    var x = document.getElementById("mailPlaceHolder");
    var y = document.getElementById("swapper");
    if (y.innerHTML == email) {
      y.innerHTML = phone
      x.innerHTML = "Email";
    }else{
      y.innerHTML=email;
      x.innerHTML="Phone";
    }
  }
  nameFocusIn() {
    console.log("jsdvjhsdvhjg")
    var y = document.getElementById("namePlaceHolder");
    y.classList.add("PlaceHolderFocus");
  }
  nameFocusOut() {
    var y = document.getElementById("namePlaceHolder");
    y.classList.remove("PlaceHolderFocus");
  }
  mailFocusIn() {
    var y = document.getElementById("mailPlaceHolder");
    y.classList.add("PlaceHolderFocus");
  }
  mailFocusOut() {
    var y = document.getElementById("mailPlaceHolder");
    y.classList.remove("PlaceHolderFocus");
  }
  nameChange() {
    var uname = (<HTMLInputElement>document.getElementById("uname"));
    var y = document.getElementById("namePlaceHolder");

    console.log(uname.value.length, y.classList.contains("stayup"))
    if (uname.value.length > 0) {

      y.classList.add("stayup");
    }
    if (uname.value.length == 0 && y.classList.contains("stayup")) {
      y.classList.remove("stayup");
    }
  }
  mailChange() {
    var pass = (<HTMLInputElement>document.getElementById("mailOrNum"));
    var y = document.getElementById("mailPlaceHolder");
    if (pass.value.length > 0) {
      y.classList.add("stayup");
    }
    if (pass.value.length == 0 && y.classList.contains("stayup")) {
      y.classList.remove("stayup");
    }
  }
  ngOnInit(): void {
    var day = document.getElementById("day");
    var year = document.getElementById("year");
    var append = "";
    for (var i = 1; i < 32; i++) {
      append += "<option value=" + i + ">" + i + "</option>";
    }
    day.innerHTML = append;
    append = "";
    for (var i = 2021; i > 1900; i--) {
      append += "<option value=" + i + ">" + i + "</option>";
    }
    year.innerHTML = append;
    var uname = document.getElementById("uname");
    var pass = document.getElementById("mailOrNum");
    uname.addEventListener('focus', this.nameFocusIn);
    uname.addEventListener('focusout', this.nameFocusOut);
    pass.addEventListener('focus', this.mailFocusIn);
    pass.addEventListener('focusout', this.mailFocusOut);
    uname.addEventListener('change', this.nameChange);
    pass.addEventListener('change', this.mailChange);
  }

}