# Script teste - Users
create table users (
  id serial primary key,
  username varchar(30) unique,
  password varchar(30),
  name varchar(50),
  email varchar(50)
);

insert into users (username, password, name, email) values
 ('robson', 'rbs', 'Robson Arthur', 'robson@rbs.com'),
 ('rodrigod', 'rdg', 'Rodrigo Dias', 'rodrigo@rbs.com'),
 ('tonin', 'tnn', 'Tonin Cana Brava', 'robson@rbs.com');
