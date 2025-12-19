<template>
  <div class="shopping-cart-container">
    <header class="page-header">
      <h1>YOUR BAG OF LOOT</h1>
      <div class="cart-summary">
        <span class="total-items">Items in Cart: {{ cartItemCount }}</span>
        <span class="total-cost">Total: ${{ totalCartCost.toFixed(2) }}</span>
      </div>
    </header>

    <div class="main-content">
      <section class="cart-display">
        <h2>Order Details ({{ cartItemCount }} items)</h2>

        <div v-if="cart.length === 0" class="empty-cart">
          Your cart is empty. Please visit the Shop page to add items.
        </div>

        <div v-else class="cart-items-list">
          <div v-for="item in cart" :key="item.id" class="cart-item">
            <span class="item-name">{{ item.name }}</span>
            <span class="item-quantity">Qty: {{ item.quantity }}</span>
            <span class="item-subtotal">${{ (item.price * item.quantity).toFixed(2) }}</span>

            <button @click="removeFromCart(item.id)" class="remove-button">Remove</button>
          </div>
        </div>

        <div v-if="cart.length > 0" class="cart-totals-footer">
          <h3>Grand Total: ${{ totalCartCost.toFixed(2) }}</h3>
          <button class="checkout-button">Proceed to Checkout</button>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import { inject } from 'vue';

const {
  cart,
  removeFromCart,
  totalCartCost,
  cartItemCount
} = inject('cart');

</script>

<style scoped>
.shopping-cart-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 80px 20px 20px;
  font-family: masonic-lodge, sans-serif;
  color: white;
  min-height: 100vh;
}

.page-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;
  padding: 10px 0;
  border-bottom: 2px solid #ddd;
}

.page-header h1 {
  color: white;
  font-size: 2.5em;
  margin: 0;
}

.cart-summary {
  font-size: 1.2em;
  font-weight: bold;
}

.total-items {
  margin-right: 20px;
}

.total-cost {
  color: #f7941d;
}

.main-content {
  margin-top: 0;
  display: block;
}

.cart-display {
  padding: 30px;
  border-radius: 8px;
}

.cart-display h2 {
  color: white;
  margin-top: 0;
  border-bottom: 2px solid #e67e22;
  padding-bottom: 10px;
  margin-bottom: 20px;
}

.empty-cart {
  padding: 40px 0;
  text-align: center;
  color: #f7941d;
  font-style: italic;
  border-radius: 4px;
}

.cart-item {
  display: grid;
  grid-template-columns: 3fr 1fr 1fr auto;
  gap: 15px;
  align-items: center;
  padding: 15px 0;
  border-bottom: 1px dotted #ccc;
}

.item-name {
  font-weight: 600;
}

.item-subtotal {
  color: WHITE;
  font-weight: bold;
}

.remove-button {
  background: none;
  border: 1px solid #f7941d;
  color: #f7941d;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.9em;
  padding: 5px 10px;
  transition: all 0.3s;
}

.remove-button:hover {
  background-color: #f7941d;
  color: white;
}

.cart-totals-footer {
  margin-top: 30px;
  padding-top: 20px;
  border-top: 2px solid #e67e22;
  text-align: right;
}

.checkout-button {
  background-color: #e67e22;
  color: white;
  border: none;
  padding: 12px 25px;
  font-size: 1.1em;
  border-radius: 999px;
  cursor: pointer;
  margin-top: 15px;
  transition: background-color 0.3s;
}

.checkout-button:hover {
  background-color: #d35400;
}

@media (max-width: 600px) {
  .cart-item {
    grid-template-columns: 1fr auto;
    gap: 5px;
    padding-bottom: 10px;
    font-size: 0.9em;
  }
  .item-name {
    grid-column: 1 / 3;
  }
  .item-quantity {
    text-align: left;
  }
  .item-subtotal {
    text-align: right;
  }
}
</style>
