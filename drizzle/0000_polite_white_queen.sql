CREATE TABLE `entries` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`kind` text NOT NULL,
	`data` text NOT NULL,
	`position` integer DEFAULT 0 NOT NULL,
	`visible` integer DEFAULT false NOT NULL
);
