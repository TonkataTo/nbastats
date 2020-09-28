import { Component, Input, Output } from '@angular/core';

@Component({
  selector: 'app-shared-functions',
})
export class SharedFunctionsComponent {
  truncate(input) {
    if (input.length > 19) {
       return input.substring(0, 18) + '...';
    }
    return input;
 }
}
