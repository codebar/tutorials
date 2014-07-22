CREATE TABLE customers (
    id integer NOT NULL,
    name text,
    email text,
    address text,
    city text,
    state text,
    zipcode text
);

CREATE TABLE items (
    id integer NOT NULL,
    name text,
    description text
);

CREATE TABLE orderitems (
    id integer NOT NULL,
    order_id integer,
    item_id integer
);


CREATE TABLE orders (
    id integer NOT NULL,
    customer_id integer,
    amount numeric
);
