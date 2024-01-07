<template>
  <v-container class="mt-5">
    <v-row>
      <v-col cols="12" md="7">
        <h1 class="mb-5 text-center">待辦事項</h1>
        <!-- variant => 樣式 -->
        <!-- clearable => 有 X 號 -->
        <!-- counter => 數量輸入計數 -->
        <!-- maxlength => 限制輸入最大值 -->
        <!-- :rules => 顯示輸入時的規定 -->
        <!-- ref => 呼叫此元件的驗證function -->
        <!-- 才能執行click、keydown的事件 -->
        <!-- 點擊時用 onInputSubmit 驗證 -->
        <v-text-field
        variant="outlined" label="新增事項" v-model="newItem"
        placeholder="專題做了沒" clearable
        counter maxlength="20"
        :rules="rules"
        append-icon="mdi-plus"
        ref="newItemInput"
        @click:append="onInputSubmit"
        @keydown.enter="onInputSubmit"
        ></v-text-field>

        <v-table class="mt-5" fixed-header height="450px">
          <thead>
            <tr>
              <th>名稱</th>
              <th class="ps-6">操作</th>
              <th class="ps-6">順序</th>
            </tr>
          </thead>
          <tbody>
            <tr v-if="items.length === 0">
              <td colspan="2">目前沒有待辦事項</td>
            </tr>
            <tr v-for="item in items" :key="item.id">
              <td>
                <!-- 不是編輯時 -->
                <span v-show="!item.edit">{{ item.name }}</span>

                <!-- 編輯時 -->
                <v-text-field
                v-show="item.edit"
                v-model="item.model"
                :rules="rules"
                ref="editItemInput"
                @keydown.enter="onEditInputSubmit(item.id, i)"
                autofocus
                ></v-text-field>
              </td>
              <td>
                <template v-if="!item.edit">
                  <v-btn icon="mdi-pencil"
                    variant="text" color="green"
                    @click="editItem(item.id)"></v-btn>
                  <v-btn icon="mdi-delete"
                    variant="text" color="red"
                    @click="delItem(item.id)"></v-btn>
                </template>
                <template v-else>
                  <v-btn icon="mdi-check-underline"
                    variant="text" color="green"
                    @click="confirmEditItem(item.id)"></v-btn>
                  <v-btn icon="mdi-undo-variant"
                    variant="text" color="red"
                    @click="cancelEditItem(item.id)"></v-btn>
                </template>
              </td>
              <td>
                <v-btn icon="mdi-chevron-up" variant="text" @click="up(item.id)"></v-btn>
                <v-btn icon="mdi-chevron-down" variant="text" @click="down(item.id)"></v-btn>
              </td>
            </tr>
          </tbody>
        </v-table>
      </v-col>
      <v-col cols="1" class="d-none d-md-flex justify-center">
        <v-divider vertical></v-divider>
      </v-col>
      <v-col cols="12" class="d-flex d-md-none">
        <v-divider></v-divider>
      </v-col>
      <v-col cols="12" md="4">
        <h1 class="mb-5 text-center">已完成事項</h1>
        <v-table fixed-header height="550px">
          <thead>
            <tr>
              <th>名稱</th>
              <th class="ps-7">操作</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in finishedItems" :key="item.id">
              <td>{{ item.name }}</td>
              <td>
                <v-btn icon="mdi-delete" variant="text" color="red"
                @click="delFinishedItem(item.id)"></v-btn>
              </td>
            </tr>
            <tr v-if="finishedItems.length === 0">
              <td colspan="2">目前沒有已完成事項</td>
            </tr>
          </tbody>
        </v-table>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref } from 'vue'
import { useListStore } from '@/store/list'
import { storeToRefs } from 'pinia'

const list = useListStore()
const { items, finishedItems } = storeToRefs(list)
const { addItem, editItem, delItem, cancelEditItem, confirmEditItem, delFinishedItem } = list

const newItem = ref('')
const newItemInput = ref(null)
const editItemInput = ref([])

const onInputSubmit = async () => {
  // .validate() .reset() => v-text-field 內建function
  // .validate() 驗證 => 回傳驗證結果陣列，有錯誤才會顯示
  // 驗證沒有錯誤 => validate.length = 0
  const validate = await newItemInput.value.validate()
  if (validate.length > 0) return
  addItem(newItem.value)
  newItemInput.value.reset()
}

const onEditInputSubmit = async (id, i) => {
  const validate = await editItemInput.value[i].validate()
  if (validate.length > 0) return
  confirmEditItem(id)
}

const up = (itemId) => {
  const index = items.value.findIndex(item => item.id === itemId)
  if (index > 0) {
    // 交換位置
    [items.value[index], items.value[index - 1]] = [items.value[index - 1], items.value[index]]
  }
}

const down = (itemId) => {
  const index = items.value.findIndex(item => item.id === itemId)
  if (index < items.value.length - 1) {
    // 交換位置
    [items.value[index], items.value[index + 1]] = [items.value[index + 1], items.value[index]]
  }
}

// 驗證輸入內容是否符合
// '123' => string
// !'123' => false
// !!'123' => true
const rules = [
  value => !!value || '欄位必填',
  value => (value && value.length >= 3) || '少於3個字',
  value => value.length < 20 || '不可超過20個字'
]
</script>
