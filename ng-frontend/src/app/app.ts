import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App implements OnInit {
  private http = inject(HttpClient);
  protected title = 'ng-frontend';

  ngOnInit() {
    this.http.get('/api').subscribe(console.info);
  }
}
