import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  public loginForm: FormGroup;
  private submitted = false;

  constructor(private authService: AuthService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(6)])
    });
  }

  submit() {
    this.submitted = true;
    const user = {
      email: this.loginForm.value.email,
      password: this.loginForm.value.password
    }
    this.authService.login(user).subscribe(response => {
      if(response !== null){
        this.router.navigate(['users']);
      } else {
        console.log('Error authentication');
      }
    });
  }
}
