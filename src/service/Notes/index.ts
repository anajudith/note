import supabaseApi from "../api";
import { createClient } from "@supabase/supabase-js";


const SUPABASE_URL = "https://iydrennoiyhajcaqiuao.supabase.co";
const SUPABASE_ANON_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml5ZHJlbm5vaXloYWpjYXFpdWFvIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTc1NDYzNjcsImV4cCI6MjAxMzEyMjM2N30.dkGeuDZSWbhAXoDPBacSL0u4Uhm6xsYerwNn49fq6sU";

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);


interface INotes {
  id: string;
  title: string;
  isCompleted: boolean;
}


class Notes {
  /**
   * @description Signing in
   * @returns {Promise<INotes[] | false>}
   */

  async getNotes(): Promise<INotes[] | false> {
    try {
      const { data } = await supabaseApi.from("note").select();

      if (data) {
        console.log(data);
        return data;
      } else {
        return false;
      }
    } catch (error) {
      return false;
    }
  }

  async postNotes(
    id: string,
    title: string,
    completed: boolean,
    image: string
  ): Promise<INotes[] | false> {
    try {
      const { data } = await supabaseApi
        .from("note")
        .insert({ id, title, completed, image });

      if (data) {
        console.log(data);
        return data;
      } else {
        return false;
      }
    } catch (error) {
      return false;
    }
  }

  async deleteNotes(id: string): Promise<INotes[] | false> {
    try {
      const { data } = await supabaseApi.from("note").delete().eq("id", id);

      if (data) {
        console.log(data);
        return data;
      } else {
        return false;
      }
    } catch (error) {
      return false;
    }
  }

  async updateNotes(
    noteId: string,
    completed: boolean
  ): Promise<INotes[] | false> {
    try {
      const { data } = await supabaseApi
        .from("note")
        .update({ isCompleted: completed })
        .eq("id", noteId);

      if (data) {
        console.log(data);
        return data;
      } else {
        return false;
      }
    } catch (error) {
      return false;
    }
  }
}

export default new Notes();
