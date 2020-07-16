\c naturaltours;

DROP TABLE IF EXISTS adventure CASCADE;
DROP TABLE IF EXISTS features CASCADE;
DROP TABLE IF EXISTS main CASCADE;

CREATE TABLE adventure (
  id SERIAL PRIMARY KEY,
  adventure VARCHAR(50) NOT NULL,
  city VARCHAR(50) NOT NULL,
  country CHAR(3) NOT NULL,
  start_date VARCHAR(15) NOT NULL,
  days INT NOT NULL,
  difficulty VARCHAR(10) NOT NULL,
  stops INT NOT NULL,
  detail VARCHAR(100) NOT NULL,
  about TEXT NOT NULL,
  max_people INT NOT NULL,
  price INT NOT NULL,
  rating INT NOT NULL,
  image VARCHAR(200) NOT NULL
);

CREATE TABLE features (
  id SERIAL PRIMARY KEY,
  name VARCHAR(10) NOT NULL,
  source VARCHAR(100) NOT NULL,
  title VARCHAR(50) NOT NULL,
  text VARCHAR(150) NOT NULL
);

CREATE TABLE main (
  id SERIAL PRIMARY KEY,
  features_id INT NOT NULL,
  adventure_id INT NOT NULL
);

\COPY adventure (id,adventure,city,country,start_date, days, difficulty,stops,detail,about,max_people,price,rating, image) FROM './data.csv' DELIMITER ',' CSV HEADER;
\COPY features (id,name,source,title,text) FROM './feature.csv' DELIMITER ',' CSV HEADER;

ALTER TABLE main ADD CONSTRAINT features_fk FOREIGN KEY (features_id) REFERENCES features (id);
ALTER TABLE main ADD CONSTRAINT adventure_fk FOREIGN KEY (adventure_id) REFERENCES adventure (id);