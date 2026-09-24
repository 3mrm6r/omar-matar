import { Component, inject, signal } from '@angular/core';

import { FormsModule, ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { PortfolioService } from '../../core/services/portfolio.service';
import { IconComponent } from '../../shared/components/icon/icon.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, IconComponent],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  private readonly fb = inject(FormBuilder);
  readonly portfolio = inject(PortfolioService);

  readonly profile = this.portfolio.profile;
  readonly emailCopied = signal(false);
  readonly isSending = signal(false);
  readonly isSubmitted = signal(false);
  readonly submittedName = signal('');

  readonly contactForm = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    subject: ['Architecture Consulting & Code Review'],
    message: ['', [Validators.required, Validators.minLength(10)]],
  });

  isFieldInvalid(field: string): boolean {
    const control = this.contactForm.get(field);
    return !!(control && control.invalid && (control.dirty || control.touched));
  }

  copyEmail(): void {
    const email = this.profile().email;
    if (navigator.clipboard) {
      navigator.clipboard.writeText(email).then(() => {
        this.emailCopied.set(true);
        setTimeout(() => this.emailCopied.set(false), 2000);
      });
    }
  }

  onSubmit(): void {
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }

    this.isSending.set(true);
    const formVal = this.contactForm.value;

    // Simulate reliable transmission
    setTimeout(() => {
      this.isSending.set(false);
      this.submittedName.set(formVal.name || 'Friend');
      this.isSubmitted.set(true);
    }, 1000);
  }

  resetForm(): void {
    this.contactForm.reset({
      name: '',
      email: '',
      subject: 'Architecture Consulting & Code Review',
      message: '',
    });
    this.isSubmitted.set(false);
  }
}
