import { ValidatorsService } from './../../../core/shared/forms/validators.service';
import { ToolsService } from './../../../core/shared/forms/tools.service';
import { Operation } from './../data/operation.model';
import { OperationsService } from './../data/operations.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from "@angular/forms";

@Component({
  selector: 'cf-new',
  templateUrl: './new.component.html',
  styles: []
})
export class NewComponent implements OnInit {
  public operation: Operation;
  public operationForm: FormGroup;

  constructor(
    public formBuilder: FormBuilder,
    public operationsService: OperationsService,
    public toolService: ToolsService,
    public validatorsService: ValidatorsService,
  ) { }

  ngOnInit() {
    this.createNewOperation();
    this.buildForm();
  }

  createNewOperation() {
    this.operation = this.operationsService.newOperation();
  }

  buildForm() {
    const controls = this.initializeControls();
    this.operationForm = this.formBuilder.group(controls);
  }

  initializeControls() {
    const controls = {
      description: [
        this.operation.description,
        Validators.required
      ],
      amount: [
        this.operation.amount,
        [
          Validators.required,
          this.validatorsService.positiveNumber
        ]
      ],
      date: [
        this.toolService.getDateForControl(this.operation.date),
        Validators.required
      ],
    };
    return controls;
  }

  mustShowErrors(controlName: string): boolean {
    return this.toolService.mustShowErrors(this.operationForm, controlName);
  }

  getControlErrors(controlName: string): string {
    return this.toolService.getControlErrors(this.operationForm, controlName);
  }

  onSubmit() {
    this.operation = this.operationForm.value;
    this.operationsService
      .saveOperation$(this.operation)
      .subscribe(r => this.createNewOperation());
  }

}
