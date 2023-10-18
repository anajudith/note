import supabaseApi from "../api";

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
    isCompleted: boolean
  ): Promise<INotes[] | false> {
    try {
      const { data } = await supabaseApi
        .from("note")
        .update({ completed: isCompleted })
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
