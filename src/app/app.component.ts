import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AnimationController } from '@ionic/angular';
import { register } from 'swiper/element/bundle';
register();
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(
    public router: Router,
    private animatonCtrl: AnimationController
  ) {
    this.initializeApp();
  }
  myCustomPageTransition = (baseEl: any, opts?: any) => {
    console.log('opts.enteringEl:' + opts.enteringEl);
    console.log('opts.leavingEl:' + opts.leavingEl);
    var anim1 = this.animatonCtrl
      .create()
      .addElement(opts.leavingEl)
      .duration(2000)
      .iterations(1)
      .easing('ease-out')
      .fromTo('opacity', '1', '0.0');
    var anim2 = this.animatonCtrl
      .create()
      .addElement(opts.enteringEl)
      .duration(2000)
      .iterations(1)
      .easing('ease-out')
      .fromTo('opacity', '0.0', '1');
    var anim2 = this.animatonCtrl
      .create()
      .duration(2000)
      .iterations(1)
      .addAnimation([anim1, anim2]);
    return anim2;
  };
  initializeApp() {
    this.router.navigateByUrl('/splash');
  }
}
