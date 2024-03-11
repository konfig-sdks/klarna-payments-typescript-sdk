type Parameter = {
    name: string
}
type Entry = {
    parameters: Parameter[]
}
export const operationParameterMap: Record<string, Entry> = {
    '/payments/v1/authorizations/{authorizationToken}-DELETE': {
        parameters: [
            {
                name: 'authorizationToken'
            },
        ]
    },
    '/payments/v1/authorizations/{authorizationToken}/order-POST': {
        parameters: [
            {
                name: 'order_amount'
            },
            {
                name: 'order_lines'
            },
            {
                name: 'purchase_country'
            },
            {
                name: 'purchase_currency'
            },
            {
                name: 'authorizationToken'
            },
            {
                name: 'authorization_token'
            },
            {
                name: 'auto_capture'
            },
            {
                name: 'billing_address'
            },
            {
                name: 'custom_payment_method_ids'
            },
            {
                name: 'customer'
            },
            {
                name: 'locale'
            },
            {
                name: 'merchant_data'
            },
            {
                name: 'merchant_reference1'
            },
            {
                name: 'merchant_reference2'
            },
            {
                name: 'merchant_urls'
            },
            {
                name: 'order_tax_amount'
            },
            {
                name: 'payment_method_categories'
            },
            {
                name: 'shipping_address'
            },
            {
                name: 'status'
            },
        ]
    },
    '/payments/v1/sessions-POST': {
        parameters: [
            {
                name: 'order_amount'
            },
            {
                name: 'order_lines'
            },
            {
                name: 'purchase_country'
            },
            {
                name: 'purchase_currency'
            },
            {
                name: 'acquiring_channel'
            },
            {
                name: 'attachment'
            },
            {
                name: 'authorization_token'
            },
            {
                name: 'billing_address'
            },
            {
                name: 'client_token'
            },
            {
                name: 'custom_payment_method_ids'
            },
            {
                name: 'customer'
            },
            {
                name: 'design'
            },
            {
                name: 'expires_at'
            },
            {
                name: 'locale'
            },
            {
                name: 'merchant_data'
            },
            {
                name: 'merchant_reference1'
            },
            {
                name: 'merchant_reference2'
            },
            {
                name: 'merchant_urls'
            },
            {
                name: 'options'
            },
            {
                name: 'order_tax_amount'
            },
            {
                name: 'payment_method_categories'
            },
            {
                name: 'shipping_address'
            },
            {
                name: 'status'
            },
            {
                name: 'intent'
            },
        ]
    },
    '/payments/v1/authorizations/{authorizationToken}/customer-token-POST': {
        parameters: [
            {
                name: 'description'
            },
            {
                name: 'intended_use'
            },
            {
                name: 'locale'
            },
            {
                name: 'purchase_country'
            },
            {
                name: 'purchase_currency'
            },
            {
                name: 'authorizationToken'
            },
            {
                name: 'billing_address'
            },
            {
                name: 'customer'
            },
        ]
    },
    '/payments/v1/sessions/{session_id}-GET': {
        parameters: [
            {
                name: 'session_id'
            },
        ]
    },
    '/payments/v1/sessions/{session_id}-POST': {
        parameters: [
            {
                name: 'session_id'
            },
            {
                name: 'acquiring_channel'
            },
            {
                name: 'attachment'
            },
            {
                name: 'authorization_token'
            },
            {
                name: 'billing_address'
            },
            {
                name: 'client_token'
            },
            {
                name: 'custom_payment_method_ids'
            },
            {
                name: 'customer'
            },
            {
                name: 'design'
            },
            {
                name: 'expires_at'
            },
            {
                name: 'locale'
            },
            {
                name: 'merchant_data'
            },
            {
                name: 'merchant_reference1'
            },
            {
                name: 'merchant_reference2'
            },
            {
                name: 'merchant_urls'
            },
            {
                name: 'options'
            },
            {
                name: 'order_amount'
            },
            {
                name: 'order_lines'
            },
            {
                name: 'order_tax_amount'
            },
            {
                name: 'payment_method_categories'
            },
            {
                name: 'purchase_country'
            },
            {
                name: 'purchase_currency'
            },
            {
                name: 'shipping_address'
            },
            {
                name: 'status'
            },
            {
                name: 'intent'
            },
        ]
    },
}