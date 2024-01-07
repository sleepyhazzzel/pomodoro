import { defineStore } from 'pinia'
export const useSettingsStore = defineStore('settings', {
  state: () => ({
    // 如果大括號內只有 return 物件的話
    // 可以在大括號外補上小括號，不用寫 return 多包一個大括號
    alarms: [
      { id: 1, name: '嘟噹嘟噹', file: new URL('@/assets/bell1.wav', import.meta.url).href },
      { id: 2, name: '叮噹噹叮咚咚', file: new URL('@/assets/bell2.wav', import.meta.url).href }
    ],
    selectedAlarm: 1,
    dialog: false,
    Toggle: true,
    notify: true
  }),
  getters: {
    selectedAlarmFile () {
      const i = this.alarms.findIndex(alarm => alarm.id === this.selectedAlarm)
      return this.alarms[i].file
    }
  },
  persist: {
    key: 'pomodoro-settings',
    // path => 用陣列寫出要儲存哪些到 localStorage
    paths: [
      'selectedAlarm', 'notify'
    ]
  }
})
