import { Component, OnInit, OnDestroy, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

declare const Daon: any;


@Component({
  selector: 'app-face-capture',
  templateUrl: './face-capture.component.html',
  styleUrls: ['./face-capture.component.scss']
})
export class FaceCaptureComponent implements OnInit, OnDestroy {
  @ViewChild('videoRef') videoRef!: ElementRef<HTMLVideoElement>;

  // Translate and initialize the equivalent properties here
  gyroscopeChecked: boolean = false;
  cameraResolution: string = '';
  capturedImage: any; // Adjust the type accordingly
  feedbackMessage: string = '';
  loading: boolean = true;
  errorMessage: string = '';
  faceState: string = '';
  isWasmLoaded: boolean = false;
  cameraStarted: boolean = false;
  videoLoaded: boolean = false;
  cameraWidth: number = 0;
  cameraHeight: number = 0;

  ovalStyle = {
    width: 1280,
    height: 720,
  };

  // Translate the Daon.FaceCapture initialization here

  private fc: any;
  constructor(private router: Router) {

    const configuration = {
      width: 1280,
      height: 720,
    };

    // Creación de la instancia
    this.fc = new Daon.FaceCapture(configuration);
    console.log(this.fc);
    this.loadDFQModule();

  }

  loadDFQModule = () => {
    this.fc.loadDFQModule({
      urlFaceDetectorWasm: window.location.origin + "/DaonFaceQuality.wasm",
      onFaceModuleLoaded: ({ isLoaded, error }: { isLoaded: boolean, error: any }) => {
        if (isLoaded)
          this.videoRef.nativeElement.onloadedmetadata = () => {
            this.fc.startFaceDetector();
          };
        if (error) console.log(error);
      },

    });
  };

  startFaceDetector() {

    this.fc.startFaceDetector((faceState: any) => {
      this.faceState = faceState;
      if (faceState === 'FACE_GOOD') {
        this.fc.captureImage((image: any) => {
          this.capturedImage = image;
          this.router.navigate(['/face-verification'], {
            state: { capturedImage: this.capturedImage },
          });
        });
      }
    });
  }


  ngOnInit() {
    // Translate the useEffect logic into Angular lifecycle hooks
    // Use this.videoRef.nativeElement to access the video element
    // You might need to import Daon or use Angular services for certain functionalities
  }

  ngOnDestroy() {
    // Translate the cleanup logic here
  }

  startCamera(){
    this.fc.startCamera(this.videoRef.nativeElement, (err: any) => {
      if (err) {
        console.log('Error starting camera', err);
        return;
      }
      console.log('Camera started');
      this.cameraStarted = true;
      this.videoLoaded = true;
      this.loading = false;
    });
  }


}
