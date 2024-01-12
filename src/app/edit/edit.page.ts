import { Component, OnInit } from '@angular/core';
import { ModalController, NavController, NavParams } from '@ionic/angular';
import axios from 'axios';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.page.html',
  styleUrls: ['./edit.page.scss'],
})
export class EditPage implements OnInit {
  public mahasiswaData: any = [];
  public nama_mahasiswa: any = '';
  public jenis_kelamin: any = '';
  public hp: any = '';
  public email: any = '';
  public asal: any = '';
  public jurusan: any = '';
  public foto_siswa: any = '';
  public jenjang: any = '';
  public kelas: any = '';
  public info: any = '';
  foto: any;
  mahasiswaId: any;

  constructor(
    public navParams: NavParams,
    public navCtrl: NavController,
    public modalCtrl: ModalController
  ) {
    this.mahasiswaId = this.navParams.get('id');
    this.getData();
  }

  async imageUpload(e: any) {
    const file = e.target.files[0];
    this.foto = file;
  }

  async dismiss() {
    await this.modalCtrl.dismiss();
  }

  async getData() {
    try {
      const res = await axios.post(
        `https://praktikum-cpanel-unbin.com/uas_jy/?action=get&kd=${this.mahasiswaId}`
      );
      var data = res.data;
      this.nama_mahasiswa = data.data.nama_mahasiswa;
      this.jenis_kelamin = data.data.jenis_kelamin;
      this.hp = data.data.no_hp;
      this.email = data.data.email;
      this.asal = data.data.asal_sekolah;
      this.jurusan = data.data.jurusan;
      this.jenjang = data.data.jenjang;
      this.kelas = data.data.kelas;
      this.info = data.data.info;
      this.foto_siswa = data.data.foto_siswa;
    } catch (error) {}
  }

  async updateData() {
    const fd = new FormData();
    fd.append('nama_mahasiswa', this.nama_mahasiswa);
    fd.append('jenis_kelamin', this.jenis_kelamin);
    fd.append('no_hp', this.hp);
    fd.append('email', this.email);
    fd.append('asal_sekolah', this.asal);
    fd.append('jurusan', this.jurusan);
    fd.append('jenjang', this.jenjang);
    fd.append('kelas', this.kelas);
    fd.append('info', this.info);

    if (this.foto != undefined) {
      fd.append('foto_siswa', this.foto);
    } else {
      fd.append('foto_siswa', this.foto_siswa);
    }

    try {
      const res = await axios.post(
        `https://praktikum-cpanel-unbin.com/uas_jy/?action=update&kd=${this.mahasiswaId}`,
        fd
      );
      var data = res.data;
      if (data.status) {
        alert('Berhasil Update Data');
        this.dismiss();
        this.navCtrl.navigateRoot('/tabs/tab2');
      } else {
        alert(data.message);
      }
    } catch (error) {}
  }
  handleRefresh(event) {
    setTimeout(() => {
      this.navCtrl.navigateRoot('/tabs/tab1');
      event.target.complete();
    }, 1000);
  }
  ngOnInit() {}
}
