create table hola_user (
 id serial primary key,
 username varchar(24),
 password varchar(24),
 porfile_pic text
);

create table hola_posts (
 id serial primary key,
 title varchar(24),
 img text,
 content text,
 author_id integer
);