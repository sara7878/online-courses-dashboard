import { CommonModule } from '@angular/common';
import { Component, NgModule, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, Routes } from '@angular/router';
import { PaymentService } from '../_services/payment.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})

export class PaymentComponent implements OnInit {
  constructor(private payment:PaymentService ,
    private router: Router,
    private stripeService:AngularStripeService) {
  }
  @ViewChild('cardInfo', { static: false }) cardInfo: ElementRef;

  title = 'stripeAngular';

  //Declare dummy data
  id: string = '123';
  name: string = 'powerbike';
  email: string = 'nelsob44@yahoo.com';
  price: number = 1200;
  currency: string = 'gbp';
  description: string = 'A very good bike';
  private paymentIntentSub: Subscription;

  stripe;
  loading = false;
  confirmation;
  clSecret: string = null;

  card: any;
  cardHandler = this.onChange.bind(this);
  error: string;





  ngOnInit(): void {

  }

}
