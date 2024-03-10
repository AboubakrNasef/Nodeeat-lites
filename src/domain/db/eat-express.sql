-- Create the restaurant_status enum
CREATE TYPE restaurant_status AS ENUM ('open', 'closed');

-- Create the address table
CREATE TABLE address (
 address_id SERIAL PRIMARY KEY,
 created_at TIMESTAMP,
 updated_at TIMESTAMP,
 deleted_at TIMESTAMP,
 city VARCHAR,
 street VARCHAR,
 full_address VARCHAR
);

-- Create the role table
CREATE TABLE role (
 role_id SERIAL PRIMARY KEY,
 created_at TIMESTAMP,
 updated_at TIMESTAMP,
 deleted_at TIMESTAMP,
 title VARCHAR
);

-- Create the user table
CREATE TABLE user (
 user_id SERIAL PRIMARY KEY,
 created_at TIMESTAMP,
 updated_at TIMESTAMP,
 deleted_at TIMESTAMP,
 full_name VARCHAR,
 email VARCHAR UNIQUE,
 password VARCHAR,
 address_id INTEGER REFERENCES address(address_id),
 role_id INTEGER REFERENCES role(role_id)
);

-- Create the customer table
CREATE TABLE customer (
 customer_id SERIAL PRIMARY KEY,
 created_at TIMESTAMP,
 updated_at TIMESTAMP,
 deleted_at TIMESTAMP,
 is_active BOOLEAN,
 user_id INTEGER REFERENCES user(user_id)
);

-- Create the cart table
CREATE TABLE cart (
 cart_id SERIAL PRIMARY KEY,
 created_at TIMESTAMP,
 updated_at TIMESTAMP,
 deleted_at TIMESTAMP,
 total_amount MONEY,
 quantity INTEGER,
 customer_id INTEGER REFERENCES customer(customer_id)
);

-- Create the cart_item table
CREATE TABLE cart_item (
 cart_item_id SERIAL PRIMARY KEY,
 created_at TIMESTAMP,
 updated_at TIMESTAMP,
 deleted_at TIMESTAMP,
 unit_price MONEY,
 quantity INTEGER,
 total_amount MONEY,
 cart_id INTEGER REFERENCES cart(cart_id),
 menu_item_id INTEGER REFERENCES menu_item(menu_item_id)
);

-- Create the restaurant_category table
CREATE TABLE restaurant_category (
 restaurant_category_id SERIAL PRIMARY KEY,
 created_at TIMESTAMP,
 updated_at TIMESTAMP,
 deleted_at TIMESTAMP,
 name VARCHAR
);

-- Create the restaurant table
CREATE TABLE restaurant (
 restaurant_id SERIAL PRIMARY KEY,
 created_at TIMESTAMP,
 updated_at TIMESTAMP,
 deleted_at TIMESTAMP,
 name VARCHAR,
 description VARCHAR,
 restaurant_category_id INTEGER REFERENCES restaurant_category(restaurant_category_id)
);

-- Create the restaurant_branch table
CREATE TABLE restaurant_branch (
 restaurant_branch_id SERIAL PRIMARY KEY,
 created_at TIMESTAMP,
 updated_at TIMESTAMP,
 deleted_at TIMESTAMP,
 status restaurant_status,
 opening_time TIMESTAMP,
 closing_time TIMESTAMP,
 address_id INTEGER REFERENCES address(address_id),
 restaurant_id INTEGER REFERENCES restaurant(restaurant_id)
);

-- Create the menu_category table
CREATE TABLE menu_category (
 menu_category_id SERIAL PRIMARY KEY,
 created_at TIMESTAMP,
 updated_at TIMESTAMP,
 deleted_at TIMESTAMP,
 name VARCHAR
);

-- Create the menu table
CREATE TABLE menu (
 menu_id SERIAL PRIMARY KEY,
 created_at TIMESTAMP,
 updated_at TIMESTAMP,
 deleted_at TIMESTAMP,
 name VARCHAR,
 description VARCHAR,
 menu_category_id INTEGER REFERENCES menu_category(menu_category_id),
 restaurant_id INTEGER REFERENCES restaurant(restaurant_id)
);

-- Create the menu_item table
CREATE TABLE menu_item (
 menu_item_id SERIAL PRIMARY KEY,
 created_at TIMESTAMP,
 updated_at TIMESTAMP,
 deleted_at TIMESTAMP,
 name VARCHAR,
 description VARCHAR,
 menu_id INTEGER REFERENCES menu(menu_id),
 menu_category_id INTEGER REFERENCES menu_category(menu_category_id)
);

-- Create the ingredient table
CREATE TABLE ingredient (
 ingredient_id SERIAL PRIMARY KEY,
 created_at TIMESTAMP,
 updated_at TIMESTAMP,
 deleted_at TIMESTAMP,
 name VARCHAR,
 quantity INTEGER,
 menu_item_id INTEGER REFERENCES menu_item(menu_item_id)
);

-- Create the review table
CREATE TABLE review (
 review_id SERIAL PRIMARY KEY,
 created_at TIMESTAMP,
 updated_at TIMESTAMP,
 deleted_at TIMESTAMP,
 title VARCHAR,
 description TEXT,
 menu_item_id INTEGER REFERENCES menu_item(menu_item_id),
 customer_id INTEGER REFERENCES customer(customer_id)
);

-- Create the order_status enum
CREATE TYPE order_status AS ENUM ('pending', 'shipped');

-- Create the order table
CREATE TABLE order (
 order_id SERIAL PRIMARY KEY,
 created_at TIMESTAMP,
 updated_at TIMESTAMP,
 deleted_at TIMESTAMP,
 total_amount MONEY,
 quantity INTEGER,
 status order_status,
 customer_id INTEGER REFERENCES customer(customer_id),
 restaurant_branch_id INTEGER REFERENCES restaurant_branch(restaurant_branch_id)
);

-- Create the order_details table
CREATE TABLE order_details (
 order_details_id SERIAL PRIMARY KEY,
 created_at TIMESTAMP,
 updated_at TIMESTAMP,
 deleted_at TIMESTAMP,
 unit_price MONEY,
 quantity INTEGER,
 total_amount MONEY,
 order_id INTEGER REFERENCES order(order_id),
 menu_item_id INTEGER REFERENCES menu_item(menu_item_id)
);
