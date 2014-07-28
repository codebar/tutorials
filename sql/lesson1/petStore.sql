CREATE TABLE customers (
    id integer CONSTRAINT customers_pkey PRIMARY KEY,
    firstName text,
    lastName text,
    email text,
    address text,
    town text,
    county text,
    country text
);

CREATE TABLE items (
    id integer CONSTRAINT items_pkey PRIMARY KEY,
    name text,
    description text
);

CREATE TABLE orderitems (
    id integer CONSTRAINT orderitems_pkey PRIMARY KEY,
    order_id integer,
    item_id integer
);


CREATE TABLE orders (
    id integer CONSTRAINT orders_pkey PRIMARY KEY,
    customer_id integer,
    amount numeric
);

INSERT INTO customers (firstName, lastName, email, address, town, county, country) VALUES ('Don', 'Rempel',
'don.rempel@aol.org','890 Ullrich Plains', 'Manchester', 'Greater Manchester', 'England');
INSERT INTO customers (firstName, lastName, email, address, town, county, country) VALUES ('Bill', 'Edwards',
'bill_edwards@bartondesk.com','63337 Harker Court', 'Romford', 'Essex', 'England');
INSERT INTO customers (firstName, lastName, email, address, town, county, country) VALUES ('Sofia', 'Rowe',
'sofia_rowe@bayerprosacco.co.uk','1991 Kyler Village', 'Newbury', 'Berkshire', 'England');
INSERT INTO customers (firstName, lastName, email, address, town, county, country) VALUES ('Eve', 'Pfeffer',
'eve.pfeffer@yahoo.co.uk','1311 Khalil Shores', 'Portsmouth', 'Hampshire', 'England');
INSERT INTO customers (firstName, lastName, email, address, town, county, country) VALUES ('Elsa', 'Dickens',
'elsa@dickens.org','3878 Alyce Lock', 'Derby', 'East Midlands', 'England');
INSERT INTO customers (firstName, lastName, email, address, town, county, country) VALUES ('Zelma', 'Davis',
'zelma@morrisons.biz','184 Hazel Lane', 'Alves', 'Moray', 'Scotland');
INSERT INTO customers (firstName, lastName, email, address, town, county, country) VALUES ('Edna', 'Harrison',
'edna_harrison@pouros.biz','2550 Hassan Pass', 'North Kessock', 'Highland', 'Scotland');
INSERT INTO customers (firstName, lastName, email, address, town, county, country) VALUES ('Chris', 'Price',
'chris.price@doyle.org','32202 Zemlak Ridge', 'Risca', 'Caerphilly', 'Wales');
INSERT INTO customers (firstName, lastName, email, address, town, county, country) VALUES ('Wendy', 'Hughes',
'wendy_hughes@ornjakubowski.com','44097 Elvie Divide', 'West Lulworth', 'Dorset', 'England');
INSERT INTO customers (firstName, lastName, email, address, town, county, country) VALUES ('Hilda', 'Williams',
'hilda_williams@posttrack.com','3746 Ashton Divide', 'Tralee', 'Kerry', 'Ireland');

INSERT INTO items (name, description) VALUES ('hutch01', 'hutch');
INSERT INTO items (name, description) VALUES ('hutch02', 'double-level hutch');
INSERT INTO items (name, description) VALUES ('hutch03', 'rabbit run');
INSERT INTO items (name, description) VALUES ('food01', 'drinking bottle');
INSERT INTO items (name, description) VALUES ('food02', 'food bowl');
INSERT INTO items (name, description) VALUES ('food03', 'bedding hay');
INSERT INTO items (name, description) VALUES ('rabbit01', 'dutch');
INSERT INTO items (name, description) VALUES ('rabbit02', 'lop-eared');
INSERT INTO items (name, description) VALUES ('rabbit03', 'lionhead');

