import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MessageValidatorService } from '../../../services/message-validator.service';

@Component({
  selector: 'app-message-validator',
  templateUrl: './message-validator.component.html',
  styleUrls: ['./message-validator.component.scss']
})
export class MessageValidatorComponent {
  @Input() control: FormControl;

  constructor() { }

  get errorMessage() {
    for (let propertyName in this.control.errors) {
      if (this.control.errors.hasOwnProperty(propertyName) && (this.control.touched || this.control.dirty)) {
        return MessageValidatorService.getValidatorErrorMessage(propertyName, this.control.errors[propertyName]);
      }
    }
    return null;
  }

}
