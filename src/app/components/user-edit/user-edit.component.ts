import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { NgForm } from '@angular/forms/forms';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit, OnDestroy {
  user: any = {};
  sub: Subscription;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private userService: UserService) { }

  ngOnInit() {
      this.sub = this.route.params.subscribe(params => {
          const id = params['id'];
          if (id) {
              this.userService.get(id).subscribe((user: any) => {
                  if (user) {
                      this.user = user;
                      this.user.href = user._links.self.href;
                  } else {
                      console.log(`user with id'${id}' not found`);
                      this.gotoList();
                  }
              });
          }
      });
  }
  
  ngOnDestroy(): void {
      this.sub.unsubscribe();
  }
  
  gotoList() {
      this.router.navigate(['/user-list']);
  }
  
  save(form: NgForm) {
      this.userService.save(form).subscribe(result => {
         this.gotoList();
      }, error => console.error(error));
  }
  
  remove(href) {
      this.userService.remove(href).subscribe(result => {
          this.gotoList();
      }, error => console.error(error));
  }

}
