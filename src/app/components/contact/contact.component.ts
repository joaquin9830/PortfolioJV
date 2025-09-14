import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
}

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup;
  isSubmitting = false;
  submitSuccess = false;
  submitError = false;
  particles: Particle[] = [];

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', [Validators.required, Validators.minLength(5)]],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  ngOnInit(): void {
    this.generateParticles();
    this.animateParticles();
  }

  onSubmit(event: Event): void {
    if (this.contactForm.valid && !this.isSubmitting) {
      this.isSubmitting = true;
      this.submitSuccess = false;
      this.submitError = false;
      
      // Crear FormData para enviar a Formspree - Solo campos esenciales
      const formData = new FormData();
      
      // Campos principales del formulario
      formData.append('Nombre', this.contactForm.get('name')?.value);
      formData.append('Email', this.contactForm.get('email')?.value);
      formData.append('Asunto', this.contactForm.get('subject')?.value);
      formData.append('Mensaje', this.contactForm.get('message')?.value);
      
      // Campos ocultos mínimos para Formspree
      formData.append('_subject', '💼 Nuevo mensaje desde tu Portfolio');
      formData.append('_next', 'https://joaquinvinolo.com/#contact');
      formData.append('_captcha', 'false');
      
      // Enviar a Formspree
      fetch('https://formspree.io/f/mwpnjvpl', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      })
      .then(response => {
        if (response.ok) {
          this.submitSuccess = true;
          this.contactForm.reset();
          
          // Ocultar mensaje de éxito después de 8 segundos
          setTimeout(() => {
            this.submitSuccess = false;
          }, 8000);
        } else {
          throw new Error('Error al enviar el formulario');
        }
      })
      .catch(error => {
        console.error('Error:', error);
        this.submitError = true;
        
        // Ocultar mensaje de error después de 5 segundos
        setTimeout(() => {
          this.submitError = false;
        }, 5000);
      })
      .finally(() => {
        this.isSubmitting = false;
      });
      
    } else {
      // Prevenir envío si hay errores de validación
      event.preventDefault();
      
      // Marcar todos los campos como tocados para mostrar errores
      Object.keys(this.contactForm.controls).forEach(key => {
        this.contactForm.get(key)?.markAsTouched();
      });
    }
  }

  getFieldError(fieldName: string): string {
    const field = this.contactForm.get(fieldName);
    if (field?.errors && field.touched) {
      if (field.errors['required']) {
        return 'Este campo es obligatorio';
      }
      if (field.errors['email']) {
        return 'Ingresa un email válido';
      }
      if (field.errors['minlength']) {
        const requiredLength = field.errors['minlength'].requiredLength;
        return `Mínimo ${requiredLength} caracteres`;
      }
    }
    return '';
  }

  isFieldInvalid(fieldName: string): boolean {
    const field = this.contactForm.get(fieldName);
    return !!(field?.invalid && field.touched);
  }

  isFieldValid(fieldName: string): boolean {
    const field = this.contactForm.get(fieldName);
    return !!(field?.valid && field.touched);
  }

  private generateParticles(): void {
    for (let i = 0; i < 25; i++) {
      this.particles.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        size: Math.random() * 2 + 1,
        speedX: (Math.random() - 0.5) * 0.2,
        speedY: (Math.random() - 0.5) * 0.2,
        opacity: Math.random() * 0.3 + 0.1
      });
    }
  }

  private animateParticles(): void {
    const animate = () => {
      this.particles.forEach(particle => {
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        // Reset position if out of bounds
        if (particle.x < 0 || particle.x > window.innerWidth) {
          particle.speedX *= -1;
        }
        if (particle.y < 0 || particle.y > window.innerHeight) {
          particle.speedY *= -1;
        }

        // Keep particles in bounds
        particle.x = Math.max(0, Math.min(window.innerWidth, particle.x));
        particle.y = Math.max(0, Math.min(window.innerHeight, particle.y));
      });

      requestAnimationFrame(animate);
    };

    animate();
  }
}


