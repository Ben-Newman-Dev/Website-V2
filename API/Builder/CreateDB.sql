CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE TABLE users(
    id uuid PRIMARY KEY DEFAULT  uuid_generate_v4(),
    name VARCHAR(255) NOT NULL,
    "createdAt" TIMESTAMP NOT NULL DEFAULT now(),
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    website VARCHAR(255),
    permissions json NOT NULL
);

CREATE TABLE projects(
    id uuid PRIMARY KEY DEFAULT  uuid_generate_v4(),
    title VARCHAR(255) NOT NULL,
    "createdAt" TIMESTAMP NOT NULL DEFAULT now(),
    content json NOT NULL,
    "authorID" uuid NOT NULL,
    FOREIGN KEY ("authorID") REFERENCES users(id)
);

CREATE TABLE posts(
    id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    title VARCHAR(255) NOT NULL,
    "createdAt" TIMESTAMP NOT NULL DEFAULT now(),
    content json NOT NULL,
    published BOOLEAN NOT NULL DEFAULT false,
    "authorID" uuid NOT NULL,
    "projectID" uuid not null,
    FOREIGN KEY ("authorID") REFERENCES users(id),
    FOREIGN KEY ("projectID") REFERENCES projects(id)
);

CREATE TABLE comments(
    id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    title VARCHAR(255) NOT NULL,
    "createdAt" TIMESTAMP NOT NULL DEFAULT now(),
    hidden BOOLEAN DEFAULT false,
    content json NOT NULL,
    "authorID" uuid NOT NULL,
    "postID" uuid NOT NULL,
    FOREIGN KEY ("authorID") REFERENCES users(id),
    FOREIGN KEY ("postID") REFERENCES posts(id)
);