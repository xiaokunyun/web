import { defineStore } from 'pinia'
import { List } from "@/api/list";
export const useListStore = defineStore({
    id: 'list',
    state: () => ({
        list: []
    }),
    getters: {
        // doubleCount: (state) => state.list * 2
    },
    actions: {
          getlist(){
             List().then(res=>[
                this.list=res.data.result
             ])
            
      }
  }
})
