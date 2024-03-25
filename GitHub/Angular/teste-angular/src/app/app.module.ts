import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { NgModule }  from "@angular/core";
import { FirstComponentComponent  } from "./components/first-component/first-component.component";


@NgModule({
    declarations: [
        AppComponent,
        FirstComponentComponent
    ],
    imports: [
        BrowserModule],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}