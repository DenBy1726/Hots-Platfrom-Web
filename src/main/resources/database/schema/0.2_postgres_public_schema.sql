create sequence IF NOT EXISTS dataset_id_seq minvalue 0 start with 0;
create sequence IF NOT EXISTS difficulty_id_seq minvalue 0 start with 0;
create sequence IF NOT EXISTS franchise_id_seq minvalue 0 start with 0;
create sequence IF NOT EXISTS gamemode_id_seq minvalue 0 start with 0;
create sequence IF NOT EXISTS gaussian_id_seq minvalue 0 start with 0;
create sequence IF NOT EXISTS gaussianprobabilities_id_seq minvalue 0 start with 0;
create sequence IF NOT EXISTS hero_id_seq minvalue 0 start with 0;
create sequence IF NOT EXISTS heroclusters_id_seq minvalue 0 start with 0;
create sequence IF NOT EXISTS herodetails_id_seq minvalue 0 start with 0;
create sequence IF NOT EXISTS herogroup_id_seq minvalue 0 start with 0;
create sequence IF NOT EXISTS herosubgroup_id_seq minvalue 0 start with 0;
create sequence IF NOT EXISTS map_id_seq minvalue 0 start with 0;
create sequence IF NOT EXISTS matchuptable_id_seq minvalue 0 start with 0;
create sequence IF NOT EXISTS network_id_seq minvalue 0 start with 0;
create sequence IF NOT EXISTS resourcetype_id_seq minvalue 0 start with 0;
create sequence IF NOT EXISTS statistic_id_seq minvalue 0 start with 0;
create sequence IF NOT EXISTS statisticheroes_id_seq minvalue 0 start with 0;
create sequence IF NOT EXISTS statisticheroesavg_id_seq minvalue 0 start with 0;
create sequence IF NOT EXISTS statisticheroesmax_id_seq minvalue 0 start with 0;
create sequence IF NOT EXISTS statisticheroesmin_id_seq minvalue 0 start with 0;
create sequence IF NOT EXISTS trainingmeta_id_seq minvalue 0 start with 0;
create sequence IF NOT EXISTS trainingstate_id_seq minvalue 0 start with 0;

