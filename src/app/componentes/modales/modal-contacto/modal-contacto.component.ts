import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-modal-contacto',
  templateUrl: './modal-contacto.component.html',
  styleUrls: ['./modal-contacto.component.css']
})
export class ModalContactoComponent implements OnInit{
  form: FormGroup;

  constructor(private formBuilder: FormBuilder){
    this.form= this.formBuilder.group({
      fullname:['', Validators.required],
      email:['', [Validators.required, Validators.email]],
      mensaje:['', [Validators.required, Validators.maxLength(500)]],
   })
  }

ngOnInit() {}


get Mail(){
 return this.form.get("email");
}

get MailValid() {
  return this.Mail?.touched && !this.Mail?.valid;
}

onEnviar(event: Event){
 
  event.preventDefault; 

  if (this.form.valid){
    alert("¡Tu mensaje fue enviado!")
    
  }else{
       
    this.form.markAllAsTouched();
    alert("¡Revisar formulario!") 
  }
}

}

