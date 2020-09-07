import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private _formBuilder: FormBuilder, private _auth: AuthService) { 
    this.loginForm = this._formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  ngOnInit(): void {
  }

  onSubmit(){
    // alert(this.loginForm.controls.username.value);
    // alert(this.loginForm.controls.password.value);
    // console.log(typeof(this.loginForm));
    this._auth.loginUser(this.loginForm.value)
    .subscribe(
      res => {
        // localStorage.setItem('token', res.token)
        // this._router.navigate(['/special'])
        console.log(res);
      },
      err => console.log(err)
    ) 
  }

}
