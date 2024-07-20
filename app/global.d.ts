import { Database as DB } from "@/lib/database.types";


type Tweet = DB['public']['Tables']['tweets']['Row']
type Profile = DB['public']['Tables']['profiles']['Row']


//Create a global type for the Database so that we don't have to import it everywhere
declare global {
    type Database = DB;
    type TweetWithAuthor = Tweet & {
        author: Profile;
        likes: number;
        user_has_liked_tweet: boolean;  
      }
}