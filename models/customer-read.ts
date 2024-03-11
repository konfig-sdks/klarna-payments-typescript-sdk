/*
Klarna Payments API V1

The payments API is used to create a session to offer Klarna's payment methods as part of your checkout. As soon as the purchase is completed the order should be read and handled using the [`Order Management API`](https://docs.klarna.com/api/ordermanagement).

**Note:** Examples provided in this section includes full payloads, including all supported fields , required and optionals. In order to implement a best in class request we recommend you don't include customer details when initiating a payment session. Refer to [Initiate a payment](https://docs.klarna.com/klarna-payments/integrate-with-klarna-payments/step-1-initiate-a-payment/) section for further details.

Read more on [Klarna payments](https://docs.klarna.com/klarna-payments/).

The version of the OpenAPI document: 1.0.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * 
 * @export
 * @interface CustomerRead
 */
export interface CustomerRead {
    /**
     * Customer’s Title. Allowed values per country: UK - \"Mr\", \"Ms\" DE - \"Herr\", \"Frau\" AT: \"Herr, \"Frau\" CH: de-CH: \"Herr, \"Frau\" it-CH: \"Sig.\", \"Sig.ra\" fr-CH: \"M\", \"Mme\"  BE: \"Dhr.\", \"Mevr.\" NL: \"Dhr.\", \"Mevr.\"
     * @type {string}
     * @memberof CustomerRead
     */
    'title'?: string;
    /**
     * Customer’s date of birth. The format is ‘yyyy-mm-dd’
     * @type {string}
     * @memberof CustomerRead
     */
    'date_of_birth'?: string;
    /**
     * Customer’s gender - ‘male’ or ‘female’
     * @type {string}
     * @memberof CustomerRead
     */
    'gender'?: string;
    /**
     * Organization entity type. Only applicable for B2B customers.
     * @type {string}
     * @memberof CustomerRead
     */
    'organization_entity_type'?: CustomerReadOrganizationEntityTypeEnum;
    /**
     * Organization registration id. Only applicable for B2B customers.
     * @type {string}
     * @memberof CustomerRead
     */
    'organization_registration_id'?: string;
    /**
     * Type of customer in the session. If nothing is added, a B2C session will be the default. If it is a b2b-session, you should enter organization to trigger a B2B session.
     * @type {string}
     * @memberof CustomerRead
     */
    'type'?: string;
    /**
     * VAT ID. Only applicable for B2B customers.
     * @type {string}
     * @memberof CustomerRead
     */
    'vat_id'?: string;
}

type CustomerReadOrganizationEntityTypeEnum = 'LIMITED_COMPANY' | 'PUBLIC_LIMITED_COMPANY' | 'ENTREPRENEURIAL_COMPANY' | 'LIMITED_PARTNERSHIP_LIMITED_COMPANY' | 'LIMITED_PARTNERSHIP' | 'GENERAL_PARTNERSHIP' | 'REGISTERED_SOLE_TRADER' | 'SOLE_TRADER' | 'CIVIL_LAW_PARTNERSHIP' | 'PUBLIC_INSTITUTION' | 'OTHER'

