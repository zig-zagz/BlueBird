import { Database as DB } from "@/lib/database.types";

//Create a global type for the Database so that we don't have to import it everywhere
declare global {
    type Database = DB;
}