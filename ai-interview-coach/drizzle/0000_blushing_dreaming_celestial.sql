CREATE TABLE IF NOT EXISTS "mockinterview" (
	"id" serial PRIMARY KEY NOT NULL,
	"jsonmockresp" text NOT NULL,
	"jobposition" varchar(1000) NOT NULL,
	"jobdescription" varchar(1000) NOT NULL,
	"jobexp" varchar(255) NOT NULL,
	"createdby" varchar(255) NOT NULL,
	"createdat" timestamp DEFAULT now(),
	"mockid" varchar(255) NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "userAnswers" (
	"id" serial PRIMARY KEY NOT NULL,
	"mockid" varchar NOT NULL,
	"question" varchar NOT NULL,
	"correctanswer" varchar,
	"useranswer" text,
	"feedback" text,
	"rating" varchar,
	"userEmail" varchar,
	"createdat" varchar
);
