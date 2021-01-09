import { Component } from '@angular/core';
import { User } from "../shared/user/user.model";
import { UserService } from "../shared/user/user.service";
import { Router } from "@angular/router";
import {Page} from "tns-core-modules/ui/page";

@Component({
  selector: 'ns-login',
  providers: [UserService],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  user: User;
  isLoggingIn = true;
  isLoading = false;

  constructor(private router: Router, private userService: UserService, page: Page) {
    this.user = new User();
    this.user.email = "jjoj@gmail.com";
    this.user.password = "jjoj";
    page.actionBarHidden = true;
  }


  submit() {
    this.isLoading = true;
    if (this.isLoggingIn) {
      this.login();
    } else {
      this.signUp();
    }
  }

  login() {
    this.userService.login(this.user)
      .subscribe(
        () => {
          this.router.navigate(["/home"])
          this.isLoading = false;
        },
        (exception) => {
          if (exception.error && exception.error.description) {
            alert(exception.error.description);
          } else {
            alert(exception)
          }
          this.isLoading = false;
        }
      );
  }

  signUp() {
    this.userService.register(this.user)
      .subscribe(
        () => {
          alert("Your account was successfully created.");
          this.toggleDisplay();
          this.isLoading = false;
        },
        (exception) => {
          if (exception.error && exception.error.description) {
            alert(exception.error.description);
          } else {
            alert(exception)
          }
          this.isLoading = false;
        }
      );
  }

  toggleDisplay() {
    this.isLoggingIn = !this.isLoggingIn;
  }
}
