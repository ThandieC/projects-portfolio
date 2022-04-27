import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-bbc-daycare',
  templateUrl: './bbc-daycare.component.html',
  styleUrls: ['./bbc-daycare.component.css'],
})
export class BbcDaycareComponent implements OnInit {
  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {}

  onGalleryImages(id: string) {
    this.router.navigate([id], { relativeTo: this.route });
  }
}
