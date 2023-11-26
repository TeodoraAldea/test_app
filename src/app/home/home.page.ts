import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  public form!: FormGroup<any>;

  constructor(private _fb: FormBuilder,
              private alertController: AlertController,
              private router: Router) {}

  ngOnInit(): void {
    this.form = this._fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(5)]],
      remember: false
    });
  }

  onAccept(){
    if (!this.form.invalid){
      console.log('OK');
      this.navigate();
    } else {
      this.openAlert();
    }
  }

  async openAlert(){
    let msg: string = '';
    if (!this.form.controls["email"].value || !this.form.controls["password"].value){
      msg = "Es obligatorio rellenar todos los campos";
    } else if(this.form.controls["email"].value && this.form.controls["email"].invalid){
      msg = "El email insertado es invalido";
    } else if (this.form.controls["password"].value && this.form.controls["password"].invalid){
      msg = "La contraseña debe contener al menos 5 caracteres";
    }
    const alert = await this.alertController.create({
      message: msg,
      htmlAttributes: {
        'aria-label': 'alert dialog',
      },
      buttons: [{
        id: '1',
        text: 'ENTENDIDO',
        handler: () => alert.dismiss()
      }]
    });
    alert.present();
  }

  private navigate(){
    this.router.navigate(['/list-images'])
  }
}
