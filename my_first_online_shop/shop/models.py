from django.db import models
from django.contrib.auth.models import User
from multiselectfield import MultiSelectField
from .validators import validate_additionally
from . import choises


def upload_files(instance, filename) -> str:
    return f"{instance.id}, {filename}"


class User(models.Model):
    username = models.CharField(max_length=150, unique=True)
    email = models.EmailField(unique=True)
    password = models.CharField(max_length=128)
    first_name = models.CharField(max_length=150)
    last_name = models.CharField(max_length=150)

    def __str__(self) -> str:
        return self.username


class Product(models.Model):
    name = models.CharField(max_length=200)
    description = models.TextField()
    price = models.DecimalField(max_digits=20, decimal_places=2)
    brand = models.CharField(choices=choises.BRAND, max_length=100)
    image = models.ImageField(
        upload_to=upload_files,
        blank=False,
        null=False,
        height_field="height",
        width_field="width",
    )
    height = models.IntegerField(default=0)
    width = models.IntegerField(default=0)
    screen_diagonal = models.CharField(choices=choises.SCREEN_DIAGONAL, max_length=40)
    screen_coating = models.CharField(choices=choises.SCREEN_COATING, max_length=40)
    in_stock = models.BooleanField(default=True)
    screen_resolution = models.CharField(
        choices=choises.SCREEN_RESOLUTION, max_length=40
    )
    touchscreen = models.BooleanField(default=False)
    processor = models.CharField(choices=choises.PROCESSOR, max_length=60)
    number_of_processor_cores = models.CharField(
        choices=choises.PROCESSOR_CORES, max_length=40
    )
    ram = models.CharField(choices=choises.RAM, max_length=60)
    ssd_scope = models.CharField(choices=choises.SSD_SCOPE, max_length=70)
    video_card_type = models.CharField(choices=choises.VIDEO_CARD_TYPE, max_length=50)
    keyboard_backlighting = models.BooleanField(default=True)
    os = models.CharField(choices=choises.OS, max_length=100)
    additionally = MultiSelectField(
        choices=choises.ADDITIONALLY, max_length=100, validators=[validate_additionally]
    )
    color = models.CharField(choices=choises.COLOR, max_length=100)
    is_new = models.BooleanField(default=True)

    def get_absolute_url(self) -> str:
        return f"/shop/products/detail/{self.id}"

    def __str__(self) -> str:
        return self.name


class Cart(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)

    items = models.ManyToManyField("CartItem")

    def __str__(self) -> str:
        return self.user.username + "'s cart"


class CartItem(models.Model):

    cart_instance = models.ForeignKey(
        "Cart",
        on_delete=models.CASCADE,
        related_name="cart_items",
    )
    product = models.ForeignKey(
        "Product",
        on_delete=models.CASCADE,
    )
    quantity = models.PositiveIntegerField(default=1)
    price = models.DecimalField(max_digits=10, decimal_places=2)

    def __str__(self) -> str:
        return (
            f"{self.product.name} ({self.quantity}) in {self.cart.user.username}'s cart"
        )


class Order(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    total_price = models.DecimalField(max_digits=10, decimal_places=2)
    # Статус замовлення (Нове, Оплачене, Відправлено, Доставлено)
    status = models.CharField(max_length=255, choices=choises.ORDER_STATUSES)
    # Адреса доставки
    shipping_address = models.CharField(max_length=255)
    # Місто
    city = models.CharField(max_length=255)
    # Поштовий індекс
    postal_code = models.CharField(max_length=20)
    # Номер телефону
    phone_number = models.CharField(max_length=20)

    items = models.ManyToManyField("OrderItem")

    def __str__(self) -> str:
        return self.user.username + "'s order "


class OrderItem(models.Model):
    order_instance = models.ForeignKey(Order, on_delete=models.CASCADE)
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    quantity = models.PositiveIntegerField()
    price = models.DecimalField(max_digits=10, decimal_places=2)

    def __str__(self) -> str:
        return self.price


class Comment(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    product = models.ForeignKey("Product", on_delete=models.CASCADE)
    text = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self) -> str:
        return (
            self.user.username
            + "'s published code at: "
            + self.created_at.strftime("%d/%m/%Y %H:%M")
        )


class Like(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    product = models.ForeignKey("Product", on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self) -> str:
        return (
            self.user.username
            + " liked the Product with id="
            + str(self.product.id)
            + " at"
            + self.created_at.strftime("%d/%m/%Y %H:%M")
        )
