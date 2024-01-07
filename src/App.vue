<template>
  <v-app>
    <v-app-bar image="./assets/star-sky-cut.jpg">
    <!-- 覆蓋漸層到 image 上 -->
    <template v-slot:image>
      <v-img
        gradient="to top right, rgba(19,84,122,.8), rgba(128,208,199,.8)">
      </v-img>
    </template>
      <v-container class="d-flex align-center">
        <v-app-bar-title>POMODORO</v-app-bar-title>
        <v-btn prepend-icon="mdi-home" to="/">首頁</v-btn>
        <v-btn prepend-icon="mdi-list-status" to="/list">事項</v-btn>
        <v-btn prepend-icon="mdi-cog" @click="dialog = true">設定</v-btn>
        <v-dialog v-model="dialog" width="700">
          <!-- dialog 通常用卡片呈現 -->
          <v-card>
            <v-card-text>
              <!-- 在 script 引入，插入設定頁面 -->
              <!-- 也可以寫成 <SettingsView /> -->
              <SettingsView></SettingsView>
            </v-card-text>
            <v-card-actions class="d-flex justify-center mb-5">
              <v-btn color="teal" variant="flat"
                size="large" class="px-5"
                @click="dialog = false">CLOSE</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-container>
    </v-app-bar>
    <v-main>
      <!-- 避免換頁時 計時器停下倒數 -->
      <!-- v-slot 插槽 -->
      <!-- { Component } => 代表目前該顯示的分頁 -->
      <!-- <keep-alive> 保持被包住的元件在換頁時不會銷毀 -->
      <!-- include="Homeiew" 指定只有 Homeview 不會銷毀 -->
      <!-- 若沒有 include 會全部分頁都快取，影響效能 -->
      <!-- <component> 動態元件，用 is 綁定元件 -->
      <router-view v-slot="{ Component }">
        <keep-alive include="Homeiew">
          <component :is="Component"></component>
        </keep-alive>
      </router-view>
    </v-main>
  </v-app>
</template>

<script setup>
import { useSettingsStore } from '@/store/settings'
import { storeToRefs } from 'pinia'
import SettingsView from './views/SettingsView.vue'

const settings = useSettingsStore()
const { dialog } = storeToRefs(settings)
</script>
