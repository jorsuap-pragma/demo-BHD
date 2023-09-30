import { Component, OnInit, OnDestroy, ElementRef, ViewChild, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { FaceCapturedService } from 'src/app/services/face-captured.service';

declare const Daon: any;
@Component({
  selector: 'app-face-capture',
  templateUrl: './face-capture.component.html',
  styleUrls: ['./face-capture.component.scss']
})
export class FaceCaptureComponent implements OnInit, OnDestroy {

  @ViewChild('videoRef', { static: false }) videoRef!: ElementRef<HTMLVideoElement>;
  configuration = {
    width: 1280,
    height: 720,
  };

  gyroscopeChecked: boolean = false;
  cameraResolution: string = '';
  capturedImage: any;
  feedbackMessage: string = '';
  loading: boolean = true;
  errorMessage: string = '';
  faceState: string = '';
  isWasmLoaded: boolean = false;
  cameraStarted: boolean = false;
  videoLoaded: boolean = false;
  cameraWidth: number = 0;
  cameraHeight: number = 0;
  private faceCapture: any;
  public isCameraReady: boolean = false;
  public isFindFaceReady: boolean = false;
  public videoSettings: any = {};
  public imageCaptured:string = '';
  public screenWidth!: number;
  public isMobile!: boolean;
  public currentStep = 'Captura facial'
  public serverPublicKey = {
    kty: "RSA",
    "x5t#S256": "ozZ9LtuUcz1Mux8uyqIGAPTXIwG_Mw1LXnCxOBcczW0",
    e: "AQAB",
    use: "enc",
    kid: "QTAzMYfRl3-PaWD8OE9IqCyYaQ",
    x5c: [
      "MIIE2TCCAsOgAwIBAgIRALDHs3Nt2Enfg1a2VXwrnYgwCwYJKoZIhvcNAQELMEcxFTATBgNVBAMMDElkZW50aXR5WCBDQTENMAsGA1UECgwERGFvbjESMBAGA1UECwwJSWRlbnRpdHlYMQswCQYDVQQGEwJJRTAeFw0yMjA1MjcxMzQ4NTZaFw0zMjA1MjcxMzQ4NTZaMFoxDTALBgNVBAoMBERhb24xEjAQBgNVBAsMCUlkZW50aXR5WDELMAkGA1UEBhMCSUUxKDAmBgNVBAMMH0RFX0RBT05fQVVUSEVOVElDQVRJT05fREFUQV9LRUswggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQCjOZB0usp0RNGLn3FhZYrgx5DkTqHysrFWYKoaekTM6vQ5UuFSkcZKGChspxQPmH6Wj76clSUEs7BAilIaDZkX2N2efYli/xFpgv1qaEd7LT021U3uVtHl5kGbODSjfZBFckAS6AW10Ftrkuxmy/vkRg546NgPCbUwu2tElDpWnZOrkdaGtET1W/vdSXYDtBYw9w4ES5Wl/2po31ZgOGJSHAhFJYLqDAkK+BAka54JSum6pYYVDuQ++8a2nyHIedHmiqoLR4DLLTwfh2tIN7J9e4FQ+qgvb+nC1KukopEu+ZVXC+tKdMKVyfPtPmkiZfp4KvxekpF0jaLUm8sRJLbBAgMBAAGjgbAwga0wfgYDVR0jBHcwdYAUZplSSlDw67i7wEa+1wVzqzvdL5ahS6RJMEcxFTATBgNVBAMMDElkZW50aXR5WCBDQTENMAsGA1UECgwERGFvbjESMBAGA1UECwwJSWRlbnRpdHlYMQswCQYDVQQGEwJJRYIQKuhll9ePQGSsywpelEVwazAdBgNVHQ4EFgQUgfBQ2/rDJMye6MFL2eFzbrUOqIgwDAYDVR0TAQH/BAIwADALBgkqhkiG9w0BAQsDggIBAJBv8/2RLpUNaolUGXVqIsc57gon8arG/SQa6ZaP0bSBezGuqAWD28bdbTKaAT44lLKdLya+BkdtmYDZw8PpyFbQgbdSnAhrk1+qrHvNIy+chJona4vDOOVnkD0PtlUcKQEVUEaWs/pzJhF/QyDRlX1yAkVNYUSXHg27MAzJxh0rZkRVNp3eJDk2oIxsElELez+CWTRWNP8d3RHcDNRyLB2+QI4NgGCa8UglFezQnL9p0JzC1ofNbp+NmRY/BuxUcNPr1qNVvtUYwVGFbHd2BpcFIX37Cwr6qdZZ3PCVRyhhs3EVPRot27ANo5DJDn6fVwycCE9/YhohZKdMpZebQSMV9fQmmjXYwOQcMLNoHU8MhAhdCdIUkDq8TcOtrZlhvphtzrCUGCj9eorM6zwoP66whNq0f7vR2BfHLtrHh+BIk8ej2SvrK8SgsfZaZfLvssW7V3B5OxNViuywN/dkg5rnWtHe4Bpet/fUgSLIYbbVi8K30LqIOiVfO1/nEqAhwNUroQ456R37xxFNHTn9HK3eijIPbva3YYLKVHxj9thkJyX7IpdImuXYPmkwQSGc4j/Ypk32StRAQXoM09F5yDuV4aWROuAiFoYRD86Ojna3DXfu09cVCQfqHsL1c5EsQzzQIwZ5ejdM58ldtrNF+h2cNVV8NwXXdyu74ZJ9lmVE",
    ],
    n: "ozmQdLrKdETRi59xYWWK4MeQ5E6h8rKxVmCqGnpEzOr0OVLhUpHGShgobKcUD5h-lo--nJUlBLOwQIpSGg2ZF9jdnn2JYv8RaYL9amhHey09NtVN7lbR5eZBmzg0o32QRXJAEugFtdBba5LsZsv75EYOeOjYDwm1MLtrRJQ6Vp2Tq5HWhrRE9Vv73Ul2A7QWMPcOBEuVpf9qaN9WYDhiUhwIRSWC6gwJCvgQJGueCUrpuqWGFQ7kPvvGtp8hyHnR5oqqC0eAyy08H4drSDeyfXuBUPqoL2_pwtSrpKKRLvmVVwvrSnTClcnz7T5pImX6eCr8XpKRdI2i1JvLESS2wQ",
  };

  public idxUserId = "QTAzO6qXt4JpsvO92x9SZa-lJQ";



  constructor(
    private router: Router,
    private faceCapturedService : FaceCapturedService ) {}

  ngOnInit() {
    this.screenWidth = window.innerWidth;
    this.faceCapture = new Daon.FaceCapture(this.configuration);
    this.loadDFQModule();
    this.isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    console.log('------',this.isMobile);

  }

  loadDFQModule = () => {
    console.log('--------------------------', "test pasth 4", "assets/public/DaonFaceQuality.wasm",);
    
    this.faceCapture.loadDFQModule({
      //urlFaceDetectorWasm: window.location.origin + "/assets/public/DaonFaceQuality.wasm",
      urlFaceDetectorWasm: "assets/public/DaonFaceQuality.wasm",
      onFaceModuleLoaded: ({ isLoaded, error }: { isLoaded: boolean, error?: any }) => {
        if ( isLoaded ) {
          this.startCamera();
          this.isWasmLoaded = true;
          this.videoRef.nativeElement.onloadedmetadata = () => {
            this.startFaceDetector();
          };
        } else {
          console.error(error);
        }
      }
    });
  };

startFaceDetector() {

  this.isCameraReady = true;
  this.isFindFaceReady = true;
  const settings = ((this.videoRef.nativeElement.srcObject as MediaStream)?.getVideoTracks()[0].getSettings() as MediaTrackSettings);

  this.videoSettings =
      `Width: ${settings.width}; video width: ${this.videoRef.nativeElement.videoWidth} (asked for ${this.configuration.width}) ` +
      `Height: ${settings.height} (asked for ${this.configuration.height})`;

  this.faceCapture.startFaceDetector(
    {
      onFaceDetectorInitialized: () => {
        console.log("DEMO FaceDetector initialized");
        this.faceCapture.findFace();
      },
      onFaceDetectorError:  (err:any) => {
        console.log(err);
      },
      onFaceDetectorFeedback: (detectorFeedbackObject:any)  => {
        if (detectorFeedbackObject.result === "PASS") {
          this.faceState = 'face-passed';
          this.imageCaptured = detectorFeedbackObject.faceImage;
          this.feedbackMessage = "passed";
          this.faceCapturedService.setFaceImg(detectorFeedbackObject.faceImage);
          this.router.navigate(['/face-review']);
          this.faceCapture.stopCamera();
        } else {
          this.faceState = 'face-found';
          setTimeout(() => {
            this.faceCapture.findFace();
          }, 50);
          this.feedbackMessage = detectorFeedbackObject.feedback.message;
        }
      },
    },
    {
      idxUserId:this.idxUserId,
      serverPublicKey:this.serverPublicKey,
    }
  );

  }


  startCamera(){

  // validacion opcional
  // this.faceCapture.isGyroscopeActive().then((result: any) => {
  //     console.log('Gyroscope is active', result);
  //   }).catch((error: any) => {
  //     console.log('Error checking gyroscope', error);
  //   });
  this.faceCapture.startCamera(this.videoRef.nativeElement).then((result: any) => {
    this.loading = false;
    console.log('Camera started', result);
    this.cameraStarted = true;
    this.videoLoaded = true;
    this.loading = false;
    }).catch((error: any) => {
      console.log('Error starting camera', error);
      this.errorMessage = error;
    });
  }

  findFace() {
    const imageData = this.faceCapture.findFace();
    console.log(imageData);
  }
  ngOnDestroy() {

  }


}
