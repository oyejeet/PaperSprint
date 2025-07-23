<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>PaperSprint - 15-Minute Document Delivery</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <style>
    .hidden {
      display: none;
    }
  </style>
</head>
<body class="bg-gray-100 font-sans">

  <div class="container mx-auto p-8">
    <header class="text-center mb-12">
      <h1 class="text-5xl font-bold text-blue-600">PaperSprint</h1>
      <p class="text-xl text-gray-600 mt-2">Your 15-Minute Document Print & Delivery Service</p>
    </header>

    <main class="grid grid-cols-1 md:grid-cols-2 gap-16 ">
      <div class="bg-white p-8 rounded-lg shadow-lg ">
        <h2 class="text-3xl font-bold mb-6 text-gray-800">Place Your Order</h2>

        <!-- File Upload -->

        <div class="mb-6">
          <label for="file-upload" class="block text-lg font-medium text-gray-700 mb-2">1. Upload Document</label>
          <div class="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
            <div class="space-y-1 text-center">
              <svg class="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
              <div class="flex text-sm text-gray-600">
                <label for="file-upload" class="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue-500">
                  <span>Upload a file</span>
                  <input id="file-upload" name="file-upload" type="file" class="sr-only">
                </label>
                <p class="pl-1">or drag and drop</p>
              </div>
              <p class="text-xs text-gray-500" id="file-name">PDF, DOCX, PNG, JPG up to 10MB</p>
            </div>
          </div>
        </div>

<!-- Configure Print options -->

        <div class="mb-6">
          <h3 class="text-lg font-medium text-gray-700 mb-2">2. Configure Print Options</h3>
          <div class="grid grid-cols-2 gap-4">
            <div>
              <label for="copies" class="block text-sm font-medium text-gray-700">Copies</label>
              <input type="number" id="copies" value="1" min="1" class="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500">
            </div>
            <div>
              <label for="binding" class="block text-sm font-medium text-gray-700">Binding</label>
              <select id="binding" class="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500">
                <option value="none">None</option>
                <option value="stapled">Stapled</option>
              </select>
            </div>
            <div>
              <label for="sided" class="block text-sm font-medium text-gray-700">Sided</label>
              <select id="sided" class="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500">
                <option value="single">Single-Sided</option>
                <option value="double">Double-Sided</option>
              </select>
            </div>
            <div>
              <label for="color" class="block text-sm font-medium text-gray-700">Color</label>
              <select id="color" class="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500">
                <option value="bw">Black & White</option>
                <option value="color">Color</option>
              </select>
            </div>
          </div>
        </div>

<!-- Place Order -->

        <div>
          <h3 class="text-lg font-medium text-gray-700 mb-2">3. Place Order</h3>
          <div class="bg-gray-50 p-4 rounded-lg flex items-center justify-between">
            <p class="text-lg">Estimated Cost: <span id="cost" class="font-bold text-gray-800">$0.15</span></p>
            <button id="place-order-btn" class="bg-blue-600 text-white font-bold py-2 px-6 rounded-lg hover:bg-blue-700 transition duration-300 disabled:bg-gray-400" disabled>
              Place Order
            </button>
          </div>
        </div>
      </div>

      <div id="status-section" class="bg-white p-8 rounded-lg shadow-lg hidden">
        <h2 class="text-3xl font-bold mb-6 text-gray-800">Order Status</h2>
        <div class="text-center">
          <p class="text-lg text-gray-600">Estimated Delivery In:</p>
          <p id="countdown" class="text-6xl font-bold text-blue-600 my-4">15:00</p>
        </div>
        <div class="mt-8">
          <div class="relative">
            <div class="overflow-hidden h-2 mb-4 text-xs flex rounded bg-blue-200">
              <div id="progress-bar" style="width: 10%" class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500 transition-all duration-500"></div>
            </div>
            <div class="flex justify-between text-sm text-gray-600">
              <span id="status-printing" class="font-bold">Printing</span>
              <span id="status-pickup">Picked Up</span>
              <span id="status-enroute">En Route</span>
              <span id="status-delivered">Delivered</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>

<script src="script.js"></script>

</body>
</html>