from django.core.exceptions import ValidationError

def validate_additionally(value) -> None:
    if "None" in value and len(value) > 1:
        raise ValidationError(
            "You cannot select 'None' along with other additional features."
        )
