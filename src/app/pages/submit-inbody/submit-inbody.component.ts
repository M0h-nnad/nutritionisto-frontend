import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { InbodyService } from '../../shared/services/inbody/inbody.service';

@Component({
  selector: 'app-submit-inbody',
  templateUrl: './submit-inbody.component.html',
  styleUrls: ['./submit-inbody.component.scss'],
})
export class SubmitInbodyComponent implements OnInit {
  inbodyForm!: FormGroup;

  constructor(
    private readonly fb: FormBuilder,
    private readonly inbodyService: InbodyService,
    private readonly toastrService: ToastrService
  ) {}

  ngOnInit(): void {
    this.inbodyForm = this.fb.group({
      height: ['', Validators.required],
      weight: ['', Validators.required],
      bodyFat: ['', Validators.required],
      leanMass: ['', Validators.required],
      date: ['', Validators.required],
    });
  }

  onSubmit() {
    this.inbodyService.createInbody(this.inbodyForm.value).subscribe({
      next: (res) => {
        this.toastrService.success(
          'You request is sent you only need to wait for 24h to get the diet plan'
        );
      },
      error: (error) => {
        this.toastrService.error(error.error.message);
      },
    });
    // add logic to send the inbody data to the server
  }
}
