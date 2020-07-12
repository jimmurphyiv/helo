create table helo_user (
 id serial primary key,
 username varchar(24),
 password varchar(24),
 porfile_pic text
);

create table helo_posts (
 id serial primary key,
 title varchar(24),
 img text,
 content text,
 author_id integer
);