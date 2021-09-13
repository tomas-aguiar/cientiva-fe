import { Component, OnInit } from '@angular/core';
import {MAT_FORM_FIELD_DEFAULT_OPTIONS, MatFormFieldDefaultOptions} from '@angular/material/form-field';

const appearance: MatFormFieldDefaultOptions = {
  appearance: 'outline'
};

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss'],
  providers: [
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: appearance
    }
  ]
})
export class PaymentComponent implements OnInit {
  methods: string[] = ['PIX', 'Cartão de Crédito', 'Cartão de Débito', 'Boleto Bancário'];
  methodIcon: string[] = [
    'assets/images/payments/icons/PIX.svg',
    'assets/images/payments/icons/credit.png',
    'assets/images/payments/icons/debit.png',
    'assets/images/payments/icons/boleto.png',
  ];


  constructor() { }

  ngOnInit(): void {
  }

  radioButtonOnClick(method: string): void {
    console.log(method);
  }

  getMethodIcon(methodNumber: number): string {
    return this.methodIcon[methodNumber];
  }
}
