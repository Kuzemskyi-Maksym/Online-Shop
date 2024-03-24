from django.contrib import admin
from django.contrib.auth.models import User
from .models import User, Product, Cart, CartItem, Order, OrderItem, Comment, Like


# Модель User
class UserModelAdmin(admin.ModelAdmin):
    list_display = ("username", "email", "first_name", "last_name")
    search_fields = ("username", "email")
    list_filter = ("username",)  # Фільтрувати за власними полями


admin.site.register(User, UserModelAdmin)


# Модель Cart
class CartModelAdmin(admin.ModelAdmin):
    list_display = ("user", "created_at")
    search_fields = ("user__username",)
    # Фільтрувати за пов'язаними полями моделі User
    list_filter = ("user__username", "user__email")


admin.site.register(Cart, CartModelAdmin)


# Модель Product
class ProductModelAdmin(admin.ModelAdmin):
    list_display = ("name", "price")  # Виправлення: видалено неіснуючі поля
    search_fields = ("name",)  # Виправлення: видалено категорію
    # Виправлення: видалено фільтрування за категорією
    ordering = ("name", "price")
    list_per_page = 20
    # Виправлення: видалено неіснуюче поле з list_editable


admin.site.register(Product, ProductModelAdmin)


# Модель CartItem
class CartItemModelAdmin(admin.ModelAdmin):
    list_display = (
        "product",
        "quantity",
        "price",
    )  # Виправлення: перший елемент не має бути зворотнім зовнішнім ключем
    search_fields = ("product__name",)
    # Виправлення: видалено фільтрування за категорією


admin.site.register(CartItem, CartItemModelAdmin)


# Модель Order
class OrderModelAdmin(admin.ModelAdmin):
    list_display = ("user", "created_at", "total_price", "status")
    search_fields = ("user__username",)
    list_filter = ("status",)


admin.site.register(Order, OrderModelAdmin)


# Модель OrderItem
class OrderItemModelAdmin(admin.ModelAdmin):
    list_display = (
        "product",
        "quantity",
        "price",
    )  # Виправлення: перший елемент не має бути зворотнім зовнішнім ключем
    search_fields = ("product__name",)
    # Виправлення: видалено фільтрування за категорією


admin.site.register(OrderItem, OrderItemModelAdmin)


# Модель Comment
class CommentModelAdmin(admin.ModelAdmin):
    list_display = ("user", "product", "text", "created_at")
    search_fields = ("user__username", "product__name")
    # Виправлення: видалено фільтрування за категорією


admin.site.register(Comment, CommentModelAdmin)


# Модель Like
class LikeModelAdmin(admin.ModelAdmin):
    list_display = ("user", "product", "created_at")
    search_fields = ("user__username", "product__name")
    # Виправлення: видалено фільтрування за категорією


admin.site.register(Like, LikeModelAdmin)
