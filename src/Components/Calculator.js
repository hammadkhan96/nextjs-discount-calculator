'use client'
const Calculator = () => {
    return(<> 
      <h2>Discount Calculator</h2> 
      <div class="bg-white text-black no-underline">
        <div class="pb-2 mb-2">
          <label className="block">Original Price</label>
          <input class="w-40 border-2" id="price" /> 
        </div>
        <div class="pb-2 mb-2">
          <label className="block">Discount %</label>
          <input class="w-40 border-2" id="discount" />
        </div>
        <div class="pb-2 mb-2">
          <label className="block">Final Price</label>
          <input class="w-40 border-2" id="total" />
        </div>
        <div class="pb-2 mb-2">
          <label className="block">You Save</label>
          <input class="w-40 border-2" id="save" />
        </div>
        <div class="">
          <button class="rounded-full p-2 border-2 bg-blue">Calculator</button>
        </div>
      </div>
    </>)
}

export default Calculator