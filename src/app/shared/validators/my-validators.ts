import { FormControl } from '@angular/forms';

export class MyValidators {
  subgroup = (control: FormControl) => {
    if (control.value != 1) {
      if (control.value != 1) {
        return { "Apenas membros da indústria podem participar do evento": true };
      }
    }

    return null;
  }
}