import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ItemsComponent } from "./items/items.component";
import { SingleItemComponent } from "./items/single-item/single-item.component";
import { PersonsComponent } from "./persons/persons.component";
import { SinglePersonComponent } from "./persons/single-person/single-person.component";
import { SubPersonComponent } from "./sub-person/sub-person.component";
import { HighlightDirective } from "./highlight.directive";
import { RandomColorsDirective } from "./random-colors.directive";
import { UnlessDirective } from "./unless.directive";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { ImageTransformPipe } from "./dashboard/image-transform.pipe";
import { SumPipe } from "./dashboard/sum.pipe";
import { FormsPartComponent } from "./forms-part/forms-part.component";
import { Dashboard2Component } from "./dashboard2/dashboard2.component";
import { FormasynComponent } from "./formasyn/formasyn.component";
import { DynamicformsComponent } from "./dynamicforms/dynamicforms.component";
import { TemplateDrivenFormComponent } from "./template-driven-form/template-driven-form.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

// RECOMMENDED
import { BsDropdownModule } from "ngx-bootstrap/dropdown";
import { TeamsComponent } from "./teams/teams.component";
import { AddTeamComponent } from "./add-team/add-team.component";
import { EditTeamComponent } from "./edit-team/edit-team.component";

import { MatButtonModule } from "@angular/material/button";
import { ProductsListComponent } from "./products-list/products-list.component";
import { ProductDetailsComponent } from "./product-details/product-details.component";
import { HomeComponent } from "./home/home.component";
import { HomeSidebarComponent } from "./home-sidebar/home-sidebar.component";
import { ProductsSidebarComponent } from "./products-sidebar/products-sidebar.component";

import { MatListModule } from "@angular/material/list";

@NgModule({
  declarations: [
    AppComponent,
    ItemsComponent,
    SingleItemComponent,
    PersonsComponent,
    SinglePersonComponent,
    SubPersonComponent,
    HighlightDirective,
    RandomColorsDirective,
    UnlessDirective,
    DashboardComponent,
    ImageTransformPipe,
    SumPipe,
    FormsPartComponent,
    Dashboard2Component,
    FormasynComponent,
    DynamicformsComponent,
    TemplateDrivenFormComponent,
    TeamsComponent,
    AddTeamComponent,
    EditTeamComponent,
    // ProductsListComponent,
    // ProductDetailsComponent,
    HomeComponent,
    HomeSidebarComponent,
    ProductsSidebarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    BsDropdownModule.forRoot(),
    FormsModule,

    // angular material
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