INSERT INTO orderitems (order_id, item_id) VALUES ('1', '3');
INSERT INTO orderitems (order_id, item_id) VALUES ('1', '2');
INSERT INTO orderitems (order_id, item_id) VALUES ('1', '4');
INSERT INTO orderitems (order_id, item_id) VALUES ('2', '5');
INSERT INTO orderitems (order_id, item_id) VALUES ('2', '4');
INSERT INTO orderitems (order_id, item_id) VALUES ('2', '8');
INSERT INTO orderitems (order_id, item_id) VALUES ('2', '9');
INSERT INTO orderitems (order_id, item_id) VALUES ('3', '3');
INSERT INTO orderitems (order_id, item_id) VALUES ('3', '4');
INSERT INTO orderitems (order_id, item_id) VALUES ('3', '8');
INSERT INTO orderitems (order_id, item_id) VALUES ('4', '6');
INSERT INTO orderitems (order_id, item_id) VALUES ('4', '5');
INSERT INTO orderitems (order_id, item_id) VALUES ('4', '9');
INSERT INTO orderitems (order_id, item_id) VALUES ('4', '2');
INSERT INTO orderitems (order_id, item_id) VALUES ('5', '5');
INSERT INTO orderitems (order_id, item_id) VALUES ('5', '8');
INSERT INTO orderitems (order_id, item_id) VALUES ('5', '3');
INSERT INTO orderitems (order_id, item_id) VALUES ('5', '9');
INSERT INTO orderitems (order_id, item_id) VALUES ('6', '9');
INSERT INTO orderitems (order_id, item_id) VALUES ('6', '6');
INSERT INTO orderitems (order_id, item_id) VALUES ('6', '1');
INSERT INTO orderitems (order_id, item_id) VALUES ('6', '5');
INSERT INTO orderitems (order_id, item_id) VALUES ('7', '2');
INSERT INTO orderitems (order_id, item_id) VALUES ('7', '3');
INSERT INTO orderitems (order_id, item_id) VALUES ('7', '4');
INSERT INTO orderitems (order_id, item_id) VALUES ('7', '5');
INSERT INTO orderitems (order_id, item_id) VALUES ('8', '6');
INSERT INTO orderitems (order_id, item_id) VALUES ('8', '5');
INSERT INTO orderitems (order_id, item_id) VALUES ('8', '2');
INSERT INTO orderitems (order_id, item_id) VALUES ('8', '7');
INSERT INTO orderitems (order_id, item_id) VALUES ('9', '1');
INSERT INTO orderitems (order_id, item_id) VALUES ('9', '8');
INSERT INTO orderitems (order_id, item_id) VALUES ('9', '7');
INSERT INTO orderitems (order_id, item_id) VALUES ('9', '3');
INSERT INTO orderitems (order_id, item_id) VALUES ('10', '1');
INSERT INTO orderitems (order_id, item_id) VALUES ('10', '2');
INSERT INTO orderitems (order_id, item_id) VALUES ('11', '4');
INSERT INTO orderitems (order_id, item_id) VALUES ('11', '3');
INSERT INTO orderitems (order_id, item_id) VALUES ('11', '8');
INSERT INTO orderitems (order_id, item_id) VALUES ('12', '9');
INSERT INTO orderitems (order_id, item_id) VALUES ('12', '4');
INSERT INTO orderitems (order_id, item_id) VALUES ('12', '5');
INSERT INTO orderitems (order_id, item_id) VALUES ('13', '6');
INSERT INTO orderitems (order_id, item_id) VALUES ('13', '2');
INSERT INTO orderitems (order_id, item_id) VALUES ('13', '4');
INSERT INTO orderitems (order_id, item_id) VALUES ('13', '3');
INSERT INTO orderitems (order_id, item_id) VALUES ('14', '9');
INSERT INTO orderitems (order_id, item_id) VALUES ('14', '8');
INSERT INTO orderitems (order_id, item_id) VALUES ('14', '1');
INSERT INTO orderitems (order_id, item_id) VALUES ('15', '3');
INSERT INTO orderitems (order_id, item_id) VALUES ('15', '5');
INSERT INTO orderitems (order_id, item_id) VALUES ('16', '9');
INSERT INTO orderitems (order_id, item_id) VALUES ('16', '5');
INSERT INTO orderitems (order_id, item_id) VALUES ('16', '4');
INSERT INTO orderitems (order_id, item_id) VALUES ('17', '7');
INSERT INTO orderitems (order_id, item_id) VALUES ('17', '6');
INSERT INTO orderitems (order_id, item_id) VALUES ('17', '1');
INSERT INTO orderitems (order_id, item_id) VALUES ('17', '4');
INSERT INTO orderitems (order_id, item_id) VALUES ('18', '3');
INSERT INTO orderitems (order_id, item_id) VALUES ('18', '2');
INSERT INTO orderitems (order_id, item_id) VALUES ('18', '4');
INSERT INTO orderitems (order_id, item_id) VALUES ('19', '3');
INSERT INTO orderitems (order_id, item_id) VALUES ('19', '8');
INSERT INTO orderitems (order_id, item_id) VALUES ('19', '2');
INSERT INTO orderitems (order_id, item_id) VALUES ('19', '9');
INSERT INTO orderitems (order_id, item_id) VALUES ('20', '5');
INSERT INTO orderitems (order_id, item_id) VALUES ('20', '9');
INSERT INTO orderitems (order_id, item_id) VALUES ('20', '2');
INSERT INTO orderitems (order_id, item_id) VALUES ('20', '7');
INSERT INTO orderitems (order_id, item_id) VALUES ('21', '7');
INSERT INTO orderitems (order_id, item_id) VALUES ('21', '9');
INSERT INTO orderitems (order_id, item_id) VALUES ('21', '2');
INSERT INTO orderitems (order_id, item_id) VALUES ('21', '5');
INSERT INTO orderitems (order_id, item_id) VALUES ('22', '4');
INSERT INTO orderitems (order_id, item_id) VALUES ('22', '5');
INSERT INTO orderitems (order_id, item_id) VALUES ('22', '6');
INSERT INTO orderitems (order_id, item_id) VALUES ('23', '8');
INSERT INTO orderitems (order_id, item_id) VALUES ('23', '2');
INSERT INTO orderitems (order_id, item_id) VALUES ('24', '8');
INSERT INTO orderitems (order_id, item_id) VALUES ('24', '6');
INSERT INTO orderitems (order_id, item_id) VALUES ('24', '9');
INSERT INTO orderitems (order_id, item_id) VALUES ('25', '9');
INSERT INTO orderitems (order_id, item_id) VALUES ('25', '3');
INSERT INTO orderitems (order_id, item_id) VALUES ('25', '7');
INSERT INTO orderitems (order_id, item_id) VALUES ('25', '6');
INSERT INTO orderitems (order_id, item_id) VALUES ('26', '7');
INSERT INTO orderitems (order_id, item_id) VALUES ('26', '5');
INSERT INTO orderitems (order_id, item_id) VALUES ('26', '1');
INSERT INTO orderitems (order_id, item_id) VALUES ('26', '4');
INSERT INTO orderitems (order_id, item_id) VALUES ('27', '6');
INSERT INTO orderitems (order_id, item_id) VALUES ('27', '3');
INSERT INTO orderitems (order_id, item_id) VALUES ('27', '1');
INSERT INTO orderitems (order_id, item_id) VALUES ('27', '7');
INSERT INTO orderitems (order_id, item_id) VALUES ('28', '5');
INSERT INTO orderitems (order_id, item_id) VALUES ('28', '6');
INSERT INTO orderitems (order_id, item_id) VALUES ('29', '2');
INSERT INTO orderitems (order_id, item_id) VALUES ('29', '9');
INSERT INTO orderitems (order_id, item_id) VALUES ('29', '4');
INSERT INTO orderitems (order_id, item_id) VALUES ('30', '2');
INSERT INTO orderitems (order_id, item_id) VALUES ('30', '4');
INSERT INTO orderitems (order_id, item_id) VALUES ('30', '8');
INSERT INTO orderitems (order_id, item_id) VALUES ('31', '5');
INSERT INTO orderitems (order_id, item_id) VALUES ('31', '9');
INSERT INTO orderitems (order_id, item_id) VALUES ('31', '4');
INSERT INTO orderitems (order_id, item_id) VALUES ('31', '3');
INSERT INTO orderitems (order_id, item_id) VALUES ('32', '6');
INSERT INTO orderitems (order_id, item_id) VALUES ('32', '4');
INSERT INTO orderitems (order_id, item_id) VALUES ('32', '2');
INSERT INTO orderitems (order_id, item_id) VALUES ('32', '8');
INSERT INTO orderitems (order_id, item_id) VALUES ('33', '1');
INSERT INTO orderitems (order_id, item_id) VALUES ('33', '4');
INSERT INTO orderitems (order_id, item_id) VALUES ('33', '5');
INSERT INTO orderitems (order_id, item_id) VALUES ('34', '2');
INSERT INTO orderitems (order_id, item_id) VALUES ('34', '4');
INSERT INTO orderitems (order_id, item_id) VALUES ('34', '9');
INSERT INTO orderitems (order_id, item_id) VALUES ('34', '7');
INSERT INTO orderitems (order_id, item_id) VALUES ('35', '2');
INSERT INTO orderitems (order_id, item_id) VALUES ('35', '3');
INSERT INTO orderitems (order_id, item_id) VALUES ('35', '9');
INSERT INTO orderitems (order_id, item_id) VALUES ('35', '8');
INSERT INTO orderitems (order_id, item_id) VALUES ('36', '6');
INSERT INTO orderitems (order_id, item_id) VALUES ('36', '7');
INSERT INTO orderitems (order_id, item_id) VALUES ('36', '8');
INSERT INTO orderitems (order_id, item_id) VALUES ('37', '5');
INSERT INTO orderitems (order_id, item_id) VALUES ('37', '2');
INSERT INTO orderitems (order_id, item_id) VALUES ('37', '1');
INSERT INTO orderitems (order_id, item_id) VALUES ('38', '8');
INSERT INTO orderitems (order_id, item_id) VALUES ('38', '5');
INSERT INTO orderitems (order_id, item_id) VALUES ('38', '9');
INSERT INTO orderitems (order_id, item_id) VALUES ('38', '3');
INSERT INTO orderitems (order_id, item_id) VALUES ('39', '2');
INSERT INTO orderitems (order_id, item_id) VALUES ('39', '8');
INSERT INTO orderitems (order_id, item_id) VALUES ('39', '3');
INSERT INTO orderitems (order_id, item_id) VALUES ('40', '7');
INSERT INTO orderitems (order_id, item_id) VALUES ('40', '5');
INSERT INTO orderitems (order_id, item_id) VALUES ('40', '2');
INSERT INTO orderitems (order_id, item_id) VALUES ('41', '6');
INSERT INTO orderitems (order_id, item_id) VALUES ('41', '2');
INSERT INTO orderitems (order_id, item_id) VALUES ('41', '5');
INSERT INTO orderitems (order_id, item_id) VALUES ('42', '1');
INSERT INTO orderitems (order_id, item_id) VALUES ('42', '5');
INSERT INTO orderitems (order_id, item_id) VALUES ('42', '3');
INSERT INTO orderitems (order_id, item_id) VALUES ('42', '6');
INSERT INTO orderitems (order_id, item_id) VALUES ('43', '7');
INSERT INTO orderitems (order_id, item_id) VALUES ('43', '8');
INSERT INTO orderitems (order_id, item_id) VALUES ('43', '5');
INSERT INTO orderitems (order_id, item_id) VALUES ('44', '7');
INSERT INTO orderitems (order_id, item_id) VALUES ('44', '4');
INSERT INTO orderitems (order_id, item_id) VALUES ('44', '6');
INSERT INTO orderitems (order_id, item_id) VALUES ('44', '8');
INSERT INTO orderitems (order_id, item_id) VALUES ('45', '5');
INSERT INTO orderitems (order_id, item_id) VALUES ('45', '1');
INSERT INTO orderitems (order_id, item_id) VALUES ('45', '2');
INSERT INTO orderitems (order_id, item_id) VALUES ('46', '6');
INSERT INTO orderitems (order_id, item_id) VALUES ('46', '1');
INSERT INTO orderitems (order_id, item_id) VALUES ('47', '3');
INSERT INTO orderitems (order_id, item_id) VALUES ('47', '7');
INSERT INTO orderitems (order_id, item_id) VALUES ('47', '4');
INSERT INTO orderitems (order_id, item_id) VALUES ('48', '7');
INSERT INTO orderitems (order_id, item_id) VALUES ('48', '2');
INSERT INTO orderitems (order_id, item_id) VALUES ('48', '1');
INSERT INTO orderitems (order_id, item_id) VALUES ('48', '3');
INSERT INTO orderitems (order_id, item_id) VALUES ('49', '9');
INSERT INTO orderitems (order_id, item_id) VALUES ('49', '1');
INSERT INTO orderitems (order_id, item_id) VALUES ('49', '6');
INSERT INTO orderitems (order_id, item_id) VALUES ('50', '8');
INSERT INTO orderitems (order_id, item_id) VALUES ('50', '2');

