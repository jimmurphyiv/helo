create table helo_user (
 id serial primary key,
 username varchar(100),
 password varchar(100),
 email varchar(200),
 profile_pic text
);

create table helo_posts (
 id serial primary key,
 title varchar(24),
 img text,
 content text,
 author_id integer
);