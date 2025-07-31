<template>
  <div class="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
    <h1 class="text-2xl font-bold text-center text-gray-900">Food Barcode Scanner</h1>
    <form @submit.prevent="fetchNutritionInfo">
      <div>
        <label for="barcode" class="text-sm font-medium text-gray-700">Barcode</label>
        <input
          id="barcode"
          v-model="barcode"
          type="text"
          required
          class="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          placeholder="Enter food barcode"
        />
      </div>
      <button
        type="submit"
        class="w-full px-4 py-2 mt-6 font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Get Nutrition Info
      </button>
    </form>
    <div v-if="error" class="mt-4 text-red-600">
      {{ error }}
    </div>
    <div v-if="nutritionInfo" class="mt-6">
      <h2 class="text-xl font-semibold text-gray-900">{{ nutritionInfo.product_name }}</h2>
      <ul class="mt-2 text-gray-700">
        <li>Calories: {{ nutritionInfo.calories }} kcal</li>
        <li>Protein: {{ nutritionInfo.protein }} g</li>
        <li>Carbs: {{ nutritionInfo.carbs }} g</li>
        <li>Fat: {{ nutritionInfo.fat }} g</li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios';

const barcode = ref('');
const nutritionInfo = ref(null);
const error = ref(null);

const fetchNutritionInfo = async () => {
  if (!barcode.value.trim()) {
    error.value = 'Please enter a barcode.';
    return;
  }
  error.value = null;
  nutritionInfo.value = null;
  try {
    const response = await axios.get(`http://localhost:3000/api/food/${barcode.value}`);
    if (response.data.error) {
      error.value = response.data.error;
    } else {
      nutritionInfo.value = response.data;
    }
  } catch (err) {
    error.value = 'Error fetching data from the server.';
  }
};
</script>
