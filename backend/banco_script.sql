
drop table public.userz;
drop table public.postit;
create table public.userz (
        id_user serial primary key, 
        nm_user varchar(40),
        nm_email varchar(40),
        nm_password varchar(40)
);

create table public.postit (
        id_postit serial primary key, 
        id_user integer,
        nm_title varchar(40),
        nm_body varchar(2000),
        dt_create date,
        dt_modified date,
        FOREIGN KEY (id_user) REFERENCES userz
);