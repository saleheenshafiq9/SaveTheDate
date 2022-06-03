from rest_framework import permissions


class IsCateringOrReadOnly(permissions.BasePermission):
    def has_permission(self, request, view):
        if request.method in permissions.SAFE_METHODS:
            return True
        elif not request.user.is_authenticated:
            return False 
        return bool(request.user and request.user.userType=="catering")


class IsCustomerOrReadOnly(permissions.BasePermission):
    def has_permission(self, request, view):
        if request.method in permissions.SAFE_METHODS:
            return True
        elif not request.user.is_authenticated:
            return False 
        return bool(request.user and request.user.userType=="customer")


class IsDecoratorOrReadOnly(permissions.BasePermission):
    def has_permission(self, request, view):
        if request.method in permissions.SAFE_METHODS:
            return True
        elif not request.user.is_authenticated:
            return False 
        return bool(request.user and request.user.userType=="decorator")


class DenyAll(permissions.BasePermission):
    def has_permission(self, request, view):
        return False