CREATE TABLE dataset
(
  filename VARCHAR(1000),
  date DATE,
  id BIGINT DEFAULT nextval('dataset_id_seq'::regclass) PRIMARY KEY NOT NULL
);
CREATE TABLE difficulty
(
  id BIGINT DEFAULT nextval('difficulty_id_seq'::regclass) PRIMARY KEY NOT NULL,
  name VARCHAR(100)
);
CREATE TABLE franchise
(
  id BIGINT DEFAULT nextval('franchise_id_seq'::regclass) PRIMARY KEY NOT NULL,
  name VARCHAR(100)
);
CREATE TABLE gamemode
(
  id BIGINT DEFAULT nextval('gamemode_id_seq'::regclass) PRIMARY KEY NOT NULL,
  name VARCHAR(100)
);
CREATE TABLE gaussian
(
  cluster INTEGER,
  probability INTEGER,
  loglikelihoods DOUBLE PRECISION,
  id BIGINT DEFAULT nextval('gaussian_id_seq'::regclass) PRIMARY KEY NOT NULL
);
CREATE TABLE gaussianprobabilities
(
  id BIGINT DEFAULT nextval('gaussianprobabilities_id_seq'::regclass) PRIMARY KEY NOT NULL,
  gaussian_id INTEGER,
  value DOUBLE PRECISION
);
CREATE TABLE hero
(
  id BIGINT DEFAULT nextval('hero_id_seq'::regclass) PRIMARY KEY NOT NULL,
  name VARCHAR(1000),
  _group INTEGER,
  subgroup INTEGER
);
CREATE TABLE heroclusters
(
  id BIGINT DEFAULT nextval('heroclusters_id_seq'::regclass) PRIMARY KEY NOT NULL,
  subgroupcluster INTEGER,
  cluster INTEGER,
  gaussian INTEGER
);
CREATE TABLE herodetails
(
  date DATE,
  price INTEGER,
  franchise INTEGER,
  info VARCHAR(1000),
  lore VARCHAR(1000),
  difficulty INTEGER,
  melee BOOLEAN,
  health INTEGER,
  healthregen DOUBLE PRECISION,
  resource INTEGER,
  resourcetype INTEGER,
  spellarmor INTEGER,
  physicalarmor INTEGER,
  attackspeed DOUBLE PRECISION,
  attackrange DOUBLE PRECISION,
  attackdamage INTEGER,
  imageurl VARCHAR(1000),
  iconurl VARCHAR(1000),
  detailsurl VARCHAR(1000),
  id BIGINT DEFAULT nextval('herodetails_id_seq'::regclass) PRIMARY KEY NOT NULL,
  title VARCHAR(1000)
);
CREATE TABLE herogroup
(
  id BIGINT DEFAULT nextval('herogroup_id_seq'::regclass) PRIMARY KEY NOT NULL,
  name VARCHAR(100)
);
CREATE TABLE herosubgroup
(
  id BIGINT DEFAULT nextval('herosubgroup_id_seq'::regclass) PRIMARY KEY NOT NULL,
  name VARCHAR(100)
);
CREATE TABLE map
(
  id BIGINT DEFAULT nextval('map_id_seq'::regclass) PRIMARY KEY NOT NULL,
  name VARCHAR(1000)
);
CREATE TABLE matchuptable
(
  id INTEGER DEFAULT nextval('matchuptable_id_seq'::regclass) PRIMARY KEY NOT NULL,
  win_with DOUBLE PRECISION,
  win_against DOUBLE PRECISION,
  hero_id1 INTEGER,
  hero_id2 INTEGER
);
CREATE TABLE network
(
  dataset_id BIGINT,
  state_id BIGINT,
  meta_id BIGINT,
  data JSONB,
  isbest BOOLEAN,
  id BIGINT DEFAULT nextval('network_id_seq'::regclass) PRIMARY KEY NOT NULL
);
CREATE TABLE resourcetype
(
  id BIGINT DEFAULT nextval('resourcetype_id_seq'::regclass) PRIMARY KEY NOT NULL,
  name VARCHAR(100)
);
CREATE TABLE statistic
(
  id INTEGER DEFAULT nextval('statistic_id_seq'::regclass) PRIMARY KEY NOT NULL,
  matches INTEGER,
  wins INTEGER,
  map_id INTEGER,
  hero_id INTEGER
);
CREATE TABLE statisticheroes
(
  id BIGINT DEFAULT nextval('statisticheroes_id_seq'::regclass) PRIMARY KEY NOT NULL,
  id_min INTEGER,
  id_max INTEGER,
  id_avg INTEGER
);
CREATE TABLE statisticheroesavg
(
  count INTEGER,
  assassinrating DOUBLE PRECISION,
  warriorrating DOUBLE PRECISION,
  supportrating DOUBLE PRECISION,
  specialistrating DOUBLE PRECISION,
  winrate DOUBLE PRECISION,
  killpersec DOUBLE PRECISION,
  assistpersec DOUBLE PRECISION,
  deathpersec DOUBLE PRECISION,
  dps DOUBLE PRECISION,
  hps DOUBLE PRECISION,
  sdps DOUBLE PRECISION,
  damagetakenpersec DOUBLE PRECISION,
  exppersec DOUBLE PRECISION,
  camptakenpersec DOUBLE PRECISION,
  sec DOUBLE PRECISION,
  replayid INTEGER,
  heroid INTEGER,
  id BIGINT DEFAULT nextval('statisticheroesavg_id_seq'::regclass) PRIMARY KEY NOT NULL
);
CREATE TABLE statisticheroesmax
(
  winrate DOUBLE PRECISION,
  killpersec DOUBLE PRECISION,
  assistpersec DOUBLE PRECISION,
  deathpersec DOUBLE PRECISION,
  dps DOUBLE PRECISION,
  hps DOUBLE PRECISION,
  sdps DOUBLE PRECISION,
  damagetakenpersec DOUBLE PRECISION,
  exppersec DOUBLE PRECISION,
  camptakenpersec DOUBLE PRECISION,
  sec DOUBLE PRECISION,
  replayid INTEGER,
  heroid INTEGER,
  id BIGINT DEFAULT nextval('statisticheroesmax_id_seq'::regclass) PRIMARY KEY NOT NULL
);
CREATE TABLE statisticheroesmin
(
  winrate DOUBLE PRECISION,
  killpersec DOUBLE PRECISION,
  assistpersec DOUBLE PRECISION,
  deathpersec DOUBLE PRECISION,
  dps DOUBLE PRECISION,
  hps DOUBLE PRECISION,
  sdps DOUBLE PRECISION,
  damagetakenpersec DOUBLE PRECISION,
  exppersec DOUBLE PRECISION,
  camptakenpersec DOUBLE PRECISION,
  sec DOUBLE PRECISION,
  replayid INTEGER,
  heroid INTEGER,
  id BIGINT DEFAULT nextval('statisticheroesmin_id_seq'::regclass) PRIMARY KEY NOT NULL
);
CREATE TABLE trainingmeta
(
  name VARCHAR(1000),
  clusterpath VARCHAR(1000),
  alias VARCHAR(1000),
  description VARCHAR(1000),
  id BIGINT DEFAULT nextval('trainingmeta_id_seq'::regclass) PRIMARY KEY NOT NULL
);
CREATE TABLE trainingstate
(
  error DOUBLE PRECISION,
  iteration INTEGER,
  validerror DOUBLE PRECISION,
  percent DOUBLE PRECISION,
  validpercent DOUBLE PRECISION,
  id BIGINT DEFAULT nextval('trainingstate_id_seq'::regclass) PRIMARY KEY NOT NULL
);

