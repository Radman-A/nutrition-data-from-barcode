
const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());

app.get('/api/food/:barcode', async (req, res) => {
  const barcode = req.params.barcode;
  const url = `https://world.openfoodfacts.org/api/v0/product/${barcode}.json`;

  try {
    const response = await axios.get(url);
    const data = response.data;

    if (data.status === 0) {
      return res.status(404).json({ error: 'Product not found' });
    }

    const product = data.product;
    const nutrition = product.nutriments;

    const nutritionInfo = {
      product_name: product.product_name,
      calories: nutrition['energy-kcal_100g'],
      protein: nutrition.proteins_100g,
      carbs: nutrition.carbohydrates_100g,
      fat: nutrition.fat_100g,
    };

    res.json(nutritionInfo);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching data' });
  }
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
