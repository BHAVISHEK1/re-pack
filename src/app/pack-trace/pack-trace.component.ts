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













// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-pack-trace',
//   templateUrl: './pack-trace.component.html',
//   styleUrls: ['./pack-trace.component.css'] 
// })
// export class PackTraceComponent implements OnInit {
//   splitterCount = 0;
//   p1Count = 0;
//   p2Count = 0;
//   p3Count = 0;
//   p4Count = 0;
//   p5Count = 0;
//   refreshCount = 0;

//   isP1Delayed = true; 
//   isP3Delayed = true; 

//   ngOnInit(): void {
//     this.startCounters();

//     const storedRefreshCount = localStorage.getItem('refreshCount');
//     this.refreshCount = storedRefreshCount ? parseInt(storedRefreshCount) + 1 : 1;

//     localStorage.setItem('refreshCount', this.refreshCount.toString());

//     this.applyDelays();

//     setInterval(() => {
//       location.reload();
//     }, 10000);
//   }

//   startCounters(): void {
//     setInterval(() => {
//       if (this.splitterCount < 10) this.splitterCount++;
//       if (this.p2Count < 10) this.p2Count++;
//       if (this.p3Count < 10 && !this.isP3Delayed) this.p3Count++;
//       if (this.p4Count < 10) this.p4Count++;
//       if (this.p5Count < 10) this.p5Count++;

//       if (!this.isP1Delayed && this.p1Count < 10) this.p1Count++;

//     }, 1000);
//   }

//   applyDelays(): void {

//     setTimeout(() => {
//       this.isP1Delayed = false;
//     }, 5000); 

   
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
    this.loadState();
    this.startCounters();

    // Initialize or increment refresh count
    const storedRefreshCount = localStorage.getItem('refreshCount');
    this.refreshCount = storedRefreshCount ? parseInt(storedRefreshCount) : 0;

    // Apply delays based on refresh count
    this.applyDelays();

    // Trigger counter reset and refresh count increment
    setInterval(() => {
      this.resetCounters();
      this.incrementRefreshCount();
      this.applyDelays();
    }, 10000); // 10 seconds interval
  }

  startCounters(): void {
    setInterval(() => {
      // Increment counters
      if (this.splitterCount < 10) this.splitterCount++;
      if (this.p2Count < 10) this.p2Count++;
      if (this.p3Count < 10 && !this.isP3Delayed) this.p3Count++;
      if (this.p4Count < 10) this.p4Count++;
      if (this.p5Count < 10) this.p5Count++;

      if (!this.isP1Delayed && this.p1Count < 10) this.p1Count++;

      // Save state to local storage
      this.saveState();
    }, 1000);
  }

  applyDelays(): void {
    // Apply delays if refresh count is even
    if (this.refreshCount % 2 === 0) {
      // Apply P1 delay
      this.isP1Delayed = true;
      setTimeout(() => {
        this.isP1Delayed = false;
      }, 5000); // 5 seconds delay for P1

      // Apply P3 delay
      this.isP3Delayed = true;
      setTimeout(() => {
        this.isP3Delayed = false;
      }, 3000); // 3 seconds delay for P3
    } else {
      this.isP1Delayed = false;
      this.isP3Delayed = false;
    }
  }

  incrementRefreshCount(): void {
    this.refreshCount++;
    localStorage.setItem('refreshCount', this.refreshCount.toString());
  }

  resetCounters(): void {
    this.splitterCount = 0;
    this.p1Count = 0;
    this.p2Count = 0;
    this.p3Count = 0;
    this.p4Count = 0;
    this.p5Count = 0;
  }

  saveState(): void {
    localStorage.setItem('splitterCount', this.splitterCount.toString());
    localStorage.setItem('p1Count', this.p1Count.toString());
    localStorage.setItem('p2Count', this.p2Count.toString());
    localStorage.setItem('p3Count', this.p3Count.toString());
    localStorage.setItem('p4Count', this.p4Count.toString());
    localStorage.setItem('p5Count', this.p5Count.toString());
    localStorage.setItem('refreshCount', this.refreshCount.toString());
  }

  loadState(): void {
    this.splitterCount = parseInt(localStorage.getItem('splitterCount') || '0');
    this.p1Count = parseInt(localStorage.getItem('p1Count') || '0');
    this.p2Count = parseInt(localStorage.getItem('p2Count') || '0');
    this.p3Count = parseInt(localStorage.getItem('p3Count') || '0');
    this.p4Count = parseInt(localStorage.getItem('p4Count') || '0');
    this.p5Count = parseInt(localStorage.getItem('p5Count') || '0');
  }
}
