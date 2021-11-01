import * as url from "url";
import { createClient } from "@supabase/supabase-js";

export default async (req, res) => {
  const queryObject = url.parse(req.url, true).query;
  const { SUPABASE_URL, SUPABASE_KEY } = process.env;
  try {
    // Initialize Supabase
    const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

    let response;
    const { email } = queryObject;
    if (email) {
      // Save user to Supabase database
      const { data, error } = await supabase.from("Subscribers").upsert({
        email: email,
      });
      response = data;
    }
    res.writeHead(200, { "Content-Type": "application/json" });
    res.write(JSON.stringify(response));
    res.end();
  } catch (error) {
    console.log(error);
    res.writeHead(500, { "Content-Type": "application/json" });
    res.write(JSON.stringify(error));
    res.end();
  }
};
