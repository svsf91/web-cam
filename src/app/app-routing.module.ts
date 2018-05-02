import {RouterModule, Routes} from "@angular/router";
import {ImageUploadComponent} from "./image-upload/image-upload.component";


const routes: Routes = [
  {path: '', component: ImageUploadComponent}
];

export const Routing = RouterModule.forRoot(routes);
