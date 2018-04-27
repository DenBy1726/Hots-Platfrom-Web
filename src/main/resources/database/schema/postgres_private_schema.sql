CREATE TABLE role
(
  id INTEGER DEFAULT nextval('role_id_seq'::regclass) PRIMARY KEY NOT NULL,
  name VARCHAR(100) NOT NULL
);

CREATE TABLE user_details
(
  id INTEGER DEFAULT nextval('user_details_id_seq'::regclass) PRIMARY KEY NOT NULL,
  name VARCHAR(100),
  principal VARCHAR(100),
  image VARCHAR(1024)
);

CREATE TABLE user_role
(
  role INTEGER,
  id INTEGER
);

CREATE TABLE users
(
  id INTEGER DEFAULT nextval('users_id_seq'::regclass) PRIMARY KEY NOT NULL,
  details_id INTEGER,
  google_id VARCHAR(100),
  facebook_id VARCHAR(100),
  github_id VARCHAR(100),
  CONSTRAINT users_user_details_id_fk FOREIGN KEY (details_id) REFERENCES user_details (id)
);