CREATE TABLE HeroWebExtension
(
    imageurl VARCHAR(1000),
    iconurl VARCHAR(1000),
    portraiturl VARCHAR(1000),
    detailsurl VARCHAR(1000),
    id BIGINT DEFAULT nextval('trainingstate_id_seq'::regclass) PRIMARY KEY NOT NULL
);

ALTER TABLE gaussianprobabilities ADD FOREIGN KEY (gaussian_id) REFERENCES gaussian (id);
ALTER TABLE hero ADD FOREIGN KEY (_group) REFERENCES herogroup (id);
ALTER TABLE hero ADD FOREIGN KEY (subgroup) REFERENCES herosubgroup (id);
ALTER TABLE heroclusters ADD FOREIGN KEY (id) REFERENCES hero (id);
ALTER TABLE heroclusters ADD FOREIGN KEY (subgroupcluster) REFERENCES herosubgroup (id);
ALTER TABLE heroclusters ADD FOREIGN KEY (gaussian) REFERENCES gaussian (id);
ALTER TABLE herodetails ADD FOREIGN KEY (franchise) REFERENCES franchise (id);
ALTER TABLE herodetails ADD FOREIGN KEY (difficulty) REFERENCES difficulty (id);
ALTER TABLE herodetails ADD FOREIGN KEY (resourcetype) REFERENCES resourcetype (id);
ALTER TABLE herodetails ADD FOREIGN KEY (id) REFERENCES hero (id);
ALTER TABLE matchuptable ADD FOREIGN KEY (hero_id1) REFERENCES hero (id);
ALTER TABLE matchuptable ADD FOREIGN KEY (hero_id2) REFERENCES hero (id);
ALTER TABLE network ADD FOREIGN KEY (dataset_id) REFERENCES dataset (id);
ALTER TABLE network ADD FOREIGN KEY (state_id) REFERENCES trainingstate (id);
ALTER TABLE network ADD FOREIGN KEY (meta_id) REFERENCES trainingmeta (id);
ALTER TABLE statistic ADD FOREIGN KEY (map_id) REFERENCES map (id);
ALTER TABLE statistic ADD FOREIGN KEY (hero_id) REFERENCES hero (id);
ALTER TABLE statisticheroes ADD FOREIGN KEY (id) REFERENCES hero (id);
ALTER TABLE statisticheroes ADD FOREIGN KEY (id_min) REFERENCES statisticheroesmin (id);
ALTER TABLE statisticheroes ADD FOREIGN KEY (id_max) REFERENCES statisticheroesmax (id);
ALTER TABLE statisticheroes ADD FOREIGN KEY (id_avg) REFERENCES statisticheroesavg (id);