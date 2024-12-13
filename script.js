// Class to represent a product
class Product {
    constructor(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
}

// Class to represent an item in the shopping cart
class ShoppingCartItem {
    constructor(product, quantity) {
        this.product = product;
        this.quantity = quantity;
    }

    // Method to calculate the total price for this item
    calculateTotal() {
        return this.product.price * this.quantity;
    }
}

// Class to represent the shopping cart
class ShoppingCart {
    constructor() {
        this.items = []; // Array to hold ShoppingCartItem instances
    }

    // Method to add an item to the cart
    addItem(product, quantity) {
        // Check if the product already exists in the cart
        const existingItem = this.items.find(item => item.product.id === product.id);
        if (existingItem) {
            existingItem.quantity += quantity; // Update quantity if it exists
        } else {
            this.items.push(new ShoppingCartItem(product, quantity)); // Add new item
        }
    }

    // Method to remove an item from the cart
    removeItem(productId) {
        this.items = this.items.filter(item => item.product.id !== productId);
    }

    // Method to get the total price of items in the cart
    getTotalPrice() {
        return this.items.reduce((total, item) => total + item.calculateTotal(), 0);
    }

    // Method to display the items in the cart
    displayCart() {
        this.items.forEach(item => {
            console.log(`Product: ${item.product.name}, Quantity: ${item.quantity}, Total: $${item.calculateTotal().toFixed(2)}`);
        });
        console.log(`Cart Total: $${this.getTotalPrice().toFixed(2)}`);
    }
}

// Testing the shopping cart functionality
// Creating products
const product1 = new Product(1, "Laptop", 1200);
const product2 = new Product(2, "Headphones", 150);
const product3 = new Product(3, "Mouse", 50);

// Creating a shopping cart
const cart = new ShoppingCart();

// Adding items to the cart
cart.addItem(product1, 1);
cart.addItem(product2, 2);
cart.addItem(product3, 3);

// Displaying the cart
cart.displayCart();

// Removing an item from the cart
cart.removeItem(2);

// Displaying the cart after removal
cart.displayCart();
