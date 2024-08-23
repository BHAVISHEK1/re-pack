// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-pack-trace',
//   templateUrl: './pack-trace.component.html',
//   styleUrl: './pack-trace.component.css'
// })
// export class PackTraceComponent  implements OnInit {
//   splitterCount = 0;
//   p1Count = 0;
//   p2Count = 0;
  
//   p3Count = 0;
//   p4Count = 0;
//   p5Count = 0;
//   refreshCount = 0;

//   isP1Delayed = false;
//   isP3Delayed = false

//   ngOnInit(): void {
//     this.startCounters();

//     const storedRefreshCount = localStorage.getItem('refreshCount');
//     this.refreshCount = storedRefreshCount ? parseInt(storedRefreshCount) + 1 : 1;

//     localStorage.setItem('refreshCount', this.refreshCount.toString());

//     if (this.refreshCount % 2 === 0) {
//       this.addP1Delay();
//     }

//     setInterval(() => {
//       location.reload();
//     }, 10000);
//   }

//   startCounters(): void {
//     setInterval(() => {

//       this.splitterCount++;
//       this.p2Count++;
//       this.p3Count++;
//       this.p4Count++;

//       this.p5Count++;

//       if (!this.isP1Delayed) {
//         this.p1Count++;
//       }

//       if (!this.isP3Delayed) {
//         this.p1Count++;
//       }


//     }, 1000);
//   }

//   addP1Delay(): void {
//     this.isP1Delayed = true;

//     setTimeout(() => {
//       this.isP1Delayed = false;
//     }, 5000); 

//   }

//   addP3Delay(): void {
//     this.isP3Delayed = true;

//     setTimeout(() => {
//       this.isP3Delayed = false;
//     }, 3000); 

//   }


// }


import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pack-trace',
  templateUrl: './pack-trace.component.html',
  styleUrls: ['./pack-trace.component.css'] 
})
export class PackTraceComponent implements OnInit {
  splitterCount = 0;
  p1Count = 0;
  p2Count = 0;
  p3Count = 0;
  p4Count = 0;
  p5Count = 0;
  refreshCount = 0;

  isP1Delayed = true; 
  isP3Delayed = true; 

  ngOnInit(): void {
    this.startCounters();

    const storedRefreshCount = localStorage.getItem('refreshCount');
    this.refreshCount = storedRefreshCount ? parseInt(storedRefreshCount) + 1 : 1;

    localStorage.setItem('refreshCount', this.refreshCount.toString());

    this.applyDelays();

    setInterval(() => {
      location.reload();
    }, 10000);
  }

  startCounters(): void {
    setInterval(() => {
      if (this.splitterCount < 10) this.splitterCount++;
      if (this.p2Count < 10) this.p2Count++;
      if (this.p3Count < 10 && !this.isP3Delayed) this.p3Count++;
      if (this.p4Count < 10) this.p4Count++;
      if (this.p5Count < 10) this.p5Count++;

      if (!this.isP1Delayed && this.p1Count < 10) this.p1Count++;

    }, 1000);
  }

  applyDelays(): void {

    setTimeout(() => {
      this.isP1Delayed = false;
    }, 5000); 

   
    setTimeout(() => {
      this.isP3Delayed = false;
    }, 3000); 
  }
}
