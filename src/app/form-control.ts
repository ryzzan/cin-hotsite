import { FormBuilder, Validators } from '@angular/forms';

let Controls = [],
formBuilder = new FormBuilder();

Controls[0] = formBuilder.group({
    teste: [null, [Validators.required]]
});

export { Controls }