INSERT INTO orders (customer_id, amount) VALUES (6, 63.35);
INSERT INTO orders (customer_id, amount) VALUES (5, 55.42);
INSERT INTO orders (customer_id, amount) VALUES (7, 91.7);
INSERT INTO orders (customer_id, amount) VALUES (4, 49.52);
INSERT INTO orders (customer_id, amount) VALUES (4, 4.81);
INSERT INTO orders (customer_id, amount) VALUES (5, 65.82);
INSERT INTO orders (customer_id, amount) VALUES (4, 25.91);
INSERT INTO orders (customer_id, amount) VALUES (8, 64.59);
INSERT INTO orders (customer_id, amount) VALUES (3, 68.89);
INSERT INTO orders (customer_id, amount) VALUES (7, 85.04);
INSERT INTO orders (customer_id, amount) VALUES (1, 19.67);
INSERT INTO orders (customer_id, amount) VALUES (6, 29.74);
INSERT INTO orders (customer_id, amount) VALUES (5, 61.56);
INSERT INTO orders (customer_id, amount) VALUES (6, 30.24);
INSERT INTO orders (customer_id, amount) VALUES (1, 5.67);
INSERT INTO orders (customer_id, amount) VALUES (9, 31.45);
INSERT INTO orders (customer_id, amount) VALUES (2, 1.69);
INSERT INTO orders (customer_id, amount) VALUES (10, 30.91);
INSERT INTO orders (customer_id, amount) VALUES (3, 97.11);
INSERT INTO orders (customer_id, amount) VALUES (2, 5.4);
INSERT INTO orders (customer_id, amount) VALUES (1, 55.97);
INSERT INTO orders (customer_id, amount) VALUES (4, 44.42);
INSERT INTO orders (customer_id, amount) VALUES (10, 80.77);
INSERT INTO orders (customer_id, amount) VALUES (7, 11.16);
INSERT INTO orders (customer_id, amount) VALUES (10, 26.37);
INSERT INTO orders (customer_id, amount) VALUES (1, 39.48);
INSERT INTO orders (customer_id, amount) VALUES (9, 13.33);
INSERT INTO orders (customer_id, amount) VALUES (4, 19.72);
INSERT INTO orders (customer_id, amount) VALUES (6, 73.06);
INSERT INTO orders (customer_id, amount) VALUES (10, 81.17);
INSERT INTO orders (customer_id, amount) VALUES (10, 56.66);
INSERT INTO orders (customer_id, amount) VALUES (4, 84.81);
INSERT INTO orders (customer_id, amount) VALUES (6, 36.94);
INSERT INTO orders (customer_id, amount) VALUES (6, 35.54);
INSERT INTO orders (customer_id, amount) VALUES (3, 94.27);
INSERT INTO orders (customer_id, amount) VALUES (5, 81.47);
INSERT INTO orders (customer_id, amount) VALUES (7, 86.86);
INSERT INTO orders (customer_id, amount) VALUES (4, 58.23);
INSERT INTO orders (customer_id, amount) VALUES (5, 52.57);
INSERT INTO orders (customer_id, amount) VALUES (10, 34.62);
INSERT INTO orders (customer_id, amount) VALUES (1, 35.28);
INSERT INTO orders (customer_id, amount) VALUES (3, 77.16);
INSERT INTO orders (customer_id, amount) VALUES (8, 37.08);
INSERT INTO orders (customer_id, amount) VALUES (8, 99.0);
INSERT INTO orders (customer_id, amount) VALUES (7, 37.9);
INSERT INTO orders (customer_id, amount) VALUES (10, 3.05);
INSERT INTO orders (customer_id, amount) VALUES (8, 31.07);
INSERT INTO orders (customer_id, amount) VALUES (7, 80.36);
INSERT INTO orders (customer_id, amount) VALUES (3, 50.1);
INSERT INTO orders (customer_id, amount) VALUES (5, 59.5);

select distinct firstName, lastName, items.name, items.description from customers inner join orders on
customers.id = orders.customer_id inner join orderitems on orders.id = orderitems.order_id inner join items on
items.id = orderitems.item_id
order by lastName, items.name;

