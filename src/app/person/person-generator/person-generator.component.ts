import {Component, EventEmitter, OnInit, Output} from "@angular/core";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {GenerationConfig} from "../generation-config";
import {atLeastOneFieldValueTruthy} from "../../shared/validators/at-least-one-field-selected.validator";

@Component({
  selector: "app-person-generator",
  templateUrl: "./person-generator.component.html",
  styleUrls: ["./person-generator.component.scss"]
})
export class PersonGeneratorComponent implements OnInit {

  generator!: FormGroup;

  @Output()
  private generateRequest = new EventEmitter<GenerationConfig>();

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.generator = this.formBuilder.nonNullable.group({
      count: [1000, [Validators.required, Validators.min(1), Validators.max(1000)]],
      male: [true],
      female: [true]
    }, {validators: [atLeastOneFieldValueTruthy(['male', 'female'])]});
  }

  generate() {
    const value: GenerationConfig = {
      count: this.generator.value.count,
      male: this.generator.value.male,
      female: this.generator.value.female
    };
    if (this.generator.valid)
      this.generateRequest.emit(value);
  }

}
