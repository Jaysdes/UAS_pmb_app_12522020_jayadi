import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';
import axios from 'axios';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
})
export class Tab3Page {
  public nama_mahasiswa: any = '';
  public jenis_kelamin: any = '';
  public hp: any = '';
  public email: any = '';
  public asal: any = '';
  public jurusan: any = '';
  public jenjang: any = '';
  public kelas: any = '';
  public info: any = '';
  public foto_siswa: any = '';

  constructor(public toastCtrl: ToastController) {}

  async imageUpload(e: any) {
    const file = e.target.files[0];
    this.foto_siswa = file;
  }

  async addData() {
    const formData = new FormData();
    formData.append('nama_mahasiswa', this.nama_mahasiswa);
    formData.append('jenis_kelamin', this.jenis_kelamin);
    formData.append('no_hp', this.hp);
    formData.append('email', this.email);
    formData.append('asal_sekolah', this.asal);
    formData.append('jurusan', this.jurusan);
    formData.append('jenjang', this.jenjang);
    formData.append('kelas', this.kelas);
    formData.append('info', this.info);
    formData.append('foto_siswa', this.foto_siswa);

    try {
      const res = await axios.post(
        'https://praktikum-cpanel-unbin.com/uas_jy/?action=insert',
        formData
      );

      var data = res.data;
      if (data.status) {
        const toast = await this.toastCtrl.create({
          message: 'Data berhasil ditambahkan',
          duration: 2000,
        });
        this.nama_mahasiswa = '';
        this.jenis_kelamin = '';
        this.hp = '';
        this.email = '';
        this.asal = '';
        this.jenjang = '';
        this.kelas = '';
        this.info = '';
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
  handleRefresh(event) {
    setTimeout(() => {
      // Any calls to load data go here
      event.target.complete();
    }, 1000);
  }
}
