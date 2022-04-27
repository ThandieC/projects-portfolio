import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-brilliant-minds',
  templateUrl: './brilliant-minds.component.html',
  styleUrls: ['./brilliant-minds.component.css'],
})
export class BrilliantMindsComponent implements OnInit {
  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {}

  onGalleryImages(id: string) {
    this.router.navigate([id], { relativeTo: this.route });
  }
}
