import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import axios from 'axios';

import { ToastController } from '@ionic/angular';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  constructor(private router: Router, public toastCtrl: ToastController) {}

  ngOnInit() {}
  public npml: any;
  public password: any;
  public getnpm: any = '';
  public getem: any = '';
  public getpw: any = '';
  public npm: any = '';
  public email: any = '';
  public pass: any = '';
  public pass2: any = '';
  public id: any = '';

  async login() {
    if (this.npml == '') {
      const toast = await this.toastCtrl.create({
        message: 'Harap isi npm',
        duration: 2000,
      });
      toast.present();
    } else if (this.password == '') {
      const toast = await this.toastCtrl.create({
        message: 'harap isi password',
        duration: 2000,
      });
      toast.present();
    } else if (
      this.npml == '1231' ||
      (this.npml == 'jy@email.com' && this.password == '111')
    ) {
      this.npml = '';
      this.password = '';
      this.router.navigate(['tabs/tab1']);
    } else {
      alert('Login Gagal !!');
    }
  }
  async addData() {
    if (this.npm == '') {
      const toast = await this.toastCtrl.create({
        message: 'Harap isi npm',
        duration: 2000,
      });
      toast.present();
    } else if (this.email == '') {
      const toast = await this.toastCtrl.create({
        message: 'harap isi email',
        duration: 2000,
      });
      toast.present();
    } else if (this.pass == '') {
      const toast = await this.toastCtrl.create({
        message: 'Harap isi password',
        duration: 2000,
      });
      toast.present();
    } else if (this.pass != this.pass2) {
      const toast = await this.toastCtrl.create({
        message: 'Password Tidak Sama',
        duration: 2000,
      });
      toast.present();
    } else {
      const formData = new FormData();
      formData.append('npm', this.npm);
      formData.append('email', this.email);
      formData.append('password', this.pass2);

      try {
        const res = await axios.post(
          'https://praktikum-cpanel-unbin.com/uas_jy/?action=regis',
          formData
        );
        var data = res.data;
        if (data.status) {
          const toast = await this.toastCtrl.create({
            message: 'Registrasi Berhasil',
            duration: 2000,
          });
          this.npm = '';
          this.email = '';
          this.pass = '';
          this.pass2 = '';
          toast.present();
        } else {
          const toast = await this.toastCtrl.create({
            message: `GAGAL : ${data.message}`,
            duration: 2000,
          });
          toast.present();
        }
      } catch (error) {
        const toast = await this.toastCtrl.create({
          message: `GAGAL : ${error}`,
          duration: 2000,
        });
        toast.present();
      }
    }
  }
}
