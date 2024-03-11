<div align="left">

[![Visit Klarna](./header.png)](https://klarna.com)

# [Klarna](https://klarna.com)<a id="klarna"></a>

The payments API is used to create a session to offer Klarna's payment methods as part of your checkout. As soon as the purchase is completed the order should be read and handled using the [`Order Management API`](https://docs.klarna.com/api/ordermanagement).

**Note:** Examples provided in this section includes full payloads, including all supported fields , required and optionals. In order to implement a best in class request we recommend you don't include customer details when initiating a payment session. Refer to [Initiate a payment](https://docs.klarna.com/klarna-payments/integrate-with-klarna-payments/step-1-initiate-a-payment/) section for further details.

Read more on [Klarna payments](https://docs.klarna.com/klarna-payments/).

</div>

## Table of Contents<a id="table-of-contents"></a>

<!-- toc -->

- [Installation](#installation)
- [Getting Started](#getting-started)
- [Reference](#reference)
  * [`klarnapayments.payment.cancelAuthorization`](#klarnapaymentspaymentcancelauthorization)
  * [`klarnapayments.payment.createOrder`](#klarnapaymentspaymentcreateorder)
  * [`klarnapayments.payment.createSession`](#klarnapaymentspaymentcreatesession)
  * [`klarnapayments.payment.generateCustomerToken`](#klarnapaymentspaymentgeneratecustomertoken)
  * [`klarnapayments.payment.getSessionDetails`](#klarnapaymentspaymentgetsessiondetails)
  * [`klarnapayments.payment.updateSessionDetails`](#klarnapaymentspaymentupdatesessiondetails)

<!-- tocstop -->

## Installation<a id="installation"></a>
<div align="center">
  <a href="https://konfigthis.com/sdk-sign-up?company=Klarna&serviceName=Payments&language=TypeScript">
    <img src="https://raw.githubusercontent.com/konfig-dev/brand-assets/HEAD/cta-images/typescript-cta.png" width="70%">
  </a>
</div>

## Getting Started<a id="getting-started"></a>

```typescript
import { KlarnaPayments } from "klarna-payments-typescript-sdk";

const klarnapayments = new KlarnaPayments({
  // Defining the base path is optional and defaults to https://api.klarna.com
  // basePath: "https://api.klarna.com",
});

const cancelAuthorizationResponse =
  await klarnapayments.payment.cancelAuthorization({
    authorizationToken: "authorizationToken_example",
  });

console.log(cancelAuthorizationResponse);
```

## Reference<a id="reference"></a>


### `klarnapayments.payment.cancelAuthorization`<a id="klarnapaymentspaymentcancelauthorization"></a>

Use this API call to cancel/release an authorization. If the `authorization_token` received during a Klarna Payments won’t be used to place an order immediately you could release the authorization.
Read more on **[Cancel an existing authorization](https://docs.klarna.com/klarna-payments/other-actions/cancel-an-authorization/)**.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const cancelAuthorizationResponse =
  await klarnapayments.payment.cancelAuthorization({
    authorizationToken: "authorizationToken_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### authorizationToken: `string`<a id="authorizationtoken-string"></a>

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/payments/v1/authorizations/{authorizationToken}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `klarnapayments.payment.createOrder`<a id="klarnapaymentspaymentcreateorder"></a>

Use this API call to create a new order. Placing an order towards Klarna means that the Klarna Payments session will be closed and that an order will be created in Klarna's system.<br/>When you have received the `authorization_token` for a successful authorization you can place the order. Among the other order details in this request, you include a URL to the confirmation page for the customer.<br/>When the Order has been successfully placed at Klarna, you need to handle it either through the Merchant Portal or using [Klarna’s Order Management API](https://docs.klarna.com/api/payments/).
Read more on **[Create a new order](https://docs.klarna.com/klarna-payments/integrate-with-klarna-payments/step-3-create-an-order/)**.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createOrderResponse = await klarnapayments.payment.createOrder({
  authorizationToken: "authorizationToken_example",
  auto_capture: false,
  locale: "en-GB",
  merchant_data:
    '{"order_specific":[{"substore":"Women\'s Fashion","product_name":"Women Sweatshirt"}]}',
  merchant_reference1: "ON4711",
  merchant_reference2: "hdt53h-zdgg6-hdaff2",
  order_amount: 2000,
  order_lines: [
    {
      image_url: "https://www.exampleobjects.com/logo.png",
      merchant_data:
        '{"customer_account_info":[{"unique_account_identifier":"test@gmail.com","account_registration_date":"2017-02-13T10:49:20Z","account_last_modified":"2019-03-13T11:45:27Z"}]}',
      name: "Running shoe",
      product_url: "https://.../AD6654412.html",
      quantity: 1,
      quantity_unit: "pcs",
      reference: "AD6654412",
      tax_rate: 2000,
      total_amount: 2000,
      total_discount_amount: 500,
      total_tax_amount: 333,
      type: "physical",
      unit_price: 2500,
    },
  ],
  order_tax_amount: 333,
  purchase_country: "GB",
  purchase_currency: "GBP",
  status: "complete",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### order_amount: `number`<a id="order_amount-number"></a>

Total amount of the order including tax and any available discounts. The value should be in non-negative minor units. Eg: 25 Euros should be 2500.

##### order_lines: [`OrderLine`](./models/order-line.ts)[]<a id="order_lines-orderlinemodelsorder-linets"></a>

The array containing list of line items that are part of this order. Maximum of 1000 line items could be processed in a single order.

##### purchase_country: `string`<a id="purchase_country-string"></a>

The purchase country of the customer. The billing country always overrides purchase country if the values are different. Formatted according to ISO 3166 alpha-2 standard, e.g. GB, SE, DE, US, etc.

##### purchase_currency: `string`<a id="purchase_currency-string"></a>

The purchase currency of the order. Formatted according to ISO 4217 standard, e.g. USD, EUR, SEK, GBP, etc.

##### authorizationToken: `string`<a id="authorizationtoken-string"></a>

##### authorization_token: `string`<a id="authorization_token-string"></a>

Authorization token.

##### auto_capture: `boolean`<a id="auto_capture-boolean"></a>

Allow merchant to trigger auto capturing.

##### billing_address: [`Address`](./models/address.ts)<a id="billing_address-addressmodelsaddressts"></a>

##### custom_payment_method_ids: `string`[]<a id="custom_payment_method_ids-string"></a>

Promo codes - The array could be used to define which of the configured payment options within a payment category (pay_later, pay_over_time, etc.) should be shown for this purchase. Discuss with the delivery manager to know about the promo codes that will be configured for your account. The feature could also be used to provide promotional offers to specific customers (eg: 0% financing). Please be informed that the usage of this feature can have commercial implications. 

##### customer: [`Customer`](./models/customer.ts)<a id="customer-customermodelscustomerts"></a>

##### locale: `string`<a id="locale-string"></a>

Used to define the language and region of the customer. The locale follows the format of [RFC 1766](https://datatracker.ietf.org/doc/rfc1766/), meaning its value consists of language-country. Read more on **[Supported Locals and Currencies](https://docs.klarna.com/klarna-payments/in-depth-knowledge/puchase-countries-currencies-locales/)**.

##### merchant_data: `string`<a id="merchant_data-string"></a>

Pass through field to send any information about the order to be used later for reference while retrieving the order details (max 6000 characters)

##### merchant_reference1: `string`<a id="merchant_reference1-string"></a>

Used for storing merchant\\\'s internal order number or other reference.

##### merchant_reference2: `string`<a id="merchant_reference2-string"></a>

Used for storing merchant\\\'s internal order number or other reference. The value is available in the settlement files. (max 255 characters).

##### merchant_urls: [`MerchantUrls`](./models/merchant-urls.ts)<a id="merchant_urls-merchanturlsmodelsmerchant-urlsts"></a>

##### order_tax_amount: `number`<a id="order_tax_amount-number"></a>

Total tax amount of the order. The value should be in non-negative minor units. Eg: 25 Euros should be 2500.

##### payment_method_categories: [`PaymentMethodCategory`](./models/payment-method-category.ts)[]<a id="payment_method_categories-paymentmethodcategorymodelspayment-method-categoryts"></a>

Available payment method categories

##### shipping_address: [`Address`](./models/address.ts)<a id="shipping_address-addressmodelsaddressts"></a>

##### status: `string`<a id="status-string"></a>

The current status of the session. Possible values: \\\'complete\\\', \\\'incomplete\\\' where \\\'complete\\\' is set when the order has been placed.

#### 🔄 Return<a id="🔄-return"></a>

[Order](./models/order.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/payments/v1/authorizations/{authorizationToken}/order` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `klarnapayments.payment.createSession`<a id="klarnapaymentspaymentcreatesession"></a>

Use this API call to create a Klarna Payments session.<br/>When a session is created you will receive the available `payment_method_categories` for the session, a `session_id` and a `client_token`. The `session_id` can be used to read or update the session using the REST API. The `client_token` should be passed to the browser.
Read more on **[Create a new payment session](https://docs.klarna.com/klarna-payments/integrate-with-klarna-payments/step-1-initiate-a-payment/)**.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createSessionResponse = await klarnapayments.payment.createSession({
  acquiring_channel: "ECOMMERCE",
  client_token:
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.ewogICJzZXNzaW9uX2lkIiA6ICIw",
  expires_at: "2038-01-19T03:14:07.000Z",
  locale: "en-US",
  merchant_data:
    '{"order_specific":[{"substore":"Women\'s Fashion","product_name":"Women Sweatshirt"}]}',
  merchant_reference1: "ON4711",
  merchant_reference2: "hdt53h-zdgg6-hdaff2",
  order_amount: 2000,
  order_lines: [
    {
      image_url: "https://www.exampleobjects.com/logo.png",
      merchant_data:
        '{"customer_account_info":[{"unique_account_identifier":"test@gmail.com","account_registration_date":"2017-02-13T10:49:20Z","account_last_modified":"2019-03-13T11:45:27Z"}]}',
      name: "Running shoe",
      product_url: "https://.../AD6654412.html",
      quantity: 1,
      quantity_unit: "pcs",
      reference: "AD6654412",
      tax_rate: 2000,
      total_amount: 2000,
      total_discount_amount: 500,
      total_tax_amount: 333,
      type: "physical",
      unit_price: 2500,
    },
  ],
  order_tax_amount: 333,
  purchase_country: "GB",
  purchase_currency: "GBP",
  status: "complete",
  intent: "buy",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### order_amount: `number`<a id="order_amount-number"></a>

Total amount of the order including tax and any available discounts. The value should be in non-negative minor units. Eg: 25 Euros should be 2500.

##### order_lines: [`OrderLine`](./models/order-line.ts)[]<a id="order_lines-orderlinemodelsorder-linets"></a>

The array containing list of line items that are part of this order. Maximum of 1000 line items could be processed in a single order.

##### purchase_country: `string`<a id="purchase_country-string"></a>

The purchase country of the customer. The billing country always overrides purchase country if the values are different. Formatted according to ISO 3166 alpha-2 standard, e.g. GB, SE, DE, US, etc.

##### purchase_currency: `string`<a id="purchase_currency-string"></a>

The purchase currency of the order. Formatted according to ISO 4217 standard, e.g. USD, EUR, SEK, GBP, etc.

##### acquiring_channel: `string`<a id="acquiring_channel-string"></a>

The acquiring channel in which the session takes place. Ecommerce is default unless specified. Any other values should be defined in the agreement.

##### attachment: [`Attachment`](./models/attachment.ts)<a id="attachment-attachmentmodelsattachmentts"></a>

##### authorization_token: `string`<a id="authorization_token-string"></a>

Authorization token.

##### billing_address: [`Address`](./models/address.ts)<a id="billing_address-addressmodelsaddressts"></a>

##### client_token: `string`<a id="client_token-string"></a>

Token to be passed to the JS client

##### custom_payment_method_ids: `string`[]<a id="custom_payment_method_ids-string"></a>

Promo codes - The array could be used to define which of the configured payment options within a payment category (pay_later, pay_over_time, etc.) should be shown for this purchase. Discuss with the delivery manager to know about the promo codes that will be configured for your account. The feature could also be used to provide promotional offers to specific customers (eg: 0% financing). Please be informed that the usage of this feature can have commercial implications. 

##### customer: [`Customer`](./models/customer.ts)<a id="customer-customermodelscustomerts"></a>

##### design: `string`<a id="design-string"></a>

Design package to use in the session. This can only by used if a custom design has been implemented for Klarna Payments and agreed upon in the agreement. It might have a financial impact. Delivery manager will provide the value for the parameter.

##### expires_at: `string`<a id="expires_at-string"></a>

Session expiration date

##### locale: `string`<a id="locale-string"></a>

Used to define the language and region of the customer. The locale follows the format of [RFC 1766](https://datatracker.ietf.org/doc/rfc1766/), meaning its value consists of language-country. Default value is \\\"en-US\\\". Read more on **[Supported Locals and Currencies](https://docs.klarna.com/klarna-payments/in-depth-knowledge/puchase-countries-currencies-locales/)**.

##### merchant_data: `string`<a id="merchant_data-string"></a>

Pass through field to send any information about the order to be used later for reference while retrieving the order details (max 6000 characters)

##### merchant_reference1: `string`<a id="merchant_reference1-string"></a>

Used for storing merchant\\\'s internal order number or other reference.

##### merchant_reference2: `string`<a id="merchant_reference2-string"></a>

Used for storing merchant\\\'s internal order number or other reference. The value is available in the settlement files. (max 255 characters).

##### merchant_urls: [`MerchantUrls`](./models/merchant-urls.ts)<a id="merchant_urls-merchanturlsmodelsmerchant-urlsts"></a>

##### options: [`Options`](./models/options.ts)<a id="options-optionsmodelsoptionsts"></a>

##### order_tax_amount: `number`<a id="order_tax_amount-number"></a>

Total tax amount of the order. The value should be in non-negative minor units. Eg: 25 Euros should be 2500.

##### payment_method_categories: [`PaymentMethodCategory`](./models/payment-method-category.ts)[]<a id="payment_method_categories-paymentmethodcategorymodelspayment-method-categoryts"></a>

Available payment method categories

##### shipping_address: [`Address`](./models/address.ts)<a id="shipping_address-addressmodelsaddressts"></a>

##### status: `string`<a id="status-string"></a>

The current status of the session. Possible values: \\\'complete\\\', \\\'incomplete\\\' where \\\'complete\\\' is set when the order has been placed.

##### intent: `string`<a id="intent-string"></a>

Intent for the session. The field is designed to let partners inform Klarna of the purpose of the customer’s session.

#### 🔄 Return<a id="🔄-return"></a>

[MerchantSession](./models/merchant-session.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/payments/v1/sessions` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `klarnapayments.payment.generateCustomerToken`<a id="klarnapaymentspaymentgeneratecustomertoken"></a>

Use this API call to create a Klarna Customer Token.<br/>After having obtained an `authorization_token` for a successful authorization, this can be used to create a purchase token instead of placing the order. Creating a Klarna Customer Token results in Klarna storing customer and payment method details.
Read more on **[Generate a consumer token](https://docs.klarna.com/klarna-payments/in-depth-knowledge/customer-token/)**.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const generateCustomerTokenResponse =
  await klarnapayments.payment.generateCustomerToken({
    authorizationToken: "authorizationToken_example",
    description: "description_example",
    intended_use: "SUBSCRIPTION",
    locale: "en-GB",
    purchase_country: "GB",
    purchase_currency: "GBP",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### description: `string`<a id="description-string"></a>

Description of the purpose of the token.

##### intended_use: `string`<a id="intended_use-string"></a>

Intended use for the token.

##### locale: `string`<a id="locale-string"></a>

RFC 1766 customer\\\'s locale.

##### purchase_country: `string`<a id="purchase_country-string"></a>

ISO 3166 alpha-2 purchase country.

##### purchase_currency: `string`<a id="purchase_currency-string"></a>

ISO 4217 purchase currency.

##### authorizationToken: `string`<a id="authorizationtoken-string"></a>

##### billing_address: [`Address`](./models/address.ts)<a id="billing_address-addressmodelsaddressts"></a>

##### customer: [`Customer`](./models/customer.ts)<a id="customer-customermodelscustomerts"></a>

#### 🔄 Return<a id="🔄-return"></a>

[CustomerTokenCreationResponse](./models/customer-token-creation-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/payments/v1/authorizations/{authorizationToken}/customer-token` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `klarnapayments.payment.getSessionDetails`<a id="klarnapaymentspaymentgetsessiondetails"></a>

Use this API call to get a Klarna Payments session. You can read the Klarna Payments session at any time after it has been created, to get information about it. This will return all data that has been collected during the session.
Read more on **[Read an existing payment session](https://docs.klarna.com/klarna-payments/other-actions/check-the-details-of-a-payment-session/)**.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getSessionDetailsResponse =
  await klarnapayments.payment.getSessionDetails({
    sessionId: "sessionId_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### sessionId: `string`<a id="sessionid-string"></a>

session_id

#### 🔄 Return<a id="🔄-return"></a>

[SessionRead](./models/session-read.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/payments/v1/sessions/{session_id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `klarnapayments.payment.updateSessionDetails`<a id="klarnapaymentspaymentupdatesessiondetails"></a>

Use this API call to update a Klarna Payments session with new details, in case something in the order has changed and the checkout has been reloaded. Including if the consumer adds a new item to the cart or if consumer details are updated.
Read more on **[Update an existing payment session](https://docs.klarna.com/klarna-payments/other-actions/update-the-cart/)**.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateSessionDetailsResponse =
  await klarnapayments.payment.updateSessionDetails({
    sessionId: "sessionId_example",
    acquiring_channel: "ECOMMERCE",
    client_token:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.ewogICJzZXNzaW9uX2lkIiA6ICIw",
    expires_at: "2038-01-19T03:14:07.000Z",
    locale: "en-GB",
    merchant_data:
      '{"order_specific":[{"substore":"Women\'s Fashion","product_name":"Women Sweatshirt"}]}',
    merchant_reference1: "ON4711",
    merchant_reference2: "hdt53h-zdgg6-hdaff2",
    order_amount: 2000,
    order_tax_amount: 333,
    purchase_country: "GB",
    purchase_currency: "GBP",
    status: "complete",
    intent: "buy",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### sessionId: `string`<a id="sessionid-string"></a>

session_id

##### acquiring_channel: `string`<a id="acquiring_channel-string"></a>

The acquiring channel in which the session takes place. Ecommerce is default unless specified. Any other values should be defined in the agreement.

##### attachment: [`Attachment`](./models/attachment.ts)<a id="attachment-attachmentmodelsattachmentts"></a>

##### authorization_token: `string`<a id="authorization_token-string"></a>

Authorization token.

##### billing_address: [`Address`](./models/address.ts)<a id="billing_address-addressmodelsaddressts"></a>

##### client_token: `string`<a id="client_token-string"></a>

Token to be passed to the JS client

##### custom_payment_method_ids: `string`[]<a id="custom_payment_method_ids-string"></a>

Promo codes - The array could be used to define which of the configured payment options within a payment category (pay_later, pay_over_time, etc.) should be shown for this purchase. Discuss with the delivery manager to know about the promo codes that will be configured for your account. The feature could also be used to provide promotional offers to specific customers (eg: 0% financing). Please be informed that the usage of this feature can have commercial implications. 

##### customer: [`Customer`](./models/customer.ts)<a id="customer-customermodelscustomerts"></a>

##### design: `string`<a id="design-string"></a>

Design package to use in the session. This can only by used if a custom design has been implemented for Klarna Payments and agreed upon in the agreement. It might have a financial impact. Delivery manager will provide the value for the parameter.

##### expires_at: `string`<a id="expires_at-string"></a>

Session expiration date

##### locale: `string`<a id="locale-string"></a>

Used to define the language and region of the customer. The locale follows the format of [RFC 1766](https://datatracker.ietf.org/doc/rfc1766/), meaning its value consists of language-country. Read more on **[Supported Locals and Currencies](https://docs.klarna.com/klarna-payments/in-depth-knowledge/puchase-countries-currencies-locales/)**.

##### merchant_data: `string`<a id="merchant_data-string"></a>

Pass through field to send any information about the order to be used later for reference while retrieving the order details (max 6000 characters)

##### merchant_reference1: `string`<a id="merchant_reference1-string"></a>

Used for storing merchant\\\'s internal order number or other reference.

##### merchant_reference2: `string`<a id="merchant_reference2-string"></a>

Used for storing merchant\\\'s internal order number or other reference. The value is available in the settlement files. (max 255 characters).

##### merchant_urls: [`MerchantUrls`](./models/merchant-urls.ts)<a id="merchant_urls-merchanturlsmodelsmerchant-urlsts"></a>

##### options: [`Options`](./models/options.ts)<a id="options-optionsmodelsoptionsts"></a>

##### order_amount: `number`<a id="order_amount-number"></a>

Total amount of the order including tax and any available discounts. The value should be in non-negative minor units. Eg: 25 Euros should be 2500.

##### order_lines: [`OrderLine`](./models/order-line.ts)[]<a id="order_lines-orderlinemodelsorder-linets"></a>

The array containing list of line items that are part of this order. Maximum of 1000 line items could be processed in a single order.

##### order_tax_amount: `number`<a id="order_tax_amount-number"></a>

Total tax amount of the order. The value should be in non-negative minor units. Eg: 25 Euros should be 2500.

##### payment_method_categories: [`PaymentMethodCategory`](./models/payment-method-category.ts)[]<a id="payment_method_categories-paymentmethodcategorymodelspayment-method-categoryts"></a>

Available payment method categories

##### purchase_country: `string`<a id="purchase_country-string"></a>

The purchase country of the customer. The billing country always overrides purchase country if the values are different. Formatted according to ISO 3166 alpha-2 standard, e.g. GB, SE, DE, US, etc.

##### purchase_currency: `string`<a id="purchase_currency-string"></a>

The purchase currency of the order. Formatted according to ISO 4217 standard, e.g. USD, EUR, SEK, GBP, etc.

##### shipping_address: [`Address`](./models/address.ts)<a id="shipping_address-addressmodelsaddressts"></a>

##### status: `string`<a id="status-string"></a>

The current status of the session. Possible values: \\\'complete\\\', \\\'incomplete\\\' where \\\'complete\\\' is set when the order has been placed.

##### intent: `string`<a id="intent-string"></a>

Intent for the session. The field is designed to let partners inform Klarna of the purpose of the customer’s session.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/payments/v1/sessions/{session_id}` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


## Author<a id="author"></a>
This TypeScript package is automatically generated by [Konfig](https://konfigthis.com)
