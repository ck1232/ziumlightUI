import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NouisliderModule } from 'ng2-nouislider';
import { UserService } from './services/user.service';
import { UserComponent } from './components/user/user.component';
import { HttpInterceptor } from './helpers/http.interceptor';
import 'hammerjs';
import {
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatStepperModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
    MatOptionModule,
  } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserEditComponent } from './components/user-edit/user-edit.component';
import { HeaderComponent } from './components/header/header.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { TemplateComponent } from './components/template/template.component';
import { NavMenuComponent } from './components/nav-menu/nav-menu.component';
import { ProductListingTemplateComponent } from './components/product-listing-template/product-listing-template.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProductFilterComponent } from './components/product-filter/product-filter.component';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { BreadcrumbNodeComponent } from './components/breadcrumb-node/breadcrumb-node.component';
import { CapitalizePipe } from './pipe/capitalize.pipe';
import { ProductComponent } from './components/product/product.component';
import { ProductSortComponent } from './components/product-sort/product-sort.component';
import { ProductPaginationComponent } from './components/product-pagination/product-pagination.component';
import { PriceFilterComponent } from './components/price-filter/price-filter.component';
import { ShippingFilterComponent } from './components/shipping-filter/shipping-filter.component';
import { ProductSortMobileComponent } from './components/product-sort-mobile/product-sort-mobile.component';
import { ProductFilterMobileComponent } from './components/product-filter-mobile/product-filter-mobile.component';
import { ProductFilterDialogComponent } from './components/product-filter-dialog/product-filter-dialog.component';
import { LoginTemplateComponent } from './components/login-template/login-template.component';
const appRoutes: Routes = [
{ path: '', redirectTo: '/home', pathMatch: 'full' },
{
    path: 'home',
    component: TemplateComponent,
    children: [
       {path: '',
           component: ProductListingTemplateComponent,
           outlet: 'content'
       }
    ]
},
{
    path: 'user-list',
    component: UserComponent
},
{
    path: 'user-add',
    component: UserEditComponent
},
{
    path: 'user-edit/:id',
    component: UserEditComponent
},
{
    path: '**',
    redirectTo: '/404'
},
{
    path: '404',
    component: PageNotFoundComponent
}
];
@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UserEditComponent,
    HeaderComponent,
    PageNotFoundComponent,
    TemplateComponent,
    NavMenuComponent,
    ProductListingTemplateComponent,
    FooterComponent,
    ProductFilterComponent,
    BreadcrumbComponent,
    BreadcrumbNodeComponent,
    CapitalizePipe,
    ProductComponent,
    ProductSortComponent,
    ProductPaginationComponent,
    PriceFilterComponent,
    ShippingFilterComponent,
    ProductSortMobileComponent,
    ProductFilterMobileComponent,
    ProductFilterDialogComponent,
    LoginTemplateComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    NouisliderModule,
    MatOptionModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    UserService,
    { provide: HTTP_INTERCEPTORS, useClass: HttpInterceptor, multi: true }
  ],
  bootstrap: [AppComponent],
  exports: [RouterModule, UserComponent, PageNotFoundComponent],
  entryComponents: [ProductFilterDialogComponent]
})
export class AppModule { }
