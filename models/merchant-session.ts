/*
Klarna Payments API V1

The payments API is used to create a session to offer Klarna's payment methods as part of your checkout. As soon as the purchase is completed the order should be read and handled using the [`Order Management API`](https://docs.klarna.com/api/ordermanagement).

**Note:** Examples provided in this section includes full payloads, including all supported fields , required and optionals. In order to implement a best in class request we recommend you don't include customer details when initiating a payment session. Refer to [Initiate a payment](https://docs.klarna.com/klarna-payments/integrate-with-klarna-payments/step-1-initiate-a-payment/) section for further details.

Read more on [Klarna payments](https://docs.klarna.com/klarna-payments/).

The version of the OpenAPI document: 1.0.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { PaymentMethodCategory } from './payment-method-category';

/**
 * 
 * @export
 * @interface MerchantSession
 */
export interface MerchantSession {
    /**
     * Client token to be passed to the JS client while initializing the JS SDK in the next step.
     * @type {string}
     * @memberof MerchantSession
     */
    'client_token': string;
    /**
     * Available payment method categories for this particular session
     * @type {Set<PaymentMethodCategory>}
     * @memberof MerchantSession
     */
    'payment_method_categories'?: Set<PaymentMethodCategory>;
    /**
     * ID of the created session. Please use this ID to share with Klarna for identifying any issues during integration.
     * @type {string}
     * @memberof MerchantSession
     */
    'session_id': string;
}

