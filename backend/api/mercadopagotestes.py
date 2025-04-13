import mercadopago
from django.conf import settings

sdk = mercadopago.SDK(settings.MERCADO_PAGO_TOKEN)

preference_data = {
    "items": [
        {
            "title": "Meu produto",
            "quantity": 1,
            "unit_price": 75.76,
        }
    ]
}

preference_response = sdk.preference().create(preference_data)
preference = preference_response["response"]
print(preference['init_point'])