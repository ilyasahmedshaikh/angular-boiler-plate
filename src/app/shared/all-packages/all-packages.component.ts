import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { BackNavigateService } from '../../core/services/back-navigate/back-navigate.service';
import { PackagesService } from '../../core/services/packages/packages.service';

@Component({
  selector: 'app-all-packages',
  templateUrl: './all-packages.component.html',
  styleUrls: ['./all-packages.component.scss']
})
export class AllPackagesComponent implements OnInit {

  @Input('selectable') selectable: any = false;

  cardType: any = "grid";

  packagesCollection: string = "packages";
  packagesData: any = [];
  packagesUsed: any = [];

  selectedCategory: any = '';
  selectedPackage: any = '';

  constructor(
    private fireStore: AngularFirestore,
    private packageService: PackagesService,
    private backService: BackNavigateService
  ) { }

  ngOnInit(): void {
    this.getPackages();
    this.getSelectedCategory();
  }

  getPackages() {
    this.fireStore.collection(this.packagesCollection).get().subscribe((res) => {
      res.docs.forEach((doc) => {

        let item = {
          id: doc.id,
          image: doc.data()['image'],
          name: doc.data()['name'],
          price: doc.data()['price'],
          category: doc.data()['category'],
        }

        this.packagesData.push(item);
        this.packagesUsed.push(item);
      });
    });
  }

  getSelectedCategory() {
    this.packageService.selectedCategory.subscribe(res => {
      this.packagesUsed = [];
      this.packagesUsed = this.packagesData;

      this.selectedCategory = res;

      let filtered = this.packagesUsed.filter(item => item.category[0].id == this.selectedCategory.id);
      this.packagesUsed = filtered;
    })
  }

  selectPackage(selected) {
    if (this.selectedPackage.id == selected.id) {
      this.selectedPackage = '';
    }
    else {
      this.selectedPackage = selected;
      console.log(this.selectedPackage);
    }
  }

  backEnabled() {
    this.backService.toggleBackState();
  }

}
