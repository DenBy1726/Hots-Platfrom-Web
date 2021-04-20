create sequence IF NOT EXISTS role_id_seq minvalue 0 start with 0;

create sequence IF NOT EXISTS user_details_id_seq minvalue 0 start with 0;

create sequence IF NOT EXISTS users_id_seq minvalue 0 start with 0;

CREATE TABLE IF NOT EXISTS role
(
  id INTEGER DEFAULT nextval('role_id_seq'::regclass) PRIMARY KEY NOT NULL,
  name VARCHAR(100) NOT NULL
);

CREATE TABLE IF NOT EXISTS user_details
(
  id INTEGER DEFAULT nextval('user_details_id_seq'::regclass) PRIMARY KEY NOT NULL,
  name VARCHAR(100),
  principal VARCHAR(100),
  image VARCHAR(1024)
);

CREATE TABLE IF NOT EXISTS user_role
(
  role INTEGER,
  id INTEGER
);

CREATE TABLE IF NOT EXISTS users
(
  id INTEGER DEFAULT nextval('users_id_seq'::regclass) PRIMARY KEY NOT NULL,
  details_id INTEGER,
  google_id VARCHAR(100),
  facebook_id VARCHAR(100),
  github_id VARCHAR(100),
  CONSTRAINT users_user_details_id_fk FOREIGN KEY (details_id) REFERENCES user_details (id)
);





INSERT INTO role (ID,NAME) VALUES (0,'ANONYMOUS');
INSERT INTO role (ID,NAME) VALUES (1,'ROLE_USER');
INSERT INTO role (ID,NAME) VALUES (2,'ROLE_ADMIN');