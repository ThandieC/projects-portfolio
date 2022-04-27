import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-showcase',
  templateUrl: './showcase.component.html',
  styleUrls: ['./showcase.component.css'],
})
export class ShowcaseComponent implements OnInit {
  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {}

  onGalleryImages(id: string) {
    this.router.navigate([id], { relativeTo: this.route });
  }
}
