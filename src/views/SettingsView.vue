<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <div class="d-flex justify-space-between align-center mb-3">
          <div style="color: #212121;">讓我置中啦煩誒～</div>
          <h1>鈴聲設定</h1>
          <div class="mt-2 me-10 d-flex align-center text-button">
            <Toggle v-model="notify"
              on-label="On" off-label="Off"
              class="me-1 toggle-teal"></Toggle>提醒
          </div>
        </div>
      </v-col>
      <v-col cols="12">
        <v-table>
          <thead>
            <tr>
              <th>名稱</th>
              <th class="ps-5">試聽</th>
              <th class="ps-5">選擇</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="alarm in alarms" :key="alarm.id">
              <td>{{ alarm.name }}</td>
              <td>
                <audio :src="alarm.file" controls></audio>
              </td>
              <td>
                <v-radio-group v-model="selectedAlarm" class="d-flex align-center">
                  <v-radio :value="alarm.id"></v-radio>
                </v-radio-group>
              </td>
            </tr>
          </tbody>
        </v-table>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { useSettingsStore } from '@/store/settings'
import { storeToRefs } from 'pinia'
import Toggle from '@vueform/toggle'

const settings = useSettingsStore()
// 使用 storeToRefs() 解構 維持響應性
const { alarms, selectedAlarm, notify } = storeToRefs(settings)
</script>

<style src="@vueform/toggle/themes/default.css"></style>
<style>
.toggle-teal{
  --toggle-bg-on: #009688;
  --toggle-border-on: #009688;
}
</style>
