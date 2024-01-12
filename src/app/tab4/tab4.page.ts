import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import axios from 'axios';
import { EditPage } from '../edit/edit.page';

@Component({
  selector: 'app-tab4',
  templateUrl: 'tab4.page.html',
  styleUrls: ['tab4.page.scss'],
})
export class Tab4Page {
  public mahasiswaData: any = [];

  public npm: any = '';
  public nama_mahasiswa: any = '';
  public jenis_kelamin: any = '';
  public hp: any = '';
  public email: any = '';
  public asal: any = '';
  public jurusan: any = '';
  public foto_siswa: any = '';

  constructor(public modalCtrl: ModalController) {
    this.getData();
  }

  async getData() {
    try {
      const res = await axios.get(
        'https://praktikum-cpanel-unbin.com/uas_jy/?action=getAll'
      );
      this.mahasiswaData = res.data.data;
    } catch (error) {
      console.log(error);
    }
  }

  async deleteData(id: any) {
    const fd = new FormData();
    try {
      const res = await axios.post(
        `https://praktikum-cpanel-unbin.com/uas_jy/?action=delete&kd=${id}`
      );
      var data = res.data;
      if (data.status) {
        alert('Berhasil Menghapus Data');
        this.getData();
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.log(error);
    }
  }

  async getDataMahasiswa(id: any) {
    const modal = await this.modalCtrl.create({
      component: EditPage,
      componentProps: {
        id: id,
      },
    });
    return await modal.present();
  }
  handleRefresh(event) {
    setTimeout(() => {
      this.getData();
      event.target.complete();
    }, 1000);
  }
}
