import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  public registerForm: FormGroup;
  private submitted = false;
  constructor(private authService: AuthService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(6)]),
      confirmPassword: new FormControl(null, [Validators.required, Validators.minLength(6)])
    });
  }

  submit() {
    this.submitted = true;
    const user = {
      email: this.registerForm.value.email,
      password: this.registerForm.value.password,
      confirmPassword: this.registerForm.value.confirmPassword
    }
    this.authService.register(user).subscribe(response => {
      if (response !== null) {
        this.router.navigate(['login']);
      } else {
        console.log('Error registered');
      }
    }
  );
  }
 // private checkPasswordControls() {
 //    if (this.passFormControl.value !== this.confirmFormControl.value) {
 //      this.passFormControl.setErrors({ notEqual: true });
 //      this.confirmFormControl.setErrors({ notEqual: true });
 //    } else {
 //      this.passFormControl.setErrors(this.passFormControl.errors ? { ...this.passFormControl.errors } : null);
 //      this.confirmFormControl.setErrors(this.confirmFormControl.errors ? { ...this.confirmFormControl.errors } : null);
 //    }
 //  }

}
