import { Component, OnInit } from '@angular/core';
import { CheckoutService } from 'src/app/_services/checkout.service';
import  { Stripe } from 'stripe';
//import { StripeModule } from "stripe-angular"
import { StripeScriptTag } from "stripe-angular"
import { Payment } from 'src/app/_models/payment.model';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  paymentHandler:any = null;
token: Payment={
  id:'id'
}
  constructor(private checkoutService : CheckoutService) { }

  ngOnInit() {
    this.invokeStripe();
  }

  initializePayment(amount: number) {
    const paymentHandler = (<any>window).StripeCheckout.configure({
      key: 'pk_test_51KY7OyGurDTsIveDgdUzsTOYnK2M2yuGCIsqpaSjoQVRYaIgGoSSghxfGmJHZxTH30EkMikkhZA18REaBuCHEuQE00kkYon143',
      locale: 'auto',
      token: function (stripeToken: any) {
       console.log(stripeToken);}
      //  this.checkoutService.addtoken().subscribe(
      //   (res) => {
      //     console.log(res);
      //   },
      //   (err) => {
      //     console.log('Error adding question');
      //   }
      // );
    });

    paymentHandler.open({
      name: 'FreakyJolly',
      description: 'Buying a Hot Coffee',
      amount: amount * 100
    });



  }



  invokeStripe() {
    if(!window.document.getElementById('stripe-script')) {
      const script = window.document.createElement("script");
      script.id = "stripe-script";
      script.type = "text/javascript";
      script.src = "https://checkout.stripe.com/checkout.js";
      script.onload = () => {
        this.paymentHandler = (<any>window).StripeCheckout.configure({
          key: 'pk_test_51KY7OyGurDTsIveDgdUzsTOYnK2M2yuGCIsqpaSjoQVRYaIgGoSSghxfGmJHZxTH30EkMikkhZA18REaBuCHEuQE00kkYon143',
          locale: 'auto',
          token: function (stripeToken: any) {
            console.log(stripeToken)
            alert('Payment has been successfull!')



          }

        });
      }
      window.document.body.appendChild(script);
    }
  }



}
