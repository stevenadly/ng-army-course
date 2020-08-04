import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "imageTransform",
})
export class ImageTransformPipe implements PipeTransform {
  transform(imgUrl: string, placeholder: string, forceHttp: boolean = false) {
    let finalImg = imgUrl ? imgUrl : placeholder;
    if (forceHttp) {
      if (finalImg.indexOf("https") == -1) {
        finalImg.replace("http", "https");
        return finalImg;
      }
    }
  }
}
