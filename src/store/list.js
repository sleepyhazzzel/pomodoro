import { defineStore } from 'pinia'

const time = parseInt(import.meta.env.VITE_TIME)
const timeBreak = parseInt(import.meta.env.VITE_TIME_BREAK)

export const useListStore = defineStore('list', {
  state: () => ({
    items: [],
    id: 1,
    timeleft: time,
    break: false,
    finishedItems: [],
    currentItem: ''
  }),
  // actions => 放所有要修改的 state
  actions: {
    addItem (name) {
      this.items.push({
        id: this.id++,
        name,
        edit: false,
        model: name
      })
    },
    findIndexById (id) {
      return this.items.findIndex(item => item.id === id)
    },
    editItem (id) {
      const i = this.findIndexById(id)
      if (i < 0) return
      this.items[i].edit = true
    },
    delItem (id) {
      const i = this.findIndexById(id)
      if (i < 0) return
      this.items.splice(i, 1)
    },
    cancelEditItem (id) {
      const i = this.findIndexById(id)
      if (i < 0) return
      this.items[i].model = this.items[i].name
      this.items[i].edit = false
    },
    confirmEditItem (id) {
      const i = this.findIndexById(id)
      if (i < 0) return
      this.items[i].name = this.items[i].model
      this.items[i].edit = false
    },
    setCurrentItem () {
      // .shift() => 移除陣列內的第一個物件，回傳移除內容
      this.currentItem = this.break ? 'Break Time' : this.items.shift().name
    },
    countdown () {
      this.timeleft--
    },
    setFinishedItem () {
      if (!this.break) {
        this.finishedItems.push({
          name: this.currentItem,
          id: this.id++
        })
      }
      // 清空物件
      this.currentItem = ''
      // 判斷是否還有物件，有的話 time.break = true
      if (this.items.length > 0) {
        this.break = !this.break
      }
      // 判斷 time.break 是否為 true
      // true => 改為休息時間, false => 時間歸零
      this.timeleft = this.break ? timeBreak : time
    },
    delFinishedItem (id) {
      const i = this.finishedItems.findIndex(item => item.id === id)
      if (i < 0) return
      this.finishedItems.splice(i, 1)
    }
  },
  // persist => localStorage 儲存
  persist: {
    key: 'pomodoro-list'
  }
})
