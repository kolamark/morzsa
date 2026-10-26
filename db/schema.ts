import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core';
export const entries = sqliteTable('entries', {
 id: integer('id').primaryKey({autoIncrement:true}),
 kind: text('kind').notNull(),
 data: text('data').notNull(),
 position: integer('position').notNull().default(0),
 visible: integer('visible',{mode:'boolean'}).notNull().default(false),
});
