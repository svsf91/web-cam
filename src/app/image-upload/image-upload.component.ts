import {Component, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-image-upload',
  templateUrl: './image-upload.component.html',
  styleUrls: ['./image-upload.component.css']
})
export class ImageUploadComponent implements OnInit {

  @ViewChild('video') video: any;
  @ViewChild('canvas') canvas: any;
  url = '';
  videoEle: any;
  canvasEle: any;
  state = 'empty';
  text = 'open camera';

  constructor() {
  }

  ngOnInit() {
    this.configVideo();
  }

  onSelectFile(event) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]); // read file as data url

      reader.onload = (event: any) => { // called once readAsDataURL is completed
        this.url = event.target.result;
      }
    }
  }

  onClickCamera() {
    switch(this.state) {
      case 'empty': {
        this.state = 'camera';
        this.text = 'capture image';
        break;
      }
      case 'camera': {
        this.state = 'image';
        this.text = 'reset';
        this.onCapture();
        break;
      }
      case 'image': {
        this.state = 'empty';
        this.text = 'open camera';
        break;
      }
    }
  }

  configVideo() {
    this.videoEle = this.video.nativeElement;
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices.getUserMedia({video: true})
        .then(stream => {
          this.videoEle.srcObject = stream;
          this.videoEle.play();
        })
    }
  }

  onCapture() {
    this.canvasEle = this.canvas.nativeElement;
    this.canvasEle.getContext('2d').drawImage(this.videoEle, 0, 0);
  }

}
