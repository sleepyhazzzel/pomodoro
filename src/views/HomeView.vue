<template>
  <v-container class="h-100 d-flex justify-center align-center">
    <!-- v-progress-circular 設定 -->
    <!-- rotate => 起始位置 -->
    <!-- model-value => 目前顏色填滿位置
          100 是整個圓、50是一半 -->
    <v-progress-circular
      :rotate="360"
      :size="500"
      :width="20"
      :model-value="currentSec"
      color="teal"
      class="text-center">
      <v-row>
        <v-col cols="12">
          <h1 class="mt-3">{{ currentText }}</h1>
          <h1 class="my-3">{{ currentTime }}</h1>
          <v-btn
          variant="text" icon="mdi-play"
          :disabled="status === STATUS.COUNTING || (currentItem.length === 0 && items.length === 0)"
          @click="startTimer"
          ></v-btn>
          <v-btn
          variant="text" icon="mdi-pause"
          :disabled="status !== STATUS.COUNTING"
          @click="pauseTimer"
          ></v-btn>
          <v-btn
          variant="text" icon="mdi-skip-next"
          :disabled="currentItem.length === 0"
          @click="finishTimer(false)"
          ></v-btn>
        </v-col>
      </v-row>
    </v-progress-circular>
  </v-container>
</template>

<script setup>
import { useListStore } from '@/store/list'
import { useSettingsStore } from '@/store/settings'
import { storeToRefs } from 'pinia'
import { ref, computed } from 'vue'
import { useWebNotification } from '@vueuse/core'

const list = useListStore()
const { currentItem, items, timeleft } = storeToRefs(list)
const { setCurrentItem, countdown, setFinishedItem } = list

const settings = useSettingsStore()
const { selectedAlarmFile, notify } = storeToRefs(settings)

const STATUS = {
  STOP: 0,
  COUNTING: 1,
  PAUSE: 2
}

const status = ref(STATUS.STOP)

let timer = 0
const startTimer = () => {
  if (status.value === STATUS.STOP && items.value.length > 0) {
    setCurrentItem()
  }

  status.value = STATUS.COUNTING

  timer = setInterval(() => {
    countdown()
    if (timeleft.value === 0) {
      finishTimer(true)
    }
  }, 1000)
}

const pauseTimer = () => {
  status.value = STATUS.PAUSE
  clearInterval(timer)
}

const finishTimer = (finish) => {
  clearInterval(timer)
  status.value = STATUS.STOP

  const audio = new Audio()
  audio.src = selectedAlarmFile.value

  // 判定是否為點擊 skip 結束
  if (finish) {
    audio.play()
  }

  if (notify.value) {
    const { show, isSupported } = useWebNotification({
      title: '事項完成',
      body: currentItem.value,
      // macOS不支援 icon
      icon: new URL('@/assets/alarm.png', import.meta.url).href
    })
    if (isSupported.value) {
      show()
    }
  }

  setFinishedItem()

  if (items.value.length > 0) {
    startTimer()
  }
}

const currentText = computed(() => {
  if (currentItem.value.length > 0) {
    return currentItem.value
  } else if (items.value.length > 0) {
    return '點擊開始'
  } else {
    return '沒有事項'
  }
})

const currentTime = computed(() => {
  const min = Math.floor(timeleft.value / 60).toString().padStart(2, '0')
  const sec = (timeleft.value % 60).toString().padStart(2, '0')
  return min + ':' + sec
})

const currentSec = computed(() => {
  let sec = (timeleft.value % 60)
  sec = (sec / 60) * 100
  return sec
})
</script>
