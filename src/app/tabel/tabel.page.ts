import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import { Router } from '@angular/router';
import { EditPage } from '../edit/edit.page';
import { ModalController } from '@ionic/angular';
import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
@Component({
  selector: 'app-tabel',
  templateUrl: './tabel.page.html',
  styleUrls: ['./tabel.page.scss'],
})
export class TabelPage implements OnInit {
  public allData: any = [];
  public nama_mahasiswa: any = '';
  public jenis_kelamin: any = '';
  public jurusan: any = '';
  public foto_siswa: any = '';
  public ver: any = [];
  public ok: any = [];
  pesan: string;
  constructor(private router: Router, public modalCtrl: ModalController) {
    this.tbl();
  }
  logot() {
    this.router.navigate(['/tabs']);
  }
  async tbl() {
    try {
      const res = await axios.get(
        'https://praktikum-cpanel-unbin.com/uas_jy/?action=getAll'
      );
      this.allData = res.data.data;
      console.log(this.allData);
    } catch (err) {
      console.log(err);
    }
  }
  handleRefresh(event) {
    setTimeout(() => {
      event.target.complete();
      this.tbl();
      this.setMessage('Verifikasi Ok');
    }, 1000);
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
        this.tbl();
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
  private _messageSubject = new BehaviorSubject<string>('Menunggu Verifikasi');
  public message$ = this._messageSubject.asObservable();

  setMessage(message: string) {
    this._messageSubject.next(message);
  }
  ngOnInit() {
    this.message$.subscribe((message) => {
      this.pesan = message;
    });
  }
}
